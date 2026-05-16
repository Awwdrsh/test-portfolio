import GlobeCanvas from '../../components/GlobeCanvas/GlobeCanvas'
import './Hero.css'

function Hero({ identity, contact, projectCount, milestoneCount }) {
  const words = identity.heroHeadline.split(' ')
  const cvLink = contact.cv || '#'

  return (
    <section id="home" className="hero-section" aria-label="Welcome">
      <div className="hero-slash" aria-hidden="true"></div>
      <div className="container-shell hero-grid">
        <div className="hero-text">
          <div className="hero-text-inner">
            <p className="hero-label">&gt; CYBERSECURITY STUDENT_</p>
            <h1 className="hero-title" aria-label={identity.heroHeadline}>
              {words.map((word, index) => (
                <span
                  key={`${word}-${index}`}
                  className={index === 0 ? `hero-word word-${index + 1} is-accent` : `hero-word word-${index + 1}`}
                >
                  {word}
                </span>
              ))}
            </h1>
            <p className="hero-subtitle">{identity.heroSub}</p>

            <div className="hero-actions" role="group" aria-label="Primary actions">
              <a href="#projects" className="hero-button hero-button-primary">
                VIEW MY WORK ↓
              </a>
              <a
                href={cvLink}
                className="hero-button hero-button-secondary"
                target="_blank"
                rel="noreferrer"
                title="Download my CV (PDF)"
              >
                DOWNLOAD CV
              </a>
            </div>

            <div className="hero-stats" role="region" aria-label="Statistics">
              <span>{projectCount} <span className="sr-only">projects</span></span>
              <span>{milestoneCount} <span className="sr-only">milestones</span></span>
              <span>{identity.degree}</span>
            </div>
          </div>
        </div>

        <div className="hero-globe" aria-hidden="true">
          <div className="hero-glow" aria-hidden="true"></div>
          <div className="hero-globe-inner">
            <GlobeCanvas size="large" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
