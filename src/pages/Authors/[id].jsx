import { useParams } from "react-router-dom";
import { Container } from "reactstrap";
import { PostList } from "./../../components/PostList";
import { Loading } from "./../../components/Loading";
import useFetch from "../../helpers/useFetch";

const AuthorId = () => {
  const params = useParams();
  const id = params.authorId;

  const { data, isLoading } = useFetch(
    "https://jsonplaceholder.typicode.com/users/" + id
  );

  if (isLoading) {
    return <Loading />;
  }

  return (
    <Container>
      <br />
      <h2>Posts by {data.name}</h2>
      <br />
      <Listing user={data} />
    </Container>
  );
};

export default AuthorId;

function Listing(user) {
  const url =
    "https://jsonplaceholder.typicode.com/posts?userId=" + user.user.id;
  const { data, isLoading } = useFetch(url);

  if (isLoading) {
    return <></>;
  }
  return <PostList posts={data} />;
}
