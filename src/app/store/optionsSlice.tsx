import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface OptionsState {
  index: number;
}

const initialState: OptionsState = {
  index: 0,
};

const optionsSlice = createSlice({
  name: 'options',
  initialState,
  reducers: {
    setOptions: (state, action: PayloadAction<number>) => {
      state.index = action.payload;
    },
    defaltOptions: (state) => {
      state.index = 0;
    },
  },
});

export const { setOptions, defaltOptions } = optionsSlice.actions;
export default optionsSlice.reducer;
