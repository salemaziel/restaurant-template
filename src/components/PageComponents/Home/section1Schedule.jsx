import React from 'react'
import {
StockTaco01
} from '../../../images/index'
import './sectionSchedule.scss'

import TimeTable from './timeTable'
import TimeTableDesktop from './timeTableDesktop'
import {Helmet} from 'react-helmet'

import Fade from 'react-reveal/Fade'

const SectionSchedule = (props) => {
    return (
        <>
        <Helmet>
    <script src="https://www.fbgcdn.com/embedder/js/ewm2.js" defer async ></script>
    </Helmet>
        <section id="one" className="wrapper spotlight">
  <div className="inner">
    <div className="content"  id="hours" >
      {/*<h2 className="major">Magna arcu feugiat</h2>
      <p>Lorem ipsum dolor sit amet, etiam lorem adipiscing elit. Cras turpis ante, nullam sit amet turpis non, sollicitudin posuere urna. Mauris id tellus arcu. Nunc vehicula id nulla dignissim dapibus. Nullam ultrices, neque et faucibus viverra, ex nulla cursus.</p>
    <a href="#" className="special">Learn more</a>*/}
    <Fade top>
      <TimeTable />
      <TimeTableDesktop />
      </Fade>
    </div>
  </div>
  <div className="inner">
  <div className="content">
      <Fade top>
    <span className="glf-button" style={{backgroundColor:'red', margin: '2rem auto 4rem', display: 'block', textAlign:'center'}} data-glf-cuid="24a4ac68-5254-4dce-99e1-b6ceeb75b4b5" data-glf-ruid="8f336410-bd0a-4292-8e0a-fc8f6e24b461" > See MENU &amp; Order</span>
    </Fade>
    </div>
    </div>
</section>


{/*
<section id="one" className="wrapper spotlight">
  <div className="inner">
    <a href="#" className="image"><img src={StockTaco01} alt /></a>
    <div className="content">
      <h2 className="major">Magna arcu feugiat</h2>
      <p>Lorem ipsum dolor sit amet, etiam lorem adipiscing elit. Cras turpis ante, nullam sit amet turpis non, sollicitudin posuere urna. Mauris id tellus arcu. Nunc vehicula id nulla dignissim dapibus. Nullam ultrices, neque et faucibus viverra, ex nulla cursus.</p>
      <a href="#" className="special">Learn more</a>
    </div>
  </div>
</section>*/}

        </>
    )
}

export default SectionSchedule