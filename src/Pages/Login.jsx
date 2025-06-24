import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginRegister = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const existingUser = users.find(user => user.email === email);
    if (existingUser) {
      alert('User already exists. Please log in.');
      return;
    }
    users.push({ email, password });
    localStorage.setItem('users', JSON.stringify(users));
    alert('Registration successful! Please log in.');
    setIsLogin(true);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find(user => user.email === email && user.password === password);
    if (user) {
      localStorage.setItem('user', JSON.stringify({ email }));
      navigate('/dashboard');
    } else {
      alert('Invalid email or password');
    }
  };

  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <h2 style={styles.title}>{isLogin ? 'Login' : 'Register'}</h2>
        <form onSubmit={isLogin ? handleLogin : handleRegister}>
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
          <button type="submit" style={styles.button}>
            {isLogin ? 'Login' : 'Register'}
          </button>
        </form>
        <p style={styles.switchText}>
          {isLogin ? "Don't have an account?" : 'Already have an account?'}{' '}
          <button onClick={() => setIsLogin(!isLogin)} style={styles.switchButton}>
            {isLogin ? 'Register here' : 'Login here'}
          </button>
        </p>
      </div>
    </div>
  );
};

const styles = {
  page: {
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: 'linear-gradient(135deg, #e0eafc, #cfdef3)',
    fontFamily: 'Arial, sans-serif',
  },
  card: {
    backgroundColor: '#fff',
    padding: '2rem',
    borderRadius: '12px',
    boxShadow: '0 10px 25px rgba(0,0,0,0.1)',
    width: '100%',
    maxWidth: '400px',
    textAlign: 'center',
  },
  title: {
    marginBottom: '1.5rem',
    color: '#333',
  },
  input: {
    width: '100%',
    padding: '0.75rem',
    marginBottom: '1rem',
    border: '1px solid #ccc',
    borderRadius: '8px',
    fontSize: '1rem',
    outline: 'none',
    transition: 'border-color 0.2s',
  },
  button: {
    width: '100%',
    padding: '0.75rem',
    backgroundColor: '#4A90E2',
    color: '#fff',
    fontSize: '1rem',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  },
  switchText: {
    marginTop: '1rem',
    fontSize: '0.9rem',
    color: '#555',
  },
  switchButton: {
    background: 'none',
    border: 'none',
    color: '#4A90E2',
    cursor: 'pointer',
    fontWeight: 'bold',
  }
};

export default LoginRegister;
