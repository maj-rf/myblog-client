import { Header } from './Header';
import { Outlet } from 'react-router-dom';
export const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen font-inter max-w-5xl mx-auto leading-loose">
      <Header />
      <Outlet />
    </div>
  );
};
