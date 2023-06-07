import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from '../store';
import { useLogoutMutation } from '../slice/usersApiSlice';
import { logout } from '../slice/authSlice';
import { notify } from '../helpers/notify';
import muni from '../assets/muni.svg';
export const Header = () => {
  const { user } = useAppSelector((state) => state.auth);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [logoutMutation] = useLogoutMutation();

  const handleLogout = async () => {
    try {
      await logoutMutation();
      navigate('/login');
      dispatch(logout());
      notify({ type: 'success', message: 'Logged out!' });
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="bg-primary sticky top-0 z-10">
      <header className="flex justify-between p-4 max-w-5xl mx-auto ">
        <Link to="/" className="flex items-center gap-1">
          <img src={muni} alt="muni-logo" width={50} height={50} />
          <span className="font-atkinson font-bold text-2xl hidden md:block text-cleanWhite">
            muni
          </span>
        </Link>
        <div className="flex items-center gap-2 text-cleanWhite">
          {user ? (
            <>
              <NavLink
                to="/profile"
                className={({ isActive, isPending }) => {
                  return (
                    (isPending
                      ? 'text-gray-400'
                      : isActive
                      ? 'underline underline-offset-4 decoration-wavy decoration-2'
                      : '') + ' hover:text-accent'
                  );
                }}
              >
                {user.username}
              </NavLink>
              <button
                onClick={handleLogout}
                className="bg-blue-200 px-2 text-black rounded-lg hover:bg-accent"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <NavLink
                to="/login"
                className={({ isActive, isPending }) => {
                  return (
                    (isPending
                      ? 'text-gray-400'
                      : isActive
                      ? 'underline underline-offset-4 decoration-wavy decoration-2'
                      : '') + ' hover:text-accent'
                  );
                }}
              >
                Login
              </NavLink>
              <NavLink
                to="/register"
                className={({ isActive, isPending }) => {
                  return (
                    (isPending
                      ? 'text-gray-400'
                      : isActive
                      ? 'underline underline-offset-4 decoration-wavy decoration-2'
                      : '') + ' hover:text-accent'
                  );
                }}
              >
                Sign Up
              </NavLink>
            </>
          )}
        </div>
      </header>
      <hr className="border-gray-400"></hr>
    </div>
  );
};
