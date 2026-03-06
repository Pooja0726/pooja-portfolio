import { useState } from "react";
import "./App.css";

const SKILLS = [
  { title: "Languages",          pills: ["Python", "Java", "C++", "SQL", "JavaScript", "HTML", "CSS"] },
  { title: "Frameworks & Tools", pills: ["Django", "Flutter", "TensorFlow", "Keras", "Streamlit", "Power BI", "Hugging Face"] },
  { title: "Libraries & APIs",   pills: ["Pandas", "NumPy", "Matplotlib", "Seaborn", "Scikit-learn", "Google Gemini API"] },
  { title: "ML / AI",            pills: ["Deep Learning", "Machine Learning", "Generative AI", "RAG", "Ollama", "Computer Vision"] },
  { title: "Cloud & Deployment", pills: ["GCP", "Vercel", "Railway", "HuggingFace Spaces"] },
  { title: "Soft Skills",        pills: ["Problem Solving", "Team Collaboration", "Communication", "Leadership", "Agile"] },
];

const PROJECTS = [
  {
    title: "ResearchMind",
    subtitle: "AI Research Platform",
    desc: "Full-stack AI research platform with semantic vector search across 100+ papers from ArXiv, HuggingFace & Semantic Scholar. RAG-powered assistant using Groq's LLaMA 3.3 70B with real-time paper alerts and sub-second response time.",
    tags: ["React", "FastAPI", "ChromaDB", "RAG", "LLaMA 3.3 70B", "SQLite", "Vercel"],
    badge: null,
    color: "#4f8ef7",
  },
  {
    title: "Facial Expression Recognition",
    subtitle: "Published Research — WCSC 2025",
    desc: "Hybrid emotion recognition model using VGG16 + SVM achieving 84.40% accuracy and 0.85 F1 score on 35K+ images (CK+, FER-2013 datasets). Streamlit demo with real-time webcam integration.",
    tags: ["VGG16", "SVM", "TensorFlow", "Keras", "Streamlit", "OpenCV"],
    badge: "Published",
    color: "#a78bfa",
  },
  {
    title: "Chemical Equipment Visualiser",
    subtitle: "Industrial Data Platform",
    desc: "Hybrid industrial data visualisation app using Django REST, React, and PyQt5. Real-time charts, automated PDF reports, and packaged as a standalone Windows executable via PyInstaller for offline use.",
    tags: ["Django REST", "React", "PyQt5", "Railway", "PyInstaller"],
    badge: null,
    color: "#38bdf8",
  },
];

const CERTS = [
  { name: "Facial Expression Recognition using CNN and SVM", issuer: "World Conference on Smart Computing (WCSC 2025)", type: "Publication" },
  { name: "Google Generative AI — Basic, Intermediate & Advanced", issuer: "Google", type: "Certification" },
  { name: "Generative AI Certification", issuer: "Smartbridge GenAI · 2025", type: "Certification" },
  { name: "Machine Learning & Deep Learning", issuer: "Certified Course · 2025", type: "Certification" },
];

/* ─── NAV ─── */
function Nav({ page, setPage }) {
  const [open, setOpen] = useState(false);
  const links = ["Home","About","Skills","Experience","Projects","Contact"];
  return (
    <nav className="nav">
      <span className="nav-logo" onClick={() => setPage("Home")}>PS.</span>
      <ul className="nav-links">
        {links.map(l => (
          <li key={l}>
            <span className={`nav-link${page===l?" active":""}`} onClick={() => { setPage(l); setOpen(false); }}>{l}</span>
          </li>
        ))}
      </ul>
      <a href="mailto:sahupooja43890@gmail.com" className="nav-cta">Hire Me</a>
      <button className="hamburger" onClick={() => setOpen(p=>!p)} aria-label="menu">
        <span/><span/><span/>
      </button>
      {open && (
        <div className="mobile-menu">
          {links.map(l => (
            <span key={l} onClick={() => { setPage(l); setOpen(false); }}>{l}</span>
          ))}
        </div>
      )}
    </nav>
  );
}

