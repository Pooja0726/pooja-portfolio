import { useState, useRef, useEffect } from "react";
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
    title: "ResearchMind AI research platform",
    subtitle: "Full-stack AI research platform with semantic vector search across 100+ papers from ArXiv, HuggingFace & Semantic Scholar. RAG-powered assistant using Groq's LLaMA 3.3 70B.",
    tags: ["React", "FastAPI", "ChromaDB", "RAG", "LLaMA 3.3 70B", "Vercel"],
    liveUrl: "https://researchmind-five.vercel.app",
    liveLabel: "Live Demo",
    githubUrl: null,
  },
  {
    title: "Facial Expression Recognition",
    subtitle: "Hybrid emotion recognition model using VGG16 + SVM achieving 84.40% accuracy on CK+ and FER-2013 datasets. Published in Springer proceedings.",
    tags: ["VGG16", "SVM", "TensorFlow", "Keras", "Streamlit"],
    liveUrl: "https://link.springer.com/chapter/10.1007/978-981-95-0183-0_12",
    liveLabel: "View Publication",
    githubUrl: "https://github.com/Pooja0726/Facial-Expression-Model.git",
    badge: "Published at Springer — WCSC 2025"
  },
  {
    title: "Pace — Time Planner & Focus Tracker",
    subtitle: "Full-stack daily planning app with Spring Boot REST API, PostgreSQL, React (Vite). Features a priority-based auto-scheduler and a browser-based Focus Guard.",
    tags: ["React", "Spring Boot", "PostgreSQL", "Docker", "Vercel"],
    liveUrl: "https://timeplanner-frontend.vercel.app/",
    liveLabel: "Live Demo",
    githubUrl: "https://github.com/Pooja0726/timeplanner-frontend",
  },
  {
    title: "Smart Parking System",
    subtitle: "AI-powered smart parking management system — ANPR entry, mis-park detection, tiered owner alerts, and authority command dashboard.",
    tags: ["Next.js 15", "TypeScript", "Tailwind CSS", "OCR"],
    liveUrl: "https://kumbh-park-ai.vercel.app/",
    liveLabel: "Live Demo",
    githubUrl: "https://github.com/Pooja0726/kumbh-park-ai.git",
  }
];

const CERTS = [
  {
    name: "Facial Expression Recognition using CNN and SVM",
    issuer: "Publication",
    certUrl: "https://link.springer.com/chapter/10.1007/978-981-95-0183-0_12",
  },
  {
    name: "Introduction to Data Analytics",
    issuer: "Certification",
    certUrl: "/Introduction_to_Data_Analytics_Certificate.pdf",
  },
  {
    name: "Google Generative AI Basic Intermediate & Advanced",
    issuer: "Certification",
    certUrl: "https://www.credly.com/users/pooja-sahu.22e83bbf",
  },
  {
    name: "Google Cloud Generative AI",
    issuer: "Certification",
    certUrl: "/smartbridge-cert.pdf",
  },
  {
    name: "21 Projects 21 Days ML Deep Learning & GenAI",
    issuer: "Certification",
    certUrl: "/gfg-cert.pdf",
  },
];

const POOJA_CONTEXT = `You are Pooja's AI portfolio assistant. Answer questions about Pooja Sahu concisely and professionally.
STRICT FORMATTING RULES:
- Always respond in plain conversational sentences or simple bullet points using "•"
- Never use markdown tables, numbered lists with pipes, or headers like "# Title"
- Keep answers short — 3 to 5 bullet points max.
About Pooja Sahu:
- B.Tech Computer Science (AI-ML) student at VIT Bhopal, CGPA 8.93/10
- Location: Bhopal, MP, India
- Email: sahupooja43890@gmail.com
Experience: AI/ML Intern at Amasqis.ai (Apr 2025 - Sep 2025)
Skills: Python, Java, C++, SQL, JavaScript, TensorFlow, Keras, Django, Flutter, Streamlit, Pandas, NumPy, Scikit-learn, GCP.
Projects:
- ResearchMind AI: Full-stack AI research platform (React, FastAPI, RAG, LLaMA 3.3 70B)
- Facial Expression Recognition: Hybrid emotion recognition model (VGG16 + SVM). Published in Springer proceedings.
- Pace Time Planner: Full-stack daily planning app (Spring Boot, React, PostgreSQL)
- Smart Parking System: AI-powered smart parking management system.`;

