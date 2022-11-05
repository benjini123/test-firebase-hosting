import { Caption, Title } from "../../ui/texts";
import css from "./index.css";
import { PetCard } from "../../components/pet-card";
import { editMode, loginState, petAtom, petState } from "../../atoms";
import { useRecoilState, useRecoilValue } from "recoil";
import { useEffect, useState } from "react";
import { ReportPetForm } from "../../components/reportPet";
import { findPets } from "../../lib/pets";
import { useNavigate } from "react-router-dom";

export function Reportadas() {
  const navigate = useNavigate();
  const [pets, setPets] = useState([]);
  const [pet, setCurrentPet] = useRecoilState(petState);
  const [edit, setEdit] = useRecoilState(editMode);
  const { userId, token } = useRecoilValue(loginState);

  useEffect(() => {
    findPets(userId, token).then((petList) => {
      setPets(petList);
    });
  }, []);

  const handleClick = (i) => {
    setCurrentPet(pets[i]);
    setEdit(true);
    navigate("/publicar");
  };

  return (
    <section className={css.reportadasPage}>
      <Title>Mis mascotas reportadas</Title>
      <div className={css.petsContainer}>
        {pets.length > 0 ? (
          pets.map((pet, id) => (
            <PetCard
              key={id}
              petImage={pet.url}
              petName={pet.name}
              petLocation={pet.location}
              petId={pet.petId}
              edit={true}
              onClick={() => handleClick(id)}></PetCard>
          ))
        ) : (
          <Caption>No has reportado mascotas todavia</Caption>
        )}
      </div>
    </section>
  );
}
