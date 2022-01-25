import classes from './Header.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { authActions } from '../store/index';

const Header = () => {
  const isLoggedIn = useSelector(state => state.auth.isAuthenticated);
  const dispatch = useDispatch();

  console.log(isLoggedIn)
const logOutHandler = () => {
  dispatch(authActions.logOut())
}

  return (
    <header className={classes.header}>
      <h1>Redux Toolkit Test</h1>
      <nav>
        {isLoggedIn ? 
        <ul>
          <li>
            <a href='/'>My Products</a>
          </li>
          <li>
            <a href='/'>My Cats</a>
          </li>
          <li>
            <button onClick={logOutHandler}>Logout</button>
          </li>
        </ul> 
        : null}
      </nav>
    </header>
  );
};

export default Header;
