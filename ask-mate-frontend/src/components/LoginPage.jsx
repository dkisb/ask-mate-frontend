import { useState} from 'react';
import HomePage from './HomePage.jsx';
import { Link } from 'react-router-dom';


function LoginPage() {
  const [userName, setUserName] = useState(null);
  const [password, setPassword] = useState(null);
  const [email, setEmail] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isNewUser, setIsNewUser] = useState(false);
  const [userExists, setUserExists] = useState(false);
  const [successfulRegistration, setSuccessfulregistration] = useState(false);
  const [invalidLogin, setInvalidLogin] = useState(false);
  const [userId, setUserId] = useState(null);
  
  function handleNewUser() {
    setIsNewUser(true);
  }

  async function postRegistration(user) {
    const response = await fetch('/api/user/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(user),
    });
    const isUserNameExists = await response.json();
    if (isUserNameExists) {
      setUserExists(true);
    } else {
      setUserExists(false);
      setIsNewUser(false);
      setSuccessfulregistration(true);
      setPassword(null);
      setEmail(null);
      setUserName(null);
    }
  }

  async function postLogin(user) {
    const response = await fetch('/api/user/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(user),
    });
    const loggedInUser = await response.json();
    if (loggedInUser.userId == 0) {
      setInvalidLogin(true);
    } else {
      setInvalidLogin(false);
      setIsLoggedIn(true);
      setUserId(loggedInUser.userId);
      setPassword(null); 
    }
  }

  function handleRegistration(e) {
    e.preventDefault();
    const user = { username: userName, password: password, email: email };
    postRegistration(user);
  }

  function handleLogin(e) {
    e.preventDefault();
    const user = { username: userName, password: password};
    postLogin(user);
  }

  function handleLogout() {
    setIsLoggedIn(false);
    setUserName(null);
    setUserId(null);
  }

  return (
    <div>
      {!isLoggedIn && !isNewUser && (
        <>
        <div>
          <h1>Welcome to askmate page!</h1>
        </div><div>
            <h2>Please log in!</h2>
            <form onSubmit={handleLogin}>
              <input onChange={(e) => setUserName(e.target.value)}
                type="text"
                placeholder="username" />
              <br />
              <input
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                placeholder="password"
                autoComplete="off" />
              <br />
              <button type="submit">Login</button>
            </form>
            <div>
              <h4>Don&apos;t have an account yet?</h4>
              <button onClick={handleNewUser}>Register</button>
            </div>
          </div></>
      )}
      {isNewUser && (
        <><form onSubmit={handleRegistration}>
          <h2>Register to our site</h2>
          <input onChange={(e) => setUserName(e.target.value)} type="text" placeholder="username" />
          <br />
          <input
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="password"
            autoComplete="off" />
          <br />
          <input
            onChange={(e) => setEmail(e.target.value)}
            type='text'
            placeholder='email'
            autoComplete='off' />
          <br />
          <button type="submit">Register</button>
        </form>
        <div>
            {userExists && (
              <div>
                <h2>This username is already exists. Try another one!</h2>
              </div>
            )}
        </div></>
      )}
        <div>
          {successfulRegistration && !isLoggedIn && (
            <div>
              <h2>Successful registration! Please login!</h2>
            </div>
            )}
        </div>
      <div>
        <div>
          {isLoggedIn && (

            <>
            <Link to={`/home`} state={{userName, userId}}>
              Go Homepage
            </Link>
            <button onClick={handleLogout}>Logout</button>
            </>
          )}
        </div>
        <div>
          {invalidLogin && (
            <div>
              <h2>Wrong username or password. Please try again!</h2>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default LoginPage;
