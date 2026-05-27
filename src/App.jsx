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

const site = {
  url: 'https://artificialgrassinstallersperth.com.au',
  name: 'Artificial Grass Installers Perth',
  locality: 'Perth',
  region: 'WA',
  country: 'AU',
}

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

const suburbPages = [
  {
    slug: '/artificial-grass-joondalup',
    suburb: 'Joondalup',
    title: 'Artificial Grass Installers Joondalup',
    description:
      'Artificial grass installers in Joondalup for family lawns, pet turf, and commercial spaces. Request a free quote for supply and installation.',
    intro:
      'We help Joondalup homeowners, landlords, and businesses upgrade outdoor areas with artificial grass that looks sharp and stays easy to manage.',
    points: [
      'Family-friendly backyards with less mowing and mess',
      'Pet-friendly turf options for cleaner outdoor use',
      'Low-maintenance landscaping for rental and investment properties',
      'Quote support for homes, schools, and commercial sites',
    ],
  },
  {
    slug: '/artificial-grass-rockingham',
    suburb: 'Rockingham',
    title: 'Artificial Grass Installers Rockingham',
    description:
      'Artificial grass installers in Rockingham for homes, entertaining areas, and commercial projects. Get a free quote today.',
    intro:
      'We supply and install artificial grass in Rockingham for outdoor spaces that need a cleaner finish, year-round presentation, and less upkeep.',
    points: [
      'Artificial turf for front yards and backyard entertaining zones',
      'Practical low-maintenance grass for busy households',
      'Commercial and hospitality outdoor presentation upgrades',
      'Fast quote support with phone and WhatsApp contact options',
    ],
  },
  {
    slug: '/artificial-grass-midland',
    suburb: 'Midland',
    title: 'Artificial Grass Installers Midland',
    description:
      'Artificial grass installers in Midland for residential lawns, pet areas, and feature landscaping. Free quotes available.',
    intro:
      'From small backyard refreshes to larger outdoor upgrades, we help Midland customers choose artificial grass that suits the space and budget.',
    points: [
      'Soft, tidy lawns for homes and family areas',
      'Pet turf designed for practical everyday use',
      'Feature grass for courtyards and outdoor refresh projects',
      'Clear advice on products, preparation, and quote planning',
    ],
  },
  {
    slug: '/artificial-grass-canning-vale',
    suburb: 'Canning Vale',
    title: 'Artificial Grass Installers Canning Vale',
    description:
      'Artificial grass installers in Canning Vale for family yards, pets, and commercial sites. Ask for a free quote across Perth.',
    intro:
      'We help Canning Vale properties get the look of a green lawn without the constant maintenance that natural grass demands.',
    points: [
      'Family lawn options for active backyards',
      'Pet-friendly artificial turf with easy-clean appeal',
      'Commercial grass for polished business presentation',
      'Helpful quote support from enquiry through booking',
    ],
  },
  {
    slug: '/artificial-grass-fremantle',
    suburb: 'Fremantle',
    title: 'Artificial Grass Installers Fremantle',
    description:
      'Artificial grass installers in Fremantle for courtyards, family lawns, pet areas, and commercial projects. Contact us for a free quote.',
    intro:
      'We work with Fremantle customers looking for cleaner courtyards, practical family lawns, and low-maintenance green outdoor spaces.',
    points: [
      'Courtyard and alfresco turf for compact outdoor areas',
      'Family and pet grass designed for comfort and practicality',
      'Feature lawn upgrades for stronger curb appeal',
      'Commercial turf advice for offices, venues, and retail settings',
    ],
  },
  {
    slug: '/artificial-grass-ellenbrook',
    suburb: 'Ellenbrook',
    title: 'Artificial Grass Installers Ellenbrook',
    description:
      'Artificial grass installers in Ellenbrook for homes, pets, schools, and commercial spaces. Get a free installation quote.',
    intro:
      'We help Ellenbrook homes and businesses replace patchy, high-maintenance grass with artificial turf that stays presentable and easy to care for.',
    points: [
      'Low-maintenance lawns for busy households',
      'Artificial grass for schools, play zones, and activity areas',
      'Pet turf for practical outdoor living',
      'Quick contact options for quotes and product guidance',
    ],
  },
]

