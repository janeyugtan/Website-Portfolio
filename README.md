<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Jane Yugtan | Account Manager | Project Manager | Executive Assistant</title>
  <style>
    :root {
      --navy: #1a1a2e;
      --blue: #0f4c75;
      --blue-2: #1d6fa5;
      --slate: #334155;
      --muted: #64748b;
      --line: #e6eef7;
      --bg: #f8fbff;
      --white: #ffffff;
      --shadow: 0 12px 30px rgba(15, 76, 117, 0.10);
      --radius: 20px;
      --max: 1180px;
    }

    * { box-sizing: border-box; }
    html { scroll-behavior: smooth; }
    body {
      margin: 0;
      font-family: Arial, Helvetica, sans-serif;
      color: var(--navy);
      background: linear-gradient(180deg, #f8fbff 0%, #ffffff 30%, #f8fbff 100%);
      line-height: 1.6;
    }

    body.modal-open { overflow: hidden; }

    a { color: var(--blue); text-decoration: none; }
    a:hover { text-decoration: underline; }

    .container {
      width: min(var(--max), calc(100% - 32px));
      margin: 0 auto;
    }

    .topbar {
      position: sticky;
      top: 0;
      z-index: 100;
      backdrop-filter: blur(14px);
      background: rgba(255,255,255,0.90);
      border-bottom: 1px solid rgba(230,238,247,0.9);
    }

    .topbar-inner {
      width: min(var(--max), calc(100% - 32px));
      margin: 0 auto;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 16px;
      padding: 14px 0;
    }

    .brand {
      font-weight: 800;
      letter-spacing: 0.2px;
      color: var(--navy);
      white-space: nowrap;
    }

    .nav {
      display: flex;
      gap: 14px;
      flex-wrap: wrap;
      justify-content: flex-end;
      font-size: 14px;
    }

    .hero {
      padding: 48px 0 26px;
    }

    .hero-card {
      background: radial-gradient(circle at top right, rgba(29,111,165,0.15), transparent 28%), var(--white);
      border: 1px solid var(--line);
      border-radius: 28px;
      box-shadow: var(--shadow);
      padding: 34px;
      display: grid;
      grid-template-columns: 220px 1fr;
      gap: 28px;
      align-items: center;
    }

    .hero-photo {
      width: 200px;
      height: 200px;
      border-radius: 50%;
      object-fit: cover;
      border: 5px solid var(--blue);
      display: block;
      margin: 0 auto;
      box-shadow: 0 10px 24px rgba(15, 76, 117, 0.18);
    }

    .eyebrow {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      padding: 8px 14px;
      background: #eef6fc;
      color: var(--blue);
      border-radius: 999px;
      font-size: 13px;
      font-weight: 700;
      margin-bottom: 14px;
    }

    h1 {
      font-size: clamp(34px, 6vw, 52px);
      line-height: 1.05;
      margin: 0 0 10px;
    }

    .subtitle {
      font-size: 20px;
      font-weight: 700;
      color: var(--blue);
      margin-bottom: 14px;
    }

    .intro {
      color: var(--slate);
      max-width: 760px;
      font-size: 17px;
      margin-bottom: 18px;
    }

    .cta-row, .badge-row {
      display: flex;
      flex-wrap: wrap;
      gap: 12px;
      align-items: center;
    }

    .btn {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 8px;
      padding: 13px 18px;
      border-radius: 14px;
      font-weight: 700;
      border: 1px solid transparent;
      transition: transform 0.18s ease, box-shadow 0.18s ease, background 0.18s ease;
      cursor: pointer;
    }

    .btn:hover {
      transform: translateY(-1px);
      box-shadow: 0 8px 18px rgba(15,76,117,0.12);
      text-decoration: none;
    }

    .btn-primary { background: var(--navy); color: #fff; }
    .btn-secondary { background: var(--blue); color: #fff; }
    .btn-light { background: #eef6fc; color: var(--blue); border-color: #d9eaf7; }

    .section {
      padding: 28px 0;
    }

    .section-title {
      font-size: 30px;
      margin: 0 0 8px;
    }

    .section-subtitle {
      color: var(--muted);
      margin: 0 0 20px;
      max-width: 800px;
    }

    .video-card,
    .panel,
    .project-card,
    .testimonial-card,
    .experience-card,
    .linkedin-card,
    .contact-card {
      background: var(--white);
      border: 1px solid var(--line);
      border-radius: var(--radius);
      box-shadow: var(--shadow);
    }

    .video-card {
      overflow: hidden;
      max-width: 780px;
      margin: 0 auto;
    }

    .video-thumb {
      position: relative;
      display: block;
      background: #edf5fb;
    }

    .video-thumb img {
      width: 100%;
      height: 360px;
      object-fit: cover;
      display: block;
    }

    .play-button {
      position: absolute;
      inset: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 72px;
      color: white;
      text-shadow: 0 10px 25px rgba(0,0,0,0.45);
    }

    .video-body { padding: 24px; }

    .results-grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 16px;
    }

    .result-card {
      position: relative;
      overflow: hidden;
      background: linear-gradient(180deg, #ffffff 0%, #f7fbff 100%);
      border: 1px solid var(--line);
      border-radius: 18px;
      padding: 18px;
      box-shadow: var(--shadow);
      min-height: 168px;
      transition: transform 0.22s ease, box-shadow 0.22s ease;
    }

    .result-card::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 5px;
      background: linear-gradient(90deg, var(--blue), var(--blue-2));
    }

    .result-card:hover {
      transform: translateY(-4px);
      box-shadow: 0 18px 36px rgba(15, 76, 117, 0.14);
    }

    .result-card.featured-metric {
      cursor: pointer;
    }

    .result-card.featured-metric.active {
      transform: scale(1.02);
      box-shadow: 0 20px 40px rgba(15, 76, 117, 0.18);
      border-color: #b9d7ec;
    }

    .result-card.featured-metric.active::after {
      content: "";
      position: absolute;
      inset: 14px;
      border: 2px solid rgba(15,76,117,0.16);
      border-radius: 14px;
      pointer-events: none;
      animation: pulseRing 1.3s ease-out infinite;
    }

    @keyframes pulseRing {
      0% { transform: scale(0.96); opacity: 0.8; }
      100% { transform: scale(1.04); opacity: 0; }
    }

    .result-kpi {
      font-size: 34px;
      font-weight: 800;
      color: var(--blue);
      margin-bottom: 10px;
      line-height: 1;
    }

    .result-label {
      font-size: 15px;
      font-weight: 700;
      margin-bottom: 8px;
    }

    .result-copy {
      color: var(--slate);
      font-size: 14px;
    }

    .metric-callout {
      margin-top: 18px;
      background: linear-gradient(135deg, #0f4c75 0%, #1d6fa5 100%);
      color: white;
      border-radius: 22px;
      box-shadow: 0 18px 40px rgba(15, 76, 117, 0.20);
      padding: 24px;
      display: grid;
      grid-template-columns: 120px 1fr;
      gap: 20px;
      align-items: center;
      opacity: 0;
      transform: translateY(12px) scale(0.98);
      max-height: 0;
      overflow: hidden;
      pointer-events: none;
      transition: opacity 0.28s ease, transform 0.28s ease, max-height 0.32s ease, padding 0.32s ease, margin 0.32s ease;
      padding-top: 0;
      padding-bottom: 0;
      margin-bottom: 0;
    }

    .metric-callout.show {
      opacity: 1;
      transform: translateY(0) scale(1);
      max-height: 260px;
      pointer-events: auto;
      padding: 24px;
      margin-bottom: 4px;
    }

    .metric-icon {
      width: 96px;
      height: 96px;
      border-radius: 50%;
      background: rgba(255,255,255,0.14);
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 42px;
      margin: 0 auto;
      box-shadow: inset 0 0 0 1px rgba(255,255,255,0.18);
    }

    .metric-callout h3 {
      margin: 0 0 8px;
      font-size: 28px;
    }

    .metric-callout p {
      margin: 0;
      color: rgba(255,255,255,0.92);
    }

    .metric-close {
      margin-top: 14px;
      display: inline-flex;
      align-items: center;
      gap: 8px;
      padding: 10px 14px;
      border-radius: 12px;
      background: rgba(255,255,255,0.14);
      border: 1px solid rgba(255,255,255,0.18);
      color: white;
      font-weight: 700;
      cursor: pointer;
    }

    .services-grid,
    .projects-grid,
    .testimonials-grid,
    .experience-grid {
      display: grid;
      gap: 16px;
    }

    .services-grid { grid-template-columns: repeat(3, 1fr); }
    .projects-grid { grid-template-columns: repeat(2, 1fr); }
    .testimonials-grid { grid-template-columns: repeat(2, 1fr); }
    .experience-grid { grid-template-columns: 1fr; }

    .panel,
    .project-card,
    .testimonial-card,
    .experience-card,
    .linkedin-card,
    .contact-card {
      padding: 22px;
    }

    .panel h3,
    .project-card h3,
    .testimonial-card h3,
    .experience-card h3,
    .linkedin-card h3,
    .contact-card h3 {
      margin-top: 0;
      margin-bottom: 10px;
      font-size: 22px;
    }

    .panel ul,
    .project-card ul,
    .experience-card ul {
      padding-left: 18px;
      margin-bottom: 0;
      color: var(--slate);
    }

    .tag-row {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
      margin-top: 12px;
    }

    .tag {
      padding: 7px 12px;
      background: #eef6fc;
      border: 1px solid #d7e8f5;
      color: var(--blue);
      border-radius: 999px;
      font-size: 12px;
      font-weight: 700;
    }

    .project-kicker,
    .meta {
      color: var(--blue);
      font-weight: 700;
      font-size: 13px;
      letter-spacing: 0.2px;
      text-transform: uppercase;
      margin-bottom: 10px;
    }

    .project-card.interactive-project {
      position: relative;
      cursor: pointer;
      transition: transform 0.22s ease, box-shadow 0.22s ease, border-color 0.22s ease;
      overflow: hidden;
    }

    .project-card.interactive-project::after {
      content: "Click to expand";
      position: absolute;
      top: 16px;
      right: 16px;
      background: #eef6fc;
      color: var(--blue);
      border: 1px solid #d7e8f5;
      padding: 6px 10px;
      border-radius: 999px;
      font-size: 12px;
      font-weight: 700;
    }

    .project-card.interactive-project:hover {
      transform: translateY(-5px);
      box-shadow: 0 20px 42px rgba(15,76,117,0.16);
      border-color: #bfd9ec;
    }

    .logo-marquee {
      overflow: hidden;
      position: relative;
      border-radius: 22px;
      border: 1px solid var(--line);
      background: var(--white);
      box-shadow: var(--shadow);
      padding: 18px 0;
    }

    .logo-track {
      display: flex;
      width: max-content;
      animation: scrollLogos 32s linear infinite;
      gap: 16px;
      align-items: center;
    }

    .logo-marquee:hover .logo-track {
      animation-play-state: paused;
    }

    .logo-card {
      min-width: 180px;
      height: 120px;
      display: flex;
      align-items: center;
      justify-content: center;
      border: 1px solid var(--line);
      border-radius: 18px;
      background: linear-gradient(180deg, #fff 0%, #f8fbff 100%);
      box-shadow: 0 6px 16px rgba(2,18,30,.05);
      padding: 14px;
      margin-left: 16px;
    }

    .logo-card img {
      max-width: 100%;
      max-height: 82px;
      object-fit: contain;
      display: block;
    }

    @keyframes scrollLogos {
      0% { transform: translateX(0); }
      100% { transform: translateX(-50%); }
    }

    .quote {
      font-size: 16px;
      color: var(--slate);
      margin-bottom: 16px;
    }

    .contact-card p,
    .linkedin-card p,
    .experience-card p,
    .project-card p,
    .panel p {
      color: var(--slate);
    }

    .footer {
      text-align: center;
      color: var(--muted);
      padding: 24px 0 40px;
      font-size: 14px;
    }

    .project-modal {
      position: fixed;
      inset: 0;
      background: rgba(9, 19, 35, 0.72);
      backdrop-filter: blur(10px);
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 24px;
      z-index: 999;
      opacity: 0;
      pointer-events: none;
      transition: opacity 0.28s ease;
    }

    .project-modal.show {
      opacity: 1;
      pointer-events: auto;
    }

    .project-modal-card {
      width: min(980px, 100%);
      max-height: 90vh;
      overflow: auto;
      border-radius: 28px;
      background: linear-gradient(180deg, #0f4c75 0%, #0c3c5d 100%);
      color: white;
      box-shadow: 0 30px 80px rgba(5, 15, 28, 0.35);
      transform: scale(0.92);
      transition: transform 0.28s ease;
      position: relative;
      padding: 34px;
    }

    .project-modal.show .project-modal-card {
      transform: scale(1);
    }

    .project-modal-close {
      position: absolute;
      top: 18px;
      right: 18px;
      width: 44px;
      height: 44px;
      border-radius: 50%;
      border: 1px solid rgba(255,255,255,0.16);
      background: rgba(255,255,255,0.10);
      color: white;
      font-size: 22px;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .project-modal-grid {
      display: grid;
      grid-template-columns: 1.1fr 0.9fr;
      gap: 28px;
      align-items: start;
    }

    .project-modal-kicker {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      background: rgba(255,255,255,0.12);
      border: 1px solid rgba(255,255,255,0.14);
      padding: 8px 14px;
      border-radius: 999px;
      font-size: 12px;
      font-weight: 700;
      letter-spacing: 0.4px;
      text-transform: uppercase;
      margin-bottom: 14px;
    }

    .project-modal h3 {
      margin: 0 0 10px;
      font-size: clamp(28px, 4vw, 42px);
      line-height: 1.05;
    }

    .project-modal p,
    .project-modal li {
      color: rgba(255,255,255,0.92);
    }

    .project-modal ul {
      margin: 18px 0 0;
      padding-left: 20px;
    }

    .project-modal-panel {
      background: rgba(255,255,255,0.08);
      border: 1px solid rgba(255,255,255,0.14);
      border-radius: 20px;
      padding: 20px;
    }

    .project-modal-stat {
      font-size: 38px;
      font-weight: 800;
      line-height: 1;
      margin-bottom: 8px;
    }

    .project-modal .tag {
      background: rgba(255,255,255,0.10);
      border-color: rgba(255,255,255,0.16);
      color: #fff;
    }

    @media (max-width: 980px) {
      .hero-card { grid-template-columns: 1fr; text-align: center; }
      .results-grid { grid-template-columns: repeat(2, 1fr); }
      .services-grid,
      .projects-grid,
      .testimonials-grid { grid-template-columns: 1fr; }
      .cta-row, .badge-row { justify-content: center; }
      .topbar-inner { flex-direction: column; align-items: flex-start; }
      .nav { justify-content: flex-start; }
      .metric-callout,
      .project-modal-grid { grid-template-columns: 1fr; }
    }

    @media (max-width: 640px) {
      .hero { padding-top: 26px; }
      .hero-card { padding: 22px; border-radius: 22px; }
      .video-thumb img { height: 240px; }
      .results-grid { grid-template-columns: 1fr; }
      .logo-card { min-width: 150px; height: 100px; }
      .section-title { font-size: 26px; }
      .project-modal-card { padding: 24px; }
      .metric-callout.show { padding: 20px; }
    }
  </style>
</head>
<body>
  <div class="topbar">
    <div class="topbar-inner">
      <div class="brand">Jane Yugtan</div>
      <nav class="nav">
        <a href="#video-intro">Video</a>
        <a href="#results">Results</a>
        <a href="#services">Services</a>
        <a href="#featured-projects">Projects</a>
        <a href="#experience">Experience</a>
        <a href="#clients">Clients</a>
        <a href="#testimonials">Testimonials</a>
        <a href="#linkedin">LinkedIn</a>
        <a href="#contact">Contact</a>
      </nav>
    </div>
  </div>

  <main class="container">
    <section class="hero" id="top">
      <div class="hero-card">
        <div>
          <img class="hero-photo" src="jy-linkedin.jpeg" alt="Portrait of Jane Yugtan" />
        </div>
        <div>
          <div class="eyebrow">Client Retention • Systems • Revenue Operations</div>
          <h1>Jane Yugtan</h1>
          <div class="subtitle">Account Manager | Project Manager | Executive Assistant</div>
          <p class="intro">
            I help founders, agencies, and B2B teams improve client retention, strengthen delivery systems, automate operations, and support revenue growth through account management, enterprise renewals, Notion systems, and AI-powered workflows.
          </p>
          <div class="cta-row">
            <a class="btn btn-primary" href="https://calendly.com/jyugtan/discovery-call-with-jane" target="_blank" rel="noopener">☕ Book a quick virtual coffee</a>
            <a class="btn btn-secondary" href="mailto:yugtanlynette@gmail.com">📩 Email Me</a>
            <a class="btn btn-light" href="https://www.linkedin.com/in/jyugtan/" target="_blank" rel="noopener">🔗 LinkedIn</a>
          </div>
        </div>
      </div>
    </section>

    <section class="section" id="video-intro">
      <h2 class="section-title">🎥 Meet Jane</h2>
      <p class="section-subtitle">A quick introduction to how I support enterprise accounts, founders, and growing teams through client success, operational systems, and project execution.</p>
      <div class="video-card">
        <a class="video-thumb" href="https://www.loom.com/share/6325ce02a04148188bf5de8a8e26732b?sid=54f70cf0-e26a-4e4c-9abf-9808cce40351" target="_blank" rel="noopener" aria-label="Watch Jane's introduction video">
          <img src="intro-cover.jpg" alt="Jane Yugtan introduction video cover" />
          <div class="play-button">▶</div>
        </a>
        <div class="video-body">
          <h3>Client-facing strategy with systems that actually get used</h3>
          <p>
            This introduction highlights my approach to account management, delivery support, automation, and founder operations — with a strong emphasis on communication, follow-through, and measurable outcomes.
          </p>
        </div>
      </div>
    </section>

    <section class="section" id="results">
      <h2 class="section-title">🔎 Results at a Glance</h2>
      <p class="section-subtitle">A cleaner KPI layout to highlight the outcomes most relevant to account management, renewals, automation, and systems design.</p>
      <div class="results-grid">
        <div class="result-card featured-metric" id="renewalsMetricCard">
          <div class="result-kpi">$100K+</div>
          <div class="result-label">Enterprise renewals processed</div>
          <div class="result-copy">Managed renewal processing across high-value subscription accounts with a focus on retention, continuity, and account health.</div>
        </div>
        <div class="result-card">
          <div class="result-kpi">64.3%</div>
          <div class="result-label">Renewal close rate</div>
          <div class="result-copy">Based on 18 closed renewals out of 28 tracked renewal decisions.</div>
        </div>
        <div class="result-card">
          <div class="result-kpi">185K+</div>
          <div class="result-label">Global subscribers reached</div>
          <div class="result-copy">Included as an account manager in subscriber-facing email communications for a large global B2C audience.</div>
        </div>
        <div class="result-card">
          <div class="result-kpi">$10K</div>
          <div class="result-label">Affiliate pipeline in 30 days</div>
          <div class="result-copy">Built a qualified affiliate pipeline and supporting workflow structure for Whiskey Library in the first 30 days.</div>
        </div>
        <div class="result-card">
          <div class="result-kpi">-87%</div>
          <div class="result-label">Onboarding time reduced</div>
          <div class="result-copy">Reduced onboarding from approximately 3 days to 4 hours through structured systems and automation.</div>
        </div>
        <div class="result-card">
          <div class="result-kpi">95%</div>
          <div class="result-label">Workflow satisfaction improvement</div>
          <div class="result-copy">Supported stronger team experience through cleaner systems, visibility, and documentation.</div>
        </div>
        <div class="result-card">
          <div class="result-kpi">-30%</div>
          <div class="result-label">Project delays reduced</div>
          <div class="result-copy">Improved execution through QA gates, process control, and more predictable delivery workflows.</div>
        </div>
        <div class="result-card">
          <div class="result-kpi">5–6 hrs</div>
          <div class="result-label">Founder time saved monthly</div>
          <div class="result-copy">Freed up leadership time with better reporting, status visibility, and workflow automation.</div>
        </div>
      </div>
      <div class="metric-callout" id="renewalsCallout">
        <div class="metric-icon">🔎</div>
        <div>
          <h3>$100K+ in enterprise renewals</h3>
          <p>
            This metric reflects renewal processing across high-value subscription accounts, with a strong focus on revenue retention, account continuity, and client relationship management. Click the KPI card again or use the button below to minimize this view.
          </p>
          <button class="metric-close" id="renewalsCalloutClose" type="button">Close highlight</button>
        </div>
      </div>
    </section>

    <section class="section" id="services">
      <h2 class="section-title">🛠 Services</h2>
      <p class="section-subtitle">Focused service lines aligned with your current positioning: client retention, systems optimization, and automation support.</p>
      <div class="services-grid">
        <div class="panel">
          <h3>Account Management & Client Retention</h3>
          <ul>
            <li>Enterprise renewals and retention support</li>
            <li>Client communication, follow-up, and relationship management</li>
            <li>Revenue-focused coordination for ongoing accounts</li>
          </ul>
          <div class="tag-row">
            <span class="tag">Renewals</span>
            <span class="tag">Retention</span>
            <span class="tag">Client Success</span>
          </div>
        </div>
        <div class="panel">
          <h3>Notion Dashboard Optimization</h3>
          <ul>
            <li>Company-wide Notion architecture and dashboard cleanup</li>
            <li>Department dashboards, SOP libraries, and KPI systems</li>
            <li>Founder-friendly systems that improve visibility and usability</li>
          </ul>
          <div class="tag-row">
            <span class="tag">Notion Systems</span>
            <span class="tag">Operations</span>
            <span class="tag">Documentation</span>
          </div>
        </div>
        <div class="panel">
          <h3>AI + Automation for Agencies & B2B Teams</h3>
          <ul>
            <li>AI-assisted outreach workflows for B2B companies and organizations</li>
            <li>Automation of repetitive admin, reporting, and coordination work</li>
            <li>Process improvement for agencies and contractor-focused businesses</li>
          </ul>
          <div class="tag-row">
            <span class="tag">AI Workflows</span>
            <span class="tag">Automation</span>
            <span class="tag">B2B Outreach</span>
          </div>
        </div>
      </div>
    </section>

    <section class="section" id="featured-projects">
      <h2 class="section-title">📌 Featured Projects</h2>
      <p class="section-subtitle">A tighter project section focused on your strongest and most relevant case studies.</p>
      <div class="projects-grid">
        <div class="project-card interactive-project" data-project="sava">
          <div class="project-kicker">Featured Project</div>
          <h3>SAVA Amsterdam — Company-Wide Notion Dashboard Optimization</h3>
          <p>
            Designed a full Notion optimization structure for an e-commerce company to turn its workspace into a clean, scalable operating system for the entire business.
          </p>
          <ul>
            <li>Structured company-wide dashboards across Sales, Customer Support, HR, Supply Chain, and Marketing</li>
            <li>Centralized SOPs, KPIs, and team resources into one searchable system</li>
            <li>Improved usability with a founder-friendly layout designed for visibility and adoption</li>
            <li>Built a system intended to help teams find what they need faster and operate more consistently</li>
          </ul>
          <div class="tag-row">
            <span class="tag">E-commerce Ops</span>
            <span class="tag">Workspace Design</span>
            <span class="tag">Company Systems</span>
          </div>
        </div>
        <div class="project-card interactive-project" data-project="whiskey">
          <div class="project-kicker">Featured Project</div>
          <h3>Whiskey Library — Affiliate Pipeline & Notion Workflow Build</h3>
          <p>
            Launched a data-driven affiliate engine focused on generating qualified affiliates and building a pipeline valued at <strong>$10,000 in the first 30 days</strong>.
          </p>
          <ul>
            <li>Created a Notion-based workflow to manage affiliate operations, tracking, and visibility</li>
            <li>Built structure for a more organized affiliate pipeline and operational follow-through</li>
            <li>Supported a cleaner process for affiliate onboarding, coordination, and execution</li>
            <li>Focused on turning early-stage affiliate efforts into a trackable revenue pipeline</li>
          </ul>
          <div class="tag-row">
            <span class="tag">Affiliate Operations</span>
            <span class="tag">Pipeline Build</span>
            <span class="tag">Notion Workflow</span>
          </div>
        </div>
      </div>
    </section>

    <section class="section" id="experience">
      <h2 class="section-title">🗂 Experience</h2>
      <p class="section-subtitle">Selected experience across account management, project delivery, founder support, and operational systems.</p>
      <div class="experience-grid">
        <div class="experience-card">
          <div class="meta">Current Role</div>
          <h3>Account Manager — E-Learning Provider / Enterprise Subscription Accounts</h3>
          <ul>
            <li>Processed <strong>$100,000+</strong> in renewals across high-value enterprise subscription accounts</li>
            <li>Achieved a <strong>64.3% renewal close rate</strong> based on tracked renewal decisions</li>
            <li>Closed <strong>18</strong> renewal accounts while supporting retention and continuity across the pipeline</li>
            <li>Included as an account manager in communications sent to <strong>185,000+</strong> global B2C subscribers</li>
            <li>Focused on client relationships, renewal follow-up, revenue retention, and account continuity</li>
          </ul>
        </div>

        <div class="experience-card">
          <div class="meta">2025</div>
          <h3>Project Manager — Whiskey Library</h3>
          <ul>
            <li>Launched a data-driven affiliate engine generating qualified affiliates and a <strong>$10,000 pipeline</strong> in the first 30 days</li>
            <li>Created a <strong>Notion-based workflow</strong> to support affiliate operations and process visibility</li>
            <li>Improved structure for affiliate management, tracking, and operational execution</li>
          </ul>
        </div>

        <div class="experience-card">
          <div class="meta">2024–2025</div>
          <h3>Project Manager — ServiceThrive</h3>
          <ul>
            <li>Built execution plans, QA process improvements, and workflow structures for delivery support</li>
            <li>Proposed scalable systems and helped remove operational blockers</li>
            <li>Supported stronger execution consistency across active projects</li>
          </ul>
        </div>

        <div class="experience-card">
          <div class="meta">2023–2024</div>
          <h3>Project Manager — The Social Brand</h3>
          <ul>
            <li>Managed web and SEO projects with stronger delivery visibility and organization</li>
            <li>Reduced rework through process structure and QA-focused workflows</li>
            <li>Maintained client-facing communication and project coordination</li>
          </ul>
        </div>

        <div class="experience-card">
          <div class="meta">2023–2024</div>
          <h3>EA / OBM — Investor Attraction Academy</h3>
          <ul>
            <li>Supported founder operations through inbox, calendar, scheduling, and client communication</li>
            <li>Managed follow-up, reporting, meeting coordination, and execution support</li>
            <li>Helped maintain operational consistency and visibility</li>
          </ul>
        </div>
      </div>
    </section>

    <section class="section" id="clients">
      <h2 class="section-title">🤝 Clients & Websites Managed</h2>
      <p class="section-subtitle">A cleaner, more dynamic gallery-style presentation. The logo carousel auto-scrolls and pauses on hover, so it feels more polished than a static grid.</p>
      <div class="logo-marquee" aria-label="Client logos carousel">
        <div class="logo-track">
          <div class="logo-card"><img src="70KLOGO.webp" alt="70K Affiliates" /></div>
          <div class="logo-card"><img src="dreamindigitallogo.jpeg" alt="Dream in Digital" /></div>
          <div class="logo-card"><img src="threecoltslogo.png" alt="Threecolts" /></div>
          <div class="logo-card"><img src="servicethrivelogo.png" alt="ServiceThrive" /></div>
          <div class="logo-card"><img src="Fanti-sewer-and-drain-pros-retina.png" alt="Fanti Sewer & Drain Pros" /></div>
          <div class="logo-card"><img src="MW-logo.png" alt="Morgan White Window Coverings" /></div>
          <div class="logo-card"><img src="san-benito-realty-hollister-ca.webp" alt="San Benito Realty" /></div>
          <div class="logo-card"><img src="WL-LOGO.webp" alt="Whiskey Library" /></div>
          <div class="logo-card"><img src="AA-ROOFING-LOGO-02.png" alt="AA Roofing" /></div>
          <div class="logo-card"><img src="highlandfarmparklogo.jpg" alt="Highland Farm Park" /></div>
          <div class="logo-card"><img src="audaciouslyagencylogo.png" alt="Audaciously Agency" /></div>
          <div class="logo-card"><img src="marketingmeca.jpeg" alt="Marketing Meca" /></div>
          <div class="logo-card"><img src="cropped-Forget-Me-Not-02.png" alt="Forget Me Not" /></div>
          <div class="logo-card"><img src="IAAlogo.png" alt="Investor Attraction Academy" /></div>
          <div class="logo-card"><img src="PPCLOGO.jpeg" alt="PPC Professor" /></div>
          <div class="logo-card"><img src="ealogo.png" alt="EA brand asset" /></div>

          <div class="logo-card"><img src="70KLOGO.webp" alt="70K Affiliates" /></div>
          <div class="logo-card"><img src="dreamindigitallogo.jpeg" alt="Dream in Digital" /></div>
          <div class="logo-card"><img src="threecoltslogo.png" alt="Threecolts" /></div>
          <div class="logo-card"><img src="servicethrivelogo.png" alt="ServiceThrive" /></div>
          <div class="logo-card"><img src="Fanti-sewer-and-drain-pros-retina.png" alt="Fanti Sewer & Drain Pros" /></div>
          <div class="logo-card"><img src="MW-logo.png" alt="Morgan White Window Coverings" /></div>
          <div class="logo-card"><img src="san-benito-realty-hollister-ca.webp" alt="San Benito Realty" /></div>
          <div class="logo-card"><img src="WL-LOGO.webp" alt="Whiskey Library" /></div>
          <div class="logo-card"><img src="AA-ROOFING-LOGO-02.png" alt="AA Roofing" /></div>
          <div class="logo-card"><img src="highlandfarmparklogo.jpg" alt="Highland Farm Park" /></div>
          <div class="logo-card"><img src="audaciouslyagencylogo.png" alt="Audaciously Agency" /></div>
          <div class="logo-card"><img src="marketingmeca.jpeg" alt="Marketing Meca" /></div>
          <div class="logo-card"><img src="cropped-Forget-Me-Not-02.png" alt="Forget Me Not" /></div>
          <div class="logo-card"><img src="IAAlogo.png" alt="Investor Attraction Academy" /></div>
          <div class="logo-card"><img src="PPCLOGO.jpeg" alt="PPC Professor" /></div>
          <div class="logo-card"><img src="ealogo.png" alt="EA brand asset" /></div>
        </div>
      </div>
    </section>

    <section class="section" id="testimonials">
      <h2 class="section-title">🎥 Testimonials</h2>
      <p class="section-subtitle">Social proof from collaborators and clients who have seen how I work.</p>
      <div class="testimonials-grid">
        <div class="testimonial-card">
          <h3>Sean Elias — Threecolts / 70K Affiliates</h3>
          <p class="quote">“Jane is really good at getting things done fast.”</p>
          <a class="btn btn-secondary" href="./Sean%20Elias-TestimonialVideo.mp4">▶ Watch video</a>
        </div>
        <div class="testimonial-card">
          <h3>Joe Remington — PPC Professor</h3>
          <p class="quote">“Jane is a phenomenal resource for me and my team.”</p>
          <a class="btn btn-secondary" href="./Joe-Remington-TestimonialVideo.mp4">▶ Watch video</a>
        </div>
      </div>
    </section>

    <section class="section" id="linkedin">
      <h2 class="section-title">🔗 LinkedIn</h2>
      <p class="section-subtitle">Another way to connect and review my professional background in account management, project delivery, client success, and systems optimization.</p>
      <div class="linkedin-card">
        <h3>Connect with me on LinkedIn</h3>
        <p>View my profile directly or use the embedded badge below if your GitHub Pages setup supports it.</p>
        <p><a class="btn btn-light" href="https://ph.linkedin.com/in/jyugtan?trk=profile-badge" target="_blank" rel="noopener">View my LinkedIn profile</a></p>
        <div class="badge-base LI-profile-badge" data-locale="en_US" data-size="large" data-theme="light" data-type="HORIZONTAL" data-vanity="jyugtan" data-version="v1"><a class="badge-base__link LI-simple-link" href="https://ph.linkedin.com/in/jyugtan?trk=profile-badge">Jane Y.</a></div>
      </div>
    </section>

    <section class="section" id="contact">
      <h2 class="section-title">📬 Contact</h2>
      <p class="section-subtitle">If my background and services align with what you need, I’d be glad to connect and discuss how I can support your business.</p>
      <div class="contact-card">
        <h3>Let’s connect</h3>
        <p>I’m currently focused on account management, client retention, enterprise renewals, Notion systems, operational support, and AI-assisted workflow improvement for growing businesses.</p>
        <div class="cta-row">
          <a class="btn btn-primary" href="https://calendly.com/jyugtan/discovery-call-with-jane" target="_blank" rel="noopener">☕ Book a quick virtual coffee</a>
          <a class="btn btn-secondary" href="mailto:yugtanlynette@gmail.com">📩 Email me directly</a>
        </div>
      </div>
    </section>

    <div class="footer">© 2026 JNugdan — Account Manager | Project Manager | Executive Assistant</div>
  </main>

  <div class="project-modal" id="projectModal" aria-hidden="true">
    <div class="project-modal-card">
      <button class="project-modal-close" id="projectModalClose" aria-label="Close project details">×</button>
      <div class="project-modal-grid" id="projectModalContent"></div>
    </div>
  </div>

  <script>
    const renewalsMetricCard = document.getElementById('renewalsMetricCard');
    const renewalsCallout = document.getElementById('renewalsCallout');
    const renewalsCalloutClose = document.getElementById('renewalsCalloutClose');

    function toggleRenewalsCallout(forceOpen = null) {
      const shouldOpen = forceOpen !== null ? forceOpen : !renewalsCallout.classList.contains('show');
      renewalsCallout.classList.toggle('show', shouldOpen);
      renewalsMetricCard.classList.toggle('active', shouldOpen);
      if (shouldOpen) {
        renewalsCallout.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }
    }

    renewalsMetricCard?.addEventListener('click', () => toggleRenewalsCallout());
    renewalsCalloutClose?.addEventListener('click', () => toggleRenewalsCallout(false));

    const projectData = {
      sava: {
        kicker: 'Featured Project',
        title: 'SAVA Amsterdam — Company-Wide Notion Dashboard Optimization',
        summary: 'A full workspace optimization concept for an e-commerce company, designed to turn Notion into a cleaner, more scalable operating system across departments.',
        stat: 'Full company Notion system',
        detailTitle: 'What this project focused on',
        bullets: [
          'Restructured company-wide dashboards across Sales, Customer Support, HR, Supply Chain, and Marketing.',
          'Centralized SOPs, KPIs, references, and team resources into one searchable workspace.',
          'Designed the workspace around founder visibility, cleaner navigation, and easier team adoption.',
          'Improved consistency by creating a layout that supports governance and long-term operational use.'
        ],
        tags: ['E-commerce Ops', 'Notion Design', 'Company Systems']
      },
      whiskey: {
        kicker: 'Featured Project',
        title: 'Whiskey Library — Affiliate Pipeline & Notion Workflow Build',
        summary: 'A data-driven affiliate operations build focused on generating qualified affiliates, improving visibility, and shaping a revenue pipeline valued at $10,000 in the first 30 days.',
        stat: '$10K pipeline in 30 days',
        detailTitle: 'What this project focused on',
        bullets: [
          'Built a Notion-based workflow to support affiliate operations, tracking, and execution visibility.',
          'Created structure around qualified affiliate generation and early-stage pipeline management.',
          'Improved operational follow-through with a cleaner process for onboarding and coordination.',
          'Turned affiliate efforts into a more trackable and systemized growth function.'
        ],
        tags: ['Affiliate Ops', 'Pipeline Build', 'Notion Workflow']
      }
    };

    const projectModal = document.getElementById('projectModal');
    const projectModalContent = document.getElementById('projectModalContent');
    const projectModalClose = document.getElementById('projectModalClose');
    const projectCards = document.querySelectorAll('.interactive-project');

    function renderProjectModal(projectKey) {
      const project = projectData[projectKey];
      if (!project) return;
      const tags = project.tags.map(tag => `<span class="tag">${tag}</span>`).join('');
      const bullets = project.bullets.map(item => `<li>${item}</li>`).join('');
      projectModalContent.innerHTML = `
        <div>
          <div class="project-modal-kicker">${project.kicker}</div>
          <h3>${project.title}</h3>
          <p>${project.summary}</p>
          <ul>${bullets}</ul>
        </div>
        <div>
          <div class="project-modal-panel">
            <div class="project-modal-stat">${project.stat}</div>
            <p>${project.detailTitle}</p>
            <div class="tag-row">${tags}</div>
          </div>
        </div>
      `;
      projectModal.classList.add('show');
      projectModal.setAttribute('aria-hidden', 'false');
      document.body.classList.add('modal-open');
    }

    function closeProjectModal() {
      projectModal.classList.remove('show');
      projectModal.setAttribute('aria-hidden', 'true');
      document.body.classList.remove('modal-open');
    }

    projectCards.forEach(card => {
      card.addEventListener('click', () => {
        renderProjectModal(card.dataset.project);
      });
    });

    projectModalClose?.addEventListener('click', closeProjectModal);
    projectModal?.addEventListener('click', (e) => {
      if (e.target === projectModal) closeProjectModal();
    });
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') closeProjectModal();
    });
  </script>
  <script src="https://platform.linkedin.com/badges/js/profile.js" async defer></script>
</body>
</html>
