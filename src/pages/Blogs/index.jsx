import { Container } from "reactstrap";
import { PostList } from "./../../components/PostList";
import { Loading } from "./../../components/Loading";
import useFetch from "../../helpers/useFetch";

const Blogs = () => {
  const { data, isLoading } = useFetch(
    "https://jsonplaceholder.typicode.com/posts"
  );

  if (isLoading) {
    return <Loading />;
  }

  return (
    <Container>
      <br />
      <h2>All Posts</h2>
      <br />

      <PostList posts={data} />
    </Container>
  );
};

export default Blogs;
