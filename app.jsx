const { useEffect, useState } = React;

// --- Promo Bar ---
function PromoBar() {
  return (
    <div className="promo-bar">
      Populate this marketing banner to advertise a special promotion such as: Save 20% this weekend!
    </div>
  );
}

// --- Small Top Bar ---
function SmallTop() {
  return (
    <div className="small-top">
      <div className="left">
        <span>
          Off every single day on Weekends - New Coupon code: <b>Happy2018</b>
        </span>
      </div>
      <div className="right">
        <span>Gift Certificates</span><span className="sep">|</span>
        <span>My Account</span><span className="sep">|</span>
        <span>Order Tracking</span>
      </div>
    </div>
  );
}

// --- Header ---
function Header() {
  return (
    <div className="header">
      <div className="brand"><span className="dot"></span> market <small>all in one store</small></div>
      <div className="search">
        <input placeholder="Search the store" />
        <button>Search</button>
      </div>
      <div className="header-cta">
        <span className="badge">Sign in / Register</span>
        <span>🛒 MY CART - $0.00</span>
      </div>
    </div>
  );
}

// --- Navigation ---
function Nav() {
  const links = ["ALL CATEGORIES", "HOME", "LAYOUT", "FEATURES", "DAILY DEALS", "PAGES", "BLOG", "SHOP"];
  return <div className="nav">{links.map((t, i) => <a key={i} href="#">{t}</a>)}</div>;
}

// --- Hero Section (Updated) ---
function Hero() {
  return (
    <div className="hero">
      {/* Left Big Banner */}
      <div
        className="hero-main"
        style={{
          background: "url('images/hero_main.jpg') center/cover no-repeat",
          borderRadius: "14px",
        }}
      >
        <div className="overlay">
          <h1>🔥 HOT RIGHT NOW</h1>
          <p>Summer whites and bright tropical prints capture a breezy, island vibe.</p>
          <button className="btn">Shop Now</button>
        </div>
      </div>

      {/* Right Side Cards */}
      <div className="hero-side">
        <div
          className="hero-card"
          style={{
            background: "url('images/hero2.jpg') center/cover no-repeat",
            borderRadius: "14px",
          }}
        >
          <div className="overlay small">
            <h3>👕 New Arrivals</h3>
            <p>Flat 40% Off</p>
          </div>
        </div>
        <div
          className="hero-card"
          style={{
            background: "url('images/hero3.jpg') center/cover no-repeat",
            borderRadius: "14px",
          }}
        >
          <div className="overlay small">
            <h3>🎧 Electronics</h3>
            <p>Up to 60% Off</p>
          </div>
        </div>
      </div>
    </div>
  );
}

// --- Services ---
function Services() {
  const items = [
    { t: "FREE DELIVERY", s: "On order over $49.00" },
    { t: "ORDER PROTECTION", s: "Secured Information" },
    { t: "PROMOTION GIFT", s: "Special offers" },
    { t: "MONEY BACK", s: "Return over 30 days" },
    { t: "BIG SAVING", s: "Weekly Sales" }
  ];
  return <div className="services">{items.map((it, i) => (
    <div className="service" key={i}>
      <div>📦</div>
      <div><b>{it.t}</b><small>{it.s}</small></div>
    </div>
  ))}</div>;
}

// --- Categories ---
function Categories() {
  const cats = ["Watches", "Towels & Could", "Smartphones", "Furnicoms", "Headphone", "Fashion", "Fashion", "Cameras & Photo"];
  const catImages = [
    "area-rug.jpg",
    "armchair.jpg",
    "fitness-tracker.jpg",
    "graphic-tee.jpg",
    "headphones.jpg",
    "hero-couple.jpg",
    "leather-bag.jpg",
    "office-chair.jpg"
  ];
  return (
    <div className="section">
      <h2>SHOP BY CATEGORIES</h2>
      <div className="cat-grid">
        {cats.map((c, i) => (
          <div className="cat" key={i}>
            <img src={"images/" + catImages[i]} alt={c} />
            <small>{c}</small>
          </div>
        ))}
      </div>
    </div>
  );
}

