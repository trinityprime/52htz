import Content from "./components/Content";
import Header from "./components/Header";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <div className="sticky top-0 z-50">
        <Navbar />
      </div>

      <div>
        <Header />
      </div>

      <div>
        <Content />
      </div>
    </>
  );
}

export default App;
