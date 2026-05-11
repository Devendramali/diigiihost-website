import React from 'react'
import Breadcrumb from '../components/common/Breadcrumb'
import AboutText from '../components/about/AboutText'
import AboutCta from '../components/about/AboutCta'
import AboutAg from '../components/about/AboutAg'
import AboutCard from '../components/about/AboutCard'
import AboutDesign from '../components/about/AboutDesign'
import AboutSnapShot from '../components/about/AboutSnapShot'
import LogoReveal from '../components/about/LogoReveal'
import AboutMissionVision from '../components/about/AboutMissionVision'

const AboutPage = () => {
  return (
    <>
    <Breadcrumb breadcrumb={["Home","About"]}/>
    <AboutText/>
    <AboutCta/>
    <AboutAg/>
    <AboutCard/>
    <AboutDesign/>
    <AboutSnapShot/>
    <AboutMissionVision/>
    <LogoReveal/>
    </>
  )
}

export default AboutPage