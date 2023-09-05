import Content from "./components/Content";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Contact from "./components/Contact";
import More from "./components/More";
import { Route, Routes, useLocation } from "react-router-dom";

function App() {
  return (
    <>
      <div className="sticky top-0 z-50">
        <Navbar />
      </div>
        <Routes location={location} key={location.pathname}>
          <Route index element={<Header />} />
          <Route path="/home" element={<Header />} />
          <Route path="/about" element={<Content />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/more" element={<More />} />
        </Routes>
    </>
  );
}

export default App;
