import { useEffect, useMemo, useRef, useState } from 'react'
import { projects } from './projects.js'
import { LINKS, ROLES, STATS, PILLARS, TECH, EXPERIENCE, CERTS, VENTURES } from './data.js'

const hue = (s) => [...s].reduce((a, c) => a * 31 + c.charCodeAt(0), 7) % 360
const init = (s) => s.replace(/[^A-Za-z]/g, '').slice(0, 2)
const reduced = () => typeof matchMedia !== 'undefined' && matchMedia('(prefers-reduced-motion: reduce)').matches

/* Logo with graceful monogram fallback so a broken image never shows */
function Logo({ src, name, size = 28, round = 8 }) {
  const [bad, setBad] = useState(!src)
  const st = { width: size, height: size, borderRadius: round }
  if (bad) return <i className="mono" style={{ ...st, background: `hsl(${hue(name)},55%,38%)`, fontSize: size * 0.4 }} aria-hidden="true">{init(name)}</i>
  return <img className="lg" style={st} src={src} alt="" loading="lazy" referrerPolicy="no-referrer" onError={() => setBad(true)} />
}

function CountUp({ n, s }) {
  const [v, setV] = useState(reduced() ? n : 0)
  const ref = useRef(null)
  useEffect(() => {
    if (reduced()) return
    const io = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return
      io.disconnect()
      const t0 = performance.now()
      const f = (t) => { const p = Math.min(1, (t - t0) / 1200); setV(Math.round(n * (1 - Math.pow(1 - p, 3)))); if (p < 1) requestAnimationFrame(f) }
      requestAnimationFrame(f)
    }, { threshold: 0.6 })
    io.observe(ref.current)
    return () => io.disconnect()
  }, [n])
  return <b ref={ref}>{v}{s}</b>
}

function Header({ theme, setTheme }) {
  const [open, setOpen] = useState(false)
  const go = [['work', 'Projects'], ['path', 'Experience'], ['stack', 'Technologies'], ['beyond', 'Beyond code']]
  return (
    <header className="hdr">
      <div className="w nav">
        <a className="brand" href="#top">Manju Reddy</a>
        <nav className={open ? 'open' : ''} aria-label="Primary">
          {go.map(([id, l]) => <a key={id} href={`#${id}`} onClick={() => setOpen(false)}>{l}</a>)}
        </nav>
        <div className="nr">
          <button className="ic" aria-label="Toggle light and dark theme" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>{theme === 'dark' ? '☀' : '☾'}</button>
          <a className="btn sm" href={LINKS.calendly} target="_blank" rel="noopener noreferrer">Book a call</a>
          <button className="ic burger" aria-label="Menu" aria-expanded={open} onClick={() => setOpen(!open)}>{open ? '✕' : '☰'}</button>
        </div>
      </div>
    </header>
  )
}

