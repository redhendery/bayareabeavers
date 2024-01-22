import './App.css';
import { Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import History from "./pages/History";
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <div className="main">
      <Navbar />
      
      <div className="section">
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/history" element={<History />} />
          </Routes>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default App;
