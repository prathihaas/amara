// AMARA v2 — Modern luxury, mobile-first
// Self-contained: data + UI in one file (smaller surface than v1).

const ROOMS_V2 = window.ROOMS;
const MENU_V2 = window.MENU;
const CATEGORIES_V2 = window.CATEGORIES;
const GALLERY_V2 = window.GALLERY;

// ───────────── Hero stories (typographic, no photos) ─────────────
const STORIES = [
  {
    n: '01',
    eyebrow: 'The Stay',
    headline: <>A boutique <em>hideaway</em> in old Nizamabad.</>,
    sub: 'Twelve rooms. A private courtyard. Mornings that start with chai on the terrace and end with the muezzin echoing across the fort.',
    cta: 'Discover Rooms',
    target: 'rooms',
    palette: 'maroon', // maroon bg, ivory text, gold accent
  },
  {
    n: '02',
    eyebrow: 'The Table',
    headline: <>Telangana, <em>plated</em> with restraint.</>,
    sub: 'A Hyderabadi kitchen rooted in dum & dakhni traditions. Rose, saffron, mace — the things our grandmothers measured by smell.',
    cta: 'Visit the Restaurant',
    target: 'dine',
    palette: 'ivory', // ivory bg, maroon type, gold leaf
  },
  {
    n: '03',
    eyebrow: 'The Place',
    headline: <>Nizamabad, <em>unhurried</em>.</>,
    sub: 'Walk to the fort at dusk. Cardamom market on Sundays. We will draw you a map and pack you a flask.',
    cta: 'About Amara',
    target: 'about',
    palette: 'gold', // deep maroon w/ gold mesh, ivory type
  },
];

// ───────────── Tiny icons ─────────────
const Ico = {
  search: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/></svg>,
  bag: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4"><path d="M5 8h14l-1 12H6L5 8Z"/><path d="M9 8V6a3 3 0 1 1 6 0v2"/></svg>,
  home: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4"><path d="M4 11 12 4l8 7v9H4v-9Z"/><path d="M9 20v-6h6v6"/></svg>,
  bed: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4"><path d="M3 18V8M21 18v-6H3"/><path d="M7 12V9h6v3"/></svg>,
  fork: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4"><path d="M7 4v7a3 3 0 0 0 3 3v6"/><path d="M7 4v3M11 4v3"/><path d="M16 4c-1 4-1 7 0 9h2v6"/></svg>,
  book: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4"><path d="M5 4h11a3 3 0 0 1 3 3v13H8a3 3 0 0 1-3-3V4Z"/><path d="M5 17h14"/></svg>,
  user: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4"><circle cx="12" cy="8" r="4"/><path d="M4 21c1-4 4-6 8-6s7 2 8 6"/></svg>,
  arrow: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4"><path d="M5 12h14M13 6l6 6-6 6"/></svg>,
  arrowLeft: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4"><path d="M19 12H5M11 6 5 12l6 6"/></svg>,
  close: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4"><path d="M6 6l12 12M18 6 6 18"/></svg>,
  sun: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4"><circle cx="12" cy="12" r="4"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3M5 5l2 2M17 17l2 2M5 19l2-2M17 7l2-2"/></svg>,
  pot: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4"><path d="M4 9h16l-1 11H5L4 9Z"/><path d="M2 9h20M9 5l-1 4M15 5l1 4"/></svg>,
  bowl: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4"><path d="M3 11h18a9 9 0 0 1-18 0Z"/><path d="M5 7c2-2 4-1 4 1M11 5c2-2 4-1 4 1M16 8c1-2 3-2 4 0"/></svg>,
  flame: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4"><path d="M12 22c4 0 7-3 7-7 0-4-4-6-3-11-3 1-7 5-7 9 0-2-2-3-2-3 0 2-2 4-2 7 0 3 3 5 7 5Z"/></svg>,
  bread: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4"><path d="M3 12c0-4 4-7 9-7s9 3 9 7-3 5-3 5H6s-3 0-3-5Z"/></svg>,
  heart: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4"><path d="M12 20s-7-4-7-10a4 4 0 0 1 7-2 4 4 0 0 1 7 2c0 6-7 10-7 10Z"/></svg>,
  cup: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4"><path d="M5 8h12v6a4 4 0 0 1-4 4H9a4 4 0 0 1-4-4V8Z"/><path d="M17 10h2a2 2 0 0 1 0 4h-2"/></svg>,
  grid: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4"><rect x="4" y="4" width="7" height="7"/><rect x="13" y="4" width="7" height="7"/><rect x="4" y="13" width="7" height="7"/><rect x="13" y="13" width="7" height="7"/></svg>,
  leaf: <svg viewBox="0 0 24 18" fill="currentColor"><path d="M12 0c-3 4-3 8 0 12 3-4 3-8 0-12Z"/><path d="M9 4c-3 1-5 4-5 7 3-1 5-4 5-7Z"/><path d="M15 4c3 1 5 4 5 7-3-1-5-4-5-7Z"/></svg>,
};

