import { onAuthStateChanged } from 'firebase/auth';
import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { useAuth } from './context/AuthContext';
import { useTheme } from './context/ThemeContext';
import { Error, Home, Pomodoro, Settings } from './pages';
import { Login } from './pages/auth/Login';
import { Signup } from './pages/auth/Signup';
import { RedirectAuth } from './routes/RedirectAuth';
import { ActionTypes } from './utils/constants';
import { auth } from './utils/firebase-config';

function App() {
  const {
    authState: { isLoggedIn },
    authDispatch,
  } = useAuth();

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      if (user) {
        localStorage.setItem('loggedIn', true);
        authDispatch({
          type: ActionTypes.LOGIN,
          payload: { isLoggedIn: true, user },
        });
      } else {
        localStorage.setItem('loggedIn', false);
        authDispatch({
          type: ActionTypes.LOGIN,
          payload: { isLoggedIn: false, user: null },
        });
      }
    });

    return () => unsub;
  }, [isLoggedIn]);

  const { theme } = useTheme();
  return (
    <div className={`App ${theme ? 'dark-theme' : 'light-theme'}`}>
      <Routes>
        <Route path='*' element={<Error />} />
        <Route path='/' element={<Home />} />
        <Route path='/settings' element={<Settings />} />
        <Route path='/pomodoro/:taskID' element={<Pomodoro />} />
        <Route element={<RedirectAuth />}>
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
