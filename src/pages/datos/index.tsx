import { Button } from "../../ui/button";
import css from "./index.css";
import { Input } from "../../ui/input";
import { signIn, signUpApi, updateUser } from "../../lib/login";
import { useRecoilState } from "recoil";
import { loginState } from "../../atoms";
import { useNavigate } from "react-router-dom";

export function Datos() {
  const [user, setUser] = useRecoilState(loginState);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const target = e.target;
    const password = target.password.value;
    const confirmPassword = target.confirmPassword.value;
    const name = target.name.value;
    const { email, token } = user.email;

    if (name == "" || password == "") {
      throw window.alert(
        "el nombre o la contraseña no pueden quedar en blanco"
      );
    }

    if (password !== confirmPassword) {
      throw window.alert("Las contraseñas deben coincidir");
    }

    if (token) {
      await updateUser(name, password, email, token);
      setUser({ ...user, name, password });
      navigate("/");
    } else {
      const userId = await signUpApi(name, password, email);
      const token = await signIn(email, password);

      localStorage.setItem(
        "loginData",
        JSON.stringify({ name, email, password, userId, token })
      );

      setUser({ ...user, name, password, token, userId });
      console.log("user with name: " + name + "has successfully been created");
      navigate("/");
    }
  };

  return (
    <form className={css.datosPage} onSubmit={handleSubmit}>
      <Input name="name" value={user.name ? user.name : ""}>
        Nombre
      </Input>
      <div className={css.contraseñas}>
        <Input
          autoComplete="on"
          name="password"
          type="password"
          value={user.password ? user.password : ""}>
          Contraseña
        </Input>
        <Input
          autoComplete="on"
          name="confirmPassword"
          type="password"
          value={user.password ? user.password : ""}>
          repetir contraseña
        </Input>
        <Button color="#FF9DF5">guardar</Button>
      </div>
    </form>
  );
}
