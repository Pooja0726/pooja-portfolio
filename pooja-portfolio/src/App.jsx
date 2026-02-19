import { useState, useEffect } from "react";

/* ─────────────── DATA ─────────────── */
const NAV_LINKS = ["Home", "About", "Experience", "Projects", "Skills", "Contact"];

const PROJECTS = [
  {
    id: 1,
    emoji: "🧠",
    title: "Facial Expression Recognition",
    subtitle: "CNN + SVM · WCSC 2025 Published",
    desc: "Hybrid model using VGG16 + SVM achieving 84.40% accuracy on 35K+ images. Real-time webcam demo built with Streamlit.",
    tags: ["VGG16", "SVM", "TensorFlow", "Streamlit", "OpenCV"],
    stat: "84.4% Accuracy",
    color: "#a855f7",
    published: true,
  },
  {
    id: 2,
    emoji: "⚗️",
    title: "Chemical Equipment Visualizer",
    subtitle: "Django · React · PyQt5",
    desc: "Industrial sensor data visualization with real-time charts, automated PDF reports, and a standalone Windows .exe via PyInstaller.",
    tags: ["Django REST", "React", "PyQt5", "Railway", "PyInstaller"],
    stat: "Cross-platform App",
    color: "#06b6d4",
    published: false,
  },
  {
    id: 3,
    emoji: "📊",
    title: "OLA Analytics Dashboard",
    subtitle: "Power BI · SQL · Excel",
    desc: "Ride-sharing analytics on 50K+ records delivering insights on bookings, revenue, cancellations and driver satisfaction.",
    tags: ["Power BI", "SQL", "Excel"],
    stat: "+25% Efficiency",
    color: "#f59e0b",
    published: false,
  },
];

const SKILLS = {
  Languages: { icon: "💬", color: "#a855f7", items: ["Python", "Java", "C++", "SQL", "JavaScript", "HTML", "CSS"] },
  Frameworks: { icon: "🛠️", color: "#06b6d4", items: ["Django", "React", "Flutter", "TensorFlow", "Keras", "Streamlit", "Power BI"] },
  "Libraries & APIs": { icon: "📦", color: "#f59e0b", items: ["Pandas", "NumPy", "Matplotlib", "Seaborn", "Scikit-learn", "Gemini API"] },
  "AI / ML": { icon: "🤖", color: "#10b981", items: ["Deep Learning", "Machine Learning", "Generative AI", "RAG", "Ollama", "GCP", "Computer Vision"] },
};

/* ─────────────── STAR FIELD ─────────────── */
function Stars() {
  const stars = Array.from({ length: 120 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 2.5 + 0.5,
    delay: Math.random() * 4,
    dur: Math.random() * 3 + 2,
  }));
  return (
    <div style={{ position: "fixed", inset: 0, zIndex: 0, pointerEvents: "none", overflow: "hidden" }}>
      {stars.map((s) => (
        <div key={s.id} style={{
          position: "absolute", left: `${s.x}%`, top: `${s.y}%`,
          width: s.size, height: s.size, borderRadius: "50%",
          background: "white", opacity: 0,
          animation: `twinkle ${s.dur}s ${s.delay}s infinite alternate ease-in-out`,
        }} />
      ))}
    </div>
  );
}

/* ─────────────── FLOATING ORBS ─────────────── */
function Orbs() {
  return (
    <div style={{ position: "fixed", inset: 0, zIndex: 0, pointerEvents: "none", overflow: "hidden" }}>
      <div style={{ position: "absolute", width: 600, height: 600, borderRadius: "50%", background: "radial-gradient(circle, rgba(139,92,246,0.18) 0%, transparent 70%)", top: "-150px", left: "-100px", animation: "float1 8s ease-in-out infinite alternate" }} />
      <div style={{ position: "absolute", width: 500, height: 500, borderRadius: "50%", background: "radial-gradient(circle, rgba(6,182,212,0.12) 0%, transparent 70%)", bottom: "10%", right: "-80px", animation: "float2 10s ease-in-out infinite alternate" }} />
      <div style={{ position: "absolute", width: 400, height: 400, borderRadius: "50%", background: "radial-gradient(circle, rgba(168,85,247,0.1) 0%, transparent 70%)", top: "40%", left: "30%", animation: "float3 12s ease-in-out infinite alternate" }} />
    </div>
  );
}

/* ─────────────── GRID LINES ─────────────── */
function GridLines() {
  return (
    <div style={{ position: "fixed", inset: 0, zIndex: 0, pointerEvents: "none", opacity: 0.04 }}>
      <div style={{ width: "100%", height: "100%", backgroundImage: "linear-gradient(rgba(168,85,247,1) 1px, transparent 1px), linear-gradient(90deg, rgba(168,85,247,1) 1px, transparent 1px)", backgroundSize: "80px 80px" }} />
    </div>
  );
}

