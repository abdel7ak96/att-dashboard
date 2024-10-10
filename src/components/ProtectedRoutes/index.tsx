import { useEffect, useState } from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import LoadingScreen from '../LoadingScreen';

const ProtectedRoutes = () => {
  const authToken = localStorage.getItem('authToken');
  const [auth, setAuth] = useState<boolean | undefined>(undefined);

  useEffect(() => {
    if (authToken) {
      const fn = async () => {
        const response = await fetch('/api/verify-token', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${authToken}`,
          },
          body: JSON.stringify({ authToken: authToken }),
        });

        if (response.status === 200) {
          setAuth(true);
        } else {
          setAuth(false);
        }
      };
      
      fn();
    } else {
      setAuth(false);
    }
  }, [authToken]);

  return auth === undefined ? (
    <LoadingScreen />
  ) : auth === true ? (
    <Outlet />
  ) : (
    <Navigate to="/signin" />
  );
};

export default ProtectedRoutes;
