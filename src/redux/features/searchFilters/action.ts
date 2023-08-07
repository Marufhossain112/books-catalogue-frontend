// actions.ts
import { createAction } from "@reduxjs/toolkit";

export const setSearchTerm = createAction<string>("search/setSearchTerm");
export const setFilterTitle = createAction<string>("filter/setFilterTitle");
