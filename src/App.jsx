import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Barang from "./pages/Barang";
import Tentang from "./pages/Tentang";
import Kontak from "./pages/Kontak";
import NotFound from "./pages/NotFound";
 
export default function App() {
  return (
    <BrowserRouter>
      <nav className="navbar">
        <NavLink to="/" end className="nav-link">Home</NavLink>
        <NavLink to="/barang" className="nav-link">Barang</NavLink>
        <NavLink to="/tentang" className="nav-link">Tentang</NavLink>
        <NavLink to="/kontak" className="nav-link">Kontak</NavLink>
      </nav>
 
      <main className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/barang" element={<Barang />} />
          <Route path="/tentang" element={<Tentang />} />
          <Route path="/kontak" element={<Kontak />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}
 