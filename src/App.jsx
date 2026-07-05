import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/layout/Navbar";

import Home from "./pages/Home";
import Toolkit from "./pages/Toolkit";
import Resources from "./pages/Resources";
import AI from "./pages/AI";
import About from "./pages/About";
import NotFound from "./pages/NotFound";

import ToolPage from "./pages/ToolPage";

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-zinc-950 text-white">

        <Navbar />

        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/toolkit" element={<Toolkit />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/ai" element={<AI />} />
          <Route path="/about" element={<About />} />

          {/* ✅ SINGLE DYNAMIC ROUTE */}
          <Route path="/tools/:toolId" element={<ToolPage />} />

          <Route path="*" element={<NotFound />} />

        </Routes>

      </div>
    </BrowserRouter>
  );
}