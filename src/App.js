import NavBar from "./components/layouts/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/layouts/Footer";
import Home from "./components/pages/Home";
import Notfound from "./components/pages/Notfound";
import About from "./components/pages/About";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="flex flex-col justify-between h-screen">
          <NavBar />
          <main className="conatiner mx-auto px-3 pb-12">
            <Routes>
              <Route exact path="/" element={<Home />}></Route>
              <Route exact path="/about" element={<About />}></Route>
              <Route exact path="/notfound" element={<Notfound />}></Route>
              <Route exact path="/*" element={<Notfound />}></Route>
            </Routes>
          </main>
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
