import { Caption, Title } from "../../ui/texts";
import { Button } from "../../ui/button";
import css from "./index.css";
import { Input } from "../../ui/input";
import { MapboxMap } from "../../components/map";
import { MyDropzone } from "../../components/dropzone";

export function Publicar() {
  return (
    <form>
      <Title>Reportar mascota perdida</Title>
      <Input name="name">nombre</Input>
      <MyDropzone></MyDropzone>
      <Button color="#97EA9F">agregar/modificar foto</Button>
      <MapboxMap></MapboxMap>
      <Input name="location">ubicacion</Input>
      <Button color="#97EA9F">Go</Button>
      <Caption>
        Buscá un punto de referencia para reportar a tu mascota. Puede ser una
        dirección, un barrio o una ciudad.
      </Caption>
      <Button type="submit" color="#FF9DF5">
        Reportar como perdida
      </Button>
      <Button color="#CDCDCD">Cancelar</Button>
    </form>
  );
}
