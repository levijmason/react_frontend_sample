import { Link } from "react-router-dom";
import { Container } from "reactstrap";

const NotFound = () => {
  const linkText = "<- Head back to the homepage";
  return (
    <Container>
      <br />
      <h2>Oops!</h2>
      <p>It looks like the page you're looking for got lost...</p>
      <Link to="/">{linkText}</Link>
    </Container>
  );
};

export default NotFound;
