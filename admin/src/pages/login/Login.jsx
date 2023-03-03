import axios from "axios";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/authContext";
import "./login.scss";

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
      if (res.data.isAdmin) {
        dispatch({ type: "LOGIN_SUCCESS", payload: res?.data.details });
        navigate("/");
      } else {
        dispatch({
          type: "LOGIN_FAILURE",
          payload: { message: "You are not allowed!" },
        });
      }
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE", payload: err?.response.data });
    }
  };

  return (
    <section className="login">
      <div className="lcontainer">
        <input
          type="text"
          placeholder="Nombre de usuario"
          id="username"
          className="linput"
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="Contraseña"
          id="password"
          className="linput"
          onChange={handleChange}
        />
        <button className="lbutton" disabled={loading} onClick={handleClick}>
          Iniciar sesión
        </button>
        {error && <span>{error.message}</span>}
      </div>
    </section>
  );
}

export default Login;
