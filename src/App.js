import './App.css';
import Navbar from './Components/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PasswordGenerator from './Components/PasswordGenerator';

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Routes>
            <Route path="/" element={< PasswordGenerator />} />
            <Route path="/passwordGenerator" element={< PasswordGenerator />} />
        </Routes>

      <Navbar />

      </BrowserRouter>

    </div>
  );
}

export default App;
