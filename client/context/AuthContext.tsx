import React, { createContext, useState, useContext, useEffect } from 'react';

// Define the shape of the context data
interface AuthContextData {
  user: { id: string; email: string; name: string } | null;
  login: (email: string, pass: string) => boolean;
  logout: () => void;
  isLoading: boolean;
}

// Create the context with a default value
const AuthContext = createContext<AuthContextData>({} as AuthContextData);

// Export a hook to use the context
export function useAuth() {
  return useContext(AuthContext);
}

// Import mock users
import { USERS } from '@/data/users';

// Create the provider component
export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<{
    id: string;
    email: string;
    name: string;
  } | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // In a real app, you'd check for a stored token here
    setIsLoading(false);
  }, []);

  const login = (email: string, pass: string) => {
    const foundUser = USERS.find(
      (u) => u.email === email && u.password === pass
    );
    if (foundUser) {
      setUser({
        id: foundUser.id,
        email: foundUser.email,
        name: foundUser.name,
      });
      return true;
    }
    return false;
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
}
