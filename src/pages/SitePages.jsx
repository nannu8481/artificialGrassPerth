import { useState } from 'react'
import { ContactForm, Hero, SubHero } from '../components/SiteSections'
import {
  benefits,
  blogPost,
  brandAssets,
  contact,
  faqItems,
  galleryImages,
  googleReviews,
  installationSteps,
  products,
  recentProjects,
  serviceAreas,
  services,
  suburbPages,
  trustPoints,
} from '../data/siteContent'
import { createWhatsAppLink } from '../utils/seo'

export function Page({ path, onNavigate }) {
  switch (path) {
    case '/products':
      return <ProductsPage onNavigate={onNavigate} />
    case '/products/pro-putt-green':
    case '/products/petpaw-turf':
    case '/products/prestige-turf':
    case '/products/soft-step':
    case '/products/family-green':
      return (
        <ProductDetailPage
          onNavigate={onNavigate}
          product={products.find((product) => product.slug === path) ?? products[0]}
        />
      )
    case '/about':
      return <AboutPage onNavigate={onNavigate} />
    case '/services':
      return <ServicesPage onNavigate={onNavigate} />
    case '/blog':
      return <BlogPage onNavigate={onNavigate} />
    case '/contact':
      return <ContactPage />
    case '/appointment':
      return <AppointmentPage />
    default: {
      const suburbPage = suburbPages.find((item) => item.slug === path)
      if (suburbPage) {
        return <SuburbPage onNavigate={onNavigate} page={suburbPage} />
      }

      return <HomePage onNavigate={onNavigate} />
    }
  }
}

