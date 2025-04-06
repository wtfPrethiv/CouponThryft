import React, { createContext, useState, useContext, useEffect } from 'react';

// Create authentication context
const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  // Get initial auth state from localStorage or default to not logged in
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Check localStorage on initial load
  useEffect(() => {
    const checkAuth = () => {
      const token = localStorage.getItem('authToken');
      const userData = localStorage.getItem('userData');
      
      if (token && userData) {
        setIsAuthenticated(true);
        setUser(JSON.parse(userData));
      }
      
      setLoading(false);
    };
    
    checkAuth();
  }, []);

  // Login function
  const login = (userData) => {
    // In a real app, you would validate credentials with your backend
    // For this prototype, we'll just store in localStorage
    
    // Create a simple token (in a real app, this would come from your backend)
    const token = `demo-token-${Date.now()}`;
    
    // Store auth data
    localStorage.setItem('authToken', token);
    localStorage.setItem('userData', JSON.stringify(userData));
    
    // Update state
    setIsAuthenticated(true);
    setUser(userData);
    
    return true;
  };

  // Logout function
  const logout = () => {
    localStorage.removeItem('authToken');
    localStorage.removeItem('userData');
    setIsAuthenticated(false);
    setUser(null);
  };

  // Register function
  const register = (userData) => {
    // In a real app, you would send this data to your backend
    // For this prototype, we'll just store in localStorage
    
    const token = `demo-token-${Date.now()}`;
    
    localStorage.setItem('authToken', token);
    localStorage.setItem('userData', JSON.stringify(userData));
    
    setIsAuthenticated(true);
    setUser(userData);
    
    return true;
  };

  const value = {
    isAuthenticated,
    user,
    loading,
    login,
    logout,
    register
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

export default AuthContext;