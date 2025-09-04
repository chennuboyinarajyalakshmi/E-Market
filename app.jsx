const { useState } = React;

// --- Promo Bar ---
function PromoBar() {
  return (
    <div className="promo-bar">
      🎉 Free Shipping on Orders Above ₹999! Shop Now!
    </div>
  );
}

// --- Small Top ---
function SmallTop() {
  return (
    <div className="small-top">
      <div className="left">
        <span>📞 +91-9876543210</span>
        <span className="sep">|</span>
        <span>Help Center</span>
      </div>
      <div className="right">
        <span>Track Order</span>
        <span className="sep">|</span>
        <span>Login / Signup</span>
      </div>
    </div>
  );
}

// --- Header ---
function Header() {
  return (
    <header className="header">
      <div className="brand">
        <span className="dot"></span> eMarket <small>.store</small>
      </div>
      <div className="search">
        <input type="text" placeholder="Search for products, brands and more..." />
        <button>🔍</button>
      </div>
      <div className="header-cta">
        <span>Wishlist</span>
        <span>Cart <span className="badge">2</span></span>
      </div>
    </header>
  );
}

// --- Nav ---
function Nav() {
  return (
    <nav className="nav">
      <a href="#">Men</a>
      <a href="#">Women</a>
      <a href="#">Kids</a>
      <a href="#">Electronics</a>
      <a href="#">Home & Furniture</a>
      <a href="#">Beauty</a>
      <a href="#">Sports</a>
    </nav>
  );
}

// --- Hero Section ---
function Hero() {
  return (
    <div className="hero">
      {/* Left Big Banner */}
      <div className="hero-main">
        <div className="content">
          <h1>🔥 Hot Right Now</h1>
          <p>
            Fresh arrivals for your wardrobe. Explore trending fashion,  
            tropical prints, and unbeatable deals today!
          </p>
          <button className="btn">Shop Now</button>
        </div>
      </div>

      {/* Right Side Cards */}
      <div className="hero-side">
        <div className="hero-card">
          <div className="overlay">
            <h3>👕 New Arrivals</h3>
            <p>Flat 40% Off</p>
          </div>
        </div>
        <div className="hero-card">
          <div className="overlay">
            <h3>🎧 Electronics Sale</h3>
            <p>Up to 60% Off</p>
          </div>
        </div>
      </div>
    </div>
  );
}

// --- App Root ---
function App() {
  return (
    <>
      <PromoBar />
      <SmallTop />
      <Header />
      <Nav />
      <Hero />
      {/* Keep your other sections: services, categories, deals, etc. */}
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
