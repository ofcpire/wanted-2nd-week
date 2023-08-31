import api from './axiosInstance';

const getIssueList = async (page: number) => {
  console.log(`now call ${page}page`);
  try {
    return await api.get(`issue?page=${page}`);
  } catch (err) {
    console.log(err);
    return Promise.reject(err);
  }
};

const getIssueContent = async (issueNumber: string | undefined) => {
  try {
    return await api.get(`/issue/${issueNumber}`);
  } catch (err) {
    console.log(err);
    return Promise.reject(err);
  }
};

export { getIssueList, getIssueContent };
