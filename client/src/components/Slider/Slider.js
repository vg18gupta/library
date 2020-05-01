import React from 'react'
import './Slider.scss'
import ImgComp from './ImgComp'
import image1 from './images/1.jpg'
import image2 from './images/2.jpg'
import image3 from './images/3.jpg'

function Slider() {
    let slideArr = [<ImgComp src={image1}/>,<ImgComp src={image2}/>,<ImgComp src={image3}/>];
    return(
        <div className="slider">
            {slideArr.map((item, index) => {
                return (
                    <div key={index} className="slide">
                        {item}
                    </div>
                );
            })}
            {/* <button id="goLeft">left</button>
            <button id="goRight">right</button> */}
        </div>
    )
}

export default Slider;