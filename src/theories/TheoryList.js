import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import TheoryItem from './TheoryItem';
import { THEORIES } from '../data/theoryData';
import Dropdown from 'react-bootstrap/Dropdown';
import { useState, useEffect } from 'react';


const TheoryList = () => {
    const [selectedBook, setSelectedBook] = useState('');
    const [filteredTheories, setFilteredTheories] = useState(THEORIES);

    useEffect(() => {
        if (selectedBook) {
            setFilteredTheories(THEORIES.filter((theory) => theory.bookTitle === selectedBook));
        } else {
            setFilteredTheories(THEORIES);
        }
    }, [selectedBook]);

    const uniqueBookTitles = [...new Set(THEORIES.map((theory) => theory.bookTitle))];

    return (
        <Container>
            <Row>
                <Col>
                    <h2>Book Theories</h2>
                    <p>Here are all the theories submitted so far!</p>
                    <Dropdown>
                        <Dropdown.Toggle variant="secondary" className="filter-button">Filter by Book Title</Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item onClick={() => setSelectedBook('')}>All</Dropdown.Item>
                            {uniqueBookTitles.map((bookTitle) => (
                                <Dropdown.Item key={bookTitle} onClick={() => setSelectedBook(bookTitle)}>{bookTitle}</Dropdown.Item>
                            ))}
                        </Dropdown.Menu>
                    </Dropdown>
                    {filteredTheories.map((theory) => (
                        <TheoryItem key={theory.id} theory={theory} />
                    ))}
                </Col>
            </Row>
        </Container>
    );
};

export default TheoryList;
