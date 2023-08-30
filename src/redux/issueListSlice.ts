import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getIssueList } from '../lib/api/api';
import store from './store';

const getNextIssueList = createAsyncThunk(
  'getNext',
  async () => {
    const response = await getIssueList(store.getState().issueListSlice.page);
    return response.data;
  },
  {
    condition: () => {
      return !store.getState().issueListSlice.isPending;
    },
  },
);

const issueListSlice = createSlice({
  name: 'issueListSlice',
  initialState: {
    issueList: [] as IssueContentType[],
    page: 1,
    isPending: false,
  },
  reducers: {
    setIssueList: (state, action) => {
      state.issueList = state.issueList.concat(action.payload);
    },
    addPage: state => {
      state.page += 1;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getNextIssueList.pending, state => {
        state.page += 1;
        state.isPending = true;
      })
      .addCase(getNextIssueList.fulfilled, (state, action) => {
        state.isPending = false;
        state.issueList = [...state.issueList, ...action.payload];
      })
      .addCase(getNextIssueList.rejected, state => {
        throw new Error('getNextIssueList rejected');
      });
  },
});

export const { setIssueList, addPage } = issueListSlice.actions;
export { getNextIssueList };
export default issueListSlice;
