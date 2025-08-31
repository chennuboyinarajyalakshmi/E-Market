
const {useEffect, useState} = React;

function PromoBar(){
  return (<div className="promo-bar">Populate this marketing banner to advertise a special promotion such as: Save 20% this weekend!</div>);
}

function SmallTop(){
  return (
    <div className="small-top">
      <div className="left">
        <span>Off every single day on Weekends - New Coupon code: <b>Happy2018</b></span>
      </div>
      <div className="right">
        <span>Gift Certificates</span><span className="sep">|</span>
        <span>My Account</span><span className="sep">|</span>
        <span>Order Tracking</span>
      </div>
    </div>
  );
}

function Header(){
  return (
    <div className="header">
      <div className="brand"><span className="dot"></span> market <small>all in one store</small></div>
      <div className="search">
        <input placeholder="Search the store"/>
        <button>Search</button>
      </div>
      <div className="header-cta">
        <span className="badge">Sign in / Register</span>
        <span>🛒 MY CART - $0.00</span>
      </div>
    </div>
  )
}

function Nav(){
  const links = ["ALL CATEGORIES","HOME","LAYOUT","FEATURES","DAILY DEALS","PAGES","BLOG","SHOP"];
  return <div className="nav">{links.map((t,i)=><a key={i} href="#">{t}</a>)}</div>
}

function Hero(){
  return (
    <div className="hero">
      <div className="hero-main">
        <div className="content">
          <h1>HOT RIGHT NOW</h1>
          <p>Summer whites and bright tropical prints capture a breezy, island vibe.</p>
          <button className="btn">Shop Now</button>
        </div>
      </div>
      <div className="hero-side">
        <div className="hero-card"></div>
        <div className="hero-card"></div>
      </div>
    </div>
  )
}

function Services(){
  const items=[
    {t:"FREE DELIVERY",s:"On order over $49.00"},
    {t:"ORDER PROTECTION",s:"Secured Information"},
    {t:"PROMOTION GIFT",s:"Special offers"},
    {t:"MONEY BACK",s:"Return over 30 days"},
    {t:"BIG SAVING",s:"Weekly Sales"}
  ];
  return <div className="services">{items.map((it,i)=>(
    <div className="service" key={i}>
      <div>📦</div>
      <div><b>{it.t}</b><small>{it.s}</small></div>
    </div>
  ))}</div>
}

function Categories(){
  const cats = ["Watches","Towels & Could","Smartphones","Furnicoms","Headphone","Fashion","Fashion","Cameras & Photo"];
  return (
    <div className="section">
      <h2>SHOP BY CATEGORIES</h2>
      <div className="cat-grid">
        {cats.map((c,i)=> (
          <div className="cat" key={i}>
            <img src={"images/cat"+((i%6)+1)+".png"} alt=""/>
            <small>{c}</small>
          </div>
        ))}
      </div>
    </div>
  )
}

function GiftStrip(){
  return <div className="strip">
    <div>🎁 <b>Gift Special</b> — Wrap more offers / gift every single day on Weekends - New Coupon code: <b>Happy2017</b></div>
    <button className="btn">Get Coupon</button>
  </div>
}

function countDownLeft(target){
  const diff = Math.max(0, target - Date.now());
  const d = Math.floor(diff / (1000*60*60*24));
  const h = Math.floor(diff / (1000*60*60)) % 24;
  const m = Math.floor(diff / (1000*60)) % 60;
  const s = Math.floor(diff / 1000) % 60;
  return {d,h,m,s};
}

function DailyDeal(){
  const [left, setLeft] = useState(countDownLeft(Date.now()+86400000*3 + 1000*60*12));
  useEffect(()=>{
    const id = setInterval(()=> setLeft(countDownLeft(Date.now()+86400000*3 + 1000*60*12)), 1000);
    return ()=> clearInterval(id);
  },[]);
  return (
    <div className="card">
      <div className="card-header"><b>DAILY DEALS</b><span className="badge">Free Shipping</span></div>
      <div className="deal-body">
        <div className="deal-img"><img src="images/jacket.jpg" alt="" style={{width:'60%'}}/></div>
        <div><b>Donce Et Libero Nunc Quis Faucibus Odio</b></div>
        <div className="price"><span className="new">$559.00</span> <span className="old">$645.00</span></div>
        <div className="deal-meta">
          <div className="countdown">
            <span>{left.d}<br/>DAYS</span>
            <span>{left.h}<br/>HRS</span>
            <span>{left.m}<br/>MIN</span>
            <span>{left.s}<br/>SEC</span>
          </div>
          <div>146 <small>Sold</small></div>
        </div>
      </div>
    </div>
  )
}

