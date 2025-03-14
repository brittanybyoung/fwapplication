import React from 'react';
import { useParams } from 'react-router-dom';
import { BOOKS } from '../data/bookData';
import { THEORIES } from '../data/theoryData';
import BookDetailItem from '../components/BookDetailItem';
import BookInfo from '../components/BookInfo';
import BookDescription from '../components/BookDescription';
import TheoryItem from '../theories/TheoryItem';

const BookDetailPage = () => {
    const { id } = useParams();
    const book = BOOKS.find(book => book.id === parseInt(id));
    const bookTheories = THEORIES.filter(theory => theory.bookTitle === book.title);

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-4">
                    <BookDetailItem book={book} />
                </div>
                <div className="col-md-8">
                    <BookInfo book={book} />
                    <BookDescription book={book} />
                    <div className="mt-6">
                        <h3>Fan Theories</h3>
                        {bookTheories.length > 0 ? (
                            bookTheories.map(theory => (
                                <TheoryItem key={theory.id} theory={theory} />
                            ))
                        ) : (
                            <p>No theories yet for this book. Be the first to share your theory!</p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookDetailPage; 