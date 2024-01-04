import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  reciepies: [],
};

const recepieSlice = createSlice({
  name: "recepie",
  initialState,
  reducers: {
    saveRecipies: (state, action) => {
      state.reciepies = action.payload;
    },
  },
});

export default recepieSlice.reducer;
export const { saveRecipies } = recepieSlice.actions;
