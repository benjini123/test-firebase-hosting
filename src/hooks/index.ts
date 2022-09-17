import { petAtom } from "../atoms";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useRecoilState, useRecoilValue } from "recoil";
import { getPetsApi } from "../lib/api";

export function findPets() {
  // const petCards = await getPetsApi(latitude, longitude);
  // setPets(petCards);
}
