import React, { useState, useEffect } from "react";

const AuthContext = React.createContext({
  isLoggedIn: false,
  onLogout: function () {},
  onLogin: function(email, password){}
});

export function AuthContextProvider(props) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const storedLoginInformation = localStorage.getItem("isLoggedIn");

    if (storedLoginInformation === "1") {
      setIsLoggedIn(true);
    }
  }, []);

  function logoutHandler() {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
  }

  function loginHandler() {
    localStorage.setItem("isLoggedIn", "1");
    setIsLoggedIn(true);
  }

  return <AuthContext.Provider value={{isLoggedIn: isLoggedIn, onLogout: logoutHandler, onLogin: loginHandler}}>{props.children}</AuthContext.Provider>;
}

export default AuthContext;
