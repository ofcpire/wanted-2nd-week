import { PayloadAction, createSlice } from '@reduxjs/toolkit';

const isLoadingSlice = createSlice({
  name: 'isLoading',
  initialState: false,
  reducers: {
    setIsLoading: (state, action: PayloadAction<boolean>) => {
      return action.payload;
    },
  },
});

export const { setIsLoading } = isLoadingSlice.actions;
export default isLoadingSlice;
