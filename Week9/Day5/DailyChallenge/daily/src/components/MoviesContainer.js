import React from 'react';
import {connect} from 'react-redux';
import MoviesCard from './MoviesCard';

class MoviesContainer extends React.Component {

	render() {
		let {movies} = this.props;
		return(
			<>
			{(movies.length>0) && <div id="moviescontainer">
			{
				movies.map((item,i) =>{
					let {Title, Year, imdbID, Poster} = item;
					return <MoviesCard title={Title} year={Year} imdbID={imdbID} poster={Poster} key={i} />
				}
				)
			}
			</div>
		}
		</>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		movies: state.movies
	}
}


export default connect (mapStateToProps)(MoviesContainer);
