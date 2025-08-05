import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import "./styles.css";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import Details from "./pages/Details";
import GlobalState from "./context";
export default function Food() {
  return (
    <BrowserRouter>
      <GlobalState>
        <div>
          <div className="min-h-screen p-6 bg-white text-gray-600 text-lg">
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/favorites" element={<Favorites />} />
              <Route path="/recipe-item/:id" element={<Details />} />
            </Routes>
          </div>
        </div>
      </GlobalState>
    </BrowserRouter>
  );
}
