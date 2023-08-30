import { configureStore } from '@reduxjs/toolkit';
import issueListSlice from './issueListSlice';
import isLoadingSlice from './isLoadingSlice';

const store = configureStore({
  reducer: {
    issueListSlice: issueListSlice.reducer,
    isLoadingSlice: isLoadingSlice.reducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export default store;
