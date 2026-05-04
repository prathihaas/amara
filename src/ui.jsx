// Shared layout + primitives
const { useState, useEffect, useMemo, useRef, createContext, useContext } = React;

const Ph = ({ label, aspect, bg, style }) => (
  <div className="ph" data-label={label} style={{ aspectRatio: aspect, ['--ph-bg']: bg, ...style }} />
);

const Img = ({ src, label, aspect, style }) => (
  src ? (
    <div
      className="img"
      style={{
        backgroundImage: `url(${src})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        aspectRatio: aspect,
        ...style,
      }}
      aria-label={label}
    />
  ) : <Ph label={label} aspect={aspect} style={style} />
);

// Brand logo — primary wordmark "AMARA" with "A" monogram in a ring.
// Variants: primary (horizontal lockup), mark (monogram only), stacked (big + underline)
const AmaraMark = ({ size = 36, color = 'currentColor', ring = true }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none" aria-label="Amara mark">
    {ring && <circle cx="24" cy="24" r="22.5" stroke={color} strokeWidth="1"/>}
    {/* Stylized A: two legs, crossbar, small serif-esque baseline */}
    <path d="M14 34 L24 12 L34 34" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
    <path d="M18.5 26 L29.5 26" stroke={color} strokeWidth="1.6" strokeLinecap="round"/>
    <circle cx="24" cy="12" r="1" fill={color}/>
  </svg>
);

const AmaraWordmark = ({ size = 22, color = 'currentColor', tight = false }) => (
  <span style={{
    fontFamily: "'Clash Display', serif",
    fontWeight: 500,
    fontSize: size,
    letterSpacing: tight ? '0.08em' : '0.22em',
    color,
    lineHeight: 1,
    display: 'inline-block',
  }}>AMARA</span>
);

const Logo = ({ variant = 'primary', tone = 'light', onDark = null, surface = null }) => {
  // Amara brand logo — pick file by surface:
  //   surface='sidebar' | 'footer' → Positive Secondary Muted Warm Gold  (gold wordmark on ivory)
  //   surface='hero'                → Positive Primary Burgundy Maroon   (stacked maroon on ivory)
  //   else                          → fall back by tone
  const dark = onDark !== null ? onDark : (tone === 'light');

  const goldSecondary = 'assets/logo/positive-secondary-gold.png';
  const maroonPrimary = 'assets/logo/positive-primary-maroon.png';
  const maroonSecondary = 'assets/logo/positive-secondary-maroon.png';
  const oliveNegative = 'assets/logo/negative-secondary-olive.png';

  let src, w;
  if (surface === 'sidebar') { src = goldSecondary; w = 170; }
  else if (surface === 'footer') { src = goldSecondary; w = 200; }
  else if (surface === 'hero') { src = maroonPrimary; w = 260; }
  else if (variant === 'stacked') { src = dark ? oliveNegative : maroonPrimary; w = 280; }
  else if (variant === 'mark') { src = dark ? oliveNegative : maroonSecondary; w = null; }
  else { src = dark ? oliveNegative : maroonSecondary; w = 150; }

  if (variant === 'mark') {
    return <img src={src} alt="Amara" style={{ height: 36, width: 'auto', display: 'block' }}/>;
  }

  if (variant === 'stacked' || surface === 'hero') {
    const sub = (surface === 'sidebar' || surface === 'footer') ? 'var(--gold)' : (dark ? 'var(--gold)' : 'var(--maroon)');
    return (
      <div style={{ textAlign: 'center', display: 'inline-block' }}>
        <img src={src} alt="Amara" style={{ width: w, height: 'auto', display: 'block' }}/>
        <div style={{ width: 28, height: 1, background: sub, margin: '18px auto 10px' }}/>
        <div style={{
          fontSize: 9, letterSpacing: '0.4em', textTransform: 'uppercase',
          color: sub, fontFamily: "'Manrope', sans-serif", fontWeight: 600,
        }}>Nizamabad · Est. 1897</div>
      </div>
    );
  }

  // primary horizontal — sidebar / footer / generic
  const sub = (surface === 'sidebar' || surface === 'footer') ? 'var(--gold)' : (dark ? 'var(--gold)' : 'var(--maroon)');
  return (
    <div style={{ display: 'inline-flex', flexDirection: 'column', alignItems: 'flex-start', gap: '0.5rem' }}>
      <img src={src} alt="Amara" style={{ width: w, height: 'auto', display: 'block' }}/>
      <div style={{
        fontSize: 9, letterSpacing: '0.32em', textTransform: 'uppercase',
        color: sub, fontFamily: "'Manrope', sans-serif", fontWeight: 600,
        lineHeight: 1.6,
      }}>
        Nizamabad · Est. 1897
      </div>
    </div>
  );
};

const NAV_ITEMS = [
  { id: 'home', label: 'Stay' },
  { id: 'rooms', label: 'Rooms & Suites' },
  { id: 'dine', label: 'Dine' },
  { id: 'gallery', label: 'Gallery' },
  { id: 'about', label: 'About' },
  { id: 'contact', label: 'Contact' },
];

const Sidebar = ({ route, goto }) => (
  <aside className="sidebar">
    <Logo surface="sidebar" tone="light" />
    <div className="nav">
      {NAV_ITEMS.map(it => (
        <button
          key={it.id}
          className={route.split(':')[0] === it.id ? 'active' : ''}
          onClick={() => goto(it.id)}
        >
          <span className="n-dot"/>
          {it.label}
        </button>
      ))}
    </div>
    <div className="sidebar-foot">
      A HOTEL SHAPED<br/>BY STILLNESS<br/>AND SUNLIGHT.<br/><br/>EST. NIZAMABAD<br/>TELANGANA · IN
    </div>
  </aside>
);

const Topbar = ({ crumb, cart, openCart, goto }) => (
  <div className="topbar">
    <div className="crumbs">{crumb}</div>
    <div className="topbar-right">
      <button className="pill" onClick={() => goto('contact')}><Icon name="phone" size={14}/> +91 90000 00000</button>
      <button className="pill cart-pill" onClick={openCart}>
        <Icon name="cart" size={14}/>
        {cart.count > 0 ? (
          <>Cart <span className="count">{cart.count}</span></>
        ) : 'Cart'}
      </button>
    </div>
  </div>
);

// Cart context
const CartCtx = createContext(null);
const useCart = () => useContext(CartCtx);

const CartProvider = ({ children }) => {
  const [items, setItems] = useState(() => {
    try { return JSON.parse(localStorage.getItem('amara_cart') || '[]'); }
    catch { return []; }
  });
  const [open, setOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem('amara_cart', JSON.stringify(items));
  }, [items]);

  const add = (item) => setItems(prev => {
    const f = prev.find(i => i.id === item.id);
    if (f) return prev.map(i => i.id === item.id ? { ...i, qty: i.qty + 1 } : i);
    return [...prev, { ...item, qty: 1 }];
  });
  const remove = (id) => setItems(prev => prev.filter(i => i.id !== id));
  const setQty = (id, qty) => setItems(prev => qty <= 0
    ? prev.filter(i => i.id !== id)
    : prev.map(i => i.id === id ? { ...i, qty } : i));
  const clear = () => setItems([]);

  const count = items.reduce((a, i) => a + i.qty, 0);
  const subtotal = items.reduce((a, i) => a + i.qty * i.price, 0);

  return (
    <CartCtx.Provider value={{ items, add, remove, setQty, clear, count, subtotal, open, setOpen }}>
      {children}
    </CartCtx.Provider>
  );
};

const CartDrawer = ({ goto }) => {
  const cart = useCart();
  return (
    <>
      <div className={'drawer-backdrop ' + (cart.open ? 'open' : '')} onClick={() => cart.setOpen(false)} />
      <aside className={'drawer ' + (cart.open ? 'open' : '')}>
        <div className="drawer-head">
          <div>
            <div className="eyebrow">Your order</div>
            <h3 style={{ fontSize: 26, marginTop: 4 }}>Cart</h3>
          </div>
          <button className="pill" onClick={() => cart.setOpen(false)}><Icon name="close" size={14}/> Close</button>
        </div>
        <div className="drawer-body">
          {cart.items.length === 0 ? (
            <div style={{ padding: '3rem 0', textAlign: 'center' }}>
              <div style={{
                width: 72, height: 72, borderRadius: '50%',
                background: 'var(--bg-warm)', display: 'grid', placeItems: 'center',
                margin: '0 auto 1rem', color: 'var(--ink-soft)',
              }}>
                <Icon name="cart" size={28}/>
              </div>
              <div className="serif" style={{ fontSize: 22, marginBottom: 4 }}>Nothing in your cart yet.</div>
              <p className="muted" style={{ fontSize: 13, maxWidth: 32 + 'ch', margin: '0 auto 1.5rem' }}>
                Browse the menu and tap <b style={{ color: 'var(--ink)' }}>+</b> on anything you fancy.
              </p>
              <button className="btn btn-primary" onClick={() => { cart.setOpen(false); goto('dine'); }}>
                Open menu
              </button>
            </div>
          ) : cart.items.map(it => (
            <div className="cart-item" key={it.id}>
              <div className="thumb" />
              <div>
                <div className="name">{it.name}</div>
                <div className="ppu">₹{it.price} · each</div>
                <div style={{ marginTop: 6 }}>
                  <div className="num-stepper" style={{ height: 34 }}>
                    <button onClick={() => cart.setQty(it.id, it.qty - 1)}>−</button>
                    <div className="v">{it.qty}</div>
                    <button onClick={() => cart.setQty(it.id, it.qty + 1)}>+</button>
                  </div>
                </div>
              </div>
              <div style={{ textAlign: 'right' }}>
                <div className="serif" style={{ fontSize: 18, fontWeight: 600 }}>₹{(it.qty * it.price).toLocaleString('en-IN')}</div>
                <button onClick={() => cart.remove(it.id)} style={{ fontSize: 11, color: 'var(--ink-soft)', letterSpacing: '0.1em', textTransform: 'uppercase', marginTop: 4 }}>Remove</button>
              </div>
            </div>
          ))}
        </div>
        {cart.items.length > 0 && (
          <div className="drawer-foot">
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.4rem', fontSize: 13 }}>
              <span className="muted">Subtotal</span>
              <span style={{ fontWeight: 600 }}>₹{cart.subtotal.toLocaleString('en-IN')}</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.4rem', fontSize: 13 }}>
              <span className="muted">Service (5%)</span>
              <span style={{ fontWeight: 600 }}>₹{Math.round(cart.subtotal * 0.05).toLocaleString('en-IN')}</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', paddingTop: '0.6rem', borderTop: '1px solid var(--line)' }}>
              <span className="eyebrow">Total</span>
              <span className="serif" style={{ fontSize: 28, fontWeight: 600 }}>₹{Math.round(cart.subtotal * 1.05).toLocaleString('en-IN')}</span>
            </div>
            <button className="btn btn-primary btn-xl" style={{ width: '100%', marginTop: '1rem' }}
              onClick={() => { cart.setOpen(false); goto('food-checkout'); }}>
              Checkout <Icon name="arrow" size={16}/>
            </button>
          </div>
        )}
      </aside>
    </>
  );
};

// Format helpers
const inr = (n) => '₹' + n.toLocaleString('en-IN');
const fmtDate = (d) => {
  if (!d) return '';
  const dt = new Date(d + 'T00:00:00');
  return dt.toLocaleDateString('en-IN', { day: 'numeric', month: 'short' });
};
const diffNights = (a, b) => {
  if (!a || !b) return 0;
  return Math.max(0, Math.round((new Date(b) - new Date(a)) / 86400000));
};

Object.assign(window, {
  Ph, Img, Logo, AmaraMark, AmaraWordmark, Sidebar, Topbar, NAV_ITEMS,
  CartProvider, CartDrawer, useCart,
  inr, fmtDate, diffNights,
});
