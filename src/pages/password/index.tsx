import { Caption, LinkText, Title } from "../../ui/texts";
import { Button } from "../../ui/button";
import css from "./index.css";
import { Input } from "../../ui/input";
import { signIn } from "../../lib/login";
import { useRecoilState, useRecoilValue } from "recoil";
import { loginState } from "../../atoms";
import { useNavigate } from "react-router-dom";

export function Password() {
  const [user, setUser] = useRecoilState(loginState);
  const navigate = useNavigate();

  const forgotPass = () => {
    alert("not my problem ¯_(ツ)_/¯ ");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const password = e.target.password.value;
    const { email, name, userId } = user;

    const token = await signIn(email, password);
    if (token) {
      setUser({ ...user, token, password });
      navigate("/");
    } else {
      window.alert("wrong password");
    }
  };

  return (
    <form className={css.passwordPage} onSubmit={handleSubmit}>
      <Input name="password" type="password" autoComplete="on">
        password
      </Input>
      <div className={css.link} onClick={forgotPass}>
        <LinkText>olvidé mi contraseña</LinkText>
      </div>
      <Button color="#FF9DF5">Ingresar</Button>
    </form>
  );
}
