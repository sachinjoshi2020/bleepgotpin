// Correct usage of useState and useContext in AuthProvider:
import { createContext, useState, useContext } from 'react';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext); // Custom hook

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // Correct usage of useState

  const login = (userData) => setUser(userData);
  const logout = () => setUser(null);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

