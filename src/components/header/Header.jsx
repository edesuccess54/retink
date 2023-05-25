import { NavLink } from 'react-router-dom';
import styles from './Header.module.css';
import logo from '../../assets/images/Logoretinklogo.png';
import { useAuthContext } from "../../hooks/useAuthContext";
import { auth, provider } from '../../config'
import { signOut } from 'firebase/auth';


const Header = () => {
  const { user, dispatch } = useAuthContext()

  const handleLogout = (e) => {
    e.preventDefault()
 
      signOut(auth)
        .then(() => {
          dispatch({ type: 'LOGOUT' });
          localStorage.removeItem('user');
        })
        .catch((error) => {
          console.error("Sign-out error:", error);
        });

  }
  return (
    <div className = {styles.brandWrapper}>
      <img className={styles.brand} src={logo} alt="" />
      <nav>
        {user && (
          <p style={{display:'inline'}}>{ user }</p>
        )}
        <NavLink to="/">Home</NavLink>
        {!user && (
          <>
            <NavLink to="/login">Login</NavLink>
            <NavLink to="/signup">Sign up</NavLink>
          </>
        )}
        {user && (
          <button onClick={handleLogout} style={{padding: '10px', border: '1px solid #754DE8', backgroundColor:'#fff', borderRadius: '5px', color: '#754DE8', cursor: 'pointer'}}>Log Out</button>
        )}
      </nav>
    </div>
  )
}

export default Header
