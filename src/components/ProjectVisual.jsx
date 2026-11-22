import { Leaf } from 'lucide-react';
import ProjectScreenshots from './ProjectScreenshots.jsx';

function BrowserChrome({ label }) {
  return (
    <div className="browser-chrome">
      <div className="browser-dots" aria-hidden="true">
        <i />
        <i />
        <i />
      </div>
      <span>{label}</span>
      <span className="browser-plus" aria-hidden="true">
        +
      </span>
    </div>
  );
}

export default function ProjectVisual({ project }) {
  if (project.screenshots?.length) {
    return <ProjectScreenshots project={project} />;
  }

  if (project.screenshot) {
    return (
      <figure className="project-figure authentic-preview" data-reveal>
        <div className="screenshot-frame">
          <BrowserChrome label={project.title} />
          <img
            src={project.screenshot}
            alt={project.screenshotAlt}
            loading="lazy"
            decoding="async"
          />
        </div>
        <figcaption>{project.title} · Application screenshot</figcaption>
      </figure>
    );
  }

  // An intentionally labeled layout study, never presented as an actual app screenshot.
  return (
    <figure className="project-figure" data-reveal>
      <div className="project-visual">
        <div className="preview-topline">
          <span>
            <Leaf size={16} aria-hidden="true" />
            {project.subtitle}
          </span>
          <span className="preview-placeholder">PREVIEW PLACEHOLDER</span>
        </div>
        <div className="project-browser-scene" aria-hidden="true">
          <div className="project-watermark">chaybook</div>
          <div className="chaybook-browser">
            <BrowserChrome label="ChayBook · Home Page" />
            <div className="chaybook-page">
              <div className="mockup-header">
                <span className="mockup-brand">
                  <Leaf size={22} />
                  chaybook
                </span>
                <div className="mockup-nav">
                  <span>Home</span>
                  <span>Meal Plan</span>
                  <span className="mockup-menu">
                    <i />
                    <i />
                  </span>
                </div>
              </div>
              <div className="mockup-body">
                <div className="mockup-copy">
                  <span className="mockup-eyebrow">A VEGETARIAN LIFESTYLE</span>
                  <p>
                    A little greener.
                    <br />
                    <em>Every day.</em>
                  </p>
                  <span className="mockup-copy-line" />
                  <span className="mockup-copy-line short" />
                  <span className="mockup-button">ChayBook</span>
                </div>
                <div className="botanical-art">
                  <div className="botanical-circle" />
                  <Leaf
                    className="botanical-leaf botanical-leaf-one"
                    strokeWidth={0.8}
                  />
                  <Leaf
                    className="botanical-leaf botanical-leaf-two"
                    strokeWidth={0.8}
                  />
                  <span>
                    live a little
                    <br />
                    <em>greener.</em>
                  </span>
                </div>
              </div>
              <div className="mockup-bottom">
                <span>A more thoughtful everyday.</span>
                <span>HOME / MEAL PLAN</span>
              </div>
            </div>
          </div>
          <div className="mealplan-browser">
            <BrowserChrome label="Meal Plan · Layout study" />
            <div className="mealplan-content">
              <span className="mealplan-eyebrow">
                A LITTLE PLANNING, EVERY DAY
              </span>
              <p>
                Your meal plan<span>✳</span>
              </p>
              <div className="mealplan-days">
                <span>M</span>
                <span>T</span>
                <span>W</span>
                <span>T</span>
                <span>F</span>
                <span>S</span>
                <span>S</span>
              </div>
              <div className="mealplan-row">
                <span className="mealplan-thumb">
                  <Leaf size={20} />
                </span>
                <span className="mealplan-lines">
                  <i />
                  <i />
                </span>
                <span className="mealplan-check">✓</span>
              </div>
              <div className="mealplan-row">
                <span className="mealplan-thumb alt">
                  <Leaf size={20} />
                </span>
                <span className="mealplan-lines">
                  <i />
                  <i />
                </span>
                <span className="mealplan-check">✓</span>
              </div>
              <span className="mealplan-bottom-label">
                ILLUSTRATIVE CONTENT
              </span>
            </div>
          </div>
        </div>
        <div className="preview-bottomline">
          <span>REACTJS FRONTEND</span>
          <span>HOME PAGE · MEAL PLAN · ADMIN</span>
        </div>
      </div>
      <figcaption>
        <span className="caption-dot" aria-hidden="true" />
        Illustrative layout study, not an application screenshot. Authentic
        project screenshots to follow.
      </figcaption>
    </figure>
  );
}
