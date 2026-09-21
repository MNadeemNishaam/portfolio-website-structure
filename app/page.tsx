'use client'

import { useState } from 'react'
import {
  ArrowUpRight,
  Check,
  ChevronDown,
  Cpu,
  Database,
  FileSearch,
  Menu,
  MonitorCheck,
  ScanLine,
  X,
  Zap,
} from 'lucide-react'

const services = [
  { icon: MonitorCheck, number: '01', title: 'Smart CCTV & site monitoring', text: 'Automated safety checks, real-time alerts, and private edge processing without recurring cloud fees.' },
  { icon: ScanLine, number: '02', title: 'Automated quality control', text: 'Visual defect detection and auditing systems that keep your production line moving accurately.' },
  { icon: FileSearch, number: '03', title: 'Paper to digital pipelines', text: 'Extract invoices, forms, and records into searchable, structured databases automatically.' },
  { icon: Database, number: '04', title: 'Internal business search', text: 'Secure AI search for private files, operational manuals, and company knowledge.' },
  { icon: Cpu, number: '05', title: 'Custom apps & dashboards', text: 'Tailored web apps, real-time KPI dashboards, and management portals built around your workflow.' },
  { icon: Zap, number: '06', title: 'Process automation', text: 'Connect your tools, trigger the right actions, and eliminate repetitive admin work.' },
]

