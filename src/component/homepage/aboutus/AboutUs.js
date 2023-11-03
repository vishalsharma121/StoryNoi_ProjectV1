import React from 'react';
import '../aboutus/AboutUs.css'


function AboutUs({ title, subtitle, rightcontent, AboutLeft }) {
  const paragraphs = rightcontent.split('\n');
  
  return (
<section id="about-section" className="lft-img-rht-cnt">
<div className="container">

    <div className="sub-content"> <h3>{subtitle}</h3></div>
    <div className="title"><h2>{title}</h2></div>
    <div className="inner">
    <div className="left-image">
        <img src={AboutLeft} alt="About Us" />
    </div>
    <div className="rht-content">
    {paragraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
    </div>
</div>
</div>
</section>
  );
}

export default AboutUs;
