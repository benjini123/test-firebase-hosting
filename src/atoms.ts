import { atom, selector } from "recoil";

export const queryState = atom({
  key: "query",
  default: "",
});

export const resultsState = selector({
  key: "searchResults",
  get: async ({ get }) => {
    const valorDeQuery = get(queryState);
    if (valorDeQuery) {
      const res = await fetch(
        "https://api.mercadolibre.com/sites/MLA/search?q=" + valorDeQuery
      );
      const json = await res.json();

      return json.results;
    } else {
      return [];
    }
  },
});
