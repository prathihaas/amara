// Rooms list, detail, and booking checkout
const RoomsList = ({ goto, booking, setBooking }) => {
  const nights = diffNights(booking.checkIn, booking.checkOut) || 1;
  return (
    <div className="page">
      <section className="section-tight" style={{ background: 'var(--bg-warm)', paddingBottom: '2rem' }}>
        <div className="eyebrow">◦ {fmtDate(booking.checkIn)} — {fmtDate(booking.checkOut)} · {nights} {nights === 1 ? 'night' : 'nights'} · {booking.guests} {booking.guests === 1 ? 'guest' : 'guests'}</div>
        <h1 style={{ fontSize: 'clamp(2rem, 8vw, 3.5rem)', marginTop: '0.5rem', fontWeight: 400 }}>
          Choose <em style={{ fontStyle: 'italic', fontWeight: 300, color: 'var(--maroon)' }}>your room.</em>
        </h1>
        <div style={{ marginTop: '1.5rem' }}>
          <BookingBar booking={booking} setBooking={setBooking} onSearch={() => {}} />
        </div>
      </section>
      <section className="section" style={{ paddingTop: '3rem' }}>
        <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '2rem', flexWrap: 'wrap' }}>
          {['All rooms', 'Courtyard view', 'City view', 'Suites', 'Families', 'Accessible'].map((f, i) => (
            <button key={f} className="pill" style={i === 0 ? { background: 'var(--ink)', color: 'var(--bg)', borderColor: 'var(--ink)' } : {}}>{f}</button>
          ))}
        </div>
        <div className="grid grid-2" style={{ gap: '1.5rem' }}>
          {ROOMS.map(r => (
            <article key={r.id} className="room-card" onClick={() => goto('rooms:' + r.id)} style={{ cursor: 'pointer' }}>
              <Img src={r.img} label={r.phLabel} aspect="16/10" />
              <div className="body">
                <div className="name">
                  <span>{r.name}</span>
                  <span className="price">{inr(r.price)} <span>/ night</span></span>
                </div>
                <div className="meta" style={{ marginTop: '0.5rem' }}>
                  <span><Icon name="bed" size={12}/> {r.bed}</span>
                  <span><Icon name="size" size={12}/> {r.size}</span>
                  <span><Icon name="users" size={12}/> Up to {r.max}</span>
                  <span><Icon name="view" size={12}/> {r.view}</span>
                </div>
                <p className="desc">{r.desc}</p>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '1.25rem' }}>
                  <span className="eyebrow">{nights} night{nights===1?'':'s'} · {inr(r.price * nights)}</span>
                  <span className="btn btn-primary btn-sm">Book this room <Icon name="arrow" size={12}/></span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
};

