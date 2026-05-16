import { useState } from 'react'
import { useScrollReveal } from '../../components/ScrollReveal/useScrollReveal'
import './Contact.css'

function Contact({ contact, normalizeUrl }) {
  const leftRef = useScrollReveal()
  const rightRef = useScrollReveal()
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const socialItems = [
    { label: 'GitHub', value: contact.github },
    { label: 'LinkedIn', value: contact.linkedin },
    { label: 'Twitter', value: contact.twitter },
  ]

  const handleChange = (event) => {
    const { name, value } = event.target
    setForm((current) => ({ ...current, [name]: value }))
    setError(null)
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    setLoading(true)
    setError(null)

    try {
      // Option 1: Using FormSubmit (no backend needed)
      // This is a simple form submission service
      const formData = new FormData()
      formData.append('name', form.name)
      formData.append('email', form.email)
      formData.append('message', form.message)
      formData.append('_captcha', 'false')

      // You'll need to set up FormSubmit at https://formsubmit.co
      // Replace with your email
      const response = await fetch('https://formsubmit.co/ajax/aadarsh@example.com', {
        method: 'POST',
        body: formData,
      })

      if (response.ok) {
        setSubmitted(true)
        setForm({ name: '', email: '', message: '' })
        
        // Reset success message after 5 seconds
        setTimeout(() => {
          setSubmitted(false)
        }, 5000)
      } else {
        throw new Error('Failed to send message')
      }
    } catch (err) {
      setError('Failed to send message. Please try emailing directly.')
      console.error('Form submission error:', err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="section-block contact-section">
      <div className="container-shell contact-grid">
        <div ref={leftRef} className="contact-copy reveal-left">
          <p className="section-kicker">CONTACT</p>
          <h2 className="contact-title">
            LET'S WORK
            <br />
            TOGETHER.
          </h2>
          <p className="contact-text">
            I'm open to internships, freelance security consulting, and
            collaborative CTF teams. Reach out via the form or connect on social media.
          </p>
          <div className="contact-socials stagger-group revealed-by-parent">
            {socialItems.map((item) => (
              <a
                key={item.label}
                className="stagger-fade"
                href={normalizeUrl(item.value)}
                target="_blank"
                rel="noreferrer"
              >
                {item.label} →
              </a>
            ))}
          </div>
          <a href={`mailto:${contact.email}`} className="contact-email">
            or email: {contact.email}
          </a>
        </div>

        <div ref={rightRef} className="contact-form-wrap reveal-right">
          {submitted ? (
            <div className="contact-success">
              <span>✓</span>
              <h3>Message sent successfully!</h3>
              <p>I'll get back to you as soon as possible.</p>
            </div>
          ) : (
            <form className="contact-form" onSubmit={handleSubmit}>
              {error && <div className="form-error">{error}</div>}
              
              <label className={form.name ? 'field is-filled' : 'field'}>
                <span>Name *</span>
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  required
                />
              </label>

              <label className={form.email ? 'field is-filled' : 'field'}>
                <span>Email *</span>
                <input
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  required
                />
              </label>

              <label className={form.message ? 'field is-filled is-area' : 'field is-area'}>
                <span>Message *</span>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell me about your opportunity..."
                  rows="5"
                  required
                ></textarea>
              </label>

              <button type="submit" disabled={loading} className={loading ? 'is-loading' : ''}>
                {loading ? 'SENDING...' : 'SEND MESSAGE →'}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}

export default Contact