function Hero() {
  const [r, setR] = useState(0)
  useEffect(() => { if (reduced()) return; const id = setInterval(() => setR((x) => (x + 1) % ROLES.length), 2600); return () => clearInterval(id) }, [])
  return (
    <div className="hero" id="top">
      <div className="rise">
        <p className="kick">Remote Technical Lead · India, working with US teams</p>
        <h1>Manju Reddy</h1>
        <div className="role" aria-live="off">{ROLES[r]}</div>
        <p className="lead">I lead and build the systems behind AI products, from architecture and APIs to cloud delivery and production support. Nine years across web, mobile and cloud, with products serving 100K+ users and a habit of mentoring the engineers who build them with me.</p>
        <div className="cta">
          <a className="btn" href={LINKS.calendly} target="_blank" rel="noopener noreferrer">Book a 30-minute call</a>
          <a className="btn o" href={LINKS.resume} download>Download resume</a>
          <a className="btn o" href={`mailto:${LINKS.email}`}>Email me</a>
        </div>
        <div className="soc"><a href={LINKS.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a><a href={LINKS.github} target="_blank" rel="noopener noreferrer">GitHub</a></div>
      </div>
      <div className="ph rise d2">
        <img src="./17.png" alt="Portrait of Manju Reddy in a navy blazer" width="900" height="1062" />
        <div className="tag"><i></i>Open to remote Technical Lead roles</div>
      </div>
    </div>
  )
}

function Modal({ p, onClose }) {
  const ref = useRef(null)
  useEffect(() => { const d = ref.current; if (p && d && !d.open) d.showModal() }, [p])
  return (
    <dialog ref={ref} onClose={onClose} onClick={(e) => { if (e.target === ref.current) ref.current.close() }}>
      {p && (<>
        <button className="x" aria-label="Close" onClick={() => ref.current.close()}>✕</button>
        <img src={'./' + p.i} alt={`${p.t} preview`} />
        <div className="mb">
          <h3>{p.t}</h3>
          <div className="chips mt">{p.pl.map((x) => <span key={x}>{x}</span>)}{p.x && <span>{p.x}</span>}</div>
          <p>{p.d}</p>
          {p.r && <p className="res">{p.r}</p>}
          <div className="chips mt">{p.g.map((x) => <span key={x}>{x}</span>)}</div>
          <div className="cta">
            {p.l && <a className="btn" href={p.l} target="_blank" rel="noopener noreferrer">Visit project</a>}
            {p.l2 && <a className="btn o" href={p.l2} target="_blank" rel="noopener noreferrer">Mobile app</a>}
          </div>
        </div>
      </>)}
    </dialog>
  )
}

function Projects() {
  const [cat, setCat] = useState('All')
  const [q, setQ] = useState('')
  const [sel, setSel] = useState(null)
  const isAI = (p) => p.g.some((x) => /OpenAI|RAG|LLM|Vector|pgvector|Qdrant|Recommendation/i.test(x)) || /OpenAI|RAG/.test(p.d)
  const list = useMemo(() => projects
    .filter((p) => cat === 'All' || (cat === 'AI' ? isAI(p) : p.pl.includes(cat)))
    .filter((p) => !q || (p.t + ' ' + p.d + ' ' + p.g.join(' ')).toLowerCase().includes(q.toLowerCase().trim()))
    .sort((a, b) => b.f - a.f), [cat, q])
  return (
    <section id="work">
      <h2>Projects across web, mobile and AI</h2>
      <p className="sub">Product work from startups, enterprises and training platforms. Open any card for the full story and stack.</p>
      <div className="tools">
        {[['All', 'All projects'], ['Web', 'Web'], ['Mobile', 'Mobile'], ['AI', 'AI-powered']].map(([k, l]) => <button key={k} className="f" aria-pressed={cat === k} onClick={() => setCat(k)}>{l}</button>)}
        <input className="q" type="search" value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search projects or tech" aria-label="Search projects" />
      </div>
      <p className="pc" aria-live="polite">{list.length} of {projects.length} projects</p>
      <div className="grid">
        {list.map((p) => (
          <button key={p.id} className="card" onClick={() => setSel(p)}>
            <div className="im"><img loading="lazy" src={'./' + p.i} alt={`${p.t} preview`} /><span className="k">{p.pl.join(' · ')}</span>{p.f && <span className="k g">Featured</span>}</div>
            <div className="bd"><h3>{p.t}</h3><p>{p.d}</p>{p.r && <div className="res">{p.r}</div>}
              <div className="chips">{p.g.slice(0, 4).map((x) => <span key={x}>{x}</span>)}{p.g.length > 4 && <span>+{p.g.length - 4}</span>}</div></div>
          </button>
        ))}
      </div>
      {!list.length && <p className="sub">No projects match that search.</p>}
      <Modal p={sel} onClose={() => setSel(null)} />
    </section>
  )
}

function Experience() {
  return (
    <section id="path">
      <h2>Where I’ve led and built</h2>
      <p className="sub">Hands-on at every step, with ownership growing from features to platforms to teams.</p>
      <ol className="tl">
        {EXPERIENCE.map((e) => (
          <li key={e.co} className="ex">
            <div className="when">{e.date}{e.now && <span className="now">Current</span>}</div>
            <div className="exb">
              <div className="exh"><Logo src={e.logo} name={e.co} size={46} round={10} /><div><h3>{e.co}</h3><div className="rl">{e.role}</div></div></div>
              <ul>{e.d.map((x) => <li key={x}>{x}</li>)}</ul>
              <div className="chips">{e.s.map((x) => <span key={x}>{x}</span>)}</div>
            </div>
          </li>
        ))}
      </ol>
    </section>
  )
}

function Stack() {
  const all = Object.values(TECH).flat().filter((x) => x.i)
  const uniq = [...new Map(all.map((x) => [x.n, x])).values()]
  return (
    <section id="stack">
      <h2>Technologies</h2>
      <p className="sub">Everything I’ve shipped with, grouped by area.</p>
      <div className="mq" aria-hidden="true"><div className="mt2">{[...uniq, ...uniq].map((x, i) => <span key={i}><Logo src={x.i} name={x.n} size={34} round={8} /></span>)}</div></div>
      <div className="sk">
        {Object.entries(TECH).map(([k, v]) => (
          <div key={k}><h3>{k}</h3>
            <div className="bg">{v.map((x) => <span key={x.n}><Logo src={x.i} name={x.n} size={24} round={6} />{x.n}</span>)}</div></div>
        ))}
      </div>
    </section>
  )
}

export default function App() {
  const [theme, setTheme] = useState(() => { try { return localStorage.getItem('theme') } catch { return null } } )
  const [bar, setBar] = useState(0)
  useEffect(() => {
    const d = document.documentElement
    const t = theme || (matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
    d.dataset.theme = t
    try { if (theme) localStorage.setItem('theme', theme) } catch { /* storage unavailable */ }
  }, [theme])
  useEffect(() => {
    const f = () => { const h = document.documentElement; setBar((h.scrollTop / (h.scrollHeight - h.clientHeight)) * 100) }
    addEventListener('scroll', f, { passive: true }); return () => removeEventListener('scroll', f)
  }, [])
  const cur = theme || (typeof matchMedia !== 'undefined' && matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
  return (
    <>
      <div className="bar" style={{ width: bar + '%' }} />
      <Header theme={cur} setTheme={setTheme} />
      <main className="w">
        <Hero />
        <div className="stats">{STATS.map((s) => <div key={s.l}><CountUp n={s.n} s={s.s} /><span>{s.l}</span></div>)}</div>
        <section><h2>How I work</h2><p className="sub">The same four habits show up in every team I join.</p>
          <div className="ab">{PILLARS.map(([h, p]) => <div key={h}><h3>{h}</h3><p>{p}</p></div>)}</div></section>
        <Projects />
        <Experience />
        <Stack />
        <section><h2>Certifications</h2><div className="chips big">{CERTS.map((c) => <span key={c}>{c}</span>)}</div></section>
        <section id="beyond"><h2>Beyond the codebase</h2><p className="sub">I also build companies and train engineers, which keeps me close to hiring, teaching and business outcomes.</p>
          <div className="ven">{VENTURES.map(([h, p]) => <div key={h}><h3>{h}</h3><p>{p}</p></div>)}</div></section>
        <section id="contact"><div className="band"><div><h2>Hiring a Technical Lead?</h2><p>I’m available for remote roles with US companies, as well as technology collaborations and training engagements.</p></div>
          <div className="cta nm"><a className="btn" href={LINKS.calendly} target="_blank" rel="noopener noreferrer">Book a call</a><a className="btn o" href={`mailto:${LINKS.email}`}>{LINKS.email}</a></div></div></section>
      </main>
      <footer className="w ft"><span>© {new Date().getFullYear()} Manju Reddy</span><span><a href={`tel:${LINKS.phone}`}>{LINKS.phoneLabel}</a> · <a href={LINKS.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a> · <a href={LINKS.github} target="_blank" rel="noopener noreferrer">GitHub</a></span></footer>
    </>
  )
}
