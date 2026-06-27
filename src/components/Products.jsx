import React, { useMemo } from 'react'

function Products() {
  const products = [
    {
      id: 1,
      size: '250 ml',
      name: 'Freshly H2O Compact',
      description: 'Perfect for on-the-go hydration. Ideal for meetings, travel, and everyday carry.',
      image: '/images/bottle-250ml.jpg',
      features: ['Compact & Portable', 'Mineral Enriched', 'FSSAI Certified', 'Recyclable PET'],
      featured: false,
    },
    {
      id: 2,
      size: '500 ml',
      name: 'Freshly H2O Classic',
      description: 'Our most popular size. The perfect balance of hydration for your daily needs.',
      image: '/images/500ml.png',
      features: ['Most Popular Size', 'Mineral Enriched', 'FSSAI Certified', 'Recyclable PET'],
      featured: true,
    },
    {
      id: 3,
      size: '1000 ml',
      name: 'Freshly H2O Family',
      description: 'Maximum hydration for families, offices, and outdoor activities. Stay hydrated longer.',
      image: '/images/1000ml.png',
      features: ['Maximum Hydration', 'Mineral Enriched', 'FSSAI Certified', 'Recyclable PET'],
      featured: false,
    },
  ]

  const productBubbles = useMemo(() => {
    return products.map((product) =>
      Array.from({ length: product.featured ? 12 : 9 }, (_, index) => ({
        id: `${product.id}-${index}`,
        size: Math.random() * 24 + 12,
        left: Math.random() * 100,
        bottom: Math.random() * 18 - 6,
        delay: Math.random() * 1.4,
        duration: Math.random() * 2.6 + 3,
        rise: Math.random() * 180 + 220,
      }))
    )
  }, [])

  const handleContactClick = (e) => {
    e.preventDefault()
    const element = document.getElementById('contact')
    if (element) {
      const offset = 80
      const elementPosition = element.getBoundingClientRect().top + window.scrollY
      window.scrollTo({ top: elementPosition - offset, behavior: 'smooth' })
    }
  }

  return (
    <section className="products section-padding" id="products">
      <div className="container">
        <h2 className="section-title fade-in">
          Our <span className="gradient-text">Products</span>
        </h2>
        <p className="section-subtitle fade-in">
          Premium packaged drinking water available in three convenient sizes.
          Each bottle is enriched with essential minerals for a refreshing taste.
        </p>

        <div className="products-grid">
          {products.map((product, index) => (
            <div
              className={`product-card fade-in ${product.featured ? 'featured' : ''}`}
              key={product.id}
              style={{ transitionDelay: `${index * 0.15}s` }}
            >
              <div className="product-bubbles" aria-hidden="true">
                {productBubbles[index].map((bubble) => (
                  <span
                    key={bubble.id}
                    className="product-bubble"
                    style={{
                      width: `${bubble.size}px`,
                      height: `${bubble.size}px`,
                      left: `${bubble.left}%`,
                      bottom: `${bubble.bottom}px`,
                      '--bubble-rise': `${bubble.rise}px`,
                      animationDelay: `${bubble.delay}s`,
                      animationDuration: `${bubble.duration}s`,
                    }}
                  />
                ))}
              </div>

              {product.badge && (
                <div className="product-badge">{product.badge}</div>
              )}

              <div className="product-image">
                <img
                  src={product.image}
                  alt={`Freshly H2O ${product.size} packaged drinking water bottle`}
                  loading="lazy"
                  width="400"
                  height="400"
                />
              </div>

              <div className="product-size">{product.size}</div>
              <div className="product-name">{product.name}</div>
              <p className="product-description">{product.description}</p>

              <div className="product-features">
                {product.features.map((feature, i) => (
                  <div className="product-feature-item" key={i}>
                    <div className="product-feature-check">✓</div>
                    {feature}
                  </div>
                ))}
              </div>

              <a href="#contact" className="product-cta" onClick={handleContactClick}>
                Contact for Pricing
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Products