function Sports(){
  const products = Array.from({length:8}).map((_,i)=>({
    title:["Alternative Two-Tone R...","Bohemian Printed Dress","congue nibh imperd","Ecosmart Fleece Hoodie","Big Flat Flap Wallet","Ollum Ham Hock","Crochet Lace Dress","Ecosmart Fleece Hoodi"][i],
    price:["$300.00","$420.00","$75.00 - $85.00","$359.00","$148.00","$368.00","$360.00","$135.00"][i],
    img:"images/p"+((i%6)+1)+".jpg",
    off:[0,13,0,0,0,20,0,25][i]
  }));
  return (
    <div className="card">
      <div className="card-header">
        <b>SPORTS</b>
        <div className="tabs">
          <a className="active">Bestselling</a><a>Featured</a><a>New Arrivals</a><a>Top Reviewed</a>
        </div>
      </div>
      <div className="products">
        {products.map((p,i)=>(
          <div className="prod" key={i} style={{position:'relative'}}>
            {p.off>0 && <div className="badge-off">-{p.off}%</div>}
            <div className="thumb"><img src={p.img} alt=""/></div>
            <small>{p.title}</small>
            <b>{p.price}</b>
          </div>
        ))}
      </div>
    </div>
  )
}

function TripleBanners(){
  return <div className="banners">
    <div className="banner"></div>
    <div className="banner"></div>
    <div className="banner"></div>
  </div>
}

function ProductSection({title}){
  const items = Array.from({length:5}).map((_,i)=>({
    title:["Cow pastrami jowl","Cud deserunt","Denouncing pleasure","Deserunt mollitia","Donce et libero nunc quis fauc"][i],
    price:["$390.00","$450.00","$350.00","$450.00","$559.00"][i],
    img:"images/p"+((i%6)+1)+".jpg"
  }));
  return (
    <div className="card" style={{margin:"10px 16px"}}>
      <div className="card-header"><b>{title}</b>
        <div className="tabs"><a className="active">Bestselling</a><a>Featured</a><a>New Arrivals</a><a>Top Reviewed</a></div>
      </div>
      <div className="section-grid">
        {items.map((p,i)=>(
          <div className="prod" key={i}>
            <div className="thumb"><img src={p.img}/></div>
            <small>{p.title}</small>
            <b>{p.price}</b>
          </div>
        ))}
      </div>
    </div>
  )
}

function LogosRow(){
  const labels = ["Premium Quality","Vintage Style","Original Brand","Awards Original brand","Premium Labels","Premium Quality","Premium Labels"];
  return <div className="logos">{labels.map((t,i)=><div key={i} className="logo-item">{t}</div>)}</div>
}

function Blog(){
  const posts=[
    {img:"images/blog1.jpg",t:"Dinvamus adipisc cing nisl",m:"26th May 2018"},
    {img:"images/blog2.jpg",t:"Phase lluson sequat dolor",m:"29th May 2018"},
    {img:"images/blog3.jpg",t:"Divamus metus ligula",m:"29th May 2018"},
    {img:"images/blog4.jpg",t:"Sed et lorem nunc",m:"29th May 2018"},
  ];
  return (
    <div className="blog">
      <h2>LATEST BLOG</h2>
      <div className="blog-grid">
        {posts.map((p,i)=>(
          <div className="blog-card" key={i}>
            <img src={p.img} alt=""/>
            <div className="p">
              <b>{p.t}</b><div><small>🕓 {p.m}</small></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function Footer(){
  return (
    <div className="footer">
      <div className="top">
        <div>
          <div className="brand"><span className="dot"></span> market <small>all in one store</small></div>
        </div>
        <div className="newsletter">
          <input placeholder="Your email address"/>
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
        <img src="images/discover.png" alt=""/>
        <img src="images/visa.png" alt=""/>
        <img src="images/master.png" alt=""/>
        <img src="images/paypal.png" alt=""/>
      </div>
    </div>
  )
}

function App(){
  return (<>
    <PromoBar/>
    <SmallTop/>
    <Header/>
    <Nav/>
    <Hero/>
    <Services/>
    <Categories/>
    <GiftStrip/>
    <div className="grid-2">
      <DailyDeal/>
      <Sports/>
    </div>
    <TripleBanners/>
    <ProductSection title="COMPUTER"/>
    <ProductSection title="TRENDING ITEM"/>
    <LogosRow/>
    <Blog/>
    <Footer/>
  </>)
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);
