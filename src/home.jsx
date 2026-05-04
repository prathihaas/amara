// Home page + booking widget
const todayStr = () => new Date().toISOString().slice(0, 10);
const addDays = (str, n) => {
  const d = new Date(str + 'T00:00:00'); d.setDate(d.getDate() + n);
  return d.toISOString().slice(0, 10);
};

const BookingBar = ({ booking, setBooking, onSearch }) => {
  const today = todayStr();
  return (
    <div className="booking-bar">
      <label className="field">
        <label>Arrive</label>
        <input type="date" value={booking.checkIn} min={today}
          onChange={e => {
            const ci = e.target.value;
            const co = booking.checkOut <= ci ? addDays(ci, 1) : booking.checkOut;
            setBooking({ ...booking, checkIn: ci, checkOut: co });
          }}/>
      </label>
      <label className="field">
        <label>Depart</label>
        <input type="date" value={booking.checkOut} min={addDays(booking.checkIn, 1)}
          onChange={e => setBooking({ ...booking, checkOut: e.target.value })}/>
      </label>
      <label className="field">
        <label>Guests</label>
        <select value={booking.guests}
          onChange={e => setBooking({ ...booking, guests: +e.target.value })}>
          {[1,2,3,4,5,6].map(n => <option key={n} value={n}>{n} {n===1?'guest':'guests'}</option>)}
        </select>
      </label>
      <label className="field">
        <label>Rooms</label>
        <select value={booking.rooms}
          onChange={e => setBooking({ ...booking, rooms: +e.target.value })}>
          {[1,2,3,4].map(n => <option key={n} value={n}>{n} {n===1?'room':'rooms'}</option>)}
        </select>
      </label>
      <button className="search-btn" onClick={onSearch}>Find a room</button>
    </div>
  );
};

const HeroFull = ({ booking, setBooking, goto }) => (
  <div className="hero-fullbleed">
    <div className="bg" />
    <div className="scrim" />
    <div className="content">
      <div>
        <div style={{ marginBottom: '2rem' }}>
          <Logo surface="hero" tone="light"/>
        </div>
        <div className="eye">◦ A QUIET HOTEL IN NIZAMABAD</div>
        <h1 className="title" style={{ marginTop: '1rem' }}>
          Stay a while.<br/><em>Unhurried.</em>
        </h1>
        <p className="sub">
          Thirty-two rooms arranged around an old courtyard — olive-wood,
          warm stone, brass that has learned to soften with use.
        </p>
      </div>
      <div>
        <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1rem', flexWrap: 'wrap' }}>
          <div className="chip" style={{ background: 'rgba(255,255,255,0.12)', color: '#f8f1e3' }}>
            <Icon name="star" size={12}/> Best Luxury Stay · 2025
          </div>
          <div className="chip" style={{ background: 'rgba(255,255,255,0.12)', color: '#f8f1e3' }}>
            <Icon name="leaf" size={12}/> Farm-to-table kitchen
          </div>
        </div>
        <BookingBar booking={booking} setBooking={setBooking} onSearch={() => goto('rooms')} />
      </div>
    </div>
  </div>
);

const HeroSplit = ({ booking, setBooking, goto }) => (
  <div className="hero-split">
    <div className="left">
      <div>
        <div style={{ marginBottom: '2.5rem' }}>
          <Logo surface="hero" tone="dark"/>
        </div>
        <div className="eyebrow">◦ Nizamabad · Telangana</div>
        <h1 className="title" style={{ marginTop: '1.25rem' }}>
          A hotel built for <em style={{ color: 'var(--gold)', fontStyle: 'italic' }}>slow mornings</em> and long dinners.
        </h1>
        <p style={{ maxWidth: '42ch', marginTop: '1.25rem', fontSize: 16, color: 'var(--ink-soft)' }}>
          Thirty-two rooms arranged around a courtyard older than the city's road names. Come for the biryani, stay for the quiet.
        </p>
      </div>
      <div>
        <BookingBar booking={booking} setBooking={setBooking} onSearch={() => goto('rooms')} />
        <div style={{ display: 'flex', gap: '1.5rem', marginTop: '1.5rem', fontSize: 12, color: 'var(--ink-soft)' }}>
          <span>◦ 24hr concierge</span>
          <span>◦ Spa & pool</span>
          <span>◦ In-room dining</span>
        </div>
      </div>
    </div>
    <div className="right" />
  </div>
);

