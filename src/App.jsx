import { useEffect, useState } from "react";
import { ArrowUpRight, ChevronDown, Leaf, Menu, X, Check, MapPin, FileText, FileSpreadsheet, Layers3, LayoutTemplate, Calculator, BadgeIndianRupee, Sprout, Grid2x2, Droplets, Mountain, Package, Lamp, HardHat, RefreshCw } from "lucide-react";
import "@/App.css";

const heroImage = "https://images.unsplash.com/photo-1783581263007-41f4e70f49f2?crop=entropy&cs=srgb&fm=jpg&q=85&w=1800";
const indiaUrl = "https://terra-cost-india.vercel.app/";
const gulfUrl = "https://terracostgulf.vercel.app/";

const terrascopeUrl = "https://terrascope-ten.vercel.app/";
const scopes = ["Plants", "Trees", "Shrubs", "Planters", "Growing media", "Irrigation", "Hardscape", "Lighting", "Labour", "Transport", "Installation", "Maintenance"];
const advantages = [
  ["Softscape", "Plants, trees, shrubs, groundcovers and planting.", Sprout],
  ["Hardscape", "Paving, masonry, edging and landscape structures.", Grid2x2],
  ["Irrigation", "Pipes, fittings, valves and irrigation systems.", Droplets],
  ["Growing Media", "Soil, compost, sand, aggregates and amendments.", Mountain],
  ["Planters", "Different planter types, sizes and materials.", Package],
  ["Lighting", "Landscape lighting and associated installation.", Lamp],
  ["Labour", "Installation and maintenance labour.", HardHat],
  ["Maintenance", "AMC and recurring maintenance scopes.", RefreshCw],
];

function RegionalButton({ region, url, dark = false }) {
  const active = Boolean(url);
  return active ? (
    <a className={`button ${dark ? "button-light" : "button-primary"}`} href={url} target="_blank" rel="noreferrer" data-testid={`${region.toLowerCase()}-open-link`}>
      Open TerraCost {region} <ArrowUpRight size={17} />
    </a>
  ) : (
    <button className={`button ${dark ? "button-light" : "button-primary"} button-disabled`} disabled data-testid={`${region.toLowerCase()}-open-button`} title="Regional link coming soon">
      Open TerraCost {region} <ArrowUpRight size={17} />
    </button>
  );
}

