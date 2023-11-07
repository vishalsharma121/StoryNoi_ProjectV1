import React from 'react';
import './ScrollButtons.css'

function ScrollButtons() {
  
  return (
    <>
    <section className="cta-outer">
    <div className="container">
          <div className="inner">
            <div className="cta-btn">
              <a href="/change-preferences">Prefer any changes</a>
            </div>
            <div className="cta-btn">
              <a href="/generate-pics">Generate pics</a>
            </div>
          </div>
    </div>
    </section>
</>
  );
}

export default ScrollButtons;
