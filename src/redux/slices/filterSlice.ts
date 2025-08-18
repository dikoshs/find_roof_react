import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface FilterRequest {
  city: string;
  priceFrom: string;
  priceTo: string;
  rooms: string;
  dealType: "rent" | "buy" | "";
  startDate: string;
  endDate: string;
}

const initialState: FilterRequest = {
  city: "",
  priceFrom: "",
  priceTo: "",
  rooms: "",
  dealType: "",
  startDate: "",
  endDate: "",
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setFilter: (
      state,
      action: PayloadAction<{ key: keyof FilterRequest; value: string }>
    ) => {
      state[action.payload.key] = action.payload.value as never;
    },
    resetFilter: () => initialState,
  },
});

export const { setFilter, resetFilter } = filterSlice.actions;
export default filterSlice.reducer;
