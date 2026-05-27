import { brandAssets, contact, navItems } from '../data/siteContent'

export function TopContactBar() {
  return (
    <div className="top-contact-bar">
      <div className="top-contact-inner">
        <p>Call now for a free quote</p>
        <a href={contact.phoneHref}>{contact.phone}</a>
      </div>
    </div>
  )
}

export function Header({ currentPath, onNavigate }) {
  return (
    <header className="site-header">
      <button className="brand" type="button" onClick={() => onNavigate('/')}>
        <img
          className="brand-logo"
          src={brandAssets.headerLogo}
          alt="Artificial Grass Installers Perth logo"
        />
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

export function Footer() {
  return (
    <footer className="site-footer">
      <div>
        <h3>Artificial Grass Installers Perth</h3>
        <p>
          Artificial grass supply and installation for Perth homes, pet areas, feature lawns, and
          commercial spaces.
        </p>
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
