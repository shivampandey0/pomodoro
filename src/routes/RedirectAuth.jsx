import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export const RedirectAuth = () => {
  const {
    authState: { isLoggedIn },
  } = useAuth();
  
  const location = useLocation();

  return isLoggedIn ? (
    <Navigate to={'/'} state={{ from: location }} replace={true} />
  ) : (
    <Outlet />
  );
};
