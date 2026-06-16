import React, { useMemo } from 'react'

function Hero() {
  // Generate random bubbles
  const bubbles = useMemo(() => {
    return Array.from({ length: 15 }, (_, i) => ({
      id: i,
      size: Math.random() * 40 + 10,
      left: Math.random() * 100,
      delay: Math.random() * 10,
      duration: Math.random() * 8 + 8,
    }))
  }, [])

  const handleScrollTo = (e, targetId) => {
    e.preventDefault()
    const element = document.getElementById(targetId)
    if (element) {
      const offset = 80
      const elementPosition = element.getBoundingClientRect().top + window.scrollY
      window.scrollTo({ top: elementPosition - offset, behavior: 'smooth' })
    }
  }

  return (
    <section className="hero" id="home">
      {/* Animated bubbles background */}
      <div className="hero-bubbles">
        {bubbles.map((bubble) => (
          <div
            key={bubble.id}
            className="bubble"
            style={{
              width: `${bubble.size}px`,
              height: `${bubble.size}px`,
              left: `${bubble.left}%`,
              animationDelay: `${bubble.delay}s`,
              animationDuration: `${bubble.duration}s`,
            }}
          />
        ))}
      </div>

      <div className="container">
        <div className="hero-content">
          <div className="hero-badge">
            <span className="hero-badge-dot"></span>
            FSSAI Certified · Premium Quality
          </div>

          <h1>
            Pure Water,{' '}
            <span className="highlight gradient-text">Pure Life</span>
            <br />
            with Freshly H2O
          </h1>

          <p className="hero-description">
            Experience the refreshing taste of purity. Freshly H2O delivers
            premium packaged drinking water, carefully treated with minerals
            for your health and hydration needs.
          </p>

          <div className="hero-cta-group">
            <a href="#products" className="btn-primary" onClick={(e) => handleScrollTo(e, 'products')}>
              Explore Products
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
            <a href="#contact" className="btn-secondary" onClick={(e) => handleScrollTo(e, 'contact')}>
              Contact Us
            </a>
          </div>

          <div className="hero-stats">
            <div className="hero-stat">
              <div className="hero-stat-number">3+</div>
              <div className="hero-stat-label">Product Sizes</div>
            </div>
            <div className="hero-stat">
              <div className="hero-stat-number">100%</div>
              <div className="hero-stat-label">Pure & Safe</div>
            </div>
            <div className="hero-stat">
              <div className="hero-stat-number">FSSAI</div>
              <div className="hero-stat-label">Certified</div>
            </div>
          </div>
        </div>

        <div className="hero-image">
          <div className="hero-image-wrapper">
            <div className="hero-image-ring"></div>
            <div className="hero-image-ring-2"></div>
            <img
              src="/images/500ml.png"
              alt="Freshly H2O 250ml Premium Packaged Drinking Water Bottle"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
