import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  outerConfig: {
    configA: {
      comA: 1,
    },
    configB: {
      comB: 2,
    },
    configC: {
      comC: 3,
    },
  },
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.outerConfig.configA.comA += 1;
    },
    decrement: (state) => {
      state.outerConfig.configA.comA -= 1;
    },
    incrementByAmount: (state, action) => {
      state.outerConfig.configA.comA += action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export default counterSlice.reducer;
