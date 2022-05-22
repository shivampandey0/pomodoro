import { FaMoon, FaSun, FaRegSun, FaUserCircle } from 'react-icons/fa';
import { IoLogIn } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { useTheme } from '../../context/ThemeContext';
import { signOutUser } from '../../utils/auth-services';

export const Actions = () => {
  const { theme, toggleTheme } = useTheme();
  const {
    authState: { isLoggedIn },
  } = useAuth();

  return (
    <nav className='flex-row txt-center txt-md actions'>
      {isLoggedIn ? (
        <div
          onClick={signOutUser}
          className='flex-column align-cntr mx-4 cursor'
        >
          <IoLogIn size={28} />
          <p className='h5'>Logout</p>
        </div>
      ) : (
        <Link to='/login' className='flex-column align-cntr mx-4 cursor'>
          <FaUserCircle />
          <p className='h5'>Login</p>
        </Link>
      )}
      <Link to={'/settings'}>
        <FaRegSun className='mx-4 cursor' />
      </Link>
      {theme ? (
        <FaMoon onClick={toggleTheme} className='mx-4 cursor' />
      ) : (
        <FaSun onClick={toggleTheme} className='mx-4  cursor' />
      )}
    </nav>
  );
};
