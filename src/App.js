import './App.css';
import Navbar from './components/Nav/Navbar';
import Landing from './components/Landing/Landing'
import {
  Routes,
  Route
} from "react-router-dom";
import SteamCalculator from './components/SteamCalculator/SteamCalculator';

function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Landing/>} />
        <Route path="steam-calculator" element={<SteamCalculator/>} />
      </Routes>
    </div>
  );
}

export default App;
