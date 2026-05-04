// Dine (menu browse + food checkout)
const CatIcon = ({ name }) => {
  if (name === 'grid') return <Icon name="grid" size={28}/>;
  return <Icon name={name} size={28}/>;
};

const FoodCard = ({ item }) => {
  const cart = useCart();
  const inCart = cart.items.find(i => i.id === item.id);
  return (
    <article className="food-card">
      <Img label={item.phLabel} aspect="4/3" />
      <div className="body">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '0.5rem' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: 4 }}>
              <span className={'dot-mark ' + (item.veg ? '' : 'non')}/>
              {item.featured && <span className="eyebrow" style={{ color: 'var(--gold)', fontSize: 9 }}>◦ Chef's pick</span>}
            </div>
            <div className="title">{item.name}</div>
          </div>
        </div>
        <div className="sub">{item.sub}</div>
        <div className="foot">
          <div className="price">{inr(item.price)}</div>
          {inCart ? (
            <div className="stepper">
              <button onClick={() => cart.setQty(item.id, inCart.qty - 1)}>−</button>
              <div className="qty">{inCart.qty}</div>
              <button onClick={() => cart.setQty(item.id, inCart.qty + 1)}>+</button>
            </div>
          ) : (
            <button className="add-btn" onClick={() => cart.add({ id: item.id, name: item.name, price: item.price })} aria-label={`Add ${item.name}`}>+</button>
          )}
        </div>
      </div>
    </article>
  );
};

// Swipe-through food flow variant
const SwipeFlow = ({ items }) => {
  const [idx, setIdx] = useState(0);
  const cart = useCart();
  const item = items[idx];
  if (!item) return <p className="muted">Nothing here.</p>;
  const inCart = cart.items.find(i => i.id === item.id);
  const next = () => setIdx((idx + 1) % items.length);
  return (
    <div style={{ maxWidth: 560, margin: '0 auto' }}>
      <article className="food-card" style={{ boxShadow: 'var(--shadow-m)' }}>
        <Img label={item.phLabel} aspect="4/3" />
        <div className="body" style={{ padding: '2rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <span className={'dot-mark ' + (item.veg ? '' : 'non')}/>
            <span className="eyebrow">{CATEGORIES.find(c => c.id === item.cat)?.name}</span>
          </div>
          <h3 style={{ fontSize: 32, marginTop: '0.5rem' }}>{item.name}</h3>
          <p className="muted" style={{ fontSize: 14, marginTop: '0.5rem' }}>{item.sub}</p>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '1.5rem' }}>
            <div className="serif" style={{ fontSize: 28, fontWeight: 600 }}>{inr(item.price)}</div>
            <div style={{ display: 'flex', gap: '0.5rem' }}>
              <button className="btn btn-ghost" onClick={next}>Skip</button>
              {inCart ? (
                <div className="stepper" style={{ height: 48 }}>
                  <button onClick={() => cart.setQty(item.id, inCart.qty - 1)}>−</button>
                  <div className="qty">{inCart.qty}</div>
                  <button onClick={() => { cart.setQty(item.id, inCart.qty + 1); }}>+</button>
                </div>
              ) : (
                <button className="btn btn-accent" onClick={() => { cart.add({ id: item.id, name: item.name, price: item.price }); next(); }}>
                  Add & next <Icon name="arrow" size={14}/>
                </button>
              )}
            </div>
          </div>
        </div>
      </article>
      <div style={{ display: 'flex', justifyContent: 'center', gap: 4, marginTop: '1rem' }}>
        {items.slice(0, 12).map((_, i) => (
          <div key={i} style={{ width: i === idx ? 24 : 6, height: 6, borderRadius: 3, background: i === idx ? 'var(--ink)' : 'var(--line-strong)', transition: 'width 180ms' }}/>
        ))}
      </div>
    </div>
  );
};

