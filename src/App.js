import NavBar from "./components/layouts/NavBar";
import { BrowserRouter } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="flex flex-col justify-between h-screen">
          <NavBar />
          <main>main content</main>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
