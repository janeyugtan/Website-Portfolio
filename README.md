<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Jane Yugtan | Project Manager & Executive Assistant</title>
  <style>
    /* Clients section with dark background */
    .clients-section {
      background: #1a1a2e;
      color: white;
      padding: 2rem 1rem;
    }
    .clients-section .grid-two {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
      gap: 2rem;
      align-items: center;
      justify-items: center;
    }
    .clients-section a {
      color: white;
      text-decoration: none;
      text-align: center;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    .clients-section img {
      max-width: 100px;
      margin-bottom: 0.5rem;
      filter: brightness(1.2);
    }

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
      background: var(--bg-color) repeating-linear-gradient(
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
      flex-wrap: wrap;
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
    .video-list > div {
      margin-bottom: 2rem;
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
    <p>Project Manager & Executive Assistant</p>
    <nav>
      <a href="#about">About</a>
      <a href="#experience">Experience</a>
      <a href="#portfolio">Portfolio</a>
      <a href="#clients">Clients</a>
      <a href="#testimonials">Testimonials</a>
      <a href="#video-testimonials">Video Testimonials</a>
      <a href="#sites">Sites</a>
      <a href="#contact">Contact</a>
    </nav>
  </header>

  <section id="about">
    <h2>About Me</h2>
    <p>I’m Jane Yugtan, a results-driven Project Manager and Executive Assistant with over 3 years of experience supporting busy CEOs and leading teams in fast-paced digital marketing agencies. My approach is all about structure, clarity, and translating vision into systems that drive real business results.</p>
    <a class="button" href="https://drive.google.com/file/d/1snpiXCl140AhjD97o8E8u5ASQzdX_mAL/view?usp=drive_link" target="_blank">Download Resume</a>
  </section>

  <section id="experience">
    <h2>Experience</h2>
    <div class="grid-two">
      <div>
        <h3>Project Manager & Executive Assistant</h3>
        <p>Various Digital Agencies | 2021 – Present</p>
        <ul class="simple-list">
          <li>Supported CEOs with operations, calendar, and inbox management.</li>
          <li>Led website launches, campaign rollouts, and process improvements ahead of schedule.</li>
          <li>Developed SOPs and automated workflows to increase team efficiency by up to 20%.</li>
        </ul>
      </div>
      <div>
        <h3>SOP & Workflow Automation</h3>
        <p>Appointment Setter & Content Processes</p>
        <ul class="simple-list">
          <li>Mapped existing processes, identified gaps, and led team training.</li>
          <li>Managed content & site builds to ensure timely delivery and quality.</li>
        </ul>
      </div>
    </div>
  </section>

  <section id="portfolio">
    <h2>Portfolio</h2>
    <p>Explore my projects and case studies:</p>
    <a class="button" href="https://docs.google.com/presentation/d/1gOUU-ii8Fq6I4NUGV_EubyUuxbNSogrXuWSaisqGsW0/edit?usp=sharing" target="_blank">View Portfolio</a>
  </section>

  <section id="clients" class="clients-section">
    <h2>Clients I’ve Worked With</h2>
    <div class="grid-two">
      <a href="http://ppcprofessor.com/" target="_blank">
        <img src="PPCLOGO.jpeg" alt="PPC Professor Logo">
        <p>PPC Professor</p>
      </a>
      <a href="https://70kaffiliates.com/" target="_blank">
        <img src="70KLOGO.webp" alt="70K Affiliates Logo">
        <p>70K Affiliates</p>
      </a>
      <a href="https://www.facebook.com/evolveacquisition" target="_blank">
        <img src="ealogo.png" alt="Evolve Acquisition Logo">
        <p>Evolve Acquisition</p>
      </a>
      <a href="https://dreamindigital.ca/" target="_blank">
        <img src="dreamindigitallogo.jpeg" alt="Dream In Digital Logo">
        <p>Dream In Digital</p>
      </a>
      <a href="https://linkedleads.us/" target="_blank">
        <img src="IAAlogo.png" alt="Investor Attraction Academy Logo">
        <p>Investor Attraction Academy</p>
      </a>
      <a href="https://threecolts.com" target="_blank">
        <img src="threecoltslogo.png" alt="Threecolts Logo">
        <p>Threecolts</p>
      </a>
      <a href="https://highlandfarmpark.com/" target="_blank">
        <img src="highlandfarmparklogo.jpg" alt="Highland Farm Park Logo">
        <p>Highland Farm Park</p>
      </a>
      <a href="https://servicethrive.com" target="_blank">
        <img src="servicethrivelogo.png" alt="Service Thrive Logo">
        <p>Service Thrive</p>
      </a>
      <a href="https://marketingmeca.com/" target="_blank">
        <img src="marketingmeca.jpeg" alt="Marketing Meca Logo">
        <p>Marketing Meca</p>
      </a>
      <a href="https://whiskeylibrary.com/?srsltid=AfmBOorjEr6KqXorNFIIqoi53PcXiMrp4yy6FJZIBswo5tVxFeE1_glv" target="_blank">
        <img src="WL-LOGO.webp" alt="Whiskey Library Logo">
        <p>Whiskey Library</p>
      </a>
    </div>
  </section>

  <section id="testimonials">
    <h2>Testimonials & Reviews</h2>
    <p>Read client feedback and watch video testimonials:</p>
    <a class="button" href="https://docs.google.com/presentation/d/1YY61u3lTnuaCLhJeWyMjKbk0AFyr9VUXPIgbaGqKvm8/edit?usp=drive_link" target="_blank">View Reviews</a>

  <section id="video-testimonials">
    <h2>Video Testimonials</h2>
    <div class="video-list">
      <div>
        <h3>Sean Elias - Threecolts / 70K Affiliates</h3>
        <video controls width="320" src="Sean Elias-TestimonialVideo.mp4"></video>
      </div>
      <div>
        <h3>Joe Remington - PPC Professor</h3>
        <video controls width="320" src="Joe-Remington-TestimonialVideo.mp4"></video>
      </div>
    </div>
  </section>

  <section id="sites">
    <h2>Sites Managed</h2>
    <ul class="simple-list">
      <li><a href="http://aaroof.net/" target="_blank">aaroof.net</a></li>
      <li><a href="https://fantisewerdrainpros.com/" target="_blank">fantisewerdrainpros.com</a></li>
      <li><a href="https://morganwhitewindowcoverings.com/" target="_blank">morganwhitewindowcoverings.com</a></li>
      <li><a href="https://forgetmenotlessons.com/" target="_blank">forgetmenotlessons.com</a></li>
      <li><a href="https://sanbenitorealty.com/" target="_blank">sanbenitorealty.com</a></li>
      <li><a href="https://marketingmeca.com/" target="_blank">marketingmeca.com</a></li>
      <li><a href="https://whiskeylibrary.com/" target="_blank">whiskeylibrary.com</a></li>
    </ul>
    <p>Clients
Currently managing Marketing Meca and Whiskey Library — leading SOP development, content management, and coordinating website builds and requests.

Previously supported a diverse range of brands by helping my client manage operations, content, and project workflows across multiple accounts.</p>
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
