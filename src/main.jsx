import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import { QRCodeSVG } from "qrcode.react";
import {
  ArrowDownRight,
  ArrowRight,
  Bike,
  CarFront,
  MapPin,
  Youtube,
  Facebook,
  Navigation,
  Zap,
  ShieldCheck,
  MessageCircle,
  Copy,
  Check,
  ExternalLink,
  BatteryCharging,
  Clock3,
  Star,
  Menu,
  X,
  Phone,
} from "lucide-react";
import logo from "./assets/baste-logo.jpg";
import "./styles.css";

const FACEBOOK_URL = "https://www.facebook.com/Basteebike";
const YOUTUBE_URL = "https://www.youtube.com/@Basteebikeofficial";
const WAZE_URL =
  "https://waze.com/ul?q=GD%20Plaza%20infront%20of%20WalterMart%20Guiguinto%20Bulacan";
const LOCATION =
  "GD Plaza, in front of WalterMart Guiguinto, beside Yamaha Guiguinto, Bulacan";

const PRODUCTS = [
  {
    name: "Lumin EV",
    image: "ecar-01.jpg",
    price: "₱299,999",
    label: "PREMIUM E-CAR",
  },
  {
    name: "Infinity EV",
    image: "ecar-02.jpg",
    price: "₱299,999",
    label: "5 DOOR",
  },
  {
    name: "Baste Seagull",
    image: "ecar-03.jpg",
    price: "₱269,999",
    label: "PREMIUM E-CAR",
  },
  {
    name: "Ridge EV",
    image: "ecar-04.jpg",
    price: "₱169,999",
    label: "4 DOOR",
  },
  {
    name: "Ridge V2",
    image: "ecar-05.jpg",
    price: "₱169,999",
    label: "4 DOOR",
  },
  { name: "Viper", image: "ecar-06.jpg", price: "₱229,999", label: "4 DOOR" },
  {
    name: "Bestune Pony",
    image: "ecar-07.jpg",
    price: "₱488,000",
    label: "EXPRESSWAY LEGAL",
  },
  {
    name: "Bestune Pony V2 Comfort",
    image: "ecar-08.jpg",
    price: "₱528,000",
    label: "EXPRESSWAY LEGAL",
  },
  {
    name: "Lumina EV",
    image: "ecar-09.jpg",
    price: "₱259,999 / ₱299,999",
    label: "PREMIUM E-CAR",
  },
  {
    name: "Eclipse V2",
    image: "ecar-10.jpg",
    price: "₱209,999",
    label: "BUILT-IN SOLAR",
  },
  {
    name: "Adventure EV",
    image: "ecar-11.jpg",
    price: "₱299,999",
    label: "5 DOOR",
  },
  {
    name: "Eclipse",
    image: "ecar-12.jpg",
    price: "₱199,999",
    label: "SOLAR E-CAR",
  },
  {
    name: "Phoenix",
    image: "ecar-13.jpg",
    price: "₱159,999",
    label: "LIMITED STOCK",
  },
  {
    name: "Alpha EV",
    image: "ecar-14.jpg",
    price: "₱299,999",
    label: "5 DOOR",
  },
];

