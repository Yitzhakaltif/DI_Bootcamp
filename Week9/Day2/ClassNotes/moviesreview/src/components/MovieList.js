import {connect} from 'react-redux'
import {detail} from '../redux/actions';
const MovieList = (props) =>{
    return(
        <>
        <h1>MovieList</h1>
        {
            props.movies.map((movie, i)=>{
                return(
                    <div key={i}>
                        {movie.title} <button onClick={()=>props.m(movie)}>Details</button>
                    </div>
                )
            })
        }
        </>

    )
}

const mapStateToProps = (state) => {
    return{
        movies: state.movies
    }
}

const mapDispatchToProps = (dispatch)=>{
    return {
        m: (obj)=>dispatch(detail(obj))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(MovieList)