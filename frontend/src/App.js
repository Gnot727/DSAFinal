import './App.css';
import MapComponent from './Map.jsx';
import { useState } from 'react';

function App() {
  const [country, setCountry] = useState('');
  const [province, setProvince] = useState('');
  const [sortMethod, setSortMethod] = useState('');
  const handleChange = (event) =>{
    setCountry(event.target.value);
  }
  const handleChange2 = (event) =>{
    setProvince(event.target.value);
  }
  const handleChange3 = (event) =>{
    setSortMethod(event.target.value);
  }
  return (
    <div className="App">
      <div className="containter">
        <div className = "menubar">
            <ul className = "menu-buttons">
            <select value={country} onChange={handleChange}> 
              <option value = "Country">Select Country</option>
            </select>
            <select value={province} onChange={handleChange2}>
              <option value = "Province">Select Province (optional)</option>
            </select>
            <select value={sortMethod} onChange={handleChange3}>
              <option value = "sortMethod">Select sort method</option>
            </select>

            </ul>
          </div>
        </div>
        <div classname ="map-area">
          <MapComponent />
        </div>
      </div>
  
  );
}

export default App;

