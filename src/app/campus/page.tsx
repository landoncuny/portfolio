"use client";

import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function CampusPage() {
  useEffect(() => {
    // Mobile nav toggle
    const navToggle = document.querySelector(".nav-toggle");
    const navLinks = document.querySelector(".nav-links");

    if (navToggle && navLinks) {
      navToggle.addEventListener("click", () => {
        navToggle.classList.toggle("active");
        navLinks.classList.toggle("active");
      });
    }

    // Scroll animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    }, observerOptions);

    document.querySelectorAll(".fade-in").forEach((el) => {
      observer.observe(el);
    });

    return () => {
      observer.disconnect();
      if (navToggle) {
        navToggle.removeEventListener("click", () => {});
      }
    };
  }, []);

  return (
    <>
      <style jsx>{`
        /* ========================================
           CAMPUS - COLLEGIATE EDITORIAL
           Academic meets modern design
           ======================================== */

        .campus-hero {
          min-height: 100vh;
          background: linear-gradient(135deg, #7C2D12 0%, #A6192E 50%, #7C2D12 100%);
          position: relative;
          display: flex;
          align-items: center;
          overflow: hidden;
        }

        .campus-hero::before {
          content: '';
          position: absolute;
          inset: 0;
          background:
            radial-gradient(ellipse at 30% 50%, rgba(255,255,255,0.1) 0%, transparent 50%),
            radial-gradient(ellipse at 70% 80%, rgba(0,0,0,0.2) 0%, transparent 50%);
        }

        .campus-hero::after {
          content: 'SDSU';
          font-family: var(--font-display);
          font-size: 35vw;
          position: absolute;
          bottom: -10%;
          right: -5%;
          color: rgba(255,255,255,0.03);
          font-weight: 400;
          line-height: 1;
          pointer-events: none;
        }

        .campus-hero-content {
          position: relative;
          z-index: 2;
          width: 100%;
          max-width: 1400px;
          margin: 0 auto;
          padding: 8rem 6rem 4rem;
          display: grid;
          grid-template-columns: 1.2fr 1fr;
          gap: 6rem;
          align-items: center;
        }

        .campus-hero-text {
          color: white;
        }

        .hero-top-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 2.5rem;
          opacity: 0;
          animation: fadeSlideUp 0.6s ease 0.2s forwards;
        }

        .hero-back-link {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          color: rgba(255,255,255,0.5);
          font-size: 0.85rem;
          font-weight: 500;
          transition: color 0.3s ease;
        }

        .hero-back-link:hover {
          color: white;
        }

        .hero-back-link svg {
          width: 16px;
          height: 16px;
        }

        .campus-label {
          display: inline-block;
          font-size: 0.7rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.12em;
          color: rgba(255,255,255,0.5);
          padding: 0.4rem 0.8rem;
          border: 1px solid rgba(255,255,255,0.15);
          border-radius: 4px;
        }

        .campus-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: rgba(255,255,255,0.1);
          border: 1px solid rgba(255,255,255,0.2);
          padding: 0.5rem 1rem;
          border-radius: 100px;
          font-size: 0.75rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: white;
          margin-bottom: 2rem;
          opacity: 0;
          animation: fadeSlideUp 0.6s ease 0.2s forwards;
        }

        .campus-hero-title {
          font-family: var(--font-display);
          font-size: clamp(4rem, 8vw, 7rem);
          line-height: 0.9;
          margin-bottom: 1.5rem;
          opacity: 0;
          animation: fadeSlideUp 0.8s ease 0.3s forwards;
        }

        .campus-hero-title span {
          display: block;
          font-style: italic;
          color: rgba(255,255,255,0.7);
        }

        .campus-hero-subtitle {
          font-size: 1.25rem;
          color: rgba(255,255,255,0.6);
          line-height: 1.7;
          max-width: 500px;
          opacity: 0;
          animation: fadeSlideUp 0.6s ease 0.4s forwards;
        }

        .campus-hero-meta {
          display: flex;
          gap: 3rem;
          margin-top: 3rem;
          padding-top: 2rem;
          border-top: 1px solid rgba(255,255,255,0.1);
          opacity: 0;
          animation: fadeSlideUp 0.6s ease 0.5s forwards;
        }

        .campus-meta-item {
          display: flex;
          flex-direction: column;
        }

        .campus-meta-label {
          font-size: 0.7rem;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: rgba(255,255,255,0.4);
          margin-bottom: 0.25rem;
        }

        .campus-meta-value {
          font-weight: 600;
          color: white;
          font-size: 1.1rem;
        }

        .campus-hero-image {
          position: relative;
          opacity: 0;
          animation: fadeSlideUp 1s ease 0.5s forwards;
        }

        .campus-hero-image img {
          width: 100%;
          border-radius: 1.5rem;
          box-shadow: 0 40px 80px -20px rgba(0,0,0,0.4);
        }

        .campus-hero-image::before {
          content: '';
          position: absolute;
          inset: -2rem;
          border: 2px solid rgba(255,255,255,0.1);
          border-radius: 2rem;
          z-index: -1;
        }

        /* ========================================
           ROLES - FEATURED CARDS
           ======================================== */

        .roles-section {
          padding: 8rem 6rem;
          background: var(--bg-primary);
        }

        .roles-header {
          text-align: center;
          max-width: 700px;
          margin: 0 auto 5rem;
        }

        .roles-header h2 {
          font-family: var(--font-display);
          font-size: clamp(3rem, 5vw, 4.5rem);
          margin-bottom: 1rem;
        }

        .roles-header h2 span {
          font-style: italic;
          color: #A6192E;
        }

        .roles-header p {
          font-size: 1.1rem;
          color: var(--text-secondary);
        }

        .roles-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 2rem;
          max-width: 1000px;
          margin: 0 auto;
        }

        .role-card {
          background: var(--card-bg);
          border: 1px solid var(--border);
          border-radius: 1.5rem;
          overflow: hidden;
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .role-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 25px 50px -15px rgba(0,0,0,0.15);
          border-color: #A6192E;
        }

        .role-card-image {
          height: 200px;
          overflow: hidden;
        }

        .role-card-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.6s ease;
        }

        .role-card:hover .role-card-image img {
          transform: scale(1.08);
        }

        .role-card-content {
          padding: 2rem;
        }

        .role-card-badge {
          display: inline-block;
          background: rgba(166, 25, 46, 0.1);
          color: #A6192E;
          padding: 0.35rem 0.75rem;
          border-radius: 100px;
          font-size: 0.7rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          margin-bottom: 1rem;
        }

        .role-card-title {
          font-family: var(--font-display);
          font-size: 1.5rem;
          margin-bottom: 0.5rem;
        }

        .role-card-org {
          font-size: 0.9rem;
          color: var(--text-muted);
          margin-bottom: 1rem;
        }

        .role-card-desc {
          font-size: 0.95rem;
          color: var(--text-secondary);
          line-height: 1.7;
          margin-bottom: 1.5rem;
        }

        .role-card-achievements {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .achievement-item {
          display: flex;
          align-items: flex-start;
          gap: 0.75rem;
          font-size: 0.9rem;
          color: var(--text-secondary);
        }

        .achievement-item::before {
          content: '';
          width: 6px;
          height: 6px;
          background: #A6192E;
          border-radius: 50%;
          flex-shrink: 0;
          margin-top: 0.5rem;
        }

        /* ========================================
           ORGANIZATIONS - INTERLEAVED
           ======================================== */

        .org-section {
          display: grid;
          grid-template-columns: 1fr 1fr;
          min-height: 70vh;
        }

        .org-section.reverse {
          direction: rtl;
        }

        .org-section.reverse > * {
          direction: ltr;
        }

        .org-visual {
          position: relative;
          overflow: hidden;
          background: var(--bg-secondary);
        }

        .org-visual img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .org-visual.placeholder {
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, #E7E5E4 0%, #D6D3D1 100%);
        }

        .org-visual.placeholder::before {
          content: 'Photo Coming Soon';
          font-size: 0.9rem;
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: var(--text-muted);
        }

        .org-content {
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 4rem 5rem;
          background: var(--bg-primary);
        }

        .org-badge {
          display: inline-block;
          background: rgba(166, 25, 46, 0.1);
          color: #A6192E;
          padding: 0.35rem 0.75rem;
          border-radius: 100px;
          font-size: 0.7rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          margin-bottom: 1rem;
          width: fit-content;
        }

        .org-title {
          font-family: var(--font-display);
          font-size: clamp(2.5rem, 4vw, 3.5rem);
          line-height: 1.1;
          margin-bottom: 0.75rem;
        }

        .org-role {
          font-weight: 600;
          color: #A6192E;
          margin-bottom: 1.5rem;
        }

        .org-desc {
          font-size: 1.05rem;
          color: var(--text-secondary);
          line-height: 1.8;
          margin-bottom: 2rem;
        }

        .org-achievements {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          padding-top: 1.5rem;
          border-top: 1px solid var(--border);
        }

        /* ========================================
           COURSEWORK - GRID
           ======================================== */

        .coursework-section {
          padding: 6rem;
          background: var(--bg-secondary);
        }

        .coursework-header {
          text-align: center;
          margin-bottom: 4rem;
        }

        .coursework-header h2 {
          font-family: var(--font-display);
          font-size: clamp(2.5rem, 5vw, 4rem);
        }

        .coursework-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1rem;
          max-width: 1000px;
          margin: 0 auto;
        }

        .course-card {
          background: var(--card-bg);
          border: 1px solid var(--border);
          border-radius: 1rem;
          padding: 1.25rem 1.5rem;
          transition: all 0.3s ease;
        }

        .course-card:hover {
          border-color: #A6192E;
          transform: translateY(-3px);
        }

        .course-code {
          font-weight: 700;
          color: #A6192E;
          font-size: 0.8rem;
          margin-bottom: 0.25rem;
        }

        .course-name {
          font-size: 0.9rem;
          color: var(--text-primary);
        }

        /* ========================================
           WORK EXPERIENCE
           ======================================== */

        .work-section {
          display: grid;
          grid-template-columns: 1fr 1fr;
          min-height: 60vh;
          background: var(--bg-dark);
          margin-bottom: 0;
        }

        .work-visual {
          position: relative;
          overflow: hidden;
        }

        .work-visual img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .work-content {
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 4rem 5rem;
          color: white;
        }

        .work-badge {
          display: inline-block;
          background: rgba(255,255,255,0.1);
          color: white;
          padding: 0.35rem 0.75rem;
          border-radius: 100px;
          font-size: 0.7rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          margin-bottom: 1rem;
          width: fit-content;
        }

        .work-title {
          font-family: var(--font-display);
          font-size: clamp(2.5rem, 4vw, 3.5rem);
          line-height: 1.1;
          margin-bottom: 0.75rem;
        }

        .work-role {
          font-weight: 600;
          color: var(--accent-soft);
          margin-bottom: 1.5rem;
        }

        .work-desc {
          font-size: 1.05rem;
          color: rgba(255,255,255,0.6);
          line-height: 1.8;
          margin-bottom: 2rem;
        }

        .work-achievements {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .work-achievement {
          display: flex;
          align-items: flex-start;
          gap: 0.75rem;
          font-size: 0.95rem;
          color: rgba(255,255,255,0.7);
        }

        .work-achievement::before {
          content: '';
          width: 6px;
          height: 6px;
          background: var(--accent);
          border-radius: 50%;
          flex-shrink: 0;
          margin-top: 0.5rem;
        }

        /* ========================================
           GALLERY
           ======================================== */

        .gallery-section {
          padding: 6rem;
          background: var(--bg-primary);
        }

        .gallery-header {
          text-align: center;
          margin-bottom: 4rem;
        }

        .gallery-header h2 {
          font-family: var(--font-display);
          font-size: clamp(2.5rem, 5vw, 4rem);
        }

        .gallery-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          grid-template-rows: repeat(2, 220px);
          gap: 1.5rem;
          max-width: 1200px;
          margin: 0 auto;
        }

        .gallery-item {
          border-radius: 1.5rem;
          overflow: hidden;
          position: relative;
          transition: all 0.4s ease;
        }

        .gallery-item:hover {
          transform: scale(1.02);
        }

        .gallery-item:hover img {
          transform: scale(1.1);
        }

        .gallery-item:nth-child(1) {
          grid-column: span 2;
          grid-row: span 2;
        }

        .gallery-item img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.6s ease;
        }

        /* ========================================
           ANIMATIONS
           ======================================== */

        @keyframes fadeSlideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* ========================================
           RESPONSIVE
           ======================================== */

        @media (max-width: 1024px) {
          .campus-hero-content {
            grid-template-columns: 1fr;
            padding: 8rem 2rem 4rem;
            gap: 3rem;
          }

          .campus-hero-image {
            order: -1;
            max-width: 400px;
            margin: 0 auto;
          }

          .roles-section,
          .coursework-section,
          .gallery-section {
            padding: 4rem 2rem;
          }

          .roles-grid {
            grid-template-columns: 1fr;
          }

          .org-section,
          .work-section {
            grid-template-columns: 1fr;
          }

          .org-section.reverse {
            direction: ltr;
          }

          .org-visual,
          .work-visual {
            min-height: 300px;
          }

          .org-content,
          .work-content {
            padding: 3rem 2rem;
          }

          .coursework-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .gallery-grid {
            grid-template-columns: 1fr 1fr;
            grid-template-rows: auto;
          }

          .gallery-item:nth-child(1) {
            grid-column: span 1;
            grid-row: span 1;
          }

          .gallery-item {
            height: 200px;
          }
        }

        @media (max-width: 640px) {
          .campus-hero-meta {
            flex-direction: column;
            gap: 1rem;
          }

          .coursework-grid {
            grid-template-columns: 1fr;
          }

          .gallery-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

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
                <span className="campus-meta-value">2024 - 2027</span>
              </div>
            </div>
          </div>

          <div className="campus-hero-image">
            <Image src="/images/campus-hero.jpg" alt="SDSU Campus" width={600} height={400} />
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
          <a href="https://sds.sdsu.edu/" target="_blank" rel="noopener" className="role-card" style={{ textDecoration: "none", color: "inherit" }}>
            <div className="role-card-image">
              <Image src="/images/campus-1.jpg" alt="Student Disability Services" width={500} height={200} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </div>
            <div className="role-card-content">
              <span className="role-card-badge">Aug 2025 - Present</span>
              <h3 className="role-card-title">Student Disability Services</h3>
              <p className="role-card-org">Assistant - San Diego State University</p>
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
              <Image src="/images/excel-tutor.jpg" alt="Excel & SQL Tutoring" width={500} height={200} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </div>
            <div className="role-card-content">
              <span className="role-card-badge">2024 - Present</span>
              <h3 className="role-card-title">Excel &amp; SQL Tutor</h3>
              <p className="role-card-org">Microsoft Excel &amp; SQL Tutor - SDSU</p>
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
          <Image src="/images/akpsi.jpg" alt="Alpha Kappa Psi" width={800} height={600} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        </div>
        <div className="org-content">
          <span className="org-badge">Professional Business Fraternity</span>
          <h2 className="org-title">Alpha Kappa Psi</h2>
          <p className="org-role">Active Member - 2024 - Present</p>
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
          <Image src="/images/look-magazine.jpg" alt="The Look Fashion Magazine" width={800} height={600} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        </div>
        <div className="org-content">
          <span className="org-badge">SDSU Publication</span>
          <h2 className="org-title">The Look Fashion Magazine</h2>
          <p className="org-role">Styling Coordinator - 2025 - Present</p>
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
            <span className="course-name">Operations &amp; Supply Chain</span>
          </div>
          <div className="course-card">
            <span className="course-code">MIS 301</span>
            <span className="course-name">Statistical Analysis</span>
          </div>
          <div className="course-card">
            <span className="course-code">BA 350</span>
            <span className="course-name">Management &amp; Org Behavior</span>
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
          <Image src="/images/campus-5.jpg" alt="In-N-Out Burger" width={800} height={600} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        </div>
        <div className="work-content">
          <span className="work-badge">May 2025 - Jan 2026</span>
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
          <div className="contact-links" style={{ marginTop: "2rem", paddingTop: 0, borderTop: "none" }}>
            <a href="mailto:lmcuny30@gmail.com" className="contact-link">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
              lmcuny30@gmail.com
            </a>
            <a href="https://linkedin.com/in/landon-cuny" target="_blank" rel="noopener" className="contact-link">
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
  );
}
