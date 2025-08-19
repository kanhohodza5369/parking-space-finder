import React, { useState, useEffect } from 'react';
import { auth } from '../firebase';
import { 
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword,
  onAuthStateChanged
} from 'firebase/auth';
import UserDashboard from './UserDashboard';
import AgentDashboard from './AgentDashboard';

const AuthPage = () => {
  const [isRegister, setIsRegister] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');
  const [error, setError] = useState(null);
  const [user, setUser] = useState(null);
  const [userRole, setUserRole] = useState(null);
  const [showHelp, setShowHelp] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  // Auto-fill saved credentials
  useEffect(() => {
    const savedEmail = localStorage.getItem('rememberedEmail');
    const savedPassword = localStorage.getItem('rememberedPassword');
    const savedRole = localStorage.getItem('rememberedRole');
    if (savedEmail && savedPassword && savedRole) {
      setEmail(savedEmail);
      setPassword(savedPassword);
      setRole(savedRole);
      setRememberMe(true);
    }
  }, []);

  // Firebase auth state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        setUserRole(localStorage.getItem('rememberedRole') || '');
      } else {
        setUser(null);
        setUserRole(null);
      }
    });
    return () => unsubscribe();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    if (!role) {
      setError('Please select whether you are signing in as a User or Agent.');
      return;
    }

    try {
      if (isRegister) {
        await createUserWithEmailAndPassword(auth, email, password);
        // TODO: save role in Firestore if needed
      } else {
        await signInWithEmailAndPassword(auth, email, password);
        // TODO: verify role with database if needed
      }

      if (rememberMe) {
        localStorage.setItem('rememberedEmail', email);
        localStorage.setItem('rememberedPassword', password);
        localStorage.setItem('rememberedRole', role);
      } else {
        localStorage.removeItem('rememberedEmail');
        localStorage.removeItem('rememberedPassword');
        localStorage.removeItem('rememberedRole');
      }

      setUserRole(role);
    } catch (err) {
      if (err.code === 'auth/user-not-found' || err.code === 'auth/wrong-password') {
        setError('Invalid email or password.');
      } else if (err.code === 'auth/invalid-email') {
        setError('Invalid email address.');
      } else if (err.code === 'auth/email-already-in-use') {
        setError('This email is already registered.');
      } else if (err.code === 'auth/weak-password') {
        setError('Password should be at least 6 characters.');
      } else {
        setError('Authentication failed. Try again.');
      }
    }
  };

  const toggleForm = () => {
    setError(null);
    setIsRegister(!isRegister);
  };

  const handleLogout = async () => {
    await auth.signOut();
  };

  // Redirect based on role
  if (user) {
    if (userRole === 'agent') return <AgentDashboard onLogout={handleLogout} />;
    return <UserDashboard onLogout={handleLogout} />;
  }

  // Main Auth Page
  return (
    <div style={{
      height: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      background: 'linear-gradient(135deg, #0f172a, #1e293b)',
      backgroundSize: '400% 400%',
      animation: 'gradientAnimation 15s ease infinite',
      fontFamily: 'Arial, sans-serif',
    }}>
      <div style={{
        backgroundColor: '#1e293b',
        padding: '2rem',
        borderRadius: 8,
        boxShadow: '0 4px 20px rgba(0,0,0,0.3)',
        width: '100%',
        maxWidth: 400,
        textAlign: 'center',
        color: '#22c55e',
      }}>
        <h1 style={{ color: '#22c55e', marginBottom: '1.5rem' }}>The Park Easy</h1>

        <form onSubmit={handleSubmit}>
          {/* Role selection */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            marginBottom: '1rem',
            gap: '1rem',
            backgroundColor: '#0f172a',
            padding: '0.5rem',
            borderRadius: 8,
            border: '1px solid #374151',
          }}>
            <label style={{
              display: 'flex',
              alignItems: 'center',
              cursor: 'pointer',
              padding: '0.5rem 1rem',
              borderRadius: 6,
              backgroundColor: role === 'user' ? '#22c55e' : 'transparent',
              color: role === 'user' ? '#0f172a' : '#c7d2fe',
              fontWeight: 'bold',
              transition: 'all 0.3s ease',
            }}>
              <input
                type="radio"
                name="role"
                value="user"
                checked={role === 'user'}
                onChange={() => setRole('user')}
                style={{ display: 'none' }}
              />
              User
            </label>

            <label style={{
              display: 'flex',
              alignItems: 'center',
              cursor: 'pointer',
              padding: '0.5rem 1rem',
              borderRadius: 6,
              backgroundColor: role === 'agent' ? '#22c55e' : 'transparent',
              color: role === 'agent' ? '#0f172a' : '#c7d2fe',
              fontWeight: 'bold',
              transition: 'all 0.3s ease',
            }}>
              <input
                type="radio"
                name="role"
                value="agent"
                checked={role === 'agent'}
                onChange={() => setRole('agent')}
                style={{ display: 'none' }}
              />
              Agent
            </label>
          </div>

          <input
            type="email"
            placeholder="Email or phone number"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{
              width: '100%',
              padding: '0.75rem',
              margin: '0.5rem 0',
              border: '1px solid #374151',
              borderRadius: 4,
              backgroundColor: '#0f172a',
              color: '#22c55e',
              fontSize: 16,
              outline: 'none',
            }}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={{
              width: '100%',
              padding: '0.75rem',
              margin: '0.5rem 0',
              border: '1px solid #374151',
              borderRadius: 4,
              backgroundColor: '#0f172a',
              color: '#22c55e',
              fontSize: 16,
              outline: 'none',
            }}
          />

          {error && <p style={{ color: '#f87171', margin: '0.5rem 0', fontSize: 14 }}>{error}</p>}

          <button type="submit" style={{
            width: '100%',
            padding: '0.75rem',
            backgroundColor: '#22c55e',
            color: '#0f172a',
            border: 'none',
            borderRadius: 4,
            fontSize: 16,
            fontWeight: 'bold',
            cursor: 'pointer',
            margin: '1rem 0',
          }}>
            {isRegister ? 'Sign Up →' : 'Sign In →'}
          </button>
        </form>

        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 14 }}>
          <label style={{ color: '#ffffff' }}>
            <input 
              type="checkbox" 
              style={{ marginRight: 5 }} 
              checked={rememberMe} 
              onChange={() => setRememberMe(!rememberMe)} 
            /> 
            Remember me
          </label>
        </div>

        {!isRegister ? (
          <div style={{ marginTop: '1.5rem', fontSize: 14 }}>
            <span style={{ color: '#ffffff' }}>New to The Park Easy? </span>
            <span
              onClick={toggleForm}
              style={{ color: '#22c55e', fontWeight: 'bold', cursor: 'pointer', textDecoration: 'underline' }}
            >
              Sign up now
            </span>
          </div>
        ) : (
          <div style={{ marginTop: '1.5rem', fontSize: 14 }}>
            <span style={{ color: '#ffffff' }}>Already have an account? </span>
            <span
              onClick={toggleForm}
              style={{ color: '#22c55e', fontWeight: 'bold', cursor: 'pointer', textDecoration: 'underline' }}
            >
              Sign in
            </span>
          </div>
        )}

        <p style={{ fontSize: 12, color: '#9ca3af', marginTop: 20 }}>
          This page is protected to ensure you're not a bot.
        </p>
      </div>

      <style>{`
        @keyframes gradientAnimation {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
    </div>
  );
};

export default AuthPage;
