import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import BankDetails from "./pages/BankDetails";
import About from "./pages/About";

export default function App() {
  return (
    <>
      <NavBar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/search" element={<BankDetails />}/>
          <Route path="/about" element={<About />}/>
        </Routes>
      </BrowserRouter>
    </>
  );
};