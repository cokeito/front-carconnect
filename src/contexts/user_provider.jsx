import { createContext, useEffect, useState } from "react";
import { jwtDecode } from 'jwt-decode';

export const UserContext = createContext();

const UserProvider = ({ children }) => {

  const token = localStorage.getItem('token')

  const [user, setUser] = useState()

  const state = {
    user,
    setUser
  }

  useEffect(() => {

    if (token) {
      const logged_user = jwtDecode(token)
      setUser(logged_user)
    } else {
      setUser()
    }
  }, [])

  return (
    <UserContext.Provider value={state}>
      {children}
    </UserContext.Provider>
  );

}

export default UserProvider;
