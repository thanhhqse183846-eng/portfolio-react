import { useEffect, useRef, useState } from 'react';
import {
  Braces,
  Check,
  Copy,
  Download,
  Github,
  GitBranch,
  Layers3,
  Linkedin,
  Mail,
  Menu,
  X,
} from 'lucide-react';
import ProjectVisual from './components/ProjectVisual.jsx';
import { profile, projects, skills } from './data/portfolio.js';

const links = [
  { href: '#about', text: 'About' },
  { href: '#work', text: 'Projects' },
  { href: '#skills', text: 'Skills' },
  { href: '#contact', text: 'Contact' },
];

function ExternalLink({ href, children, className = '' }) {
  if (!href) return null;
  return (
    <a
      className={className}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
      <span className="sr-only"> (opens in a new tab)</span>
    </a>
  );
}

function useScrollReveal() {
  useEffect(() => {
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (!('IntersectionObserver' in window)) return;
    const elements = [...document.querySelectorAll('[data-reveal]')];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove('reveal-pending');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08 },
    );
    const revealAll = () => {
      if (preference.matches) {
        elements.forEach((element) =>
          element.classList.remove('reveal-pending'),
        );
        observer.disconnect();
      }
    };
    if (!preference.matches) {
      elements.forEach((element) => {
        if (element.getBoundingClientRect().top > window.innerHeight) {
          element.classList.add('reveal-pending');
          observer.observe(element);
        }
      });
    }
    preference.addEventListener('change', revealAll);
    return () => {
      observer.disconnect();
      preference.removeEventListener('change', revealAll);
      elements.forEach((element) => element.classList.remove('reveal-pending'));
    };
  }, []);
}

