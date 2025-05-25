import { createContext, useState } from 'react';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  return (
    <AppContext.Provider value={{ user, setUser, loading, setLoading, error, setError }}>
      {children}
    </AppContext.Provider>
  );
};
