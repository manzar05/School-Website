import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTopButton from './components/ScrollToTop';
function App() {
  return (
    <div className="App">
<Router>
      <div className='min-h-[100svh] bg-[#EEEDED]'>
      <Navbar/>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<Home />} />
          <Route path="/services" element={<Home />} />
          <Route path="/experience" element={<Home />} />
          <Route path="/contact" element={<Home />} />
          <Route path="/projects" element={<Home />} />
          <Route path="/resume" element={<Home />} />
      </Routes>
      <div className='fixed bottom-10 right-4 z-10'>
          <ScrollToTopButton />
      </div>
      <Footer />
      </div>
      </Router>
    </div>
  );
}

export default App;
