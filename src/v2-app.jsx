// AMARA v2 — Modern luxury, mobile-first
// Self-contained: data + UI in one file (smaller surface than v1).

const ROOMS_V2 = window.ROOMS;
const MENU_V2 = window.MENU;
const CATEGORIES_V2 = window.CATEGORIES;
const GALLERY_V2 = window.GALLERY;
const BANQUETS_V2 = window.BANQUETS;

// ───────────── Hero stories (typographic, no photos) ─────────────
const STORIES = [
  {
    n: '01',
    eyebrow: 'The Stay',
    headline: <>A boutique <em>hideaway</em> in old Nizamabad.</>,
    sub: 'Thirty-four rooms across Standard, Deluxe, and Suite categories. Breakfast included, Wi-Fi throughout, and free parking — every night.',
    cta: 'Discover Rooms',
    target: 'rooms',
    palette: 'maroon',
  },
  {
    n: '02',
    eyebrow: 'The Table',
    headline: <>Telangana, <em>plated</em> with restraint.</>,
    sub: 'A Hyderabadi kitchen rooted in dum & dakhni traditions. Rose, saffron, mace — the things our grandmothers measured by smell.',
    cta: 'Visit the Restaurant',
    target: 'dine',
    palette: 'ivory',
  },
  {
    n: '03',
    eyebrow: 'The Pilgrimage',
    headline: <>Basara, <em>forty kilometres</em> away.</>,
    sub: 'Sri Gnana Saraswati Devi — one of only two Saraswati temples in India. A thousand-year-old shrine on the Godavari. Forty minutes from your room.',
    cta: 'About Basara',
    target: 'basara',
    palette: 'gold',
  },
  {
    n: '04',
    eyebrow: 'The Place',
    headline: <>Nizamabad, <em>unhurried</em>.</>,
    sub: 'Walk to the fort at dusk. Cardamom market on Sundays. We will draw you a map and pack you a flask.',
    cta: 'About Amara',
    target: 'about',
    palette: 'maroon',
  },
];

