import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

export interface DialogFormParam {
  price: number;
  productName: string;
  date: string;
}

const initialState: DialogFormParam = {
  price: 0,
  productName: "",
  date: new Date().toISOString(),
};

export const expenditureFormSlice = createSlice({
  name: "expenditureForm",
  initialState: initialState,
  reducers: {
    setPrice: (state, action: PayloadAction<number>) => {
      state.price = action.payload;
    },
    setproductName: (state, action: PayloadAction<string>) => {
      state.productName = action.payload;
    },
    setDate: (state, action: PayloadAction<Date>) => {
      state.date = action.payload.toISOString();
    },
  },
});

// export Actions
export const { setPrice, setproductName, setDate } =
  expenditureFormSlice.actions;

// selectors
export const selectPrice = (state: RootState) => state.expenditureForn.price;
export const selectDate = (state: RootState) =>
  new Date(state.expenditureForn.date);
export const selectProductName = (state: RootState) =>
  state.expenditureForn.productName;

export default expenditureFormSlice.reducer;
