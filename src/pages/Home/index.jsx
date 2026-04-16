import React from 'react'
import { About, AluraPlans, AluraWorks, FAQ, Guidence, Landing, Subscription, Testimonials, WhyChoose } from '../../components'

const Home = () => {
  return (
    <div> 
        <Landing/>
        <Guidence/>
        <About/>
        <WhyChoose/>
        <AluraWorks/>
        <AluraPlans/>
        <Subscription/>
        <Testimonials/>
        <FAQ/>
    </div>
  )
}

export default Home