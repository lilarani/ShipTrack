import { createContext, useState } from 'react';
import { auth } from './../firebase/firebase.config';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';

export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState('nila');

  // create user
  const createNewUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // sign-in user with email
  const signInUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  // sign-out user
  const signOutUser = () => {
    return signOut(auth);
  };

  const authInfo = {
    user,
    createNewUser,
    signInUser,
    signOutUser,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};
export default AuthProvider;
