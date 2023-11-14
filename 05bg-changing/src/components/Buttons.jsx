import React from 'react';
function Buttons(props) {

    return (

        <button className='button' style={{ backgroundColor: props.bgColor, color: props.bgColor == "white" ? "black" : "white" }} onClick={props.onclickFunction} >{props.bgColor}</button>

    )
}


export default Buttons
