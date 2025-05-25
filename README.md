<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Jane Yugtan | Project Manager &amp; Executive Assistant</title>
  <style>
    :root {
      --primary-color: #1a1a2e;
      --accent-color: #0f4c75;
      --bg-color: #E8F4F8;
      --text-color: #333333;
      --heading-font: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      --body-font: Arial, sans-serif;
    }
    body {
      margin: 0;
      font-family: var(--body-font);
      color: var(--text-color);
      background: var(--bg-color);
      background-image: repeating-linear-gradient(
        45deg,
        rgba(15,76,117,0.1) 0,
        rgba(15,76,117,0.1) 1px,
        transparent 1px,
        transparent 10px
      );
    }
    header {
      background: var(--primary-color);
      color: white;
      padding: 2rem 1rem;
      text-align: center;
    }
    header img {
      width: 150px;
      height: 150px;
      border-radius: 50%;
      object-fit: cover;
      border: 4px solid var(--accent-color);
    }
    header h1 {
      margin: 0.5rem 0 0;
      font-family: var(--heading-font);
      font-size: 2.5rem;
    }
    header p {
      font-size: 1.2rem;
      margin: 0.5rem 0;
    }
    nav {
      display: flex;
      justify-content: center;
      gap: 1rem;
      margin-top: 1rem;
    }
    nav a {
      color: white;
      text-decoration: none;
      font-weight: bold;
      padding: 0.5rem;
      transition: background 0.3s;
    }
    nav a:hover {
      background: rgba(255,255,255,0.1);
      border-radius: 4px;
    }
    section {
      background: white;
      margin: 2rem auto;
      padding: 2rem;
      max-width: 800px;
      border-radius: 8px;
      box-shadow: 0 4px 12px rgba(0,0,0,0.1);
    }
    h2 {
      color: var(--primary-color);
      font-family: var(--heading-font);
      font-size: 2rem;
      margin-bottom: 1rem;
      border-bottom: 2px solid var(--accent-color);
      padding-bottom: 0.5rem;
    }
    .grid-two {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 2rem;
    }
    a.button {
      display: inline-block;
      background: var(--accent-color);
      color: white;
      padding: 0.75rem 1.5rem;
      text-decoration: none;
      border-radius: 0.5rem;
      transition: opacity 0.3s;
      margin-top: 1rem;
    }
    a.button:hover {
      opacity: 0.85;
    }
    ul.simple-list {
      list-style-type: disc;
      padding-left: 1.5rem;
    }
    footer {
      background: var(--primary-color);
      color: white;
      text-align: center;
      padding: 2rem 1rem;
      margin-top: 2rem;
    }
    footer a {
      color: var(--accent-color);
      text-decoration: none;
      margin: 0 0.5rem;
    }
  </style>
</head>
<body>
  <header>
    <img src="profile.jpg" alt="Jane Yugtan">
    <h1>Jane Yugtan</h1>
    <p>Project Manager &amp; Executive Assistant</p>
    <nav>
      <a href="#about">About</a>
      <a href="#experience">Experience</a>
      <a href="#portfolio">Portfolio</a>
      <a href="#testimonials">Testimonials</a>
      <a href="#sites">Sites</a>
      <a href="#contact">Contact</a>
    </nav>
  </header>

  <section id="about">
    <h2>About Me</h2>
    <p>I’m Jane Yugtan, a results-driven Project Manager and Executive Assistant with over 3 years of experience supporting busy CEOs and leading teams in fast-paced digital marketing agencies. My approach is all about structure, clarity, and translating vision into systems that drive real business results.</p>
    <a class="button" href="Jane_Yugtan-Resume.pdf" target="_blank">Download Resume</a>
  </section>

  <section id="experience">
    <h2>Experience</h2>
    <div class="grid-two">
      <div>
        <h3>Project Manager &amp; Executive Assistant</h3>
        <p>Various Digital Agencies | 2021 – Present</p>
        <ul class="simple-list">
          <li>Supported CEOs with operations, calendar, and inbox management.</li>
          <li>Led website launches, campaign rollouts, and process improvements ahead of schedule.</li>
          <li>Developed SOPs and automated workflows to increase team efficiency by up to 20%.</li>
        </ul>
      </div>
      <div>
        <h3>SOP &amp; Workflow Automation</h3>
        <p>Appointment Setter &amp; Content Processes</p>
        <ul class="simple-list">
          <li>Mapped existing processes, identified gaps, and led team training.</li>
          <li>Managed content &amp; site builds to ensure timely delivery and quality.</li>
        </ul>
      </div>
    </div>
  </section>

  <section id="portfolio">
    <h2>Portfolio</h2>
    <p>Explore my projects and case studies:</p>
    <a class="button" href="https://docs.google.com/presentation/d/1gOUU-ii8Fq6I4NUGV_EubyUuxbNSogrXuWSaisqGsW0/edit?usp=sharing" target="_blank">View Portfolio</a>
  </section>

  <section id="testimonials">
    <h2>Testimonials &amp; Reviews</h2>
    <p>Read client feedback and watch video testimonials:</p>
    <a class="button" href="https://docs.google.com/presentation/d/1YY61u3lTnuaCLhJeWyMjKbk0AFyr9VUXPIgbaGqKvm8/edit?usp=sharing" target="_blank">View Reviews</a>
    <ul class="simple-list">
      <li><a href="https://drive.google.com/file/d/15GcY5u1YK97h18IgYifB6xjpVcLaNncp/view?usp=sharing" target="_blank">Video Testimonial 1</a></li>
      <li><a href="https://drive.google.com/file/d/1mUUSYrruckNWkc1_kduUAuaqAEb_7V8d/view?usp=sharing" target="_blank">Video Testimonial 2</a></li>
    </ul>
  </section>

  <section id="sites">
    <h2>Sites Managed</h2>
    <ul class="simple-list">
      <li><a href="http://aaroof.net/" target="_blank">aaroof.net</a></li>
      <li><a href="https://fantisewerdrainpros.com/" target="_blank">fantisewerdrainpros.com</a></li>
      <li><a href="https://morganwhitewindowcoverings.com/" target="_blank">morganwhitewindowcoverings.com</a></li>
      <li><a href="https://forgetmenotlessons.com/" target="_blank">forgetmenotlessons.com</a></li>
      <li><a href="https://sanbenitorealty.com/" target="_blank">sanbenitorealty.com</a></li>
      <li><a href="https://whiskeylibrary.com/" target="_blank">whiskeylibrary.com</a></li>
    </ul>
    <p>Building SOPs, managing content, and overseeing website builds and requests.</p>
  </section>

  <section id="contact">
    <h2>Contact</h2>
    <p>Let’s Connect:</p>
    <p><a href="mailto:yugtanlynette@gmail.com">yugtanlynette@gmail.com</a></p>
    <p>
      <a href="https://www.linkedin.com/in/janehernandez/" target="_blank">LinkedIn</a> |
      <a href="https://www.onlinejobs.ph/jobseekers/info/1937735" target="_blank">OnlineJobs.ph</a> |
      <a href="https://www.facebook.com/jane.hernandez.285545" target="_blank">Facebook</a>
    </p>
  </section>

  <footer>
    &copy; 2025 Jane Yugtan | Designed for visionary CEOs in digital marketing
  </footer>
</body>
</html>
