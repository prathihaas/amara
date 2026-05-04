// Minimal line icons — 1.5px strokes, no decorative fill
const Icon = ({ name, size = 20, stroke = 1.5 }) => {
  const common = {
    width: size, height: size, viewBox: '0 0 24 24',
    fill: 'none', stroke: 'currentColor',
    strokeWidth: stroke, strokeLinecap: 'round', strokeLinejoin: 'round',
  };
  switch (name) {
    case 'grid': return <svg {...common}><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/></svg>;
    case 'sun': return <svg {...common}><circle cx="12" cy="12" r="4"/><path d="M12 3v2M12 19v2M5 12H3M21 12h-2M6.3 6.3l-1.4-1.4M19.1 19.1l-1.4-1.4M17.7 6.3l1.4-1.4M4.9 19.1l1.4-1.4"/></svg>;
    case 'pot': return <svg {...common}><path d="M4 10h16v6a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4z"/><path d="M7 10V7M12 10V6M17 10V7"/><path d="M3 10h18"/></svg>;
    case 'bowl': return <svg {...common}><path d="M3 11h18l-1 4a4 4 0 0 1-4 3H8a4 4 0 0 1-4-3z"/><path d="M9 7c0-1 1-2 3-2s3 1 3 2"/></svg>;
    case 'flame': return <svg {...common}><path d="M12 2s5 4 5 9a5 5 0 0 1-10 0c0-2 1-3 2-4 0 2 1 3 2 3 0-3 1-5 1-8z"/></svg>;
    case 'bread': return <svg {...common}><path d="M4 10c0-3 3-5 8-5s8 2 8 5c0 1-1 2-2 2v5a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2v-5c-1 0-2-1-2-2z"/><path d="M9 13v3M12 13v3M15 13v3"/></svg>;
    case 'heart': return <svg {...common}><path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1-1.1a5.5 5.5 0 0 0-7.8 7.8l1 1.1L12 21l7.8-7.5 1-1.1a5.5 5.5 0 0 0 0-7.8z"/></svg>;
    case 'cup': return <svg {...common}><path d="M5 8h12v7a4 4 0 0 1-4 4H9a4 4 0 0 1-4-4z"/><path d="M17 10h2a2 2 0 0 1 0 4h-2"/><path d="M8 3v2M11 3v2M14 3v2"/></svg>;

    case 'bed': return <svg {...common}><path d="M3 8v12M21 8v12M3 14h18M6 14V10a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v4"/></svg>;
    case 'users': return <svg {...common}><circle cx="9" cy="8" r="3"/><path d="M3 20a6 6 0 0 1 12 0"/><circle cx="17" cy="9" r="2.5"/><path d="M15 15a5 5 0 0 1 6 5"/></svg>;
    case 'size': return <svg {...common}><path d="M3 3h7v2H5v5H3zM21 21h-7v-2h5v-5h2z"/></svg>;
    case 'view': return <svg {...common}><circle cx="12" cy="12" r="3"/><path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12z"/></svg>;

    case 'cart': return <svg {...common}><path d="M3 4h2l2 12h11l2-8H7"/><circle cx="9" cy="20" r="1.5"/><circle cx="17" cy="20" r="1.5"/></svg>;
    case 'close': return <svg {...common}><path d="M6 6l12 12M18 6L6 18"/></svg>;
    case 'arrow': return <svg {...common}><path d="M5 12h14M13 6l6 6-6 6"/></svg>;
    case 'check': return <svg {...common}><path d="M5 12l5 5L20 7"/></svg>;
    case 'pin': return <svg {...common}><path d="M12 22s7-7 7-12a7 7 0 0 0-14 0c0 5 7 12 7 12z"/><circle cx="12" cy="10" r="2.5"/></svg>;
    case 'phone': return <svg {...common}><path d="M5 4h4l2 5-2 1a11 11 0 0 0 5 5l1-2 5 2v4a2 2 0 0 1-2 2A17 17 0 0 1 3 6a2 2 0 0 1 2-2z"/></svg>;
    case 'mail': return <svg {...common}><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/></svg>;
    case 'star': return <svg {...common}><path d="M12 2l3 6.5 7 1-5 5 1 7-6-3-6 3 1-7-5-5 7-1z"/></svg>;
    case 'leaf': return <svg {...common}><path d="M4 20c0-8 6-14 16-16-2 10-8 16-16 16z"/><path d="M4 20l10-10"/></svg>;
    case 'clock': return <svg {...common}><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>;
    case 'minus': return <svg {...common}><path d="M5 12h14"/></svg>;
    case 'plus': return <svg {...common}><path d="M12 5v14M5 12h14"/></svg>;
    default: return null;
  }
};
window.Icon = Icon;
