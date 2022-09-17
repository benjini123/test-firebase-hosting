import { TextField } from "../../ui/text-field";
import { Input } from "../../ui/input";
import { Caption, TextBold, Title } from "../../ui/texts";
import { useRecoilState } from "recoil";
import { Button } from "../../ui/button";
import vector from "../../media/vector.png";
import css from "./index.css";

export function ReportPetForm(props) {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        props.handleSubmit(e.target);
      }}
      className={css.form}>
      <img src={vector} className={css.vector} onClick={props.close} />

      <Title>Reportar info de {props.petName}</Title>

      <Input type="name" name="name">
        tu nombre
      </Input>

      <Input type="number" name="phone">
        tu telefono
      </Input>

      <TextField name="info">donde lo viste?</TextField>

      <Button color="#FF9DF5">Enviar</Button>
    </form>
  );
}