const HeroEditorial = ({ booking, setBooking, goto }) => (
  <div className="hero-edit">
    <div>
      <div style={{ marginBottom: '2.5rem' }}>
        <Logo surface="hero" tone="dark"/>
      </div>
      <div className="eyebrow">◦ EST. NIZAMABAD</div>
      <h1 className="lead" style={{ marginTop: '1rem' }}>
        Thirty-two rooms.<br/>
        One courtyard.<br/>
        <em style={{ color: 'var(--gold)', fontStyle: 'italic', fontWeight: 300 }}>All the time in the world.</em>
      </h1>
      <div style={{ marginTop: '2rem' }}>
        <BookingBar booking={booking} setBooking={setBooking} onSearch={() => goto('rooms')} />
      </div>
    </div>
    <div className="visual" />
  </div>
);

const FeaturedRooms = ({ goto }) => (
  <section className="section" style={{ paddingTop: 'calc(var(--pad-section) - 2rem)' }}>
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'end', marginBottom: '2.5rem' }}>
      <div>
        <div className="eyebrow">◦ Where you'll sleep</div>
        <h2 style={{ fontSize: 'clamp(1.5rem, 6vw, 3rem)', marginTop: '0.5rem' }}>Rooms & Suites</h2>
      </div>
      <button className="btn btn-ghost" onClick={() => goto('rooms')}>All rooms <Icon name="arrow" size={14}/></button>
    </div>
    <div className="grid grid-3">
      {ROOMS.slice(0, 3).map(r => (
        <article key={r.id} className="room-card" onClick={() => goto('rooms:' + r.id)}>
          <Img src={r.img} label={r.phLabel} />
          <div className="body">
            <div className="name">
              <span>{r.name}</span>
              <span className="price">{inr(r.price)} <span>/ night</span></span>
            </div>
            <div className="meta">
              <span><Icon name="bed" size={12}/> {r.bed}</span>
              <span><Icon name="size" size={12}/> {r.size}</span>
              <span><Icon name="users" size={12}/> Up to {r.max}</span>
            </div>
            <p className="desc">{r.tagline}</p>
          </div>
        </article>
      ))}
    </div>
  </section>
);

const DineTeaser = ({ goto }) => (
  <section className="section" style={{ background: 'var(--bg-warm)', paddingTop: 'calc(var(--pad-section) - 1rem)' }}>
    <div className="grid grid-2" style={{ gap: '3rem', alignItems: 'center' }}>
      <div>
        <div className="eyebrow">◦ The kitchen</div>
        <h2 style={{ fontSize: 'clamp(1.75rem, 7vw, 3.25rem)', marginTop: '0.5rem', maxWidth: '14ch' }}>
          Dum biryani, slow-cooked <em style={{ fontStyle: 'italic', fontWeight: 300, color: 'var(--maroon)' }}>since breakfast.</em>
        </h2>
        <p className="muted" style={{ fontSize: 15, marginTop: '1.25rem', maxWidth: '46ch' }}>
          Our kitchen leans into the grammar of Nizami cooking — slow heat, whole spices, attention. Order to your room, the courtyard, or wherever you happen to be sitting.
        </p>
        <div style={{ display: 'flex', gap: '0.75rem', marginTop: '2rem' }}>
          <button className="btn btn-primary" onClick={() => goto('dine')}>Order food <Icon name="arrow" size={14}/></button>
          <button className="btn btn-ghost" onClick={() => goto('dine')}>See menu</button>
        </div>
      </div>
      <div className="grid grid-2" style={{ gap: '0.5rem' }}>
        <Img src="https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=800&q=80" label="Dum biryani" aspect="4/5" style={{ borderRadius: 10, gridRow: 'span 2' }} />
        <Img src="https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=800&q=80" label="Gulab jamun" aspect="1" style={{ borderRadius: 10 }} />
        <Img src="https://images.unsplash.com/photo-1534939561126-855b8675edd7?w=800&q=80" label="Masala chai" aspect="1" style={{ borderRadius: 10 }} />
      </div>
    </div>
  </section>
);

