import type { Metadata } from 'next'
import Link from 'next/link'
import './styles.css'

export const metadata: Metadata = {
  title: 'Campus Activities | Landon Cuny',
  description: 'SDSU campus involvement including Alpha Kappa Psi, Excel/SQL tutoring, Student Disability Services, and more.',
}

export default function Campus() {
  return (
    <>
      {/* Navigation */}
      <nav>
        <Link href="/" className="nav-logo">Landon</Link>
        <div className="nav-links">
          <Link href="/content-creation">Content</Link>
          <Link href="/whit-education">WHIT</Link>
          <Link href="/brand-partnerships">Brands</Link>
          <Link href="/campus" className="active">Campus</Link>
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
      <section className="campus-hero">
        <div className="campus-hero-content">
          <div className="campus-hero-text">
            <div className="hero-top-row">
              <Link href="/#experience" className="hero-back-link">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
                Back to Work
              </Link>
              <span className="campus-label">San Diego State University</span>
            </div>

            <h1 className="campus-hero-title">
              Campus
              <span>Activities</span>
            </h1>

            <p className="campus-hero-subtitle">
              Active involvement through leadership roles, tutoring, and campus organizations. Building skills that translate beyond the classroom.
            </p>

            <div className="campus-hero-meta">
              <div className="campus-meta-item">
                <span className="campus-meta-label">University</span>
                <span className="campus-meta-value">San Diego State</span>
              </div>
              <div className="campus-meta-item">
                <span className="campus-meta-label">Major</span>
                <span className="campus-meta-value">Marketing</span>
              </div>
              <div className="campus-meta-item">
                <span className="campus-meta-label">Timeline</span>
                <span className="campus-meta-value">2024 – 2027</span>
              </div>
            </div>
          </div>

          <div className="campus-hero-image">
            <img src="/images/campus-hero.jpg" alt="SDSU Campus" />
          </div>
        </div>
      </section>

      {/* Primary Roles */}
      <section className="roles-section">
        <div className="roles-header">
          <h2>Campus <span>Roles</span></h2>
          <p>Making an impact through service and education on campus.</p>
        </div>

        <div className="roles-grid">
          <a href="https://sds.sdsu.edu/" target="_blank" rel="noopener noreferrer" className="role-card" style={{textDecoration: 'none', color: 'inherit'}}>
            <div className="role-card-image">
              <img src="/images/campus-1.jpg" alt="Student Disability Services" />
            </div>
            <div className="role-card-content">
              <span className="role-card-badge">Aug 2025 – Present</span>
              <h3 className="role-card-title">Student Disability Services</h3>
              <p className="role-card-org">Assistant · San Diego State University</p>
              <p className="role-card-desc">Supporting students with disabilities to enhance their campus experience and ensure equal access to education.</p>
              <div className="role-card-achievements">
                <span className="achievement-item">Provided transportation support for 100+ students</span>
                <span className="achievement-item">Collaborated with SDSU staff on learning experiences</span>
                <span className="achievement-item">Ensured reliable service across campus</span>
              </div>
            </div>
          </a>

          <div className="role-card">
            <div className="role-card-image">
              <img src="/images/excel-tutor.jpg" alt="Excel & SQL Tutoring" />
            </div>
            <div className="role-card-content">
              <span className="role-card-badge">2024 – Present</span>
              <h3 className="role-card-title">Excel & SQL Tutor</h3>
              <p className="role-card-org">Microsoft Excel & SQL Tutor · SDSU</p>
              <p className="role-card-desc">Helping students master data analysis tools for marketing, finance, and operations coursework.</p>
              <div className="role-card-achievements">
                <span className="achievement-item">Assisted 25+ students in learning tools efficiently</span>
                <span className="achievement-item">Guided data analysis across disciplines</span>
                <span className="achievement-item">Simplified complex data concepts</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Alpha Kappa Psi */}
      <section className="org-section">
        <div className="org-visual">
          <img src="/images/akpsi.jpg" alt="Alpha Kappa Psi" />
        </div>
        <div className="org-content">
          <span className="org-badge">Professional Business Fraternity</span>
          <h2 className="org-title">Alpha Kappa Psi</h2>
          <p className="org-role">Active Member · 2024 – Present</p>
          <p className="org-desc">
            Contributing to the professional development of fellow students through leadership, networking, and hands-on business experience.
          </p>
          <div className="org-achievements">
            <span className="achievement-item">Led 45+ members on projects and presentations</span>
            <span className="achievement-item">Completed 10+ mock interviews with members and alumni</span>
          </div>
        </div>
      </section>

      {/* The Look Magazine */}
      <section className="org-section reverse">
        <div className="org-visual">
          <img src="/images/look-magazine.jpg" alt="The Look Fashion Magazine" />
        </div>
        <div className="org-content">
          <span className="org-badge">SDSU Publication</span>
          <h2 className="org-title">The Look Fashion Magazine</h2>
          <p className="org-role">Styling Coordinator · 2025 – Present</p>
          <p className="org-desc">
            Contributing to editorial content and fashion features for SDSU&apos;s premier fashion publication. Bringing my content creation experience to the print medium.
          </p>
          <div className="org-achievements">
            <span className="achievement-item">Coordinating editorial shoots and fashion features</span>
            <span className="achievement-item">Collaborating with photographers and creative teams</span>
          </div>
        </div>
      </section>

      {/* Coursework */}
      <section className="coursework-section">
        <div className="coursework-header">
          <h2>Relevant Coursework</h2>
        </div>

        <div className="coursework-grid">
          <div className="course-card">
            <span className="course-code">BA 370</span>
            <span className="course-name">Marketing</span>
          </div>
          <div className="course-card">
            <span className="course-code">BA 360</span>
            <span className="course-name">Operations & Supply Chain</span>
          </div>
          <div className="course-card">
            <span className="course-code">MIS 301</span>
            <span className="course-name">Statistical Analysis</span>
          </div>
          <div className="course-card">
            <span className="course-code">BA 350</span>
            <span className="course-name">Management & Org Behavior</span>
          </div>
          <div className="course-card">
            <span className="course-code">ACCTG 202</span>
            <span className="course-name">Managerial Accounting</span>
          </div>
          <div className="course-card">
            <span className="course-code">ACCTG 201</span>
            <span className="course-name">Financial Accounting</span>
          </div>
          <div className="course-card">
            <span className="course-code">MATH 120</span>
            <span className="course-name">Calculus for Business</span>
          </div>
          <div className="course-card">
            <span className="course-code">MIS 180</span>
            <span className="course-name">Information Systems</span>
          </div>
        </div>
      </section>

      {/* Work Experience */}
      <section className="work-section">
        <div className="work-visual">
          <img src="/images/campus-5.jpg" alt="In-N-Out Burger" />
        </div>
        <div className="work-content">
          <span className="work-badge">May 2025 – Jan 2026</span>
          <h2 className="work-title">In-N-Out Burger</h2>
          <p className="work-role">Restaurant Associate</p>
          <p className="work-desc">
            Fast-paced customer service role developing skills in teamwork, communication, and operational excellence.
          </p>
          <div className="work-achievements">
            <span className="work-achievement">Received 3 promotions since May</span>
            <span className="work-achievement">Delivered exceptional service in high-volume setting</span>
            <span className="work-achievement">Prepared food to company standards</span>
            <span className="work-achievement">Managed customer orders and register transactions</span>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="contact">
        <div className="contact-content">
          <p className="contact-label">Connect</p>
          <h2 className="contact-title">Let&apos;s talk</h2>
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