function HomePage({ onNavigate }) {
  const [activeGalleryIndex, setActiveGalleryIndex] = useState(0)
  const activeGalleryImage = galleryImages[activeGalleryIndex]

  return (
    <>
      <Hero
        eyebrow="Perth artificial grass specialists"
        title="Artificial Grass Installers Perth for Homes, Pets, and Commercial Spaces"
        text="Upgrade your outdoor area with artificial grass supply and installation in Perth. We help homeowners, businesses, and property managers create clean, low-maintenance lawns that look great year-round."
        primaryLabel="Get a free quote"
        secondaryLabel="See Perth services"
        onPrimary={() => onNavigate('/contact')}
        onSecondary={() => onNavigate('/services')}
      />
      <section className="section trust-strip" aria-label="Key reasons to choose us">
        {trustPoints.map((point) => (
          <p key={point}>{point}</p>
        ))}
      </section>
      <section className="section review-band">
        <div>
          <p className="section-label">Google reviews</p>
          <h2>See what Perth customers say about our artificial grass installs</h2>
        </div>
        <a
          className="secondary-button action-link"
          href={contact.googleReviews}
          target="_blank"
          rel="noreferrer"
        >
          Read our Google reviews
        </a>
      </section>
      <section className="section two-column">
        <div>
          <p className="section-label">Why choose us</p>
          <h2>Artificial turf solutions built for Perth lifestyles</h2>
          <p className="lead">
            We focus on the things that matter most to buyers in Perth: practical turf advice,
            clean presentation, low ongoing maintenance, and a smoother path from first enquiry to
            installation.
          </p>
        </div>
        <ul className="feature-list">
          {benefits.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>
      <section className="section two-column">
        <div>
          <p className="section-label">Best fit for your space</p>
          <h2>Need the best artificial grass installers in Perth for your project?</h2>
          <p className="lead">
            The right turf depends on how the space will be used. We help Perth customers compare
            family lawns, pet-friendly turf, putting greens, and premium feature grass without the
            confusion.
          </p>
        </div>
        <ul className="feature-list">
          <li>Family-friendly lawns for backyards and entertaining areas</li>
          <li>Pet turf options designed for cleaner everyday use</li>
          <li>Putting green and feature turf for premium outdoor presentation</li>
          <li>Commercial grass solutions for offices, retail, and hospitality spaces</li>
        </ul>
      </section>
      <section className="section">
        <div className="section-heading">
          <div>
            <p className="section-label">Our process</p>
            <h2>A simple way to get from enquiry to installation</h2>
          </div>
        </div>
        <div className="card-grid process-grid">
          {installationSteps.map((step) => (
            <article key={step.title} className="card">
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="section">
        <div className="section-heading">
          <div>
            <p className="section-label">Services</p>
            <h2>Artificial grass installation services across Perth</h2>
          </div>
          <button type="button" className="text-link" onClick={() => onNavigate('/services')}>
            View all services
          </button>
        </div>
        <div className="card-grid">
          {services.map((service) => (
            <article key={service.name} className="card">
              <img className="card-image" src={service.image} alt={service.name} />
              <h3>{service.name}</h3>
              <p>{service.text}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="section">
        <div className="section-heading">
          <div>
            <p className="section-label">Products</p>
            <h2>Featured artificial grass product</h2>
          </div>
          <button type="button" className="text-link" onClick={() => onNavigate('/products')}>
            View all products
          </button>
        </div>
        <div className="product-grid">
          {products.map((product) => (
            <article key={product.slug} className="product-feature">
              <img className="product-feature-image" src={product.image} alt={product.name} />
              <div className="product-feature-copy">
                <p className="section-label">Featured product</p>
                <h3>{product.name}</h3>
                <p>{product.shortText}</p>
                <ul className="feature-list">
                  {product.highlights.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <div className="hero-actions">
                  <button
                    type="button"
                    className="primary-button"
                    onClick={() => onNavigate(product.slug)}
                  >
                    View product
                  </button>
                  <button
                    type="button"
                    className="secondary-button"
                    onClick={() => onNavigate('/contact')}
                  >
                    Ask about this product
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
      <section className="section showcase">
        <div className="showcase-copy">
          <p className="section-label">Recent Perth work</p>
          <h2>Real artificial grass installations completed across Perth</h2>
          <p>
            These are real project photos from Perth jobs we have completed. Showing genuine work
            helps customers see the finish, edging, and overall presentation they can expect.
          </p>
          <button type="button" className="primary-button" onClick={() => onNavigate('/contact')}>
            Ask for a quote
          </button>
        </div>
        <img
          className="showcase-image"
          src={recentProjects[1].image}
          alt="Recent Perth artificial grass project"
        />
      </section>
      <section className="section">
        <div className="gallery-shell">
          <div className="gallery-copy">
            <p className="section-label">Project gallery</p>
            <h2>See real Perth installs across front lawns, pet areas, and new-build homes</h2>
            <p className="lead">
              These are real artificial grass jobs completed in Perth. Use them to compare
              different frontages, lawn shapes, and installation styles before requesting a quote.
            </p>
            <div className="gallery-thumbs" role="tablist" aria-label="Gallery images">
              {galleryImages.map((image, index) => (
                <button
                  key={image.alt}
                  type="button"
                  className={`gallery-thumb ${index === activeGalleryIndex ? 'is-active' : ''}`}
                  onClick={() => setActiveGalleryIndex(index)}
                  aria-pressed={index === activeGalleryIndex}
                >
                  <img src={image.src} alt={image.alt} loading="lazy" />
                  <span>{image.title}</span>
                </button>
              ))}
            </div>
          </div>
          <div className="gallery-stage">
            <img
              key={activeGalleryImage.src}
              className="gallery-feature"
              src={activeGalleryImage.src}
              alt={activeGalleryImage.alt}
            />
            <div className="gallery-badge">{activeGalleryImage.title}</div>
            <div className="gallery-caption">
              <h3>{activeGalleryImage.title}</h3>
              <p>{activeGalleryImage.text}</p>
            </div>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="section-heading">
          <div>
            <p className="section-label">More completed jobs</p>
            <h2>Recent artificial grass projects in Perth</h2>
          </div>
        </div>
        <div className="card-grid">
          {recentProjects.map((project) => (
            <article key={project.title} className="card">
              <img className="card-image" src={project.image} alt={project.title} loading="lazy" />
              <h3>{project.title}</h3>
              <p>{project.text}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="section testimonial">
        <p className="section-label">Testimonial</p>
        <blockquote>
          “Our backyard looks cleaner, feels more usable, and we no longer spend weekends trying
          to rescue the lawn. The quote process was simple and the artificial grass finish looks
          fantastic.”
        </blockquote>
        <p className="testimonial-author">Perth homeowner</p>
      </section>
      <section className="section">
        <div className="section-heading">
          <div>
            <p className="section-label">Customer reviews</p>
            <h2>Real 5-star feedback from Perth customers</h2>
          </div>
          <a
            className="text-link"
            href={contact.googleReviews}
            target="_blank"
            rel="noreferrer"
          >
            Read all Google reviews
          </a>
        </div>
        <div className="card-grid">
          {googleReviews.map((review) => (
            <article key={review.name} className="card review-card">
              <p className="review-stars" aria-label={`${review.rating} star review`}>
                {'★'.repeat(review.rating)}
              </p>
              <h3>{review.name}</h3>
              <p>{review.text}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="section two-column">
        <div>
          <p className="section-label">Service areas</p>
          <h2>Supplying and installing artificial grass across Perth</h2>
          <p className="lead">
            We welcome enquiries from suburbs across the Perth metro area. If your suburb is not
            listed, contact us anyway and we can confirm availability.
          </p>
        </div>
        <ul className="feature-list service-area-list">
          {serviceAreas.map((area) => (
            <li key={area}>{area}</li>
          ))}
        </ul>
      </section>
      <section className="section">
        <div className="section-heading">
          <div>
            <p className="section-label">Suburb pages</p>
            <h2>Explore artificial grass installers across Perth suburbs</h2>
          </div>
        </div>
        <div className="card-grid">
          {suburbPages.map((page) => (
            <article key={page.slug} className="card">
              <h3>{page.suburb}</h3>
              <p>{page.intro}</p>
              <button type="button" className="text-link" onClick={() => onNavigate(page.slug)}>
                View {page.suburb} page
              </button>
            </article>
          ))}
        </div>
      </section>
      <section className="section">
        <div className="section-heading">
          <div>
            <p className="section-label">FAQ</p>
            <h2>Common questions about artificial grass in Perth</h2>
          </div>
        </div>
        <div className="faq-list">
          {faqItems.map((faq) => (
            <details key={faq.question} className="faq-item">
              <summary>{faq.question}</summary>
              <p>{faq.answer}</p>
            </details>
          ))}
        </div>
      </section>
      <section className="section cta-band">
        <div>
          <p className="section-label">Ready to start?</p>
          <h2>Speak with a Perth artificial grass installer today</h2>
        </div>
        <div className="hero-actions">
          <a
            className="secondary-button action-link"
            href={contact.googleReviews}
            target="_blank"
            rel="noreferrer"
          >
            Read Google reviews
          </a>
          <a className="primary-button action-link" href={contact.phoneHref}>
            Call now
          </a>
          <a
            className="secondary-button action-link"
            href={contact.whatsapp}
            target="_blank"
            rel="noreferrer"
          >
            WhatsApp quote
          </a>
        </div>
      </section>
    </>
  )
}

function AboutPage({ onNavigate }) {
  return (
    <>
      <SubHero
        title="Perth Artificial Grass Installers Focused on Tidy, Practical Results"
        text="We help homeowners and businesses choose artificial grass that suits the space, the traffic, and the look they want without overcomplicating the process."
      />
      <section className="section two-column">
        <div>
          <p className="section-label">Our approach</p>
          <h2>Better preparation, better finish, better everyday use</h2>
        </div>
        <div className="stack">
          <p>
            We focus on clear advice, product fit, and installation planning that helps each
            project feel tailored rather than generic.
          </p>
          <p>
            Whether you are refreshing a family backyard, improving the look of a commercial site,
            or creating a durable pet-friendly area, we aim to deliver a neat Perth installation
            with less maintenance after the job is done.
          </p>
        </div>
      </section>
      <section className="section card-grid">
        <article className="card">
          <img className="card-image" src={brandAssets.grassHero} alt="Artificial grass landscape" />
          <h3>Installer-led guidance</h3>
          <p>Practical recommendations on turf type, finish, and how to get the best result for the space.</p>
        </article>
        <article className="card">
          <img className="card-image" src={brandAssets.grassDetail} alt="Artificial turf detail" />
          <h3>Preparation that matters</h3>
          <p>Good artificial grass starts below the surface, so we emphasise preparation, drainage, and a tidy fit.</p>
        </article>
        <article className="card">
          <img className="card-image" src={brandAssets.grassHero} alt="Artificial grass project" />
          <h3>Easy quote support</h3>
          <p>Quick contact options and simple communication help customers move from enquiry to installation faster.</p>
        </article>
      </section>
      <section className="section cta-band">
        <div>
          <p className="section-label">Next step</p>
          <h2>Tell us about your outdoor project</h2>
        </div>
        <button type="button" className="primary-button" onClick={() => onNavigate('/appointment')}>
          Book an appointment
        </button>
      </section>
    </>
  )
}

function ServicesPage({ onNavigate }) {
  return (
    <>
      <SubHero
        title="Artificial Grass Installation Services in Perth"
        text="From family lawns to commercial upgrades, we supply and install artificial grass for practical, low-maintenance outdoor spaces across Perth."
      />
      <section className="section">
        <div className="card-grid">
          {services.map((service) => (
            <article key={service.name} className="card">
              <img className="card-image" src={service.image} alt={service.name} />
              <h3>{service.name}</h3>
              <p>{service.text}</p>
            </article>
          ))}
          <article className="card">
            <img className="card-image" src={brandAssets.grassDetail} alt="Outdoor refresh area" />
            <h3>Feature lawn upgrades</h3>
            <p>
              Improve courtyards, alfresco zones, and tired outdoor areas with a cleaner green
              finish that lifts presentation.
            </p>
          </article>
          <article className="card">
            <img className="card-image" src={brandAssets.grassHero} alt="Quote support consultation" />
            <h3>Perth quote support</h3>
            <p>
              Share your site details and we will help you compare the best artificial grass option
              for your property and budget.
            </p>
          </article>
          <article className="card">
            <img className="card-image" src={brandAssets.grassDetail} alt="Artificial grass maintenance" />
            <h3>Aftercare advice</h3>
            <p>
              Get practical advice on brushing, cleaning, and keeping your artificial grass looking
              sharp after installation.
            </p>
          </article>
        </div>
      </section>
      <section className="section cta-band">
        <div>
          <p className="section-label">Free quote</p>
          <h2>Ready to upgrade your lawn?</h2>
        </div>
        <button type="button" className="primary-button" onClick={() => onNavigate('/contact')}>
          Request a quote
        </button>
      </section>
    </>
  )
}

function ProductsPage({ onNavigate }) {
  return (
    <>
      <SubHero
        title="Artificial Grass Products in Perth"
        text="Compare artificial turf styles for family lawns, pets, putting greens, and premium landscaping projects."
      />
      <section className="section">
        <div className="product-grid">
          {products.map((product) => (
            <article key={product.slug} className="card">
              <img className="card-image" src={product.image} alt={product.name} />
              <p className="section-label">Featured product</p>
              <h3>{product.name}</h3>
              <p>{product.shortText}</p>
              <div className="hero-actions">
                <button
                  type="button"
                  className="primary-button"
                  onClick={() => onNavigate(product.slug)}
                >
                  View details
                </button>
                <a
                  className="secondary-button action-link"
                  href={createWhatsAppLink(`Hi, I want pricing for ${product.name}.`)}
                  target="_blank"
                  rel="noreferrer"
                >
                  WhatsApp pricing
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  )
}

function ProductDetailPage({ onNavigate, product }) {
  const relatedProducts = products.filter((item) => item.slug !== product.slug).slice(0, 3)

  return (
    <>
      <SubHero title={product.seoTitle} text={product.seoDescription} />
      <section className="section product-detail-layout">
        <img className="product-detail-image" src={product.image} alt={product.name} />
        <div className="product-detail-copy">
          <p className="section-label">Product details</p>
          <h2>{product.name}</h2>
          <p>{product.detailText}</p>
          <ul className="feature-list">
            {product.highlights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <div className="hero-actions">
            <button type="button" className="primary-button" onClick={() => onNavigate('/contact')}>
              Enquire now
            </button>
            <a
              className="secondary-button action-link"
              href={createWhatsAppLink(`Hi, I want to order or get a quote for ${product.name}.`)}
              target="_blank"
              rel="noreferrer"
            >
              Order on WhatsApp
            </a>
            <button type="button" className="secondary-button" onClick={() => onNavigate('/products')}>
              Back to products
            </button>
          </div>
        </div>
      </section>
      <section className="section two-column">
        <div>
          <p className="section-label">Best for</p>
          <h2>Where {product.name} works best</h2>
          <p className="lead">{product.bestFor}</p>
        </div>
        <div className="stack">
          <p>{product.installNotes}</p>
          <p>
            If you are comparing artificial grass products in Perth, we can help match the surface
            to your goals, whether that means comfort, pet use, premium presentation, or practice
            performance.
          </p>
        </div>
      </section>
      <section className="section card-grid">
        <article className="card">
          <h3>Supply and installation in Perth</h3>
          <p>
            We can help with pricing and installation enquiries for {product.name} across Perth for
            homes, lifestyle spaces, and commercial projects.
          </p>
        </article>
        <article className="card">
          <h3>Product guidance</h3>
          <p>
            If you are unsure whether {product.name} is the right fit, send us your suburb,
            measurements, and photos so we can recommend the best option.
          </p>
        </article>
        <article className="card">
          <h3>Quote support</h3>
          <p>
            The fastest way to get pricing is to call or message us on WhatsApp with your project
            details and preferred turf style.
          </p>
        </article>
      </section>
      <section className="section">
        <div className="section-heading">
          <div>
            <p className="section-label">FAQ</p>
            <h2>Common questions about {product.name}</h2>
          </div>
        </div>
        <div className="faq-list">
          {product.faqs.map((faq) => (
            <details key={faq.question} className="faq-item">
              <summary>{faq.question}</summary>
              <p>{faq.answer}</p>
            </details>
          ))}
        </div>
      </section>
      <section className="section">
        <div className="section-heading">
          <div>
            <p className="section-label">Compare products</p>
            <h2>Related artificial grass options</h2>
          </div>
          <button type="button" className="text-link" onClick={() => onNavigate('/products')}>
            View all products
          </button>
        </div>
        <div className="card-grid">
          {relatedProducts.map((item) => (
            <article key={item.slug} className="card">
              <h3>{item.name}</h3>
              <p>{item.shortText}</p>
              <button type="button" className="text-link" onClick={() => onNavigate(item.slug)}>
                View details
              </button>
            </article>
          ))}
        </div>
      </section>
    </>
  )
}

function BlogPage({ onNavigate }) {
  return (
    <>
      <SubHero
        title="Perth Artificial Grass Tips, Ideas, and Buying Advice"
        text="Explore practical guidance on choosing turf, comparing installers, and planning a low-maintenance outdoor upgrade in Perth."
      />
      <section className="section blog-layout">
        <article className="blog-card">
          <p className="section-label">Featured article</p>
          <h2>{blogPost.title}</h2>
          <p>{blogPost.excerpt}</p>
        </article>
        <article className="blog-post">
          {blogPost.body.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </article>
      </section>
      <section className="section cta-band">
        <div>
          <p className="section-label">Need advice?</p>
          <h2>Talk with our team about the right turf for your space</h2>
        </div>
        <button type="button" className="primary-button" onClick={() => onNavigate('/contact')}>
          Contact us
        </button>
      </section>
    </>
  )
}

function ContactPage() {
  return (
    <>
      <SubHero
        title="Contact Artificial Grass Installers Perth"
        text="Call, email, or send us your measurements and photos for fast artificial grass quote support in Perth."
      />
      <section className="section contact-layout">
        <div className="contact-card">
          <p className="section-label">Contact</p>
          <h2>Tell us about your lawn, pet area, or commercial project</h2>
          <a href={contact.phoneHref}>{contact.phone}</a>
          <a href={contact.emailHref}>{contact.email}</a>
          <a href={contact.googleReviews} target="_blank" rel="noreferrer">
            Read our Google reviews
          </a>
          <a href={contact.whatsapp} target="_blank" rel="noreferrer">
            Request a quote on WhatsApp
          </a>
          <p>For the fastest quote, include rough measurements, suburb, and a few photos of the area.</p>
        </div>
        <ContactForm
          title="Get your free quote"
          fields={[
            ['Name', 'Enter your name'],
            ['Phone or email', 'Enter your best contact detail'],
            ['Suburb', 'Enter your Perth suburb'],
            ['Project details', 'Tell us about your space, preferred turf, and approximate size', true],
          ]}
          buttonLabel="Get your free quote"
          submitMode="quote"
        />
      </section>
    </>
  )
}

function AppointmentPage() {
  return (
    <>
      <SubHero
        title="Book an Artificial Grass Quote in Perth"
        text="Share your project details and preferred timing so we can help arrange the right quote or consultation."
      />
      <section className="section appointment-layout">
        <img
          className="appointment-visual"
          src={brandAssets.grassHero}
          alt="Artificial grass appointment visual"
        />
        <ContactForm
          title="Book your quote request"
          fields={[
            ['Your name', 'Enter your name'],
            ['Phone or email', 'Enter your best contact detail'],
            ['Preferred suburb or location', 'Enter your suburb'],
            ['Appointment request', 'Describe your project and preferred timing', true],
          ]}
          buttonLabel="Book your quote request"
          submitMode="appointment"
        />
      </section>
    </>
  )
}

function SuburbPage({ onNavigate, page }) {
  return (
    <>
      <SubHero title={page.title} text={page.description} />
      <section className="section two-column">
        <div>
          <p className="section-label">{page.suburb} service area</p>
          <h2>Artificial grass supply and installation in {page.suburb}</h2>
          <p className="lead">{page.intro}</p>
        </div>
        <ul className="feature-list">
          {page.points.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>
      </section>
      <section className="section card-grid">
        <article className="card">
          <h3>Residential turf in {page.suburb}</h3>
          <p>
            We help homeowners create clean, green family lawns with artificial grass that reduces
            mowing, watering, and patchy seasonal wear.
          </p>
        </article>
        <article className="card">
          <h3>Pet-friendly grass</h3>
          <p>
            If your outdoor area needs to work for pets as well as people, we can guide you toward
            practical turf options that feel tidier and easier to maintain.
          </p>
        </article>
        <article className="card">
          <h3>Commercial presentation</h3>
          <p>
            Artificial grass can also lift offices, retail fronts, and hospitality spaces in
            {page.suburb} with a stronger first impression and lower upkeep.
          </p>
        </article>
      </section>
      <section className="section two-column">
        <div>
          <p className="section-label">Why locals enquire</p>
          <h2>Looking for the best grass installers in {page.suburb}?</h2>
          <p className="lead">
            Most customers want three things: a better-looking lawn, less maintenance, and clear
            quote support. That is exactly what these pages are built to help with.
          </p>
        </div>
        <div className="stack">
          <p>
            We recommend sharing your suburb, rough measurements, and a few photos so we can point
            you toward the right artificial grass product faster.
          </p>
          <p>
            If you are comparing installers, focus on preparation, drainage, turf quality, and how
            clearly the quote explains what is included.
          </p>
        </div>
      </section>
      <section className="section cta-band">
        <div>
          <p className="section-label">Free quote</p>
          <h2>Request an artificial grass quote in {page.suburb}</h2>
        </div>
        <div className="hero-actions">
          <button type="button" className="primary-button" onClick={() => onNavigate('/contact')}>
            Get a quote
          </button>
          <a className="secondary-button action-link" href={contact.whatsapp} target="_blank" rel="noreferrer">
            WhatsApp us
          </a>
        </div>
      </section>
    </>
  )
}
