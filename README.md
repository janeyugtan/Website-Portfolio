<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Jane Hernandez | Project Manager & Executive Assistant</title>
  <style>
    :root {
      --primary-color: #1a1a2e;
      --accent-color: #0f4c75;
      --bg-color: #f5f5f5;
      --text-color: #333333;
      --heading-font: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      --body-font: Arial, sans-serif;
    }
    body { margin:0; font-family: var(--body-font); color: var(--text-color); background: var(--bg-color); }
    header { background: var(--primary-color); color: white; padding: 2rem 1rem; text-align:center; }
    header img { width: 150px; height:150px; border-radius:50%; object-fit:cover; border:4px solid var(--accent-color); }
    header h1 { margin:0.5rem 0 0; font-family: var(--heading-font); font-size:2.5rem; }
    header p { font-size:1.2rem; margin:0.5rem 0; }
    nav { display:flex; justify-content:center; gap:1rem; margin-top:1rem; }
    nav a { color:white; text-decoration:none; font-weight:bold; }
    section { padding:4rem 1rem; max-width:800px; margin:0 auto; }
    h2 { color: var(--primary-color); font-family: var(--heading-font); font-size:2rem; margin-bottom:1rem; }
    .grid-two { display:grid; grid-template-columns:1fr 1fr; gap:2rem; }
    a.button { display:inline-block; background: var(--accent-color); color:white; padding:0.75rem 1.5rem; text-decoration:none; border-radius:0.5rem; }
    footer { background: var(--primary-color); color:white; text-align:center; padding:2rem 1rem; }
    footer a { color: var(--accent-color); text-decoration:none; margin:0 0.5rem; }
  </style>
</head>
<body>
  <header>
    <!-- Download your LinkedIn photo and place it at assets/profile.jpg -->
    <img src="assets/profile.jpg" alt="Jane Hernandez">
    <h1>Jane Hernandez</h1>
    <p>Project Manager & Executive Assistant</p>
    <nav>
      <a href="#about">About</a>
      <a href="#experience">Experience</a>
      <a href="#portfolio">Portfolio</a>
      <a href="#contact">Contact</a>
    </nav>
  </header>
  <section id="about">
    <h2>About Me</h2>
    <p>I’m Jane Hernandez, a results-driven Project Manager and Executive Assistant with over 3 years of experience supporting busy CEOs and leading teams in fast-paced digital marketing agencies. My approach is all about structure, clarity, and translating vision into systems that drive real business results.</p>
    <a class="button" href="https://drive.google.com/file/d/1Ikut8YzrxuHyi2afnNaDf3ay9KKT2DBB/view" target="_blank">Download Resume</a>
  </section>
  <section id="experience">
    <h2>Experience</h2>
    <div class="grid-two">
      <div>
        <h3>Project Manager & Executive Assistant</h3>
        <p>Various Digital Agencies | 2021 – Present</p>
        <ul>
          <li>Supported CEOs with operations, calendar, and inbox management.</li>
          <li>Led website launches and campaign rollouts ahead of schedule.</li>
          <li>Developed SOPs and automated workflows to increase efficiency by 20%.</li>
        </ul>
      </div>
      <div>
        <h3>SOP & Workflow Automation</h3>
        <p>Appointment Setter Process</p>
        <ul>
          <li>Mapped processes, identified gaps, and led training for teams.</li>
          <li>Increased lead-to-booking conversion by 20% in 3 months.</li>
        </ul>
      </div>
    </div>
  </section>
  <section id="portfolio">
    <h2>Portfolio</h2>
    <ul>
      <li><strong>Website Relaunch for WhiskeyLibrary.com</strong> – Coordinated teams for a successful relaunch ahead of schedule.</li>
      <li><strong>Portfolio Site Development</strong> – Built static site template on GitHub Pages using HTML/CSS.</li>
      <!-- Add more projects here -->
    </ul>
  </section>
  <section id="contact">
    <h2>Contact</h2>
    <p>Let’s Connect:</p>
    <p><a href="mailto:jane.hernandez@email.com">jane.hernandez@email.com</a></p>
    <p>
      <a href="https://www.linkedin.com/in/janehernandez/" target="_blank">LinkedIn</a> |
      <a href="https://www.onlinejobs.ph/jobseekers/info/1937735" target="_blank">OnlineJobs.ph</a> |
      <a href="https://www.facebook.com/jane.hernandez.285545" target="_blank">Facebook</a>
    </p>
  </section>
  <footer>
    &copy; 2025 Jane Hernandez | Designed for visionary CEOs in digital marketing
  </footer>
</body>
</html>
