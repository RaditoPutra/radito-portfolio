export default function Portfolio() {
  return (
    <>
      {/* Navigation */}
      <nav className="navbar" id="navbar">
        <div className="nav-container">
          <div className="nav-logo">
            Radito<span className="accent">.</span>
          </div>
          <div className="nav-menu" id="nav-menu">
            <a href="#home" className="nav-link active">
              Home
            </a>
            <a href="#about" className="nav-link">
              About
            </a>
            <a href="#experience" className="nav-link">
              Experience
            </a>
            <a href="#education" className="nav-link">
              Education
            </a>
            <a href="#skills" className="nav-link">
              Skills
            </a>
            <a href="#organization" className="nav-link">
              Organization
            </a>
            <a href="#contact" className="nav-link">
              Contact
            </a>
          </div>
          <div className="hamburger" id="hamburger">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-content">
          <div className="profile-image">
            <div className="profile-circle">
              <span className="profile-initials">FR</span>
            </div>
          </div>
          <h1 className="hero-title">Fransiscus Radito</h1>
          <h2 className="hero-subtitle">Putra Arindika</h2>
          <p className="hero-description">IT Student & Web Developer specializing in modern web technologies</p>
          <div className="hero-buttons">
            <a href="mailto:radito.putra26@gmail.com" className="btn btn-primary">
              <i className="fas fa-envelope"></i>
              Contact Me
            </a>
            <a
              href="https://github.com/RaditoPutra"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
            >
              <i className="fab fa-github"></i>
              GitHub
            </a>
          </div>
          <div className="scroll-indicator">
            <i className="fas fa-chevron-down"></i>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <div className="container">
          <h2 className="section-title">About Me</h2>
          <div className="about-content">
            <div className="about-text">
              <h3 className="about-subtitle">Objective</h3>
              <p className="about-description">
                Sebagai mahasiswa Informatika di Universitas Atma Jaya Yogyakarta, saya mendalami pengembangan web (PHP
                & React) dan basis data. Memiliki kemampuan problem-solving dan semangat belajar tinggi, saya siap
                berkontribusi dalam proyek teknologi inovatif.
              </p>
              <div className="contact-info">
                <div className="contact-item">
                  <i className="fas fa-map-marker-alt"></i>
                  <span>Sidokarto, Godean, Sleman, DIY</span>
                </div>
                <div className="contact-item">
                  <i className="fas fa-phone"></i>
                  <span>0821-3743-7227</span>
                </div>
                <div className="contact-item">
                  <i className="fas fa-envelope"></i>
                  <span>radito.putra26@gmail.com</span>
                </div>
              </div>
            </div>
            <div className="about-cards">
              <div className="about-card">
                <h4>Communication</h4>
                <p>
                  Mampu berkomunikasi secara efektif dalam beragam konteks akademik dan tim. Berpengalaman dalam
                  menjelaskan konsep teknis yang kompleks kepada mahasiswa.
                </p>
              </div>
              <div className="about-card">
                <h4>Leadership</h4>
                <p>
                  Memiliki inisiatif dan jiwa kepemimpinan dalam lingkungan akademik dan organisasi. Berpengalaman
                  membimbing mahasiswa dan memimpin event.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="experience">
        <div className="container">
          <h2 className="section-title">Experience</h2>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-content">
                <h3>Project Developer</h3>
                <h4>Universitas Atma Jaya Yogyakarta</h4>
                <span className="timeline-date">Feb 2025 – Jun 2025</span>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-content">
                <h3>Asisten Dosen</h3>
                <h4>Universitas Atma Jaya Yogyakarta</h4>
                <span className="timeline-date">Sep 2024 – Dec 2024</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="education">
        <div className="container">
          <h2 className="section-title">Education</h2>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-content">
                <h3>Bachelor of Technology in Information Technology</h3>
                <h4>Universitas Atma Jaya Yogyakarta</h4>
                <span className="timeline-date">Current</span>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-content">
                <h3>High School Diploma</h3>
                <h4>SMAN 1 Sedayu</h4>
                <span className="timeline-date">2022</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="skills">
        <div className="container">
          <h2 className="section-title">Skills</h2>
          <div className="skills-grid">
            <div className="skill-item">
              <div className="skill-header">
                <span className="skill-icon">🌐</span>
                <span className="skill-name">HTML</span>
                <span className="skill-percentage">90%</span>
              </div>
              <div className="skill-bar">
                <div className="skill-progress" data-width="90"></div>
              </div>
            </div>
            <div className="skill-item">
              <div className="skill-header">
                <span className="skill-icon">🎨</span>
                <span className="skill-name">CSS</span>
                <span className="skill-percentage">85%</span>
              </div>
              <div className="skill-bar">
                <div className="skill-progress" data-width="85"></div>
              </div>
            </div>
            <div className="skill-item">
              <div className="skill-header">
                <span className="skill-icon">⚡</span>
                <span className="skill-name">JavaScript</span>
                <span className="skill-percentage">80%</span>
              </div>
              <div className="skill-bar">
                <div className="skill-progress" data-width="80"></div>
              </div>
            </div>
            <div className="skill-item">
              <div className="skill-header">
                <span className="skill-icon">⚛️</span>
                <span className="skill-name">React</span>
                <span className="skill-percentage">75%</span>
              </div>
              <div className="skill-bar">
                <div className="skill-progress" data-width="75"></div>
              </div>
            </div>
            <div className="skill-item">
              <div className="skill-header">
                <span className="skill-icon">🔧</span>
                <span className="skill-name">Laravel</span>
                <span className="skill-percentage">70%</span>
              </div>
              <div className="skill-bar">
                <div className="skill-progress" data-width="70"></div>
              </div>
            </div>
            <div className="skill-item">
              <div className="skill-header">
                <span className="skill-icon">📱</span>
                <span className="skill-name">Flutter</span>
                <span className="skill-percentage">60%</span>
              </div>
              <div className="skill-bar">
                <div className="skill-progress" data-width="60"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Organization Section */}
      <section id="organization" className="organization">
        <div className="container">
          <h2 className="section-title">Organization</h2>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-content">
                <h3>Koordinator Divisi Pengabdian Masyarakat</h3>
                <h4>Atma Jaya Movement</h4>
                <span className="timeline-date">Sep 2024 – Juni 2025</span>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-content">
                <h3>Ketua Pelaksana Online Campaign</h3>
                <h4>Atma Jaya Movement</h4>
                <span className="timeline-date">Nov 2023 – Januari 2024</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="container">
          <h2 className="section-title">Get In Touch</h2>
          <p className="contact-description">
            Interested in collaborating or have a project in mind? Let&apos;s connect and create something amazing
            together!
          </p>
          <div className="contact-buttons">
            <a href="mailto:radito.putra26@gmail.com" className="btn btn-primary">
              <i className="fas fa-envelope"></i>
              Send Email
            </a>
            <a
              href="https://github.com/RaditoPutra"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
            >
              <i className="fab fa-github"></i>
              GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>&copy; 2025 Fransiscus Radito Putra Arindika. Built with HTML, CSS & JavaScript.</p>
        </div>
      </footer>
    </>
  )
}
