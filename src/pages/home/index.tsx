import { Caption, Title } from "../../ui/texts";
import { Button } from "../../ui/button";
import css from "./index.css";
import { PetCard } from "../../components/pet-card";
import { loginState, petAtom, userCoordinates } from "../../atoms";
import { useRecoilState } from "recoil";
import { useEffect, useState } from "react";
import { getPetsApi, setFormApi } from "../../lib/api";
import { ReportPetForm } from "../../components/reportPet";

export function Home() {
  const [pets, setPets] = useState([]);
  const [form, setForm] = useState(null);
  const [coords, setCoords] = useRecoilState(userCoordinates);
  const [user, setUser] = useRecoilState(loginState);

  async function handleClick() {
    window.navigator.geolocation.getCurrentPosition(async (position: any) => {
      const { latitude, longitude } = position.coords;
      setCoords([latitude, longitude]);
    });
  }

  useEffect(() => {
    if (coords) {
      const fetchData = async () => {
        const latitude = coords[0];
        const longitude = coords[1];
        const petData = await getPetsApi(latitude, longitude);
        setPets(petData);
      };
      fetchData().catch(console.error);
    }
  }, [coords]);

  async function showForm(key) {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
    setForm(pets[key]);
  }

  function submitForm(data) {
    const name = data.name.value;
    const phone = data.phone.value;
    const info = data.info.value;

    if (!name || !phone || !info) {
      alert("faltan datos");
      return;
    }

    const report = {
      name,
      phone,
      info,
      petId: form.objectID,
      userId: form.userId,
    };

    setFormApi(report).then((res) => {
      if (res) {
        console.log("Report has succesfully been created!!");
        console.log({ ReportData: report });
        setForm(null);
      }
    });
  }

  return (
    <div className={css.homeContainer} id="top">
      {form ? (
        <ReportPetForm
          petName={form.name}
          close={() => {
            setForm(null);
          }}
          handleSubmit={(data) => {
            submitForm(data);
          }}></ReportPetForm>
      ) : (
        ""
      )}
      <Title>Mascotas perdidas cerca tuyo</Title>
      {!coords ? (
        <div>
          <Caption>
            Para ver las mascotas reportadas cerca tuyo necesitamos permiso para
            conocer tu ubicación.
          </Caption>
          <Button
            onClick={() => {
              handleClick();
            }}
            color="#FF9DF5">
            Dar mi ubicacion
          </Button>
        </div>
      ) : pets.length > 0 ? (
        pets.map((e: any, key) => {
          return (
            <PetCard
              key={key}
              petName={e.name}
              petImage={e.url}
              petLocation={e.location}
              petId={e.objectID}
              onReport={() => {
                showForm(key);
              }}
            />
          );
        })
      ) : (
        <div>
          <Caption>no hay mascotas perdidas cerca tuyo</Caption>
        </div>
      )}
    </div>
  );
}
