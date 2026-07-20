'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { portfolio } from '@/data/portfolio';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
] as const;

/**
 * Navbar — fixed navigation bar.
 * Transparent at top, frosted glass on scroll, mobile hamburger menu.
 */
export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  /* Track scroll position for background blur effect */
  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /* Track active section via IntersectionObserver */
  useEffect(() => {
    const sectionIds = navLinks.map((l) => l.href.slice(1));
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { rootMargin: '-40% 0px -55% 0px' },
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  /* Close mobile menu on resize */
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setMobileOpen(false);
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  const handleMobileNavClick = () => setMobileOpen(false);

  return (
    <header
      className={[
        'fixed top-0 right-0 left-0 z-50 transition-all duration-300',
        isScrolled
          ? 'border-b border-border bg-bg-primary/80 backdrop-blur-md'
          : 'bg-transparent',
      ].join(' ')}
    >
      <nav
        className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8"
        aria-label="Main navigation"
      >
        {/* Logo / Name */}
        <Link
          href="#home"
          className="text-base font-semibold text-text-primary transition-colors hover:text-accent-blue"
          aria-label="Go to top"
        >
          {portfolio.name}
        </Link>

        {/* Desktop Links */}
        <ul className="hidden items-center gap-1 md:flex" role="list">
          {navLinks.map(({ label, href }) => {
            const sectionId = href.slice(1);
            const isActive = activeSection === sectionId;
            return (
              <li key={href}>
                <Link
                  href={href}
                  className={[
                    'rounded-md px-3 py-2 text-sm font-medium transition-colors duration-200',
                    isActive
                      ? 'text-accent-blue'
                      : 'text-text-secondary hover:text-text-primary',
                  ].join(' ')}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Mobile Hamburger */}
        <button
          className="rounded-md p-2 text-text-secondary transition-colors hover:bg-bg-card hover:text-text-primary md:hidden"
          onClick={() => setMobileOpen((prev) => !prev)}
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div
          id="mobile-menu"
          className="border-t border-border bg-bg-primary/95 backdrop-blur-md md:hidden"
        >
          <ul className="flex flex-col px-4 py-3" role="list">
            {navLinks.map(({ label, href }) => {
              const sectionId = href.slice(1);
              const isActive = activeSection === sectionId;
              return (
                <li key={href}>
                  <Link
                    href={href}
                    onClick={handleMobileNavClick}
                    className={[
                      'block rounded-md px-3 py-3 text-sm font-medium transition-colors duration-200',
                      isActive
                        ? 'text-accent-blue'
                        : 'text-text-secondary hover:text-text-primary',
                    ].join(' ')}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    {label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </header>
  );
}
