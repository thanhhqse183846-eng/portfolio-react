import { useId, useRef, useState } from 'react';
import { Image } from 'lucide-react';

export default function ProjectScreenshots({ project }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const galleryId = useId();
  const tabRefs = useRef([]);
  const screenshots = project.screenshots;
  const active = screenshots[activeIndex];
  const panelId = `${galleryId}-panel`;

  function onTabKeyDown(event, index) {
    let nextIndex;
    switch (event.key) {
      case 'ArrowRight':
        nextIndex = (index + 1) % screenshots.length;
        break;
      case 'ArrowLeft':
        nextIndex = (index - 1 + screenshots.length) % screenshots.length;
        break;
      case 'Home':
        nextIndex = 0;
        break;
      case 'End':
        nextIndex = screenshots.length - 1;
        break;
      default:
        return;
    }
    event.preventDefault();
    setActiveIndex(nextIndex);
    tabRefs.current[nextIndex]?.focus();
  }

  return (
    <figure className="project-figure authentic-preview" data-reveal>
      <div className="project-screenshots">
        <div className="screenshot-toolbar">
          <p className="eyebrow">CHAYBOOK / IN THE BROWSER</p>
          <div
            className="screenshot-tabs"
            role="tablist"
            aria-label={`${project.title} screenshots`}
          >
            {screenshots.map((screenshot, index) => (
              <button
                key={screenshot.src}
                ref={(element) => {
                  tabRefs.current[index] = element;
                }}
                id={`${galleryId}-tab-${index}`}
                type="button"
                role="tab"
                aria-selected={activeIndex === index}
                aria-controls={panelId}
                tabIndex={activeIndex === index ? 0 : -1}
                onClick={() => setActiveIndex(index)}
                onKeyDown={(event) => onTabKeyDown(event, index)}
              >
                {screenshot.label}
              </button>
            ))}
          </div>
        </div>
        <div
          className="screenshot-frame"
          id={panelId}
          role="tabpanel"
          aria-labelledby={`${galleryId}-tab-${activeIndex}`}
          tabIndex={0}
        >
          <div className="browser-chrome" aria-hidden="true">
            <div className="browser-dots">
              <i />
              <i />
              <i />
            </div>
            <span>
              {project.title} / {active.label}
            </span>
            <span className="browser-plus">+</span>
          </div>
          <img
            src={active.src}
            alt={active.alt}
            width={active.width}
            height={active.height}
            loading="lazy"
            decoding="async"
          />
        </div>
      </div>
      <figcaption className="screenshot-caption">
        <span>
          Actual ChayBook application screenshots. Individual contributions are
          described below.
        </span>
        <a
          className="button button-outline"
          href={active.src}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Open ${active.label} screenshot at full size (opens in a new tab)`}
        >
          <Image size={17} aria-hidden="true" />
          Open full screenshot
        </a>
      </figcaption>
    </figure>
  );
}
