import {FETCH_MOVIE, FETCH_MOVIES, LOADING} from './actions'

let initState = {
  text: '',
  movies: [],
  loading: false,
  movie: []
}

export const reducer = (state = initState, action = {}) => {
	switch (action.type) {
		case FETCH_MOVIES:
			let results = action.payload.Search ? action.payload.Search : [];
			return {
				...state,
				movies: results,
				loading:false
			};
		case FETCH_MOVIE:
			return {
				...state,
				movie: action.payload,
				loading:false
			}
		case LOADING:
			return {
				...state,
				loading:true
			}
		default:
			return {...state};
	}
}


