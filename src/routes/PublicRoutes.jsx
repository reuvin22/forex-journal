import { Routes, Route } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import Login from '../pages/Login';

function PublicRoutes() {
  return (
    <Routes>
      <Route path='/' element={<Login />} />
      <Route path="/dashboard" element={<MainLayout />} />
    </Routes>
  );
}

export default PublicRoutes;
