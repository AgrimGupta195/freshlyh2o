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

    const scheduleIdle = (callback) => {
      if ('requestIdleCallback' in window) {
        return window.requestIdleCallback(callback, { timeout: 1500 })
      }
      return window.setTimeout(callback, 1)
    }

    const cancelIdle = (idleId) => {
      if ('cancelIdleCallback' in window) {
        window.cancelIdleCallback(idleId)
      } else {
        window.clearTimeout(idleId)
      }
    }

    const analyticsIdleId = window.setTimeout(() => {
      initializeAnalytics(measurementId)
      trackPageView(measurementId)
    }, 4500)

    let observer = null
    const observerIdleId = scheduleIdle(() => {
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        return
      }

      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('visible')
              observer.unobserve(entry.target)
            }
          })
        },
        { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
      )

      const animatedElements = document.querySelectorAll('.fade-in, .fade-in-left, .fade-in-right')
      animatedElements.forEach((el) => observer.observe(el))
    })

    return () => {
      window.clearTimeout(analyticsIdleId)
      cancelIdle(observerIdleId)
      if (observer) {
        observer.disconnect()
      }
    }
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
