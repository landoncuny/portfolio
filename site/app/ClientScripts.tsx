'use client'

import { useEffect } from 'react'

export function ClientScripts() {
  useEffect(() => {
    // Initialize scroll animations
    const initScrollAnimations = () => {
      const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
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
        .process-step
      `)

      animatedElements.forEach(el => {
        observer.observe(el)
      })

      return () => observer.disconnect()
    }

    // Smooth scroll for anchor links
    const initSmoothScroll = () => {
      const handleClick = (e: Event) => {
        const target = e.target as HTMLAnchorElement
        if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
          e.preventDefault()
          const targetId = target.getAttribute('href')
          if (targetId && targetId !== '#') {
            const element = document.querySelector(targetId)
            if (element) {
              element.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
              })
            }
          }
        }
      }
      document.addEventListener('click', handleClick)
      return () => document.removeEventListener('click', handleClick)
    }

    // Parallax effect on hero image
    const initParallax = () => {
      const heroImage = document.querySelector('.hero-image img') as HTMLElement
      if (heroImage) {
        const handleScroll = () => {
          const scrolled = window.pageYOffset
          if (scrolled < window.innerHeight) {
            heroImage.style.transform = `scale(1) translateY(${scrolled * 0.15}px)`
          }
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
      }
      return () => {}
    }

    // Mobile navigation toggle
    const initMobileNav = () => {
      const navToggle = document.querySelector('.nav-toggle')
      const navLinks = document.querySelector('.nav-links')

      if (navToggle && navLinks) {
        const handleToggle = () => {
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

        navToggle.addEventListener('click', handleToggle)
        navLinks.querySelectorAll('a').forEach(link => {
          link.addEventListener('click', handleLinkClick)
        })
        document.addEventListener('click', handleOutsideClick)

        return () => {
          navToggle.removeEventListener('click', handleToggle)
          navLinks.querySelectorAll('a').forEach(link => {
            link.removeEventListener('click', handleLinkClick)
          })
          document.removeEventListener('click', handleOutsideClick)
        }
      }
      return () => {}
    }

    // Add staggered animation delays
    const addStaggeredDelays = (selector: string, baseDelay = 0, increment = 0.1) => {
      document.querySelectorAll(selector).forEach((el, index) => {
        (el as HTMLElement).style.transitionDelay = `${baseDelay + (index * increment)}s`
      })
    }

    const cleanupScroll = initScrollAnimations()
    const cleanupSmooth = initSmoothScroll()
    const cleanupParallax = initParallax()
    const cleanupNav = initMobileNav()

    addStaggeredDelays('.feature-card', 0, 0.1)
    addStaggeredDelays('.stat-card', 0, 0.1)
    addStaggeredDelays('.gallery-item', 0, 0.1)
    addStaggeredDelays('.partner-card', 0, 0.05)
    addStaggeredDelays('.process-step', 0, 0.15)

    return () => {
      cleanupScroll?.()
      cleanupSmooth?.()
      cleanupParallax?.()
      cleanupNav?.()
    }
  }, [])

  return null
}
