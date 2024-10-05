import { Route, Routes } from 'react-router-dom';
import SignInPage from '@pages/SignIn';
import SignUpPage from '@pages/SignUp';
import Dashboard from '@/pages/Dashboard';

const Root = () => {
  return (
    <Routes>
      <Route path="/signin" element={<SignInPage />} />
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
};

export default Root;
