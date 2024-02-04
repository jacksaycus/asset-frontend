import * as React from "react";
import AuthContext from "./AuthContext";

export default function AuthProvider ({ children }) {
    //const [isAuthenticated, setIsAuthenticated] = React.useState(false);
    const isAuthenticated = window.sessionStorage.getItem('isAuthenticated')
    const login = () => {
        window.sessionStorage.setItem('isAuthenticated', 'true');
    };
  
    const logout = () => {
      //setIsAuthenticated(false);
    };
    // React.useEffect(() => {
    //     console.log(isAuthenticated)
    //   }, [])

    return (
      <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
        {children}
      </AuthContext.Provider>
    );
  }