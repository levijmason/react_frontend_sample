import { Link } from "react-router-dom";
import { Card, CardBody, CardTitle } from "reactstrap";
import useFetch from "../helpers/useFetch";

export function AuthorCard(user) {
  const url =
    "https://jsonplaceholder.typicode.com/posts?userId=" + user.user.id;
  const { data, isLoading } = useFetch(url);

  if (isLoading) {
    return <></>;
  }

  return (
    <Card>
      <CardBody>
        <CardTitle>
          <Link to={`/authors/${user.user.id}`}>
            <h4>{user.user.name}</h4>
          </Link>
        </CardTitle>
        <p>{data[0].title}</p>
      </CardBody>
    </Card>
  );
}