const StorySnippet = () => (
  <section className="section">
    <div style={{ maxWidth: '72ch', margin: '0 auto', textAlign: 'center' }}>
      <div className="eyebrow">◦ Our story, briefly</div>
      <h2 style={{ fontSize: 36, marginTop: '1rem', fontWeight: 400 }}>
        Amara was built the way our grandmothers built homes — with stone that knew the sun, wood that knew how to wait, and a courtyard left open for everything else.
      </h2>
      <div className="rule" style={{ maxWidth: 60, margin: '3rem auto' }}/>
      <div className="story-stats">
        {[
          ['32', 'Rooms & suites'],
          ['3', 'Restaurants'],
          ['1', 'Very old courtyard'],
        ].map(([n, l]) => (
          <div key={l}>
            <div className="serif" style={{ fontSize: 'clamp(2rem, 7vw, 3.5rem)', fontWeight: 400, color: 'var(--maroon)' }}>{n}</div>
            <div className="eyebrow" style={{ marginTop: '0.5rem' }}>{l}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer style={{ background: 'var(--maroon)', color: 'var(--ivory)', padding: '4rem 1.25rem 2rem' }}>
    <div className="footer-grid">
      <div>
        <Logo surface="footer" tone="light" />
        <p style={{ fontSize: 13, opacity: 0.7, marginTop: '1.25rem', maxWidth: '36ch' }}>
          Near Nizamabad Fort · Subhashnagar · Telangana 503001
        </p>
      </div>
      <div>
        <div className="eyebrow" style={{ color: 'var(--gold)' }}>Visit</div>
        <ul style={{ listStyle: 'none', padding: 0, marginTop: '0.75rem', fontSize: 13, lineHeight: 2 }}>
          <li>Rooms</li><li>Dining</li><li>Spa</li><li>Events</li>
        </ul>
      </div>
      <div>
        <div className="eyebrow" style={{ color: 'var(--gold)' }}>About</div>
        <ul style={{ listStyle: 'none', padding: 0, marginTop: '0.75rem', fontSize: 13, lineHeight: 2 }}>
          <li>Our story</li><li>Careers</li><li>Press</li><li>Sustainability</li>
        </ul>
      </div>
      <div>
        <div className="eyebrow" style={{ color: 'var(--gold)' }}>Stay in touch</div>
        <p style={{ fontSize: 13, opacity: 0.7, marginTop: '0.75rem', lineHeight: 1.6 }}>
          +91 90000 00000<br/>hello@amara-nizamabad.in
        </p>
      </div>
    </div>
    <div style={{ borderTop: '1px solid rgba(228,210,188,0.15)', marginTop: '3rem', paddingTop: '1.5rem', display: 'flex', justifyContent: 'space-between', fontSize: 11, letterSpacing: '0.15em', textTransform: 'uppercase', opacity: 0.5 }}>
      <span>© 2026 Amara Hospitality</span>
      <span>Privacy · Terms · Accessibility</span>
    </div>
  </footer>
);

const Home = ({ goto, booking, setBooking, tweaks }) => {
  const Hero = tweaks.heroLayout === 'split' ? HeroSplit
    : tweaks.heroLayout === 'editorial' ? HeroEditorial
    : HeroFull;
  return (
    <div className="page">
      <Hero booking={booking} setBooking={setBooking} goto={goto} />
      <FeaturedRooms goto={goto} />
      <DineTeaser goto={goto} />
      <StorySnippet />
      <Footer />
    </div>
  );
};

Object.assign(window, { Home, BookingBar, todayStr, addDays });
