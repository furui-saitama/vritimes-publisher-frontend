import { VFC } from 'react';
import { Outlet } from 'react-router-dom';

const MainLayout: VFC = () => (
  <div>
    <h1>MainLayout</h1>
    <Outlet />
  </div>
);

export default MainLayout;
