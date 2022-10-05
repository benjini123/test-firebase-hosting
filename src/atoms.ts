import { atom, selector, useRecoilState } from "recoil";

export const petAtom = atom({
  key: "pets",
  default: null,
});

export const petState = atom({
  key: "currentPet",
  default: {
    url: null,
    preview: null,
    name: null,
    location: null,
    latitud: null,
    longitud: null,
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

const loginData = JSON.parse(localStorage.getItem("loginData")) || null;

export const loginState = atom({
  key: "loginData",
  default: {
    email: loginData ? loginData.email : null,
    name: loginData ? loginData.name : null,
    password: loginData ? loginData.password : null,
    token: loginData ? loginData.token : null,
    userId: loginData ? loginData.userId : null,
  },
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
