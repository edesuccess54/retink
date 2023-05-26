import { NavLink, Link } from 'react-router-dom';
import styles from './Header.module.css';
import logo from '../../assets/images/Logoretinklogo.png';
import { useAuthContext } from "../../hooks/useAuthContext";
import { auth, provider } from '../../config'
import { signOut } from 'firebase/auth';
import { GiHamburgerMenu } from 'react-icons/gi'
import { GrClose } from 'react-icons/gr'
import { useState } from 'react';


const Header = () => {
  const { user, dispatch } = useAuthContext();
  const [ openMenu, setOpenMenu ] = useState(false);

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

  const handleOpenMenu = (e) => { 
    setOpenMenu(true)
  }

  const handleClose = (e) => {
     setOpenMenu(false)
   }
  return (
    <div className = {styles.brandWrapper}>
      <Link to='/'>
        <img className={styles.brand} src={logo} alt="" />
      </Link>
      <span onClick={handleOpenMenu}><GiHamburgerMenu className={ styles.hamburger } /></span>
      <nav className={styles.desktopMenu}>
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

      {/* mobile menu  */}
      <nav className={`${styles.mobileNav} ${openMenu ? styles.active : ''}`}>
        <span onClick={handleClose} className={styles.closeBtn}><GrClose/></span>
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
      <div className={`${styles.overlay} ${openMenu ? styles.show : ''}`}></div>
    </div>
  )
}

export default Header
