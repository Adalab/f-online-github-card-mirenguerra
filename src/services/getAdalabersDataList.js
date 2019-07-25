const URL = "https://api.github.com/orgs/adalab/members?per_page=10";
// const URL = 'https://raw.githubusercontent.com/Adalab/f-online-github-card-mirenguerra/dev/src/data/data.json';

const getDataList = () => {
  return fetch(URL).then(res => res.json());
};
export default getDataList;