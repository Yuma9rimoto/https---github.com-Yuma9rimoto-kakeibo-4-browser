import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

export interface DateState {
  year: number;
  month: number;
  day: number;
}

const initialState: DateState = {
  year: new Date().getFullYear(),
  month: new Date().getMonth() + 1,
  day: new Date().getDate(),
};

const state2Date = (state: DateState): Date => {
  return new Date(state.year, state.month - 1, state.day);
};

export const dateSlice = createSlice({
  name: "date",
  initialState: initialState,
  reducers: {
    setDate: (state, action: PayloadAction<number>) => {
      const date = new Date(action.payload);
      state.year = date.getFullYear();
      state.month = date.getMonth() + 1;
      state.day = date.getDate();
    },
    // 翌年
    nextYear: (state) => {
      state.year++;
      const date = state2Date(state);
      dateSlice.caseReducers.setDate(
        state,
        dateSlice.actions.setDate(date.getTime())
      );
    },
    // 昨年
    prevYear: (state) => {
      state.year--;
      const date = state2Date(state);
      dateSlice.caseReducers.setDate(
        state,
        dateSlice.actions.setDate(date.getTime())
      );
    },
    // 翌月
    nextMonth: (state) => {
      state.month++;
      const date = state2Date(state);
      dateSlice.caseReducers.setDate(
        state,
        dateSlice.actions.setDate(date.getTime())
      );
    },
    // 先月
    prevMonth: (state) => {
      state.month--;
      const date = state2Date(state);
      dateSlice.caseReducers.setDate(
        state,
        dateSlice.actions.setDate(date.getTime())
      );
    },
    // 翌日
    nextDay: (state) => {
      state.day++;
      const date = state2Date(state);
      dateSlice.caseReducers.setDate(
        state,
        dateSlice.actions.setDate(date.getTime())
      );
    },
    // 昨日
    prevDay: (state) => {
      state.day--;
      const date = state2Date(state);
      dateSlice.caseReducers.setDate(
        state,
        dateSlice.actions.setDate(date.getTime())
      );
    },
  },
});

// export Actions
export const { nextYear, prevYear, nextMonth, prevMonth, setDate } =
  dateSlice.actions;

// selectors
export const selectYear = (state: RootState) => state.date.year;
export const selectMonth = (state: RootState) => state.date.month;

export default dateSlice.reducer;
