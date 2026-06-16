import React from 'react'

function About() {
  const features = [
    {
      icon: '💧',
      title: 'Mineral Rich',
      desc: 'Treated with essential minerals like Magnesium Sulphate & Calcium Chloride',
    },
    {
      icon: '🛡️',
      title: 'FSSAI Certified',
      desc: 'Lic. No. 22762827000091 — Certified safe drinking water',
    },
    {
      icon: '🌿',
      title: 'Eco Friendly',
      desc: 'Crush the bottle after use — recyclable PET packaging',
    },
    {
      icon: '⚡',
      title: 'Fresh & Pure',
      desc: 'Multi-stage purification ensuring every sip is refreshing',
    },
  ]

  return (
    <section className="about section-padding" id="about">
      <div className="container">
        <div className="about-image fade-in-left">
          <div className="about-image-card">
            <img
              src="/images/250 ml.jpeg"
              alt="Freshly H2O product label showcasing quality certifications and brand details"
            />
          </div>
        </div>

        <div className="about-content fade-in-right">
          <div className="about-label">About Us</div>
          <h2>
            Committed to Delivering{' '}
            <span className="gradient-text">Purity in Every Drop</span>
          </h2>
          <p>
            Freshly H2O is a premium packaged drinking water brand manufactured,
            processed, and packaged by Freshly India. We are dedicated to providing
            safe, mineral-enriched drinking water that meets the highest quality
            standards. Our state-of-the-art facility ensures every bottle delivers
            freshness and purity you can trust.
          </p>

          <div className="about-features">
            {features.map((feature, index) => (
              <div className="about-feature" key={index}>
                <div className="about-feature-icon">{feature.icon}</div>
                <div>
                  <div className="about-feature-title">{feature.title}</div>
                  <div className="about-feature-desc">{feature.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