const faqItems = [
  {
    question: 'Do you supply and install artificial grass across Perth?',
    answer:
      'Yes. We handle artificial grass supply and installation enquiries across Perth and can recommend the right turf for family yards, pet areas, commercial spaces, and feature lawns.',
  },
  {
    question: 'How much does artificial grass installation cost in Perth?',
    answer:
      'Pricing depends on site size, access, base preparation, drainage needs, and the turf you choose. The fastest way to get accurate pricing is to call or send us your measurements and photos on WhatsApp for a free quote.',
  },
  {
    question: 'Which turf is best for pets, putting greens, or family yards in Perth?',
    answer:
      'PetPaw Turf suits pet-focused areas, Pro Putt Green suits putting and practice zones, and Family Green or Soft Step are strong options for everyday family use.',
  },
  {
    question: 'What suburbs do you service around Perth?',
    answer:
      'We welcome enquiries from Perth metro suburbs including Joondalup, Morley, Midland, Canning Vale, Rockingham, Fremantle, Baldivis, Ellenbrook, and nearby areas across the region.',
  },
]

const pageMeta = {
  '/': {
    title: 'Artificial Grass Installers Perth | Turf Supply & Installation',
    description:
      'Artificial grass installers in Perth for homes, pets, putting greens, and commercial spaces. Get a free quote for supply and installation across Perth.',
  },
  '/about': {
    title: 'About Our Artificial Grass Installers in Perth',
    description:
      'Learn how our Perth artificial grass installers deliver tidy preparation, quality turf supply, and low-maintenance outdoor transformations.',
  },
  '/products': {
    title: 'Artificial Grass Products Perth | Pet, Family & Putting Turf',
    description:
      'Compare artificial grass products in Perth including pet turf, family lawns, premium landscaping grass, and putting green surfaces.',
  },
  '/products/pro-putt-green': {
    title: 'Pro Putt Green Artificial Grass Perth',
    description:
      'Pro Putt Green artificial grass in Perth for putting greens, golf practice areas, and premium feature spaces.',
  },
  '/products/petpaw-turf': {
    title: 'Pet-Friendly Artificial Grass Perth | PetPaw Turf',
    description:
      'PetPaw Turf artificial grass in Perth for pet-friendly outdoor spaces that stay neat, practical, and easy to maintain.',
  },
  '/products/prestige-turf': {
    title: 'Prestige Turf Artificial Grass Perth',
    description:
      'Prestige Turf artificial grass in Perth for polished outdoor spaces that need a premium look and dependable everyday appeal.',
  },
  '/products/soft-step': {
    title: 'Soft Step Artificial Grass Perth',
    description:
      'Soft Step artificial grass in Perth for comfort-focused outdoor areas where a softer underfoot feel and clean finish are important.',
  },
  '/products/family-green': {
    title: 'Family Green Artificial Grass Perth',
    description:
      'Family Green artificial grass in Perth for practical family spaces, everyday comfort, and clean outdoor living areas.',
  },
  '/services': {
    title: 'Artificial Grass Installation Services Perth',
    description:
      'Artificial grass installation services in Perth for residential lawns, commercial spaces, playgrounds, and low-maintenance landscape upgrades.',
  },
  '/blog': {
    title: 'Artificial Grass Perth Blog | Tips, Ideas & Buying Advice',
    description:
      'Read practical Perth artificial grass advice covering installation planning, maintenance, pet-friendly turf, and landscape inspiration.',
  },
  '/contact': {
    title: 'Contact Artificial Grass Installers Perth for a Free Quote',
    description:
      'Contact our Perth artificial grass installers for fast quotes, product advice, and installation enquiries by phone, email, or WhatsApp.',
  },
  '/appointment': {
    title: 'Book an Artificial Grass Quote in Perth',
    description:
      'Book an artificial grass quote in Perth and tell us about your yard, pet area, putting green, or commercial project.',
  },
  ...Object.fromEntries(
    suburbPages.map((page) => [
      page.slug,
      {
        title: `${page.title} | Perth`,
        description: page.description,
      },
    ]),
  ),
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
    seoTitle: 'Pro Putt Green Artificial Grass Perth',
    seoDescription:
      'Pro Putt Green artificial grass in Perth for home putting greens, golf practice areas, and premium feature spaces.',
    bestFor: 'Home putting greens, golf practice zones, and premium feature lawns',
    installNotes:
      'This turf suits customers who want a smoother, more performance-focused surface for short-game practice or a premium outdoor feature area.',
    faqs: [
      {
        question: 'Is Pro Putt Green good for backyard golf practice?',
        answer:
          'Yes. It is positioned as a putting-green style surface suited to home golf practice, short-game areas, and polished feature zones.',
      },
      {
        question: 'Can I get Pro Putt Green installed in Perth?',
        answer:
          'Yes. We can help with quotes for Pro Putt Green supply and installation across Perth.',
      },
    ],
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
    seoTitle: 'Pet-Friendly Artificial Grass Perth | PetPaw Turf',
    seoDescription:
      'PetPaw Turf artificial grass in Perth for pet-friendly backyards, runs, and clean low-maintenance outdoor spaces.',
    bestFor: 'Pet-friendly backyards, dog runs, and everyday outdoor family use',
    installNotes:
      'PetPaw Turf is a strong fit when customers want outdoor areas that look tidy, feel comfortable, and are easier to keep clean around pets.',
    faqs: [
      {
        question: 'Which artificial grass is best for pets in Perth?',
        answer:
          'PetPaw Turf is the pet-focused option on this site and is suited to backyards, pet runs, and outdoor spaces that need a cleaner finish.',
      },
      {
        question: 'Can I use PetPaw Turf for family spaces too?',
        answer:
          'Yes. It is a practical option for outdoor areas shared by pets and people, especially where easy upkeep matters.',
      },
    ],
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
    seoTitle: 'Prestige Turf Artificial Grass Perth',
    seoDescription:
      'Prestige Turf artificial grass in Perth for premium-looking front yards, entertaining spaces, and polished commercial presentation.',
    bestFor: 'Premium front yards, entertaining zones, and presentation-focused commercial spaces',
    installNotes:
      'This product is aimed at customers who care most about visual finish, curb appeal, and a more refined landscaping look.',
    faqs: [
      {
        question: 'What artificial grass looks most premium?',
        answer:
          'Prestige Turf is positioned as the premium-looking option for customers who want a more elegant lawn finish.',
      },
      {
        question: 'Is Prestige Turf suitable for commercial spaces?',
        answer:
          'Yes. It is a polished option for commercial areas where presentation is important.',
      },
    ],
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
    seoTitle: 'Soft Step Artificial Grass Perth',
    seoDescription:
      'Soft Step artificial grass in Perth for comfortable family lawns, relaxed outdoor areas, and softer underfoot everyday use.',
    bestFor: 'Comfort-focused family yards, barefoot areas, and relaxed outdoor spaces',
    installNotes:
      'Soft Step fits buyers who care about comfort underfoot as much as low-maintenance presentation and day-to-day usability.',
    faqs: [
      {
        question: 'Which artificial grass feels softer underfoot?',
        answer:
          'Soft Step is the comfort-focused option on this site and is designed for spaces where a softer feel matters.',
      },
      {
        question: 'Is Soft Step good for family lawns?',
        answer:
          'Yes. It is well suited to family backyards and lifestyle spaces where comfort and appearance both matter.',
      },
    ],
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
    seoTitle: 'Family Green Artificial Grass Perth',
    seoDescription:
      'Family Green artificial grass in Perth for active backyards, family lawns, and neat low-maintenance outdoor living areas.',
    bestFor: 'Active family backyards, entertaining areas, and shared everyday outdoor spaces',
    installNotes:
      'Family Green is built around practical family use, helping shared outdoor spaces stay neat, comfortable, and easier to maintain.',
    faqs: [
      {
        question: 'Which artificial grass is best for families?',
        answer:
          'Family Green is the family-focused option on this site and is designed for active backyards and shared outdoor areas.',
      },
      {
        question: 'Can Family Green work in entertaining areas?',
        answer:
          'Yes. It is a good fit for outdoor living spaces where you want a neat look with low ongoing maintenance.',
      },
    ],
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
    image: showcaseGrass,
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
  'Perth artificial grass installers focused on supply, preparation, and tidy finishes',
  'Low-maintenance lawns with no mowing, muddy patches, or regular watering',
  'Options for pet areas, family backyards, feature lawns, and putting greens',
  'Fast quote support by phone, email, or WhatsApp with practical product advice',
]

