import React from 'react';
import { Card, CardBody, CardTitle, CardText, CardImg } from 'reactstrap';
import { Link } from 'react-router-dom';
import { BOOKS } from '../data/bookData';

const BookDetailItem = ({ book }) => {
    if (!book) {
        return <div>Book not found</div>;
    }

    return (
        <Card className="mb-4">
            <CardImg 
                top 
                width="100%" 
                src={book.image} 
                alt={book.title}
                className="book-image"
            />
            <CardBody>
                <CardTitle tag="h3">{book.title}</CardTitle>
                <CardText>
                    <strong>Author:</strong> {book.author}
                </CardText>
                <CardText>
                    <strong>Published:</strong> {book.publishedDate}
                </CardText>
                <a 
                    href={book.purchaseLink} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="btn btn-primary"
                >
                    Purchase Book
                </a>
            </CardBody>
        </Card>
    );
};

export default BookDetailItem; 