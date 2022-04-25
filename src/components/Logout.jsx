import { createContext, useContext } from "react";
import { AuthContext } from "../context/Auth";

export const LogoutContext = createContext()
export const Logout = ({children}) => {
  // log user out. it's just an inmemory value in context api
  const {setIsAuth} = useContext(AuthContext);

  const handleLogout = ()=>{
    setIsAuth(false);
  }

  return <LogoutContext.Provider value={handleLogout}>{children}</LogoutContext.Provider>
};
