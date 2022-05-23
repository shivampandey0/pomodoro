import { createContext, useContext, useReducer } from 'react';
import { ActionTypes } from '../utils/constants';

const AuthContext = createContext();
const useAuth = () => useContext(AuthContext);

export const initialState = {
  isLoggedIn: localStorage.getItem('loggedIn') ?? false,
};

export const authReducer = (state, action) => {
  switch (action.type) {
    case ActionTypes.LOGIN:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

const AuthProvider = ({ children }) => {
  const [authState, authDispatch] = useReducer(authReducer, initialState);

  return (
    <AuthContext.Provider value={{ authState, authDispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

export { useAuth, AuthProvider };
