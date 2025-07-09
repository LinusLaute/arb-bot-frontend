import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-900 text-white">
        <Header />
        <div className="bg-red-500 text-white p-4 text-xl">
  TAILWIND TEST BOX
</div>
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </main>
        <Footer />

      </div>
    </Router>
  );
}