const UserFavoriteColors = (props)=>{
    console.log(props.anim)
    return (
        <div>
          {props.anim.map((item, i) => {
            return <li key={i}>{item}</li>;
          })}
        </div>
      );
}


export default UserFavoriteColors