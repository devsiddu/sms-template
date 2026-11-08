import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import PublicLayout from "./pages/layouts/PublicLayout";
import About from "./pages/About";
import News from "./pages/News";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import NewsDetail from "./pages/NewsDetail";

const App = () => {
  return (
    <>
      <Routes>
        <Route element={<PublicLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/news" element={<News />} />
          <Route path="/news/:id" element={<NewsDetail />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
