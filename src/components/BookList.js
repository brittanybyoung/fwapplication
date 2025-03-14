import { BOOKS } from '../data/bookData';
import React from 'react'
import { Link } from 'react-router-dom';

const BookList = () => {
  return (
    <div className="book-list">
      {BOOKS.map((book) => (
        <Link to= {`/books/${book.id}`} key={book.id} className="book-item">
          <img src={book.image} alt={book.title} className="book-cover" />
        </Link>
      ))}
    </div>
  )
}

export default BookList

