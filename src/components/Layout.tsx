import { Header } from './Header';
import { Outlet } from 'react-router-dom';
export const Layout = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Outlet />
    </div>
  );
};
