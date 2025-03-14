import { Container, Row, Col } from "reactstrap";
import { useParams } from "react-router-dom";
import { THEORIES } from "../data/theoryData";
import { BOOKS } from "../data/bookData";
import BookDetailItem from "../components/BookDetailItem";

function TheoryDetailsPage() {
    const { id } = useParams();
    const book = BOOKS.find(book => book.id === parseInt(id));
    const theory = THEORIES.find(theory => theory.id === parseInt(id));

    if (!theory) {
        return <div>Theory not found</div>;
    }
    return (
        <Container className="mt-5">
            <Row>
                <Col sm="3">
                    <BookDetailItem book={book} />
                </Col>
                <Col sm="9">
                    <h2>{book.title}</h2>
                    <p>{theory.bookTheory}</p>
                    <p>
                        <small className="text-muted">Posted by: {theory.username}</small>
                    </p>
                </Col>
            </Row>
            <Row>
                <Col>
                    <h3>Comments</h3>
                </Col>
            </Row>
        </Container>
    );
}

export default TheoryDetailsPage;