import { VFC } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DashboardLayout from './layouts/DashboardLayout';
import MainLayout from './layouts/MainLayout';
import DashboardPage from './pages/DashboardPage';
import RegistrationPage from './pages/RegistrationPage';
import SignInPage from './pages/SignInPage';

const App: VFC = () => {
  return (
    <Router>
      <Routes>
        {/* English */}
        <Route path="/" element={<MainLayout />}>
          <Route path="signin" element={<SignInPage lang="id" />} />
          <Route path="registration" element={<RegistrationPage lang="id" />} />
        </Route>
        <Route path="/" element={<DashboardLayout />}>
          <Route path="dashboard" element={<DashboardPage lang="id" />} />
          {/* TODO: create new article page */}
          <Route path="article/new" element={<div>new article</div>} />
          <Route path="article/:id" element={<div>sample article</div>} />
        </Route>
        {/* Indonesian */}
        <Route path="/id" element={<MainLayout />}>
          <Route path="signin" element={<SignInPage lang="id" />} />
          <Route path="registration" element={<RegistrationPage lang="id" />} />
        </Route>
        <Route path="/id" element={<DashboardLayout />}>
          <Route path="dashboard" element={<DashboardPage lang="id" />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
