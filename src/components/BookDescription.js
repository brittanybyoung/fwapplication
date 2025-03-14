import React, { useState } from 'react';
import { Card, CardBody, CardTitle, CardText, Button } from 'reactstrap';
import { BOOKS } from "../data/bookData";
import { Container, Row, Col } from "reactstrap";
import { useParams } from "react-router-dom";

const BookDescription = () => {
    const params = useParams();
    const book = BOOKS.find((book) => book.id === parseInt(params.id));
    const [isOpen, setIsOpen] = useState(false);

    if (!book) return null;

    return (
        <Container>
            <Row>
                    <Card className="mb-4">
                        <CardBody>
                            <CardTitle tag="h4">Description</CardTitle>
                            <CardText>
                                {isOpen ? book.description : `${book.description.substring(0, 150)}...`}
                            </CardText>
                            <Button 
                                color="primary" 
                                onClick={() => setIsOpen(!isOpen)}
                                className="mt-2"
                            >
                                {isOpen ? 'Show Less' : 'Read More'}
                            </Button>
                        </CardBody>
                    </Card>
            </Row>
        </Container>
    );
};

export default BookDescription;