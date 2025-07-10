import React, { useState, useEffect } from 'react';
import { auth } from '../firebase';
import { 
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from 'firebase/auth';
import UserDashboard from './UserDashboard';

const Auth = () => {
  const [isRegister, setIsRegister] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [user, setUser] = useState(null); // Track logged-in user

  // Listen for auth state changes (login/logout)
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, []);

  const toggleForm = () => {
    setError(null);
    setSuccess(null);
    setIsRegister(!isRegister);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);

    try {
      if (isRegister) {
        await createUserWithEmailAndPassword(auth, email, password);
        setSuccess('Registration successful!');
        setEmail('');
        setPassword('');
        setIsRegister(false);
      } else {
        await signInWithEmailAndPassword(auth, email, password);
        setSuccess('Login successful!');
        // user state will be updated automatically by onAuthStateChanged listener
      }
    } catch (err) {
      let message = 'An error occurred. Please try again.';

      if (err.code === 'auth/wrong-password' || err.code === 'auth/user-not-found') {
        message = 'Wrong email or password. Please check your credentials.';
      } else if (err.code === 'auth/invalid-email') {
        message = 'The email address is invalid.';
      } else if (err.code === 'auth/email-already-in-use') {
        message = 'This email is already registered.';
      } else if (err.code === 'auth/weak-password') {
        message = 'Password should be at least 6 characters.';
      }

      setError(message);
    }
  };

  const handleLogout = async () => {
    await signOut(auth);
    setSuccess(null);
    setError(null);
    setEmail('');
    setPassword('');
  };

  // If logged in, show dashboard
  if (user) {
    return <UserDashboard onLogout={handleLogout} />;
  }

  // Otherwise show login/register form
  return (
    <div style={styles.page}>
      <form style={styles.form} onSubmit={handleSubmit}>
        <h2 style={styles.title}>{isRegister ? 'Register' : 'Login'}</h2>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
          style={styles.input}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
          style={styles.input}
        />

        {error && (
          <p style={styles.error}>
            <span style={{ marginRight: 8 }}>❌</span> {error}
          </p>
        )}

        {success && (
          <p style={styles.success}>
            <span style={{ marginRight: 8 }}>✅</span> {success}
          </p>
        )}

        <button type="submit" style={styles.button}>
          {isRegister ? 'Register' : 'Log In'}
        </button>

        <p style={styles.toggleText}>
          {isRegister ? 'Already have an account?' : "Don't have an account?"}{' '}
          <span style={styles.toggleLink} onClick={toggleForm}>
            {isRegister ? 'Log In' : 'Register'}
          </span>
        </p>
      </form>
    </div>
  );
};

const styles = {
  page: {
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: '#f0f2f5',
    fontFamily: 'Arial, sans-serif',
  },
  form: {
    backgroundColor: '#fff',
    padding: '2rem',
    borderRadius: '10px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
    width: '320px',
    display: 'flex',
    flexDirection: 'column',
  },
  title: {
    marginBottom: '1.5rem',
    textAlign: 'center',
    color: '#333',
  },
  input: {
    marginBottom: '1rem',
    padding: '0.75rem',
    borderRadius: '6px',
    border: '1px solid #ccc',
    fontSize: '1rem',
    outline: 'none',
    transition: 'border-color 0.2s',
  },
  button: {
    padding: '0.75rem',
    backgroundColor: '#007bff',
    border: 'none',
    borderRadius: '6px',
    color: 'white',
    fontWeight: 'bold',
    fontSize: '1rem',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  },
  error: {
    color: 'red',
    marginBottom: '1rem',
    fontSize: '0.9rem',
    textAlign: 'center',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  success: {
    color: 'green',
    marginBottom: '1rem',
    fontSize: '0.9rem',
    textAlign: 'center',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  toggleText: {
    marginTop: '1rem',
    fontSize: '0.9rem',
    textAlign: 'center',
    color: '#555',
  },
  toggleLink: {
    color: '#007bff',
    cursor: 'pointer',
    textDecoration: 'underline',
  }
};

export default Auth;