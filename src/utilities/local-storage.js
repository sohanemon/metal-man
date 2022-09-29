const key = "break-time";
const addBreakTimeToLS = (time) => {
  localStorage.setItem(key, time);
};
const getBreakTimeFromLS = () => {
  return parseInt(localStorage.getItem(key));
};

export { addBreakTimeToLS, getBreakTimeFromLS };
