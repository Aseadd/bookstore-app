import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { addBooksToApi } from '../redux/books/books';

function BookAdd() {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const dispatch = useDispatch();

  const onTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const onAuthorChange = (e) => {
    setAuthor(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && author) {
      const newBook = {
        id: uuidv4(),
        title,
        author,
        category: 'Action',
      };
      dispatch(addBooksToApi(newBook));
      setTitle('');
      setAuthor('');
    } else {
      const error = document.querySelector('.error');
      error.classList.add('show');
      setTimeout(() => {
        error.classList.remove('show');
      }, 3000);
    }
  };

  return (
    <section className="add-book">
      <h1 className="add-book-title">ADD NEW BOOK</h1>
      <form className="add-book-form">
        <input
          type="text"
          className="title"
          id="form-title"
          placeholder="Book title"
          value={title}
          onChange={onTitleChange}
          onBlur={onTitleChange}
        />
        <input
          type="text"
          className="author"
          id="form-author"
          placeholder="Author"
          value={author}
          onChange={onAuthorChange}
          onBlur={onAuthorChange}
        />
        <button type="submit" className="submit" onClick={handleSubmit}>
          ADD BOOK
        </button>
      </form>
      <div className="error">Please fill all fields</div>
    </section>
  );
}

export default BookAdd;