/* ─── ASK POOJA BOT ─── */
function AskPoojaBot({ open, setOpen }) {
  const [messages, setMessages] = useState([
    { role: "assistant", text: "Hi! I'm Pooja's AI assistant. Ask me anything about her skills or projects!" }
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, open]);

  async function sendMessage(text) {
    const userText = text || input.trim();
    if (!userText) return;
    setInput("");
    setMessages(prev => [...prev, { role: "user", text: userText }]);
    setLoading(true);
    try {
      // Fetch directly from Groq to avoid local proxy/SSL issues
      const res = await fetch("https://api.groq.com/openai/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${import.meta.env.VITE_GROQ_API_KEY}`
        },
        body: JSON.stringify({
          model: "qwen/qwen3.8-27b",
          messages: [
            { role: "system", content: POOJA_CONTEXT },
            { role: "user", content: userText }
          ]
        })
      });
      const data = await res.json();
      const reply = data.choices?.[0]?.message?.content || "Sorry, I couldn't fetch a response.";
      setMessages(prev => [...prev, { role: "assistant", text: reply }]);
    } catch (err) {
      console.error("Bot error:", err);
      setMessages(prev => [...prev, { role: "assistant", text: "Sorry, something went wrong. Please try again!" }]);
    }
    setLoading(false);
  }

  if (!open) return null;

  return (
    <div className="ask-window neu-out">
      <div className="ask-header">
        <div className="ask-header-info">
          <div className="ask-avatar">P</div>
          <div>
            <div className="ask-title">Ask Pooja</div>
            <div className="ask-subtitle">AI portfolio assistant</div>
          </div>
        </div>
        <button className="ask-close" onClick={() => setOpen(false)}>✕</button>
      </div>
      <div className="ask-messages">
        {messages.map((m, i) => (
          <div key={i} className={`ask-msg ${m.role}`}>
            {m.role === "assistant" && <div className="ask-msg-avatar">P</div>}
            <div className={`ask-msg-bubble ${m.role === 'assistant' ? 'neu-in' : 'neu-out-green'}`}>{m.text}</div>
          </div>
        ))}
        {loading && <div className="ask-msg assistant"><div className="ask-msg-bubble neu-in">...</div></div>}
        <div ref={bottomRef}/>
      </div>
      <div className="ask-input-row">
        <input
          className="ask-input neu-in"
          placeholder="Ask me anything..."
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={e => e.key === "Enter" && sendMessage()}
        />
        <button className="ask-send neu-out-green" onClick={() => sendMessage()} disabled={loading}>↑</button>
      </div>
    </div>
  );
}

/* ─── NAV ─── */
function Nav({ page, setPage, setChatOpen }) {
  const links = ["About", "Skills", "Experience", "Projects", "Contact"];
  return (
    <nav className="nav neu-out">
      <div className="nav-brand">
        <span className="nav-title">Pooja Sahu</span>
        <span className="nav-logo">PS.</span>
      </div>
      <ul className="nav-links">
        {links.map(l => (
          <li key={l}>
            <span
              className={`nav-link ${page === l ? "neu-in active" : ""}`}
              onClick={() => setPage(l)}
            >
              {l}
            </span>
          </li>
        ))}
      </ul>
      <button className="nav-cta neu-out-green" onClick={() => setChatOpen(p => !p)}>
        <span className="dot"></span> Let's Talk
      </button>
    </nav>
  );
}

