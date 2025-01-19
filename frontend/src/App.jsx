import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import BankDetails from "./pages/BankDetails";

export default function App() {
  return (
    <>
      <NavBar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/search" element={<BankDetails />}/>
        </Routes>
      </BrowserRouter>
    </>
  );
};