/* ─────────────── NAV ─────────────── */
function Nav({ active, setPage }) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 1000,
      padding: "0 60px", height: 70,
      display: "flex", alignItems: "center", justifyContent: "space-between",
      background: scrolled ? "rgba(7,5,20,0.9)" : "transparent",
      backdropFilter: scrolled ? "blur(20px)" : "none",
      borderBottom: scrolled ? "1px solid rgba(168,85,247,0.2)" : "none",
      transition: "all 0.4s ease",
    }}>
      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
        <div style={{
          width: 38, height: 38, borderRadius: 10,
          background: "linear-gradient(135deg, #a855f7, #06b6d4)",
          display: "flex", alignItems: "center", justifyContent: "center",
          fontFamily: "serif", fontSize: 18, fontWeight: 900, color: "white",
          boxShadow: "0 0 20px rgba(168,85,247,0.5)",
        }}>P</div>
        <span style={{ fontFamily: "'Exo 2', sans-serif", fontWeight: 700, fontSize: 17, color: "white", letterSpacing: "-0.01em" }}>Pooja Sahu</span>
      </div>
      <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
        {NAV_LINKS.map((l) => (
          <button key={l} onClick={() => setPage(l)} style={{
            background: active === l ? "rgba(168,85,247,0.2)" : "transparent",
            border: active === l ? "1px solid rgba(168,85,247,0.5)" : "1px solid transparent",
            color: active === l ? "#c084fc" : "rgba(255,255,255,0.6)",
            padding: "6px 16px", borderRadius: 8,
            fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 13.5, fontWeight: 500,
            cursor: "pointer", transition: "all 0.2s",
          }}
            onMouseEnter={e => { if (active !== l) { e.target.style.color = "white"; e.target.style.borderColor = "rgba(168,85,247,0.3)"; } }}
            onMouseLeave={e => { if (active !== l) { e.target.style.color = "rgba(255,255,255,0.6)"; e.target.style.borderColor = "transparent"; } }}
          >{l}</button>
        ))}
      </div>
    </nav>
  );
}

