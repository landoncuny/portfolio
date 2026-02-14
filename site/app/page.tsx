import Link from 'next/link'

export default function Home() {
  return (
    <>
      {/* Navigation */}
      <nav>
        <Link href="/" className="nav-logo">Landon</Link>
        <div className="nav-links">
          <Link href="/content-creation">Content</Link>
          <Link href="/whit-education">WHIT</Link>
          <Link href="/brand-partnerships">Brands</Link>
          <Link href="/campus">Campus</Link>
          <a href="#about">About</a>
          <a href="#contact" className="nav-cta">Let&apos;s Talk</a>
        </div>
        <div className="nav-toggle">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>

      {/* HERO */}
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-name">
            <span>Landon</span>
            <span>Cuny</span>
          </h1>
          <p className="hero-title">Content Creator · Social Media Director · Student</p>

          <div className="hero-stats">
            <div className="stat">
              <span className="stat-value">25K+</span>
              <span className="stat-label">Followers</span>
            </div>
            <div className="stat">
              <span className="stat-value">130M+</span>
              <span className="stat-label">Views</span>
            </div>
            <div className="stat">
              <span className="stat-value">8+</span>
              <span className="stat-label">Brand Partners</span>
            </div>
          </div>

          <div className="hero-cta">
            <a href="#experience" className="btn-primary">
              View My Work
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </a>
            <a href="#contact" className="btn-secondary">Get in Touch</a>
          </div>
        </div>

        <div className="hero-image">
          <div className="hero-decoration"></div>
          <img src="/images/hero-photo.jpg" alt="Landon Cuny - Marketing Student and Content Creator" />
        </div>
      </section>

      {/* ABOUT */}
      <section className="about" id="about">
        <p className="section-label">About Me</p>
        <p className="about-text">
          Hi! I&apos;m Landon Cuny, a Marketing student at <span>San Diego State University</span> with real-world experience in content creation and social media growth. I built an engaged audience of <span>25,000+ followers</span> and <span>130+ million views</span> across all platforms. I am currently the Director of Social Media Growth for <span>WHIT Education Platform</span>.
        </p>
      </section>

      {/* EXPERIENCE - Bento Grid */}
      <section className="experience" id="experience">
        <div className="experience-header">
          <h2 className="experience-title">Selected Work</h2>
          <p className="experience-subtitle">From content creation to brand strategy, here&apos;s what I&apos;ve been building.</p>
        </div>

        <div className="bento-grid">
          {/* Content Creation - Featured (largest) */}
          <Link href="/content-creation" className="bento-card">
            <div className="card-image">
              <img src="/images/content-preview.jpg" alt="Content Creation" />
            </div>
            <div className="card-overlay"></div>
            <div className="card-content">
              <span className="card-label">@LandonDresses</span>
              <h3 className="card-title">Content Creation</h3>
              <p className="card-desc">Fashion & lifestyle content with 130M+ total views and 25K+ followers.</p>
            </div>
            <div className="card-arrow">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17L17 7M17 7H7M17 7v10"/></svg>
            </div>
          </Link>

          {/* WHIT - Second largest */}
          <Link href="/whit-education" className="bento-card">
            <div className="card-image">
              <img src="/images/whit-preview.jpg" alt="WHIT Education" />
            </div>
            <div className="card-overlay"></div>
            <div className="card-content">
              <span className="card-label">Edtech Startup</span>
              <h3 className="card-title">WHIT Education</h3>
              <p className="card-desc">Director of Social Media Growth — Building an education platform&apos;s social presence from the ground up.</p>
            </div>
            <div className="card-arrow">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17L17 7M17 7H7M17 7v10"/></svg>
            </div>
          </Link>

          {/* Brand Partnerships */}
          <Link href="/brand-partnerships" className="bento-card">
            <div className="card-image">
              <img src="/images/brand-preview.jpg" alt="Brand Partnerships" />
            </div>
            <div className="card-overlay"></div>
            <div className="card-content">
              <span className="card-label">Collaborations</span>
              <h3 className="card-title">Brand Partnerships</h3>
              <p className="card-desc">Working with leading brands.</p>
            </div>
            <div className="card-arrow">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17L17 7M17 7H7M17 7v10"/></svg>
            </div>
          </Link>

          {/* Campus */}
          <Link href="/campus" className="bento-card">
            <div className="card-image">
              <img src="/images/campus-preview.jpg" alt="Campus Involvement" />
            </div>
            <div className="card-overlay"></div>
            <div className="card-content">
              <span className="card-label">Career Extracurriculars</span>
              <h3 className="card-title">Campus</h3>
            </div>
            <div className="card-arrow">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17L17 7M17 7H7M17 7v10"/></svg>
            </div>
          </Link>
        </div>
      </section>

      {/* CERTIFICATIONS */}
      <section className="certifications">
        <p className="section-label" style={{textAlign: 'center'}}>Credentials</p>
        <h2 className="experience-title" style={{textAlign: 'center'}}>Certifications</h2>

        <div className="cert-grid">
          <a href="https://www.credly.com/badges/45067bbe-f884-4067-b798-0fae798d1161/public_url" target="_blank" rel="noopener noreferrer" className="cert-card">
            <div className="cert-icon">
              <svg viewBox="0 0 24 24" fill="#217346">
                <path d="M23 1.5H8c-.3 0-.5.2-.5.5v2H1c-.3 0-.5.2-.5.5v15c0 .3.2.5.5.5h6.5v2c0 .3.2.5.5.5h15c.3 0 .5-.2.5-.5v-19c0-.3-.2-.5-.5-.5zM7 8.5v5H3v-5h4zm.5 12V17h1v2.5h-1zm14.5 0H9.5V4.5H22v16z"/>
              </svg>
            </div>
            <div className="cert-info">
              <h3>Microsoft Excel Associate</h3>
              <p>Microsoft Office Specialist</p>
            </div>
          </a>

          <a href="https://www.credly.com/badges/19380a88-2d31-4aa6-afb1-ef27b621d360/public_url" target="_blank" rel="noopener noreferrer" className="cert-card">
            <div className="cert-icon" style={{background: '#a6192e'}}>
              <span style={{color: 'white', fontWeight: 'bold', fontSize: '10px'}}>SDSU</span>
            </div>
            <div className="cert-info">
              <h3>Academic Applications of AI</h3>
              <p>San Diego State University</p>
            </div>
          </a>
        </div>
      </section>

      {/* CONTACT */}
      <section className="contact" id="contact">
        <div className="contact-content">
          <p className="contact-label">Contact</p>
          <h2 className="contact-title">Get in touch with me</h2>

          <div className="contact-links" style={{marginTop: '2rem', paddingTop: 0, borderTop: 'none'}}>
            <a href="mailto:lmcuny30@gmail.com" className="contact-link">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
              lmcuny30@gmail.com
            </a>
            <a href="tel:6613888307" className="contact-link">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              661-388-8307
            </a>
            <a href="https://linkedin.com/in/landon-cuny" target="_blank" rel="noopener noreferrer" className="contact-link">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <p>&copy; 2026 Landon Cuny. All rights reserved.</p>
      </footer>
    </>
  )
}
