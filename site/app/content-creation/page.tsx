import type { Metadata } from 'next'
import Link from 'next/link'
import './styles.css'

export const metadata: Metadata = {
  title: 'Content Creation | Landon Cuny',
  description: 'Building audiences on Instagram, TikTok, and YouTube with 25,000+ followers and 130M+ views through engaging content and strategic growth.',
}

export default function ContentCreation() {
  return (
    <>
      {/* Navigation */}
      <nav>
        <Link href="/" className="nav-logo">Landon</Link>
        <div className="nav-links">
          <Link href="/content-creation" className="active">Content</Link>
          <Link href="/whit-education">WHIT</Link>
          <Link href="/brand-partnerships">Brands</Link>
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

      {/* Editorial Hero */}
      <section className="editorial-hero">
        <div className="hero-text-side">
          <Link href="/#experience" className="hero-back-link">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
            Back to Work
          </Link>

          <p className="hero-eyebrow">@LandonDresses</p>
          <h1 className="hero-main-title">
            Content
            <span>Creation</span>
          </h1>

          <div className="hero-stats-row">
            <div className="hero-stat">
              <div className="hero-stat-value">25K+</div>
              <div className="hero-stat-label">Followers</div>
            </div>
            <div className="hero-stat">
              <div className="hero-stat-value">130M+</div>
              <div className="hero-stat-label">Total Views</div>
            </div>
            <div className="hero-stat">
              <div className="hero-stat-value">$6K+</div>
              <div className="hero-stat-label">Revenue</div>
            </div>
          </div>
        </div>

        <div className="hero-media-side">
          <div className="hero-video-stack">
            <div className="hero-video-card">
              <div className="video-thumbnail">
                <img src="/images/video-thumb-1.jpg" alt="Viral content preview" />
                <span className="platform-badge">Instagram</span>
                <span className="play-icon"></span>
              </div>
              <div className="video-card-stats">
                <div className="video-card-views">10.9M views</div>
                <div className="video-card-likes">697K likes</div>
              </div>
            </div>
            <div className="hero-video-card">
              <div className="video-thumbnail">
                <img src="/images/video-thumb-2.jpg" alt="Content creation" />
                <span className="platform-badge">TikTok</span>
                <span className="play-icon"></span>
              </div>
              <div className="video-card-stats">
                <div className="video-card-views">9.5M views</div>
                <div className="video-card-likes">900K likes</div>
              </div>
            </div>
            <div className="hero-video-card">
              <div className="video-thumbnail">
                <img src="/images/video-thumb-3.jpg" alt="Content journey" />
                <span className="platform-badge">Instagram</span>
                <span className="play-icon"></span>
              </div>
              <div className="video-card-stats">
                <div className="video-card-views">12.2M views</div>
                <div className="video-card-likes">520K likes</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interleaved Section 1: The Story */}
      <section className="interleave-section">
        <div className="interleave-text">
          <span className="interleave-number">01</span>
          <div className="interleave-content">
            <p className="interleave-label">The Beginning</p>
            <h2 className="interleave-title">Building LandonDresses from Zero</h2>
            <p className="interleave-desc">
              What started as a passion for fashion evolved into a platform connecting with millions. Through consistent short-form content, I built LandonDresses as both a personal brand and content company—combining creativity, analytics, and authenticity.
            </p>
          </div>
        </div>
        <div className="interleave-media">
          <img src="/images/content-hero.jpg" alt="Content creation journey" />
        </div>
      </section>

      {/* Viral Videos Showcase with Real Embeds */}
      <section className="viral-showcase">
        <div className="viral-header">
          <h2>Highest Performing Videos</h2>
          <p>Real content. Real engagement. Real results.</p>
        </div>

        <div className="viral-grid">
          <div className="viral-card">
            <div className="viral-card-embed">
              <iframe
                src="https://www.instagram.com/p/DLvc9dhhVHR/embed/"
                frameBorder="0"
                scrolling="no"
                allowTransparency={true}
                loading="lazy">
              </iframe>
            </div>
            <div className="viral-card-info">
              <div className="viral-card-stat">
                <strong>10.9M</strong>
                <span>views</span>
              </div>
              <div className="viral-card-likes">697K likes</div>
            </div>
          </div>

          <div className="viral-card">
            <div className="viral-card-embed">
              <iframe
                src="https://www.tiktok.com/embed/v2/7596116701188590861"
                frameBorder="0"
                scrolling="no"
                allowTransparency={true}
                loading="lazy">
              </iframe>
            </div>
            <div className="viral-card-info">
              <div className="viral-card-stat">
                <strong>9.5M</strong>
                <span>views</span>
              </div>
              <div className="viral-card-likes">900K likes</div>
            </div>
          </div>

          <div className="viral-card">
            <div className="viral-card-embed">
              <iframe
                src="https://www.instagram.com/p/DK-LaE5yC24/embed/"
                frameBorder="0"
                scrolling="no"
                allowTransparency={true}
                loading="lazy">
              </iframe>
            </div>
            <div className="viral-card-info">
              <div className="viral-card-stat">
                <strong>12.2M</strong>
                <span>views</span>
              </div>
              <div className="viral-card-likes">520K likes</div>
            </div>
          </div>
        </div>
      </section>

      {/* Interleaved Section 2: Strategy */}
      <section className="interleave-section reverse">
        <div className="interleave-text">
          <span className="interleave-number">02</span>
          <div className="interleave-content">
            <p className="interleave-label">The Method</p>
            <h2 className="interleave-title">Data-Driven Creativity</h2>
            <p className="interleave-desc">
              Every piece of content is informed by analytics—understanding what resonates, when to post, and how to optimize for the algorithm. But data only gets you so far. The real magic happens when analytics meet authentic storytelling.
            </p>
          </div>
        </div>
        <div className="interleave-media">
          <img src="/images/content-viral.jpg" alt="Data-driven content strategy" />
        </div>
      </section>

      {/* Strategy Section */}
      <section className="strategy-section">
        <div className="strategy-header">
          <div className="strategy-header-text">
            <h2>Why My Videos<br /><span>Went Viral</span></h2>
          </div>
          <p className="strategy-header-desc">
            Virality isn&apos;t luck—it&apos;s a formula. Here&apos;s the playbook I&apos;ve refined through millions of views and countless iterations.
          </p>
        </div>

        <div className="strategy-grid">
          <div className="strategy-card">
            <div className="strategy-card-number">01</div>
            <h3>Strategic Hook</h3>
            <p>Capture attention in the first second with strong visuals, clear framing, and an immediate emotional cue like humor or surprise. The hook determines everything.</p>
          </div>

          <div className="strategy-card">
            <div className="strategy-card-number">02</div>
            <h3>Trend Timing</h3>
            <p>Track emerging sounds, formats, and cultural moments early, then adapt them to feel original and audience-aligned. First-mover advantage is real.</p>
          </div>

          <div className="strategy-card">
            <div className="strategy-card-number">03</div>
            <h3>Authentic Storytelling</h3>
            <p>Prioritize personality and relatability over polish. Give viewers a genuine reason to stop, watch, and connect. Perfection is overrated.</p>
          </div>

          <div className="strategy-card">
            <div className="strategy-card-number">04</div>
            <h3>Engagement Strategy</h3>
            <p>Design each post to encourage interaction through prompts or share-worthy moments. Comments, shares, and saves are built into every video.</p>
          </div>
        </div>
      </section>

      {/* Interleaved Section 3: Growth */}
      <section className="interleave-section">
        <div className="interleave-text">
          <span className="interleave-number">03</span>
          <div className="interleave-content">
            <p className="interleave-label">The Results</p>
            <h2 className="interleave-title">From Hobby to Business</h2>
            <p className="interleave-desc">
              What started in my dorm room is now a revenue-generating content operation. Brand partnerships, affiliate marketing, and sponsored content have turned passion into profession—all while staying authentic to my audience.
            </p>
          </div>
        </div>
        <div className="interleave-media">
          <img src="/images/content-journey.jpg" alt="Content business growth" />
        </div>
      </section>

      {/* Social Links Section */}
      <section className="social-section">
        <div className="social-cta">
          <h2>Follow the Journey</h2>
          <p>See the content in real-time. New posts dropping weekly.</p>
        </div>

        <div className="social-buttons">
          <a href="https://instagram.com/landondresses" target="_blank" rel="noopener noreferrer" className="social-btn instagram">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
            Instagram
          </a>
          <a href="https://tiktok.com/@landondresses" target="_blank" rel="noopener noreferrer" className="social-btn tiktok">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/></svg>
            TikTok
          </a>
          <a href="https://youtube.com/@landondresses" target="_blank" rel="noopener noreferrer" className="social-btn youtube">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
            YouTube
          </a>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="contact">
        <div className="contact-content">
          <p className="contact-label">Work Together</p>
          <h2 className="contact-title">Let&apos;s create something</h2>
          <div className="contact-links" style={{marginTop: '2rem', paddingTop: 0, borderTop: 'none'}}>
            <a href="mailto:lmcuny30@gmail.com" className="contact-link">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
              lmcuny30@gmail.com
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
