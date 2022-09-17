import { Caption, Title } from "../../ui/texts";
import { Button } from "../../ui/button";
import css from "./index.css";
import { PetCard } from "../../components/pet-card";
import { petAtom } from "../../atoms";
import { useRecoilState } from "recoil";
import { findPets } from "../../hooks";
import { useState } from "react";
import { getPetsApi, setFormApi } from "../../lib/api";
import { ReportPetForm } from "../../components/reportPet";

export function Reportadas() {
  return <div></div>;
}
