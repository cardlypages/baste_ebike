import React, { useEffect, useState } from "react";
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
  Contact,
  Download,
  Music2,
  Globe,
  MapPinned,
} from "lucide-react";
import logo from "./assets/baste-logo.png";
import promoPoster from "./assets/pamaskong-handog.png";
import "./styles.css";

const FACEBOOK_URL = "https://www.facebook.com/Basteebike";
const MESSENGER_URL = "https://m.me/Basteebike";
const YOUTUBE_URL = "https://www.youtube.com/channel/UCbl_qJ6uZH3Cwl_NzgHwDRA";
const TIKTOK_URL = "https://www.tiktok.com/@iamlolmumai";
const PHONE_NUMBERS = [
  { label: "0976 658 3752", dial: "09766583752" },
  { label: "0936 380 3524", dial: "09363803524" },
  { label: "0936 380 3523", dial: "09363803523" },
];
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

// Additional Big Tires and cargo models from the newly supplied promotional posters.
const BIG_TIRE_PRODUCTS = [
  {
    name: "Prada Closed Back",
    image: "prada-closed-back.jpg",
    price: "See poster for price",
    label: "CLOSED-BACK E-TRIKE",
    category: "big-tires",
  },
  {
    name: "Monster Cargo 2-in-1",
    image: "monster-cargo-2in1.jpg",
    price: "₱139,999 / ₱169,999",
    label: "CARGO • 8–10 SEATER",
    category: "big-tires",
  },
  {
    name: "Beast Cargo",
    image: "beast-cargo.jpg",
    price: "₱169,999 / ₱189,999",
    label: "CARGO E-TRIKE",
    category: "big-tires",
  },
  {
    name: "Raptor",
    image: "raptor.jpg",
    price: "₱149,999",
    label: "PASSENGER E-TRIKE",
    category: "big-tires",
  },
  {
    name: "Hummer Version 2",
    image: "hummer-v2.jpg",
    price: "₱124,999",
    label: "PASSENGER E-TRIKE",
    category: "big-tires",
  },
  {
    name: "Tanker",
    image: "tanker.jpg",
    price: "₱109,999",
    label: "BIG-TIRE E-TRIKE",
    category: "big-tires",
  },
  {
    name: "Raptor V3 Solar",
    image: "raptor-v3-solar.jpg",
    price: "₱129,999",
    label: "SOLAR • 4 DOOR",
    category: "big-tires",
  },
];

const BIG_TIRE_IMAGE_PATH = (image) => `/images/products/big-tires/${image}`;

