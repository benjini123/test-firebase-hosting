import { Caption, LinkText, Title } from "../../ui/texts";
import { Button } from "../../ui/button";
import css from "./index.css";
import { Input } from "../../ui/input";
import { MapboxMap } from "../../components/map";
import { MyDropzone } from "../../components/dropzone";
import { useRecoilState, useRecoilValue } from "recoil";
import { editMode, loginState, petState } from "../../atoms";
import { Navigate, useNavigate, useSearchParams } from "react-router-dom";
import { editPet, publishPet, removePetApi } from "../../lib/pets";
import { useEffect, useState } from "react";

export function Publicar() {
  //
  const navigate = useNavigate();
  const edit = useRecoilValue(editMode);
  const pet = useRecoilValue(petState);
  const user = useRecoilValue(loginState);
  //
  const [coords, setCoords] = useState(null);
  const [location, setLocation] = useState(null);

  useEffect(() => {
    if (!edit) return;
    const { lat, lng } = pet;
    setCoords([lat, lng]);
    setLocation(pet.location);
  }, []);

  async function handleMapboxData(data) {
    const { lng, lat } = data.coords;
    setCoords([lng, lat]);
    setLocation(data.location);
  }

  async function removePet() {
    const petId = pet.id;
    const { token } = user;
    await removePetApi(petId, token);
    console.log("pet with id: " + petId + " has been removed from database");
    navigate("/reportadas");
  }

  const cancelPublish = (e) => {
    e.preventDefault();
    navigate("/reportadas");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const nombre = e.target.name.value;
    const { url, id } = pet;
    const { userId, token } = user;

    if (!nombre || !location || !url) {
      alert("faltan datos");
      return;
    }

    const longitud = coords[0];
    const latitud = coords[1];

    const petObj = { userId, nombre, location, latitud, longitud, url };

    if (edit) {
      editPet(petObj, id, token).then(() => {
        console.log({ petEdit: petObj });
        navigate("/reportadas");
      });
    } else {
      publishPet(petObj, token).then(() => {
        console.log({ newPet: petObj });
        navigate("/reportadas");
      });
    }
  };

  return (
    <form className={css.publicarForm} onSubmit={handleSubmit}>
      <div style={{ marginBottom: 15, marginTop: 8 }}>
        <Title>Reportar mascota perdida</Title>
      </div>
      <Input name="name" value={edit ? pet.name : ""}>
        nombre
      </Input>
      <MyDropzone />
      <MapboxMap
        onChange={(data) => {
          handleMapboxData(data);
        }}
        value={edit ? pet.location : ""}></MapboxMap>
      <Caption style={{ marginBottom: 15 }}>
        Buscá un punto de referencia para reportar a tu mascota. Puede ser una
        dirección, un barrio o una ciudad.
      </Caption>

      {edit ? (
        <div className={css.buttonGroup}>
          <Button color="#FF9DF5" type="submit">
            Guardar
          </Button>

          <Button type="button">
            <LinkText color="#FF3A3A" onClick={removePet}>
              Despublicar
            </LinkText>
          </Button>
        </div>
      ) : (
        <div className={css.buttonGroup}>
          <Button type="submit" color="#FF9DF5">
            Reportar como perdida
          </Button>
          <Button type="button" color="#CDCDCD" onClick={cancelPublish}>
            Cancelar
          </Button>
        </div>
      )}
    </form>
  );
}
