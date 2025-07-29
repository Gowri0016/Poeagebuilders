import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Component/Home';
import About from './Component/About';
import Detail from './Component/Detail';
import Online from './Component/Online';
import Getquote from './Component/Getquote';
import Header from './Component/Header';
import Footer from './Component/Footer';
import Services from './Component/Services';

function App() {
  return (
    <div className="App">

      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/detail" element={<Detail />} />
        <Route path="/services" element={<Services />} />
        <Route path="/getquote" element={<Getquote />} />
        <Route path="/online" element={<Online />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
