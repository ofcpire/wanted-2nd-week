import api from './axiosInstance';

const getIssueList = async (page: number) => {
  try {
    return await api.get(`issue?page=${page}`);
  } catch (err) {
    return Promise.reject(err);
  }
};

const getIssueContent = async (issueNumber: string | undefined) => {
  try {
    return await api.get(`/issue/${issueNumber}`);
  } catch (err) {
    return Promise.reject(err);
  }
};

export { getIssueList, getIssueContent };
