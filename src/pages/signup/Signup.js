import { useState } from 'react'
import style from './Signup.module.css'
import validator from 'validator';
import { FcGoogle } from 'react-icons/fc'
import { auth, provider, createUserWithEmailAndPassword } from '../../config';
import { signInWithPopup } from 'firebase/auth'
import { useAuthContext } from "../../hooks/useAuthContext";

const Signup = () => {
    const { dispatch } = useAuthContext()
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null)

    const handleSignup = async (e) => {
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

            createUserWithEmailAndPassword(auth, email, password).then((userCredential) => {
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
              <form onSubmit={handleSignup}>
                  <h4>Sign Up here</h4>
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
                  <button className={style.signupBtn}>{loading ? 'Processing...' : 'Sign up'}</button>
                  <p style={{textAlign: 'center', margin: '20px 0'}}>OR</p>
                <button onClick={handleGoogleAuth} className={style.googleBtn}> <FcGoogle /> &nbsp; Sign up With Google</button>
            </form> 
        </div>
    </div>
  )
}

export default Signup

