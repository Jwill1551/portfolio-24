import React from "react";

const Social_Button = (props) => {
    return (
        <a href={props.url} class="social_btn">
            <img src={props.image_src} alt={props.image_title} />
        </a>
    )
}

export default Social_Button;