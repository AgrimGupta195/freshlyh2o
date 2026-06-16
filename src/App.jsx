import React, { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Products from './components/Products'
import Contact from './components/Contact'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'
import { initializeAnalytics, trackPageView } from './lib/analytics'

function App() {
  useEffect(() => {
    const measurementId = import.meta.env.VITE_GA_MEASUREMENT_ID

    initializeAnalytics(measurementId)
    trackPageView(measurementId)

    // Intersection Observer for scroll animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    )

    const animatedElements = document.querySelectorAll('.fade-in, .fade-in-left, .fade-in-right')
    animatedElements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Products />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </>
  )
}

export default App
