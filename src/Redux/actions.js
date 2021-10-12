export let increment = (v) => {
  return {
    type: "INCREMENT",
    payload: v,
  };
};
export let decrement = (v) => {
  return {
    type: "DECREMENT",
    payload: v,
  };
};
