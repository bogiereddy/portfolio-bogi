
import React from "react";
import "./App.css";

const profile = {
  name: "Bogireddy Obulreddy",
  role: "Data Science Graduate | AI/ML Engineer",
  email: "bogireddyobulreddy2004@gmail.com",
  phone: "9502153462",
  linkedin: "https://www.linkedin.com/in/bogireddy-obulreddy-271240293/",
  github: "https://github.com/bogiereddy",
};

const projects = [
  {
    title: "Agentic RAG Application",
    description:
      "Building an intelligent retrieval-augmented generation system using LangChain, LangGraph, vector databases and LLMs.",
    tech: ["Python", "LangChain", "LangGraph", "FAISS", "RAG"],
    github: "https://github.com/bogiereddy",
  },
  {
    title: "Driver Drowsiness Detection",
    description:
      "Real-time driver drowsiness detection system using computer vision, facial landmarks and alert notifications. Achieved 95%+ detection accuracy.",
    tech: ["Python", "OpenCV", "MediaPipe", "Computer Vision"],
    github: "https://github.com/bogireddy/drowsiness-detection.git",
  },
  {
    title: "Kidney Disease Prediction",
    description:
      "Deep learning CNN-based medical image classification project with model training, evaluation and experiment tracking.",
    tech: ["Python", "TensorFlow", "CNN", "MLflow", "DVC"],
    github: "https://github.com/bogireddy/kidney--disease-prediction.git",
  },
  {
    title: "Retail Foot Traffic Optimization",
    description:
      "LSTM-based retail foot traffic forecasting application using sales data, time-series analysis and interactive visualizations.",
    tech: ["Python", "TensorFlow", "LSTM", "Streamlit", "Plotly"],
    github: "https://foot-traffic-optimization-id4umj6epevkvq9atadzxt.streamlit.app/",
  },
];

const skills = [
  "Python",
  "Machine Learning",
  "Deep Learning",
  "Generative AI",
  "Agentic AI",
  "RAG",
  "LangChain",
  "LangGraph",
  "TensorFlow",
  "Scikit-learn",
  "OpenCV",
  "Pandas",
  "NumPy",
  "SQL",
  "FAISS",
  "ChromaDB",
  "Streamlit",
  "Git & GitHub",
];

