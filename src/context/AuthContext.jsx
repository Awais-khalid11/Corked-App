import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();


export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  // ✅ Restore user from localStorage on mount
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const login = (email, password) => {
    console.log(email,password)
    if (email == "admin@gv.com" && password == "admin@gv.com") {
      const adminUser = { id: 1, role: "admin", email };
      setUser(adminUser);
      localStorage.setItem("user", JSON.stringify(adminUser));
      navigate("/dashboard");
    } else {
      const wineryUser = { id: 2, role: "winery", email };
      setUser(wineryUser);
      localStorage.setItem("user", JSON.stringify(wineryUser));
      navigate("/dashboard");
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
    navigate("/login-page");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
