import React from "react";
import '../ebook/Ebook.css';
import RightImage from './images/rht-img-blk.png';

function Ebook({ title, bottomcontent }) {
    const paragraphs = bottomcontent.split('\n').filter(paragraph => paragraph.trim() !== '');

    return (
        <section className="left-content-rht-img">
            <div className="container">
                <div className="inner">
                    <div className="left-blk">
                        <div className="title"><h2>{title}</h2></div>
                        <div className="blk-cnt">
                            {paragraphs.map((paragraph, index) => (
                                <p key={index}>{paragraph}</p>
                            ))}
                        </div>
                    </div>
                    <div className="rht-img">
                        <img src={RightImage} alt="Right Image" />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Ebook;