function App() {
  return (
    <div className="portfolio">

      {/* NAVBAR */}
      <nav className="navbar">
        <a href="#home" className="logo">
          BO<span>.</span>
        </a>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>

        <a
          href="/Resume.pdf"
          className="resume-btn"
          target="_blank"
          rel="noreferrer"
        >
          Resume ↗
        </a>
      </nav>

      {/* HERO SECTION */}
      <section id="home" className="hero">

        <div className="hero-content">
          <p className="intro">HELLO, I'M</p>

          <h1>
            {profile.name.split(" ")[0]}{" "}
            <span>Obulreddy</span>
          </h1>

          <h2>{profile.role}</h2>

          <p className="hero-description">
            Passionate about building intelligent applications
            using Machine Learning, Deep Learning, Generative AI
            and Agentic AI. I enjoy transforming data into
            meaningful real-world solutions.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="primary-btn">
              Explore My Work →
            </a>

            <a href="/Resume.pdf" className="secondary-btn"
               target="_blank" rel="noreferrer">
              Download Resume ↓
            </a>
          </div>

          {/* SOCIAL LINKS */}
          <div className="social-links">

            <a href={profile.github}
               target="_blank"
               rel="noreferrer">
              GitHub ↗
            </a>

            <a href={profile.linkedin}
               target="_blank"
               rel="noreferrer">
              LinkedIn ↗
            </a>

            <a href={`mailto:${profile.email}`}>
              Gmail ↗
            </a>

          </div>
        </div>

        {/* PROFILE PHOTO */}
        <div className="hero-image">
          <div className="image-border">
            <img
              src="/profile.png"
              alt="Bogireddy Obulreddy"
              className="profile-image"
            />
          </div>

          <p className="image-caption">
            AI / ML Engineer
          </p>
        </div>

      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="section">
        <p className="section-label">GET TO KNOW ME</p>
        <h2 className="section-title">About Me</h2>

        <div className="about-card">
          <p>
            I am a Data Science graduate specializing in
            Machine Learning, Artificial Intelligence and
            Deep Learning. I have practical experience
            developing end-to-end machine learning pipelines,
            computer vision systems and predictive analytics
            applications.
          </p>

          <p>
            I am currently expanding my expertise in
            Generative AI, Retrieval-Augmented Generation
            and Agentic AI to build intelligent,
            production-ready applications.
          </p>

          <div className="about-details">
            <div>
              <strong>Education</strong>
              <span>B.Tech - Data Science</span>
            </div>

            <div>
              <strong>University</strong>
              <span>Parul University</span>
            </div>

            <div>
              <strong>CGPA</strong>
              <span>7.01</span>
            </div>

            <div>
              <strong>Experience</strong>
              <span>3 Months Internship</span>
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS SECTION */}
      <section id="skills" className="section">
        <p className="section-label">MY EXPERTISE</p>
        <h2 className="section-title">Technical Skills</h2>

        <div className="skills-container">
          {skills.map((skill, index) => (
            <span className="skill-item" key={index}>
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* EXPERIENCE SECTION */}
      <section id="experience" className="section">
        <p className="section-label">MY JOURNEY</p>
        <h2 className="section-title">Experience</h2>

        <div className="experience-card">
          <h3>Data Science Intern</h3>

          <h4>CODTECH IT Solutions Pvt. Ltd.</h4>

          <p className="experience-duration">
            3 Months Internship
          </p>

          <p>
            Worked on data science tasks involving data
            preprocessing, ETL pipelines, Python,
            Pandas and machine learning techniques.
          </p>
        </div>
      </section>

      {/* PROJECTS SECTION */}
      <section id="projects" className="section">
        <p className="section-label">WHAT I HAVE BUILT</p>
        <h2 className="section-title">Featured Projects</h2>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div className="project-card" key={index}>

              <p className="project-number">
                PROJECT 0{index + 1}
              </p>

              <h3>{project.title}</h3>

              <p className="project-description">
                {project.description}
              </p>

              <div className="tech-stack">
                {project.tech.map((tech, i) => (
                  <span key={i}>{tech}</span>
                ))}
              </div>

              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="project-link"
              >
                View Project ↗
              </a>

            </div>
          ))}
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="section contact-section">
        <p className="section-label">LET'S CONNECT</p>
        <h2 className="section-title">
          Get In Touch
        </h2>

        <p className="contact-description">
          Interested in collaborating or discussing
          opportunities in Data Science, Machine Learning
          and Artificial Intelligence? Feel free to contact me.
        </p>

        <div className="contact-grid">

          <a href={`mailto:${profile.email}`}
             className="contact-card">
            <span>✉</span>
            <strong>Email</strong>
            <p>{profile.email}</p>
          </a>

          <a href={`tel:+91${profile.phone}`}
             className="contact-card">
            <span>☎</span>
            <strong>Mobile</strong>
            <p>+91 {profile.phone}</p>
          </a>

          <a href={profile.linkedin}
             target="_blank"
             rel="noreferrer"
             className="contact-card">
            <span>in</span>
            <strong>LinkedIn</strong>
            <p>Connect with me ↗</p>
          </a>

          <a href={profile.github}
             target="_blank"
             rel="noreferrer"
             className="contact-card">
            <span>⌘</span>
            <strong>GitHub</strong>
            <p>Explore my repositories ↗</p>
          </a>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <p>
          © {new Date().getFullYear()} {profile.name}.
          All Rights Reserved.
        </p>

        <div>
          <a href={profile.github} target="_blank"
             rel="noreferrer">GitHub</a>

          <a href={profile.linkedin} target="_blank"
             rel="noreferrer">LinkedIn</a>

          <a href={`mailto:${profile.email}`}>Email</a>
        </div>
      </footer>

    </div>
  );
}

export default App;
