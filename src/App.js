import { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Header from './components/header/Header';
// import Home from './components/home/Home';
import Home from './pages/home/Home'
import Login from './pages/login/Login';
import Loading from './components/loading/Loading';
import { useAuthContext } from "./hooks/useAuthContext";
import Signup from './pages/signup/Signup';


function App() {
  const { user } = useAuthContext()
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    setIsLoading(false)
  },[])
  return (
    <div className="App">
      {isLoading ? ( <Loading /> ) : (
      <BrowserRouter>
        <Header />
        <div className="wraper">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path='/login' element={!user ? <Login /> : <Navigate to="/" />} />
              <Route path='/signup' element={ !user ? <Signup /> : <Navigate to="/" />} />
          </Routes>
        </div>
      </BrowserRouter>
        )}
    </div>
  );
}

export default App;
