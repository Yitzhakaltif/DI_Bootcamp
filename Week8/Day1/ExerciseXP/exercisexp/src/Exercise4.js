import "./Exercise4.css";
import "./logo.svg"


function Exercise4 (){
    const style_header = {
        color: "white",
        backgroundColor: "DodgerBlue",
        padding: "10px",
        fontFamily: "Arial",
      };
    return(
        <div>
            <h1 style={style_header}>Hello from Ex4</h1>
            <p className="para">This is a paragraph</p>
            <a href="www.google.com"></a>
            <form>
                <p>This is a form</p>              
                <input type="text" />
                <button type="submit">submit</button>
            </form>
            <img src="https://logos-download.com/wp-content/uploads/2016/09/React_logo_wordmark.png" alt="" />
            <ul>
                <li>This</li>
                <li>is</li>
                <li>a</li>
                <li>list!</li>
            </ul>
        </div>
    )


}

export default Exercise4