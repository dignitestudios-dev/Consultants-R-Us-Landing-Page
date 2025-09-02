import React from 'react'
import Home from './_components/home'
import Testimonials from './_components/testimonals'
import FAQ from './_components/faq'
import ContactUs from './_components/contact-us'

function page() {
  return (
    <div>
        <Home/>
        <Testimonials/>
        <FAQ/>
        <ContactUs/>
        </div>
  )
}

export default page