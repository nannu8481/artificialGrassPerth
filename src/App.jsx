import { useEffect, useState } from 'react'
import galleryOne from './assets/gallery-one.avif'
import galleryTwo from './assets/gallery-two.avif'
import grassDetail from './assets/grass-detail.jpg'
import grassHero from './assets/grass-hero.png'
import familyGreenImage from './assets/family-green.avif'
import headerLogo from './assets/header-logo.jpeg'
import petPawTurfImage from './assets/pet-paw-turf.avif'
import prestigeTurfImage from './assets/prestige-turf.avif'
import proPuttGreenImage from './assets/pro-putt-green.avif'
import softStepImage from './assets/soft-step.avif'
import showcaseGrass from './assets/showcase-grass.avif'
import './App.css'

const contact = {
  phone: '+61 450 421 636',
  phoneHref: 'tel:+61450421636',
  email: 'artificialgrassinstallersperth@gmail.com',
  emailHref: 'mailto:artificialgrassinstallersperth@gmail.com',
  facebook: 'https://www.facebook.com/profile.php?id=61569245093743',
  instagram: 'https://www.instagram.com/',
  whatsapp:
    'https://wa.me/61450421636?text=Hi%20there!%20Thanks%20for%20reaching%20out!%20How%20can%20we%20help%20you%20today%20with%20your%20artificial%20grass%20needs%3F',
}

const navItems = [
  ['Home', '/'],
  ['Products', '/products'],
  ['About', '/about'],
  ['Services', '/services'],
  ['Blog', '/blog'],
  ['Contact', '/contact'],
  ['Appointment', '/appointment'],
]

const pageMeta = {
  '/': {
    title: 'Premium Artificial Grass Installation Services in Perth',
    description:
      'Transform your outdoor spaces with our eco-friendly artificial grass. Enjoy a lush, low-maintenance lawn year-round, perfect for homes, businesses, and playgrounds.',
  },
  '/about': {
    title: 'Premium Artificial Grass Installers in Perth',
    description:
      'Transform your outdoor spaces with our eco-friendly artificial grass installation services in Perth. Enjoy a lush lawn year-round without the hassle of maintenance.',
  },
  '/products': {
    title: 'Artificial Grass Products in Perth',
    description:
      'Explore our featured artificial grass products, including Pro Putt Green, PetPaw Turf, Prestige Turf, Soft Step, and Family Green for specialized outdoor applications.',
  },
  '/products/pro-putt-green': {
    title: 'Pro Putt Green',
    description:
      'Discover Pro Putt Green, a premium artificial grass product ideal for putting greens, golf practice areas, and polished outdoor performance zones.',
  },
  '/products/petpaw-turf': {
    title: 'PetPaw Turf',
    description:
      'Discover PetPaw Turf, an artificial grass product designed for pet-friendly outdoor spaces that stay neat, practical, and easy to maintain.',
  },
  '/products/prestige-turf': {
    title: 'Prestige Turf',
    description:
      'Discover Prestige Turf, an artificial grass product created for polished outdoor spaces that need a premium look and dependable everyday appeal.',
  },
  '/products/soft-step': {
    title: 'Soft Step',
    description:
      'Discover Soft Step, an artificial grass product designed for comfort-focused outdoor areas where a softer underfoot feel and clean finish are important.',
  },
  '/products/family-green': {
    title: 'Family Green',
    description:
      'Discover Family Green, an artificial grass product designed for practical family spaces, everyday comfort, and clean outdoor living areas.',
  },
  '/services': {
    title: 'Premium Artificial Grass Installation Services in Perth',
    description:
      'Transform your outdoor spaces with our eco-friendly artificial grass installation. Enjoy low-maintenance, lush lawns year-round for homes, businesses, and sports fields.',
  },
  '/blog': {
    title: 'Artificial Grass Installation Blog - Perth Insights',
    description:
      'Explore our blog for valuable insights on artificial grass benefits, maintenance tips, and eco-friendly landscaping solutions.',
  },
  '/contact': {
    title: 'Contact Artificial Grass Installers in Perth Today',
    description:
      'Get in touch with our expert team for premium artificial grass installation services in Perth. Contact us for a free quote and transform your outdoor space effortlessly.',
  },
  '/appointment': {
    title: 'Book Your Appointments Easily with Stunning Images',
    description:
      'Create a seamless booking experience with our appointment page. Scheduling your appointments is quick and hassle-free.',
  },
}

