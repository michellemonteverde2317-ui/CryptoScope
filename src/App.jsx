import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Coin from "./pages/Coin";

function App() {
  return (
    <BrowserRouter basename="/CryptoScope">
      <div className="app">
        <div className="overlay"></div>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/coin/:coinId" element={<Coin />} />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
