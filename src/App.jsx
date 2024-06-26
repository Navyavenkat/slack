import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home.jsx';
import Login from './components/User/Login.jsx';
import SignUp from './components/SignUp/SignUp.jsx';
import Dashboard from './components/Dashboard/Dashboard.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/dashboard" element={<Dashboard />} />
       
      </Routes>
    </Router>
  );
}

export default App;
