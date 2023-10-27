import React from 'react';
import LeftImage from './images/left-imgg.png';
import '../why/Why.css';

function Why({ subContent, title, mainContent, listTitle, benefits }) {
  return (

    <section id="why-storynoi" className="left-img-rgt-cnt">
      <div className="container">
        <div className="inner">
          <div className="left-img">
            <img src={LeftImage} alt="Left Image" />
          </div>
          <div className="rht-cnt">
            <div className="sub-content">
              <h3>{subContent}</h3>
            </div>
            <div className="title">
              <h2>{title}</h2>
            </div>
            <div className="content">
              <p>{mainContent}</p>
            </div>
            <div className="list-cnt">
              <div className="title">{listTitle}</div>
              <ul>
              {benefits.map((benefit, index) => (
                <li key={index}>{benefit}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Why;
