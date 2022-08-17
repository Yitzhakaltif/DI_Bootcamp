export const setNames = (name, value) => {
  return {
    type: name,
    payload: value,
  };
};

// export const findMatch = (data) => {
//   return {
//     type: "FIND_MATCH",
//     payload: data,
//   };
// };

export const findMatch = (sname, fname) => (dispatch) => {
  fetch(
    `https://love-calculator.p.rapidapi.com/getPercentage?sname=${sname}&fname=${fname}`,
    {
      method: "GET",
      headers: {
        "x-rapidapi-host": "love-calculator.p.rapidapi.com",
        "x-rapidapi-key": "b2be6074f4msh35ef9d61b0efe43p1873e3jsnbbf8c18888c0",
      },
    }
  )
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      this.props.findMatch(data);
    })
    .catch((err) => {
      console.error(err);
    });
};