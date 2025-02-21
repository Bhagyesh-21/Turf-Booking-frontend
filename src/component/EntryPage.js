import React from 'react'
import EntryNavComp from './EntryNavComp'
// import ProjectNameComp from './ProjectNameComp'
// import AboutComp from './AboutComp'
import EntryInfo from './EntryInfo'


// import AdvertisementCarousel from './AdvertisementCarousel'
import { YourComponent } from 'reactstrap';
import Footer from './Footer.jsx'

// import LastFooter from './LastFooter';
import AdvertisementCarousel from './AdvertisementCarousel';
import LastFooter from './LastFooter';




function EntryPage() {
    return (
        <div>
            {/* <ProjectNameComp /> */}
            <EntryNavComp />
            {/* <AboutComp/> */}
            <EntryInfo />
            <AdvertisementCarousel />
            <Footer />
            <LastFooter/>
        </div>

    )
}

export default EntryPage
