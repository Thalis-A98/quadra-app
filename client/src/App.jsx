import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Reserva from "./pages/Reserva";
import Sobre from "./pages/Sobre";

function App() {
  return (
    <>
      {/* MENU SUPERIOR SIMPLES */}
      <nav className="p-4 bg-gray-800 flex justify-between items-center">
        <span className="font-bold text-xl">Quadra App</span>

        <div className="flex gap-4">
          <Link to="/">Home</Link>
          <Link to="/reserva">Reservar</Link>
          <Link to="/sobre">Sobre</Link>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/reserva" element={<Reserva />} />
        <Route path="/sobre" element={<Sobre />} />
      </Routes>
    </>
  );
}

export default App;
