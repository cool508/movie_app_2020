import React from 'react';
import './About.css';

function About(props) {
    console.log(props);
    return (
        <div className="about__container">
            <span>
                대림대학교 컴퓨터정보학부 스마트소프트웨어전공
            </span>
            <span> 배종범 ,201640218 </span>
        </div>
    );
}
export default  About;