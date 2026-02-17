'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

export function ClientScripts() {
  const pathname = usePathname()

  useEffect(() => {
    // Scroll to top on navigation
    window.scrollTo(0, 0)

    // Small delay to ensure DOM is ready after navigation
    const timeoutId = setTimeout(() => {
      initializeAnimations()
    }, 50)

    return () => clearTimeout(timeoutId)
  }, [pathname]) // Re-run when pathname changes

  const initializeAnimations = () => {
    // Reset any existing visible classes for fresh animations on new pages
    document.querySelectorAll('.visible').forEach(el => {
      // Only reset if element is above the viewport (already scrolled past)
      const rect = el.getBoundingClientRect()
      if (rect.top < 0) {
        // Keep visible if already scrolled past
      } else if (rect.top > window.innerHeight) {
        // Reset if below viewport
        el.classList.remove('visible')
      }
    })

    // Initialize scroll animations
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
        }
      })
    }, observerOptions)

    const animatedElements = document.querySelectorAll(`
      .section-label,
      .about-text,
      .experience-title,
      .experience-subtitle,
      .section-title,
      .bento-card,
      .cert-card,
      .contact-label,
      .contact-title,
      .contact-desc,
      .contact-buttons,
      .contact-links,
      .feature-card,
      .stat-card,
      .gallery-item,
      .partner-card,
      .experience-item,
      .process-step,
      .hero-content,
      .hero-image,
      .hero-text-side,
      .hero-media-side,
      .interleave-section,
      .interleave-text,
      .interleave-media,
      .viral-card,
      .strategy-card,
      .social-section,
      .role-card,
      .learning-card,
      .experience-section,
      .org-section,
      .course-card,
      .work-section,
      .whit-hero-content,
      .brand-hero,
      .campus-hero-content,
      .skills-section,
      .tools-section,
      .page-cta
    `)

    animatedElements.forEach(el => {
      // Check if element is in viewport on load
      const rect = el.getBoundingClientRect()
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        // Element is in viewport, make it visible immediately
        el.classList.add('visible')
      } else {
        // Element is outside viewport, observe it
        observer.observe(el)
      }
    })

    // Initialize mobile navigation
    initMobileNav()

    // Initialize smooth scroll
    initSmoothScroll()

    // Initialize parallax
    initParallax()

    // Add staggered delays
    addStaggeredDelays('.bento-card', 0, 0.1)
    addStaggeredDelays('.feature-card', 0, 0.1)
    addStaggeredDelays('.stat-card', 0, 0.1)
    addStaggeredDelays('.gallery-item', 0, 0.1)
    addStaggeredDelays('.partner-card', 0, 0.05)
    addStaggeredDelays('.process-step', 0, 0.15)
    addStaggeredDelays('.viral-card', 0, 0.1)
    addStaggeredDelays('.strategy-card', 0, 0.1)
    addStaggeredDelays('.learning-card', 0, 0.1)
    addStaggeredDelays('.role-card', 0, 0.15)
    addStaggeredDelays('.course-card', 0, 0.05)

    return () => observer.disconnect()
  }

  const initSmoothScroll = () => {
    const handleClick = (e: Event) => {
      const target = e.target as HTMLAnchorElement
      const href = target.getAttribute('href')

      // Handle both # anchors and /#anchors
      if (target.tagName === 'A' && href) {
        if (href.startsWith('#') && href !== '#') {
          e.preventDefault()
          const element = document.querySelector(href)
          if (element) {
            element.scrollIntoView({
              behavior: 'smooth',
              block: 'start'
            })
          }
        }
      }
    }

    // Remove old listener before adding new one
    document.removeEventListener('click', handleClick)
    document.addEventListener('click', handleClick)
  }

  const initParallax = () => {
    const heroImage = document.querySelector('.hero-image img') as HTMLElement
    if (heroImage) {
      const handleScroll = () => {
        const scrolled = window.pageYOffset
        if (scrolled < window.innerHeight) {
          heroImage.style.transform = `scale(1) translateY(${scrolled * 0.15}px)`
        }
      }
      window.addEventListener('scroll', handleScroll, { passive: true })
    }
  }

  const initMobileNav = () => {
    const navToggle = document.querySelector('.nav-toggle')
    const navLinks = document.querySelector('.nav-links')

    if (navToggle && navLinks) {
      // Remove active states on navigation
      navLinks.classList.remove('active')
      navToggle.classList.remove('active')
      document.body.classList.remove('menu-open')

      const handleToggle = (e: Event) => {
        e.stopPropagation()
        navLinks.classList.toggle('active')
        navToggle.classList.toggle('active')
        document.body.classList.toggle('menu-open')
      }

      const handleLinkClick = () => {
        navLinks.classList.remove('active')
        navToggle.classList.remove('active')
        document.body.classList.remove('menu-open')
      }

      const handleOutsideClick = (e: Event) => {
        if (document.body.classList.contains('menu-open') &&
            !navLinks.contains(e.target as Node) &&
            !navToggle.contains(e.target as Node)) {
          navLinks.classList.remove('active')
          navToggle.classList.remove('active')
          document.body.classList.remove('menu-open')
        }
      }

      // Clone and replace to remove old listeners
      const newToggle = navToggle.cloneNode(true)
      navToggle.parentNode?.replaceChild(newToggle, navToggle)

      newToggle.addEventListener('click', handleToggle)
      navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', handleLinkClick)
      })
      document.addEventListener('click', handleOutsideClick)
    }
  }

  const addStaggeredDelays = (selector: string, baseDelay = 0, increment = 0.1) => {
    document.querySelectorAll(selector).forEach((el, index) => {
      (el as HTMLElement).style.transitionDelay = `${baseDelay + (index * increment)}s`
    })
  }

  return null
}
