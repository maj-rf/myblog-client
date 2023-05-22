import { Navigate, Outlet } from 'react-router-dom';
import { useAppSelector } from '../store';

export const ProtectedRoute = () => {
  const { user } = useAppSelector((state) => state.auth);
  return user ? <Outlet /> : <Navigate to="/login" />;
};
