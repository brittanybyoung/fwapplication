import { Card, CardBody, CardTitle, CardText, Button, CardImg } from 'reactstrap';
import { useNavigate } from 'react-router-dom';
import { BOOKS } from '../data/bookData';
import { Container, Row, Col } from 'reactstrap';

function TheoryItem({ theory }) {
    const navigate = useNavigate();
    const book = BOOKS.find(book => book.title === theory.bookTitle);

    if (!theory) {
        return <div>Theory not found</div>;
    }

    return (
        <Container>
            <Row>
                <Col>
                    <Card className="mt-4 mb-4">
                        <Row className="g-0align-items-center">
                            <Col xs={4} md={3} lg={2}>
                                <CardImg
                                    top
                                    src={book.image}
                                    alt={book.title}
                                    className="book-image"
                                />
                            </Col>
                            <Col xs={8} md={9} lg={10}>
                                <CardBody>
                                    <CardTitle tag="h5">{theory.bookTitle}</CardTitle>
                                    <CardText>{theory.bookTheory.substring(0, 50)}...</CardText>
                                    <CardText>Favorite Character: {theory.favoriteCharacter}</CardText>
                                    <CardText>
                                        <small className="text-muted">Posted by: {theory.username}</small>
                                    </CardText>
                                    <Button variant="primary" onClick={() => navigate(`/theories/${theory.id}`)}>Read the full theory</Button>
                                </CardBody>
                            </Col>
                        </Row>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default TheoryItem;