/* ─────────────── PAGE: HOME ─────────────── */
function HomePage({ setPage }) {
  const roles = ["AI/ML Engineer", "Published Researcher", "Full-Stack Developer", "Deep Learning Enthusiast"];
  const [roleIdx, setRoleIdx] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const t = setInterval(() => {
      setVisible(false);
      setTimeout(() => { setRoleIdx(i => (i + 1) % roles.length); setVisible(true); }, 400);
    }, 2500);
    return () => clearInterval(t);
  }, []);

  return (
    <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", padding: "100px 60px 60px", position: "relative", zIndex: 1 }}>
      <div style={{ maxWidth: 1300, margin: "0 auto", width: "100%", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }}>

        {/* LEFT */}
        <div>
          {/* Available badge */}
          <div style={{
            display: "inline-flex", alignItems: "center", gap: 8, marginBottom: 32,
            background: "rgba(168,85,247,0.15)", border: "1px solid rgba(168,85,247,0.4)",
            padding: "7px 18px", borderRadius: 100,
            animation: "fadeUp 0.6s ease both",
          }}>
            <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#a855f7", display: "inline-block", boxShadow: "0 0 8px #a855f7", animation: "pulse 2s infinite" }} />
            <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 12, fontWeight: 600, color: "#c084fc", letterSpacing: "0.1em", textTransform: "uppercase" }}>Open to Opportunities</span>
          </div>

          {/* Greeting */}
          <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 15, color: "rgba(255,255,255,0.5)", marginBottom: 8, animation: "fadeUp 0.6s 0.1s ease both", opacity: 0, animationFillMode: "forwards" }}>Hello! I Am</p>

          {/* Name */}
          <h1 style={{
            fontFamily: "'Exo 2', sans-serif",
            fontSize: "clamp(52px, 7vw, 88px)",
            fontWeight: 900, lineHeight: 1.0,
            letterSpacing: "-0.03em", marginBottom: 16,
            animation: "fadeUp 0.6s 0.15s ease both", opacity: 0, animationFillMode: "forwards",
            background: "linear-gradient(135deg, #ffffff 0%, #e9d5ff 50%, #a855f7 100%)",
            WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
          }}>
            Pooja<br />Sahu
          </h1>

          {/* Role rotator */}
          <div style={{ marginBottom: 24, height: 36, animation: "fadeUp 0.6s 0.2s ease both", opacity: 0, animationFillMode: "forwards" }}>
            <span style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 20, fontWeight: 600,
              color: "#06b6d4",
              transition: "opacity 0.4s, transform 0.4s",
              opacity: visible ? 1 : 0,
              display: "inline-block",
              transform: visible ? "translateY(0)" : "translateY(-10px)",
            }}>
              {roles[roleIdx]}
            </span>
          </div>

          {/* Uni badge */}
          <div style={{
            display: "inline-flex", alignItems: "center", gap: 10, marginBottom: 28,
            background: "rgba(6,182,212,0.1)", border: "1px solid rgba(6,182,212,0.3)",
            padding: "10px 18px", borderRadius: 12,
            animation: "fadeUp 0.6s 0.25s ease both", opacity: 0, animationFillMode: "forwards",
          }}>
            <span style={{ fontSize: 20 }}>🎓</span>
            <div>
              <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 13, fontWeight: 700, color: "#67e8f9" }}>Vellore Institute of Technology</div>
              <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 11, color: "rgba(255,255,255,0.5)" }}>B.Tech CSE (AI-ML) · CGPA 8.87/10 · 2023–2027</div>
            </div>
          </div>

          <p style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 15, color: "rgba(255,255,255,0.55)",
            lineHeight: 1.85, marginBottom: 40, maxWidth: 480,
            animation: "fadeUp 0.6s 0.3s ease both", opacity: 0, animationFillMode: "forwards",
          }}>
            AI/ML student with 1+ years of Python development experience. Published researcher at WCSC 2025. Building end-to-end ML solutions, RESTful APIs, and analytics dashboards. 100+ LeetCode problems solved.
          </p>

          {/* Buttons */}
          <div style={{ display: "flex", gap: 14, flexWrap: "wrap", animation: "fadeUp 0.6s 0.35s ease both", opacity: 0, animationFillMode: "forwards" }}>
            <button onClick={() => setPage("Projects")} style={{
              background: "linear-gradient(135deg, #a855f7, #7c3aed)",
              border: "none", color: "white", padding: "13px 28px", borderRadius: 12,
              fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 14, fontWeight: 700,
              cursor: "pointer", boxShadow: "0 0 30px rgba(168,85,247,0.4)", transition: "all 0.3s",
            }}
              onMouseEnter={e => { e.target.style.transform = "translateY(-3px)"; e.target.style.boxShadow = "0 0 50px rgba(168,85,247,0.6)"; }}
              onMouseLeave={e => { e.target.style.transform = "translateY(0)"; e.target.style.boxShadow = "0 0 30px rgba(168,85,247,0.4)"; }}
            >
              View My Work ✦
            </button>
            <button onClick={() => setPage("Contact")} style={{
              background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.2)",
              color: "white", padding: "13px 28px", borderRadius: 12,
              fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 14, fontWeight: 600,
              cursor: "pointer", transition: "all 0.3s",
            }}
              onMouseEnter={e => { e.target.style.borderColor = "rgba(168,85,247,0.6)"; e.target.style.background = "rgba(168,85,247,0.1)"; }}
              onMouseLeave={e => { e.target.style.borderColor = "rgba(255,255,255,0.2)"; e.target.style.background = "rgba(255,255,255,0.07)"; }}
            >
              Contact Me →
            </button>
          </div>

          {/* Socials row */}
          <div style={{ display: "flex", gap: 10, marginTop: 28, flexWrap: "wrap", animation: "fadeUp 0.6s 0.4s ease both", opacity: 0, animationFillMode: "forwards" }}>
            {[
              ["in", "LinkedIn", "#0077b5", "https://www.linkedin.com/in/pooja-sahu-54b5a7281/"],
              ["⌥", "GitHub", "#a855f7", "https://github.com/Pooja0726"],
              ["◈", "LeetCode", "#f59e0b", "https://leetcode.com/u/phius12345/"],
              ["📞", "+91 9302445014", "#10b981", "tel:9302445014"],
            ].map(([icon, label, color, url]) => (
              <a key={label} href={url} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>
                <span style={{
                  display: "inline-flex", alignItems: "center", gap: 6,
                  padding: "6px 14px", borderRadius: 8,
                  background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.12)",
                  fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 12, fontWeight: 500,
                  color: "rgba(255,255,255,0.7)", cursor: "pointer", transition: "all 0.2s",
                }}
                  onMouseEnter={e => { e.currentTarget.style.background = `${color}20`; e.currentTarget.style.borderColor = `${color}50`; e.currentTarget.style.color = color; }}
                  onMouseLeave={e => { e.currentTarget.style.background = "rgba(255,255,255,0.05)"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.12)"; e.currentTarget.style.color = "rgba(255,255,255,0.7)"; }}
                >
                  <span style={{ color }}>{icon}</span> {label}
                </span>
              </a>
            ))}
          </div>
        </div>

        {/* RIGHT — avatar + stats */}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 24 }}>
          {/* Avatar */}
          <div style={{ position: "relative", animation: "fadeUp 0.6s 0.45s ease both", opacity: 0, animationFillMode: "forwards" }}>
            <div style={{
              width: 220, height: 220, borderRadius: "50%",
              background: "linear-gradient(135deg, #a855f7 0%, #06b6d4 50%, #a855f7 100%)",
              padding: 4, boxShadow: "0 0 60px rgba(168,85,247,0.5), 0 0 120px rgba(168,85,247,0.2)",
              animation: "rotateBorder 6s linear infinite",
            }}>
              <div style={{
                width: "100%", height: "100%", borderRadius: "50%",
                background: "linear-gradient(135deg, #1e1040, #0f0a2e)",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: 80,
              }}>👩‍💻</div>
            </div>
            {/* Orbiting dot */}
            <div style={{ position: "absolute", inset: -16, borderRadius: "50%", border: "2px dashed rgba(168,85,247,0.3)", animation: "orbit 8s linear infinite" }}>
              <div style={{ position: "absolute", top: -5, left: "50%", width: 10, height: 10, borderRadius: "50%", background: "#a855f7", boxShadow: "0 0 10px #a855f7", transform: "translateX(-50%)" }} />
            </div>
          </div>

          {/* Stats cards */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14, width: "100%", maxWidth: 400, animation: "fadeUp 0.6s 0.55s ease both", opacity: 0, animationFillMode: "forwards" }}>
            {[
              { val: "8.87", label: "CGPA", color: "#a855f7", glow: "rgba(168,85,247,0.3)" },
              { val: "84.4%", label: "Research Accuracy", color: "#06b6d4", glow: "rgba(6,182,212,0.3)" },
              { val: "100+", label: "LeetCode Solved", color: "#f59e0b", glow: "rgba(245,158,11,0.3)" },
              { val: "30%", label: "Efficiency Improved", color: "#10b981", glow: "rgba(16,185,129,0.3)" },
            ].map((s) => (
              <div key={s.label} style={{
                background: "rgba(255,255,255,0.04)", border: `1px solid ${s.color}40`,
                borderRadius: 16, padding: "20px 16px", textAlign: "center",
                boxShadow: `0 0 20px ${s.glow}`, transition: "transform 0.3s, box-shadow 0.3s",
              }}
                onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.boxShadow = `0 0 40px ${s.glow}`; }}
                onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = `0 0 20px ${s.glow}`; }}
              >
                <div style={{ fontFamily: "'Exo 2', sans-serif", fontSize: 28, fontWeight: 800, color: s.color, lineHeight: 1 }}>{s.val}</div>
                <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 11, color: "rgba(255,255,255,0.5)", marginTop: 6 }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─────────────── PAGE: ABOUT ─────────────── */
