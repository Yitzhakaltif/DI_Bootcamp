const increase = (count) => {
    return {
      type: "INCREASE_COUNT",
      payload: count,
    };
  };
  
  const decrease = (count) => {
    return {
      type: "DECREASE_COUNT",
      payload: count,
    };
  };
  
  export { increase, decrease };