const RoomDetail = ({ id, goto, booking, setBooking }) => {
  const room = ROOMS.find(r => r.id === id);
  if (!room) return <div style={{ padding: '3rem' }}>Room not found.</div>;
  const nights = diffNights(booking.checkIn, booking.checkOut) || 1;
  const total = room.price * nights * booking.rooms;
  return (
    <div className="page">
      <div style={{ padding: '1.5rem 1.25rem 0' }}>
        <button className="pill" onClick={() => goto('rooms')}>← All rooms</button>
      </div>
      <section style={{ padding: '2rem 1.25rem 1rem' }}>
        <div className="eyebrow">◦ {room.view} view</div>
        <h1 style={{ fontSize: 'clamp(2.5rem, 10vw, 4.5rem)', marginTop: '0.75rem', fontWeight: 400, lineHeight: 0.98 }}>{room.name}</h1>
        <p style={{ fontSize: 18, marginTop: '0.75rem', maxWidth: '60ch', color: 'var(--ink-soft)' }}>{room.desc}</p>
      </section>
      <section style={{ padding: '2rem 1.25rem' }}>
        <div className="room-img-grid" style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', gap: '0.5rem', gridTemplateRows: '1fr 1fr', height: 520 }}>
          <Img src={room.img} label={room.phLabel} style={{ gridRow: 'span 2', borderRadius: 10, height: '100%' }} />
          <Img src="https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=800&q=80" label="Bath" style={{ borderRadius: 10, height: '100%' }} />
          <Img src="https://images.unsplash.com/photo-1540518614846-7eded433c457?w=800&q=80" label="Lounge" style={{ borderRadius: 10, height: '100%' }} />
          <Img src="https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=800&q=80" label="Detail" style={{ borderRadius: 10, height: '100%' }} />
          <Img src="https://images.unsplash.com/photo-1615529162924-f8605388461d?w=800&q=80" label="View" style={{ borderRadius: 10, height: '100%' }} />
        </div>
      </section>
      <section className="section room-detail-body" style={{ paddingTop: '3rem', paddingBottom: '3rem', display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: '3rem' }}>
        <div>
          <div className="eyebrow">◦ In this room</div>
          <h2 style={{ fontSize: 36, marginTop: '0.75rem' }}>Everything you need. Nothing you don't.</h2>
          <div className="amenities-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem 2rem', marginTop: '2rem' }}>
            {[...room.amenities, 'Blackout linen', 'Organic bath', 'Turndown service', 'Daily newspaper'].map(a => (
              <div key={a} style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', padding: '0.75rem 0', borderBottom: '1px solid var(--line)' }}>
                <Icon name="check" size={16} />
                <span style={{ fontSize: 14 }}>{a}</span>
              </div>
            ))}
          </div>
          <div className="room-stats-grid" style={{ marginTop: '3rem', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.5rem' }}>
            {[['bed', room.bed], ['size', room.size], ['users', 'Up to ' + room.max], ['view', room.view]].map(([ic, v]) => (
              <div key={v}>
                <Icon name={ic} size={22} />
                <div className="eyebrow" style={{ marginTop: '0.5rem', fontSize: 10 }}>{ic === 'bed' ? 'Bed' : ic === 'size' ? 'Size' : ic === 'users' ? 'Capacity' : 'View'}</div>
                <div style={{ fontFamily: 'Clash Display', fontSize: 20, marginTop: '0.25rem' }}>{v}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="summary">
          <div className="summary-card">
            <div className="eyebrow" style={{ color: 'var(--gold)' }}>◦ Your reservation</div>
            <h3 style={{ fontSize: 24, marginTop: '0.5rem', color: 'var(--on-surface)' }}>{room.name}</h3>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem', marginTop: '1.25rem' }}>
              <label style={{ background: 'rgba(255,255,255,0.06)', padding: '0.75rem', borderRadius: 8 }}>
                <div style={{ fontSize: 9, letterSpacing: '0.2em', opacity: 0.6 }}>ARRIVE</div>
                <input type="date" value={booking.checkIn} onChange={e => setBooking({ ...booking, checkIn: e.target.value })}
                  style={{ background: 'transparent', border: 0, color: 'var(--on-surface)', marginTop: 4, fontFamily: 'Clash Display', fontSize: 14, width: '100%' }} />
              </label>
              <label style={{ background: 'rgba(255,255,255,0.06)', padding: '0.75rem', borderRadius: 8 }}>
                <div style={{ fontSize: 9, letterSpacing: '0.2em', opacity: 0.6 }}>DEPART</div>
                <input type="date" value={booking.checkOut} onChange={e => setBooking({ ...booking, checkOut: e.target.value })}
                  style={{ background: 'transparent', border: 0, color: 'var(--on-surface)', marginTop: 4, fontFamily: 'Clash Display', fontSize: 14, width: '100%' }} />
              </label>
            </div>
            <div style={{ marginTop: '1.25rem' }}>
              <div className="summary-row"><span style={{ opacity: 0.7 }}>{inr(room.price)} × {nights} night{nights===1?'':'s'}</span><span>{inr(room.price * nights)}</span></div>
              <div className="summary-row"><span style={{ opacity: 0.7 }}>Rooms × {booking.rooms}</span><span>{inr(room.price * nights * booking.rooms - room.price * nights)}</span></div>
              <div className="summary-row"><span style={{ opacity: 0.7 }}>Taxes & fees</span><span>{inr(Math.round(total * 0.18))}</span></div>
              <div className="summary-total">
                <span className="eyebrow" style={{ color: 'var(--gold)' }}>TOTAL</span>
                <span className="total">{inr(Math.round(total * 1.18))}</span>
              </div>
            </div>
            <button className="btn btn-accent btn-xl" style={{ width: '100%', marginTop: '1.25rem' }}
              onClick={() => goto('book-checkout:' + room.id)}>
              Continue to checkout <Icon name="arrow" size={14}/>
            </button>
            <p style={{ fontSize: 11, opacity: 0.55, marginTop: '0.75rem', textAlign: 'center' }}>Free cancellation up to 48 hours before arrival.</p>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

const BookCheckout = ({ id, goto, booking, setBooking }) => {
  const room = ROOMS.find(r => r.id === id) || ROOMS[0];
  const nights = diffNights(booking.checkIn, booking.checkOut) || 1;
  const total = room.price * nights * booking.rooms;
  const tax = Math.round(total * 0.18);

  const [step, setStep] = useState(1);
  const [guest, setGuest] = useState({ first: '', last: '', email: '', phone: '', notes: '' });
  const [pay, setPay] = useState('card');
  const [card, setCard] = useState({ num: '', exp: '', cvv: '', name: '' });

  const stepOk = step === 1
    ? guest.first && guest.last && guest.email && guest.phone
    : (pay !== 'card' || (card.num && card.exp && card.cvv && card.name));

  if (step === 3) {
    return (
      <div className="confirm-wrap">
        <div>
          <div className="seal"><Icon name="check" size={34} stroke={2}/></div>
          <div className="eyebrow">◦ Confirmation · #AMR{Math.floor(Math.random()*90000+10000)}</div>
          <h1 style={{ fontSize: 'clamp(2.5rem, 9vw, 4rem)', marginTop: '1rem', fontWeight: 400 }}>
            We'll see you soon, <em style={{ fontStyle: 'italic', fontWeight: 300, color: 'var(--maroon)' }}>{guest.first || 'friend'}.</em>
          </h1>
          <p className="muted" style={{ maxWidth: '50ch', margin: '1rem auto 0', fontSize: 15 }}>
            Your {room.name} is reserved for {fmtDate(booking.checkIn)} — {fmtDate(booking.checkOut)}. A confirmation is on its way to {guest.email || 'you'}.
          </p>
          <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center', marginTop: '2.5rem' }}>
            <button className="btn btn-primary" onClick={() => goto('dine')}>Order food for arrival <Icon name="arrow" size={14}/></button>
            <button className="btn btn-ghost" onClick={() => goto('home')}>Back to home</button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div style={{ padding: '1.5rem 1.25rem 0' }}>
        <button className="pill" onClick={() => step === 1 ? goto('rooms:' + room.id) : setStep(step - 1)}>← Back</button>
      </div>
      <div className="checkout">
        <div>
          <div className="eyebrow">◦ Step {step} of 2 · {step === 1 ? 'Guest details' : 'Payment'}</div>
          <h1 style={{ fontSize: 'clamp(1.75rem, 7vw, 3.25rem)', marginTop: '0.5rem', fontWeight: 400 }}>
            {step === 1 ? 'Tell us about yourself.' : 'A quick payment.'}
          </h1>
          <div style={{ display: 'flex', gap: '0.5rem', marginTop: '1.5rem', marginBottom: '2rem' }}>
            <div style={{ flex: 1, height: 2, background: step >= 1 ? 'var(--ink)' : 'var(--line)' }}/>
            <div style={{ flex: 1, height: 2, background: step >= 2 ? 'var(--ink)' : 'var(--line)' }}/>
          </div>

          {step === 1 && (
            <div className="form-block">
              <div className="field-row">
                <div className="field-input"><label>First name</label><input value={guest.first} onChange={e => setGuest({ ...guest, first: e.target.value })} placeholder="Arjun"/></div>
                <div className="field-input"><label>Last name</label><input value={guest.last} onChange={e => setGuest({ ...guest, last: e.target.value })} placeholder="Reddy"/></div>
              </div>
              <div className="field-row">
                <div className="field-input"><label>Email</label><input type="email" value={guest.email} onChange={e => setGuest({ ...guest, email: e.target.value })} placeholder="you@example.com"/></div>
                <div className="field-input"><label>Phone</label><input value={guest.phone} onChange={e => setGuest({ ...guest, phone: e.target.value })} placeholder="+91 90000 00000"/></div>
              </div>
              <div className="field-input">
                <label>Special requests (optional)</label>
                <textarea value={guest.notes} onChange={e => setGuest({ ...guest, notes: e.target.value })} rows={3} placeholder="Late check-in, quiet floor, extra pillows, etc."/>
              </div>
              <div>
                <label style={{ fontSize: 10, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--ink-soft)', fontWeight: 600 }}>Arriving at</label>
                <div className="radio-row" style={{ marginTop: '0.5rem' }}>
                  {['Before 2pm', '2pm — 6pm', '6pm — 10pm', 'After 10pm'].map(t => (
                    <button key={t} className={guest.arrival === t ? 'on' : ''} onClick={() => setGuest({ ...guest, arrival: t })}>{t}</button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="form-block">
              <div className="radio-row">
                {[['card', 'Card'], ['upi', 'UPI'], ['pay-at-hotel', 'Pay at hotel']].map(([v, l]) => (
                  <button key={v} className={pay === v ? 'on' : ''} onClick={() => setPay(v)}>{l}</button>
                ))}
              </div>
              {pay === 'card' && (
                <>
                  <div className="field-input"><label>Card number</label><input value={card.num} onChange={e => setCard({ ...card, num: e.target.value })} placeholder="1234 5678 9012 3456"/></div>
                  <div className="field-row">
                    <div className="field-input"><label>Expiry</label><input value={card.exp} onChange={e => setCard({ ...card, exp: e.target.value })} placeholder="MM / YY"/></div>
                    <div className="field-input"><label>CVV</label><input value={card.cvv} onChange={e => setCard({ ...card, cvv: e.target.value })} placeholder="123"/></div>
                  </div>
                  <div className="field-input"><label>Name on card</label><input value={card.name} onChange={e => setCard({ ...card, name: e.target.value })} placeholder="ARJUN REDDY"/></div>
                </>
              )}
              {pay === 'upi' && <div className="field-input"><label>UPI ID</label><input placeholder="you@upi"/></div>}
              {pay === 'pay-at-hotel' && <p className="muted" style={{ fontSize: 13 }}>We'll hold your reservation. You can settle on arrival.</p>}
            </div>
          )}

          <div style={{ display: 'flex', gap: '0.75rem', marginTop: '1.5rem' }}>
            <button className="btn btn-primary btn-xl" disabled={!stepOk}
              style={{ opacity: stepOk ? 1 : 0.4, cursor: stepOk ? 'pointer' : 'not-allowed' }}
              onClick={() => setStep(step + 1)}>
              {step === 1 ? 'Continue to payment' : 'Confirm booking'} <Icon name="arrow" size={14}/>
            </button>
          </div>
        </div>

        <div className="summary">
          <div className="summary-card">
            <div className="eyebrow" style={{ color: 'var(--gold)' }}>◦ Booking summary</div>
            <h3 style={{ fontSize: 22, marginTop: '0.5rem', color: 'var(--on-surface)' }}>{room.name}</h3>
            <p style={{ fontSize: 13, opacity: 0.7, marginTop: '0.5rem' }}>{fmtDate(booking.checkIn)} — {fmtDate(booking.checkOut)} · {nights} night{nights===1?'':'s'} · {booking.guests} guest{booking.guests===1?'':'s'}</p>
            <div className="rule" style={{ background: 'rgba(255,255,255,0.12)', margin: '1.25rem 0' }}/>
            <div className="summary-row"><span style={{ opacity: 0.7 }}>{inr(room.price)} × {nights} × {booking.rooms}</span><span>{inr(total)}</span></div>
            <div className="summary-row"><span style={{ opacity: 0.7 }}>Taxes & fees (18%)</span><span>{inr(tax)}</span></div>
            <div className="summary-total">
              <span className="eyebrow" style={{ color: 'var(--gold)' }}>TOTAL</span>
              <span className="total">{inr(total + tax)}</span>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

Object.assign(window, { RoomsList, RoomDetail, BookCheckout });
