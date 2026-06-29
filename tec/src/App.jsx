import React from 'react';
import Lightning from './Lightning';
import DomeGallery from './DomeGallery';
import ContactForm from './ContactForm';
import ScrollVelocity from './ScrollVelocity';
import './App.css';

const galleryImages = Array.from({ length: 22 }, (_, i) => ({
  src: `/images/${i + 1}.webp`,
  alt: `TEC projekt ${i + 1}`
}));

const projectsRow1 = 'AQUAPARK DALMATIA · AMADRIA PARK · ŠIBENSKO KAZALIŠTE · PLAŽA BANJ · TVRĐAVA SV. MIHOVIL · ŠIBENSKA BOLNICA · POSLOVNE HALE · VILE · ';
const projectsRow2 = 'STAMBENE I APARTMANSKE ZGRADE · JAVNA RASVJETA · ČVOR MANDALINA · UPOV ZATON · FOTONAPON · KAMPOVI · KAMENOLOM · RAZNA POSTROJENJA · ';

export default function App() {
  return (
    <div className="tec-site">
      {/* ─── Navigation ─── */}
      <nav className="tec-nav">
        <img 
            src="/images/logo-removebg-preview.png"
            alt="TEC elektroinstalacije" 
            width={45} 
            height={45} 
            style={{ height: '45px', width: 'auto' }} 
        />
        <div className="nav-links">
          <a href="#galerija">Galerija</a>
          <a href="#o-nama">O nama</a>
          <a href="#kontakt" className="nav-cta">Kontakt</a>
        </div>
      </nav>

      {/* ─── Hero ─── */}
      <section id="hero" className="hero-section">
        <Lightning hue={45} xOffset={0} speed={0.6} intensity={1.2} size={1} />
        <div className="hero-content">
          <div className="hero-text">
            <p className="hero-eyebrow">Šibenik &amp; okolica</p>
            <h1>
              Elektroinstalacije<br />
              <span className="hero-accent">kojima možete vjerovati</span>
            </h1>
            <p className="hero-description">
              Elektroinstalacijski radovi za hotele, industrijska postrojenja, javne objekte i infrastrukturu na području Dalmacije.
            </p>
            <div className="hero-actions">
              <a href="#kontakt" className="btn-primary">Zatražite ponudu</a>
              <a href="#galerija" className="btn-secondary">Naši radovi →</a>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Gallery ─── */}
      <section id="galerija" className="gallery-section">
        <div className="gallery-header">
          <p className="section-eyebrow">Galerija</p>
          <h2 className="section-title">Naši radovi</h2>
        </div>
        <div className="gallery-canvas">
          <DomeGallery
            images={galleryImages}
            fit={0.8}
            minRadius={600}
            maxVerticalRotationDeg={0}
            segments={34}
            dragDampening={2}
            overlayBlurColor="#000000"
            grayscale={false}
          />
        </div>
      </section>

      {/* ─── Projects Marquee ─── */}
      <div className="marquee-wrapper">
        <ScrollVelocity
          texts={[projectsRow1, projectsRow2]}
          velocity={80}
          numCopies={4}
          parallaxStyle={{ margin: 0, padding: 0 }}
        />
      </div>

      {/* ─── About ─── */}
      <section id="o-nama" className="about-section">
        <div className="section-container">
          <div className="about-layout">
            <div className="about-text">
              <p className="section-eyebrow">O nama</p>
              <h2 className="section-title">TEC elektroinstalacije</h2>
              <p className="about-description">
                Dugogodišnje iskustvo u elektroinstalacijskim radovima, 
                TEC je pouzdani partner za stanovnike i tvrtke na području 
                Šibenika i Šibensko-kninske županije. Svaki projekt izvodimo prema 
                najvišim standardima sigurnosti i kvalitete.
              </p>
              <div className="about-stats">
                <div className="stat">
                  <span className="stat-number">10+</span>
                  <span className="stat-label">godina iskustva</span>
                </div>
                <div className="stat">
                  <span className="stat-number">500+</span>
                  <span className="stat-label">završenih projekata</span>
                </div>
              </div>
            </div>
            <div className="about-values">
              <div className="value-item">
                <span className="value-marker"></span>
                <div>
                  <h4>Kvaliteta materijala</h4>
                  <p>Koristimo isključivo certificirane materijale renomiranih proizvođača.</p>
                </div>
              </div>
              <div className="value-item">
                <span className="value-marker"></span>
                <div>
                  <h4>Transparentne cijene</h4>
                  <p>Detaljne ponude bez skrivenih troškova. Znate što plaćate prije početka radova.</p>
                </div>
              </div>
              <div className="value-item">
                <span className="value-marker"></span>
                <div>
                  <h4>Garancija na rad</h4>
                  <p>Na sve izvedene radove dajemo 10 godina garancije. Ugrađeni materijal prema tvorničkom jamstvu samog proizvođača.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> 

      {/* ─── Contact ─── */}
      <section id="kontakt" className="contact-section">
        <div className="section-container">
          <div className="contact-layout">
            <div className="contact-info">
              <p className="section-eyebrow">Kontakt</p>
              <p className="contact-description">
                Opišite nam što trebate.
              </p>
              <div className="contact-details">
                <div className="contact-detail">
                  <span className="detail-label">WhatsApp</span>
                  <a href="tel:+385913337504" className="detail-value">+385 91 333 7504</a>
                </div>
                <div className="contact-detail">
                  <span className="detail-label">Email</span>
                  <a href="mailto:elektro.hr@gmail.com" className="detail-value">elektro.hr@gmail.com</a>
                </div>
                <div className="contact-detail">
                  <span className="detail-label">Lokacija</span>
                  <span className="detail-value">Šibenik, Hrvatska</span>
                </div>
              </div>
            </div>
            <div className="contact-form-wrapper">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* ─── Footer ─── */}
      <footer className="tec-footer">
        <div className="section-container footer-inner">
          <img 
            src="/images/logo.png" 
            alt="TEC elektroinstalacije" 
            width={45} 
            height={45} 
            style={{ height: '45px', width: 'auto' }} 
          />
          <span className="footer-copy">© 2026 TEC elektroinstalacije — Šibenik</span>
        </div>
      </footer>
    </div>
  );
}