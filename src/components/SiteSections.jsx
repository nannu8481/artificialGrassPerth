import { useState } from 'react'
import { brandAssets, contact } from '../data/siteContent'

export function Hero({
  eyebrow,
  title,
  text,
  primaryLabel,
  secondaryLabel,
  onPrimary,
  onSecondary,
}) {
  return (
    <section className="hero-section">
      <div className="hero-copy">
        <p className="section-label">{eyebrow}</p>
        <h1>{title}</h1>
        <p className="lead">{text}</p>
        <div className="hero-actions">
          <button type="button" className="primary-button" onClick={onPrimary}>
            {primaryLabel}
          </button>
          <button type="button" className="secondary-button" onClick={onSecondary}>
            {secondaryLabel}
          </button>
        </div>
      </div>
      <img
        className="hero-image"
        src={brandAssets.grassHero}
        alt="Artificial grass installation in Perth"
      />
    </section>
  )
}

export function SubHero({ title, text }) {
  return (
    <section className="subhero-section">
      <p className="section-label">Artificial Grass Installers Perth</p>
      <h1>{title}</h1>
      <p className="lead">{text}</p>
    </section>
  )
}

export function ContactForm({ title, fields, buttonLabel, submitMode = 'quote' }) {
  const [formValues, setFormValues] = useState(() =>
    Object.fromEntries(fields.map(([label]) => [label, ''])),
  )

  const handleChange = (label, value) => {
    setFormValues((current) => ({
      ...current,
      [label]: value,
    }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    const subject =
      submitMode === 'appointment'
        ? 'Appointment request from website'
        : 'Artificial grass quote request from website'
    const body = fields.map(([label]) => `${label}: ${formValues[label] || '-'}`).join('\n')

    window.location.href = `mailto:${contact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <h2>{title}</h2>
      {fields.map(([label, placeholder, multiline]) => (
        <label key={label}>
          <span>{label}</span>
          {multiline ? (
            <textarea
              placeholder={placeholder}
              rows="5"
              value={formValues[label]}
              onChange={(event) => handleChange(label, event.target.value)}
            />
          ) : (
            <input
              placeholder={placeholder}
              value={formValues[label]}
              onChange={(event) => handleChange(label, event.target.value)}
            />
          )}
        </label>
      ))}
      <button type="submit" className="primary-button">
        {buttonLabel}
      </button>
      <p className="form-helper">
        This form opens your email app with the enquiry pre-filled. For the fastest response, call
        us or message us on WhatsApp.
      </p>
    </form>
  )
}
