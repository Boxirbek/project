import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import axios from 'axios';
import './App.css';
import FurnitureList from './component/Furnityre';
import projBg from "./assets/servisBg.png"

const App = () => {
  const [furniture, setFurniture] = useState([]);
  const [category, setCategory] = useState('bedroom');

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_API_URL}/furniture`)
      .then(response => setFurniture(response.data));
  }, []);

  const filteredFurniture = furniture.filter(item => item.category === category);

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <img src={projBg} alt="Header Background" className="header-background" />
          <h1>Our Project</h1>
          <nav>
            <ul className="navbar">
              <li><Link to="/" onClick={() => setCategory('bedroom')} className={category === 'bedroom' ? 'active' : ''}>Bed Room</Link></li>
              <li><Link to="/kitchen" onClick={() => setCategory('kitchen')} className={category === 'kitchen' ? 'active' : ''}>Kitchen</Link></li>
              <li><Link to="/bathroom" onClick={() => setCategory('bathroom')} className={category === 'bathroom' ? 'active' : ''}>Bathroom</Link></li>
              <li><Link to="/living" onClick={() => setCategory('living')} className={category === 'living' ? 'active' : ''}>Living Area</Link></li>
            </ul>
          </nav>
        </header>
        <Routes>
          <Route path="/" element={<FurnitureList furniture={filteredFurniture} />} />
          <Route path="/kitchen" element={<FurnitureList furniture={filteredFurniture} />} />
          <Route path="/bathroom" element={<FurnitureList furniture={filteredFurniture} />} />
          <Route path="/living" element={<FurnitureList furniture={filteredFurniture} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
 