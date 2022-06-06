import { Container, Spinner } from "reactstrap";

export function Loading() {
  return (
    <Container>
      <Spinner color="primary" />
    </Container>
  );
}