const blogPost = {
  title: 'How To Choose The Best Artificial Grass Installers In Perth',
  excerpt:
    'Learn what to compare when choosing an artificial grass installer in Perth, from base preparation and drainage to turf quality and quote clarity.',
  body: [
    'The best artificial grass installers in Perth do more than lay turf. They help you choose the right pile height and finish, explain how the base will be prepared, and make sure drainage, edging, and joins are handled properly for a clean long-term result.',
    'For family yards and pet areas, comfort and practicality matter most. For commercial sites, visual presentation and durability are usually the priority. Putting greens and feature spaces need a different surface again, so it helps to work with an installer who can match the product to the use case.',
    'Before you book, ask what is included in the quote, whether old grass removal or base preparation is covered, and how the installer recommends maintaining the turf after handover. A clear answer on those points usually tells you a lot about the quality of the installation service.',
  ],
}

const trustPoints = [
  'Free quotes for Perth homes and businesses',
  'Product guidance for pets, kids, entertaining, and golf practice',
  'Clean, low-maintenance finishes designed for everyday use',
]

const serviceAreas = [
  'Perth CBD',
  'Joondalup',
  'Morley',
  'Midland',
  'Canning Vale',
  'Rockingham',
  'Fremantle',
  'Baldivis',
  'Ellenbrook',
  'Victoria Park',
]

