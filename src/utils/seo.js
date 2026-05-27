import { blogPost, contact, faqItems, products, services, site, suburbPages } from '../data/siteContent'

export function createWhatsAppLink(message) {
  return `https://wa.me/61450421636?text=${encodeURIComponent(message)}`
}

export function setHeadTag(selector, createTag, attributes) {
  let element = document.head.querySelector(selector)

  if (!element) {
    element = document.createElement(createTag)
    document.head.appendChild(element)
  }

  Object.entries(attributes).forEach(([key, value]) => {
    element.setAttribute(key, value)
  })
}

export function getSchemas(pathname, currentProduct) {
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
