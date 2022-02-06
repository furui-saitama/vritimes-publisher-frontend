import { VFC } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './Layouts/MainLayout';
import LoginPage from './pages/LoginPage';

const App: VFC = () => (
  <Router>
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/" element={<MainLayout />}>
        <Route path="content" element={<div>content</div>} />
      </Route>
    </Routes>
  </Router>
);

export default App;
