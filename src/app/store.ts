import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import dateReduce from "./slice/dateSlice";
import expenditureReduce from "./slice/expenditureSlice";
import expenditureFornReduce from "./slice/expenditureFormSlice";

export const store = configureStore({
  reducer: {
    date: dateReduce,
    expenditure: expenditureReduce,
    expenditureForn: expenditureFornReduce,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
