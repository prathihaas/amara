// App shell — routes, tweaks bridge, providers
const { useState: uS, useEffect: uE, useMemo: uM } = React;

const routeCrumb = (route) => {
  const [r, p] = route.split(':');
  const room = p ? ROOMS.find(x => x.id === p) : null;
  switch (r) {
    case 'home': return '◦ Amara · Nizamabad';
    case 'rooms': return room ? `◦ Rooms / ${room.name}` : '◦ Rooms & Suites';
    case 'book-checkout': return '◦ Booking · Checkout';
    case 'dine': return '◦ Dine / Menu';
    case 'food-checkout': return '◦ Dine / Checkout';
    case 'gallery': return '◦ Gallery';
    case 'about': return '◦ About';
    case 'contact': return '◦ Contact';
    default: return '◦ Amara';
  }
};

const App = () => {
  const [route, setRoute] = uS(() => localStorage.getItem('amara_route') || 'home');
  const [tweaks, setTweaks] = uS(() => ({ ...window.TWEAKS }));
  const [tweaksVisible, setTweaksVisible] = uS(false);
  const cart = useCart();

  const [booking, setBooking] = uS(() => {
    try { return JSON.parse(localStorage.getItem('amara_booking') || 'null') || null; }
    catch { return null; }
  });

  uE(() => {
    if (!booking) {
      const ci = todayStr();
      const co = addDays(ci, 2);
      setBooking({ checkIn: ci, checkOut: co, guests: 2, rooms: 1 });
    }
  }, []);

  uE(() => { if (booking) localStorage.setItem('amara_booking', JSON.stringify(booking)); }, [booking]);
  uE(() => { localStorage.setItem('amara_route', route); }, [route]);

  uE(() => {
    const handler = (e) => {
      if (!e.data || !e.data.type) return;
      if (e.data.type === '__activate_edit_mode') setTweaksVisible(true);
      if (e.data.type === '__deactivate_edit_mode') setTweaksVisible(false);
    };
    window.addEventListener('message', handler);
    window.parent.postMessage({ type: '__edit_mode_available' }, '*');
    return () => window.removeEventListener('message', handler);
  }, []);

  uE(() => {
    document.documentElement.setAttribute('data-mode', tweaks.colorMode || 'olive');
    document.documentElement.setAttribute('data-density', tweaks.density || 'airy');
  }, [tweaks]);

  const goto = (r) => {
    setRoute(r);
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  if (!booking) return null;

  const [r, param] = route.split(':');
  let page;
  if (r === 'home') page = <Home goto={goto} booking={booking} setBooking={setBooking} tweaks={tweaks}/>;
  else if (r === 'rooms' && param) page = <RoomDetail id={param} goto={goto} booking={booking} setBooking={setBooking}/>;
  else if (r === 'rooms') page = <RoomsList goto={goto} booking={booking} setBooking={setBooking}/>;
  else if (r === 'book-checkout') page = <BookCheckout id={param} goto={goto} booking={booking} setBooking={setBooking}/>;
  else if (r === 'dine') page = <Dine goto={goto} tweaks={tweaks}/>;
  else if (r === 'food-checkout') page = <FoodCheckout goto={goto}/>;
  else if (r === 'gallery') page = <Gallery/>;
  else if (r === 'about') page = <About/>;
  else if (r === 'contact') page = <Contact/>;
  else page = <Home goto={goto} booking={booking} setBooking={setBooking} tweaks={tweaks}/>;

  return (
    <div className="app" data-screen-label={route}>
      <Sidebar route={route} goto={goto} />
      <div>
        <Topbar crumb={routeCrumb(route)} cart={cart} openCart={() => cart.setOpen(true)} goto={goto} />
        {page}
      </div>
      <CartDrawer goto={goto}/>
      <TweaksPanel tweaks={tweaks} setTweaks={setTweaks} visible={tweaksVisible}/>
    </div>
  );
};

const Root = () => (
  <CartProvider>
    <App/>
  </CartProvider>
);

ReactDOM.createRoot(document.getElementById('root')).render(<Root/>);