function AboutPage() {
  return (
    <div style={{ minHeight: "100vh", padding: "120px 60px 80px", position: "relative", zIndex: 1 }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <PageHeader num="01" title="About" accent="Me" />
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, alignItems: "start" }}>
          <div>
            <GlowCard color="#a855f7">
              <div style={{ fontSize: 48, marginBottom: 20 }}>👩‍💻</div>
              <h3 style={{ fontFamily: "'Exo 2', sans-serif", fontSize: 24, fontWeight: 800, color: "white", marginBottom: 16 }}>Pooja Sahu</h3>
              <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 14.5, color: "rgba(255,255,255,0.6)", lineHeight: 1.85, marginBottom: 20 }}>
                AI/ML student at Vellore Institute of Technology, Bhopal with a CGPA of 8.87. Passionate about building intelligent systems that solve real-world problems — from published computer vision research to full-stack production apps.
              </p>
              <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 14.5, color: "rgba(255,255,255,0.6)", lineHeight: 1.85 }}>
                I specialize in deep learning, generative AI, and end-to-end ML pipelines. Strong problem solver with 100+ LeetCode solutions and collaborative Agile experience.
              </p>
            </GlowCard>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <GlowCard color="#06b6d4" padding="24px 28px">
              <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
                <span style={{ fontSize: 32 }}>🎓</span>
                <div>
                  <div style={{ fontFamily: "'Exo 2', sans-serif", fontSize: 17, fontWeight: 700, color: "white" }}>Vellore Institute of Technology</div>
                  <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 13, color: "#67e8f9" }}>B.Tech CSE (AI-ML) · 2023 – 2027</div>
                  <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 12, color: "rgba(255,255,255,0.4)", marginTop: 2 }}>Bhopal, Madhya Pradesh · CGPA: 8.87/10</div>
                </div>
              </div>
              <div style={{ marginTop: 16, background: "rgba(6,182,212,0.1)", borderRadius: 8, height: 6, overflow: "hidden" }}>
                <div style={{ height: "100%", width: "88.7%", background: "linear-gradient(to right, #06b6d4, #a855f7)", borderRadius: 8 }} />
              </div>
            </GlowCard>
            {[
              { icon: "🔬", label: "Publication", val: "WCSC 2025 — Facial Expression Recognition", color: "#a855f7" },
              { icon: "💼", label: "Experience", val: "AI/ML Intern at Amasqis.ai (Mar–Sep 2025)", color: "#f59e0b" },
              { icon: "⚡", label: "Specialization", val: "Deep Learning · Generative AI · Computer Vision", color: "#10b981" },
              { icon: "📍", label: "Location", val: "Bhopal, Madhya Pradesh, India", color: "#ec4899" },
            ].map((item) => (
              <GlowCard key={item.label} color={item.color} padding="18px 22px">
                <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                  <div style={{ width: 40, height: 40, borderRadius: 10, background: `${item.color}20`, border: `1px solid ${item.color}40`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18 }}>{item.icon}</div>
                  <div>
                    <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 10, fontWeight: 700, color: item.color, textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 3 }}>{item.label}</div>
                    <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 13.5, fontWeight: 600, color: "rgba(255,255,255,0.85)" }}>{item.val}</div>
                  </div>
                </div>
              </GlowCard>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─────────────── PAGE: EXPERIENCE ─────────────── */
