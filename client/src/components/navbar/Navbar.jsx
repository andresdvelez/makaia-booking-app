import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/authContext";
import { ContainerSC, ButtonSC } from "./style";

function Navbar() {
  const navigate = useNavigate();

  const { user } = useContext(AuthContext);

  return (
    <ContainerSC>
      {user ? (
        user.username
      ) : (
        <>
          <ButtonSC to="/registro">Registrarse</ButtonSC>
          <ButtonSC to="/login">Iniciar Sesión</ButtonSC>
        </>
      )}
    </ContainerSC>
  );
}

export default Navbar;
