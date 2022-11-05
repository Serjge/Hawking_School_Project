import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type TestState = {
  value: string
}

const initialState: TestState = {
  value: 'hello',
};

const testSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    changeValue: (state, action: PayloadAction< string >) => {
      state.value = action.payload
    },
  },
});

export const { changeValue } = testSlice.actions;

export const testReducer = testSlice.reducer;