import { useContext } from "react";
import AuthContext from "./context";
import authStorage from "./storage";

var Buffer = require("buffer/").Buffer;
export default useAuth = () => {
  const { user, setUser } = useContext(AuthContext);

  const logIn = (authToken) => {
    const parts = authToken.split(".");
    const user = Buffer.from(parts[1], "base64").toString("utf-8");
    setUser(user);
    authStorage.storeToken(authToken);
  };

  const register = (authToken) => {
    logIn(authToken);
  };

  const logOut = () => {
    setUser(null);
    authStorage.removeToken();
  };

  return { user, logIn, logOut, register };
};
