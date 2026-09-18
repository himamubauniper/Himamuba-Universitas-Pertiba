import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import News from "./pages/News";
import Activities from "./pages/Activities";
import About from "./pages/About";
import NewsDetail from "./pages/NewsDetail";

function App() {
  return (
    <BrowserRouter basename="/Himamuba-Universitas-Pertiba/">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/berita" element={<News />} />
        <Route path="/kegiatan" element={<Activities />} />
        <Route path="/tentang" element={<About />} />
        <Route path="/berita/:id" element={<NewsDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
