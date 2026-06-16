import React from 'react'

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer" id="footer">
      <div className="container">
        <div className="footer-grid">
          {/* Brand Column */}
          <div className="footer-brand">
            <div className="footer-logo">
              <img src="/images/logo.jpg" alt="Freshly H2O Logo" />
              <div className="footer-logo-text">
                Freshly <span>H2O</span>
              </div>
            </div>
            <p>
              Premium packaged drinking water manufactured, processed &
              packaged by Freshly India. Committed to purity, quality, and
              your well-being with every sip.
            </p>
            <div className="footer-socials">
              <a href="#" className="footer-social" aria-label="Facebook">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                </svg>
              </a>
              <a href="#" className="footer-social" aria-label="Instagram">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
              <a href="#" className="footer-social" aria-label="Twitter">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a href="tel:+916387994591" className="footer-social" aria-label="Phone">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-column">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#products">Products</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          {/* Products */}
          <div className="footer-column">
            <h4>Our Products</h4>
            <ul>
              <li><a href="#products">250ml Bottle</a></li>
              <li><a href="#products">500ml Bottle</a></li>
              <li><a href="#products">1000ml Bottle</a></li>
              <li><a href="#contact">Bulk Orders</a></li>
            </ul>
          </div>

          {/* Certifications & Contact */}
          <div className="footer-column">
            <h4>Certifications</h4>
            <div className="footer-certifications">
              <div className="footer-cert">🛡️ FSSAI Certified</div>
              <div className="footer-cert">♻️ PET Recyclable</div>
              <div className="footer-cert">🇮🇳 Made in India</div>
            </div>
            <ul style={{ marginTop: '20px' }}>
              <li><a href="tel:+916387994591">📞 +91 6387994591</a></li>
              <li><a href="#contact">📍 Orai, Jalaun</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {currentYear} Freshly H2O. All rights reserved. Manufactured by Freshly India.</p>
          <div className="footer-bottom-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
