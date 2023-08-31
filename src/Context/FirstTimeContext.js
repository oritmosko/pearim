import React, { createContext, useContext, useState } from 'react';

const FirstTimeContext = createContext();

const FirstTimeProvider = ({ children }) => {
  const [firstTime, setFirstTime] = useState(true);

  return (
    <FirstTimeContext.Provider value={{ firstTime, setFirstTime }}>
      {children}
    </FirstTimeContext.Provider>
  );
};

const useFirstTime = () => {
  return useContext(FirstTimeContext);
};

export { FirstTimeProvider, useFirstTime };
