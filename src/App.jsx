import { useEffect } from 'react'
import './App.css'
import { Header, Footer, TopContactBar } from './components/SiteLayout'
import { contact, pageMeta, products, site } from './data/siteContent'
import { usePathname } from './hooks/usePathname'
import { Page } from './pages/SitePages'
import { getSchemas, setHeadTag } from './utils/seo'

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

export default App
