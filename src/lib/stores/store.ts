import { writable } from "svelte/store";

export interface SearchStoreModel<T extends Record<PropertyKey, any>> {
  data: T[];
  filtered: T[];
  search: string;
}

export const createSearchStore = <T extends Record<PropertyKey, any>>(
  data: T[],
) => {
  const { subscribe, set, update } = writable<SearchStoreModel<T>>({
    data: data,
    filtered: data,
    search: "",
  });

  return {
    subscribe,
    set,
    update,
  };
};

export const searchHandler = <T extends Record<PropertyKey, any>>(
  store: {
    update: (arg0: (state: SearchStoreModel<T>) => SearchStoreModel<T>) => void;
  },
  searchTerm: string,
) => {
  store.update((state) => {
    const lowerCaseSearchTerm = searchTerm.toLowerCase();
    const filteredData = state.data.filter((item) =>
      item.searchTerms.toLowerCase().includes(lowerCaseSearchTerm),
    );
    return { ...state, filtered: filteredData, search: searchTerm };
  });
};