/* ─── HOME ─── */
function Home({ setPage }) {
  return (
    <main className="page home-page">
      <div className="home-left">
        <div className="home-badge"><span className="dot"/>Open to Opportunities</div>
        <h1 className="home-title">Hi, I'm<br/><span className="grad">Pooja Sahu</span></h1>
        <p className="home-sub">AI/ML Student and Developer specialising in deep learning, computer vision, and full-stack development. Published researcher building end-to-end intelligent systems.</p>
        <div className="home-actions">
          <button className="btn-primary" onClick={() => setPage("Projects")}>View Projects</button>
          <button className="btn-outline" onClick={() => setPage("Contact")}>Get in Touch</button>
        </div>
        <div className="home-socials">
          <a href="https://www.linkedin.com/in/pooja-sahu-54b5a7281/" target="_blank" rel="noreferrer" className="soc-link">LinkedIn</a>
          <a href="https://github.com/Pooja0726" target="_blank" rel="noreferrer" className="soc-link">GitHub</a>
          <a href="mailto:sahupooja43890@gmail.com" className="soc-link">Email</a>
        </div>
      </div>
      <div className="home-right">
        <div className="photo-frame">
          <img src="/photo.jpeg" alt="Pooja Sahu" className="home-photo"/>
          <div className="photo-ring"/>
        </div>
        <div className="stats-grid">
          {[{num:"8.87",label:"CGPA / 10"},{num:"100+",label:"LeetCode Solved"},{num:"3+",label:"Projects Built"},{num:"1",label:"Publication"}].map(s=>(
            <div className="stat-card" key={s.label}>
              <span className="stat-num">{s.num}</span>
              <span className="stat-label">{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

/* ─── ABOUT ─── */
function About({ setPage }) {
  return (
    <main className="page about-page">
      <div className="page-header">
        <div className="section-tag">About Me</div>
        <h2 className="page-title">Who I Am</h2>
        <p className="page-sub">Passionate about building intelligent systems that create real impact.</p>
      </div>
      <div className="about-grid">
        <div className="about-photo-col">
          <div className="about-photo-wrap">
            <img src="/photo.jpeg" alt="Pooja Sahu" className="about-photo"/>
          </div>
          <div className="about-info-card">
            <div className="info-row"><span className="info-key">Location</span><span>Bhopal, MP, India</span></div>
            <div className="info-row"><span className="info-key">Degree</span><span>B.Tech CS (AI-ML)</span></div>
            <div className="info-row"><span className="info-key">University</span><span>VIT Bhopal</span></div>
            <div className="info-row"><span className="info-key">Batch</span><span>2023 – 2027</span></div>
            <div className="info-row"><span className="info-key">CGPA</span><span className="info-highlight">8.87 / 10</span></div>
            <div className="info-row"><span className="info-key">Email</span><span>sahupooja43890@gmail.com</span></div>
            <a href="https://www.linkedin.com/in/pooja-sahu-54b5a7281/" target="_blank" rel="noreferrer" className="btn-primary" style={{marginTop:"1.2rem",display:"flex",justifyContent:"center",textDecoration:"none"}}>Connect on LinkedIn</a>
          </div>
        </div>
        <div className="about-text-col">
          <p>I am a <strong>B.Tech Computer Science (AI-ML)</strong> student at Vellore Institute of Technology, Bhopal, maintaining a CGPA of <strong>8.87 / 10</strong>. I combine deep research curiosity with practical engineering to deliver end-to-end AI solutions.</p>
          <p>With <strong>1+ year of Python development</strong> experience, I have built hybrid ML models published at international conferences and full-stack research platforms deployed on Vercel and HuggingFace Spaces.</p>
          <p>I regularly solve algorithmic problems on <strong>LeetCode (100+ solved)</strong> and stay up to date with Generative AI, RAG architectures, and large language models.</p>
          <div className="chips-wrap">
            {["Deep Learning","Computer Vision","Full-Stack Dev","Published Researcher","Generative AI","Mobile Dev","Cloud (GCP)","Agile"].map(c=>(
              <span className="chip" key={c}>{c}</span>
            ))}
          </div>
          <div className="about-actions">
            <button className="btn-primary" onClick={()=>setPage("Skills")}>View My Skills</button>
            <button className="btn-outline" onClick={()=>setPage("Projects")}>See Projects</button>
          </div>
        </div>
      </div>
    </main>
  );
}

/* ─── SKILLS ─── */
function Skills() {
  return (
    <main className="page">
      <div className="page-header">
        <div className="section-tag">Skills</div>
        <h2 className="page-title">Skills & Expertise</h2>
        <p className="page-sub">A comprehensive overview of my technical capabilities.</p>
      </div>
      <div className="skills-grid">
        {SKILLS.map(g => (
          <div className="skill-card" key={g.title}>
            <div className="skill-card-title">{g.title}</div>
            <div className="skill-pills">
              {g.pills.map(p => <span className="pill" key={p}>{p}</span>)}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}

/* ─── EXPERIENCE ─── */
function Experience() {
  return (
    <main className="page">
      <div className="page-header">
        <div className="section-tag">Experience</div>
        <h2 className="page-title">Work Experience</h2>
        <p className="page-sub">Hands-on industry experience building AI-powered products.</p>
      </div>

      <div className="timeline">
        <div className="timeline-item">
          <div className="timeline-dot"/>
          <div className="timeline-card">
            <div className="tl-header">
              <div>
                <div className="tl-role">AI / ML Intern</div>
                <div className="tl-company">Amasqis.ai &nbsp;·&nbsp; Remote</div>
              </div>
              <div className="tl-date">Mar 2025 – Sep 2025</div>
            </div>
            <ul className="tl-list">
              <li>Designed user interfaces for a financial AI platform serving <strong>500+ customers</strong>, building 15+ dashboard components that improved decision-making efficiency by <strong>30%</strong>.</li>
              <li>Collaborated in Agile sprints with cross-functional teams to implement AI-driven features and integrate user feedback for enhanced UI/UX.</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="page-header" style={{marginTop:"4rem"}}>
        <div className="section-tag">Education</div>
        <h2 className="page-title">Academic Background</h2>
      </div>
      <div className="edu-card">
        <div className="edu-icon-box">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c0 2 6 3 6 3s6-1 6-3v-5"/></svg>
        </div>
        <div>
          <div className="edu-degree">Bachelor of Technology — Computer Science (AI-ML)</div>
          <div className="edu-school">Vellore Institute of Technology, Bhopal</div>
          <div className="edu-meta">
            <span>Sep 2023 – Aug 2027</span>
            <span className="edu-cgpa">CGPA: 8.87 / 10</span>
            <span>Bhopal, MP</span>
          </div>
        </div>
      </div>

      <div className="page-header" style={{marginTop:"4rem"}}>
        <div className="section-tag">Certifications & Publications</div>
        <h2 className="page-title">Recognition & Learning</h2>
      </div>
      <div className="cert-grid">
        {CERTS.map(c => (
          <div className="cert-card" key={c.name}>
            <div className="cert-type-badge">{c.type}</div>
            <div className="cert-name">{c.name}</div>
            <div className="cert-issuer">{c.issuer}</div>
          </div>
        ))}
      </div>
    </main>
  );
}

/* ─── PROJECTS ─── */
function Projects() {
  return (
    <main className="page">
      <div className="page-header">
        <div className="section-tag">Projects</div>
        <h2 className="page-title">Things I've Built</h2>
        <p className="page-sub">End-to-end ML solutions, research platforms, and data tools.</p>
      </div>
      <div className="projects-grid">
        {PROJECTS.map(p => (
          <div className="project-card" key={p.title} style={{"--pcolor": p.color}}>
            <div className="project-header">
              <div>
                <div className="project-subtitle">{p.subtitle}</div>
                <div className="project-title">{p.title}</div>
              </div>
              {p.badge && <span className="project-badge">{p.badge}</span>}
            </div>
            <p className="project-desc">{p.desc}</p>
            <div className="project-tags">
              {p.tags.map(t => <span className="tag" key={t}>{t}</span>)}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}

/* ─── CONTACT ─── */
function Contact() {
  return (
    <main className="page">
      <div className="page-header">
        <div className="section-tag">Contact</div>
        <h2 className="page-title">Get In Touch</h2>
        <p className="page-sub">Open to internships, research collaborations, and exciting AI/ML projects.</p>
      </div>
      <div className="contact-grid">
        <div className="contact-card">
          <h3 className="contact-card-title">Let's work together</h3>
          <p className="contact-card-sub">Whether you have an opportunity or just want to talk tech — my inbox is always open.</p>
          <div className="contact-links">
            <a href="mailto:sahupooja43890@gmail.com" className="contact-link">
              <div className="contact-link-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
              </div>
              <div><div className="cl-label">Email</div><div className="cl-val">sahupooja43890@gmail.com</div></div>
            </a>
            <a href="tel:+919302445014" className="contact-link">
              <div className="contact-link-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.08 6.08l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              </div>
              <div><div className="cl-label">Phone</div><div className="cl-val">+91 9302445014</div></div>
            </a>
            <a href="https://www.linkedin.com/in/pooja-sahu-54b5a7281/" target="_blank" rel="noreferrer" className="contact-link">
              <div className="contact-link-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
              </div>
              <div><div className="cl-label">LinkedIn</div><div className="cl-val">pooja-sahu-54b5a7281</div></div>
            </a>
            <a href="https://github.com/Pooja0726" target="_blank" rel="noreferrer" className="contact-link">
              <div className="contact-link-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
              </div>
              <div><div className="cl-label">GitHub</div><div className="cl-val">Pooja0726</div></div>
            </a>
          </div>
        </div>
        <div className="contact-cta-card">
          <div className="cta-label">Ready to collaborate?</div>
          <h3 className="cta-title">Let's build something great together</h3>
          <p className="cta-sub">I'm currently looking for internship and research opportunities in AI/ML. Reach out and let's discuss how I can contribute to your team.</p>
          <a href="mailto:sahupooja43890@gmail.com?subject=Opportunity%20for%20Pooja%20Sahu&body=Hi%20Pooja%2C%0A%0AI%20came%20across%20your%20portfolio%20and%20would%20love%20to%20connect.%0A%0A" className="btn-primary" style={{marginTop:"2rem",display:"inline-flex",textDecoration:"none"}}>
            Send a Message
          </a>
        </div>
      </div>
    </main>
  );
}

/* ─── APP ─── */
export default function App() {
  const [page, setPage] = useState("Home");
  const pages = { Home, About, Skills, Experience, Projects, Contact };
  const PageComponent = pages[page];
  return (
    <>
      <div className="blob b1"/>
      <div className="blob b2"/>
      <Nav page={page} setPage={setPage}/>
      <div className="page-wrap">
        <PageComponent setPage={setPage}/>
      </div>
      <footer className="footer">
        <p>Designed & Built by <span>Pooja Sahu</span> &nbsp;·&nbsp; 2025</p>
      </footer>
    </>
  );
}