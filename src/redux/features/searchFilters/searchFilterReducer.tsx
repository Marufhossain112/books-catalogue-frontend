// reducers.ts
import { createReducer } from "@reduxjs/toolkit";
import {
  setSearchTerm,
  setFilterGenre,
  setFilterPublicationYear,
  setFilterGenrePublicationYear,
} from "./searchFilterAction";
type SearchAndFilterState = {
  searchTerm: string;
  filterGenre: string;
  filterPublicationYear: string;
  filterGenrePublicationYear: object;
  isFilterGenre: boolean;
  isFilterPublication: boolean;
  isFilterGenrePublication: boolean;
};
const initialState: SearchAndFilterState = {
  searchTerm: "",
  filterGenre: "",
  filterPublicationYear: "",
  filterGenrePublicationYear: {},
  isFilterGenre: false,
  isFilterPublication: false,
  isFilterGenrePublication: false,
};
const searchAndFilterReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setSearchTerm, (state, action) => {
      state.searchTerm = action.payload;
    })
    .addCase(setFilterGenre, (state, action) => {
      state.filterGenre = action.payload;
      state.isFilterGenre = true;
      // Clear the filterGenrePublicationYear state
      state.filterGenrePublicationYear = {};
      state.isFilterGenrePublication = false;
    })
    .addCase(setFilterPublicationYear, (state, action) => {
      state.filterPublicationYear = action.payload;
      state.isFilterPublication = true;
      // Clear the filterGenrePublicationYear state
      state.filterGenrePublicationYear = {};
      state.isFilterGenrePublication = false;
    })
    .addCase(setFilterGenrePublicationYear, (state, action) => {
      state.filterGenrePublicationYear = {
        ...state.filterGenrePublicationYear,
        ...action.payload,
      };
      state.isFilterGenrePublication = true;
    });
});
export default searchAndFilterReducer;
