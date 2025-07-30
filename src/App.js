import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Component/Home';
import About from './Component/About';
import Detail from './Component/Detail';
import Getquote from './Component/Getquote';
import Header from './Component/Header';
import Footer from './Component/Footer';
import Contact from './Component/Contact';
import Solution from './Component/Solution';

function App() {
  return (
    <div className="App">

      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/solutions" element={<Solution />} />
        <Route path="/detail" element={<Detail />} />
        <Route path="/getquote" element={<Getquote />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
