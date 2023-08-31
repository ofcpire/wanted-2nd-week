import { getIssueList, getIssueContent } from './api';
import store from '../../redux/store';
import { setIssueList } from '../../redux/issueListSlice';
import { setIsLoading } from '../../redux/isLoadingSlice';

const issueListPathLoader = async () => {
  if (store.getState().issueListSlice.issueList.length === 0) {
    try {
      await getIssueList(1).then(response => {
        store.dispatch(setIssueList(response.data));
        store.dispatch(setIsLoading(true));
      });
      return true;
    } catch (err) {
      throw new Response('Not Found', { status: 404 });
    }
  } else {
    store.dispatch(setIsLoading(true));
    return true;
  }
};

const issueContentPathLoader = async (IssueNumber: string | undefined) => {
  try {
    const response = await getIssueContent(IssueNumber);
    store.dispatch(setIsLoading(true));
    return response.data;
  } catch (err) {
    throw new Response('Not Found', { status: 404 });
  }
};

export { issueListPathLoader, issueContentPathLoader };