// --- Gift Strip ---
function GiftStrip() {
  return (
    <div className="strip">
      <div>🎁 <b>Gift Special</b> — Wrap more offers / gift every single day on Weekends - New Coupon code: <b>Happy2017</b></div>
      <button className="btn">Get Coupon</button>
    </div>
  );
}

// --- Countdown ---
function countDownLeft(target) {
  const diff = Math.max(0, target - Date.now());
  const d = Math.floor(diff / (1000 * 60 * 60 * 24));
  const h = Math.floor(diff / (1000 * 60 * 60)) % 24;
  const m = Math.floor(diff / (1000 * 60)) % 60;
  const s = Math.floor(diff / 1000) % 60;
  return { d, h, m, s };
}

// --- Daily Deal ---
function DailyDeal() {
  const [left, setLeft] = useState(countDownLeft(Date.now() + 86400000 * 3 + 1000 * 60 * 12));
  useEffect(() => {
    const id = setInterval(() => setLeft(countDownLeft(Date.now() + 86400000 * 3 + 1000 * 60 * 12)), 1000);
    return () => clearInterval(id);
  }, []);
  return (
    <div className="card">
      <div className="card-header"><b>DAILY DEALS</b><span className="badge">Free Shipping</span></div>
      <div className="deal-body">
        <div className="deal-img"><img src="images/winter-jacket.jpg" alt="" style={{ width: '60%' }} /></div>
        <div><b>Donce Et Libero Nunc Quis Faucibus Odio</b></div>
        <div className="price"><span className="new">$559.00</span> <span className="old">$645.00</span></div>
        <div className="deal-meta">
          <div className="countdown">
            <span>{left.d}<br />DAYS</span>
            <span>{left.h}<br />HRS</span>
            <span>{left.m}<br />MIN</span>
            <span>{left.s}<br />SEC</span>
          </div>
          <div>146 <small>Sold</small></div>
        </div>
      </div>
    </div>
  );
}

// --- Sports Section ---
function Sports() {
  const products = [
    { title: "Alternative Two-Tone R...", price: "$300.00", img: "images/graphic-tee.jpg", off: 0 },
    { title: "Bohemian Printed Dress", price: "$420.00", img: "images/pink-tshirt.jpg", off: 13 },
    { title: "congue nibh imperd", price: "$75.00 - $85.00", img: "images/armchair.jpg", off: 0 },
    { title: "Ecosmart Fleece Hoodie", price: "$359.00", img: "images/fitness-tracker.jpg", off: 0 },
    { title: "Big Flat Flap Wallet", price: "$148.00", img: "images/leather-bag.jpg", off: 0 },
    { title: "Ollum Ham Hock", price: "$368.00", img: "images/smartwatch.jpg", off: 20 },
    { title: "Crochet Lace Dress", price: "$360.00", img: "images/headphones.jpg", off: 0 },
    { title: "Ecosmart Fleece Hoodi", price: "$135.00", img: "images/hero-couple.jpg", off: 25 }
  ];
  return (
    <div className="card">
      <div className="card-header">
        <b>SPORTS</b>
        <div className="tabs">
          <a className="active">Bestselling</a><a>Featured</a><a>New Arrivals</a><a>Top Reviewed</a>
        </div>
      </div>
      <div className="products">
        {products.map((p, i) => (
          <div className="prod" key={i} style={{ position: 'relative' }}>
            {p.off > 0 && <div className="badge-off">-{p.off}%</div>}
            <div className="thumb"><img src={p.img} alt={p.title} /></div>
            <small>{p.title}</small>
            <b>{p.price}</b>
          </div>
        ))}
      </div>
    </div>
  );
}

// --- Triple Banners ---
function TripleBanners() {
  return (
    <div className="banners">
      <div className="banner"></div>
      <div className="banner"></div>
      <div className="banner"></div>
    </div>
  );
}

