import { createAsyncThunk } from "@reduxjs/toolkit";
import { Expenditure } from "../../dataTypes/expenditure";
import { putExpenditure, getExpenditures } from "../../storage/indexedDb";

export const putExpenditureAsync = createAsyncThunk<void, Expenditure>(
  "expenditure/postExpenditure",
  async (expediture: Expenditure) => {
    return await putExpenditure(expediture);
  }
);

export const getExpendituresAsync = createAsyncThunk<
  Expenditure[],
  { year: number; month: number }
>("expenditure/getExpenditures", async ({ year, month }) => {
  return await getExpenditures(year, month);
});