const cases = [
  { tag: 'Manufacturing · Computer vision', title: 'A second set of eyes on every item.', problem: 'Manual visual checks took 15 hours every week and still missed defects.', result: '99.2% accuracy', detail: '60+ hours saved monthly', accent: 'case-lime' },
  { tag: 'Operations · Knowledge systems', title: 'Answers from the company brain.', problem: 'Teams lost time digging through disconnected manuals and shared drives.', result: '4× faster answers', detail: 'Private, permission-aware search', accent: 'case-blue' },
  { tag: 'Facilities · Edge monitoring', title: 'Safety alerts without the cloud bill.', problem: 'A multi-site operator needed reliable monitoring with sensitive footage kept private.', result: 'Zero cloud fees', detail: 'Real-time edge alerts', accent: 'case-orange' },
]

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  return (
    <main>
      <nav className="nav-shell" aria-label="Main navigation">
        <a className="brand" href="#top" aria-label="Northstar Systems home"><span className="brand-mark">N</span>northstar<span className="brand-dot">.</span></a>
        <div className={`nav-links ${menuOpen ? 'is-open' : ''}`}>
          <a href="#services" onClick={() => setMenuOpen(false)}>Services</a>
          <a href="#work" onClick={() => setMenuOpen(false)}>Selected work</a>
          <a href="#process" onClick={() => setMenuOpen(false)}>Process</a>
          <a href="#contact" className="nav-cta" onClick={() => setMenuOpen(false)}>Start a project <ArrowUpRight size={15} /></a>
        </div>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Close menu' : 'Open menu'} aria-expanded={menuOpen}>{menuOpen ? <X /> : <Menu />}</button>
      </nav>

      <section className="hero section-pad" id="top">
        <div className="hero-gridline" aria-hidden="true" />
        <div className="eyebrow"><span className="pulse" /> Independent software studio · 2026</div>
        <h1>Make the work<br /><em>work harder.</em></h1>
        <div className="hero-bottom">
          <p className="hero-copy">Custom AI and software systems for businesses ready to replace busywork with momentum.</p>
          <a href="#contact" className="button button-dark">Book a free discovery call <ArrowUpRight size={17} /></a>
          <div className="hero-note"><span>01</span> Built around your operation<br /><span>02</span> Made to create measurable lift</div>
        </div>
      </section>

      <section className="marquee" aria-label="Capabilities"><div>AI systems <span>✳</span> Workflow automation <span>✳</span> Human-centered software <span>✳</span> Operational clarity <span>✳</span> AI systems <span>✳</span></div></section>

      <section className="section-pad services" id="services">
        <div className="section-intro"><p className="kicker">What we solve</p><h2>Less friction.<br /><span>More forward.</span></h2><p className="intro-copy">The best technology disappears into the way your business works. We find the friction, then build what removes it.</p></div>
        <div className="service-grid">{services.map(({ icon: Icon, number, title, text }) => <article className="service-card" key={number}><div className="service-top"><Icon size={22} strokeWidth={1.5} /><span>{number}</span></div><h3>{title}</h3><p>{text}</p><a href="#contact" aria-label={`Learn more about ${title}`}><ArrowUpRight size={18} /></a></article>)}</div>
      </section>

      <section className="work-section section-pad" id="work">
        <div className="section-heading-row"><div><p className="kicker">Selected work</p><h2>Built for the<br /><span>real world.</span></h2></div><p className="heading-side">Proof that thoughtful systems can change a Tuesday afternoon into a competitive advantage.</p></div>
        <div className="case-list">{cases.map((item, index) => <article className={`case-card ${item.accent}`} key={item.title}><div className="case-visual"><div className="visual-grid" /><div className="visual-label">CASE / 0{index + 1}</div><div className="visual-orb" /><div className="visual-line" /><span className="visual-caption">{index === 0 ? 'LIVE INSPECTION' : index === 1 ? 'SEARCH INDEX' : 'EDGE NODE'}</span></div><div className="case-content"><p className="case-tag">{item.tag}</p><h3>{item.title}</h3><p className="case-problem">{item.problem}</p><div className="case-result"><div><strong>{item.result}</strong><span>{item.detail}</span></div><ArrowUpRight size={19} /></div></div></article>)}</div>
      </section>

      <section className="process section-pad" id="process"><div className="process-heading"><p className="kicker">How we work</p><h2>Clear steps.<br /><span>Useful outcomes.</span></h2></div><div className="steps"><div className="step"><span>01</span><h3>Discovery call</h3><p>We map your bottlenecks, manual processes, and the opportunities hiding in plain sight.</p></div><div className="step"><span>02</span><h3>Prototype & proposal</h3><p>You get a clear scope, a working direction, and a plan tied to business value.</p></div><div className="step"><span>03</span><h3>Build & improve</h3><p>We ship in focused loops, train your team, and stay close as the system gets smarter.</p></div></div></section>

      <section className="trust section-pad"><div><p className="kicker">The toolkit</p><h2>Practical tech.<br /><span>Purposeful use.</span></h2></div><div className="stack-list"><span>Computer vision</span><span>LLM systems</span><span>Next.js</span><span>Python</span><span>Postgres</span><span>Edge computing</span><span>Workflow APIs</span><span>Private search</span></div></section>

      <section className="contact section-pad" id="contact"><div className="contact-copy"><p className="kicker">Have a challenge?</p><h2>Let&apos;s make<br /><em>something useful.</em></h2><p>Tell us what is slowing your team down. We&apos;ll bring questions, not a sales pitch.</p><a href="mailto:hello@northstar.systems" className="email-link">hello@northstar.systems <ArrowUpRight size={18} /></a></div><form className="contact-form" onSubmit={(event) => { event.preventDefault(); setSubmitted(true) }}>{submitted ? <div className="success"><div className="success-icon"><Check /></div><h3>Thanks — we&apos;ll be in touch.</h3><p>Your note is on its way to the studio.</p></div> : <><label>Your name<input required name="name" placeholder="Jane Smith" /></label><label>Work email<input required type="email" name="email" placeholder="jane@company.com" /></label><label>What can we help with?<textarea required name="message" rows={4} placeholder="A quick note about the challenge..." /></label><button className="button button-light" type="submit">Send your note <ArrowUpRight size={17} /></button></>}</form></section>

      <footer><a className="brand" href="#top"><span className="brand-mark">N</span>northstar<span className="brand-dot">.</span></a><span>© 2026 Northstar Systems</span><a href="#top">Back to top ↑</a></footer>
    </main>
  )
}