function App() {
  const [activeTab, setActiveTab] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const [showQr, setShowQr] = useState(false);
  const [showAllProducts, setShowAllProducts] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(FACEBOOK_URL);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      setShowQr(true);
    }
  };

  const closeMenu = () => setMenuOpen(false);

  return (
    <main>
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />
      <header className="topbar">
        <a className="brand-lockup" href="#home" onClick={closeMenu}>
          <img src={logo} alt="Baste Ebike & Ecar logo" />
          <span>
            <strong>BASTE</strong>
            <small>EBIKE & ECAR</small>
          </span>
        </a>
        <a className="topbar-contact" href="tel:09363803524">
          <MessageCircle size={16} /> Call Baste <span>0936 380 3524</span>
        </a>
      </header>

      {activeTab === "home" && (
        <div className="tab-panel home-panel">
          <section className="hero section-wrap" id="home">
            <div className="hero-copy reveal">
              <div className="eyebrow">
                <span className="pulse-dot" /> ELECTRIC CAR DEALER • GUIGUINTO,
                BULACAN
              </div>
              <h1>
                Drive smarter.
                <br />
                <em>Live greener.</em>
              </h1>
              <p className="hero-lead">
                Discover compact electric cars for everyday city driving, with
                model options and prices to fit different needs.
              </p>
              <div className="hero-actions">
                <a
                  className="btn btn-gold"
                  href="https://m.me/Basteebike"
                  target="_blank"
                  rel="noreferrer"
                >
                  <MessageCircle size={18} /> Message on Facebook{" "}
                  <ArrowRight size={17} />
                </a>
                <a
                  className="btn btn-outline"
                  href={WAZE_URL}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Navigation size={17} /> Get Directions
                </a>
              </div>
              <div className="phone-strip">
                <a href="tel:09363803524">
                  <span>
                    <MessageCircle size={15} />
                  </span>
                  <div>
                    <small>CALL / VIBER</small>
                    <strong>0936 380 3524</strong>
                  </div>
                </a>
                <a href="tel:09363803523">
                  <span>
                    <MessageCircle size={15} />
                  </span>
                  <div>
                    <small>CALL / VIBER</small>
                    <strong>0936 380 3523</strong>
                  </div>
                </a>
              </div>
              <div className="social-proof">
                <div className="proof-avatars">
                  <span>B</span>
                  <span>E</span>
                  <span>+</span>
                </div>
                <div>
                  <strong>179K followers</strong>
                  <small>Join the Baste community on Facebook</small>
                </div>
              </div>
            </div>

            <div className="hero-visual reveal delay-one">
              <div className="visual-orbit orbit-a" />
              <div className="visual-orbit orbit-b" />
              <div className="hero-logo-card">
                <div className="logo-glow" />
                <img src={logo} alt="Baste E-bike shop emblem" />
                <div className="logo-caption">
                  <span>BASTE</span>
                  <span>ELECTRIC • EVERYDAY</span>
                </div>
              </div>
              <div className="float-card float-card-top">
                <Zap size={17} />
                <span>
                  <b>Go electric</b>
                  <small>Move smarter</small>
                </span>
              </div>
              <div className="float-card float-card-bottom">
                <BatteryCharging size={18} />
                <span>
                  <b>Everyday mobility</b>
                  <small>Find your next ride</small>
                </span>
              </div>
              <div className="visual-spark spark-one">✦</div>
              <div className="visual-spark spark-two">✧</div>
            </div>
          </section>

          <section className="stats section-wrap" id="about">
            <div className="stats-intro">
              <span className="eyebrow">THE BASTE EXPERIENCE</span>
              <h2>
                Built for the
                <br />
                <em>way you move.</em>
              </h2>
            </div>
            <div className="stat-item">
              <strong>
                179K<span>+</span>
              </strong>
              <p>Facebook followers</p>
            </div>
            <div className="stat-item">
              <strong>
                <Star size={26} fill="currentColor" />
              </strong>
              <p>Community reviews on Facebook</p>
              <small>4 reviews shown on page</small>
            </div>
            <div className="stat-item">
              <strong>
                <Clock3 size={27} />
              </strong>
              <p>Always open on Facebook</p>
              <small>Contact the shop to confirm availability</small>
            </div>
          </section>
        </div>
      )}

      {activeTab === "cars" && (
        <div className="tab-panel cars-panel">
          <section className="offer-section section-wrap" id="vehicles">
            <div className="section-heading">
              <div>
                <span className="eyebrow">OUR ELECTRIC CAR MODELS</span>
                <h2>
                  Find your next
                  <br />
                  <em>electric ride.</em>
                </h2>
              </div>
              <p>
                Browse the models featured by Baste. Tap any poster to view it
                larger, or message the team to confirm current pricing,
                specifications, promos, and availability.
              </p>
            </div>
            <div className="catalog-menu-grid">
              {PRODUCTS.slice(0, 6).map((product, index) => (
                <button
                  className={`catalog-menu-tile ${index === 5 ? "more-products-tile" : ""}`}
                  key={product.image}
                  onClick={() =>
                    index === 5
                      ? setShowAllProducts(true)
                      : setSelectedProduct(product)
                  }
                  aria-label={
                    index === 5
                      ? "View all 14 e-car models"
                      : `View ${product.name}`
                  }
                >
                  <img
                    src={`/images/products/${product.image}`}
                    alt={`${product.name} promotional poster`}
                    loading={index < 3 ? "eager" : "lazy"}
                  />
                  {index === 5 ? (
                    <span className="more-products-overlay">
                      <strong>+8</strong>
                      <b>MORE MODELS</b>
                      <small>Tap to browse all cars</small>
                    </span>
                  ) : (
                    <span className="menu-tile-caption">
                      <strong>{product.name}</strong>
                      <b>{product.price}</b>
                      <small>Tap to view details</small>
                    </span>
                  )}
                </button>
              ))}
            </div>
            <div className="catalog-menu-footer">
              <span>
                <CarFront size={17} /> 14 E-CAR MODELS
              </span>
              <button
                className="btn btn-gold"
                onClick={() => setShowAllProducts(true)}
              >
                Browse All Models <ArrowRight size={16} />
              </button>
            </div>
            <div className="catalog-banner">
              <div className="catalog-banner-icon">
                <MessageCircle size={24} />
              </div>
              <div>
                <strong>Interested in a model?</strong>
                <p>
                  Call or message us to confirm the latest price, available
                  battery options, promos, and stock.
                </p>
              </div>
              <a
                className="btn btn-gold"
                href="https://www.facebook.com/Basteebike"
                target="_blank"
                rel="noreferrer"
              >
                Inquire on Facebook <ArrowRight size={16} />
              </a>
            </div>
            <div className="notice">
              <ShieldCheck size={19} />
              <span>
                Prices and specifications are reproduced from the supplied
                promotional posters and may change. Confirm details and
                availability with Baste before purchase.
              </span>
            </div>
          </section>
        </div>
      )}

      {activeTab === "location" && (
        <div className="tab-panel location-panel">
          <section className="location-section section-wrap" id="location">
            <div className="location-copy">
              <span className="eyebrow">COME VISIT US</span>
              <h2>
                Find us in
                <br />
                <em>Guiguinto.</em>
              </h2>
              <p className="location-line">
                <MapPin size={20} />
                {LOCATION}
              </p>
              <p className="muted">
                Look for Baste E-Bike Shop at GD Plaza, in front of WalterMart
                Guiguinto and beside Yamaha Guiguinto.
              </p>
              <div className="location-actions">
                <a
                  className="btn btn-gold"
                  href={WAZE_URL}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Navigation size={17} /> Open in Waze <ArrowRight size={16} />
                </a>
                <a
                  className="btn btn-outline"
                  href={FACEBOOK_URL}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Facebook size={17} /> Facebook Page
                </a>
              </div>
            </div>
            <div className="map-card google-map-card">
              <iframe
                title="Google Maps - Baste Ebike & Ecar, GD Plaza Guiguinto"
                src="https://www.google.com/maps?q=GD%20Plaza%20in%20front%20of%20WalterMart%20Guiguinto%20Bulacan&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
              <a
                className="map-open-link"
                href="https://www.google.com/maps/search/?api=1&query=GD%20Plaza%20in%20front%20of%20WalterMart%20Guiguinto%20Bulacan"
                target="_blank"
                rel="noreferrer"
              >
                <ExternalLink size={14} /> Open in Google Maps
              </a>
            </div>
          </section>
        </div>
      )}

      {activeTab === "contact" && (
        <div className="tab-panel contact-panel">
          <section className="connect section-wrap">
            <div className="connect-panel">
              <div className="connect-copy">
                <span className="eyebrow">LET’S GET YOU MOVING</span>
                <h2>
                  Your next ride
                  <br />
                  <em>is one message away.</em>
                </h2>
                <p>
                  Ask about available units, latest prices, and current offers.
                  Call or message us on Facebook.
                </p>
                <div className="contact-actions">
                  <a className="btn btn-outline" href="tel:09363803524">
                    <Phone size={17} /> Call 0936 380 3524
                  </a>
                  <a className="btn btn-outline" href="tel:09363803523">
                    <Phone size={17} /> Call 0936 380 3523
                  </a>
                  <a
                    className="btn btn-dark"
                    href="https://m.me/Basteebike"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <MessageCircle size={18} /> Chat with Baste{" "}
                    <ArrowRight size={17} />
                  </a>
                </div>
              </div>
              <div className="qr-area">
                <div className="qr-frame">
                  <QRCodeSVG
                    value={FACEBOOK_URL}
                    size={148}
                    bgColor="#ffffff"
                    fgColor="#101010"
                    level="H"
                    includeMargin
                  />
                </div>
                <span>SCAN TO OPEN FACEBOOK</span>
                <small>Save this page for quick access</small>
              </div>
            </div>
          </section>

          <footer className="footer section-wrap">
            <a className="brand-lockup footer-brand" href="#home">
              <img src={logo} alt="Baste logo" />
              <span>
                <strong>BASTE</strong>
                <small>EBIKE & ECAR</small>
              </span>
            </a>
            <p>Electric mobility for everyday journeys.</p>
            <div className="footer-links">
              <a href={FACEBOOK_URL} target="_blank" rel="noreferrer">
                <Facebook size={17} /> Facebook
              </a>
              <a href={YOUTUBE_URL} target="_blank" rel="noreferrer">
                <Youtube size={17} /> YouTube
              </a>
              <button onClick={copyLink}>
                {copied ? <Check size={16} /> : <Copy size={16} />}{" "}
                {copied ? "Copied!" : "Copy Facebook link"}
              </button>
            </div>
            <small className="copyright">
              © {new Date().getFullYear()} Baste Ebike & Ecar. All rights
              reserved.
            </small>
          </footer>
        </div>
      )}

      <nav className="bottom-menu" aria-label="Main menu">
        <button
          className={
            activeTab === "home"
              ? "bottom-menu-item active"
              : "bottom-menu-item"
          }
          onClick={() => setActiveTab("home")}
        >
          <span>
            <Zap size={19} />
          </span>
          <small>Home</small>
        </button>
        <button
          className={
            activeTab === "cars"
              ? "bottom-menu-item active"
              : "bottom-menu-item"
          }
          onClick={() => setActiveTab("cars")}
        >
          <span>
            <CarFront size={20} />
          </span>
          <small>E-Cars</small>
        </button>
        <button
          className={
            activeTab === "location"
              ? "bottom-menu-item active"
              : "bottom-menu-item"
          }
          onClick={() => setActiveTab("location")}
        >
          <span>
            <MapPin size={19} />
          </span>
          <small>Location</small>
        </button>
        <button
          className={
            activeTab === "contact"
              ? "bottom-menu-item active"
              : "bottom-menu-item"
          }
          onClick={() => setActiveTab("contact")}
        >
          <span>
            <MessageCircle size={19} />
          </span>
          <small>Contact</small>
        </button>
      </nav>

      {showAllProducts && (
        <div
          className="catalog-modal-backdrop"
          onClick={() => setShowAllProducts(false)}
          role="presentation"
        >
          <section
            className="catalog-modal"
            role="dialog"
            aria-modal="true"
            aria-label="All Baste electric car models"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="catalog-modal-header">
              <div>
                <span className="eyebrow">BASTE E-CAR CATALOG</span>
                <h2>
                  Choose your <em>next ride.</em>
                </h2>
                <p>Tap any poster to view it larger and ask about the model.</p>
              </div>
              <button
                className="catalog-modal-close"
                onClick={() => setShowAllProducts(false)}
                aria-label="Close catalog"
              >
                <X size={23} />
              </button>
            </div>
            <div className="catalog-modal-grid">
              {PRODUCTS.map((product) => (
                <button
                  className="catalog-modal-item"
                  key={product.image}
                  onClick={() => {
                    setSelectedProduct(product);
                    setShowAllProducts(false);
                  }}
                >
                  <img
                    src={`/images/products/${product.image}`}
                    alt={`${product.name} poster`}
                    loading="lazy"
                  />
                  <span>
                    <strong>{product.name}</strong>
                    <b>{product.price}</b>
                  </span>
                </button>
              ))}
            </div>
          </section>
        </div>
      )}

      {selectedProduct && (
        <div
          className="poster-lightbox-backdrop"
          onClick={() => setSelectedProduct(null)}
          role="presentation"
        >
          <section
            className="poster-lightbox"
            role="dialog"
            aria-modal="true"
            aria-label={`${selectedProduct.name} details`}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="catalog-modal-close poster-close"
              onClick={() => setSelectedProduct(null)}
              aria-label="Close poster"
            >
              <X size={23} />
            </button>
            <img
              src={`/images/products/${selectedProduct.image}`}
              alt={`${selectedProduct.name} promotional poster`}
            />
            <div className="poster-lightbox-info">
              <div>
                <span>{selectedProduct.label}</span>
                <h2>{selectedProduct.name}</h2>
                <strong>{selectedProduct.price}</strong>
              </div>
              <a
                className="btn btn-gold"
                href={`${FACEBOOK_URL}`}
                target="_blank"
                rel="noreferrer"
              >
                <MessageCircle size={17} /> Inquire on Facebook{" "}
                <ArrowRight size={16} />
              </a>
              <a className="btn btn-outline" href="tel:09363803524">
                <MessageCircle size={16} /> Call Baste
              </a>
            </div>
          </section>
        </div>
      )}

      {showQr && (
        <div className="modal-backdrop" onClick={() => setShowQr(false)}>
          <div className="qr-modal" onClick={(e) => e.stopPropagation()}>
            <button
              className="modal-close"
              onClick={() => setShowQr(false)}
              aria-label="Close"
            >
              <X size={20} />
            </button>
            <QRCodeSVG value={FACEBOOK_URL} size={220} includeMargin />
            <strong>Scan to visit Baste Ebike & Ecar</strong>
            <a href={FACEBOOK_URL} target="_blank" rel="noreferrer">
              Open Facebook <ExternalLink size={15} />
            </a>
          </div>
        </div>
      )}
    </main>
  );
}

createRoot(document.getElementById("root")).render(<App />);
