import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { Expenditure } from "../../dataTypes/expenditure";
import { getExpendituresAsync } from "./dbSlice";

export interface ExpeditureState {
  expenditures: Expenditure[];
}

const initialState: ExpeditureState = {
  expenditures: [],
};

export const expeditureSlice = createSlice({
  name: "expediture",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getExpendituresAsync.fulfilled, (state, action) => {
      state.expenditures.length = 0;
      action.payload.forEach((expediture) => {
        state.expenditures.push(expediture);
      });
    });
  },
});

// selectors
export const selectExpenditures = (state: RootState) =>
  state.expenditure.expenditures;

export default expeditureSlice.reducer;