const installationSteps = [
  {
    title: '1. Quick quote',
    text: 'Call, email, or send us photos and measurements on WhatsApp so we can understand the space and recommend the right next step.',
  },
  {
    title: '2. Turf selection',
    text: 'We help you choose the best artificial grass for pets, family use, putting greens, commercial presentation, or a premium landscaping finish.',
  },
  {
    title: '3. Preparation and install',
    text: 'We focus on tidy preparation, practical drainage planning, and a neat final finish that looks polished and feels ready to use.',
  },
]

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

function createWhatsAppLink(message) {
  return `https://wa.me/61450421636?text=${encodeURIComponent(message)}`
}

function setHeadTag(selector, createTag, attributes) {
  let element = document.head.querySelector(selector)

  if (!element) {
    element = document.createElement(createTag)
    document.head.appendChild(element)
  }

  Object.entries(attributes).forEach(([key, value]) => {
    element.setAttribute(key, value)
  })
}

function getSchemas(pathname, currentProduct) {
  const pageUrl = `${site.url}${pathname === '/' ? '' : pathname}`
  const businessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LandscapingBusiness',
    name: site.name,
    url: site.url,
    telephone: contact.phone,
    email: contact.email,
    image: `${site.url}/favicon.jpeg`,
    description:
      'Artificial grass supply and installation services in Perth for residential lawns, pet areas, putting greens, playgrounds, and commercial spaces.',
    priceRange: '$$',
    areaServed: {
      '@type': 'City',
      name: site.locality,
    },
    address: {
      '@type': 'PostalAddress',
      addressLocality: site.locality,
      addressRegion: site.region,
      addressCountry: site.country,
    },
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: contact.phone,
        contactType: 'sales',
        areaServed: 'AU',
      },
    ],
    sameAs: [contact.facebook, contact.instagram],
  }

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: site.name,
    url: site.url,
  }

  const breadcrumbItems = [{ '@type': 'ListItem', position: 1, name: 'Home', item: site.url }]

  if (pathname === '/products') {
    breadcrumbItems.push({
      '@type': 'ListItem',
      position: 2,
      name: 'Products',
      item: `${site.url}/products`,
    })
  }

  if (currentProduct) {
    breadcrumbItems.push({
      '@type': 'ListItem',
      position: 2,
      name: 'Products',
      item: `${site.url}/products`,
    })
    breadcrumbItems.push({
      '@type': 'ListItem',
      position: 3,
      name: currentProduct.name,
      item: pageUrl,
    })
  }

  const schemas = [
    websiteSchema,
    businessSchema,
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: breadcrumbItems,
    },
  ]

  if (pathname === '/') {
    schemas.push({
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faqItems.map((faq) => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faq.answer,
        },
      })),
    })
    schemas.push({
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: 'Artificial Grass Installation Perth',
      provider: {
        '@type': 'LandscapingBusiness',
        name: site.name,
        url: site.url,
      },
      areaServed: {
        '@type': 'City',
        name: site.locality,
      },
      serviceType: [
        'Artificial grass installation',
        'Artificial turf supply',
        'Pet-friendly turf installation',
        'Putting green installation',
        'Commercial artificial grass',
      ],
      url: pageUrl,
    })
  }

  if (pathname === '/services') {
    schemas.push({
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: 'Artificial Grass Installation Services in Perth',
      provider: {
        '@type': 'LandscapingBusiness',
        name: site.name,
        url: site.url,
      },
      areaServed: {
        '@type': 'City',
        name: site.locality,
      },
      serviceType: services.map((service) => service.name),
      url: pageUrl,
    })
  }

  const suburbPage = suburbPages.find((page) => page.slug === pathname)

  if (suburbPage) {
    schemas.push({
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: `${suburbPage.suburb} Artificial Grass Installation`,
      provider: {
        '@type': 'LandscapingBusiness',
        name: site.name,
        url: site.url,
      },
      areaServed: {
        '@type': 'City',
        name: suburbPage.suburb,
      },
      serviceType: [
        'Artificial grass installation',
        'Artificial turf supply',
        'Pet turf installation',
        'Residential artificial lawns',
        'Commercial artificial grass',
      ],
      url: pageUrl,
      description: suburbPage.description,
    })
  }

  if (pathname === '/blog') {
    schemas.push({
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: blogPost.title,
      description: blogPost.excerpt,
      author: {
        '@type': 'Organization',
        name: site.name,
      },
      publisher: {
        '@type': 'Organization',
        name: site.name,
      },
      mainEntityOfPage: pageUrl,
    })
  }

  if (currentProduct) {
    schemas.push({
      '@context': 'https://schema.org',
      '@type': 'Product',
      name: currentProduct.name,
      image: [`${window.location.origin}${currentProduct.image}`],
      description: currentProduct.detailText,
      brand: {
        '@type': 'Brand',
        name: site.name,
      },
      category: 'Artificial Grass',
      url: pageUrl,
    })
    schemas.push({
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: currentProduct.faqs.map((faq) => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faq.answer,
        },
      })),
    })
  }

  return schemas
}

