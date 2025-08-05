import React from 'react'
import HeaderDefault from '../layout/Header/header-default'
import HeroSection from '../layout/Sections/hero-section'
import SeekBenefits from '../layout/Sections/seek-benefits'
import AboutRecipes from '../layout/Sections/about-recipes'
import UserTestimonials from '../layout/Sections/user-testimonials'
import CallAction from '../layout/Sections/call-action'
import FooterDefault from '../layout/Footer/footer-default'

export default function LandingPage() {
  return (
    <div>
      <HeaderDefault/>
      <HeroSection/>
      <SeekBenefits/>
      <AboutRecipes/>
      <UserTestimonials />
      <CallAction />
      <FooterDefault/>
    </div>
  )
}
