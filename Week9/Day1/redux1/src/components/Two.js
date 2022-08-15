import {connect} from 'react-redux';
import {changeOne} from '../redux/actions'
const Two = (props)=>{
    console.log('props', props)

    return (
        <>
            <h1>Two</h1>
            Change the state of one: <input type="text" onChange={(e)=>props.ef((e.target.value))} />
            <button>Change the state of one </button>
        </>
    )
}

const mapDispatchToProps = (dispatch)=>{
    return{
        ef:(val)=>dispatch(changeOne(val))
    }
}

export default connect(null, mapDispatchToProps)(Two)