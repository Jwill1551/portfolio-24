import React from "react";

const Blue_Button = (props) => {
    return (
        <a href={props.url} class="nav_btn btn"> {props.text} </a>
    )
}

export default Blue_Button;