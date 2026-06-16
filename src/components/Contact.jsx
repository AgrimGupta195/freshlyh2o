import React, { useState } from 'react'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  })

  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState(false)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSubmitting(true)
    setError(false)

    try {
      const response = await fetch("https://formsubmit.co/ajax/ramkaushal1212@gmail.com", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          ...formData,
          _subject: `New Inquiry: ${formData.subject} - Freshly H2O`,
          _template: 'box'
        })
      })

      if (response.ok) {
        setSubmitted(true)
        setTimeout(() => setSubmitted(false), 5000)
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' })
      } else {
        setError(true)
      }
    } catch (err) {
      setError(true)
    } finally {
      setSubmitting(false)
    }
  }

  const contactDetails = [
    {
      icon: '📞',
      label: 'Phone',
      value: '+91 6387994591',
      href: 'tel:+916387994591',
    },
    {
      icon: '📧',
      label: 'Email',
      value: 'ramkaushal1212@gmail.com',
      href: 'mailto:ramkaushal1212@gmail.com',
    },
    {
      icon: '📍',
      label: 'Address',
      value: 'New Ram Nagar, Orai, Jalaun',
      href: null,
    },
    {
      icon: '🏢',
      label: 'Company',
      value: 'Freshly India',
      href: null,
    },
  ]

  return (
    <section className="contact section-padding" id="contact">
      <div className="container">
        <h2 className="section-title fade-in">
          Get in <span className="gradient-text">Touch</span>
        </h2>
        <p className="section-subtitle fade-in">
          Have questions about our products or want to place a bulk order?
          We'd love to hear from you. Reach out to us today!
        </p>

        <div className="contact-grid">
          <div className="contact-info fade-in-left">
            <h3>Let's Start a Conversation</h3>
            <p>
              Whether you're looking for packaged drinking water for events,
              offices, or retail, Freshly H2O has you covered. Contact us
              for pricing, bulk orders, or distribution inquiries.
            </p>

            <div className="contact-details">
              {contactDetails.map((detail, index) => (
                <div className="contact-detail" key={index}>
                  <div className="contact-detail-icon">{detail.icon}</div>
                  <div>
                    <div className="contact-detail-label">{detail.label}</div>
                    {detail.href ? (
                      <a href={detail.href} className="contact-detail-value">
                        {detail.value}
                      </a>
                    ) : (
                      <div className="contact-detail-value">{detail.value}</div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="contact-form-wrapper fade-in-right">
            {submitted && (
              <div style={{
                padding: '16px 24px',
                background: 'rgba(20, 184, 166, 0.1)',
                border: '1px solid rgba(20, 184, 166, 0.3)',
                borderRadius: '12px',
                color: '#14b8a6',
                fontWeight: 500,
                marginBottom: '20px',
                textAlign: 'center',
                animation: 'fadeInUp 0.3s ease-out',
              }}>
                ✅ Thank you! We'll get back to you soon.
              </div>
            )}
            {error && (
              <div style={{
                padding: '16px 24px',
                background: 'rgba(239, 68, 68, 0.1)',
                border: '1px solid rgba(239, 68, 68, 0.3)',
                borderRadius: '12px',
                color: '#ef4444',
                fontWeight: 500,
                marginBottom: '20px',
                textAlign: 'center',
                animation: 'fadeInUp 0.3s ease-out',
              }}>
                ❌ Oops! Something went wrong. Please try again.
              </div>
            )}
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="contact-name">Full Name</label>
                  <input
                    type="text"
                    id="contact-name"
                    name="name"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="contact-email">Email Address</label>
                  <input
                    type="email"
                    id="contact-email"
                    name="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="contact-phone">Phone Number</label>
                  <input
                    type="tel"
                    id="contact-phone"
                    name="phone"
                    placeholder="+91 XXXXX XXXXX"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="contact-subject">Subject</label>
                  <input
                    type="text"
                    id="contact-subject"
                    name="subject"
                    placeholder="e.g., Bulk Order Inquiry"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="contact-message">Message</label>
                <textarea
                  id="contact-message"
                  name="message"
                  placeholder="Tell us about your requirements..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              <button type="submit" className="form-submit" disabled={submitting} style={{ opacity: submitting ? 0.7 : 1, cursor: submitting ? 'not-allowed' : 'pointer' }}>
                {submitting ? 'Sending...' : 'Send Message'}
                {!submitting && (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginLeft: '8px', display: 'inline' }}>
                    <line x1="22" y1="2" x2="11" y2="13"></line>
                    <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                  </svg>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
