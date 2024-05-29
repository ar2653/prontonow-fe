import './App.css';
import { Routes, Route } from "react-router-dom";
import Login from './components/Login';
import Devices from './components/Devices';
import Register from './components/Register';

const App = () => {
  return (
    <div data-theme="light" className="app-root">
      {/* <Navbar /> */}
      <Routes>
          <Route path="/" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/devices" element={<Devices />} />
      </Routes>
    </div>
  )
}

export default App;
