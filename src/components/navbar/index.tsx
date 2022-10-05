import { useState } from "react";
import paws from "../../media/paws.png";
import rectangle from "../../media/rectangle.png";
import css from "./index.css";
import cross from "../../media/vector.png";
import { Subtitle, Title } from "../../ui/texts";
import { useRecoilState, useRecoilValue } from "recoil";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { LinkText } from "../../ui/texts";
import { editMode, loginState, petState } from "../../atoms";

export function Navbar(props) {
  const [display, setDisplay] = useState(false);
  const user = useRecoilValue(loginState);
  const [edit, setEdit] = useRecoilState(editMode);
  const [pet, setPet] = useRecoilState(petState);
  const token = user.token ? user.token : null;
  const navigate = useNavigate();

  const signOut = () => {
    localStorage.removeItem("loginData");
    window.location.reload();
    navigate("/");
  };

  function toggleDisplay() {
    setEdit(false);
    setPet({ ...pet, url: null });
    setDisplay(!display);
  }

  return (
    <div>
      {display ? (
        <div className={css.displayedNavBar}>
          <img
            src={cross}
            className={css.cross}
            onClick={() => setDisplay(false)}
          />

          <Link to={token ? "/datos" : "/email"} onClick={toggleDisplay}>
            <Title>Mis Datos</Title>
          </Link>

          <Link to={token ? "/reportadas" : "/email"} onClick={toggleDisplay}>
            <Title>Mis Reportadas</Title>
          </Link>

          <Link to={token ? "/publicar" : "/email"} onClick={toggleDisplay}>
            <Title>Publicar</Title>
          </Link>

          {token ? (
            <div>
              <Subtitle>{user.email}</Subtitle>
              <LinkText onClick={signOut}>cerrar sesion</LinkText>
            </div>
          ) : (
            ""
          )}
        </div>
      ) : (
        <div className={css.navContainer}>
          <img src={paws} className={css.paws} />
          <div className={css.burguer} onClick={() => setDisplay(!display)}>
            <img src={rectangle} style={{ width: "40px", height: "5px" }} />
            <img src={rectangle} style={{ width: "40px", height: "5px" }} />
            <img src={rectangle} style={{ width: "40px", height: "5px" }} />
          </div>
        </div>
      )}
    </div>
  );
}