// --- Product Section ---
function ProductSection({ title }) {
  const items = [
    { title: "Cow pastrami jowl", price: "$390.00", img: "images/wooden-table.jpg" },
    { title: "Cud deserunt", price: "$450.00", img: "images/storage-boxes.jpg" },
    { title: "Denouncing pleasure", price: "$350.00", img: "images/red-chair.jpg" },
    { title: "Deserunt mollitia", price: "$450.00", img: "images/office-chair.jpg" },
    { title: "Donce et libero nunc quis fauc", price: "$559.00", img: "images/smartphone.jpg" }
  ];
  return (
    <div className="card" style={{ margin: "10px 16px" }}>
      <div className="card-header"><b>{title}</b>
        <div className="tabs"><a className="active">Bestselling</a><a>Featured</a><a>New Arrivals</a><a>Top Reviewed</a></div>
      </div>
      <div className="section-grid">
        {items.map((p, i) => (
          <div className="prod" key={i}>
            <div className="thumb"><img src={p.img} alt={p.title} /></div>
            <small>{p.title}</small>
            <b>{p.price}</b>
          </div>
        ))}
      </div>
    </div>
  );
}

// --- Logos Row ---
function LogosRow() {
  const labels = ["Premium Quality", "Vintage Style", "Original Brand", "Awards Original brand", "Premium Labels", "Premium Quality", "Premium Labels"];
  return <div className="logos">{labels.map((t, i) => <div key={i} className="logo-item">{t}</div>)}</div>;
}

// --- Blog Section ---
function Blog() {
  const posts = [
    { img: "images/fitness-tracker.jpg", t: "Dinvamus adipisc cing nisl", m: "26th May 2018" },
    { img: "images/graphic-tee.jpg", t: "Phase lluson sequat dolor", m: "29th May 2018" },
    { img: "images/smartwatch.jpg", t: "Divamus metus ligula", m: "29th May 2018" },
    { img: "images/pink-tshirt.jpg", t: "Sed et lorem nunc", m: "29th May 2018" },
  ];
  return (
    <div className="blog">
      <h2>LATEST BLOG</h2>
      <div className="blog-grid">
        {posts.map((p, i) => (
          <div className="blog-card" key={i}>
            <img src={p.img} alt={p.t} />
            <div className="p">
              <b>{p.t}</b><div><small>🕓 {p.m}</small></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// --- Footer ---
function Footer() {
  return (
    <div className="footer">
      <div className="top">
        <div>
          <div className="brand"><span className="dot"></span> market <small>all in one store</small></div>
        </div>
        <div className="newsletter">
          <input placeholder="Your email address" />
          <button>SUBSCRIBE</button>
        </div>
      </div>
      <div className="cols">
        <div className="fcol">
          <h4>CONTACT US</h4>
          <ul>
            <li>San Luis Potosí, Centro Historico, 78000 San Luis Potosí, SLP, Mexico</li>
            <li>(+04) 03 310 215</li>
            <li>MarketMag@ecom.com</li>
            <li>Open Time: 8:00AM - 6:00PM</li>
          </ul>
        </div>
        <div className="fcol"><h4>OUR SHOPS</h4><ul>
          <li>Product Support</li><li>PC Setup</li><li>Services</li><li>Consultations</li><li>Privacy Policy</li><li>Return Exchange</li>
        </ul></div>
        <div className="fcol"><h4>INFORMATION</h4><ul>
          <li>Layout</li><li>Features</li><li>Daily Deals</li><li>Pages</li><li>Blog</li><li>Shop</li>
        </ul></div>
        <div className="fcol"><h4>ALL CATEGORIES</h4><ul>
          <li>Accessories</li><li>Bags</li><li>Clothing</li><li>Home & Living</li><li>Electronics</li>
        </ul></div>
        <div className="fcol"><h4>INSTAGRAM GALLERY</h4><ul>
          <li>— Images —</li>
        </ul></div>
      </div>
      <div className="pay">
        <img src="images/discover.png" alt="" />
        <img src="images/visa.png" alt="" />
        <img src="images/master.png" alt="" />
        <img src="images/paypal.png" alt="" />
      </div>
    </div>
  );
}

// --- App ---
function App() {
  return (
    <>
      <PromoBar />
      <SmallTop />
      <Header />
      <Nav />
      <Hero />
      <Services />
      <Categories />
      <GiftStrip />
      <div className="grid-2">
        <DailyDeal />
        <Sports />
      </div>
      <TripleBanners />
      <ProductSection title="COMPUTER" />
      <ProductSection title="TRENDING ITEM" />
      <LogosRow />
      <Blog />
      <Footer />
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
