import { AuthHost, Host } from "./index";
import jwtDecode from "jwt-decode";

const Login = async (email, password) => {
  const { data } = await Host.post("api/user/login", { email, password });
  localStorage.setItem("token", data.token);
  return jwtDecode(data.token);
};

const Check = async () => {
  const { data } = await AuthHost.get("api/user/auth");
  localStorage.setItem("token", data.token);
  return jwtDecode(data.token);
};

export { Login, Check };