function ExperiencePage() {
  return (
    <div style={{ minHeight: "100vh", padding: "120px 60px 80px", position: "relative", zIndex: 1 }}>
      <div style={{ maxWidth: 1000, margin: "0 auto" }}>
        <PageHeader num="02" title="Work" accent="Experience" />
        <GlowCard color="#a855f7" padding="0">
          <div style={{ padding: "32px 40px", borderBottom: "1px solid rgba(168,85,247,0.2)", background: "rgba(168,85,247,0.05)", display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
            <div>
              <div style={{ display: "inline-flex", alignItems: "center", gap: 8, marginBottom: 12, background: "rgba(168,85,247,0.15)", border: "1px solid rgba(168,85,247,0.4)", padding: "4px 12px", borderRadius: 100 }}>
                <span style={{ width: 6, height: 6, background: "#a855f7", borderRadius: "50%", boxShadow: "0 0 6px #a855f7" }} />
                <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 10, fontWeight: 700, color: "#c084fc", textTransform: "uppercase", letterSpacing: "0.1em" }}>AI/ML Intern</span>
              </div>
              <div style={{ fontFamily: "'Exo 2', sans-serif", fontSize: 28, fontWeight: 800, color: "white" }}>Amasqis.ai</div>
              <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 14, color: "#06b6d4", fontWeight: 500, marginTop: 4 }}>Financial AI Platform</div>
            </div>
            <div style={{ textAlign: "right" }}>
              <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 12, color: "rgba(255,255,255,0.4)", marginBottom: 6 }}>Mar 2025 – Sep 2025</div>
              <div style={{ display: "inline-block", background: "rgba(6,182,212,0.15)", border: "1px solid rgba(6,182,212,0.4)", color: "#67e8f9", fontSize: 11, fontWeight: 700, padding: "4px 12px", borderRadius: 100, textTransform: "uppercase", letterSpacing: "0.08em" }}>🌐 Remote</div>
            </div>
          </div>
          <div style={{ padding: "32px 40px" }}>
            {[
              { text: "Designed user-friendly interfaces for a financial AI platform serving", highlight: "500+ customers", rest: ", creating 15+ dashboard components presenting insights and metrics." },
              { text: "Improved decision-making efficiency by", highlight: "30%", rest: " through actionable analytics and clear data visualization layers." },
              { text: "Collaborated in", highlight: "Agile sprints", rest: " with cross-functional teams to implement AI-driven features and integrate user feedback for enhanced UI/UX." },
            ].map((point, i) => (
              <div key={i} style={{ display: "flex", gap: 16, marginBottom: 20 }}>
                <div style={{ width: 8, height: 8, minWidth: 8, borderRadius: "50%", background: "linear-gradient(135deg, #a855f7, #06b6d4)", marginTop: 8, boxShadow: "0 0 8px rgba(168,85,247,0.6)" }} />
                <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 14.5, color: "rgba(255,255,255,0.65)", lineHeight: 1.75 }}>
                  {point.text} <span style={{ color: "#c084fc", fontWeight: 700 }}>{point.highlight}</span>{point.rest}
                </p>
              </div>
            ))}
            <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 28 }}>
              {["AI Dashboard Design", "Agile / Scrum", "UI/UX", "Data Visualization", "Python"].map(tag => (
                <span key={tag} style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 11, fontWeight: 600, padding: "5px 13px", borderRadius: 100, background: "rgba(168,85,247,0.15)", border: "1px solid rgba(168,85,247,0.35)", color: "#c084fc" }}>{tag}</span>
              ))}
            </div>
          </div>
        </GlowCard>
        <div style={{ marginTop: 32, textAlign: "center" }}>
          <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 13, color: "rgba(255,255,255,0.3)", fontStyle: "italic" }}>
            ✦ More experience coming as I grow · Open to new opportunities ✦
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─────────────── PAGE: PROJECTS ─────────────── */
function ProjectsPage() {
  return (
    <div style={{ minHeight: "100vh", padding: "120px 60px 80px", position: "relative", zIndex: 1 }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <PageHeader num="03" title="Featured" accent="Projects" />
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 22 }}>
          {PROJECTS.map((p, i) => (
            <div key={p.id} style={{
              background: "rgba(255,255,255,0.03)", border: `1px solid ${p.color}30`,
              borderRadius: 20, padding: 28,
              display: "flex", flexDirection: "column", gap: 16,
              boxShadow: `0 0 30px ${p.color}15`,
              transition: "all 0.35s cubic-bezier(0.34,1.56,0.64,1)",
              animation: `fadeUp 0.6s ${i * 0.12}s ease both`,
              opacity: 0, animationFillMode: "forwards",
              position: "relative", overflow: "hidden",
            }}
              onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-8px)"; e.currentTarget.style.boxShadow = `0 0 60px ${p.color}30, 0 20px 60px rgba(0,0,0,0.3)`; e.currentTarget.style.borderColor = `${p.color}60`; }}
              onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = `0 0 30px ${p.color}15`; e.currentTarget.style.borderColor = `${p.color}30`; }}
            >
              <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 2, background: `linear-gradient(to right, transparent, ${p.color}, transparent)` }} />
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                <div style={{ width: 54, height: 54, borderRadius: 14, background: `${p.color}20`, border: `1px solid ${p.color}40`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 26 }}>{p.emoji}</div>
                {p.published && <div style={{ background: "rgba(245,158,11,0.15)", border: "1px solid rgba(245,158,11,0.4)", color: "#fbbf24", fontSize: 10, fontWeight: 700, padding: "4px 10px", borderRadius: 100, letterSpacing: "0.06em" }}>★ PUBLISHED</div>}
              </div>
              <div>
                <div style={{ fontFamily: "'Exo 2', sans-serif", fontSize: 18, fontWeight: 800, color: "white", lineHeight: 1.25, marginBottom: 6 }}>{p.title}</div>
                <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 11, fontWeight: 600, color: p.color, textTransform: "uppercase", letterSpacing: "0.08em" }}>{p.subtitle}</div>
              </div>
              <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 13, color: "rgba(255,255,255,0.55)", lineHeight: 1.8, flex: 1 }}>{p.desc}</p>
              <div style={{ display: "flex", alignItems: "center", gap: 8, padding: "9px 14px", background: `${p.color}10`, borderRadius: 10, border: `1px solid ${p.color}25` }}>
                <span style={{ fontSize: 14 }}>📈</span>
                <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 12, fontWeight: 700, color: p.color }}>{p.stat}</span>
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                {p.tags.map(t => (
                  <span key={t} style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 10.5, fontWeight: 600, padding: "3px 10px", borderRadius: 6, background: `${p.color}15`, border: `1px solid ${p.color}30`, color: p.color }}>{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ─────────────── PAGE: SKILLS ─────────────── */
function SkillsPage() {
  return (
    <div style={{ minHeight: "100vh", padding: "120px 60px 80px", position: "relative", zIndex: 1 }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <PageHeader num="04" title="Technical" accent="Skills" />
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
          {Object.entries(SKILLS).map(([cat, { icon, color, items }], i) => (
            <div key={cat} style={{
              background: "rgba(255,255,255,0.03)", border: `1px solid ${color}30`,
              borderRadius: 20, padding: "28px 32px",
              boxShadow: `0 0 24px ${color}10`,
              animation: `fadeUp 0.6s ${i * 0.1}s ease both`,
              opacity: 0, animationFillMode: "forwards",
              transition: "box-shadow 0.3s, border-color 0.3s",
            }}
              onMouseEnter={e => { e.currentTarget.style.boxShadow = `0 0 50px ${color}25`; e.currentTarget.style.borderColor = `${color}55`; }}
              onMouseLeave={e => { e.currentTarget.style.boxShadow = `0 0 24px ${color}10`; e.currentTarget.style.borderColor = `${color}30`; }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 20 }}>
                <div style={{ width: 32, height: 32, borderRadius: 8, background: `${color}20`, border: `1px solid ${color}40`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 15 }}>{icon}</div>
                <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 11, fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: color }}>{cat}</div>
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                {items.map(skill => (
                  <span key={skill} style={{
                    fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 12.5, fontWeight: 500,
                    padding: "6px 14px", borderRadius: 8,
                    background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)",
                    color: "rgba(255,255,255,0.8)", cursor: "default", transition: "all 0.2s",
                  }}
                    onMouseEnter={e => { e.target.style.background = `${color}20`; e.target.style.borderColor = `${color}50`; e.target.style.color = color; e.target.style.transform = "translateY(-2px)"; }}
                    onMouseLeave={e => { e.target.style.background = "rgba(255,255,255,0.05)"; e.target.style.borderColor = "rgba(255,255,255,0.1)"; e.target.style.color = "rgba(255,255,255,0.8)"; e.target.style.transform = "translateY(0)"; }}
                  >{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div style={{ marginTop: 20, background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 20, padding: "24px 32px" }}>
          <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 11, fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(255,255,255,0.4)", marginBottom: 16 }}>✦ Soft Skills</div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
            {["Problem Solving", "Team Collaboration", "Communication", "Leadership", "Critical Thinking", "Agile / Scrum"].map(s => (
              <span key={s} style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 13, fontWeight: 500, padding: "7px 18px", borderRadius: 100, background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.12)", color: "rgba(255,255,255,0.7)" }}>{s}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─────────────── PAGE: CONTACT ─────────────── */
function ContactPage() {
  return (
    <div style={{ minHeight: "100vh", padding: "120px 60px 80px", position: "relative", zIndex: 1, display: "flex", alignItems: "center" }}>
      <div style={{ maxWidth: 1000, margin: "0 auto", width: "100%" }}>
        <PageHeader num="05" title="Get In" accent="Touch" />
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32 }}>
          <GlowCard color="#a855f7" padding="40px">
            <div style={{ fontFamily: "'Exo 2', sans-serif", fontSize: 32, fontWeight: 800, color: "white", marginBottom: 12, lineHeight: 1.2 }}>
              Let's build something <span style={{ background: "linear-gradient(135deg, #a855f7, #06b6d4)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>amazing</span> together
            </div>
            <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 14, color: "rgba(255,255,255,0.5)", lineHeight: 1.85, marginBottom: 28 }}>
              Whether it's a research collaboration, internship, or a cool AI project — I'd love to hear from you!
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {[
                { icon: "✉️", label: "Email", val: "sahupooja43890@gmail.com", color: "#a855f7" },
                { icon: "📞", label: "Phone", val: "+91 9302445014", color: "#06b6d4" },
                { icon: "📍", label: "Location", val: "Bhopal, Madhya Pradesh, India", color: "#10b981" },
              ].map(item => (
                <div key={item.label} style={{ display: "flex", gap: 14, alignItems: "center", padding: "14px 18px", background: `${item.color}10`, border: `1px solid ${item.color}25`, borderRadius: 12 }}>
                  <div style={{ width: 38, height: 38, borderRadius: 10, background: `${item.color}20`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 17 }}>{item.icon}</div>
                  <div>
                    <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 10, fontWeight: 700, color: item.color, textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 2 }}>{item.label}</div>
                    <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 13, fontWeight: 600, color: "rgba(255,255,255,0.85)" }}>{item.val}</div>
                  </div>
                </div>
              ))}
            </div>
          </GlowCard>

          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            {[
              { icon: "💼", platform: "LinkedIn", desc: "Connect professionally", color: "#0077b5", url: "https://www.linkedin.com/in/pooja-sahu-54b5a7281/" },
              { icon: "⌥", platform: "GitHub", desc: "Explore my repositories", color: "#a855f7", url: "https://github.com/Pooja0726" },
              { icon: "◈", platform: "LeetCode", desc: "See my problem solutions", color: "#f59e0b", url: "https://leetcode.com/u/phius12345/" },
            ].map(link => (
              <a key={link.platform} href={link.url} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>
                <div style={{
                  display: "flex", alignItems: "center", gap: 18,
                  padding: "22px 26px", background: "rgba(255,255,255,0.03)",
                  border: `1px solid ${link.color}30`, borderRadius: 16,
                  transition: "all 0.3s", cursor: "pointer",
                }}
                  onMouseEnter={e => { e.currentTarget.style.transform = "translateX(8px)"; e.currentTarget.style.background = `${link.color}10`; e.currentTarget.style.borderColor = `${link.color}55`; e.currentTarget.style.boxShadow = `0 0 30px ${link.color}20`; }}
                  onMouseLeave={e => { e.currentTarget.style.transform = "translateX(0)"; e.currentTarget.style.background = "rgba(255,255,255,0.03)"; e.currentTarget.style.borderColor = `${link.color}30`; e.currentTarget.style.boxShadow = "none"; }}
                >
                  <div style={{ width: 50, height: 50, borderRadius: 14, background: `${link.color}20`, border: `1px solid ${link.color}40`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22, color: link.color }}>{link.icon}</div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontFamily: "'Exo 2', sans-serif", fontSize: 17, fontWeight: 700, color: "white" }}>{link.platform}</div>
                    <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 12, color: "rgba(255,255,255,0.45)" }}>{link.desc}</div>
                  </div>
                  <span style={{ color: "rgba(255,255,255,0.3)", fontSize: 20 }}>→</span>
                </div>
              </a>
            ))}

            <div style={{ marginTop: 8, padding: "22px 26px", background: "linear-gradient(135deg, rgba(168,85,247,0.15), rgba(6,182,212,0.15))", border: "1px solid rgba(168,85,247,0.4)", borderRadius: 16, textAlign: "center" }}>
              <div style={{ fontFamily: "'Exo 2', sans-serif", fontSize: 16, fontWeight: 700, color: "white", marginBottom: 6 }}>Currently Available</div>
              <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 12, color: "rgba(255,255,255,0.5)" }}>Open to internships, research collaborations &amp; freelance projects</div>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 6, marginTop: 12 }}>
                <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#10b981", boxShadow: "0 0 10px #10b981", animation: "pulse 2s infinite", display: "inline-block" }} />
                <span style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 12, fontWeight: 600, color: "#34d399" }}>Available for hire</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─────────────── HELPERS ─────────────── */
