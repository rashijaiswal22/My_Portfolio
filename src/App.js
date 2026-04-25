import React, { useState } from "react";
import "./App.css";

export default function App() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [activeNav, setActiveNav] = useState("#home");

  return (
    <div className="app">
      {/* SIDEBAR NAVBAR */}
      <nav className="navbar">
        <div className="logo">Rashi Jaiswal</div>
        <div className="nav-links">
          <a href="#home" className={activeNav === "#home" ? "active" : ""} onClick={() => setActiveNav("#home")}>Introduction</a>
          <a href="#about" className={activeNav === "#about" ? "active" : ""} onClick={() => setActiveNav("#about")}>About Me</a>
          <a href="#projects" className={activeNav === "#projects" ? "active" : ""} onClick={() => setActiveNav("#projects")}>Projects</a>
          <a href="#skills" className={activeNav === "#skills" ? "active" : ""} onClick={() => setActiveNav("#skills")}>Skills & Tools</a>
          <a href="#education" className={activeNav === "#education" ? "active" : ""} onClick={() => setActiveNav("#education")}>Education</a>
          <a href="#contact" className={activeNav === "#contact" ? "active" : ""} onClick={() => setActiveNav("#contact")}>Contact</a>
        </div>
        {/* Social Links for fallback */}
      <div className="sidebar-socials">
        <a href="https://github.com/rashijaiswal22" target="_blank" rel="noreferrer"><i className="fab fa-github"></i></a>
        <a href="https://www.linkedin.com/in/rashi-jaiswal-b33300294" target="_blank" rel="noreferrer"><i className="fab fa-linkedin"></i></a>
        <a href="mailto:jaiswalrashi135@gmail.com" title="Email Me"><i className="fas fa-envelope"></i></a>
        <a href="https://www.geeksforgeeks.org/profile/rashijaiszwx3" target="_blank" rel="noreferrer" title="GeeksforGeeks"><i className="fas fa-code"></i></a>
      </div>
      </nav>

      {/* MAIN CONTENT WRAPPER */}
      <div className="main-wrapper">
        
        {/* HERO SECTION */}
        <header id="home" className="hero" style={{ 
          backgroundImage: `linear-gradient(rgba(0,0,0,0.30), rgba(0,0,0,0.45)), url('/img/code1.jpg')`,
          backgroundSize: 'cover',backgroundPosition: 'center',backgroundAttachment: 'fixed' }}>
          <div className="hero-content">
            <h1 className="hero-title">Hi, I'm <span className="highlight">Rashi</span></h1>
            <h2 className="tagline">Full Stack Developer | Java </h2>
            <p className="hero-desc">
              Passionate Full Stack Developer focused on building scalable web 
              applications using Java, Spring Boot, and React.js.
            </p>
            <button className="btn-primary" onClick={() => window.location.href = '#projects'}>View My Work</button>
          </div>
        </header>

        {/* NEW INTRODUCTION SECTION  */}
        <section id="home" className="section intro-section">
          <div className="intro-content">
            <h1 className="user-name">Rashi Jaiswal</h1>
            <h2 className="tagline">A coder by day, problem-solver by night!</h2>
            <p className="intro-text">
              I am a dedicated <strong>Software Engineer</strong> specializing in full-stack application development. 
              I enjoy crafting responsive web solutions using modern technologies like <strong>Java, Spring Boot, and React.js</strong>, 
              aiming to deliver high-quality and user-centric software solutions.
            </p>
            <p className="intro-text">
      I don't just write code; I focus on <strong>Software Craftsmanship</strong>. My expertise includes 
      designing robust <strong>SQL Databases</strong> and understanding the <strong>Basics of System Design</strong> 
      to ensure every line of logic is clean, optimized, and built for performance.
    </p>
            <div className="intro-btns">
              <button className="btn-purple" onClick={() => window.open('/path-to-your-resume.pdf')}>
                Get Resume <i className="fas fa-external-link-alt"></i>
              </button>
              <button className="btn-outline" onClick={() => window.location.href = 'mailto:jaiswalrashi135@gmail.com'}>
                <i className="far fa-envelope"></i> Send Mail
              </button>
            </div>
          </div>
          </section>

        {/* ABOUT SECTION */}
        <section id="about" className="section">
  <div className="container">
    <h2 className="section-title">About Me</h2>
    <p className="subtitle-text">More than just a title—let’s dive deeper!</p>
    
    <div className="about-content">
      <p className="about-text">
        I am a passionate <strong>Software Engineer</strong> with a knack for building full-stack web applications 
        using modern technologies like <strong>Java, Spring Boot, and React.js</strong>. My journey in tech 
        is fueled by a curiosity for bridging the gap between complex backend logic and intuitive 
        user interfaces, translating real-world problems into innovative digital experiences.
      </p>
      
      <p className="about-text">
        With a solid foundation in <strong>Data Structures & Algorithms (DSA)</strong> and <strong>OOPs</strong>. I focus on creating 
        scalable, efficient, and maintainable solutions. I don't just write code; I focus on software 
        craftsmanship, ensuring every line of logic is clean and optimized for performance.
      </p>

      {isExpanded && (
        <div className="extra-content">
          <p className="about-text">
            Having successfully developed and deployed impactful projects like the <strong>Lucknow Tourism 
            Booking System</strong> and a <strong>Real-time Weather Tracker</strong>, I have gained hands-on 
            experience in REST API integration, database management with MySQL, and modern frontend styling. 
            I am proficient in hosting and managing full-stack environments on platforms like <strong>Netlify 
            and Render</strong>.
          </p>
          <p className="about-text">
            I thrive in collaborative environments and enjoy tackling challenging problems with creative 
            solutions. Currently, I am sharpening my skills to deliver powerful, server-side solutions and 
            aim to contribute to impactful projects as a <strong>Software Developer</strong> where I can 
            make a significant difference in users' lives.
          </p>
        </div>
      )}

      <button className="read-more-btn" onClick={() => setIsExpanded(!isExpanded)}>
        {isExpanded ? "Show Less" : "Learn More"}
      </button>
    </div>
  </div>
</section>

        {/* EDUCATION SECTION (Timeline Style) */}
<section id="education" className="section bg-dark-variant">
  <div className="container">
    <h2 className="section-title">Education</h2>
    <p className="subtitle-text">I learned a lot, but the real learning happens in the code editor!</p>
    
    <div className="education-timeline">
      
      {/* B.Tech Details */}
      <div className="edu-item">
        <div className="edu-icon"><i className="fas fa-graduation-cap"></i></div>
        <div className="edu-content">
          <h3 className="edu-degree">Bachelor of Technology in Information Technology</h3>
          <p className="edu-clg">B.N. College of Engineering & Technology (BNCET), Lucknow</p>
          <p className="edu-date">2022 - 2026 (Expected)</p>
          <p className="edu-desc">
            Pursuing B.Tech with a focus on Full Stack Development, Java, and Spring Boot. 
            Maintained strong academic performance with a <strong>Current CGPA: 8.16</strong>.
          </p>
        </div>
      </div>

      {/* Intermediate Details */}
      <div className="edu-item">
        <div className="edu-icon"><i className="fas fa-school"></i></div>
        <div className="edu-content">
          <h3 className="edu-degree">Higher Secondary Education (Intermediate)</h3>
          <p className="edu-clg">U.P. Board</p>
          <p className="edu-date">Completed: 2022</p>
          <p className="edu-desc">
            Specialized in Science stream with Information Technology. 
            Achieved an overall score of <strong>73.20%</strong>.
          </p>
        </div>
      </div>

      {/* High School Details */}
      <div className="edu-item">
        <div className="edu-icon"><i className="fas fa-book"></i></div>
        <div className="edu-content">
          <h3 className="edu-degree">Secondary Education (High School)</h3>
          <p className="edu-clg">U.P. Board</p>
          <p className="edu-date">Completed: 2020</p>
          <p className="edu-desc">
            Completed 10th grade with a strong foundation in Mathematics and Science. 
            Overall score: <strong>82%</strong>.
          </p>
        </div>
      </div>

    </div>
  </div>
</section>

       {/* PROJECTS SECTION */}
<section id="projects" className="section">
  <div className="container">
    <h2 className="section-title">Projects</h2>
    <p className="subtitle-text">A lot of ideas, but these are successfully deployed!</p>
    
    <div className="project-list-vertical">
      
      {/* Project 1: Lucknow Tourism */}
      <div className="project-card-premium">
        <div className="project-main-info">
          <h3 className="project-title">Lucknow Tourism | Full-Stack City Tourism Booking & Guide</h3>
          <p className="project-tagline">A comprehensive booking and guide system for the city of Nawabs.</p>
          <p className="project-summary">
            Developed a high-performance full-stack application designed to provide a seamless user experience 
           for exploring and booking tourism services in Lucknow. Built with a modern <strong>React and Spring Boot </strong> 
          architecture, the platform ensures fast data retrieval and a responsive interface.
          </p>
          
          <div className="project-tech-stack">
            <span>React.js</span> <span>Spring Boot</span> <span>MySQL</span> <span>REST API</span> <span>MySQL</span>
          </div>

          <button className="read-more-btn" onClick={() => setIsExpanded(!isExpanded)}>
            {isExpanded ? "Show Less" : "Learn More..."}
          </button>
        </div>

        {isExpanded && (
          <div className="project-details-expanded">
            <div className="details-grid">
              <div className="details-box">
                <h4>Features</h4>
                <ul>
                  <li>Secure User Authentication and Profile Management.</li>
                  <li>Dynamic Booking Modules with real-time availability check.</li>
                  <li>Admin Dashboard for managing tours and user queries.</li>
                  <li>Responsive UI designed for both mobile and desktop users.</li>
                </ul>
              </div>
              <div className="details-box">
                <h4>Technical Highlights</h4>
                <ul>
                  <li>Backend: High-performance RESTful APIs built with Spring Boot.</li>
                  <li>Database: Complex MySQL queries for guide allocation and booking history.</li>
                  <li>Hosting: Backend deployed on <strong>Render</strong> and Frontend on <strong>Netlify</strong>.</li>
                </ul>
              </div>
            </div>
            <div className="project-links">
              <a href="https://github.com/rashijaiswal22/City_Tourism_Booking_Guide " target="_blank" className="link-btn github">Github <i className="fab fa-github"></i></a>
              <a href="https://city-tourism-booking-guide.netlify.app/" target="_blank" className="link-btn live">Live Demo <i className="fas fa-external-link-alt"></i></a>
            </div>
          </div>
        )}
      </div>

      {/* Project 2: Weather Tracker */}
      <div className="project-card-premium">
        <div className="project-main-info">
          <h3 className="project-title">Real-Time Weather Tracker | Dynamic UI</h3>
          <p className="project-tagline">Stay updated with live atmospheric conditions globally.</p>
          <p className="project-summary">
            A high-performance weather application built with <strong>React</strong> that provides 
            instant weather updates using the OpenWeather API. The app features a context-aware 
            UI that changes dynamically based on current weather conditions.
          </p>
          
          <div className="project-tech-stack">
            <span>React.js</span> <span>OpenWeather API</span> <span>Axios</span> <span>MySQL</span> 
          </div>
        </div>

        <div className="project-details-expanded">
          <div className="details-grid">
            <div className="details-box">
              <h4>Features</h4>
              <ul>
                <li>Real-time data fetching for any city worldwide.</li>
                <li>Visual feedback: Backgrounds change based on Rain, Clouds, or Clear sky.</li>
                <li>Detailed metrics including Humidity, Wind Speed, and Pressure.</li>
              </ul>
            </div>
            <div className="details-box">
              <h4>Deployment</h4>
              <ul>
                <li>Optimized for zero-latency data updates.</li>
                <li>Frontend and Backend successfully hosted on <strong>Render</strong> for global access.</li>
              </ul>
            </div>
          </div>
          <div className="project-links">
            <a href="https://github.com/rashijaiswal22/Weather_Tracker" target="_blank" className="link-btn github">Github <i className="fab fa-github"></i></a>
            <a href="https://weather-tracker-p743.onrender.com" target="_blank" className="link-btn live">Live Demo <i className="fas fa-external-link-alt"></i></a>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>

        {/* SKILLS & TOOLS SECTION */}
<section id="skills" className="section bg-dark-variant">
  <div className="container">
    <h2 className="section-title">Skills & Tools</h2>
    <p className="subtitle-text">Learned by coding all night and debugging all day!</p>
    
    <p className="skills-intro-text">
      As a full-stack <strong>Software Engineer</strong>, I specialize in building scalable web applications 
      using modern technologies like <strong>Java, Spring Boot, and React.js</strong>. I focus on creating 
      efficient, maintainable, and robust web solutions.
    </p>

    <div className="skills-container">
      {/* Languages */}
      <div className="skill-category">
        <div className="skill-badges">
          <span className="badge"><i className="fab fa-java"></i> Java</span>
          <span className="badge"><i className="fab fa-python"></i> Python</span>
          <span className="badge"><i className="fab fa-js"></i> JavaScript</span>
        </div>
      </div>

      {/* Frontend */}
      <div className="skill-category">
        <div className="skill-badges">
          <span className="badge"><i className="fab fa-react"></i> ReactJS</span>
          <span className="badge"><i className="fab fa-html5"></i> HTML5</span>
          <span className="badge"><i className="fab fa-css3-alt"></i> CSS3</span>
          <span className="badge"><i className="fab fa-bootstrap"></i> Bootstrap</span>
        </div>
      </div>

      {/* Backend & DB */}
      <div className="skill-category">
        <div className="skill-badges">
          <span className="badge"><i className="fas fa-leaf"></i> Spring Boot</span>
          <span className="badge"><i className="fas fa-"></i>RESTful APIs</span>
          <span className="badge"><i className="fas fa-jwt"></i>JWT Auth</span>
          <span className="badge"><i className="fas fa-database"></i> MySQL</span>
          <span className="badge"><i className="fas fa-"></i>Hibernate</span>
        </div>
      </div>

      {/* Tools & DevOps */}
      <div className="skill-category">
        <div className="skill-badges">
          <span className="badge"><i className="fab fa-git-alt"></i> Git</span>
          <span className="badge"><i className="fab fa-github"></i> GitHub</span>
          <span className="badge">Aiven</span>
          <span className="badge">Netlify</span>
          <span className="badge">Render</span>
        </div>
      </div>

      {/* Concepts */}
      <div className="skill-category">
        <div className="skill-badges">
          <span className="badge">DSA</span>
          <span className="badge">OOPs</span>
          <span className="badge">DBMS</span>
          <span className="badge">OS</span>
        </div>
      </div>
    </div>
  </div>
</section>

        {/* CONTACT SECTION */}
<section id="contact" className="section">
  <div className="container">
    <h2 className="section-title">Contact</h2>
    <p className="subtitle-text">Get in touch before I write another line of code!</p>
    
    <div className="contact-form-container">
      <form className="contact-form">
        <div className="form-group">
          <label>Name<span className="required">*</span></label>
          <input type="text" placeholder="Your name, your fame" required />
        </div>

        <div className="form-group">
          <label>Email<span className="required">*</span></label>
          <input type="email" placeholder="Where can I reach you back?" required />
          <p className="form-hint">Temporary emails are also accepted, unless you wish to hear back 😉</p>
        </div>

        <div className="form-group">
          <label>Message<span className="required">*</span></label>
          <textarea rows="5" placeholder="Your words, my inbox." required></textarea>
        </div>

        <div className="form-actions">
          <button type="submit" className="btn-submit">Submit</button>
          <button type="reset" className="btn-reset">Reset</button>
        </div>
      </form>

      </div>
  </div>
</section>

        <footer className="footer">
          <p>© 2026 Rashi Jaiswal | Built with React</p>
        </footer>
      </div>
    </div>
  );
}