const products = [
  {
    name: 'Pro Putt Green',
    slug: '/products/pro-putt-green',
    image: proPuttGreenImage,
    shortText:
      'A premium putting-green style artificial grass designed for smooth performance, practice areas, and standout outdoor presentation.',
    detailText:
      'Pro Putt Green is ideal for golf putting zones, backyard practice areas, and feature spaces that need a refined, performance-focused turf finish.',
    highlights: [
      'Ideal for home putting greens and golf practice zones',
      'Smooth, premium visual finish',
      'Great for standout feature areas in residential or commercial projects',
    ],
  },
  {
    name: 'PetPaw Turf',
    slug: '/products/petpaw-turf',
    image: petPawTurfImage,
    shortText:
      'A pet-friendly artificial grass product made for clean, comfortable outdoor areas that are easy to manage every day.',
    detailText:
      'PetPaw Turf is suited for backyards, pet runs, and outdoor zones where comfort, tidiness, and lower-maintenance upkeep matter most.',
    highlights: [
      'Designed for pet-friendly home and outdoor spaces',
      'Clean, soft visual finish for everyday use',
      'Great for creating neat, easy-to-maintain pet zones',
    ],
  },
  {
    name: 'Prestige Turf',
    slug: '/products/prestige-turf',
    image: prestigeTurfImage,
    shortText:
      'A premium-looking artificial grass product created for elegant outdoor spaces, statement lawns, and a refined finished appearance.',
    detailText:
      'Prestige Turf is suited for residential front yards, backyard entertaining spaces, and polished commercial areas where presentation matters.',
    highlights: [
      'Designed for premium-looking outdoor spaces',
      'Strong visual finish for feature lawns and entertaining areas',
      'A polished option for residential and commercial presentation',
    ],
  },
  {
    name: 'Soft Step',
    slug: '/products/soft-step',
    image: softStepImage,
    shortText:
      'A comfort-focused artificial grass product made for spaces where a softer step, clean appearance, and everyday usability matter.',
    detailText:
      'Soft Step is well suited for family backyards, relaxed outdoor areas, and spaces where underfoot comfort is just as important as presentation.',
    highlights: [
      'Designed for comfort-focused outdoor areas',
      'A softer-feel option for family and lifestyle spaces',
      'Keeps outdoor zones neat, polished, and practical for daily use',
    ],
  },
  {
    name: 'Family Green',
    slug: '/products/family-green',
    image: familyGreenImage,
    shortText:
      'A family-friendly artificial grass product created for active outdoor living, clean backyards, and comfortable everyday use.',
    detailText:
      'Family Green is ideal for family yards, entertaining spaces, and shared outdoor areas where a neat look, comfort, and easy maintenance all matter.',
    highlights: [
      'Designed for family-friendly outdoor spaces',
      'Great for active backyards and everyday outdoor use',
      'Keeps shared spaces tidy, comfortable, and low-maintenance',
    ],
  },
]

const services = [
  {
    name: 'Residential lawns',
    text: 'Create a lush, low-maintenance yard that stays green year-round without mowing, watering, or muddy patches.',
    image: grassHero,
  },
  {
    name: 'Commercial spaces',
    text: 'Upgrade offices, retail sites, and hospitality venues with durable turf that keeps outdoor areas neat and welcoming.',
    image: grassDetail,
  },
  {
    name: 'Playgrounds and activity zones',
    text: 'Add a soft, practical surface for family spaces, schools, and high-traffic areas with reliable everyday performance.',
    image: grassHero,
  },
]

const galleryImages = [
  {
    src: galleryOne,
    alt: 'Artificial grass gallery image one',
  },
  {
    src: galleryTwo,
    alt: 'Artificial grass gallery image two',
  },
]

const benefits = [
  'Low-maintenance lawns with no mowing or watering',
  'A clean, green finish that looks great year-round',
  'Suitable for homes, businesses, and outdoor entertaining areas',
  'Eco-friendly landscaping that reduces ongoing upkeep',
]

