import { Route, Routes } from 'react-router-dom';
import SignInPage from '@pages/SignIn';
import SignUpPage from '@pages/SignUp';

const Root = () => {
  return (
    <Routes>
      <Route path="/signin" element={<SignInPage />} />
      <Route path="/signup" element={<SignUpPage />} />
    </Routes>
  );
};

export default Root;
