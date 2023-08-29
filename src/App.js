import React, { useState, useEffect } from 'react';
import {auth, provider} from './FirebaseConfig';
import { signInWithPopup, signOut, onAuthStateChanged } from 'firebase/auth';
import './App.css';


function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (authUser) => {
      if (authUser) {
        setUser(authUser);
      } else {
        setUser(null);
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const handleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      setUser(user);
    } catch (error) {
      console.error("Error signing in with Facebook:", error);
    }
  };

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      setUser(null);
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        {user ? (
          <div>
            <img src={user.photoURL} alt={user.displayName} />
            <p>Welcome, {user.displayName}!</p>
            <button onClick={handleSignOut}>Sign Out</button>
          </div>
        ) : (
          <button onClick={handleSignIn}>Sign In with Facebook</button>
        )}
      </header>
    </div>
  );
}

export default App;

