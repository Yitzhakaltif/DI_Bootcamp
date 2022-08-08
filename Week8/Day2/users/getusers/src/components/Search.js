const Search = (props)=>{
    console.log(props)
    
    return(
        <>

        <input type='text' placeholder='Search...' onChange={props.myhandler}/>
        <button>Search</button>
        </>

    )
}


export default Search