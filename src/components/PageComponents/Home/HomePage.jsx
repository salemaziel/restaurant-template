import React from 'react'

import SectionSchedule from './section1Schedule'


import HeroBannerHoriz from '../../heroBannerHoriz'
//import SectionTilez from '../../SectionTilez/section2Tiles'
import FeaturedFoodCardSection2 from '../../FeaturedFoodCardSection2'



const Homepage = () => (
<>

    <HeroBannerHoriz
    title="Restaurant"
    subText="Mexican Food"
    />
    <SectionSchedule/>
    {/*<HoursLocations />*/}
    <div id="specials" />
          <FeaturedFoodCardSection2
          bg="white"
          textColor="dark"
          size="lg"
          title="Featured Specials" />
    
</>
)

export default Homepage
