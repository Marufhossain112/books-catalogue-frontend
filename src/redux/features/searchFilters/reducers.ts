// reducers.ts
import { createReducer } from "@reduxjs/toolkit";
import { setSearchTerm, setFilterTitle } from "./action";
interface SearchAndFilterState {
  searchTerm: string;
  filterTitle: string;
}

const initialState: SearchAndFilterState = {
  searchTerm: "",
  filterTitle: "",
};

const searchAndFilterReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setSearchTerm, (state, action) => {
      state.searchTerm = action.payload;
    })
    .addCase(setFilterTitle, (state, action) => {
      state.filterTitle = action.payload;
    });
});

export default searchAndFilterReducer;
