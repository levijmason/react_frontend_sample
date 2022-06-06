import { Container } from "reactstrap";
import { AuthorCard } from "../../components/AuthorCard";
import { Loading } from "../../components/Loading";
import useFetch from "../../helpers/useFetch";

const Authors = () => {
  const { data, isLoading } = useFetch(
    "https://jsonplaceholder.typicode.com/users"
  );

  if (isLoading) {
    return <Loading />;
  }

  return (
    <Container>
      <br />
      <h2>Authors</h2>
      <br />

      {data.map((data) => (
        <>
          <AuthorCard user={data} key={data.id} />
          <br />
        </>
      ))}
    </Container>
  );
};

export default Authors;
