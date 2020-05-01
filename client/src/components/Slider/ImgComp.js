import React from "react";

function ImgComp ({ src }) {
    let imageStyle = {
        width:100 + "%",
        height: "auto"
    };
    return <img src = {src} style={imageStyle} alt="slide-img"></img>
}

export default ImgComp;