// ───────────── Tiny icons ─────────────
const Ico = {
  search: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/></svg>,
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
  const featured = ROOMS_V2[2]; // Suite
  const others = ROOMS_V2.filter((r) => r.id !== featured.id);
  return (
    <section className="section">
      <SectionHead
        num="— 01"
        kicker="The Rooms"
        title={<>34 rooms. <span className="italic">Three categories.</span></>}
        lead="Standard, Deluxe, and Suite. All rates include complimentary breakfast, free Wi-Fi, and free parking. No hidden charges."
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
      <div className="stat"><span className="num">34</span><span className="lbl">Rooms</span></div>
      <div className="stat"><span className="num">3</span><span className="lbl">Banquet halls</span></div>
      <div className="stat"><span className="num">9.4</span><span className="lbl">Guest rating</span></div>
      <div className="stat"><span className="num">2.1</span><span className="lbl">km to fort</span></div>
    </div>
  </section>
);

// ───────────── Dine — restaurant info only ─────────────
const DineSection = () => (
  <section className="section">
    <SectionHead
      num="— 02"
      kicker="Telugu Theory · Level 2"
      title={<>Andhra & Telangana, <span className="italic">on brass.</span></>}
      lead="Telugu Theory on Level 2 — Andhra, Telangana, and Rayalaseema cooking, served slowly. Open every day for breakfast, lunch, and dinner."
    />
    <div className="restaurant-meta">
      <div className="rmeta-cell">
        <div className="lbl">Breakfast</div>
        <div className="val">8:00 — 10:30</div>
      </div>
      <div className="rmeta-cell">
        <div className="lbl">Lunch</div>
        <div className="val">12:00 — 15:30</div>
      </div>
      <div className="rmeta-cell">
        <div className="lbl">Dinner</div>
        <div className="val">19:00 — 23:00</div>
      </div>
      <div className="rmeta-cell">
        <div className="lbl">Reserve</div>
        <div className="val">+91 8462 24 0000</div>
      </div>
    </div>

    <div style={{ marginTop: '2rem', textAlign: 'center' }}>
      <a href="https://telugu-theory.vercel.app" target="_blank" rel="noopener"
        className="btn btn-maroon" style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
        Visit Telugu Theory {Ico.arrow}
      </a>
    </div>

    <div style={{
      marginTop: '2rem',
      padding: '1rem 1.25rem',
      background: 'var(--ivory-card)',
      borderRadius: 12,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: '1rem',
      flexWrap: 'wrap',
    }}>
      <div>
        <div className="eyebrow" style={{ marginBottom: '0.25rem' }}>Also on Level 1</div>
        <div className="h-card" style={{ fontSize: '1.1rem' }}>503 Coffeeshop</div>
        <p className="muted" style={{ fontSize: 13, margin: '0.25rem 0 0' }}>Single-origin coffee · craft tea · all-day drinks · 8 am — 11 pm</p>
      </div>
      <a href="https://five-zero-three.vercel.app" target="_blank" rel="noopener"
        className="btn btn-sm" style={{
          textDecoration: 'none', border: '1px solid var(--line)',
          padding: '0.5rem 1rem', borderRadius: 8, fontSize: 13, whiteSpace: 'nowrap',
          display: 'inline-flex', alignItems: 'center', gap: '0.35rem',
        }}>
        Visit 503 {Ico.arrow}
      </a>
    </div>
  </section>
);

// ───────────── Basara Temple ─────────────
const BASARA_REASONS = [
  {
    ico: 'sun',
    title: 'Vidyarambham & Aksharabhyasam',
    body: 'The most auspicious place in India for a child\'s first encounter with letters. On Vijayadasami (Dussehra), families travel from every corner of Andhra, Telangana, and beyond to have their child write their first syllable in the presence of the Goddess of Knowledge. For many Telugu families, this ceremony at Basara carries the weight of a birth — it is the moment a child\'s life as a learner begins.',
  },
  {
    ico: 'book',
    title: 'Students Before Competitive Exams',
    body: 'Before board exams, NEET, JEE, UPSC, CA Finals, and every examination that shapes a young life in India, students make the journey to Basara. They come in buses, in college groups, alone. They touch the feet of the Goddess, sit by the Godavari, and leave quieter and steadier than they arrived. The temple receives thousands of exam-bound students every February, March, and April.',
  },
  {
    ico: 'flame',
    title: 'Dussehra — The Great Gathering',
    body: 'On and around Vijayadasami, Basara becomes one of the largest pilgrimages in South India. Over ten lakh people converge on this small village across ten days. The Godavari fills with diyas at dusk. The air carries turmeric and marigold. The Goddess\'s sanctum sees continuous darshan from before dawn until well past midnight. Roads from Hyderabad, Warangal, Nagpur, and Adilabad carry pilgrims in a steady stream.',
  },
  {
    ico: 'bowl',
    title: 'Vasant Panchami — The Goddess\'s Own Day',
    body: 'In January or February, Vasant Panchami marks the onset of spring and Saraswati\'s own festival. Books, musical instruments, paintbrushes, and tools are consecrated before her. Artists, musicians, teachers, and scholars make the pilgrimage. The mood is quieter than Dussehra — more intimate, more personal. This is when the devout come not in crowds but in families, with something specific to ask.',
  },
  {
    ico: 'heart',
    title: 'The Godavari Ghats',
    body: 'The river here is wide and unhurried. The stone ghats are old and worn smooth by generations of bare feet. Morning puja at the river — oil lamp, flowers, a priest\'s bell rising through the mist — is available to anyone who arrives early enough. The Godavari at Basara is considered especially sacred because it flows at the feet of the Goddess herself. Ritual bathing here before darshan is a custom older than the temple records.',
  },
  {
    ico: 'leaf',
    title: 'Year-Round Pilgrimage from Across India',
    body: 'The temple is open every day, and pilgrims come every day. Families from Hyderabad (3 hours), Warangal (2.5 hours), Pune, Nagpur, and the wider Telugu diaspora treat Basara as a non-negotiable annual visit. Weekend crowds are significant. For all of them, Nizamabad — the nearest city with hotels, restaurants, and transport connections — is the natural overnight base. Which makes Amara the natural place to stay.',
  },
];

const BasaraSection = () => (
  <section className="section-flush" id="basara" style={{ background: 'var(--bone)', paddingTop: 'var(--pad-section)', paddingBottom: 'var(--pad-section)' }}>
    <div style={{ padding: '0 var(--pad-x)' }}>
      <SectionHead
        num="— 03"
        kicker="The Pilgrimage · Basara · 40 km"
        title={<>A temple that <span className="italic">only India</span> can keep.</>}
        lead="Sri Gnana Saraswati Devi at Basara — one of only two Saraswati temples in the entire country — draws hundreds of thousands every year. It sits forty kilometres from this hotel, on the southern bank of the Godavari."
      />
    </div>

    {/* Opening chapter */}
    <div className="chapter" style={{ padding: '0 var(--pad-x)', marginBottom: '2.5rem' }}>
      <div className="img" style={{
        backgroundImage: `url(https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=1200&q=80)`,
        background: 'linear-gradient(135deg, var(--maroon-deep) 0%, #5a1a10 50%, #2d1a00 100%)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        minHeight: 240, borderRadius: 14,
      }}>
        <div style={{ textAlign: 'center', color: 'var(--gold)', padding: '2rem' }}>
          <div style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: 'clamp(2.5rem, 8vw, 4rem)', lineHeight: 1, marginBottom: '0.5rem' }}>Sri Gnana</div>
          <div style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(2rem, 6vw, 3.2rem)', lineHeight: 1, color: 'var(--ivory)' }}>Saraswati Devi</div>
          <div style={{ fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '0.28em', textTransform: 'uppercase', marginTop: '1rem', color: 'rgba(244,234,215,0.6)' }}>Basara · Godavari · Telangana</div>
        </div>
      </div>
      <div className="text" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <p>
          The river Godavari bends gently at Basara. On its southern bank sits a shrine that students,
          parents, scholars, and pilgrims have found their way to for over a thousand years. The Goddess
          here is Saraswati — not the consort, not the secondary deity, but the presiding divinity in her
          own right: <em>Gnana Saraswati</em>, the goddess of knowledge, speech, and all learning.
        </p>
        <p className="muted">
          India has exactly two temples where Saraswati is the primary deity. One is in the valley
          of Kashmir — the ancient Sharda Peeth, now largely inaccessible. The other is here, on
          the Godavari, forty kilometres from the centre of Nizamabad.
        </p>
        <p className="muted">
          This is the only functioning Saraswati temple in the country where devotees can take darshan
          every single day of the year. That fact alone explains everything about why they come.
        </p>
      </div>
    </div>

    {/* Key facts */}
    <div className="stats">
      <div className="stat"><span className="num">40</span><span className="lbl">km from Amara</span></div>
      <div className="stat"><span className="num">2</span><span className="lbl">Saraswati temples in India</span></div>
      <div className="stat"><span className="num">10L+</span><span className="lbl">pilgrims each Dussehra</span></div>
      <div className="stat"><span className="num">45</span><span className="lbl">min by road</span></div>
    </div>

    {/* Six reasons */}
    <div style={{ padding: '2.5rem var(--pad-x) 0' }}>
      <div className="eyebrow" style={{ marginBottom: '1.25rem' }}>Why they come</div>
      <div className="basara-reasons" style={{ display: 'grid', gap: '0.85rem' }}>
        {BASARA_REASONS.map((r) => (
          <div key={r.title} style={{
            background: '#fff',
            border: '1px solid var(--line)',
            borderRadius: 14,
            padding: '1.25rem',
            display: 'flex',
            gap: '1rem',
            alignItems: 'flex-start',
          }}>
            <div style={{
              background: 'var(--maroon)', color: 'var(--gold)',
              borderRadius: 10, padding: '0.65rem',
              flexShrink: 0, width: 42, height: 42,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              {Ico[r.ico]}
            </div>
            <div>
              <h3 className="h-card" style={{ fontSize: '1.1rem', marginBottom: '0.4rem' }}>{r.title}</h3>
              <p className="muted" style={{ fontSize: 14, lineHeight: 1.6, margin: 0 }}>{r.body}</p>
            </div>
          </div>
        ))}
      </div>
    </div>

    {/* Practical info panel */}
    <div style={{
      margin: '2.5rem var(--pad-x) 0',
      background: 'var(--maroon)', color: 'var(--ivory)',
      borderRadius: 16, padding: '1.75rem 1.5rem',
    }}>
      <div className="eyebrow eyebrow-light" style={{ marginBottom: '1.25rem' }}>Planning your Basara visit from Amara</div>
      <div style={{ display: 'grid', gap: '1.25rem', gridTemplateColumns: '1fr 1fr' }}>
        <div>
          <div className="eyebrow" style={{ color: 'var(--gold)', marginBottom: 6 }}>Distance</div>
          <div className="h-card" style={{ color: 'var(--ivory)', fontSize: '1rem' }}>40 km · ~45 min</div>
          <p style={{ fontSize: 13, color: 'rgba(244,234,215,0.7)', margin: '4px 0 0', lineHeight: 1.45 }}>By road from Hotel Amara. Cabs available from the hotel any time of day.</p>
        </div>
        <div>
          <div className="eyebrow" style={{ color: 'var(--gold)', marginBottom: 6 }}>Temple Hours</div>
          <div className="h-card" style={{ color: 'var(--ivory)', fontSize: '1rem' }}>4:30 am — 8:30 pm</div>
          <p style={{ fontSize: 13, color: 'rgba(244,234,215,0.7)', margin: '4px 0 0', lineHeight: 1.45 }}>First aarti at 5:00 am. Darshan queues are shortest before 7:00 am and after 6:00 pm.</p>
        </div>
        <div>
          <div className="eyebrow" style={{ color: 'var(--gold)', marginBottom: 6 }}>Best Seasons</div>
          <div className="h-card" style={{ color: 'var(--ivory)', fontSize: '1rem' }}>Oct–Nov & Jan–Feb</div>
          <p style={{ fontSize: 13, color: 'rgba(244,234,215,0.7)', margin: '4px 0 0', lineHeight: 1.45 }}>Dussehra (Vijayadasami) and Vasant Panchami. Peak festival crowds; peak atmosphere.</p>
        </div>
        <div>
          <div className="eyebrow" style={{ color: 'var(--gold)', marginBottom: 6 }}>What to Wear</div>
          <div className="h-card" style={{ color: 'var(--ivory)', fontSize: '1rem' }}>Traditional preferred</div>
          <p style={{ fontSize: 13, color: 'rgba(244,234,215,0.7)', margin: '4px 0 0', lineHeight: 1.45 }}>Sarees, dhotis, salwar kameez. Shoulders and knees covered. Footwear removed at the entrance.</p>
        </div>
        <div>
          <div className="eyebrow" style={{ color: 'var(--gold)', marginBottom: 6 }}>Also Nearby</div>
          <div className="h-card" style={{ color: 'var(--ivory)', fontSize: '1rem' }}>Godavari Ghats</div>
          <p style={{ fontSize: 13, color: 'rgba(244,234,215,0.7)', margin: '4px 0 0', lineHeight: 1.45 }}>Ritual bathing in the Godavari before darshan is a centuries-old custom. The ghats are a five-minute walk from the temple.</p>
        </div>
        <div>
          <div className="eyebrow" style={{ color: 'var(--gold)', marginBottom: 6 }}>Entry</div>
          <div className="h-card" style={{ color: 'var(--ivory)', fontSize: '1rem' }}>Free · Always open</div>
          <p style={{ fontSize: 13, color: 'rgba(244,234,215,0.7)', margin: '4px 0 0', lineHeight: 1.45 }}>No entry fee for darshan. Special queue tickets available on the temple website for busy days.</p>
        </div>
      </div>
      <div style={{ marginTop: '1.75rem', paddingTop: '1.25rem', borderTop: '1px solid rgba(244,234,215,0.15)', display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
        <a href="tel:+918462240000" className="btn btn-gold" style={{ textDecoration: 'none' }}>
          Ask us to arrange a cab {Ico.arrow}
        </a>
        <a href="#rooms" className="btn btn-outline-light" style={{ textDecoration: 'none' }}>
          Book your stay {Ico.arrow}
        </a>
      </div>
    </div>
  </section>
);

// ───────────── Place / About chapter ─────────────
const PlaceSection = () => (
  <section className="section">
    <SectionHead
      num="— 04"
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

// ───────────── Banquets ─────────────
const BanquetsSection = () => (
  <section className="section">
    <SectionHead
      num="— 05"
      kicker="Events & Banquets"
      title={<>Three halls. <span className="italic">One kitchen.</span></>}
      lead="From a boardroom of 30 to a wedding of 800. Jade, Olive, and Ruby — each hall catered by our in-house kitchens."
    />

    <div className="banquet-halls">
      {BANQUETS_V2.map((hall) => (
        <div className="banquet-card" key={hall.id}>
          <div
            className="banquet-img"
            style={{ backgroundImage: `url(${hall.img})` }}
          >
            {hall.ac && (
              <div className="banquet-badge ac">Centralised AC</div>
            )}
            <div className="banquet-size">{hall.size}</div>
          </div>
          <div className="banquet-body">
            <div className="eyebrow">{hall.capacityNote}</div>
            <h3 className="h-card" style={{ marginTop: '0.35rem', marginBottom: '0.5rem' }}>{hall.name}</h3>
            <p className="muted" style={{ fontSize: 13, lineHeight: 1.5 }}>{hall.desc}</p>
            <div className="banquet-tags">
              {hall.tags.map((t) => (
                <span className="banquet-tag" key={t}>{t}</span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>

    <div className="banquet-combine">
      <div className="eyebrow" style={{ marginBottom: '0.5rem' }}>Combined booking</div>
      <h3 className="h-card" style={{ marginBottom: '0.6rem' }}>
        Olive + Ruby — <span className="italic">up to 800 guests</span>
      </h3>
      <p className="muted" style={{ maxWidth: '56ch', fontSize: 14, lineHeight: 1.6 }}>
        Open the partition between Olive and Ruby for a single 10,000 sq ft hall.
        Centralized air conditioning throughout. In-house catering. One team, one bill.
      </p>
      <a
        href="tel:+918462240000"
        className="btn btn-maroon"
        style={{ marginTop: '1.25rem', display: 'inline-flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none' }}
      >
        Call to enquire {Ico.arrow}
      </a>
    </div>
  </section>
);

// ───────────── Business Travellers ─────────────
const BIZ_AMENITIES = [
  {
    ico: 'sun',
    title: 'High-speed Wi-Fi',
    body: 'Throughout the hotel — rooms, lobby, restaurant, and banquet spaces. No codes, no limits, no throttling.',
  },
  {
    ico: 'home',
    title: 'Free parking',
    body: 'Covered parking for your own vehicle or a hired cab. Arrange pickup from the station or highway directly with reception.',
  },
  {
    ico: 'bread',
    title: 'Breakfast included',
    body: 'Full breakfast served 8:00–10:30 am in Telugu Theory. Early risers can request tea and light snacks from 7:00 am.',
  },
  {
    ico: 'cup',
    title: '503 Coffeeshop · Level 1',
    body: 'Single-origin coffee, craft tea, and a quiet table for an informal meeting or a laptop session. Open 8 am to 11 pm.',
  },
  {
    ico: 'fork',
    title: 'Client meals at Telugu Theory',
    body: 'Andhra and Telangana cuisine on Level 2 — lunch from 12:00 and dinner until 23:00. A reliable table for a working meal.',
  },
  {
    ico: 'leaf',
    title: 'Jade Hall for team meetings',
    body: '1,000 sq ft meeting room with capacity for 80–100. Ideal for training sessions, workshops, and small conferences. Catered in-house.',
  },
];

const BIZ_INDUSTRIES = [
  { label: 'Turmeric trade', detail: "Nizamabad hosts Asia's largest turmeric exchange. Brokers, exporters, and buyers from across India pass through year-round." },
  { label: 'Seed industry', detail: 'One of Telangana\'s primary seed production and distribution hubs. Agri-input companies maintain regional offices here.' },
  { label: 'Pharma & chemicals', detail: 'On the edge of Telangana\'s pharmaceutical corridor. Sales teams, auditors, and supply-chain managers are regular guests.' },
  { label: 'Government contracts', detail: 'District headquarters for Nizamabad. Government officials, contractors, and project teams on district and state assignments.' },
  { label: 'Infrastructure', detail: 'Active construction and infrastructure projects in and around the district bring project managers and site supervisors for multi-week stays.' },
  { label: 'FMCG & distribution', detail: 'A strong regional distribution network draws sales leads, regional managers, and brand representatives on monthly circuits.' },
];

const BusinessSection = () => (
  <section className="section" id="business">
    <SectionHead
      num="— 06"
      kicker="Business Travel"
      title={<>The work stays <span className="italic">simple.</span></>}
      lead="Nizamabad is a working city. Turmeric, seeds, pharmaceuticals, and government work bring professionals here every week. Amara is built for the stay in between."
    />

    {/* Amenities grid */}
    <div className="biz-amenities">
      {BIZ_AMENITIES.map((a) => (
        <div key={a.title} style={{
          background: 'var(--ivory-card)',
          border: '1px solid var(--line)',
          borderRadius: 14,
          padding: '1.25rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '0.6rem',
        }}>
          <div style={{
            background: 'var(--maroon)', color: 'var(--gold)',
            borderRadius: 10, padding: '0.6rem',
            width: 40, height: 40,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            {Ico[a.ico]}
          </div>
          <h3 className="h-card" style={{ fontSize: '1rem', marginTop: '0.15rem' }}>{a.title}</h3>
          <p className="muted" style={{ fontSize: 13, lineHeight: 1.55, margin: 0 }}>{a.body}</p>
        </div>
      ))}
    </div>

    {/* What brings business here */}
    <div style={{
      marginTop: '2.5rem',
      background: 'var(--bone)',
      border: '1px solid var(--line-gold)',
      borderRadius: 16,
      padding: '1.75rem 1.5rem',
    }}>
      <div className="eyebrow" style={{ marginBottom: '1rem' }}>What brings business to Nizamabad</div>
      <div className="biz-industries">
        {BIZ_INDUSTRIES.map((ind) => (
          <div key={ind.label} style={{ padding: '0.85rem 0', borderBottom: '1px solid var(--line)' }}>
            <div style={{
              fontFamily: 'var(--serif)',
              fontSize: '1.05rem',
              color: 'var(--maroon)',
              marginBottom: '0.3rem',
              letterSpacing: '-0.005em',
            }}>{ind.label}</div>
            <p className="muted" style={{ fontSize: 13, lineHeight: 1.55, margin: 0 }}>{ind.detail}</p>
          </div>
        ))}
      </div>
    </div>

    {/* Jade Hall call-out */}
    <div style={{
      marginTop: '2rem',
      background: 'var(--maroon)',
      color: 'var(--ivory)',
      borderRadius: 16,
      padding: '1.75rem 1.5rem',
      display: 'flex',
      flexDirection: 'column',
      gap: '1rem',
    }}>
      <div>
        <div className="eyebrow eyebrow-light" style={{ marginBottom: '0.5rem' }}>Day-use meeting space</div>
        <h3 className="h-card" style={{ color: 'var(--ivory)', fontSize: '1.4rem', marginBottom: '0.6rem' }}>
          Jade Hall — <span className="italic">up to 100 guests</span>
        </h3>
        <p style={{ fontSize: 14, color: 'rgba(244,234,215,0.78)', lineHeight: 1.6, maxWidth: '52ch', margin: 0 }}>
          A 1,000 sq ft meeting room available for day-hire or multi-day conference use.
          In-house catering for tea breaks, working lunches, and dinner. AV setup on request.
          Ideal for training workshops, team offsites, vendor meetings, and corporate seminars.
        </p>
      </div>
      <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', paddingTop: '0.5rem', borderTop: '1px solid rgba(244,234,215,0.15)' }}>
        <a href="tel:+918462240000" className="btn btn-gold" style={{ textDecoration: 'none' }}>
          Enquire about Jade Hall {Ico.arrow}
        </a>
        <a href="#rooms" className="btn btn-outline-light" style={{ textDecoration: 'none' }}>
          Book rooms for your team {Ico.arrow}
        </a>
      </div>
    </div>

    {/* Corporate rate strip */}
    <div style={{
      marginTop: '1.25rem',
      padding: '1.1rem 1.25rem',
      border: '1px solid var(--line-gold)',
      borderRadius: 12,
      background: 'var(--paper)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: '1rem',
      flexWrap: 'wrap',
    }}>
      <div>
        <div className="eyebrow" style={{ marginBottom: '0.3rem' }}>Corporate & extended stay rates</div>
        <p className="muted" style={{ fontSize: 13, margin: 0, lineHeight: 1.5 }}>
          Negotiated rates available for companies with recurring travel to Nizamabad.
          Monthly billing, priority room allocation, and dedicated account contact.
        </p>
      </div>
      <a href="mailto:stay@amara.in" className="btn btn-maroon" style={{ textDecoration: 'none', whiteSpace: 'nowrap' }}>
        Ask about rates {Ico.arrow}
      </a>
    </div>
  </section>
);

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
        34 rooms, three banquet halls, a Telangana kitchen on Level 2, and a coffeeshop on Level 1.
      </p>
    </div>

    {/* Sister properties strip */}
    <div className="footer-venues">
      <div className="eyebrow" style={{ marginBottom: '0.75rem', color: 'rgba(207,148,79,0.7)' }}>Also at Amara</div>
      <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
        <a href="https://five-zero-three.vercel.app" target="_blank" rel="noopener" className="venue-pill">
          503 Coffeeshop · Level 1
        </a>
        <a href="https://telugu-theory.vercel.app" target="_blank" rel="noopener" className="venue-pill">
          Telugu Theory · Level 2
        </a>
      </div>
    </div>

    <div className="grid">
      <div>
        <h4>Visit</h4>
        <p style={{ fontFamily: 'var(--serif)', fontSize: '1.05rem', color: 'rgba(244,234,215,0.85)', margin: 0, lineHeight: 1.5 }}>
          Nizamabad, TG 503001<br/>
          Telangana, India
        </p>
      </div>
      <div>
        <h4>Reach</h4>
        <ul>
          <li><a href="tel:+918462240000">+91 8462 24 0000</a></li>
          <li><a href="mailto:stay@amara.in">stay@amara.in</a></li>
          <li><a href="#">@amara.nizamabad</a></li>
        </ul>
      </div>
      <div>
        <h4>Stay</h4>
        <ul>
          <li><a href="#rooms">Standard · ₹3,000</a></li>
          <li><a href="#rooms">Deluxe · ₹3,300</a></li>
          <li><a href="#rooms">Suite · ₹4,750</a></li>
        </ul>
      </div>
      <div>
        <h4>Events</h4>
        <ul>
          <li><a href="#events">Jade Hall · 100 pax</a></li>
          <li><a href="#events">Olive Hall · 400 pax</a></li>
          <li><a href="#events">Ruby Hall · 400 pax</a></li>
        </ul>
      </div>
      <div>
        <h4>Journal</h4>
        <ul>
          <li><a href="blog/">All Articles</a></li>
          <li><a href="blog/hotels-near-basara-temple.html">Basara Temple Guide</a></li>
          <li><a href="blog/nizamabad-travel-guide.html">Nizamabad Guide</a></li>
          <li><a href="blog/business-hotels-nizamabad.html">Business Travel</a></li>
        </ul>
      </div>
    </div>

    <div className="legal">
      <span>© 2026 Amara · Nizamabad</span>
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
    <button className={active === 'events' ? 'active' : ''} onClick={() => onNav('events')}>
      {Ico.leaf}<span>Events</span>
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
      <a href="#events" className={active === 'events' ? 'active' : ''} onClick={(e)=>{e.preventDefault();onNav('events');}}>Events</a>
      <a href="#about" className={active === 'about' ? 'active' : ''} onClick={(e)=>{e.preventDefault();onNav('about');}}>About</a>
      <a href="blog/" style={{ color: 'var(--maroon)', fontWeight: 600 }}>Blog</a>
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
    const ids = ['home', 'rooms', 'dine', 'basara', 'events', 'business', 'about', 'gallery'];
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

        <div id="basara">
          <BasaraSection />
        </div>

        <div id="events">
          <BanquetsSection />
        </div>

        <div id="business">
          <BusinessSection />
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
