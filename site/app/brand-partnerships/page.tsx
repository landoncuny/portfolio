import type { Metadata } from 'next'
import Link from 'next/link'
import './styles.css'

export const metadata: Metadata = {
  title: 'Brand Collaborations | Landon Cuny',
  description: 'Collaborating with brands like Woody Clothing, Hollister, Pacsun and more to create authentic content that drives engagement and results.',
}

export default function BrandPartnerships() {
  return (
    <>
      {/* Navigation */}
      <nav>
        <Link href="/" className="nav-logo">Landon</Link>
        <div className="nav-links">
          <Link href="/content-creation">Content</Link>
          <Link href="/whit-education">WHIT</Link>
          <Link href="/brand-partnerships" className="active">Brands</Link>
          <Link href="/campus">Campus</Link>
          <Link href="/#about">About</Link>
          <Link href="/#contact" className="nav-cta">Let&apos;s Talk</Link>
        </div>
        <div className="nav-toggle">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="brand-hero">
        <div className="brand-hero-text">
          <Link href="/#experience" className="hero-back-link">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
            Back to Work
          </Link>

          <p className="brand-hero-eyebrow">Collaborations</p>
          <h1 className="brand-hero-title">
            Brand
            <span>Partnerships</span>
          </h1>
          <p className="brand-hero-tagline">
            Creating authentic content that drives real results. Trusted by leading fashion, lifestyle, and tech brands.
          </p>

          <div className="brand-hero-stats">
            <div className="brand-stat">
              <div className="brand-stat-value">8+</div>
              <div className="brand-stat-label">Brand Partners</div>
            </div>
            <div className="brand-stat">
              <div className="brand-stat-value">25K+</div>
              <div className="brand-stat-label">Followers</div>
            </div>
            <div className="brand-stat">
              <div className="brand-stat-value">130M+</div>
              <div className="brand-stat-label">Total Views</div>
            </div>
          </div>
        </div>

        <div className="brand-hero-visual">
          <img src="/images/brand-hero.jpg" alt="Brand Partnerships" />
        </div>
      </section>

      {/* Partners Marquee */}
      <section className="partners-marquee">
        <div className="marquee-track">
          <div className="partner-logo-item"><img src="/images/partner-1.jpg" alt="Kinetic Apps" /></div>
          <div className="partner-logo-item"><img src="/images/partner-2.jpg" alt="Woody Clothing" /></div>
          <div className="partner-logo-item"><img src="/images/partner-3.jpg" alt="Yordy Jewelry" /></div>
          <div className="partner-logo-item"><img src="/images/partner-4.jpg" alt="Hollister" /></div>
          <div className="partner-logo-item"><img src="/images/partner-5.jpg" alt="Pacsun" /></div>
          <div className="partner-logo-item has-label" data-label="Silverlake Flea"><img src="/images/partner-6.jpg" alt="Silverlake Flea" /></div>
          <div className="partner-logo-item"><img src="/images/partner-7.jpg" alt="Bravest Studios" /></div>
          <div className="partner-logo-item"><img src="/images/partner-8.jpg" alt="Prism Clothing" /></div>
          {/* Duplicate for seamless loop */}
          <div className="partner-logo-item"><img src="/images/partner-1.jpg" alt="Kinetic Apps" /></div>
          <div className="partner-logo-item"><img src="/images/partner-2.jpg" alt="Woody Clothing" /></div>
          <div className="partner-logo-item"><img src="/images/partner-3.jpg" alt="Yordy Jewelry" /></div>
          <div className="partner-logo-item"><img src="/images/partner-4.jpg" alt="Hollister" /></div>
          <div className="partner-logo-item"><img src="/images/partner-5.jpg" alt="Pacsun" /></div>
          <div className="partner-logo-item has-label" data-label="Silverlake Flea"><img src="/images/partner-6.jpg" alt="Silverlake Flea" /></div>
          <div className="partner-logo-item"><img src="/images/partner-7.jpg" alt="Bravest Studios" /></div>
          <div className="partner-logo-item"><img src="/images/partner-8.jpg" alt="Prism Clothing" /></div>
        </div>
      </section>

      {/* Featured Partners Grid */}
      <section className="partners-section">
        <div className="partners-header">
          <h2>Trusted<br /><span>Partners</span></h2>
          <p>From fashion labels to tech startups, I&apos;ve collaborated with brands that value authentic storytelling and genuine audience connection.</p>
        </div>

        <div className="partners-grid">
          <a href="https://kineticapps.ai" target="_blank" rel="noopener noreferrer" className="partner-card">
            <div className="partner-card-logo">
              <img src="/images/partner-1.jpg" alt="Kinetic Apps Inc." />
            </div>
            <span className="partner-card-name">Kinetic Apps Inc.</span>
            <span className="partner-card-type">Technology</span>
          </a>

          <a href="https://woodyclothing.com" target="_blank" rel="noopener noreferrer" className="partner-card">
            <div className="partner-card-logo">
              <img src="/images/partner-2.jpg" alt="Woody Clothing" />
            </div>
            <span className="partner-card-name">Woody Clothing</span>
            <span className="partner-card-type">Fashion</span>
          </a>

          <a href="https://yordy.co" target="_blank" rel="noopener noreferrer" className="partner-card">
            <div className="partner-card-logo">
              <img src="/images/partner-3.jpg" alt="Yordy Jewelry" />
            </div>
            <span className="partner-card-name">Yordy Jewelry</span>
            <span className="partner-card-type">Accessories</span>
          </a>

          <a href="https://hollisterco.com/shop/us" target="_blank" rel="noopener noreferrer" className="partner-card">
            <div className="partner-card-logo">
              <img src="/images/partner-4.jpg" alt="Hollister" />
            </div>
            <span className="partner-card-name">Hollister</span>
            <span className="partner-card-type">Fashion Retail</span>
          </a>

          <a href="https://pacsun.com" target="_blank" rel="noopener noreferrer" className="partner-card">
            <div className="partner-card-logo">
              <img src="/images/partner-5.jpg" alt="Pacsun" />
            </div>
            <span className="partner-card-name">Pacsun</span>
            <span className="partner-card-type">Fashion Retail</span>
          </a>

          <a href="https://silverlakeflea.com" target="_blank" rel="noopener noreferrer" className="partner-card">
            <div className="partner-card-logo">
              <img src="/images/partner-6.jpg" alt="Silverlake Flea Market" />
            </div>
            <span className="partner-card-name">Silverlake Flea</span>
            <span className="partner-card-type">Vintage Market</span>
          </a>

          <a href="https://braveststudios.com" target="_blank" rel="noopener noreferrer" className="partner-card">
            <div className="partner-card-logo">
              <img src="/images/partner-7.jpg" alt="Bravest Studios" />
            </div>
            <span className="partner-card-name">Bravest Studios</span>
            <span className="partner-card-type">Streetwear</span>
          </a>

          <a href="https://prismclothing.bigcartel.com" target="_blank" rel="noopener noreferrer" className="partner-card">
            <div className="partner-card-logo">
              <img src="/images/partner-8.jpg" alt="Prism Clothing" />
            </div>
            <span className="partner-card-name">Prism Clothing</span>
            <span className="partner-card-type">Independent Label</span>
          </a>
        </div>
      </section>

      {/* Skills Section */}
      <section className="skills-section">
        <div className="skills-visual">
          <img src="/images/brand-1.jpg" alt="Brand collaboration work" />
        </div>
        <div className="skills-content">
          <p className="skills-label">Expertise</p>
          <h2 className="skills-title">Skills Developed</h2>

          <div className="skills-list">
            <div className="skill-item">
              <div className="skill-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
              </div>
              <div className="skill-text">
                <h4>Brand Collaboration</h4>
                <p>Building lasting partnerships through professional communication</p>
              </div>
            </div>

            <div className="skill-item">
              <div className="skill-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/></svg>
              </div>
              <div className="skill-text">
                <h4>UGC Creation</h4>
                <p>User-generated content that feels authentic and resonates</p>
              </div>
            </div>

            <div className="skill-item">
              <div className="skill-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
              </div>
              <div className="skill-text">
                <h4>Contract Negotiation</h4>
                <p>Developing fair rate structures and clear terms</p>
              </div>
            </div>

            <div className="skill-item">
              <div className="skill-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>
              </div>
              <div className="skill-text">
                <h4>Authentic Integration</h4>
                <p>Seamlessly integrating brand messaging naturally</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="process-section">
        <div className="process-header">
          <h2>Partnership Process</h2>
          <p>A proven workflow that delivers results for every collaboration.</p>
        </div>

        <div className="process-track">
          <div className="process-step">
            <div className="process-step-number">1</div>
            <h3>Discovery & Alignment</h3>
            <p>Understanding brand goals and ensuring authentic alignment with my audience and content style.</p>
          </div>

          <div className="process-step">
            <div className="process-step-number">2</div>
            <h3>Creative Development</h3>
            <p>Developing naturally integrated content that maintains authenticity while showcasing the brand.</p>
          </div>

          <div className="process-step">
            <div className="process-step-number">3</div>
            <h3>Production & Delivery</h3>
            <p>High-quality content from script to final edit with clear brand communication throughout.</p>
          </div>

          <div className="process-step">
            <div className="process-step-number">4</div>
            <h3>Performance Reporting</h3>
            <p>Detailed reports with engagement metrics and actionable insights for future campaigns.</p>
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section className="tools-section">
        <div className="tools-content">
          <h2>Tools I Use</h2>
          <div className="tools-cloud">
            <span className="tool-tag" data-tooltip="Invoice management and payment processing">BILL AP & AR</span>
            <span className="tool-tag" data-tooltip="Payment processing for brand deals">Stripe</span>
            <span className="tool-tag" data-tooltip="Professional video editing">Adobe Premiere Pro</span>
            <span className="tool-tag" data-tooltip="Short-form video editing">CapCut</span>
            <span className="tool-tag" data-tooltip="Graphics and social media design">Canva</span>
            <span className="tool-tag" data-tooltip="Performance tracking and audience analytics">Instagram Insights</span>
            <span className="tool-tag" data-tooltip="Content performance and engagement metrics">TikTok Analytics</span>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="page-contact">
        <div className="page-contact-content">
          <h2>Partnership Inquiries</h2>
          <p>Interested in collaborating? Let&apos;s discuss how we can create authentic content together.</p>
          <div className="page-contact-links">
            <a href="mailto:lmcuny30@gmail.com" className="page-contact-link">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
              lmcuny30@gmail.com
            </a>
            <a href="tel:6613888307" className="page-contact-link">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              661-388-8307
            </a>
            <a href="https://linkedin.com/in/landon-cuny" target="_blank" rel="noopener noreferrer" className="page-contact-link">
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
