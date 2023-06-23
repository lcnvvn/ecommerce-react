import { Container, Row } from "react-bootstrap";

export const ItemList = ({ greeting }) => {
  return (
    <Container>
      <Row>
        <p className="text-center ">{greeting}</p>
      </Row>
    </Container>
  );
};
