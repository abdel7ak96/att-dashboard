import { Route, Routes } from 'react-router-dom';
import SignInPage from '@pages/SignIn';
import SignUpPage from '@pages/SignUp';
import Dashboard from '@/pages/Dashboard';
import ActivateSession from '@/pages/ActivateSession';
import FinishedSession from '@/pages/FinishedSession';
import Assessment from '@/pages/Assessment';
import Category from '@/pages/Category';
import Users from '@/pages/Users';
import Home from '@/pages/Home';

const Root = () => {
  return (
    <Routes>
      <Route path="/signin" element={<SignInPage />} />
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="/" element={<Dashboard />}>
        <Route path="home" index element={<Home />} />
        <Route path="activate-session" element={<ActivateSession />} />
        <Route path="finished-session" element={<FinishedSession />} />
        <Route path="assessment" element={<Assessment />} />
        <Route path="category-tags" element={<Category />} />
        <Route path="users" element={<Users />} />
      </Route>
    </Routes>
  );
};

export default Root;
