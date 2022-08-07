


const User = (props)=>{
    const {name,  username, id, email}=props.data;
    return(
     <div className="tc grow bg-light-green br3 ma2 pa3 dib shadow-5 bw2">
      <img src={`https://robohash.org/${id}?size=150x150`} alt="" />
        <h2>{name}</h2>
        <h4>{username}</h4>
        <p>{email}</p>
    
    
    
    </div>
    )
}

export default User