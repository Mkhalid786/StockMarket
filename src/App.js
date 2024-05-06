import './App.css';
import Login from './Pages/Login';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Userinterfacetwo from './Pages/Userinterfacetwo';
import Userinterface from './Pages/Userinterface'
import UserPage from './Pages/UserPage';
function App() {
  return (
    <div className="Appp">
      
      <Router>

        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/dashboard" element={<UserPage />}></Route>
          <Route path="/Holding" element={<Userinterface />}></Route>
          <Route path="/Watchlist" element={<Userinterfacetwo />}></Route>
        </Routes>

      </Router>



    </div>

  );
}

export default App;
