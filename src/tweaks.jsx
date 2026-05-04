// Tweaks floating panel + edit-mode host bridge
const TweaksPanel = ({ tweaks, setTweaks, visible }) => {
  if (!visible) return null;
  const set = (k, v) => {
    const next = { ...tweaks, [k]: v };
    setTweaks(next);
    window.parent.postMessage({ type: '__edit_mode_set_keys', edits: { [k]: v } }, '*');
  };
  return (
    <div className="tweaks">
      <header>
        <h4>Tweaks</h4>
        <Icon name="grid" size={14}/>
      </header>
      <div className="tweaks-body">
        <div className="tw-group">
          <label>Color mode</label>
          <div className="tw-options">
            {[['olive','Maroon'],['maroon','Reserve'],['gold','Gold']].map(([v,l]) => (
              <button key={v} className={tweaks.colorMode === v ? 'on' : ''} onClick={() => set('colorMode', v)}>{l}</button>
            ))}
          </div>
        </div>
        <div className="tw-group">
          <label>Hero layout</label>
          <div className="tw-options">
            {[['fullbleed','Full-bleed'],['split','Split'],['editorial','Editorial']].map(([v,l]) => (
              <button key={v} className={tweaks.heroLayout === v ? 'on' : ''} onClick={() => set('heroLayout', v)}>{l}</button>
            ))}
          </div>
        </div>
        <div className="tw-group">
          <label>Food flow</label>
          <div className="tw-options">
            {[['icon-grid','Icon grid'],['swipe','Swipe cards']].map(([v,l]) => (
              <button key={v} className={tweaks.foodFlow === v ? 'on' : ''} onClick={() => set('foodFlow', v)}>{l}</button>
            ))}
          </div>
        </div>
        <div className="tw-group">
          <label>Density</label>
          <div className="tw-options">
            {[['airy','Airy luxe'],['compact','Compact']].map(([v,l]) => (
              <button key={v} className={tweaks.density === v ? 'on' : ''} onClick={() => set('density', v)}>{l}</button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

Object.assign(window, { TweaksPanel });