function App() {
  const { pathname, navigate } = usePathname()
  const normalizedPath = pageMeta[pathname] ? pathname : '/'
  const currentMeta = pageMeta[normalizedPath]
  const currentProduct = products.find((product) => product.slug === normalizedPath) ?? null

  useEffect(() => {
    document.title = `${currentMeta.title} | Artificial Grass Installers Perth`

    setHeadTag('meta[name="description"]', 'meta', {
      name: 'description',
      content: currentMeta.description,
    })
    setHeadTag('meta[property="og:title"]', 'meta', {
      property: 'og:title',
      content: `${currentMeta.title} | Artificial Grass Installers Perth`,
    })
    setHeadTag('meta[property="og:description"]', 'meta', {
      property: 'og:description',
      content: currentMeta.description,
    })
    setHeadTag('meta[property="og:url"]', 'meta', {
      property: 'og:url',
      content: `${site.url}${normalizedPath === '/' ? '' : normalizedPath}`,
    })
    setHeadTag('meta[property="og:type"]', 'meta', {
      property: 'og:type',
      content: currentProduct ? 'product' : 'website',
    })
    setHeadTag('meta[name="twitter:card"]', 'meta', {
      name: 'twitter:card',
      content: 'summary_large_image',
    })
    setHeadTag('meta[name="robots"]', 'meta', {
      name: 'robots',
      content: 'index,follow,max-image-preview:large',
    })
    setHeadTag('link[rel="canonical"]', 'link', {
      rel: 'canonical',
      href: `${site.url}${normalizedPath === '/' ? '' : normalizedPath}`,
    })
    setHeadTag('#site-schema', 'script', {
      id: 'site-schema',
      type: 'application/ld+json',
    })

    const schemaTag = document.head.querySelector('#site-schema')
    if (schemaTag) {
      schemaTag.textContent = JSON.stringify(getSchemas(normalizedPath, currentProduct))
    }
  }, [currentMeta, normalizedPath, currentProduct])

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
    case '/artificial-grass-joondalup':
    case '/artificial-grass-rockingham':
    case '/artificial-grass-midland':
    case '/artificial-grass-canning-vale':
    case '/artificial-grass-fremantle':
    case '/artificial-grass-ellenbrook':
      return (
        <SuburbPage
          onNavigate={onNavigate}
          page={suburbPages.find((item) => item.slug === path) ?? suburbPages[0]}
        />
      )
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
          <p className="section-label">About</p>
          <h2>We help Perth properties look sharper and work harder</h2>
          <p>
            From family backyards to commercial frontages, our goal is to make artificial grass
            feel like a smart upgrade, not a complicated one. We keep the process clear and the
            finish tidy.
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
            <h2>See the look and finish artificial grass can bring to Perth spaces</h2>
            <p className="lead">
              Browse a few visual styles for backyards, feature lawns, and green outdoor zones.
              This helps customers picture how different turf finishes can suit their own property.
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
          “Our backyard looks cleaner, feels more usable, and we no longer spend weekends trying
          to rescue the lawn. The quote process was simple and the artificial grass finish looks
          fantastic.”
        </blockquote>
        <p className="testimonial-author">Perth homeowner</p>
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
          <a className="primary-button action-link" href={contact.phoneHref}>
            Call now
          </a>
          <a className="secondary-button action-link" href={contact.whatsapp} target="_blank" rel="noreferrer">
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
          <img className="card-image" src={grassHero} alt="Artificial grass landscape" />
          <h3>Installer-led guidance</h3>
          <p>Practical recommendations on turf type, finish, and how to get the best result for the space.</p>
        </article>
        <article className="card">
          <img className="card-image" src={grassDetail} alt="Artificial turf detail" />
          <h3>Preparation that matters</h3>
          <p>Good artificial grass starts below the surface, so we emphasise preparation, drainage, and a tidy fit.</p>
        </article>
        <article className="card">
          <img className="card-image" src={grassHero} alt="Artificial grass project" />
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
            <img className="card-image" src={grassDetail} alt="Outdoor refresh area" />
            <h3>Feature lawn upgrades</h3>
            <p>
              Improve courtyards, alfresco zones, and tired outdoor areas with a cleaner green
              finish that lifts presentation.
            </p>
          </article>
          <article className="card">
            <img className="card-image" src={grassHero} alt="Quote support consultation" />
            <h3>Perth quote support</h3>
            <p>
              Share your site details and we will help you compare the best artificial grass option
              for your property and budget.
            </p>
          </article>
          <article className="card">
            <img className="card-image" src={grassDetail} alt="Artificial grass maintenance" />
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
        <img className="appointment-visual" src={grassHero} alt="Artificial grass appointment visual" />
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

function ContactForm({ title, fields, buttonLabel, submitMode = 'quote' }) {
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
    const body = fields
      .map(([label]) => `${label}: ${formValues[label] || '-'}`)
      .join('\n')

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

function Footer() {
  return (
    <footer className="site-footer">
      <div>
        <h3>Artificial Grass Installers Perth</h3>
        <p>Artificial grass supply and installation for Perth homes, pet areas, feature lawns, and commercial spaces.</p>
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
