import {connect} from 'react-redux'

const Child = (props)=>{
    return(
        <>
            <h1>Child</h1>
            <p>{props.propone}</p>
            {props.proptwo}

        </>
    )
}

const mapStateToProps = (state) => {
    return{
        propone:state.prop_one,
        proptwo:state.prop_two
    }
}
export default connect(mapStateToProps)(Child)