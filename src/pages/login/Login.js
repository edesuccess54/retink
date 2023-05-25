import { useState } from 'react'
import style from './Login.module.css'
import validator from 'validator';
import { FcGoogle } from 'react-icons/fc'
import { auth, provider, signInWithEmailAndPassword } from '../../config';
import { signInWithPopup } from 'firebase/auth'
import { useAuthContext } from "../../hooks/useAuthContext";

const Login = () => {
    const { dispatch } = useAuthContext()
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null)

    const handleLogin = async (e) => {
        e.preventDefault();
        setError(null);
        setLoading(true);

        try {
            if(!email || !password) {
                throw new Error('Please enter email and password');
            }

            if (!validator.isEmail(email)) {
                throw new Error('Please enter a valid email');
            }

            await signInWithEmailAndPassword(auth, email, password).then((userCredential) => {
                localStorage.setItem('user', userCredential.user.email);
                dispatch({ type: 'LOGIN', payload: userCredential.user.email})
            }).catch((err) => {
                throw new Error(err.message);
             })
            
        } catch (error) {
            setLoading(false)
            setError(error.message);
        }
    }

    const handleGoogleAuth = async (e) => {
        e.preventDefault();
        signInWithPopup(auth, provider).then((data) => {
            localStorage.setItem('user', data.user.email);
            dispatch({ type: 'LOGIN', payload: data.user.email})
        })
    }

  return (
    <div className='formContainer'>
        <div className={style.forWrapper}>
              <form onSubmit={handleLogin}>
                  <h4>Sign in here</h4>
                <div className={style.inputGroup}>
                    <label htmlFor="email">E-mail:</label>
                      <input
                          id='email'
                          type="text"
                          name='email'
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                      />
                </div>

                <div className={style.inputGroup}>
                    <label htmlFor="password">Password:</label>
                      <input
                          id='password'
                          type="password"
                          name='Password'
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                      />
                  </div>
                  {error && <p className='error'>{error }</p> }
                  <button className={style.loginBtn}>{loading ? 'Processing...' : 'Login' }</button>
              </form> 
              <p style={{textAlign: 'center', margin: '20px 0'}}>OR</p>
              <button onClick={handleGoogleAuth} className={style.googleBtn}> <FcGoogle /> &nbsp; Sign In With Google</button>
        </div>
    </div>
  )
}

export default Login
