import NavBar from "./components/layouts/NavBar";
import { BrowserRouter } from "react-router-dom";
import Footer from "./components/layouts/Footer";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="flex flex-col justify-between h-screen">
          <NavBar />
          <main className="conatiner mx-auto px-3 pb-12">main content</main>
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