function ProductMockup({ compact = false }) {
  return <div className={`product-window ${compact ? "product-window-compact" : ""}`} data-testid="terracost-product-mockup">
    <div className="window-top"><span className="window-brand"><span className="brand-mark small"><Leaf size={12} /></span> TerraCost</span><span className="window-project">Residential Villa <ChevronDown size={14} /></span><span className="window-status">₹ INR · GST per item</span></div>
    <div className="window-body">
      <aside className="window-sidebar">{[["1", "Scope of Work", true], ["2", "Charges & Adjustments"], ["3", "Maintenance Contract"], ["4", "Terms & Conditions"], ["5", "Client Details"], ["6", "Firm Details"]].map(([n, label, active]) => <span key={n} className={active ? "active-side" : ""}><b className="side-num">{n}</b>{label}</span>)}</aside>
      <main className="window-main"><div className="mock-heading"><div><span className="eyebrow">ZONE / MAIN GARDEN</span><h3>Scope of Work</h3></div><span className="mock-date">+ Add Zone · + Add Scope</span></div>
        <div className="mock-stats"><div><span>Works subtotal</span><strong>₹ 15,61,525</strong><small>Across 06 zones</small></div><div><span>GST · per item</span><strong>₹ 2,81,075</strong><small>Applied line by line</small></div><div><span>Grand total</span><strong>₹ 18,42,600</strong><small>Ready for export</small></div></div>
        <div className="mock-table"><div className="table-title"><strong>Softscape — Main Garden</strong><span>01 — 18 items</span></div>{[["Areca palm · L 7-10ft · FRP", "Nos", "24", "₹ 3,840"],["Philodendron xanadu · L2", "Nos", "36", "₹ 7,200"],["Red earth + compost mix", "Cu.m", "12", "₹ 18,600"],["Planting labour", "Day", "18", "₹ 25,200"]].map((row, i) => <div className="table-row" key={i}>{row.map((cell, j) => <span key={j} className={j === 3 ? "row-total" : ""}>{cell}</span>)}</div>)}</div>
        <div className="mock-exports"><span className="export-btn primary"><FileText size={13} /> Export PDF</span><span className="export-btn"><FileSpreadsheet size={13} /> Full BOQ Excel</span><span className="export-btn ghost">Scope & quantities only</span></div>
      </main>
    </div>
  </div>;
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => { document.title = "TerraCost — Landscape BOQs, built properly."; }, []);
  useEffect(() => {
    const sections = document.querySelectorAll("main section");
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("revealed"); obs.unobserve(e.target); } });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
    sections.forEach((s) => obs.observe(s));
    return () => obs.disconnect();
  }, []);
  const closeMenu = () => setMenuOpen(false);
  return <div className="site-shell">
    <nav className="nav" data-testid="site-navigation"><a href="#top" className="logo" data-testid="logo-link"><span className="brand-mark"><Leaf size={17} /></span><span>Terra<span>Cost</span></span></a><div className={`nav-links ${menuOpen ? "nav-open" : ""}`}><a href="#product" onClick={closeMenu} data-testid="nav-product-link">Product</a><a href={indiaUrl} target="_blank" rel="noreferrer" onClick={closeMenu} data-testid="nav-try-india-link">Try India Version</a><a href={gulfUrl} target="_blank" rel="noreferrer" onClick={closeMenu} data-testid="nav-try-gulf-link">Try Gulf Version</a><a href="#terraos" onClick={closeMenu} data-testid="nav-terraos-link">TerraOS</a></div><button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation" data-testid="mobile-menu-button">{menuOpen ? <X /> : <Menu />}</button></nav>

    <main id="top">
      <section className="hero section-dark" data-testid="hero-section"><div className="hero-image" style={{ backgroundImage: `url(${heroImage})` }} /><div className="hero-grid" /><div className="hero-content"><div className="hero-kicker"><span className="live-dot" /> Built for landscape businesses</div><h1>Landscape BOQs,<br /><em>built properly.</em></h1><p>Create accurate estimates, structured BOQs and professional proposals — zone by zone, scope by scope.</p><div className="hero-actions"><a href="#markets" className="button button-accent" data-testid="hero-start-link">Start with TerraCost <ArrowUpRight size={17} /></a><a href="#workflow" className="text-link" data-testid="hero-how-it-works-link">See how it works <span>↓</span></a></div></div><div className="hero-side-note"><span>01 / 07</span><span>Project → proposal</span></div><div className="scroll-cue"><span>Scroll to structure the project</span><span className="scroll-line" /></div></section>

      <section className="intro section-paper" id="product" data-testid="product-intro-section"><div className="section-label"><span>01</span><span>The problem</span></div><div className="intro-layout"><h2>Landscape projects<br /><em>aren’t simple.</em></h2><div><p className="lead">Your estimating software shouldn’t make them harder.</p><p>TerraCost brings every moving part of a landscape project into one structured system — from the first zone to the final client proposal.</p></div></div><div className="scope-cloud" data-testid="landscape-scopes-list">{scopes.map((scope, i) => <span key={scope} className={`scope-pill pill-${i % 4}`}><span>{String(i + 1).padStart(2, "0")}</span>{scope}</span>)}</div></section>

      <section className="market-section section-dark" id="markets" data-testid="market-selection-section"><div className="section-label light"><span>02</span><span>Choose your market</span></div><div className="market-heading"><h2>One platform.<br /><em>Two regional editions.</em></h2><p>Built around how landscape businesses actually estimate, price and present their work.</p></div><div className="market-grid"><article className="market-card market-india" id="india" data-testid="india-market-card"><div className="market-orb">IN</div><span className="eyebrow">REGIONAL EDITION / 01</span><h3>TerraCost India</h3><p>Professional landscape proposals for the Indian market — zone by zone, scope by scope.</p><div className="market-tags"><span>₹ INR</span><span>GST per item</span><span>11 project templates</span></div><RegionalButton region="India" url={indiaUrl} dark /></article><article className="market-card market-gulf" id="gulf" data-testid="gulf-market-card"><div className="market-orb">GCC</div><span className="eyebrow">REGIONAL EDITION / 02</span><h3>TerraCost Gulf</h3><p>Accurate landscape BOQs and tender documents for businesses across the Gulf.</p><div className="market-tags"><span>AED · SAR · QAR + 4</span><span>VAT 5%</span><span>Tender-ready</span></div><RegionalButton region="Gulf" url={gulfUrl} dark /></article></div></section>

      <section className="workflow section-paper" id="workflow" data-testid="workflow-section"><div className="section-label"><span>03</span><span>TerraCost workflow</span></div><div className="workflow-head"><h2>From site survey<br /><em>to exported BOQ.</em></h2><p>This is the exact structure the product walks you through — every step numbered, every zone accounted for.</p></div><div className="workflow-steps">{[["01", "SURVEY", "Start from a site survey ID or create the project directly.", MapPin],["02", "PROJECT TYPE", "Pick from 11 templates with zones pre-loaded for your project.", LayoutTemplate],["03", "ZONES & SCOPES", "Structure the work zone by zone, scope by scope.", Layers3],["04", "CHARGES", "Design, labour, transport, contingency and adjustments.", Calculator],["05", "MAINTENANCE", "Optional AMC with services, visit plans and durations.", RefreshCw],["06", "BOQ & PROPOSAL", "Export client-ready PDF and Excel documents.", FileText]].map(([n, title, text, Icon], i) => <div className={`workflow-step step-${i}`} key={title} data-testid={`workflow-step-${title.toLowerCase().replaceAll(" & ", "-").replaceAll(" ", "-")}`}><span className="step-number">{n}</span><Icon size={22} strokeWidth={1.5} /><h3>{title}</h3><p>{text}</p><span className="step-arrow">↗</span></div>)}</div><ProductMockup /></section>

      <section className="advantage section-green" data-testid="landscape-advantage-section"><div className="section-label light"><span>04</span><span>The landscape-specific advantage</span></div><div className="advantage-head"><h2>Built for landscapes.<br /><em>Not adapted for them.</em></h2><p>Softscape, hardscape, irrigation, growing media and everything around them — understood from the start.</p></div><div className="advantage-grid">{advantages.map(([title, text, Icon]) => <div className="advantage-item" key={title} data-testid={`advantage-${title.toLowerCase().replaceAll(" ", "-")}`}><span className="advantage-icon"><Icon size={20} strokeWidth={1.6} /></span><h3>{title}</h3><p>{text}</p></div>)}</div></section>

      <section className="regional-detail section-paper" data-testid="regional-details-section"><div className="regional-copy" id="india-detail"><span className="eyebrow">TERRACOST / INDIA</span><h2>Estimating, in the language of the Indian market.</h2><p>Zone by zone, scope by scope — built around how Indian landscape projects are actually structured, priced and billed.</p><div className="feature-list">{["₹ INR with GST applied per item", "11 project templates with pre-loaded zones", "Species picker — size, planter material, light needs", "Design, labour, transport & contingency charges", "Optional maintenance contracts (3–36 months)", "GSTIN / PAN / MSME-Udyam firm details", "PDF, Full BOQ Excel & vendor-quote exports"].map(x => <span key={x}><Check size={15} />{x}</span>)}</div><RegionalButton region="India" url={indiaUrl} /></div><div className="regional-visual"><div className="currency-card"><BadgeIndianRupee size={23} /><span>Grand total</span><strong>₹ 18,42,600</strong><small>GST per item · INR</small></div><ProductMockup compact /></div></section>
      <section className="regional-detail gulf-detail section-sand" data-testid="gulf-details-section"><div className="regional-visual gulf-visual"><div className="currency-card"><span className="currency-symbol">د.إ</span><span>Contract sum</span><strong>AED 248,900</strong><small>VAT 5% · excl. retention</small></div></div><div className="regional-copy" id="gulf-detail"><span className="eyebrow">TERRACOST / GULF</span><h2>BOQs and tender documents, built for the Gulf.</h2><p>From villa compounds to urban public spaces — with the commercial structure Gulf contracts demand.</p><div className="feature-list">{["AED · SAR · QAR · KWD · OMR · BHD · USD", "VAT 5% with taxable / non-taxable subtotals", "Retention % and Contract Sum handling", "Transport / mobilisation and provisional sums", "AMC engine — weekly to quarterly visit plans", "TRN and Trade Licence / CR details", "BOQ + tender documents — PDF & Excel"].map(x => <span key={x}><Check size={15} />{x}</span>)}</div><RegionalButton region="Gulf" url={gulfUrl} /></div></section>

      <section className="output-section section-dark" data-testid="proposal-output-section"><div className="section-label light"><span>05</span><span>The output</span></div><div className="output-heading"><h2>From internal calculation<br /><em>to client-ready proposal.</em></h2><p>The work becomes something your client can understand, trust and approve.</p></div><div className="proposal-stage"><ProductMockup compact /><div className="proposal-paper"><div className="proposal-top"><span>TC</span><small>PROPOSAL / 024</small></div><span className="eyebrow">LANDSCAPE WORKS</span><h3>Palm Grove<br />Residence</h3><p>Prepared for<br /><strong>Rohan Mehta</strong></p><div className="proposal-rule" /><div className="proposal-total"><span>Project value</span><strong>₹ 18,42,600</strong></div><span className="proposal-foot">TerraCost India · 06 zones · 128 items</span></div></div></section>

      <section className="audience section-paper" data-testid="audience-section"><div className="section-label"><span>06</span><span>Who it is for</span></div><h2>Built for people<br /><em>who build landscapes.</em></h2><div className="audience-list">{[["01", "Landscape Contractors", "Price the work clearly. Win with confidence."],["02", "Landscape Designers", "Turn design intent into a structured scope."],["03", "Landscape Architects", "Keep every quantity and rate accountable."],["04", "Landscape Companies", "Give every project a professional system."]].map(([n, t, d]) => <div key={t} data-testid={`audience-${n}`}><span>{n}</span><h3>{t}</h3><p>{d}</p><ArrowUpRight size={19} /></div>)}</div></section>

      <section className="ecosystem section-sand" id="terraos" data-testid="terraos-section"><div className="section-label"><span>07</span><span>The bigger picture</span></div><div className="ecosystem-layout"><div><h2>TerraCost works today.<br /><em>The system around it is growing.</em></h2><p>TerraCost is part of the broader TerraOS ecosystem — with each product focused on a different part of the landscape business.</p></div><div className="ecosystem-flow"><a href={terrascopeUrl} target="_blank" rel="noreferrer" data-testid="terrascope-link"><span>01</span><strong>TerraScope</strong><small>Site information <ArrowUpRight size={13} /></small></a><b>↓</b><div><span>02</span><strong>TerraDesign</strong><small>Landscape design</small></div><b>↓</b><div className="ecosystem-current"><span>03</span><strong>TerraCost</strong><small>Estimating & BOQ</small></div><b>↓</b><div><span>04</span><strong>TerraExec</strong><small>Execution</small></div></div></div></section>

      <section className="final-cta section-green" data-testid="final-cta-section"><span className="eyebrow">TERRACOST / START HERE</span><h2>Build your next<br /><em>landscape BOQ differently.</em></h2><p>TerraCost turns complex landscape projects into structured estimates and professional proposals.</p><div className="final-actions"><RegionalButton region="India" url={indiaUrl} dark /><RegionalButton region="Gulf" url={gulfUrl} dark /></div><a href="#terraos" className="text-link light-link" data-testid="explore-terraos-link">Explore TerraOS <ArrowUpRight size={16} /></a></section>
    </main>
    <footer className="footer"><a href="#top" className="logo" data-testid="footer-logo-link"><span className="brand-mark"><Leaf size={17} /></span><span>Terra<span>Cost</span></span></a><span>Landscape estimating · BOQ · proposals</span><span>© 2025 TerraOS</span></footer>
  </div>;
}

export default App;