const Dine = ({ goto, tweaks }) => {
  const [cat, setCat] = useState('all');
  const filtered = cat === 'all' ? MENU : MENU.filter(m => m.cat === cat);
  const cart = useCart();

  return (
    <div className="page">
      <section className="section-tight" style={{ background: 'var(--bg-warm)', paddingBottom: '2rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'end', gap: '2rem' }}>
          <div>
            <div className="eyebrow">◦ From our kitchen</div>
            <h1 style={{ fontSize: 64, marginTop: '0.5rem', fontWeight: 400, lineHeight: 1 }}>
              Pick a bite.<br/>
              <em style={{ fontStyle: 'italic', fontWeight: 300, color: 'var(--maroon)' }}>Tap plus. That's it.</em>
            </h1>
          </div>
          <div style={{ textAlign: 'right' }}>
            <div className="eyebrow">◦ Delivery</div>
            <div className="serif" style={{ fontSize: 22, marginTop: 6 }}>To your room, 25 min</div>
            <div className="muted" style={{ fontSize: 12, marginTop: 4, letterSpacing: '0.04em' }}>Open · 06:30 — 23:30</div>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: '3rem', paddingBottom: '2rem' }}>
        <div className="eyebrow" style={{ marginBottom: '1rem' }}>◦ Browse by category</div>
        <div className="category-grid">
          {CATEGORIES.map(c => (
            <button key={c.id} className={'cat-tile ' + (cat === c.id ? 'active' : '')} onClick={() => setCat(c.id)}>
              <div className="cat-icon"><CatIcon name={c.icon}/></div>
              <div className="cat-name">{c.name}</div>
              <div className="cat-count">{c.id === 'all' ? MENU.length : MENU.filter(m => m.cat === c.id).length} items</div>
            </button>
          ))}
        </div>
      </section>

      <section className="section" style={{ paddingTop: '1rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'end', marginBottom: '1.5rem' }}>
          <h2 style={{ fontSize: 32 }}>{CATEGORIES.find(c => c.id === cat)?.name} · {filtered.length}</h2>
          <div style={{ display: 'flex', gap: '0.5rem' }}>
            <button className="pill"><Icon name="leaf" size={12}/> Veg only</button>
            <button className="pill">Under ₹500</button>
          </div>
        </div>

        {tweaks.foodFlow === 'swipe' ? (
          <SwipeFlow items={filtered}/>
        ) : (
          <div className="food-grid">
            {filtered.map(m => <FoodCard key={m.id} item={m}/>)}
          </div>
        )}
      </section>

      {cart.count > 0 && (
        <div style={{
          position: 'sticky', bottom: '1rem', margin: '2rem 3rem 3rem',
          background: 'var(--ink)', color: 'var(--bg)',
          borderRadius: 999, padding: '0.75rem 0.75rem 0.75rem 1.5rem',
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          boxShadow: '0 18px 40px rgba(26,31,18,0.35)', zIndex: 3,
        }}>
          <div>
            <div style={{ fontSize: 10, letterSpacing: '0.22em', opacity: 0.6, textTransform: 'uppercase' }}>◦ {cart.count} item{cart.count===1?'':'s'}</div>
            <div className="serif" style={{ fontSize: 22 }}>{inr(cart.subtotal)}</div>
          </div>
          <button className="btn btn-accent btn-xl" onClick={() => cart.setOpen(true)}>
            View cart <Icon name="arrow" size={14}/>
          </button>
        </div>
      )}

      <Footer />
    </div>
  );
};

const FoodCheckout = ({ goto }) => {
  const cart = useCart();
  const [deliveryMode, setDeliveryMode] = useState('room');
  const [room, setRoom] = useState('204');
  const [contact, setContact] = useState({ name: '', phone: '' });
  const [pay, setPay] = useState('room-charge');
  const [done, setDone] = useState(false);

  const service = Math.round(cart.subtotal * 0.05);
  const tax = Math.round(cart.subtotal * 0.05);
  const total = cart.subtotal + service + tax;

  if (done) {
    return (
      <div className="confirm-wrap">
        <div>
          <div className="seal"><Icon name="check" size={34} stroke={2}/></div>
          <div className="eyebrow">◦ Order #AMR-F{Math.floor(Math.random()*900+100)}</div>
          <h1 style={{ fontSize: 60, marginTop: '1rem', fontWeight: 400 }}>
            On its way — <em style={{ fontStyle: 'italic', fontWeight: 300, color: 'var(--maroon)' }}>25 minutes.</em>
          </h1>
          <p className="muted" style={{ maxWidth: '48ch', margin: '1rem auto 0' }}>
            {deliveryMode === 'room' ? `We'll knock softly at Room ${room}.` : 'Ready for pickup at reception.'} Total charged: <b style={{ color: 'var(--ink)' }}>{inr(total)}</b>.
          </p>
          <button className="btn btn-primary btn-xl" style={{ marginTop: '2rem' }} onClick={() => { cart.clear(); goto('home'); }}>Back to home</button>
        </div>
      </div>
    );
  }

  if (cart.items.length === 0) {
    return (
      <div className="confirm-wrap">
        <div>
          <div className="seal" style={{ background: 'var(--bg-warm)', color: 'var(--olive)' }}><Icon name="cart" size={34}/></div>
          <h1 style={{ fontSize: 44, marginTop: '1rem', fontWeight: 400 }}>Cart's empty.</h1>
          <p className="muted">Browse the menu and add a few things first.</p>
          <button className="btn btn-primary btn-xl" style={{ marginTop: '1.5rem' }} onClick={() => goto('dine')}>Open menu</button>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div style={{ padding: '1.5rem 3rem 0' }}>
        <button className="pill" onClick={() => goto('dine')}>← Back to menu</button>
      </div>
      <div className="checkout">
        <div>
          <div className="eyebrow">◦ Almost ready</div>
          <h1 style={{ fontSize: 52, marginTop: '0.5rem', fontWeight: 400 }}>Where should it go?</h1>

          <div className="form-block" style={{ marginTop: '2rem' }}>
            <div>
              <label style={{ fontSize: 10, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--ink-soft)', fontWeight: 600 }}>Delivery</label>
              <div className="radio-row" style={{ marginTop: '0.5rem' }}>
                {[['room','To my room'],['pickup','Pickup at reception'],['courtyard','Courtyard / poolside']].map(([v,l]) => (
                  <button key={v} className={deliveryMode === v ? 'on' : ''} onClick={() => setDeliveryMode(v)}>{l}</button>
                ))}
              </div>
            </div>
            {deliveryMode === 'room' && (
              <div className="field-input">
                <label>Room number</label>
                <input value={room} onChange={e => setRoom(e.target.value)} placeholder="204"/>
              </div>
            )}
            <div className="field-row">
              <div className="field-input"><label>Your name</label><input value={contact.name} onChange={e => setContact({ ...contact, name: e.target.value })} placeholder="Arjun Reddy"/></div>
              <div className="field-input"><label>Phone</label><input value={contact.phone} onChange={e => setContact({ ...contact, phone: e.target.value })} placeholder="+91 90000 00000"/></div>
            </div>
            <div className="field-input">
              <label>Anything we should know?</label>
              <textarea rows={2} placeholder="Extra spicy · no onions · extra napkins"/>
            </div>
            <div>
              <label style={{ fontSize: 10, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--ink-soft)', fontWeight: 600 }}>Payment</label>
              <div className="radio-row" style={{ marginTop: '0.5rem' }}>
                {[['room-charge','Charge to room'],['card','Card'],['upi','UPI'],['cash','Cash on delivery']].map(([v,l]) => (
                  <button key={v} className={pay === v ? 'on' : ''} onClick={() => setPay(v)}>{l}</button>
                ))}
              </div>
            </div>
          </div>

          <button className="btn btn-primary btn-xl" style={{ marginTop: '1.5rem', width: '100%' }}
            onClick={() => setDone(true)}>
            Place order · {inr(total)} <Icon name="arrow" size={14}/>
          </button>
        </div>

        <div className="summary">
          <div className="summary-card">
            <div className="eyebrow" style={{ color: 'var(--gold)' }}>◦ Your order · {cart.count} items</div>
            <h3 style={{ fontSize: 22, marginTop: '0.5rem', color: 'var(--on-surface)' }}>From our kitchen</h3>
            <div style={{ marginTop: '1rem' }}>
              {cart.items.map(it => (
                <div key={it.id} className="summary-row">
                  <span style={{ opacity: 0.8 }}>{it.qty} × {it.name}</span>
                  <span>{inr(it.qty * it.price)}</span>
                </div>
              ))}
            </div>
            <div className="rule" style={{ background: 'rgba(255,255,255,0.12)', margin: '1rem 0' }}/>
            <div className="summary-row"><span style={{ opacity: 0.7 }}>Subtotal</span><span>{inr(cart.subtotal)}</span></div>
            <div className="summary-row"><span style={{ opacity: 0.7 }}>Service (5%)</span><span>{inr(service)}</span></div>
            <div className="summary-row"><span style={{ opacity: 0.7 }}>GST (5%)</span><span>{inr(tax)}</span></div>
            <div className="summary-total">
              <span className="eyebrow" style={{ color: 'var(--gold)' }}>TOTAL</span>
              <span className="total">{inr(total)}</span>
            </div>
            <p style={{ fontSize: 11, opacity: 0.55, marginTop: '1rem', textAlign: 'center' }}>Est. 25 minutes</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

Object.assign(window, { Dine, FoodCheckout, FoodCard });
