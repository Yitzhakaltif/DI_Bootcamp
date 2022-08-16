import {connect} from 'react-redux';
import {increase, decrease, evenodd}from '../actions/index'

const Counter = (props) => {
    return(
        <>
            <h2>Counter</h2>
            <button onClick={()=>{props.d(); props.e(props.c())}}>-</button>
            {props.c}
            <button onClick={()=>{props.i(); props.e(props.c())}}>+</button>

            <div>
            Even / Odd: {props.evenodd}
            </div>

        </>
    )
}

const mapsStateToProps = (state)=>{
    return {
        c:state.counter_reducer.count,
        evenodd: state.evenodd_reducer.evenodd
    }
}

const mapDispatchToProps = (dispatch) =>{
    return {
        i: () => dispatch(increase()),
        d: () => dispatch(decrease()),
        e: (count) => dispatch(evenodd(count))
    }
}
export default connect(mapsStateToProps, mapDispatchToProps)(Counter)