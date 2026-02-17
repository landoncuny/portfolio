import type { Metadata } from 'next'
import Link from 'next/link'
import './styles.css'

export const metadata: Metadata = {
  title: 'WHIT Education Platform | Landon Cuny',
  description: 'Director of Social Media Growth at WHIT Education Platform - leading content strategy and social media growth for an education technology company.',
}

export default function WhitEducation() {
  return (
    <>
      {/* Navigation */}
      <nav>
        <Link href="/" className="nav-logo">Landon</Link>
        <div className="nav-links">
          <Link href="/content-creation">Content</Link>
          <Link href="/whit-education" className="active">WHIT</Link>
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

      {/* Hero Section */}
      <section className="whit-hero">
        <div className="whit-hero-content">
          <div className="whit-hero-text">
            <div className="hero-top-row">
              <Link href="/#experience" className="hero-back-link">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
                Back to Work
              </Link>
              <span className="whit-label">Edtech Startup</span>
            </div>

            <h1 className="whit-hero-title">
              WHIT
              <span>Education</span>
            </h1>

            <p className="whit-hero-role">Director of Social Media Growth</p>

            <p className="whit-hero-desc">
              Leading social media strategy for an education technology platform focused on empowering students to find their voice. Building brand presence from inception—before product launch.
            </p>

            <div className="whit-hero-cta">
              <a href="https://whitai.app" target="_blank" rel="noopener noreferrer" className="whit-btn">
                Visit whitai.app
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17L17 7M17 7H7M17 7v10"/></svg>
              </a>
            </div>
          </div>

          <div className="whit-hero-visual">
            <div className="whit-mockup">
              <img src="/images/whit-hero.jpg" alt="WHIT Education Platform" />
              <span className="whit-mockup-badge">Dec 2025 – Present</span>
            </div>
          </div>
        </div>
      </section>

      {/* Role Details */}
      <section className="role-section">
        <div className="role-image">
          <img src="/images/whit-1.jpg" alt="WHIT Education Team" />
          <div className="role-image-overlay"></div>
        </div>
        <div className="role-content">
          <p className="role-label">The Mission</p>
          <h2 className="role-title">Every Student Deserves to Be Heard</h2>
          <p className="role-desc">
            At WHIT, we believe every student should have the tools to express themselves effectively. I&apos;m building the brand&apos;s social presence from the ground up—crafting strategies that resonate with K-12 and higher education educators before the product even launches.
          </p>
          <div className="role-meta">
            <div className="role-meta-item">
              <span className="role-meta-label">Company</span>
              <span className="role-meta-value">WHIT Education</span>
            </div>
            <div className="role-meta-item">
              <span className="role-meta-label">Industry</span>
              <span className="role-meta-value">EdTech / AI</span>
            </div>
            <div className="role-meta-item">
              <span className="role-meta-label">Stage</span>
              <span className="role-meta-value">Pre-Launch Startup</span>
            </div>
          </div>
        </div>
      </section>

      {/* Learnings Section */}
      <section className="learnings-section">
        <div className="learnings-header">
          <h2>What I&apos;ve<br /><span>Learned</span></h2>
          <p>Working at an early-stage startup means wearing multiple hats. Here&apos;s what I&apos;ve gained from building WHIT from the ground up.</p>
        </div>

        <div className="learnings-grid">
          <div className="learning-card">
            <div className="learning-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20M2 12h20"/><circle cx="12" cy="12" r="4"/></svg>
            </div>
            <h3 className="learning-title">Startup Mindset</h3>
            <p className="learning-desc">Cross-functional collaboration and rapid adaptation in early-stage environments. Learning to wear multiple hats, move fast, and iterate quickly based on feedback and data.</p>
          </div>

          <div className="learning-card">
            <div className="learning-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a10 10 0 1 0 10 10H12V2Z"/><path d="M12 2a10 10 0 0 1 10 10"/></svg>
            </div>
            <h3 className="learning-title">AI Development</h3>
            <p className="learning-desc">Hands-on platform building using AI tools while maintaining user-friendliness. Understanding how AI enhances education.</p>
          </div>

          <div className="learning-card">
            <div className="learning-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/></svg>
            </div>
            <h3 className="learning-title">User Research</h3>
            <p className="learning-desc">In-class testing with teachers and students for real product validation.</p>
          </div>

          <div className="learning-card">
            <div className="learning-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v18h18"/><path d="m19 9-5 5-4-4-3 3"/></svg>
            </div>
            <h3 className="learning-title">Social Strategy</h3>
            <p className="learning-desc">Building cohesive brand identity from ground zero.</p>
          </div>
        </div>
      </section>

      {/* Experience 1: AI Development */}
      <section className="experience-section">
        <div className="experience-content">
          <span className="experience-number">01</span>
          <p className="experience-label">Development</p>
          <h3 className="experience-title">AI-Powered Development</h3>
          <p className="experience-subtitle">Platform Building & Feature Development</p>
          <p className="experience-desc">
            Working directly with the founding team on platform development using Claude AI and ChatGPT Codex to accelerate development and refine core features. Learning how to leverage AI tools for rapid prototyping and iteration.
          </p>
        </div>
        <div className="experience-visual">
          <img src="/images/whit-2.jpg" alt="AI Development Work" />
        </div>
      </section>

      {/* Experience 2: User Testing */}
      <section className="experience-section reverse">
        <div className="experience-content">
          <span className="experience-number">02</span>
          <p className="experience-label">Validation</p>
          <h3 className="experience-title">In-Class Testing & Pitching</h3>
          <p className="experience-subtitle">User Research & Market Implementation</p>
          <p className="experience-desc">
            Product validation through real classroom testing with teachers and students. Developing school district pitches for market implementation and learning how to communicate value to educational institutions.
          </p>
        </div>
        <div className="experience-visual">
          <img src="/images/whit-3.jpg" alt="User Testing Sessions" />
        </div>
      </section>

      {/* Tools Section */}
      <section className="tools-section">
        <div className="tools-header">
          <h2>Tools & Technologies</h2>
          <p>The tech stack powering WHIT&apos;s growth</p>
        </div>

        <div className="tools-cloud">
          <span className="tool-tag featured" data-tooltip="AI assistant for development and content">Claude AI</span>
          <span className="tool-tag featured" data-tooltip="Code generation and debugging">ChatGPT Codex</span>
          <span className="tool-tag" data-tooltip="Crafting effective AI prompts">Prompt Engineering</span>
          <span className="tool-tag" data-tooltip="District pitch decks and presentations">PowerPoint</span>
          <span className="tool-tag" data-tooltip="Social media graphics and branding">Canva</span>
          <span className="tool-tag" data-tooltip="Data tracking and analysis">Excel</span>
          <span className="tool-tag" data-tooltip="Video editing for social content">CapCut</span>
          <span className="tool-tag" data-tooltip="B2B outreach and networking">LinkedIn</span>
          <span className="tool-tag" data-tooltip="Platform feature development">Backend Coding</span>
          <span className="tool-tag" data-tooltip="Real classroom product testing">User Testing</span>
          <span className="tool-tag" data-tooltip="School district sales presentations">District Pitches</span>
          <span className="tool-tag" data-tooltip="Testing with real educators">Product Validation</span>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="page-cta">
        <div className="page-cta-content">
          <h2>Interested in EdTech?</h2>
          <p>Let&apos;s connect and discuss educational technology, AI, and startup opportunities.</p>
          <Link href="/#contact" className="page-cta-btn">
            Let&apos;s Talk
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <p>&copy; 2026 Landon Cuny. All rights reserved.</p>
      </footer>
    </>
  )
}
