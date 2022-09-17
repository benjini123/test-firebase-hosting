import { atom, selector } from "recoil";

export const petAtom = atom({
  key: "pets",
  default: null,
});

export const loginState = atom({
  key: "loginData",
  default: {
    email: null,
    name: null,
    password: null,
    token: null,
    userId: null,
  },
});

// export const resultsState = selector({
//   key: "loginDataSelector",
//   get: async ({ get }) => {
//     const petList = get(petAtom);
//     if (petList) {
//       return;
//     } else {
//       return [];
//     }
//   },
// });

// export const resultsState = selector({
//   key: "searchResults",
//   get: async ({ get }) => {
//     const petList = get(petAtom);
//     if (petList) {
//       return;
//     } else {
//       return [];
//     }
//   },
// });
