import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginPage from './views/login/LoginPage';
import DashboardPage from './views/dashboard/DashboardPage';
import AddProduct from './views/add-product/AddProduct';
import EditProduct from './views/edit-product/EditProduct';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path='/dashboard/add-product' element={<AddProduct />} />
        <Route path='/dashboard/edit-product/:id' element={<EditProduct />} />
      </Routes>
    </Router>
  );
}

export default App;
