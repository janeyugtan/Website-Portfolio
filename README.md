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

    .section.reveal {
      opacity: 0;
      transform: translateY(28px);
      transition: opacity 0.7s ease, transform 0.7s ease;
    }

    .section.reveal.in-view {
      opacity: 1;
      transform: translateY(0);
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
      transition: transform 0.35s ease;
    }

    .video-thumb:hover img {
      transform: scale(1.02);
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
      transition: transform 0.25s ease, filter 0.25s ease;
    }

    .video-thumb::after {
      content: "";
      position: absolute;
      inset: auto 50% 50% auto;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 112px;
      height: 112px;
      border-radius: 50%;
      background: rgba(15, 76, 117, 0.18);
      box-shadow: 0 0 0 0 rgba(15,76,117,0.35);
      transition: background 0.25s ease, box-shadow 0.25s ease, transform 0.25s ease;
    }

    .video-thumb:hover::after {
      background: rgba(15, 76, 117, 0.78);
      box-shadow: 0 0 0 14px rgba(15,76,117,0.14);
      transform: translate(-50%, -50%) scale(1.04);
    }

    .video-thumb:hover .play-button {
      transform: scale(1.08);
      filter: brightness(1.05);
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

    /* KPI hover motion */
    .result-card:hover .result-kpi {
      animation: kpiPulse 0.9s ease-in-out infinite alternate;
    }

    @keyframes kpiPulse {
      0% { transform: scale(1); }
      100% { transform: scale(1.08); }
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
      transition: transform 0.22s ease, filter 0.22s ease;
    }

    .logo-card:hover {
      transform: translateY(-4px) scale(1.02);
      filter: saturate(1.06);
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
      grid-template-columns: 1.05fr 0.95fr;
      gap: 28px;
      align-items: start;
    }

    .browser-frame {
      background: rgba(255,255,255,0.08);
      border: 1px solid rgba(255,255,255,0.14);
      border-radius: 22px;
      overflow: hidden;
      box-shadow: 0 20px 42px rgba(5,15,28,0.22);
    }

    .browser-top {
      display: flex;
      align-items: center;
      gap: 10px;
      padding: 12px 16px;
      background: rgba(255,255,255,0.10);
      border-bottom: 1px solid rgba(255,255,255,0.12);
    }

    .browser-dots {
      display: flex;
      gap: 6px;
    }

    .browser-dots span {
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background: rgba(255,255,255,0.5);
      display: block;
    }

    .browser-url {
      flex: 1;
      padding: 8px 12px;
      border-radius: 999px;
      background: rgba(255,255,255,0.10);
      color: rgba(255,255,255,0.92);
      font-size: 12px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .browser-preview {
      position: relative;
      aspect-ratio: 16 / 10;
      background-size: cover;
      background-position: top center;
      overflow: hidden;
    }

    .browser-preview::before {
      content: "";
      position: absolute;
      inset: 0;
      background: linear-gradient(180deg, rgba(8,25,44,0.08) 0%, rgba(8,25,44,0.16) 100%);
    }

    .browser-preview::after {
      content: "";
      position: absolute;
      inset: 12px;
      border: 1px solid rgba(255,255,255,0.18);
      border-radius: 16px;
      pointer-events: none;
    }

    .preview-overlay {
      position: absolute;
      left: 18px;
      right: 18px;
      bottom: 18px;
      z-index: 1;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 12px;
      flex-wrap: wrap;
    }

    .preview-badge {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      padding: 9px 12px;
      border-radius: 999px;
      background: rgba(255,255,255,0.14);
      border: 1px solid rgba(255,255,255,0.18);
      color: #fff;
      font-size: 12px;
      font-weight: 700;
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

    .services-grid .panel.service-panel {
      position: relative;
      overflow: hidden;
      transition: transform 0.22s ease, box-shadow 0.22s ease, border-color 0.22s ease;
    }
    .services-grid .panel.service-panel::before {
      content: "";
      position: absolute;
      inset: 0 auto 0 0;
      width: 5px;
      background: linear-gradient(180deg, var(--blue), var(--blue-2));
    }
    .services-grid .panel.service-panel::after {
      content: "";
      position: absolute;
      top: -40px;
      right: -40px;
      width: 120px;
      height: 120px;
      background: radial-gradient(circle, rgba(29,111,165,0.12) 0%, rgba(29,111,165,0) 70%);
      pointer-events: none;
    }
    .services-grid .panel.service-panel:hover {
      transform: translateY(-4px);
      box-shadow: 0 20px 40px rgba(15,76,117,0.14);
      border-color: #bfd9ec;
    }
    .service-icon {
      width: 52px;
      height: 52px;
      border-radius: 14px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      background: #eef6fc;
      border: 1px solid #d7e8f5;
      font-size: 24px;
      margin-bottom: 14px;
    }
    .experience-card.exp-card {
      position: relative;
      transition: transform 0.22s ease, box-shadow 0.22s ease, border-color 0.22s ease;
    }
    .experience-card.exp-card::before {
      content: "";
      position: absolute;
      left: 0;
      top: 0;
      bottom: 0;
      width: 5px;
      border-radius: 20px 0 0 20px;
      background: linear-gradient(180deg, var(--blue), var(--blue-2));
    }
    .experience-card.exp-card:hover {
      transform: translateY(-3px);
      box-shadow: 0 18px 36px rgba(15,76,117,0.12);
      border-color: #bfd9ec;
    }
    .end-cta {
      margin: 18px auto 0;
      max-width: 760px;
      text-align: center;
      padding: 28px;
      background: linear-gradient(135deg, #0f4c75 0%, #1d6fa5 100%);
      color: white;
      border-radius: 24px;
      box-shadow: 0 20px 46px rgba(15,76,117,0.18);
    }
    .end-cta h3 {
      margin: 0 0 8px;
      font-size: 28px;
    }
    .end-cta p {
      margin: 0 0 18px;
      color: rgba(255,255,255,0.92);
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

    <section class="section reveal" id="video-intro">
      <h2 class="section-title">🎥 Meet Jane</h2>
      <p class="section-subtitle">This quick introduction gives you context before you explore the portfolio below, including the kind of work I do, the teams I support, and what you’ll find on this page.</p>
      <div class="video-card">
        <a class="video-thumb" href="#" id="openIntroVideo" aria-label="Watch Jane's introduction video">
          <img src="intro-cover.jpg" alt="Jane Yugtan introduction video cover" />
          <div class="play-button">▶</div>
          <div style="position:absolute; left:50%; top:calc(50% + 72px); transform:translateX(-50%); z-index:2; background:rgba(15,76,117,0.9); color:#fff; padding:10px 16px; border-radius:999px; font-size:13px; font-weight:700; box-shadow:0 8px 20px rgba(15,76,117,0.25);">Watch My Introduction</div>
        </a>
        <div class="video-body">
          <h3>A quick introduction before you explore my portfolio</h3>
          <p>
            In this short video, I introduce myself, share the kind of work I do across account management, project delivery, and systems optimization, and walk you through what you can expect to see throughout this one-page portfolio.
          </p>
        </div>
      </div>
    </section>

    <section class="section reveal" id="results">
      <h2 class="section-title">🔎 Results at a Glance</h2>
      <p class="section-subtitle">A cleaner KPI layout to highlight the outcomes most relevant to account management, renewals, automation, and systems design.</p>
      <div class="results-grid">
        <div class="result-card featured-metric" id="renewalsMetricCard">
          <div class="result-kpi" data-count-to="100" data-prefix="$" data-suffix="K+">$100K+</div>
          <div class="result-label">Enterprise renewals processed</div>
          <div class="result-copy">Managed renewal processing across high-value subscription accounts with a focus on retention, continuity, and account health.</div>
        </div>
        <div class="result-card">
          <div class="result-kpi" data-count-to="64.3" data-suffix="%">64.3%</div>
          <div class="result-label">Renewal close rate</div>
          <div class="result-copy">Based on 18 closed renewals out of 28 tracked renewal decisions.</div>
        </div>
        <div class="result-card">
          <div class="result-kpi" data-count-to="185" data-suffix="K+">185K+</div>
          <div class="result-label">Global subscribers reached</div>
          <div class="result-copy">Included as an account manager in subscriber-facing email communications for a large global B2C audience.</div>
        </div>
        <div class="result-card">
          <div class="result-kpi" data-count-to="10" data-prefix="$" data-suffix="K">$10K</div>
          <div class="result-label">Affiliate pipeline in 30 days</div>
          <div class="result-copy">Built a qualified affiliate pipeline and supporting workflow structure for Whiskey Library in the first 30 days.</div>
        </div>
        <div class="result-card">
          <div class="result-kpi" data-count-to="87" data-prefix="-" data-suffix="%">-87%</div>
          <div class="result-label">Onboarding time reduced</div>
          <div class="result-copy">Reduced onboarding from approximately 3 days to 4 hours through structured systems and automation.</div>
        </div>
        <div class="result-card">
          <div class="result-kpi" data-count-to="95" data-suffix="%">95%</div>
          <div class="result-label">Workflow satisfaction improvement</div>
          <div class="result-copy">Supported stronger team experience through cleaner systems, visibility, and documentation.</div>
        </div>
        <div class="result-card">
          <div class="result-kpi" data-count-to="30" data-prefix="-" data-suffix="%">-30%</div>
          <div class="result-label">Project delays reduced</div>
          <div class="result-copy">Improved execution through QA gates, process control, and more predictable delivery workflows.</div>
        </div>
        <div class="result-card">
          <div class="result-kpi" data-count-to="6" data-prefix="~" data-suffix=" hrs">5–6 hrs</div>
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

    <section class="section reveal" id="services">
      <style>
        .services-grid .panel.service-panel {
          position: relative;
          overflow: hidden;
          transition: transform 0.22s ease, box-shadow 0.22s ease, border-color 0.22s ease;
        }
        .services-grid .panel.service-panel::before {
          content: "";
          position: absolute;
          inset: 0 auto 0 0;
          width: 5px;
          background: linear-gradient(180deg, var(--blue), var(--blue-2));
        }
        .services-grid .panel.service-panel::after {
          content: "";
          position: absolute;
          top: -40px;
          right: -40px;
          width: 120px;
          height: 120px;
          background: radial-gradient(circle, rgba(29,111,165,0.12) 0%, rgba(29,111,165,0) 70%);
          pointer-events: none;
        }
        .services-grid .panel.service-panel:hover {
          transform: translateY(-4px);
          box-shadow: 0 20px 40px rgba(15,76,117,0.14);
          border-color: #bfd9ec;
        }
        .service-icon {
          width: 52px;
          height: 52px;
          border-radius: 14px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          background: #eef6fc;
          border: 1px solid #d7e8f5;
          font-size: 24px;
          margin-bottom: 14px;
        }
        .experience-card.exp-card {
          position: relative;
          transition: transform 0.22s ease, box-shadow 0.22s ease, border-color 0.22s ease;
        }
        .experience-card.exp-card::before {
          content: "";
          position: absolute;
          left: 0;
          top: 0;
          bottom: 0;
          width: 5px;
          border-radius: 20px 0 0 20px;
          background: linear-gradient(180deg, var(--blue), var(--blue-2));
        }
        .experience-card.exp-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 18px 36px rgba(15,76,117,0.12);
          border-color: #bfd9ec;
        }
        .end-cta {
          margin: 18px auto 0;
          max-width: 760px;
          text-align: center;
          padding: 28px;
          background: linear-gradient(135deg, #0f4c75 0%, #1d6fa5 100%);
          color: white;
          border-radius: 24px;
          box-shadow: 0 20px 46px rgba(15,76,117,0.18);
        }
        .end-cta h3 {
          margin: 0 0 8px;
          font-size: 28px;
        }
        .end-cta p {
          margin: 0 0 18px;
          color: rgba(255,255,255,0.92);
        }
      </style>
      <h2 class="section-title">🛠 Services</h2>
      <p class="section-subtitle">Here are the core ways I support founders, agencies, and growing teams through retention, systems optimization, and automation.</p>
      <div class="services-grid">
        <div class="panel service-panel">
          <div class="service-icon">🤝</div>
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
        <div class="panel service-panel">
          <div class="service-icon">🧩</div>
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
        <div class="panel service-panel">
          <div class="service-icon">⚙️</div>
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

    <section class="section reveal" id="featured-projects">
      <h2 class="section-title">📌 Featured Projects</h2>
      <p class="section-subtitle">These are two projects I’m proud to highlight because they reflect how I think, what I build, and how I support growth through systems and execution.</p>
      <div class="projects-grid">
        <div class="project-card interactive-project" data-project="sava">
          <div class="browser-frame" style="margin-bottom:16px; border:1px solid var(--line); box-shadow:0 12px 28px rgba(15,76,117,0.10);">
            <div class="browser-top" style="background:#eef6fc; border-bottom:1px solid var(--line);">
              <div class="browser-dots"><span style="background:#cbd5e1;"></span><span style="background:#cbd5e1;"></span><span style="background:#cbd5e1;"></span></div>
              <div class="browser-url" style="background:#fff; color:var(--slate);">https://sava-amsterdam.com/</div>
            </div>
            <div class="browser-preview" style="background-image:url('https://image.thum.io/get/width/1400/crop/900/noanimate/https://sava-amsterdam.com/'); min-height:260px;">
              <div class="preview-overlay">
                <div class="preview-badge">🌐 Live Website</div>
                <a href="https://sava-amsterdam.com/" target="_blank" rel="noopener" class="btn btn-light">Visit Website ↗</a>
              </div>
            </div>
          </div>
          <h3>SAVA Amsterdam</h3>
          <p style="margin:0 0 10px; color:var(--blue); font-weight:700;">Full company Notion system</p>
          <p>
            Company-wide Notion dashboard optimization concept designed for cleaner operations, better visibility, and a more scalable workspace structure.
          </p>
          <div class="tag-row">
            <span class="tag">What this project focused on</span>
            <span class="tag">E-commerce Ops</span>
            <span class="tag">Company Systems</span>
          </div>
        </div>

        <div class="project-card interactive-project" data-project="whiskey">
          <div class="browser-frame" style="margin-bottom:16px; border:1px solid var(--line); box-shadow:0 12px 28px rgba(15,76,117,0.10);">
            <div class="browser-top" style="background:#eef6fc; border-bottom:1px solid var(--line);">
              <div class="browser-dots"><span style="background:#cbd5e1;"></span><span style="background:#cbd5e1;"></span><span style="background:#cbd5e1;"></span></div>
              <div class="browser-url" style="background:#fff; color:var(--slate);">https://whiskeylibrary.com/</div>
            </div>
            <div class="browser-preview" style="background-image:url('https://image.thum.io/get/width/1400/crop/900/noanimate/https://whiskeylibrary.com/'); min-height:260px;">
              <div class="preview-overlay">
                <div class="preview-badge">🌐 Live Website</div>
                <a href="https://whiskeylibrary.com/" target="_blank" rel="noopener" class="btn btn-light">Visit Website ↗</a>
              </div>
            </div>
          </div>
          <h3>Whiskey Library</h3>
          <p style="margin:0 0 10px; color:var(--blue); font-weight:700;">$10K pipeline in 30 days</p>
          <p>
            Affiliate pipeline and Notion workflow build focused on early-stage growth, visibility, and a more organized affiliate operations structure.
          </p>
          <div class="tag-row">
            <span class="tag">What this project focused on</span>
            <span class="tag">Affiliate Ops</span>
            <span class="tag">Notion Workflow</span>
          </div>
        </div>
      </div>
    </section>

    <section class="section reveal" id="experience">
      <h2 class="section-title">🗂 My Experience</h2>
      <p class="section-subtitle">My experience brings together account management, project delivery, founder support, and operational systems across different types of businesses and teams.</p>
      <div class="experience-grid">
        <div class="experience-card exp-card">
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

        <div class="experience-card exp-card">
          <div class="meta">2025</div>
          <h3>Project Manager — Whiskey Library</h3>
          <ul>
            <li>Launched a data-driven affiliate engine generating qualified affiliates and a <strong>$10,000 pipeline</strong> in the first 30 days</li>
            <li>Created a <strong>Notion-based workflow</strong> to support affiliate operations and process visibility</li>
            <li>Improved structure for affiliate management, tracking, and operational execution</li>
          </ul>
        </div>

        <div class="experience-card exp-card">
          <div class="meta">2024–2025</div>
          <h3>Project Manager — ServiceThrive</h3>
          <ul>
            <li>Built execution plans, QA process improvements, and workflow structures for delivery support</li>
            <li>Proposed scalable systems and helped remove operational blockers</li>
            <li>Supported stronger execution consistency across active projects</li>
          </ul>
        </div>

        <div class="experience-card exp-card">
          <div class="meta">2023–2024</div>
          <h3>Project Manager — The Social Brand</h3>
          <ul>
            <li>Managed web and SEO projects with stronger delivery visibility and organization</li>
            <li>Reduced rework through process structure and QA-focused workflows</li>
            <li>Maintained client-facing communication and project coordination</li>
          </ul>
        </div>

        <div class="experience-card exp-card">
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

    <section class="section reveal" id="clients">
      <h2 class="section-title">🤝 Companies and Websites I’ve Supported</h2>
      <p class="section-subtitle">These are some of the companies, brands, and websites I’ve had the opportunity to support across operations, project delivery, account management, and systems work.</p>
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

    <section class="section reveal" id="testimonials">
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

    

    <section class="section reveal" id="contact">
      <div class="end-cta">
        <h3>Let’s connect ☕</h3>
        <p>If my background and services align with what you need, I’d be glad to connect and discuss how I can support your business.</p>
        <div class="cta-row" style="justify-content:center;">
          <a class="btn btn-light" href="https://calendly.com/jyugtan/discovery-call-with-jane" target="_blank" rel="noopener">☕ Book a quick virtual coffee</a>
        </div>
      </div>
    </section>

    <div class="footer">© 2026 Jane Yugtan — Account Manager | Project Manager | Executive Assistant</div>
  </main>

  <div class="project-modal" id="introVideoModal" aria-hidden="true">
    <div class="project-modal-card" style="background:linear-gradient(180deg, #0b1f33 0%, #0f4c75 100%); max-width:960px;">
      <button class="project-modal-close" id="introVideoModalClose" aria-label="Close intro video">×</button>
      <div style="margin-bottom:18px;">
        <div class="project-modal-kicker">Meet Jane</div>
        <h3 style="margin-bottom:8px;">A quick introduction to my portfolio</h3>
        <p style="margin:0; color:rgba(255,255,255,0.9);">This short video shares who I am, the kind of work I do, and what you’ll find throughout this portfolio before you continue scrolling.</p>
      </div>
      <div style="position:relative; width:100%; padding-top:56.25%; border-radius:22px; overflow:hidden; background:rgba(255,255,255,0.08); border:1px solid rgba(255,255,255,0.14); box-shadow:0 20px 42px rgba(5,15,28,0.22);">
        <iframe id="introVideoFrame" src="" title="Jane portfolio introduction video" allowfullscreen style="position:absolute; inset:0; width:100%; height:100%; border:0;"></iframe>
      </div>
    </div>
  </div>

  <div class="project-modal" id="projectModal" aria-hidden="true">
    <div class="project-modal-card">
      <button class="project-modal-close" id="projectModalClose" aria-label="Close project details">×</button>
      <div class="project-modal-grid" id="projectModalContent"></div>
    </div>
  </div>

  <script>
    const introVideoModal = document.getElementById('introVideoModal');
    const introVideoModalClose = document.getElementById('introVideoModalClose');
    const openIntroVideo = document.getElementById('openIntroVideo');
    const introVideoFrame = document.getElementById('introVideoFrame');
    const introVideoUrl = 'https://www.loom.com/embed/6325ce02a04148188bf5de8a8e26732b?sid=54f70cf0-e26a-4e4c-9abf-9808cce40351';

    function openIntroVideoModal(e) {
      if (e) e.preventDefault();
      introVideoFrame.src = introVideoUrl;
      introVideoModal.classList.add('show');
      introVideoModal.setAttribute('aria-hidden', 'false');
      document.body.classList.add('modal-open');
    }

    function closeIntroVideoModal() {
      introVideoModal.classList.remove('show');
      introVideoModal.setAttribute('aria-hidden', 'true');
      introVideoFrame.src = '';
      document.body.classList.remove('modal-open');
    }

    openIntroVideo?.addEventListener('click', openIntroVideoModal);
    introVideoModalClose?.addEventListener('click', closeIntroVideoModal);
    introVideoModal?.addEventListener('click', (e) => {
      if (e.target === introVideoModal) closeIntroVideoModal();
    });

    const revealSections = document.querySelectorAll('.section.reveal');
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.14 });
    revealSections.forEach((section) => revealObserver.observe(section));

    const kpiCounters = document.querySelectorAll('.result-kpi[data-count-to]');
    const counterObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const el = entry.target;
        if (el.dataset.animated === 'true') return;
        el.dataset.animated = 'true';
        const endValue = parseFloat(el.dataset.countTo || '0');
        const prefix = el.dataset.prefix || '';
        const suffix = el.dataset.suffix || '';
        const duration = 1400;
        const startTime = performance.now();
        const decimals = Number.isInteger(endValue) ? 0 : 1;

        function tick(now) {
          const progress = Math.min((now - startTime) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          const current = endValue * eased;
          const formatted = current.toLocaleString(undefined, {
            minimumFractionDigits: decimals,
            maximumFractionDigits: decimals
          });
          el.textContent = `${prefix}${formatted}${suffix}`;
          if (progress < 1) {
            requestAnimationFrame(tick);
          }
        }
        requestAnimationFrame(tick);
        counterObserver.unobserve(el);
      });
    }, { threshold: 0.45 });
    kpiCounters.forEach((counter) => counterObserver.observe(counter));

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
        website: 'https://sava-amsterdam.com/',
        preview: 'https://image.thum.io/get/width/1400/crop/900/noanimate/https://sava-amsterdam.com/',
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
        website: 'https://whiskeylibrary.com/',
        preview: 'https://image.thum.io/get/width/1400/crop/900/noanimate/https://whiskeylibrary.com/',
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
          <div class="browser-frame">
            <div class="browser-top">
              <div class="browser-dots"><span></span><span></span><span></span></div>
              <div class="browser-url">${project.website}</div>
            </div>
            <div class="browser-preview" style="background-image:url('${project.preview}');">
              <div class="preview-overlay">
                <div class="preview-badge">🌐 Live Website Preview</div>
                <a href="${project.website}" target="_blank" rel="noopener" class="btn btn-light">Visit Live Website ↗</a>
              </div>
            </div>
          </div>
          <div class="project-modal-panel" style="margin-top:16px;">
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
      if (e.key === 'Escape') {
        closeProjectModal();
        closeIntroVideoModal();
      }
    });
  </script>
  <script src="https://platform.linkedin.com/badges/js/profile.js" async defer></script>
</body>
</html>
