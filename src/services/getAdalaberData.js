const getAdalaberData = (URL) => {
  return fetch(URL).then(res => res.json());
};
export default getAdalaberData;