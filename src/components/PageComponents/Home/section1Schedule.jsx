import React from "react";
import "./sectionSchedule.scss";

import TimeTable from "./timeTable";
import TimeTableDesktop from "./timeTableDesktop";
import { Helmet } from "react-helmet";

import Fade from "react-reveal/Fade";

const SectionSchedule = (props) => {
  return (
    <>
      <Helmet>
        <script
          src="https://www.fbgcdn.com/embedder/js/ewm2.js"
          defer
          async
        ></script>
      </Helmet>
      <div id="hours" />
      <section id="one" className="wrapper spotlight">
        <div className="inner">
          
          <div className="content" >
        
            <Fade>
              <TimeTable />
              <TimeTableDesktop />
            </Fade>
          </div>
        </div>
        <div className="inner">
          <div className="content">
            <Fade>
              <span
                className="orderButtonBlock"
                style={{
                  margin: "2rem auto 4rem",
                  display: "block",
                  textAlign: "center",
                }}
                data-glf-cuid="24a4ac68-5254-4dce-99e1-b6ceeb75b4b5"
                data-glf-ruid="8f336410-bd0a-4292-8e0a-fc8f6e24b461"
              >
                {" "}
                See Menu &amp; Order
              </span>
            </Fade>
          </div>
        </div>
      </section>

    </>
  );
};

export default SectionSchedule;
