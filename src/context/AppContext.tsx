import React, { createContext, useContext, useState, ReactNode } from 'react';

interface AppContextInterface {
  loading: boolean;
  isInConsult: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  setIsInConsult: React.Dispatch<React.SetStateAction<boolean>>;
  selectedPatient: any;
  setSelectedPatient: React.Dispatch<React.SetStateAction<any>>;
  currentCita: any;
  setCurrentCita: React.Dispatch<React.SetStateAction<any>>;
}

const initialContext: AppContextInterface = {
  loading: false,
  isInConsult: false,
  setLoading: () => {},
  setIsInConsult: () => {},
  selectedPatient: null,
  setSelectedPatient: () => {},
  currentCita: null,
  setCurrentCita: () => {},
};

const AppContext = createContext<AppContextInterface>(initialContext);

interface Props {
  children: ReactNode;
}

export const AppProvider: React.FC<Props> = ({ children }) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [isInConsult, setIsInConsult] = useState<boolean>(false);
  const [selectedPatient, setSelectedPatient] = useState<boolean>(false);
  const [currentCita, setCurrentCita] = useState<boolean>(false);

  return (
    <AppContext.Provider value={{ loading, isInConsult, setLoading, setIsInConsult, selectedPatient, setSelectedPatient, currentCita, setCurrentCita }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
