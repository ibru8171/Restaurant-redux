import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import { Routes,Route } from 'react-router-dom';
import Restview from './pages/Restview';
import Footer from './components/Footer';
import Home from './pages/Home';
import Restcard from './components/Restcard';

function App() {
  return (
  <div>
    <Header/>
    
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Restview" element={<Restview />} />
      
    </Routes>
    <Footer/>
  </div>
  );
}

export default App;
