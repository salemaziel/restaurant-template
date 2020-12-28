import React from 'react'
import './heroBannerHoriz.scss'

import {Helmet} from 'react-helmet'

const HeroBannerHoriz = (props) => {
    return(
        <>
        <Helmet>
    <script src="https://www.fbgcdn.com/embedder/js/ewm2.js" defer async ></script>
    </Helmet>


<section id="banner" className="hero">
  <div className="inner">
    
    <h2>{props.title}</h2>
    <p>{props.subText}</p>
    {/*<div className="logo"><span className="icon" /></div>*/}
    <div className="menubtnBox">
    <span className="orderButton" data-glf-cuid="24a4ac68-5254-4dce-99e1-b6ceeb75b4b5" data-glf-ruid="8f336410-bd0a-4292-8e0a-fc8f6e24b461" > See Menu &amp; Order</span>

    </div>
  </div>

</section>

        </>
    )
}

export default HeroBannerHoriz