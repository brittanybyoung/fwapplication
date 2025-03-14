import React from 'react';
import { Card, CardBody, CardTitle, CardText } from 'reactstrap';

const BookInfo = ({ book }) => {
    if (!book) return null;

    return (
        <Card className="mb-4">
            <CardBody>
                <CardTitle tag="h4">Book Information</CardTitle>
                <CardText>
                    <strong>ISBN:</strong> {book.isbn}
                </CardText>
                <CardText>
                    <strong>Page Count:</strong> {book.pageCount}
                </CardText>
                <CardText>
                    <strong>Published Date:</strong> {book.publishedDate}
                </CardText>
            </CardBody>
        </Card>
    );
};

export default BookInfo; 