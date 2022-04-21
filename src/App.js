import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Foot } from "./components/Foot";
import { NavBar } from "./components/NavBar";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { Home } from "./pages/Home";

function App() {
  const [modal, setModal] = useState(false);

  return (
    <div className="font-poppins">
      <BrowserRouter>
        <header>
          <NavBar stateModal={modal} setModal={setModal} />
        </header>
        <Routes>
          <Route path="/" element={<Home modal={modal} />} />
          <Route path="/about" element={<About modal={modal} />} />
          <Route path="/contact" element={<Contact modal={modal} />} />
        </Routes>
        <footer>
          <Foot />
        </footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
