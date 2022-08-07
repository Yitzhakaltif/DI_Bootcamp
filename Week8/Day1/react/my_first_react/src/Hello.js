// import Bye from './Bye';
import './Hello.css';
import Card from 'react-bootstrap/Card';

const Hello = (props)=>{
    console.log(props.data)
    //destructure
    const {data}=props;
    const {email,username} = props.data
    // const {email, username} = props
    return(
        // <div className='tc bg-light-green br3 pa3 ma2 dib grow shadow-5'>
        //     <h3>Hello {email}</h3>
        //     {/* <Bye /> */}
        // </div>
        <Card className='grow colorYellow'>
        <Card.Body>Hello {email} {username}</Card.Body>
      </Card>  

    )
}

export default Hello