function App() {
  const [activeTab, setActiveTab] = useState("home");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const initialLoader = window.setTimeout(() => setIsLoading(false), 900);
    return () => window.clearTimeout(initialLoader);
  }, []);

  const navigateToTab = (tab) => {
    if (tab === activeTab) return;
    setIsLoading(true);
    window.setTimeout(() => {
      setActiveTab(tab);
      setIsLoading(false);
    }, 280);
  };
  const [menuOpen, setMenuOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const [showQr, setShowQr] = useState(false);
  const [showAllProducts, setShowAllProducts] = useState(false);
  const [catalogCategory, setCatalogCategory] = useState("ecars");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const openCatalog = (category = "ecars") => {
    setCatalogCategory(category);
    setShowAllProducts(true);
  };

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(FACEBOOK_URL);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      setShowQr(true);
    }
  };

  const saveContact = () => {
    const vcard = [
      "BEGIN:VCARD",
      "VERSION:3.0",
      "N:Baste E-bike & E-car;;;;",
      "FN:Baste E-bike & E-car",
      "ORG:Baste E-bike & E-car",
      ...PHONE_NUMBERS.map((phone) => `TEL;TYPE=CELL,VOICE:${phone.dial}`),
      `ADR;TYPE=WORK:;;GD Plaza, in front of WalterMart Guiguinto, beside Yamaha Guiguinto;Guiguinto;Bulacan;;Philippines`,
      `URL:${FACEBOOK_URL}`,
      `URL:${TIKTOK_URL}`,
      `URL:${YOUTUBE_URL}`,
      "NOTE:Electric bike, electric car, and big-tire e-trike dealer. Payment methods: Cash on Delivery, GCash, Bank Transfer, Credit Card, Home Credit.",
      "END:VCARD",
    ].join("\r\n");
    const blob = new Blob([vcard], { type: "text/vcard;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "Baste-Ebike-Ecar.vcf";
    document.body.appendChild(link);
    link.click();
    link.remove();
    URL.revokeObjectURL(url);
  };

  const closeMenu = () => setMenuOpen(false);

  return (
    <main>
      {isLoading && (
        <div
          className="brand-loader"
          role="status"
          aria-live="polite"
          aria-label="Loading Baste E-bike and E-car"
        >
          <div className="loader-logo-wrap">
            <img src={logo} alt="" />
            <span className="loader-ring" />
          </div>
          <strong>BASTE</strong>
          <small>EBIKE & ECAR</small>
          <div className="loader-track">
            <span />
          </div>
          <p>Preparing your ride...</p>
        </div>
      )}
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />
      {activeTab !== "home" && (
        <header className="topbar">
          <a
            className="brand-lockup"
            href="#home"
            onClick={() => navigateToTab("home")}
          >
            <img src={logo} alt="Baste Ebike & Ecar logo" />
            <span>
              <strong>BASTE</strong>
              <small>EBIKE & ECAR</small>
            </span>
          </a>

          <a className="topbar-contact" href="tel:09363803524">
            <MessageCircle size={16} />
            Call Baste <span>0936 380 3524</span>
          </a>
        </header>
      )}

      {activeTab === "home" && (
        <div className="tab-panel home-panel">
          <section className="hero section-wrap" id="home">
            <div className="hero-copy reveal">
              <div className="hero-brand-tagline">
                <div className="hero-brand-mark">
                  <img src={logo} alt="Baste E-bike and E-car logo" />
                </div>
                <div className="hero-tagline-copy">
                  <div className="eyebrow">
                    <span className="pulse-dot" /> ELECTRIC CAR DEALER •
                    GUIGUINTO, BULACAN
                  </div>
                  <h1>
                    Drive smarter.
                    <br />
                    <em>Live greener.</em>
                  </h1>
                  <p className="hero-lead">
                    Discover compact electric cars for everyday city driving,
                    with model options and prices to fit different needs.
                  </p>
                </div>
              </div>
              <div className="hero-actions">
                <a
                  className="btn btn-gold"
                  href={MESSENGER_URL}
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
          </section>

          <section
            className="home-showcase section-wrap"
            aria-label="Baste vehicle lineup photos"
          >
            <div className="home-showcase-heading">
              <span className="eyebrow">ON OUR LOT</span>
              <strong>See the Baste lineup.</strong>
            </div>
            <div className="home-showcase-grid">
              <button
                type="button"
                className="home-showcase-card"
                onClick={() => navigateToTab("cars")}
                aria-label="Explore the Baste e-car models"
              >
                <img
                  src="/images/showcase/baste-lineup-white-cars.jpg"
                  alt="A lineup of compact electric cars available to view at Baste in Guiguinto"
                  loading="eager"
                />
                <span className="showcase-caption">
                  <span>COMPACT E-CARS</span>
                  <strong>
                    Find your everyday ride{" "}
                    <ArrowRight size={12} aria-hidden="true" />
                  </strong>
                </span>
              </button>
              <button
                type="button"
                className="home-showcase-card"
                onClick={() => openCatalog("ecars")}
                aria-label="Open the full catalog of Baste e-car models"
              >
                <img
                  src="/images/showcase/baste-lineup-orange-car.jpg"
                  alt="Baste vehicle lineup with an orange electric car and other compact e-cars"
                  loading="eager"
                />
                <span className="showcase-caption">
                  <span>MORE OPTIONS</span>
                  <strong>
                    Explore all 14 models{" "}
                    <ArrowRight size={12} aria-hidden="true" />
                  </strong>
                </span>
              </button>
            </div>
          </section>

          <section
            className="promo-section section-wrap"
            aria-labelledby="holiday-promo-title"
          >
            <div className="promo-section-heading">
              <span className="eyebrow">ONGOING CUSTOMER PROMO</span>
              <h2 id="holiday-promo-title">
                Pamaskong Handog <em>ng Baste.</em>
              </h2>
              <p>
                Buy any unit and get one raffle entry. Promo details and
                eligibility should be confirmed with the Baste team.
              </p>
            </div>
            <a
              className="promo-poster-link"
              href={promoPoster}
              target="_blank"
              rel="noreferrer"
              aria-label="Open the full Pamaskong Handog promo poster"
            >
              <img
                src={promoPoster}
                alt="Baste Pamaskong Handog promo poster: buy any unit and get one raffle entry, with Noche Buena packages, cash prizes, a staycation prize, and an e-bike grand prize"
                loading="lazy"
              />
            </a>
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
                      ? openCatalog("ecars")
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
                <CarFront size={17} /> 14 E-CAR MODELS + 7 BIG-TIRE MODELS
              </span>
              <div className="catalog-footer-actions">
                <button
                  className="btn btn-outline"
                  onClick={() => openCatalog("big-tires")}
                >
                  Big Tires & Cargo <ArrowRight size={16} />
                </button>
                <button
                  className="btn btn-gold"
                  onClick={() => openCatalog("ecars")}
                >
                  Browse E-Cars <ArrowRight size={16} />
                </button>
              </div>
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
            <section
              className="payment-methods payment-methods-catalog"
              aria-labelledby="payment-methods-title"
            >
              <div className="payment-section-heading">
                <span className="eyebrow">FLEXIBLE PAYMENT OPTIONS</span>
                <h2 id="payment-methods-title">
                  Ways to <em>pay.</em>
                </h2>
                <p>
                  Choose from the payment methods offered by Baste. Confirm
                  eligibility, terms, and availability with the shop before
                  placing your order.
                </p>
              </div>
              <div className="payment-method-list">
                <span>💵 Cash on Delivery (COD)</span>
                <span>GCash</span>
                <span>Bank Transfer</span>
                <span>Credit Card</span>
                <span>Home Credit</span>
              </div>
            </section>
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
          <section className="contact-page section-wrap">
            <header className="contact-page-heading">
              <span className="eyebrow">CONNECT WITH BASTE</span>
              <h1>
                Let’s keep in <em>touch.</em>
              </h1>
              <p>
                Save our details to your phone or choose a channel below to
                reach Baste E-bike & E-car.
              </p>
            </header>

            <section
              className="save-contact-card"
              aria-labelledby="save-contact-title"
            >
              <div className="save-contact-brand">
                <div className="save-contact-logo">
                  <img src={logo} alt="Baste E-bike & E-car logo" />
                </div>
                <div>
                  <span className="eyebrow">BASTE • GUIGUINTO, BULACAN</span>
                  <h2 id="save-contact-title">Baste E-bike & E-car</h2>
                  <p>Electric mobility for everyday journeys.</p>
                </div>
              </div>
              <button
                className="btn btn-gold save-contact-button"
                onClick={saveContact}
              >
                <Contact size={19} /> Save Contact to Phone{" "}
                <Download size={17} />
              </button>
              <div className="contact-phone-list">
                {PHONE_NUMBERS.map((phone, index) => (
                  <a
                    className="contact-phone-card"
                    href={`tel:${phone.dial}`}
                    key={phone.dial}
                  >
                    <span className="contact-phone-icon">
                      <Phone size={18} />
                    </span>
                    <span>
                      <small>
                        {index === 0 ? "ALTERNATE CONTACT" : "CALL / VIBER"}
                      </small>
                      <strong>{phone.label}</strong>
                    </span>
                    <ArrowRight size={17} />
                  </a>
                ))}
              </div>
              <div className="contact-address">
                <MapPinned size={18} />
                <span>
                  <strong>Visit our showroom</strong>
                  <small>
                    GD Plaza, in front of WalterMart Guiguinto, beside Yamaha
                    Guiguinto, Bulacan
                  </small>
                </span>
                <a
                  href={WAZE_URL}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Get directions"
                >
                  <Navigation size={17} />
                </a>
              </div>
              <p className="vcard-note">
                The contact file includes all three phone numbers, our location,
                and Facebook, TikTok, and YouTube links.
              </p>
            </section>

            <section
              className="social-accounts-section"
              aria-labelledby="social-accounts-title"
            >
              <div className="social-section-heading">
                <div>
                  <span className="eyebrow">FOLLOW OUR UPDATES</span>
                  <h2 id="social-accounts-title">
                    Find us on <em>socials.</em>
                  </h2>
                </div>
                <p>
                  See new arrivals, promos, and featured units on our official
                  channels.
                </p>
              </div>
              <div className="social-account-grid">
                <a
                  className="social-account-card facebook-account"
                  href={FACEBOOK_URL}
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="social-account-icon">
                    <Facebook size={24} />
                  </span>
                  <span className="social-account-copy">
                    <small>FOLLOW OUR PAGE</small>
                    <strong>Facebook</strong>
                    <em>@Basteebike</em>
                  </span>
                  <span className="social-account-arrow">
                    <ArrowRight size={18} />
                  </span>
                </a>
                <a
                  className="social-account-card tiktok-account"
                  href={TIKTOK_URL}
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="social-account-icon">
                    <Music2 size={24} />
                  </span>
                  <span className="social-account-copy">
                    <small>WATCH OUR VIDEOS</small>
                    <strong>TikTok</strong>
                    <em>@iamlolmumai</em>
                  </span>
                  <span className="social-account-arrow">
                    <ArrowRight size={18} />
                  </span>
                </a>
                <a
                  className="social-account-card youtube-account"
                  href={YOUTUBE_URL}
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="social-account-icon">
                    <Youtube size={24} />
                  </span>
                  <span className="social-account-copy">
                    <small>WATCH & SUBSCRIBE</small>
                    <strong>YouTube</strong>
                    <em>Baste E-bike & E-car</em>
                  </span>
                  <span className="social-account-arrow">
                    <ArrowRight size={18} />
                  </span>
                </a>
              </div>
            </section>

            <div className="contact-bottom-note">
              <MessageCircle size={19} />
              <span>
                <strong>Ready to find your next ride?</strong>
                <small>
                  Message us to confirm current prices, promos, payment options,
                  and unit availability.
                </small>
              </span>
              <a
                className="btn btn-dark"
                href="https://m.me/Basteebike"
                target="_blank"
                rel="noreferrer"
              >
                Message Baste <ArrowRight size={16} />
              </a>
            </div>
          </section>
        </div>
      )}

      <nav className="bottom-menu" aria-label="Main menu">
        <button
          className={
            activeTab === "home"
              ? "bottom-menu-item active"
              : "bottom-menu-item"
          }
          onClick={() => navigateToTab("home")}
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
          onClick={() => navigateToTab("cars")}
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
          onClick={() => navigateToTab("location")}
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
          onClick={() => navigateToTab("contact")}
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
            aria-label="Baste vehicle catalog"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="catalog-modal-header">
              <div>
                <span className="eyebrow">BASTE VEHICLE CATALOG</span>
                <h2>
                  Choose your <em>next ride.</em>
                </h2>
                <p>
                  Browse compact e-cars or explore our big-tire passenger and
                  cargo models.
                </p>
              </div>
              <button
                className="catalog-modal-close"
                onClick={() => setShowAllProducts(false)}
                aria-label="Close catalog"
              >
                <X size={23} />
              </button>
            </div>
            <div
              className="catalog-category-switch"
              role="tablist"
              aria-label="Vehicle categories"
            >
              <button
                role="tab"
                aria-selected={catalogCategory === "ecars"}
                className={catalogCategory === "ecars" ? "active" : ""}
                onClick={() => setCatalogCategory("ecars")}
              >
                <CarFront size={17} /> E-Cars <span>14</span>
              </button>
              <button
                role="tab"
                aria-selected={catalogCategory === "big-tires"}
                className={catalogCategory === "big-tires" ? "active" : ""}
                onClick={() => setCatalogCategory("big-tires")}
              >
                <Bike size={17} /> Big Tires & Cargo <span>7</span>
              </button>
            </div>
            <div className="catalog-modal-grid">
              {(catalogCategory === "ecars" ? PRODUCTS : BIG_TIRE_PRODUCTS).map(
                (product) => (
                  <button
                    className="catalog-modal-item"
                    key={product.image}
                    onClick={() => {
                      setSelectedProduct({
                        ...product,
                        isBigTire: catalogCategory === "big-tires",
                      });
                      setShowAllProducts(false);
                    }}
                  >
                    <img
                      src={
                        catalogCategory === "big-tires"
                          ? BIG_TIRE_IMAGE_PATH(product.image)
                          : `/images/products/${product.image}`
                      }
                      alt={`${product.name} promotional poster`}
                      loading="lazy"
                    />
                    <span>
                      <strong>{product.name}</strong>
                      <b>{product.price}</b>
                    </span>
                  </button>
                ),
              )}
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
              src={
                selectedProduct.isBigTire
                  ? BIG_TIRE_IMAGE_PATH(selectedProduct.image)
                  : `/images/products/${selectedProduct.image}`
              }
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
