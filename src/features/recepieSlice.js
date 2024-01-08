import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  reciepies: [],
  myRecipie: {},
};

const recepieSlice = createSlice({
  name: "recepie",
  initialState,
  reducers: {
    saveRecipies: (state, action) => {
      state.reciepies = action.payload;
    },
    saveRecipie: (state, action) => {
      state.myRecipie = action.payload;
    },
  },
});

export default recepieSlice.reducer;
export const { saveRecipies, saveRecipie } = recepieSlice.actions;
