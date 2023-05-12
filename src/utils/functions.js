const setDataToStorage = (key, data) => {
  const Reference = JSON.parse(localStorage.getItem(key));
  if (!Reference) {
    localStorage.setItem(key, JSON.stringify([data]));
  } else {
    Reference.push(data);
    localStorage.setItem(key, JSON.stringify(Reference));
  }
};
const getDataFromStorage = (key) => {
  return JSON.parse(localStorage.getItem(key));
};
module.exports = { setDataToStorage, getDataFromStorage };
