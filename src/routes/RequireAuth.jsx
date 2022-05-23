import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export const RequireAuth = () => {
  const {
    authState: { isLoggedIn },
  } = useAuth();

  const location = useLocation();

  return isLoggedIn ? (
    <Outlet />
  ) : (
    <Navigate to={'/authenticate'} state={{ from: location }} replace={true} />
  );
};
