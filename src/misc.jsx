// About, Gallery, Contact
const About = () => (
  <div className="page">
    <section className="section" style={{ paddingBottom: '3rem', textAlign: 'center' }}>
      <div style={{ margin: '2rem auto 3rem' }}>
        <Logo variant="stacked" tone="dark"/>
      </div>
      <div className="eyebrow">◦ About</div>
      <h1 style={{ fontSize: 88, marginTop: '1rem', fontWeight: 400, maxWidth: '14ch', lineHeight: 0.98, margin: '1rem auto 0' }}>
        A quiet hotel, <em style={{ fontStyle: 'italic', fontWeight: 300, color: 'var(--maroon)' }}>shaped by Nizamabad.</em>
      </h1>
    </section>
    <section style={{ padding: '2rem 3rem', display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '4rem', alignItems: 'start' }}>
      <div style={{ fontSize: 17, lineHeight: 1.7, color: 'var(--ink-soft)' }}>
        <p>Amara began the way most good things begin — an old building, a stubborn idea, and more courtyards than seemed necessary. Where the building used to hold a merchant's family, it now holds thirty-two rooms, three kitchens, a swimming pool that doesn't announce itself, and one very sleepy house cat named Burfi.</p>
        <p style={{ marginTop: '1.25rem' }}>We took our time. Olive-wood from the old doors was kept and re-cut. The Kadapa stone floors were polished, not replaced. The brass handles were never going anywhere.</p>
        <p style={{ marginTop: '1.25rem' }}>What we built is not grand — it is simply careful. We think that is the same thing as luxury, told more quietly.</p>
      </div>
      <Img src="https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=1200&q=80" label="Lobby at dusk" aspect="4/5" style={{ borderRadius: 12 }}/>
    </section>
    <section className="section">
      <div className="eyebrow">◦ Quiet facts</div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '2rem', marginTop: '2rem' }}>
        {[
          ['1897', 'Year this house was first built'],
          ['32', 'Rooms, including four suites'],
          ['3', 'Places to eat on site'],
          ['1', 'Very good, slightly lazy cat'],
        ].map(([n, l]) => (
          <div key={l} style={{ borderTop: '1px solid var(--line-strong)', paddingTop: '1.25rem' }}>
            <div className="serif" style={{ fontSize: 64, fontWeight: 400, color: 'var(--maroon)', lineHeight: 1 }}>{n}</div>
            <div className="muted" style={{ marginTop: '0.75rem', fontSize: 13, letterSpacing: '0.02em' }}>{l}</div>
          </div>
        ))}
      </div>
    </section>
    <Footer/>
  </div>
);

const Gallery = () => (
  <div className="page">
    <section className="section-tight" style={{ paddingBottom: 0 }}>
      <div className="eyebrow">◦ Gallery</div>
      <h1 style={{ fontSize: 64, marginTop: '0.5rem', fontWeight: 400 }}>
        A walk around the place.
      </h1>
    </section>
    <div className="gallery-grid">
      {GALLERY.map((g, i) => (
        <Img key={i} src={g.img} label={g.label} aspect={g.size === 'tall' ? '3/5' : g.size === 'wide' ? '2/1' : '1'}
          style={{ gridRow: g.size === 'tall' ? 'span 2' : 'auto', gridColumn: g.size === 'wide' ? 'span 2' : 'auto', borderRadius: 6, height: '100%' }}/>
      ))}
    </div>
    <Footer/>
  </div>
);

const Contact = () => (
  <div className="page">
    <section className="section" style={{ paddingBottom: '2rem' }}>
      <div className="eyebrow">◦ Contact</div>
      <h1 style={{ fontSize: 80, marginTop: '1rem', fontWeight: 400 }}>
        Visit us, or <em style={{ fontStyle: 'italic', fontWeight: 300, color: 'var(--maroon)' }}>write to us.</em>
      </h1>
    </section>
    <section style={{ padding: '1rem 3rem 3rem', display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '3rem' }}>
      <div style={{ background: 'var(--maroon)', color: 'var(--ivory)', borderRadius: 12, padding: '2.5rem', minHeight: 420, position: 'relative', overflow: 'hidden' }}>
        <div className="eyebrow" style={{ color: 'var(--gold)' }}>◦ Find us</div>
        <h3 style={{ fontSize: 32, marginTop: '0.75rem', color: 'var(--ivory)' }}>Hotel Amara</h3>
        <p style={{ fontSize: 14, opacity: 0.75, lineHeight: 1.7, marginTop: '1rem' }}>
          Near Nizamabad Fort Road<br/>
          Subhashnagar · Nizamabad<br/>
          Telangana 503001 · India
        </p>
        <div style={{ marginTop: '2rem', display: 'grid', gap: '1rem' }}>
          <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}><Icon name="phone" size={16}/><span style={{ fontSize: 14 }}>+91 90000 00000</span></div>
          <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}><Icon name="mail" size={16}/><span style={{ fontSize: 14 }}>hello@amara-nizamabad.in</span></div>
          <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}><Icon name="clock" size={16}/><span style={{ fontSize: 14 }}>Reception · 24 hours</span></div>
        </div>
        <div style={{ position: 'absolute', right: '-40px', bottom: '-40px', width: 220, height: 220, borderRadius: '50%', border: '1px solid rgba(207,148,79,0.2)' }}/>
        <div style={{ position: 'absolute', right: '20px', bottom: '20px', width: 80, height: 80, borderRadius: '50%', background: 'var(--gold)', color: 'var(--olive)', display: 'grid', placeItems: 'center' }}>
          <Icon name="pin" size={32}/>
        </div>
      </div>
      <div className="form-block" style={{ padding: '2rem' }}>
        <div className="eyebrow">◦ Write to us</div>
        <div className="field-input"><label>Your name</label><input placeholder="Arjun Reddy"/></div>
        <div className="field-input"><label>Email</label><input placeholder="you@example.com"/></div>
        <div className="field-input"><label>What's it about?</label>
          <select defaultValue=""><option value="">Choose a topic</option><option>Booking enquiry</option><option>Event / Wedding</option><option>Press</option><option>Something else</option></select>
        </div>
        <div className="field-input"><label>Message</label><textarea rows={5}/></div>
        <button className="btn btn-primary">Send message <Icon name="arrow" size={14}/></button>
      </div>
    </section>
    <Footer/>
  </div>
);

Object.assign(window, { About, Gallery, Contact });
