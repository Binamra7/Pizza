import React from 'react'
import MultiplePizzas from "../assets/multiplePizzas.jpeg";
import "../styles/About.css";

function About() {
    return (
      <div className="about">
        <div
          className="aboutTop"
          style={{ backgroundImage: `url(${MultiplePizzas})` }}
        ></div>
        <div className="aboutBottom">
          <h1>ABOUT US</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo ipsam
            explicabo quos in, dolor nobis tempore, sint libero eos ipsum iste
            eligendi possimus sequi ut dolorem consequatur numquam illo
            inventore. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Quo ipsam explicabo quos in, dolor nobis tempore, sint libero eos
            ipsum iste eligendi possimus sequi ut dolorem consequatur numquam
            illo inventore. Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Quo ipsam explicabo quos in, dolor nobis tempore, sint libero
            eos ipsum iste eligendi possimus sequi ut dolorem consequatur
            numquam illo inventore.
          </p>
        </div>
      </div>
    );

}

export default About 