function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('');
  const headerRef = useRef(null);
  const toggleRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    const onKeyDown = (event) => {
      if (event.key === 'Escape' && open) {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    const onPointerDown = (event) => {
      if (!headerRef.current?.contains(event.target)) setOpen(false);
    };
    const desktop = window.matchMedia('(min-width: 761px)');
    const onResize = () => {
      if (desktop.matches) setOpen(false);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('keydown', onKeyDown);
    document.addEventListener('pointerdown', onPointerDown);
    desktop.addEventListener('change', onResize);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('keydown', onKeyDown);
      document.removeEventListener('pointerdown', onPointerDown);
      desktop.removeEventListener('change', onResize);
    };
  }, [open]);

  useEffect(() => {
    if (!('IntersectionObserver' in window)) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`);
        });
      },
      { rootMargin: '-20% 0px -55% 0px', threshold: 0 },
    );
    links.forEach(({ href }) => {
      const section = document.querySelector(href);
      if (section) observer.observe(section);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <header
      ref={headerRef}
      className={`site-header${scrolled ? ' is-scrolled' : ''}`}
    >
      <div className="container header-inner">
        <a
          href="#top"
          className="wordmark"
          onClick={() => {
            setOpen(false);
            setActive('');
          }}
          aria-label={`${profile.name}, back to top`}
        >
          <img
            className="wordmark-symbol"
            src="/monogram.svg"
            alt=""
            width="40"
            height="40"
          />
          <span>
            {profile.name}
            <span className="accent-dot">.</span>
          </span>
        </a>
        <button
          ref={toggleRef}
          type="button"
          className="menu-toggle"
          onClick={() => setOpen((value) => !value)}
          aria-label={open ? 'Close navigation' : 'Open navigation'}
          aria-expanded={open}
          aria-controls="main-navigation"
        >
          {open ? (
            <X size={23} aria-hidden="true" />
          ) : (
            <Menu size={23} aria-hidden="true" />
          )}
        </button>
        <nav
          id="main-navigation"
          className={`nav-links${open ? ' nav-open' : ''}`}
          aria-label="Main navigation"
        >
          {links.map((link) => (
            <a
              key={link.href}
              className={link.href === '#contact' ? 'nav-contact' : ''}
              href={link.href}
              aria-current={active === link.href ? 'location' : undefined}
              onClick={() => {
                setOpen(false);
                setActive(link.href);
              }}
            >
              {link.text}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}

function HeroArtwork() {
  const project = projects[0];
  const screenshot = project.screenshots[0];

  return (
    <figure className="hero-preview">
      <div className="screenshot-frame">
        <div className="browser-chrome" aria-hidden="true">
          <div className="browser-dots">
            <i />
            <i />
            <i />
          </div>
          <span>{project.title} / {screenshot.label}</span>
          <span className="browser-plus">+</span>
        </div>
        <img
          src={screenshot.src}
          alt={screenshot.alt}
          width={screenshot.width}
          height={screenshot.height}
          decoding="async"
        />
      </div>
      <figcaption>ChayBook, my team project (Sep–Nov 2026)</figcaption>
    </figure>
  );
}

function Hero() {
  return (
    <section className="hero container" aria-labelledby="hero-title">
      <div className="hero-topline">
        <span className="availability">
          <span className="status-dot" aria-hidden="true" />
          {profile.availability}
        </span>
        <span className="hero-location">
          BASED IN {profile.location.toUpperCase()}
        </span>
      </div>
      <div className="hero-main">
        <div className="hero-copy">
          <p className="eyebrow hero-entrance">HELLO, I’M THANH · REACTJS</p>
          <h1 id="hero-title" className="hero-entrance">
            {profile.headline[0]}
            <br />
            {profile.headline[1]}
          </h1>
          <p className="hero-subheading hero-entrance">
            I build ReactJS interfaces.
          </p>
          <p className="hero-description hero-entrance">
            {profile.introduction}
          </p>
          <div className="hero-actions hero-entrance">
            <a href="#work" className="button button-dark">
              View My Work
            </a>
            <a href="#contact" className="button button-outline">
              Contact Me
            </a>
          </div>
        </div>
        <HeroArtwork />
      </div>
      <div className="hero-bottom">
        <span>FRONTEND DEVELOPER INTERN</span>
        <a href="#about">
          <span className="scroll-mark" aria-hidden="true" />ABOUT ME
        </a>
      </div>
    </section>
  );
}

function About() {
  return (
    <section
      id="about"
      className="about-section section-pad"
      aria-labelledby="about-title"
    >
      <div className="container">
        <div className="about-grid">
          <div data-reveal>
            <h2 id="about-title">About</h2>
            <p className="body-copy">{profile.about}</p>
            <p className="body-copy">{profile.direction}</p>
          </div>
          <aside
            className="education-panel"
            aria-label="Education and current focus"
            data-reveal
          >
            <div className="education-heading">
              <span className="education-mark" aria-hidden="true">
                fpt<span>university</span>
              </span>
            </div>
            <h3>{profile.university}</h3>
            <dl className="about-facts">
              <div>
                <dt>STUDYING</dt>
                <dd>{profile.degree}</dd>
              </div>
              <div>
                <dt>RIGHT NOW</dt>
                <dd>{profile.semester}</dd>
              </div>
              <div>
                <dt>MY FOCUS</dt>
                <dd>Frontend / ReactJS</dd>
              </div>
            </dl>
            <p className="education-note">
              Available for a Frontend Developer OJT.
            </p>
          </aside>
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project }) {
  return (
    <article className="project-card" aria-labelledby={`project-${project.id}`}>
      <ProjectVisual project={project} />
      <div className="project-layout">
        <div className="project-information" data-reveal>
          <p className="eyebrow project-category">
            {project.type} · {project.year}
          </p>
          <h3 id={`project-${project.id}`}>
            {project.title}
            <span className="accent-dot">.</span>
          </h3>
          <p className="project-subtitle">{project.subtitle}</p>
          <p className="body-copy">{project.description}</p>
          <ul className="skill-pills" aria-label="Project technologies">
            {project.stack.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          {(project.demo || project.source) && (
            <div className="project-links">
              <ExternalLink
                href={project.demo}
                className="button button-outline"
              >
                Live demo
              </ExternalLink>
              <ExternalLink
                href={project.source}
                className="button button-outline"
              >
                <Github size={18} aria-hidden="true" />
                GitHub repo
              </ExternalLink>
            </div>
          )}
        </div>
        <div className="project-contributions" data-reveal>
          <div className="contribution-heading">
            <h4>MY CONTRIBUTIONS</h4>
            <span>{project.role}</span>
          </div>
          <ul className="contribution-list">
            {project.contributions.map((item) => (
              <li className="contribution" key={item.title}>
                <p>
                  <strong>{item.title}.</strong> {item.description}
                </p>
                {item.technicalDetail && (
                  <p className="contribution-technical">
                    {item.technicalDetail}
                  </p>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  );
}

function Work() {
  return (
    <section
      id="work"
      className="work-section section-pad"
      aria-labelledby="work-title"
    >
      <div className="container">
        <div className="section-heading" data-reveal>
          <h2 id="work-title">Projects</h2>
        </div>
        <div className="project-list">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

const skillIcons = { frontend: Braces, integration: Layers3, tools: GitBranch };

function Skills() {
  return (
    <section
      id="skills"
      className="skills-section section-pad"
      aria-labelledby="skills-title"
    >
      <div className="container">
        <div className="skills-grid">
          <div className="skills-intro" data-reveal>
            <h2 id="skills-title">Skills</h2>
            <p className="body-copy">
              I used these tools in ChayBook.
            </p>
          </div>
          <div className="skills-rows">
            {skills.map((group) => {
              const Icon = skillIcons[group.icon];
              return (
                <div className="skills-row" key={group.label} data-reveal>
                  <div className="skills-row-heading">
                    <Icon size={23} strokeWidth={1.5} aria-hidden="true" />
                    <h3>{group.label}</h3>
                  </div>
                  <ul className="skills-list" aria-label={group.label}>
                    {group.items.map((item) => (
                      <li
                        key={item}
                        className={
                          group.highlight?.includes(item)
                            ? 'skill-core'
                            : undefined
                        }
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                  <p>{group.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [copyState, setCopyState] = useState('');
  const resetRef = useRef(null);
  useEffect(() => () => window.clearTimeout(resetRef.current), []);
  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopyState('copied');
    } catch {
      setCopyState('failed');
    }
    window.clearTimeout(resetRef.current);
    resetRef.current = window.setTimeout(() => setCopyState(''), 4000);
  }
  return (
    <section
      id="contact"
      className="contact-section"
      aria-labelledby="contact-title"
    >
      <div className="container">
        <div className="contact-grid">
          <div data-reveal>
            <h2 id="contact-title">Contact</h2>
            <p className="contact-description">
              I’d be happy to talk about a Frontend Developer OJT with your team.
            </p>
          </div>
          <div className="contact-details" data-reveal>
            <span className="availability">
              <span className="status-dot" aria-hidden="true" />
              {profile.availability}
            </span>
            <a className="contact-hello" href={`mailto:${profile.email}`}>
              Say hello
              <span className="contact-hello-dot" aria-hidden="true">
                .
              </span>
            </a>
            <a className="contact-email" href={`mailto:${profile.email}`}>
              {profile.email}
            </a>
            <button type="button" className="copy-email" onClick={copyEmail}>
              {copyState === 'copied' ? (
                <Check size={16} aria-hidden="true" />
              ) : (
                <Copy size={16} aria-hidden="true" />
              )}
              <span>
                {copyState === 'copied' ? 'Email copied' : 'Copy email address'}
              </span>
            </button>
            <span className="copy-status" role="status">
              {copyState === 'copied'
                ? 'Email address copied to clipboard.'
                : copyState === 'failed'
                  ? 'Copy unavailable. You can use the email link above.'
                  : ''}
            </span>
            <div className="contact-socials">
              <ExternalLink href={profile.github} className="social-link">
                <Github size={19} aria-hidden="true" />
                GitHub
              </ExternalLink>
              <ExternalLink href={profile.linkedin} className="social-link">
                <Linkedin size={19} aria-hidden="true" />
                LinkedIn
              </ExternalLink>
              <a className="social-link" href={`mailto:${profile.email}`}>
                <Mail size={19} aria-hidden="true" />
                Email
              </a>
              {profile.resume && (
                <a className="social-link" href={profile.resume} download>
                  <Download size={19} aria-hidden="true" />
                  Download CV
                </a>
              )}
            </div>
          </div>
        </div>
        <footer className="footer">
          <p>
            © {new Date().getFullYear()} {profile.name}.
          </p>
          <a href="#top">Back to top</a>
        </footer>
      </div>
    </section>
  );
}

export default function App() {
  useScrollReveal();
  return (
    <div id="top">
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <Header />
      <main id="main-content" tabIndex={-1}>
        <Hero />
        <About />
        <Work />
        <Skills />
        <Contact />
      </main>
    </div>
  );
}
