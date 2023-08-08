// reducers.ts
import { createReducer } from "@reduxjs/toolkit";
import {
  setSearchTerm,
  setFilterGenre,
  setFilterPublicationYear,
  setFilterGenrePublicationYear,
} from "./action";
interface SearchAndFilterState {
  searchTerm: string;
  filterGenre: string;
  filterPublicationYear: string;
  filterGenrePublicationYear: object;
  isFilterGenre: boolean;
  isFilterPublication: boolean;
  isFilterGenrePublication: boolean;
}
const initialState: SearchAndFilterState = {
  searchTerm: "",
  filterGenre: "",
  filterPublicationYear: "",
  filterGenrePublicationYear:{},
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
    })
    .addCase(setFilterPublicationYear, (state, action) => {
      state.filterPublicationYear = action.payload;
      state.isFilterPublication = true;
    })
    .addCase(setFilterGenrePublicationYear, (state, action) => {
      state.filterGenrePublicationYear = action.payload;
      state.isFilterGenrePublication = true;
    });
});
export default searchAndFilterReducer;
