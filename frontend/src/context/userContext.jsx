import React, { createContext, useContext, useState,useEffect } from "react";
import { useCookies } from "react-cookie";
import axios from "axios";

const UserContext = createContext();

export const UserProvider = ({children})=>{
    const [loguser,setLogUser] = useState(null);
    const [cookies, setCookie, removeCookie] = useCookies("token");
    const [loading, setLoading] = useState(true);

    const logout = ()=>{
        removeCookie("token",{path:"/"});
        setLogUser(null); 
    }
     useEffect(() => {
    const verifyUser = async () => {
      if (!cookies.token) {
        setLoading(false);
        return;
      }

      try {
        const res = await axios.post(
          "http://localhost:8080/api/auth/verify",
          {},
              { withCredentials: true }
        );
        setLogUser(res.data); 
      } catch (err) {
        console.error("Verification failed", err);
        setLogUser(null);
      } finally {
        setLoading(false);
      }
    };

    verifyUser();
  }, [cookies.token]);
  
    return(
        <UserContext.Provider value={{loguser, setLogUser, logout, loading,}}>
            {children}
        </UserContext.Provider>
    )

}

export const useUser = ()=> useContext(UserContext);