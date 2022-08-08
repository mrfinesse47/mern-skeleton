import React from 'react';
import { FaSignInAlt, FaSignOutAlt, FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { logout } from '../features/auth/authSlice';
import { toast } from 'react-toastify';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  return (
    <header className='header'>
      <div className='logo'>
        <Link to='/'>GoalSetter</Link>
      </div>
      <ul>
        {!user ? (
          <>
            <li>
              <Link to='/login'>
                <FaSignInAlt />
              </Link>
            </li>
            <li>
              <Link to='/register'>
                <FaUser />
              </Link>
            </li>
          </>
        ) : (
          <li>
            {/* decided to not have a logout page */}
            <button
              className='btn'
              onClick={() => {
                dispatch(logout());

                toast.success('Successful Log Out!', {
                  position: 'top-right',
                  autoClose: 5000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                });
                navigate('/login');
              }}
            >
              <FaSignOutAlt />
            </button>
          </li>
        )}
      </ul>
    </header>
  );
};

export default Header;
