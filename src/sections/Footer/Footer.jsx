import './Footer.css'

function Footer({ identity, contact }) {
  const normalizeUrl = (url) => {
    if (!url) return '#'
    if (url.startsWith('http')) return url
    return `https://${url}`
  }

  return (
    <footer className="site-footer">
      <div className="container-shell footer-grid">
        <div className="footer-block footer-brand">
          <span className="footer-badge">{identity.initials}</span>
          <div>
            <p>{identity.name}</p>
            <small>{identity.degree}</small>
          </div>
        </div>
        
        <div className="footer-centre">
          <p>BUILT WITH REACT + VITE</p>
          <div className="footer-socials">
            <a href={normalizeUrl(contact.github)} target="_blank" rel="noreferrer" title="GitHub">
              GitHub
            </a>
            <a href={normalizeUrl(contact.linkedin)} target="_blank" rel="noreferrer" title="LinkedIn">
              LinkedIn
            </a>
            <a href={normalizeUrl(contact.twitter)} target="_blank" rel="noreferrer" title="Twitter">
              Twitter
            </a>
            <a href={`mailto:${contact.email}`} title="Email">
              Email
            </a>
          </div>
        </div>
        
        <div className="footer-block footer-links">
          <span>© 2025 {identity.name}</span>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
