// actions.ts
import { createAction } from "@reduxjs/toolkit";
export const setSearchTerm = createAction<string>("search/setSearchTerm");
export const setFilterGenre = createAction<string>("filter/setFilterGenre");
export const setFilterPublicationYear = createAction<string>(
  "filter/setFilterPublicationYear"
);
export const setFilterGenrePublicationYear = createAction<object>(
  "filter/setFilterGenrePublicationYear"
);
