let initState = {
    fname: "",
    sname: "",
    results: {},
  };
  
  export const reducer = (state = initState, action = {}) => {
    switch (action.type) {
      case "fname":
        return { ...state, fname: action.payload };
      case "sname":
        return { ...state, sname: action.payload };
      case "FIND_MATCH":
        return { ...state, results: action.payload };
      default:
        return { ...state };
    }
  };