import React from 'react'
import EntryNavComp from './EntryNavComp'
import EntryInfo from './EntryInfo'
import { YourComponent } from 'reactstrap';
import Footer from './Footer.jsx'
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
