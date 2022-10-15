import { Caption, Title } from "../../ui/texts";
import { Button } from "../../ui/button";
import css from "./index.css";
import { PetCard } from "../../components/pet-card";
import { petAtom } from "../../atoms";
import { useRecoilState } from "recoil";
import { useState } from "react";
import { getPetsApi, setFormApi } from "../../lib/api";
import { ReportPetForm } from "../../components/reportPet";

export function Home() {
  const [pets, setPets] = useState(null);
  const [form, setForm] = useState(null);

  async function handleClick() {
    window.navigator.geolocation.getCurrentPosition(async (position: any) => {
      const { latitude, longitude } = position.coords;
      const petData = await getPetsApi(latitude, longitude);
      setPets(petData);
    });
  }

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

    setFormApi(report).then(() => {
      setForm(null);
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
      {pets ? (
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
              }}></PetCard>
          );
        })
      ) : (
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
      )}
    </div>
  );
}
