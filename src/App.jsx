import React from "react";

const imageBase = "https://irp.cdn-website.com/3e0162d6/dms3rep/multi/opt/";
const contact = "https://www.bluestarjanitorial.com/contact";
const phone = "tel:+14692611485";
const images = [
"20241021_183029-495w.jpg",
"475659723_122178026276099951_8450429576795568632_n-495w.jpg",
"20241022_002610-495w.jpg",
"20251005_091730-495w.jpg",
"pexels-photo-14965465-675w.jpeg",
"pexels-photo-37440103-675w.jpeg",
"475284873_122177885666099951_7131630242672840413_n-675w.jpg",
"545499437_122203683302099951_6746659858485518065_n-660h.jpg"
];
const services = [
{ title: "Post-Construction Cleaning", description: "Thorough cleanup for newly completed projects. Remove construction dust and debris and prepare your space for handover and occupancy.", image: 0 },
{ title: "Floor Stripping and Waxing", description: "Restore worn floors with professional stripping and a fresh protective finish. Efficient propane equipment helps keep your project on track.", image: 1 },
{ title: "Commercial Floor Buffing", description: "Maintain a polished appearance and protect high-traffic floors with expert buffing for your commercial property.", image: 2 },
{ title: "Concrete Scrubbing and Sealing", description: "Deep-clean and protect concrete surfaces for durable, lasting results in commercial and industrial facilities.", image: 3 },
{ title: "Commercial Power Washing", description: "Remove dirt and buildup from exterior surfaces and give your property a cleaner, more professional first impression.", image: 4 },
{ title: "Commercial Window Cleaning", description: "Clear, clean windows that enhance visibility and curb appeal for storefronts and office buildings.", image: 5 },
{ title: "Commercial Carpet Cleaning", description: "Deep-clean carpets for a fresher workplace, with careful attention to the needs of your commercial space.", image: 6 }
];
const promises = [
["Family-Owned", "A small, local team that takes pride in every project."],
["Professional Equipment", "High-quality supplies and the right tools for efficient results."],
["Open 24 Hours", "Speak with us about a schedule that works for your property."]
];
const steps = [
["Tell us what you need", "We discuss your property, assess the scope of work, and outline the next steps.", 0],
["Plan your service", "Choose a schedule and discuss the products and requirements for your space.", 4],
["Leave the details to us", "Our crew arrives prepared and completes the work as discussed, ready for your space to be used.", 2]
];

