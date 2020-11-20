import React from "react"
/*
import {
  Service14,
  Service15,
  Service16,
  Service17,
  Service18,
  Service19,
} from "../../../images/index"
*/

import Grid from "./grid"

import sectionGridStyle from "./services.module.css"

const SectionGrid = (props) => {
  return( 
  <section className={sectionGridStyle.ServicesGrid}>
      <Grid
        items={[
            {
                title:"",
                image:Service18,
                link:"",
                description:"",
                buttonText:"LEARN MORE",
            },
            {
                title:"",
                image:Service15,
                link:"",
                description:"",
                buttonText:"LEARN MORE",
            },
            {
                title:"",
                image:Service18,
                link:"",
                description:"",
                buttonText:"LEARN MORE",
            },
            {
                title:"",
                image:Service15,
                link:"",
                description:"",
                buttonText:"LEARN MORE",
            },
            {
                title:"",
                image:Service14,
                link:"",
                description:"",
                buttonText:"LEARN MORE",
            },
            {
                title:"",
                image:Service14,
                link:"",
                description:"",
                buttonText:"LEARN MORE",
            },
            {
                title:"",
                image:Service14,
                link:"",
                description:"",
                buttonText:"LEARN MORE",
            },
            {
                title:"",
                image:Service19,
                link:"",
                description:"",
                buttonText:"LEARN MORE",
            },
            {
                title:"",
                image:Service17,
                link:"",
                description:"",
                buttonText:"LEARN MORE",
            },
            {
                title:"",
                image:Service18,
                link:"",
                description:"",
                buttonText:"LEARN MORE",
            },
            {
                title:"",
                image:Service15,
                link:"",
                description:"",
                buttonText:"LEARN MORE",
            },
            {
                title:"",
                image:Service16,
                link:"",
                description:"",
                buttonText:"LEARN MORE",
            },
            {
                title:"",
                image:Service16,
                link:"",
                description:"",
                buttonText:"LEARN MORE",
            },
            {
                title:"",
                image:Service16,
                link:"",
                description:"",
                buttonText:"LEARN MORE",
            },

        ]} />
  </section>
  )
}

export default SectionGrid
