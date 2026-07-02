import React from 'react'
import Hero from '../components/About/Hero'
import Welcome from '../components/About/Welcome'
import WhyChooseUs from '../components/About/WhyChooseUs'
import Pillars from '../components/About/Pillars'
import AdvancedInfrastructure from '../components/About/AdvancedInfrastructure'
import SpecializedDeparments from '../components/About/SpecializedDeparments'
import OurPromises from '../components/About/OurPromises'
import HospitalHighlights from '../components/About/HospitalHighlights'
import CallToAction from '../components/About/CallToAction'

const About = () => {
  return (
    <div>
        <Hero />
        <Welcome />
        <WhyChooseUs />
        <Pillars />
        <AdvancedInfrastructure />
        <SpecializedDeparments />
        <OurPromises />
        <HospitalHighlights />
        <CallToAction />
    </div>
  )
}

export default About