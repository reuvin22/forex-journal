import { Routes, Route } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import Login from '../pages/Login';
import Journal from '../pages/Journal';

function PublicRoutes() {
  return (
    <Routes>
      <Route path='/' element={<Login />} />
      <Route path="/dashboard" element={<MainLayout />} />
      <Route path="/journal" element={<Journal />} />
      <Route path="/calendar" element={<Journal />} />
      <Route path="/strategies" element={<Journal />} />
    </Routes>
  );
}

export default PublicRoutes;
