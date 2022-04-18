import { useParams } from "react-router-dom";
import { Container } from "reactstrap";
import { Loading } from "../../components/Loading";
import useFetch from "../../helpers/useFetch";

const BlogId = () => {
  const params = useParams();
  const id = params.blogId;

  const { data, isLoading } = useFetch(
    "https://jsonplaceholder.typicode.com/posts/" + id
  );

  if (isLoading) {
    return <Loading />;
  }

  return (
    <Container>
      <br />
      <h2>{data.title}</h2>
      <p>{data.body}</p>
    </Container>
  );
};

export default BlogId;
