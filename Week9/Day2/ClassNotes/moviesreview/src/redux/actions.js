export const MOVIE_DETAIL = 'MOVIE_DETAIL';
export const GET_USERS = 'GET_USERS';
export const SEARCH_USERS = 'SEARCH_USERS';



export const detail = (movie) => {
  return {
    type: MOVIE_DETAIL,
    payload: movie
  }
}

export const search = (txt)=>{
    return{
        type:SEARCH_USERS,
        payload:txt
    }
}




// redux - js
// js - sync
// dispatch -> fetch -> reducer
export const getUsers = () => (dispatch, store) =>  {
  console.log("store=>", store().users );
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(res => res.json())
  .then(data => {

    dispatch({type:GET_USERS,payload:data})

  })
  .catch(e => {
    console.log(e);
  })
}

