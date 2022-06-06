import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./pages/Layout";
import Blogs from "./pages/Blogs/index";
import BlogId from "./pages/Blogs/[id]";
import Authors from "./pages/Authors/index";
import AuthorId from "./pages/Authors/[id]";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Authors />} />
          <Route path="authors/:authorId" element={<AuthorId />} />

          <Route path="blogs">
            <Route index element={<Blogs />} />
            <Route path=":blogId" element={<BlogId />} />
          </Route>

          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
