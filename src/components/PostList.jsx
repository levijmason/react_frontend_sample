import { Link } from "react-router-dom";
import { Card, CardBody, CardTitle } from "reactstrap";

export function PostList({ posts }) {
  return (
    <>
      {posts.map((post) => (
        <div key={post.id}>
          <Card>
            <CardBody>
              <CardTitle>
                <Link to={`/blogs/${post.id}`}>
                  <h4>{post.title}</h4>
                </Link>
              </CardTitle>

              <p>{post.body}</p>
            </CardBody>
          </Card>
          <br />
        </div>
      ))}
    </>
  );
}
