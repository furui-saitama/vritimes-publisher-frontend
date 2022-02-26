import { VFC } from 'react';
import { Outlet } from 'react-router-dom';

const MainLayout: VFC = () => {
  return (
    <div className="bg-background flex flex-col min-h-screen">
      <header className="flex items-center h-20 px-8 py-2 bg-white">
        <img className="h-48" src="/VRITTA_logo.png" alt="vritimes_logo" />
      </header>
      <Outlet />
      <footer className="bg-white">footer</footer>
    </div>
  );
};

export default MainLayout;