const blogPost = {
  title: 'Transform Your Outdoor Space with Artificial Grass: Benefits and Tips',
  excerpt:
    'Discover the advantages of artificial grass for your home or business, explore maintenance tips, and learn how to enhance outdoor areas in Perth.',
  body: [
    'Artificial grass is a smart solution for homeowners, property managers, and businesses that want a neat outdoor look without constant maintenance. It keeps spaces usable in every season and helps reduce the time spent on mowing, edging, and watering.',
    'For family yards and entertaining areas, artificial turf creates a soft, welcoming finish that stays visually consistent throughout the year. In commercial settings, it gives courtyards, display areas, and entryways a polished look with minimal upkeep.',
    'To get the best result, choose a turf style that suits the space, make sure the base preparation is done properly, and keep the surface clear of leaves and debris. With occasional brushing and light cleaning, your lawn can continue looking fresh for years.',
  ],
}

function usePathname() {
  const [pathname, setPathname] = useState(window.location.pathname)

  useEffect(() => {
    const onPopState = () => setPathname(window.location.pathname)
    window.addEventListener('popstate', onPopState)
    return () => window.removeEventListener('popstate', onPopState)
  }, [])

  const navigate = (nextPath) => {
    if (nextPath === pathname) {
      window.scrollTo({ top: 0, behavior: 'smooth' })
      return
    }

    window.history.pushState({}, '', nextPath)
    setPathname(nextPath)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return { pathname, navigate }
}

function App() {
  const { pathname, navigate } = usePathname()
  const normalizedPath = pageMeta[pathname] ? pathname : '/'
  const currentMeta = pageMeta[normalizedPath]

  useEffect(() => {
    document.title = `${currentMeta.title} | Artificial Grass Installers Perth`

    const description = document.querySelector('meta[name="description"]')
    if (description) {
      description.setAttribute('content', currentMeta.description)
    }
  }, [currentMeta])

  return (
    <div className="site-shell">
      <TopContactBar />
      <Header currentPath={normalizedPath} onNavigate={navigate} />
      <main>
        <Page path={normalizedPath} onNavigate={navigate} />
      </main>
      <Footer />
      <a className="whatsapp-fab" href={contact.whatsapp} target="_blank" rel="noreferrer">
        WhatsApp
      </a>
    </div>
  )
}

function TopContactBar() {
  return (
    <div className="top-contact-bar">
      <div className="top-contact-inner">
        <p>Call now for a free quote</p>
        <a href={contact.phoneHref}>{contact.phone}</a>
      </div>
    </div>
  )
}

function Header({ currentPath, onNavigate }) {
  return (
    <header className="site-header">
      <button className="brand" type="button" onClick={() => onNavigate('/')}>
        <img className="brand-logo" src={headerLogo} alt="Artificial Grass Installers Perth logo" />
        <span>
          <strong>Artificial Grass</strong>
          <small>Installers Perth</small>
        </span>
      </button>
      <nav className="site-nav" aria-label="Primary">
        {navItems.map(([label, path]) => (
          <button
            key={path}
            type="button"
            className={currentPath === path ? 'is-active' : ''}
            onClick={() => onNavigate(path)}
          >
            {label}
          </button>
        ))}
      </nav>
    </header>
  )
}

function Page({ path, onNavigate }) {
  switch (path) {
    case '/products':
      return <ProductsPage onNavigate={onNavigate} />
    case '/products/pro-putt-green':
      return <ProductDetailPage onNavigate={onNavigate} product={products[0]} />
    case '/products/petpaw-turf':
      return <ProductDetailPage onNavigate={onNavigate} product={products[1]} />
    case '/products/prestige-turf':
      return <ProductDetailPage onNavigate={onNavigate} product={products[2]} />
    case '/products/soft-step':
      return <ProductDetailPage onNavigate={onNavigate} product={products[3]} />
    case '/products/family-green':
      return <ProductDetailPage onNavigate={onNavigate} product={products[4]} />
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
    default:
      return <HomePage onNavigate={onNavigate} />
  }
}

function HomePage({ onNavigate }) {
  const [activeGalleryIndex, setActiveGalleryIndex] = useState(0)
  const activeGalleryImage = galleryImages[activeGalleryIndex]

  return (
    <>
      <Hero
        eyebrow="Perth artificial grass specialists"
        title="Premium Artificial Grass Installation Services in Perth"
        text="Transform your outdoor spaces with eco-friendly artificial grass. Enjoy a lush, low-maintenance lawn year-round for homes, businesses, and playgrounds."
        primaryLabel="Get your free quote"
        secondaryLabel="Explore services"
        onPrimary={() => onNavigate('/contact')}
        onSecondary={() => onNavigate('/services')}
      />
      <section className="section two-column">
        <div>
          <p className="section-label">Why choose us</p>
          <h2>Beautiful lawns without the upkeep</h2>
          <p className="lead">
            We help Perth homes and businesses upgrade outdoor spaces with artificial grass that
            looks clean, performs well, and cuts down on ongoing maintenance.
          </p>
        </div>
        <ul className="feature-list">
          {benefits.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>
      <section className="section">
        <div className="section-heading">
          <div>
            <p className="section-label">Services</p>
            <h2>Low-maintenance turf solutions for every space</h2>
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
          <p className="section-label">About</p>
          <h2>Transform your space with our artificial grass</h2>
          <p>
            Our focus is simple: practical outdoor upgrades, attractive finishes, and a smooth
            customer experience from quote to installation.
          </p>
          <button type="button" className="primary-button" onClick={() => onNavigate('/about')}>
            Learn more
          </button>
        </div>
        <img className="showcase-image" src={showcaseGrass} alt="Artificial grass showcase" />
      </section>
      <section className="section">
        <div className="gallery-shell">
          <div className="gallery-copy">
            <p className="section-label">Gallery</p>
            <h2>More pictures from the turf look and feel</h2>
            <p className="lead">
              Tap between the images to explore different angles and textures from the look we are
              aiming for across the site.
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
                  <span>View {index + 1}</span>
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
            <div className="gallery-badge">Interactive preview</div>
          </div>
        </div>
      </section>
      <section className="section testimonial">
        <p className="section-label">Testimonial</p>
        <blockquote>
          “The artificial grass transformed my yard. No more mowing or watering. It’s beautiful
          and low-maintenance.”
        </blockquote>
        <p className="testimonial-author">Sarah J.</p>
      </section>
      <section className="section cta-band">
        <div>
          <p className="section-label">Ready to start?</p>
          <h2>Contact us for a free quote today</h2>
        </div>
        <button type="button" className="primary-button" onClick={() => onNavigate('/contact')}>
          Speak with us
        </button>
      </section>
    </>
  )
}

function AboutPage({ onNavigate }) {
  return (
    <>
      <SubHero
        title="Premium Artificial Grass Installers in Perth"
        text="We create clean, practical outdoor spaces with artificial grass installations designed for homes, businesses, and everyday low-maintenance living."
      />
      <section className="section two-column">
        <div>
          <p className="section-label">Our approach</p>
          <h2>Quality results with a simple process</h2>
        </div>
        <div className="stack">
          <p>
            We focus on reliable installation work, clear communication, and turf solutions that
            suit the way each client uses their space.
          </p>
          <p>
            Whether you want to refresh a family backyard, improve the appearance of a commercial
            site, or create a durable outdoor feature area, we aim to deliver a tidy result that
            lasts.
          </p>
        </div>
      </section>
      <section className="section card-grid">
        <article className="card">
          <img className="card-image" src={grassHero} alt="Artificial grass landscape" />
          <h3>Reliable finish</h3>
          <p>Clean, polished installations that help outdoor areas feel complete and well kept.</p>
        </article>
        <article className="card">
          <img className="card-image" src={grassDetail} alt="Artificial turf detail" />
          <h3>Practical design</h3>
          <p>Turf solutions tailored for visual appeal, day-to-day use, and reduced maintenance.</p>
        </article>
        <article className="card">
          <img className="card-image" src={grassHero} alt="Artificial grass project" />
          <h3>Friendly service</h3>
          <p>Helpful guidance from first enquiry through to quote requests and booking support.</p>
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
        title="Premium Artificial Grass Installation Services in Perth"
        text="Upgrade your outdoor spaces with low-maintenance artificial grass for homes, businesses, and high-traffic areas."
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
            <img className="card-image" src={grassDetail} alt="Outdoor refresh area" />
            <h3>Outdoor refresh projects</h3>
            <p>
              Improve entertaining areas, courtyards, and underused spaces with a fresh green
              finish that is easy to care for.
            </p>
          </article>
          <article className="card">
            <img className="card-image" src={grassHero} alt="Quote support consultation" />
            <h3>Quote support</h3>
            <p>
              Share your space requirements and we will help you plan the best artificial grass
              option for your property.
            </p>
          </article>
          <article className="card">
            <img className="card-image" src={grassDetail} alt="Artificial grass maintenance" />
            <h3>Ongoing maintenance advice</h3>
            <p>
              Get practical tips on keeping your installed turf clean, tidy, and looking its best.
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
        title="Artificial Grass Products"
        text="Browse our growing product range for different finishes, use cases, and outdoor project styles."
      />
      <section className="section">
        <div className="product-grid">
          {products.map((product) => (
            <article key={product.slug} className="card">
              <img className="card-image" src={product.image} alt={product.name} />
              <p className="section-label">Featured product</p>
              <h3>{product.name}</h3>
              <p>{product.shortText}</p>
              <button
                type="button"
                className="primary-button"
                onClick={() => onNavigate(product.slug)}
              >
                View details
              </button>
            </article>
          ))}
        </div>
      </section>
    </>
  )
}

function ProductDetailPage({ onNavigate, product }) {
  return (
    <>
      <SubHero title={product.name} text={product.shortText} />
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
            <button type="button" className="secondary-button" onClick={() => onNavigate('/products')}>
              Back to products
            </button>
          </div>
        </div>
      </section>
    </>
  )
}

function BlogPage({ onNavigate }) {
  return (
    <>
      <SubHero
        title="Artificial Grass Installation Blog - Perth Insights"
        text="Explore practical articles on artificial grass benefits, turf care, and eco-friendly landscaping ideas for Perth properties."
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
        title="Contact Artificial Grass Installers in Perth Today"
        text="Get in touch with our team for premium artificial grass installation services, quote support, and project enquiries."
      />
      <section className="section contact-layout">
        <div className="contact-card">
          <p className="section-label">Contact</p>
          <h2>We’d love to hear about your space</h2>
          <a href={contact.phoneHref}>{contact.phone}</a>
          <a href={contact.emailHref}>{contact.email}</a>
          <p>Transform your space with our artificial grass.</p>
        </div>
        <ContactForm
          title="Get your free quote"
          fields={[
            ['Name', 'Enter your name'],
            ['Email', 'Enter your email address'],
            ['Project details', 'Tell us about your space', true],
          ]}
          buttonLabel="Get your free quote"
        />
      </section>
    </>
  )
}

function AppointmentPage() {
  return (
    <>
      <SubHero
        title="Book Your Appointments Easily with Stunning Images"
        text="Book your appointments easily with us. Feel free to reach out for any inquiries or assistance."
      />
      <section className="section appointment-layout">
        <img className="appointment-visual" src={grassHero} alt="Artificial grass appointment visual" />
        <ContactForm
          title="Book your appointment"
          fields={[
            ['Your First Name', 'Enter your first name'],
            ['Your Email Address*', 'Enter your email address'],
            ['Your Appointment Request*', 'Describe your appointment needs', true],
          ]}
          buttonLabel="Book Your Appointment Now"
        />
      </section>
    </>
  )
}

function Hero({ eyebrow, title, text, primaryLabel, secondaryLabel, onPrimary, onSecondary }) {
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
      <img className="hero-image" src={grassHero} alt="Artificial grass installation in Perth" />
    </section>
  )
}

function SubHero({ title, text }) {
  return (
    <section className="subhero-section">
      <p className="section-label">Artificial Grass Installers Perth</p>
      <h1>{title}</h1>
      <p className="lead">{text}</p>
    </section>
  )
}

function ContactForm({ title, fields, buttonLabel }) {
  return (
    <form className="contact-form" onSubmit={(event) => event.preventDefault()}>
      <h2>{title}</h2>
      {fields.map(([label, placeholder, multiline]) => (
        <label key={label}>
          <span>{label}</span>
          {multiline ? <textarea placeholder={placeholder} rows="5" /> : <input placeholder={placeholder} />}
        </label>
      ))}
      <button type="submit" className="primary-button">
        {buttonLabel}
      </button>
    </form>
  )
}

function Footer() {
  return (
    <footer className="site-footer">
      <div>
        <h3>Artificial Grass Installers Perth</h3>
        <p>Transform your space with our artificial grass.</p>
      </div>
      <div>
        <p className="footer-heading">Contact</p>
        <a href={contact.phoneHref}>{contact.phone}</a>
        <a href={contact.emailHref}>{contact.email}</a>
      </div>
      <div>
        <p className="footer-heading">Follow</p>
        <a href={contact.facebook} target="_blank" rel="noreferrer">
          Facebook
        </a>
        <a href={contact.instagram} target="_blank" rel="noreferrer">
          Instagram
        </a>
      </div>
    </footer>
  )
}

export default App
