import { atom, selector, useRecoilState } from "recoil";
import { recoilPersist } from "recoil-persist";
const { persistAtom } = recoilPersist();

export const petAtom = atom({
  key: "pets",
  default: null,
});

export const petState = atom({
  key: "currentPet",
  default: {
    id: null,
    url: null,
    name: null,
    location: null,
    lat: null,
    lng: null,
    userId: null,
  },
});

export const editMode = atom({
  key: "editMode",
  default: false,
});

export const fileState = atom({
  key: "files",
  default: null,
});

export const userCoordinates = atom({
  key: "coords",
  default: null,
  effects_UNSTABLE: [persistAtom],
});

// const loginData = JSON.parse(localStorage.getItem("loginData"));

export const loginState = atom({
  key: "loginData",
  default: {},
  effects_UNSTABLE: [persistAtom],
});

export const locationState = atom({
  key: "locationData",
  default: "",
});

export const loginDataSelector = selector({
  key: "loginDataSelector",
  get: async ({ get }) => {
    const petList = get(petAtom);
    if (petList) {
      return;
    } else {
      return [];
    }
  },
});

// export const queryState = atom({
//   key: "query",
//   default: "",
// });

// export const resultsState = selector({
//   key: "locationResults",
//   get: async ({ get }) => {
//     const valorDeQuery = get(queryState);
//     if (valorDeQuery) {
//       const res = await fetch(valorDeQuery);
//       const json = await res.json();

//       return json.results;
//     } else {
//       return [];
//     }
//   },
// });