/* ─── HOME & ABOUT (Combined look) ─── */
function About({ setPage }) {
  return (
    <main className="page about-page">
      <div className="about-grid">
        <div className="about-left neu-out">
          <div className="photo-wrap neu-in">
            <img src="/photo.jpeg" alt="Pooja Sahu" />
          </div>
          <div className="about-info">
            <div className="info-row"><span>LOCATION</span><span>Bhopal, MP, India</span></div>
            <div className="info-row"><span>DEGREE</span><span>B.Tech CS (AI-ML)</span></div>
            <div className="info-row"><span>UNIVERSITY</span><span>VIT Bhopal</span></div>
            <div className="info-row"><span>BATCH</span><span>2023 - 2027</span></div>
            <div className="info-row"><span>CGPA</span><span className="bold">8.93 / 10</span></div>
            <div className="info-row"><span>EMAIL</span><span>sahupooja43890@gmail.com</span></div>
          </div>
        </div>
        <div className="about-right neu-out">
          <h1 className="page-title">Who I Am</h1>
          <p className="page-sub">Passionate about building intelligent systems that create real impact.</p>
          <div className="about-text">
            <p>I am a <strong>B.Tech Computer Science (AI-ML)</strong> student at Vellore Institute of Technology, Bhopal, maintaining a CGPA of <strong>8.93 / 10</strong>. I combine deep research curiosity with practical engineering to deliver end-to-end AI solutions.</p>
            <p>With <strong>1+ year of Python development</strong> experience, I have built hybrid ML models published at international conferences and full-stack research platforms deployed on Vercel and HuggingFace Spaces.</p>
            <p>I regularly solve algorithmic problems on <strong>LeetCode (100+ solved)</strong> and stay up to date with <strong>Generative AI</strong>, RAG architectures, and large language models.</p>
          </div>
          <div className="chips-wrap">
            {["Deep Learning", "Computer Vision", "Full-Stack Dev", "Published Researcher", "Generative AI", "Mobile Dev", "Cloud (GCP)", "Agile"].map(c => (
              <span className="chip neu-out-sm" key={c}>{c}</span>
            ))}
          </div>
          <div className="about-actions">
            <button className="btn neu-out-green" onClick={() => setPage("Skills")}>View My Skills</button>
            <button className="btn neu-out-green" onClick={() => setPage("Projects")}>See Projects</button>
            <a href="https://www.linkedin.com/in/pooja-sahu-54b5a7281/" target="_blank" rel="noreferrer" className="btn neu-out-blue">Connect on LinkedIn</a>
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
      <div className="skills-grid">
        {SKILLS.map(g => (
          <div className="skill-card neu-out" key={g.title}>
            <div className="skill-card-title">{g.title}</div>
            <div className="skill-pills">
              {g.pills.map(p => <span className="pill neu-out-green" key={p}>{p}</span>)}
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
    <main className="page experience-page">
      <div className="exp-grid">
        <div className="exp-left">
          <div className="timeline">
            <div className="timeline-item">
              <div className="tl-dot neu-out-green"></div>
              <div className="tl-card neu-out">
                <div className="tl-title">Work Experience</div>
              </div>
            </div>
            <div className="timeline-item">
              <div className="tl-card neu-out no-dot">
                <div className="tl-role">AI / ML Intern</div>
                <div className="tl-company">Amasqis.ai — Remote</div>
                <div className="tl-date">Apr 2025–Sep 2025</div>
              </div>
            </div>
            
            <div className="timeline-item mt-4">
              <div className="tl-dot neu-out-green"></div>
              <div className="tl-card neu-out">
                <div className="tl-title">Academic Background</div>
              </div>
            </div>
            <div className="timeline-item">
              <div className="tl-card neu-out no-dot">
                <div className="tl-role">Bachelor of Technology — Computer Science (AI-ML)</div>
                <div className="tl-company">Vellore Institute of Technology, Bhopal</div>
                <div className="tl-date">Sep 2023–Aug 2027</div>
                <div className="tl-cgpa">CGPA: <strong>8.87</strong> / 10</div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="exp-right">
          <div className="certs-list">
            {CERTS.map(c => (
              <a href={c.certUrl} target="_blank" rel="noreferrer" className="cert-card neu-out" key={c.name}>
                <div className="cert-icon neu-in">
                  {c.issuer === "Publication" ? "📄" : "🏆"}
                </div>
                <div>
                  <div className="cert-name">{c.name}</div>
                  <div className="cert-issuer">{c.issuer}</div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}

/* ─── PROJECTS ─── */
function Projects() {
  return (
    <main className="page">
      <h2 className="section-heading">Things I've Built</h2>
      <div className="projects-grid">
        {PROJECTS.map(p => (
          <div className="project-card neu-out" key={p.title}>
            {p.badge && <div className="project-badge">{p.badge}</div>}
            <h3 className="project-title">{p.title}</h3>
            <p className="project-desc">{p.subtitle}</p>
            <div className="project-tags">
              {p.tags.map(t => <span className="tag neu-out-sm" key={t}>{t}</span>)}
            </div>
            <div className="project-links">
              {p.liveUrl && <a href={p.liveUrl} target="_blank" rel="noreferrer" className="btn-sm neu-out">Live Demo</a>}
              {p.githubUrl && <a href={p.githubUrl} target="_blank" rel="noreferrer" className="btn-sm neu-out">GitHub</a>}
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
    <main className="page contact-page">
      <div className="contact-banner neu-out">
        <div>
          <h2 className="contact-title">Get In Touch</h2>
          <p className="contact-sub">Open to internships, research collaborations, and exciting AI/ML projects.</p>
        </div>
        <div className="contact-links">
          <a href="mailto:sahupooja43890@gmail.com" className="contact-link neu-out">
            <span className="icon">✉️</span> sahupooja43890@gmail.com
          </a>
          <a href="https://www.linkedin.com/in/pooja-sahu-54b5a7281/" target="_blank" rel="noreferrer" className="contact-link neu-out">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
          </a>
          <a href="https://github.com/Pooja0726" target="_blank" rel="noreferrer" className="contact-link neu-out">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
          </a>
        </div>
      </div>
    </main>
  );
}

/* ─── APP ─── */
export default function App() {
  const [page, setPage] = useState("About"); // Default to About to match the image
  const [chatOpen, setChatOpen] = useState(false);
  
  const pages = { 
    Home: About, // Route Home to About for this UI
    About, 
    Skills, 
    Experience, 
    Projects, 
    Contact 
  };
  
  const PageComponent = pages[page] || About;
  
  return (
    <>
      <div className="bg-shape shape1"></div>
      <div className="bg-shape shape2"></div>
      <div className="bg-shape shape3"></div>
      <div className="app-container" style={{ position: 'relative', zIndex: 1 }}>
      <Nav page={page} setPage={setPage} setChatOpen={setChatOpen} />
      <div className="page-wrap">
        <PageComponent setPage={setPage} />
      </div>
      <AskPoojaBot open={chatOpen} setOpen={setChatOpen} />
    </div>
    </>
  );
}