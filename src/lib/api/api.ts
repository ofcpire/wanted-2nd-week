import api from './axiosInstance';
import { setIssueList } from '../../redux/issueListSlice';

const getIssueList = async (page: number) => {
  console.log(`now call ${page}page`);
  try {
    return await api.get(
      `https://api.github.com/repos/facebook/react/issues?filter=all&sort=comments&page=${page}`,
    );
  } catch (err) {
    console.log(err);
    return Promise.reject(err);
  }
};

const getIssueContent = async (issueNumber: string | undefined) => {
  try {
    return await api.get(`https://api.github.com/repos/facebook/react/issues/${issueNumber}`);
  } catch (err) {
    console.log(err);
    return Promise.reject(err);
  }
};

export { getIssueList, getIssueContent };
