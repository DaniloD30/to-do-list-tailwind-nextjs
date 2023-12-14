"use client";
import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useState,
} from "react";
import { User } from "../interfaces/LoginInterface";

interface LoginContextData {
  user: User;
  handleUserSave: (data: User) => void;
  isUserLoggedIn : () => boolean;
}

interface LoginContextProviderProps {
  children: ReactNode;
  modalInitialValue: User;
}

export const LoginContext = createContext({} as LoginContextData);

export function LoginContextProvider({
  children,
  modalInitialValue,
}: LoginContextProviderProps) {
  const [user, setUser] = useState<User>(modalInitialValue);

  const handleUserSave = useCallback((data: User) => {
    setUser(data);
  }, []);

  const isUserLoggedIn  = useCallback(() => {
    if(user.email === '')
      return false
    return true
  }, [user]);

  return (
    <LoginContext.Provider
      value={{
        user,
        handleUserSave,
        isUserLoggedIn,
      }}
    >
      {children}
    </LoginContext.Provider>
  );
}

export function useLogin() {
  const context = useContext(LoginContext);

  return context;
}
