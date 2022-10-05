import { Caption, LinkText, Title } from "../../ui/texts";
import { Button } from "../../ui/button";
import css from "./index.css";
import { Input } from "../../ui/input";
import { MapboxMap } from "../../components/map";
import { MyDropzone } from "../../components/dropzone";
import { useRecoilState, useRecoilValue } from "recoil";
import { editMode, petState } from "../../atoms";
import { Navigate, useNavigate, useSearchParams } from "react-router-dom";
import { publishPet } from "../../lib/pets";

export function Publicar() {
  const [pet, setCurrentPet] = useRecoilState(petState);
  const edit = useRecoilValue(editMode);

  const navigate = useNavigate();

  let coords: any;
  let base64Img: any;

  const handleImage = (img) => {
    base64Img = img;
  };

  const handleChange = (data) => {
    coords = data.coords;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const nombre = e.target.name.value;
    const location = e.target.location.value;
    const url = base64Img;
    const [latitud, longitud] = coords;
    const petObj = { nombre, location, latitud, longitud, url };
    publishPet(petObj).then(() => navigate("/reportadas"));
  };

  return (
    <form className={css.publicarForm} onSubmit={handleSubmit}>
      <Title>Reportar mascota perdida</Title>
      <Input name="name" value={edit ? pet.name : ""}>
        nombre
      </Input>
      <MyDropzone
        onLoad={(base64Img) => {
          handleImage(base64Img);
        }}></MyDropzone>

      <MapboxMap
        onChange={(data) => handleChange(data)}
        value={edit ? pet.location : ""}></MapboxMap>
      <Caption>
        Buscá un punto de referencia para reportar a tu mascota. Puede ser una
        dirección, un barrio o una ciudad.
      </Caption>
      <div className={css.buttonGroup}>
        {edit ? (
          <div>
            <Button color="#FF9DF5" type="submit">
              Guardar
            </Button>
            <Button color="#97EA9F">Reportar como encontrado</Button>
            <Button>
              <LinkText color="#FF3A3A">Despublicar</LinkText>
            </Button>
          </div>
        ) : (
          <div>
            <Button type="submit" color="#FF9DF5">
              Reportar como perdida
            </Button>
            <Button color="#CDCDCD">Cancelar</Button>
          </div>
        )}
      </div>
    </form>
  );
}