// ───────────── Hero ─────────────
const Hero = ({ onNav }) => {
  const [i, setI] = React.useState(0);
  const [progressKey, setProgressKey] = React.useState(0);

  React.useEffect(() => {
    const t = setTimeout(() => {
      setI((p) => (p + 1) % STORIES.length);
      setProgressKey((k) => k + 1);
    }, 7500);
    return () => clearTimeout(t);
  }, [i]);

  const story = STORIES[i];

  const go = (delta) => {
    setI((p) => (p + delta + STORIES.length) % STORIES.length);
    setProgressKey((k) => k + 1);
  };

  return (
    <section className={`hero hero-pal-${story.palette}`}>
      {/* Decorative typographic background — big initial letter, faded */}
      <div className="hero-decor" aria-hidden="true">
        <div className="hero-bigletter">{story.eyebrow.split(' ').slice(-1)[0][0]}</div>
        <svg className="hero-orn" viewBox="0 0 600 600" aria-hidden="true">
          <circle cx="300" cy="300" r="280" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.3"/>
          <circle cx="300" cy="300" r="200" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.2"/>
          <circle cx="300" cy="300" r="120" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.15"/>
        </svg>
      </div>

      <div className="hero-content">
        <div className="hero-meta">
          <span className="num">{story.n}</span>
          <span>/ {String(STORIES.length).padStart(2, '0')}</span>
          <span style={{ marginLeft: 'auto', opacity: 0.7 }}>Nizamabad · TG</span>
        </div>

        <div className="hero-bottom">
          <div className="hero-text" key={progressKey}>
            <div className="hero-eyebrow">{story.eyebrow}</div>
            <h1 className="hero-headline" style={{ marginTop: '0.6rem', marginBottom: '0.85rem' }}>
              {story.headline}
            </h1>
            <p className="hero-sub">{story.sub}</p>
            <div className="hero-cta-row" style={{ marginTop: '1.25rem' }}>
              <button className="btn btn-cta" onClick={() => onNav(story.target)}>
                {story.cta} {Ico.arrow}
              </button>
              <button className="btn btn-text-onhero" onClick={() => onNav('about')}>
                Our Story
              </button>
            </div>
          </div>

          <div>
            <div className="hero-progress" key={`p-${progressKey}`}>
              {STORIES.map((_, idx) => (
                <div
                  key={idx}
                  className={`seg ${idx === i ? 'active' : ''} ${idx < i ? 'done' : ''}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="hero-arrows">
        <button onClick={() => go(-1)} aria-label="Previous">{Ico.arrowLeft}</button>
        <button onClick={() => go(1)} aria-label="Next">{Ico.arrow}</button>
      </div>
    </section>
  );
};

// ───────────── Booking strip ─────────────
const Booking = ({ onSearch }) => {
  const [d1, setD1] = React.useState('Thu 12 Nov');
  const [d2, setD2] = React.useState('Sun 15 Nov');
  const [g, setG] = React.useState('2 guests');
  const [r, setR] = React.useState('1 room');
  return (
    <div className="booking">
      <div className="booking-grid">
        <div className="field">
          <label>Arrival</label>
          <span className="value">{d1}</span>
        </div>
        <div className="field">
          <label>Departure</label>
          <span className="value">{d2}</span>
        </div>
        <div className="field">
          <label>Guests</label>
          <span className="value">{g}</span>
        </div>
        <div className="field">
          <label>Rooms</label>
          <span className="value">{r}</span>
        </div>
        <div className="full" style={{ marginTop: '0.4rem' }}>
          <button className="btn btn-maroon" style={{ width: '100%' }} onClick={onSearch}>
            Check availability {Ico.arrow}
          </button>
        </div>
      </div>
    </div>
  );
};

// ───────────── Section header ─────────────
const SectionHead = ({ num, title, lead, kicker }) => (
  <div className="section-head">
    {num && <div className="num">{num}</div>}
    <div className="eyebrow">{kicker}</div>
    <h2 className="h-section">{title}</h2>
    {lead && <p className="lead">{lead}</p>}
  </div>
);

// ───────────── Rooms ─────────────
const RoomsSection = ({ onNav }) => {
  const featured = ROOMS_V2[2]; // Heritage Suite
  const others = ROOMS_V2.filter((r) => r.id !== featured.id);
  return (
    <section className="section">
      <SectionHead
        num="— 01"
        kicker="The Rooms"
        title={<>Twelve rooms, <span className="italic">no two alike</span>.</>}
        lead="Hand-restored interiors with olive-wood, brass, and handwoven Pochampally textiles. Rates include breakfast and a glass of something at sunset."
      />

      <div className="cards">
        <div
          className="room-featured"
          onClick={() => onNav('rooms')}
          style={{ cursor: 'pointer' }}
        >
          <div className="img" style={{ backgroundImage: `url(${featured.img})` }} />
          <div className="grad" />
          <div className="price-tag"><em>₹</em>{featured.price.toLocaleString()} <span style={{opacity:0.7}}>/ night</span></div>
          <div className="body">
            <div className="eyebrow eyebrow-light">Featured · {featured.bed}</div>
            <h3 className="h-card">{featured.name}</h3>
            <p style={{ color: 'rgba(244,234,215,0.85)', fontSize: 14 }}>{featured.tagline}</p>
            <div className="meta">
              <span>{featured.size}</span>
              <span>·</span>
              <span>Sleeps {featured.max}</span>
              <span>·</span>
              <span>{featured.view}</span>
            </div>
            <div style={{ marginTop: '0.4rem' }}>
              <button className="btn btn-gold btn-sm">Reserve {Ico.arrow}</button>
            </div>
          </div>
        </div>

        {others.map((r) => (
          <div className="room-card" key={r.id} onClick={() => onNav('rooms')} style={{ cursor: 'pointer' }}>
            <div className="img" style={{ backgroundImage: `url(${r.img})` }}>
              <div className="price-tag"><em>₹</em>{r.price.toLocaleString()}</div>
            </div>
            <div className="body">
              <div className="eyebrow">{r.bed} · {r.view}</div>
              <h3 className="h-card">{r.name}</h3>
              <p className="muted" style={{ fontSize: 13 }}>{r.tagline}</p>
              <div className="meta">
                <span>{r.size}</span>
                <span>·</span>
                <span>Sleeps {r.max}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div style={{ marginTop: '2rem', textAlign: 'center' }}>
        <button className="btn-text" onClick={() => onNav('rooms')}>All rooms {Ico.arrow}</button>
      </div>
    </section>
  );
};

// ───────────── Stats band ─────────────
const StatsBand = () => (
  <section style={{ padding: '0' }}>
    <div className="stats">
      <div className="stat"><span className="num">12</span><span className="lbl">Rooms</span></div>
      <div className="stat"><span className="num">1923</span><span className="lbl">Est.</span></div>
      <div className="stat"><span className="num">9.4</span><span className="lbl">Guest rating</span></div>
      <div className="stat"><span className="num">2.1</span><span className="lbl">km to fort</span></div>
    </div>
  </section>
);

// ───────────── Dine — restaurant menu (browse only, no ordering) ─────────────
const DineSection = () => {
  const [active, setActive] = React.useState('all');
  const items = active === 'all' ? MENU_V2 : MENU_V2.filter((m) => m.cat === active);

  return (
    <section className="section-flush" style={{ paddingTop: 'var(--pad-section)', paddingBottom: 'var(--pad-section)' }}>
      <div style={{ padding: '0 var(--pad-x)' }}>
        <SectionHead
          num="— 02"
          kicker="The Restaurant"
          title={<>From the <span className="italic">dakhni</span> kitchen.</>}
          lead="A 28-seat dining room and a six-seat chef's counter. Open 7am — 11pm. Reservations recommended for dinner."
        />
        <div className="restaurant-meta">
          <div className="rmeta-cell">
            <div className="lbl">Hours</div>
            <div className="val">Daily · 7 — 23</div>
          </div>
          <div className="rmeta-cell">
            <div className="lbl">Cuisine</div>
            <div className="val">Hyderabadi · Dakhni</div>
          </div>
          <div className="rmeta-cell">
            <div className="lbl">Dress</div>
            <div className="val">Smart casual</div>
          </div>
          <div className="rmeta-cell">
            <div className="lbl">Reserve</div>
            <div className="val">+91 8462 24 0000</div>
          </div>
        </div>
      </div>

      <div className="cat-tabs">
        {CATEGORIES_V2.map((c) => (
          <button
            key={c.id}
            className={`cat-tab ${active === c.id ? 'active' : ''}`}
            onClick={() => setActive(c.id)}
          >
            {c.name}
          </button>
        ))}
      </div>

      <div className="menu-grid">
        {items.map((m, idx) => {
          const featured = m.featured && idx < 4;
          if (featured) {
            return (
              <div className="featured-dish dish" key={m.id}>
                <div className="badge">House Favourite</div>
                <div
                  className="img"
                  style={{
                    backgroundImage: `url(https://images.unsplash.com/${getDishImage(m)}?w=900&q=80)`,
                  }}
                />
                <div className="body">
                  <div className={m.veg ? 'veg' : 'nonveg'}>
                    <div className="veg-dot" style={{ position: 'static', display: 'inline-flex' }} />
                  </div>
                  <h3 className="name">{m.name}</h3>
                  <p className="sub">{m.sub}</p>
                  <div className="foot">
                    <span className="price"><em>₹</em>{m.price}</span>
                  </div>
                </div>
              </div>
            );
          }
          return (
            <div className={`dish ${m.veg ? 'veg' : 'nonveg'}`} key={m.id}>
              <div
                className="img"
                style={{
                  backgroundImage: `linear-gradient(135deg, rgba(80,20,30,0.05), rgba(207,148,79,0.15)), url(https://images.unsplash.com/${getDishImage(m)}?w=600&q=80)`,
                }}
              >
                <div className="veg-dot" />
              </div>
              <div className="body">
                <h3 className="name">{m.name}</h3>
                <p className="sub">{m.sub}</p>
                <div className="foot">
                  <span className="price"><em>₹</em>{m.price}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div style={{ textAlign: 'center', marginTop: '1rem' }}>
        <button className="btn btn-maroon">Reserve a Table {Ico.arrow}</button>
      </div>
    </section>
  );
};

// Pick a thematic Unsplash photo per dish
function getDishImage(m) {
  const map = {
    m1: 'photo-1668236543090-82eba5ee5976',
    m2: 'photo-1668236543090-82eba5ee5976',
    m3: 'photo-1565557623262-b51c2513a641',
    m4: 'photo-1525351484163-7529414344d8',
    m5: 'photo-1631452180519-c014fe946bc7',
    m6: 'photo-1631452180519-c014fe946bc7',
    m7: 'photo-1563379091339-03b21ab4a4f8',
    m8: 'photo-1626500155401-25e7a9eaf2a3',
    m9: 'photo-1631452180519-c014fe946bc7',
    m10: 'photo-1565557623262-b51c2513a641',
    m11: 'photo-1626500155401-25e7a9eaf2a3',
    m12: 'photo-1626777553635-15edd7e8e7c0',
    m13: 'photo-1599487488170-d11ec9c172f0',
    m14: 'photo-1599487488170-d11ec9c172f0',
    m15: 'photo-1551024506-0bccd828d307',
    m16: 'photo-1543353071-873f17a7a088',
    m17: 'photo-1626776877737-2b14db717a72',
    m18: 'photo-1626776877737-2b14db717a72',
    m19: 'photo-1626776877737-2b14db717a72',
    m20: 'photo-1626776877737-2b14db717a72',
    m21: 'photo-1551024506-0bccd828d307',
    m22: 'photo-1551024506-0bccd828d307',
    m23: 'photo-1601050690597-df0568f70950',
    m24: 'photo-1551024506-0bccd828d307',
    m25: 'photo-1497636577773-f1231844b336',
    m26: 'photo-1597318236330-edd0b2c8d62f',
    m27: 'photo-1623065422902-30a2d299bbe4',
    m28: 'photo-1546171753-97d7676e4602',
  };
  return map[m.id] || 'photo-1414235077428-338989a2e8c0';
}

// ───────────── Place / About chapter ─────────────
const PlaceSection = () => (
  <section className="section">
    <SectionHead
      num="— 03"
      kicker="The Place"
      title={<>A small, <span className="italic">walkable</span> city.</>}
    />
    <div className="chapter">
      <div
        className="img"
        style={{
          backgroundImage: `url(https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=1200&q=80)`,
        }}
      />
      <div className="text" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <p>
          Nizamabad sits on the Deccan plateau, two hours north of Hyderabad. The fort, the
          spice market, and the lake are all within a fifteen-minute walk. We have lived here
          long enough to know the good chai shop from the famous one.
        </p>
        <p className="muted">
          Ask at reception for our hand-drawn map. Ask twice, and we will walk you there
          ourselves.
        </p>
        <div>
          <button className="btn-text">Read the journal {Ico.arrow}</button>
        </div>
      </div>
    </div>
  </section>
);

// ───────────── Gallery ─────────────
const GallerySection = () => (
  <section className="section-flush" style={{ paddingTop: 'var(--pad-section)', paddingBottom: 'var(--pad-section)' }}>
    <div style={{ padding: '0 var(--pad-x)' }}>
      <SectionHead num="— 04" kicker="Gallery" title="Inside Amara" />
    </div>
    <div className="gallery">
      {GALLERY_V2.map((g, idx) => (
        <div
          key={idx}
          className={`g ${g.size === 'tall' ? 'tall' : g.size === 'wide' ? 'wide' : ''}`}
          style={{ backgroundImage: `url(${g.img})` }}
          title={g.label}
        />
      ))}
    </div>
  </section>
);

// ───────────── Cart drawer ─────────────
const CartDrawer = ({ open, onClose, cart, items, inc, dec }) => {
  const lines = Object.entries(cart)
    .filter(([, qty]) => qty > 0)
    .map(([id, qty]) => ({ ...items.find((m) => m.id === id), qty }));
  const total = lines.reduce((s, l) => s + l.price * l.qty, 0);

  return (
    <>
      <div className={`drawer-back ${open ? 'open' : ''}`} onClick={onClose} />
      <aside className={`drawer ${open ? 'open' : ''}`}>
        <div className="drawer-head">
          <div>
            <div className="eyebrow">Your order</div>
            <div className="h-card" style={{ marginTop: 4 }}>To Room 204</div>
          </div>
          <button className="iconbtn" onClick={onClose}>{Ico.close}</button>
        </div>
        <div className="drawer-body">
          {lines.length === 0 ? (
            <div className="cart-empty">
              <div style={{ fontSize: 40, color: 'var(--gold)' }}>{Ico.bag}</div>
              <div className="h-card">Cart is empty</div>
              <p className="muted">Browse the menu — tap + to add a dish.</p>
            </div>
          ) : (
            lines.map((l) => (
              <div key={l.id} className="cart-row">
                <div
                  className="img"
                  style={{ backgroundImage: `url(https://images.unsplash.com/${getDishImage(l)}?w=200&q=80)` }}
                />
                <div>
                  <div className="name">{l.name}</div>
                  <div className="qty">
                    <button onClick={() => dec(l.id)}>−</button>
                    <span>{l.qty}</span>
                    <button onClick={() => inc(l.id)}>+</button>
                  </div>
                </div>
                <div style={{ fontFamily: 'var(--serif)', color: 'var(--maroon)' }}>
                  ₹{(l.price * l.qty).toLocaleString()}
                </div>
              </div>
            ))
          )}
        </div>
        {lines.length > 0 && (
          <div className="drawer-foot">
            <div className="split" style={{ fontFamily: 'var(--mono)', fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--ink-soft)' }}>
              <span>Subtotal</span><span>₹{total.toLocaleString()}</span>
            </div>
            <div className="split" style={{ fontFamily: 'var(--mono)', fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--ink-soft)' }}>
              <span>Service · 10%</span><span>₹{Math.round(total * 0.1).toLocaleString()}</span>
            </div>
            <hr className="rule" />
            <div className="split">
              <span className="h-card" style={{ fontSize: '1rem' }}>Total</span>
              <span className="h-card" style={{ fontSize: '1.4rem' }}>₹{Math.round(total * 1.1).toLocaleString()}</span>
            </div>
            <button className="btn btn-maroon" style={{ width: '100%' }}>
              Send to kitchen {Ico.arrow}
            </button>
            <p className="muted" style={{ fontSize: 11, textAlign: 'center', marginTop: 4 }}>
              Charged to your room. Delivery in ~25 min.
            </p>
          </div>
        )}
      </aside>
    </>
  );
};

// ───────────── Footer ─────────────
const Footer = () => (
  <footer className="footer">
    <div className="mark">
      <div className="footer-wordmark" aria-label="Amara">
        <svg viewBox="0 0 658.2 233.5" width="100%" height="100%">
          <path fill="#cf944f" d="M176.38,159.4l3.53,7.98h-8.29l-9.52-20.57h-38.68c-2.86,0-4.96,1.33-6.29,3.99l-7.83,16.57h-5.37l38.22-79.35h1.69l32.54,71.37-.61.31.61-.31ZM160.11,142.82l-18.27-40.98-20.57,40.98h38.83Z"/>
          <path fill="#cf944f" d="M282.13,90.79h6.76v76.59h-7.52v-66.31l-36.68,62.77-36.38-62.16v65.69h-4.6v-76.59h7.06l1.08,1.84,34.53,59.09,35.76-60.93Z"/>
          <path fill="#cf944f" d="M521.42,151.42l.92.61.62.31-.31.61c-.61,1.03-1.36,2.18-2.23,3.45-.87,1.28-2.76,3.07-5.68,5.37-2.92,2.3-6.27,4.22-10.05,5.76-3.69,1.43-7.98,2.15-12.89,2.15-2.86,0-6.24-.46-10.13-1.38-.82-.21-1.64-.46-2.46-.77-2.05-.62-4.04-1.38-5.99-2.3-1.33-.71-2.61-1.48-3.84-2.3-.72-.51-1.69-1.28-2.92-2.3l-.31-.16c-1.23-.92-3.79-3.12-7.67-6.6-2.15-1.94-3.43-3.12-3.84-3.53l-1.53-1.08c-1.13-.92-1.94-1.58-2.45-1.99-4.81-3.68-10.13-5.63-15.96-5.83l-9.36-.15h-7.06v26.09h-7.52v-76.44h35c2.25,0,4.4.26,6.45.77,2.25.51,4.4,1.38,6.45,2.61.82.41,1.64.92,2.46,1.53,1.02.72,1.99,1.53,2.92,2.46,1.53,1.43,2.86,3.12,3.99,5.06,2.35,3.89,3.53,8.13,3.53,12.74,0,3.89-.87,7.57-2.61,11.05-.31.51-.62,1.02-.92,1.53-.21.51-.46.97-.77,1.38-.62.82-1.28,1.64-2,2.45-1.84,2.05-3.94,3.79-6.29,5.22h-.15l-.15.15c-.41.21-.82.41-1.23.62-.21.1-.46.25-.77.46l-.62.16c-.31.1-.61.25-.92.46h-.31c-1.13.41-2.3.77-3.53,1.07.62.21,1.23.46,1.84.77,2.35,1.02,5.42,2.87,9.21,5.53,2.35,1.64,4.6,3.38,6.76,5.22.82.62,1.33,1.03,1.53,1.23,2.45,2.25,5.17,4.3,8.13,6.14.1.1.31.21.61.31l.46.31c.82.51,2.15,1.13,3.99,1.84,3.58,1.53,7.11,2.3,10.59,2.3,4.4,0,8.24-.56,11.51-1.69,3.27-1.12,6.09-2.51,8.44-4.14,2.15-1.43,3.94-3.07,5.37-4.91.31-.51.66-.97,1.07-1.38l.62-.77ZM440.69,95.7h-22.41v40.68h21.34c.71,0,1.48-.05,2.3-.15h.77c.82-.1,1.48-.15,1.99-.15l.15-.16c.71-.1,1.43-.2,2.15-.31.71-.2,1.38-.41,1.99-.61,1.23-.31,2.4-.77,3.53-1.38,3.58-1.84,6.29-4.24,8.13-7.21,1.74-2.86,2.66-6.09,2.76-9.67v-1.23c-.1-1.74-.36-3.38-.77-4.91-.31-1.13-.72-2.25-1.23-3.38-.1-.21-.21-.41-.31-.62-.21-.41-.36-.66-.46-.77-.31-.51-.66-1.07-1.07-1.69-1.74-2.25-4.1-4.14-7.06-5.68-1.13-.51-2.3-.97-3.53-1.38-.62-.2-1.28-.41-1.99-.61-.72-.1-1.38-.2-2-.31-.61-.1-1.23-.2-1.84-.31h-.61l-.77-.16h-1.08ZM518.2,88.18l36.07,79.2h-8.29l-9.52-20.57h-38.68c-2.97,0-5.06,1.33-6.29,3.99l-3.07,6.29c-.31.51-.61,1.13-.92,1.84l-1.38,3.07-.62-.31c-.41-.21-1.13-.56-2.15-1.08l-1.53-.77,34.69-71.68h1.69ZM534.47,142.98l-18.27-41.14-20.57,41.14h38.83Z"/>
          <path fill="#2d3a1a" d="M369.33,63.81s-.69.03-.74.04c-.67.06-1.34.16-2,.3-2.18.47-4.28,1.34-6.15,2.56-2.66,1.74-4.88,4.23-6.31,7.06-1.04,2.05-1.78,4.27-2.62,6.41-.23.59-.47,1.18-.7,1.77.01-.03.77,0,.82,0,.73-.02,1.46-.11,2.18-.23,2.34-.42,4.59-1.34,6.53-2.73,2.44-1.75,4.44-4.29,5.59-7.06.86-2.07,1.72-4.14,2.58-6.2.27-.64.53-1.28.8-1.92Z"/>
          <path fill="#2d3a1a" d="M333.55,63.81s.69.03.74.04c.67.06,1.34.16,2,.3,2.18.47,4.28,1.34,6.15,2.56,2.66,1.74,4.88,4.23,6.31,7.06,1.04,2.05,1.78,4.27,2.62,6.41.23.59.47,1.18.7,1.77-.01-.03-.77,0-.82,0-.73-.02-1.46-.11-2.18-.23-2.34-.42-4.59-1.34-6.53-2.73-2.44-1.75-4.44-4.29-5.59-7.06-.86-2.07-1.72-4.14-2.58-6.2-.27-.64-.53-1.28-.8-1.92Z"/>
          <path fill="#cf944f" d="M385.28,159.4l-32.54-71.37h-1.69l-38.22,79.35h5.37l7.83-16.58c1.33-2.66,4.14-7.98,4.14-7.98l20.57-40.98,18.26,40.98,2,3.99,9.52,20.57h8.29l-3.53-7.98Z"/>
        </svg>
      </div>
      <p style={{ maxWidth: '38ch', color: 'rgba(244,234,215,0.75)', fontFamily: 'var(--serif)', fontSize: '1.1rem', lineHeight: 1.4 }}>
        A boutique hotel and dining room. Twelve rooms, one long table, the slow side of Telangana.
      </p>
    </div>

    <div className="grid">
      <div>
        <h4>Visit</h4>
        <p style={{ fontFamily: 'var(--serif)', fontSize: '1.05rem', color: 'rgba(244,234,215,0.85)', margin: 0, lineHeight: 1.5 }}>
          12 Khilwat Road<br/>
          Nizamabad, TG 503001<br/>
          India
        </p>
      </div>
      <div>
        <h4>Reach</h4>
        <ul>
          <li><a href="#">+91 8462 24 0000</a></li>
          <li><a href="#">stay@amara.in</a></li>
          <li><a href="#">@amara.nizamabad</a></li>
        </ul>
      </div>
      <div>
        <h4>Stay</h4>
        <ul>
          <li><a href="#">Rooms</a></li>
          <li><a href="#">Suites</a></li>
          <li><a href="#">Residence</a></li>
          <li><a href="#">Concierge</a></li>
        </ul>
      </div>
      <div>
        <h4>Table</h4>
        <ul>
          <li><a href="#">Menu</a></li>
          <li><a href="#">Private dining</a></li>
          <li><a href="#">Cooking class</a></li>
        </ul>
      </div>
    </div>

    <div className="legal">
      <span>© 2026 Amara Hotels Pvt. Ltd.</span>
      <span>Privacy · Terms · Accessibility</span>
    </div>
  </footer>
);

// ───────────── Bottom nav ─────────────
const BottomNav = ({ active, onNav }) => (
  <nav className="bottomnav">
    <button className={active === 'home' ? 'active' : ''} onClick={() => onNav('home')}>
      {Ico.home}<span>Home</span>
    </button>
    <button className={active === 'rooms' ? 'active' : ''} onClick={() => onNav('rooms')}>
      {Ico.bed}<span>Stay</span>
    </button>
    <button className={active === 'dine' ? 'active' : ''} onClick={() => onNav('dine')}>
      {Ico.fork}<span>Dine</span>
    </button>
    <button className={active === 'gallery' ? 'active' : ''} onClick={() => onNav('gallery')}>
      {Ico.grid}<span>Gallery</span>
    </button>
    <button className={active === 'about' ? 'active' : ''} onClick={() => onNav('about')}>
      {Ico.user}<span>About</span>
    </button>
  </nav>
);

// ───────────── Brand bar ─────────────
const BrandBar = ({ active, onNav }) => (
  <header className="brandbar">
    <div className="mark">
      <img src="assets/logo/positive-primary-maroon.png" alt="Amara" />
      <span className="place">Nizamabad</span>
    </div>
    <nav>
      <a href="#home" className={active === 'home' ? 'active' : ''} onClick={(e)=>{e.preventDefault();onNav('home');}}>Home</a>
      <a href="#rooms" className={active === 'rooms' ? 'active' : ''} onClick={(e)=>{e.preventDefault();onNav('rooms');}}>Rooms</a>
      <a href="#dine" className={active === 'dine' ? 'active' : ''} onClick={(e)=>{e.preventDefault();onNav('dine');}}>Restaurant</a>
      <a href="#about" className={active === 'about' ? 'active' : ''} onClick={(e)=>{e.preventDefault();onNav('about');}}>About</a>
      <a href="#gallery" className={active === 'gallery' ? 'active' : ''} onClick={(e)=>{e.preventDefault();onNav('gallery');}}>Gallery</a>
    </nav>
    <button className="btn btn-maroon btn-sm header-cta" onClick={() => onNav('home')}>
      Book a Stay
    </button>
  </header>
);

// ───────────── App ─────────────
const AppV2 = () => {
  const [active, setActive] = React.useState('home');

  const onNav = (target) => {
    setActive(target);
    const el = document.getElementById(target);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    else window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // observe sections to update bottom-nav active state
  React.useEffect(() => {
    const ids = ['home', 'rooms', 'dine', 'about', 'gallery'];
    const opts = { threshold: 0.4 };
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) setActive(e.target.id);
      });
    }, opts);
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  return (
    <div className="appv2">
      <BrandBar active={active} onNav={onNav} />

      <main>
        <div id="home">
          <Hero onNav={onNav} />
          <Booking onSearch={() => onNav('rooms')} />
        </div>

        <StatsBand />

        <div id="rooms">
          <RoomsSection onNav={onNav} />
        </div>

        <div id="dine">
          <DineSection />
        </div>

        <div id="about">
          <PlaceSection />
        </div>

        <div id="gallery">
          <GallerySection />
        </div>
      </main>

      <Footer />

      <BottomNav active={active} onNav={onNav} />
    </div>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(<AppV2 />);