function PageHeader({ num, title, accent }) {
  return (
    <div style={{ marginBottom: 52 }}>
      <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 11, fontWeight: 700, letterSpacing: "0.25em", textTransform: "uppercase", color: "rgba(168,85,247,0.7)", marginBottom: 12, display: "flex", alignItems: "center", gap: 12 }}>
        <span style={{ fontFamily: "'Exo 2', sans-serif", color: "#a855f7" }}>{num}</span>
        <div style={{ height: 1, width: 40, background: "linear-gradient(to right, #a855f7, transparent)" }} />
        <span>Section</span>
      </div>
      <h2 style={{ fontFamily: "'Exo 2', sans-serif", fontSize: "clamp(32px, 4vw, 56px)", fontWeight: 900, letterSpacing: "-0.02em", lineHeight: 1.1 }}>
        <span style={{ color: "white" }}>{title} </span>
        <span style={{ background: "linear-gradient(135deg, #a855f7, #06b6d4)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>{accent}</span>
      </h2>
    </div>
  );
}

function GlowCard({ children, color = "#a855f7", padding = "32px" }) {
  return (
    <div style={{
      background: "rgba(255,255,255,0.03)", border: `1px solid ${color}30`,
      borderRadius: 20, padding,
      boxShadow: `0 0 30px ${color}15`,
      transition: "box-shadow 0.3s",
      position: "relative", overflow: "hidden",
    }}>
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 2, background: `linear-gradient(to right, transparent, ${color}, transparent)` }} />
      {children}
    </div>
  );
}