function Button({children = "Get a Free Estimate", href = contact, className = ""}) {
return <a className={`button ${className}`} href={href}>{children}</a>;
}
function Photo({index, alt, className = "", eager = false}) {
return <img className={`photo ${className}`} src={imageBase + images[index]} alt={alt} loading={eager ? "eager" : "lazy"} decoding="async" />;
}
function Wave({purple = false}) {
return <div className={`wave ${purple ? "wave-purple" : ""}`} aria-hidden="true"><svg viewBox="0 0 1200 56" preserveAspectRatio="none"><path d="M0 56V28Q30 -28 60 28Q90 -12 120 28Q150 -20 180 28Q210 -15 240 28Q270 -28 300 28Q330 -12 360 28Q390 -20 420 28Q450 -15 480 28Q510 -28 540 28Q570 -12 600 28Q630 -20 660 28Q690 -15 720 28Q750 -28 780 28Q810 -12 840 28Q870 -20 900 28Q930 -15 960 28Q990 -28 1020 28Q1050 -12 1080 28Q1110 -20 1140 28Q1170 -15 1200 28V56Z"/></svg></div>;
}
function Heading({label,title,children}) {
return <div className="section-heading"><p className="eyebrow">{label}</p><h2>{title}</h2>{children && <p>{children}</p>}</div>;
}
export default function App() {
return <>
<a className="skip-link" href="#main">Skip to content</a>
<header className="site-header"><nav className="nav wrap" aria-label="Main navigation"><a className="brand" href="#" aria-label="Bluestar Janitorial LLC home">BLUESTAR JANITORIAL LLC</a><Button href={phone}>Call Now</Button></nav></header>
<main id="main">
<section className="hero purple">
<div className="wrap hero-inner"><p className="eyebrow">FAMILY-OWNED · GARLAND &amp; GREATER DFW</p><h1>Commercial Cleaning Services You Can Rely On</h1><p className="hero-description">Quality supplies. Professional equipment. Dependable care for your commercial space — from construction cleanup to beautifully finished floors.</p><Button/><div className="hero-photos"><Photo index={2} alt="Polished floors in a commercial retail space" eager/><Photo index={7} alt="Clean concrete flooring in a commercial facility" eager/></div></div>
</section>
<Wave/>
<section className="section trust"><div className="wrap trust-grid">{promises.map(([title,copy])=><article key={title}><h3>{title}</h3><p>{copy}</p></article>)}</div></section>
<div className="service-strip purple"><div className="wrap">FLOOR CARE · CONSTRUCTION · OFFICES · WINDOWS · CLEAN</div></div>
<section className="section" id="services"><div className="wrap"><Heading label="OUR SERVICES" title="Built for your business. Cleaned with care.">Specialized commercial cleaning for properties across Garland and the greater DFW area. Request a quote tailored to your space.</Heading><div className="services-list">{services.map((s,i)=><article className={`service-row ${i%2 ? "reverse" : ""}`} key={s.title}><Photo index={s.image} alt={s.title}/><div className="service-copy"><p className="eyebrow purple-text">{String(i+1).padStart(2,"0")} / COMMERCIAL CLEANING</p><h3>{s.title}</h3><p>{s.description}</p><Button href={contact}>Request a Quote</Button></div></article>)}</div></div></section>
<Wave purple/>
<section className="section purple" id="process"><div className="wrap"><Heading label="HOW WE WORK" title="Three steps to a cleaner space.">Straightforward coordination. Quality-focused results.</Heading><div className="steps-grid">{steps.map(([title,copy,image],i)=><article className="step" key={title}><span className="step-number">{String(i+1).padStart(2,"0")}</span><h3>{title}</h3><p>{copy}</p><Photo index={image} alt={title}/></article>)}</div></div></section>
<Wave/>
<section className="section" id="about"><div className="wrap"><div className="about-grid"><Photo index={7} alt="Bluestar commercial concrete floor cleaning"/><div><p className="eyebrow purple-text">ABOUT BLUESTAR</p><h2>Grounded in pride and professionalism.</h2><p>Bluestar Janitorial LLC is a small, family-owned commercial cleaning company serving Garland and the greater DFW area. From construction sites to established facilities, we use high-quality supplies and professional equipment to deliver efficient, lasting results.</p><p>Every job receives the same level of care, no matter its size or scope. Eco-friendly products are available on request, and you’re welcome to provide your own chemicals and supplies.</p></div></div><aside className="discount"><h3>10% off for veterans &amp; first responders</h3><Button href={phone}>Call for Your Quote</Button></aside></div></section>
<section className="section purple" id="areas"><div className="wrap"><Heading label="LOCAL PEOPLE. DEPENDABLE CARE." title="Proudly serving the greater DFW area.">Garland · Dallas · Plano · Frisco · Richardson · McKinney · Fort Worth · Irving · Arlington · Coppell · Denton · Lake Highland · South Lake · Haltom City</Heading></div></section>
<section className="section contact" id="contact"><div className="wrap"><Heading label="LET’S TALK ABOUT YOUR PROJECT" title="A cleaner space starts with Bluestar.">Get a free estimate for your commercial cleaning project. Our team will help you plan the right service for your property.</Heading><div className="contact-buttons"><Button/><Button href={phone}>Call (469) 261-1485</Button></div><p className="contact-details">Garland, TX 75041 · Monday–Sunday · Open 24 Hours</p></div></section>
</main>
<footer className="footer"><div className="wrap"><div className="footer-grid"><div><h3>Bluestar Janitorial LLC</h3><p>Family-owned commercial cleaning in Garland and the greater Dallas–Fort Worth area.</p><Button href={phone}>(469) 261-1485</Button></div><div><p className="eyebrow">OUR SERVICES</p><p>Post-construction cleaning · Floor stripping and waxing · Floor buffing · Concrete care · Power washing · Window cleaning · Carpet cleaning</p></div><div><p className="eyebrow">GET IN TOUCH</p><p>Garland, TX 75041</p><p>Monday–Sunday · Open 24 hours</p><Button href="https://facebook.com/p/BlueStar-Janitorial-61552998534655/">Visit Facebook</Button></div></div><p className="copyright">© {new Date().getFullYear()} Bluestar Janitorial LLC. All rights reserved.</p><div className="footer-wordmark" aria-hidden="true">BLUESTAR</div></div></footer>
</>;
}
