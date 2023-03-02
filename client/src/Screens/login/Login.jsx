import axios from "axios";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/authContext";
import { LoginSC, LContainerSC, LButtonSC, LInputSC } from "./style";

function Login() {
  const [credentials, setCredentials] = useState({
    username: undefined,
    password: undefined,
  });

  const { loading, error, dispatch } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();

    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post(
        "http://localhost:8800/api/auth/login",
        credentials
      );
      dispatch({ type: "LOGIN_SUCCESS", payload: res?.data.details });
      navigate("/");
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE", payload: err?.response.data });
    }
  };

  return (
    <LoginSC>
      <LContainerSC>
        <LInputSC
          type="text"
          placeholder="Nombre de usuario"
          id="username"
          onChange={handleChange}
        />
        <LInputSC
          type="password"
          placeholder="Contraseña"
          id="password"
          onChange={handleChange}
        />
        <LButtonSC disabled={loading} onClick={handleClick}>
          Iniciar sesión
        </LButtonSC>
        {error && <span>{error.message}</span>}
      </LContainerSC>
    </LoginSC>
  );
}

export default Login;
