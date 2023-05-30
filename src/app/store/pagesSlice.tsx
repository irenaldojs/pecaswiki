import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface PageState {
  current: string;
}

const initialState: PageState = {
  current: '/',
};

const pagesSlice = createSlice({
  name: 'pages',
  initialState,
  reducers: {
    setPages: (state, action: PayloadAction<string>) => {
      state.current = action.payload;
    },
  },
});

export const { setPages } = pagesSlice.actions;

export default pagesSlice.reducer;
