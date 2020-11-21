import React from 'react'

import SectionSchedule from './section1Schedule'
import SectionTwo from './sectionTwo'
import SectionThree from './sectionThree'

import HeroBannerHoriz from '../../heroBannerHoriz'
import SectionTilez from '../../SectionTilez/section2Tiles'
import FeaturedFoodCardSection from '../../FeaturedFoodCardSection'
import FeaturedFoodCardSection2 from '../../FeaturedFoodCardSection2'



const Homepage = () => (
<>

    <HeroBannerHoriz
    title="Alberto's"
    subText="Mexican Food"
    />
    <SectionSchedule />
    {/*<FeaturedFoodCardSection
        bg="white"
        textColor="dark"
        size="md"
        bgImage=""
        bgImageOpacity={1}
        title="Featured Specials"
        subtitle=""
    />*/}
          <FeaturedFoodCardSection2
          bg="white"
          textColor="dark"
          size="lg"
          title="Featured Specials" />
    
</>
)

export default Homepage