/* ─────────────── ROOT APP ─────────────── */
export default function App() {
  const [page, setPage] = useState("Home");

  const pages = {
    Home: <HomePage setPage={setPage} />,
    About: <AboutPage />,
    Experience: <ExperiencePage />,
    Projects: <ProjectsPage />,
    Skills: <SkillsPage />,
    Contact: <ContactPage />,
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Exo+2:wght@400;600;700;800;900&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body { background: #07051a; color: white; overflow-x: hidden; }
        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-track { background: #07051a; }
        ::-webkit-scrollbar-thumb { background: rgba(168,85,247,0.5); border-radius: 2px; }
        @keyframes twinkle { from{opacity:0} to{opacity:0.9} }
        @keyframes fadeUp { from{opacity:0;transform:translateY(24px)} to{opacity:1;transform:translateY(0)} }
        @keyframes pulse { 0%,100%{transform:scale(1);opacity:1} 50%{transform:scale(0.7);opacity:0.5} }
        @keyframes float1 { from{transform:translate(0,0)} to{transform:translate(30px,40px)} }
        @keyframes float2 { from{transform:translate(0,0)} to{transform:translate(-40px,-30px)} }
        @keyframes float3 { from{transform:translate(0,0)} to{transform:translate(20px,-25px)} }
        @keyframes orbit { from{transform:rotate(0deg)} to{transform:rotate(360deg)} }
        @keyframes rotateBorder { from{transform:rotate(0deg)} to{transform:rotate(360deg)} }
      `}</style>

      <div style={{ position: "fixed", inset: 0, background: "radial-gradient(ellipse 900px 700px at 15% 10%, rgba(88,28,220,0.25) 0%, transparent 60%), radial-gradient(ellipse 700px 600px at 85% 80%, rgba(6,182,212,0.12) 0%, transparent 60%), #07051a", zIndex: 0 }} />
      <Stars />
      <GridLines />
      <Orbs />

      <Nav active={page} setPage={setPage} />

      <div key={page} style={{ animation: "fadeUp 0.5s ease both" }}>
        {pages[page]}
      </div>

      {/* Bottom dot navigation */}
      <div style={{
        position: "fixed", bottom: 28, left: "50%", transform: "translateX(-50%)",
        display: "flex", gap: 8, zIndex: 1000,
        background: "rgba(7,5,26,0.85)", backdropFilter: "blur(20px)",
        border: "1px solid rgba(168,85,247,0.25)", borderRadius: 100, padding: "8px 16px",
      }}>
        {NAV_LINKS.map((l) => (
          <button key={l} onClick={() => setPage(l)} title={l} style={{
            width: page === l ? 28 : 8, height: 8, borderRadius: 100,
            background: page === l ? "linear-gradient(to right, #a855f7, #06b6d4)" : "rgba(255,255,255,0.2)",
            border: "none", cursor: "pointer",
            transition: "all 0.35s cubic-bezier(0.34,1.56,0.64,1)",
            boxShadow: page === l ? "0 0 10px rgba(168,85,247,0.7)" : "none",
          }} />
        ))}
      </div>
    </>
  );
}