// The N symbol: red left stroke, orange diagonal, turquoise right stroke.
// Defined once per page and reused with <use href="#n">.
export function LogoDefs() {
  return (
    <svg width="0" height="0" style={{ position: "absolute" }} aria-hidden="true">
      <defs>
        <linearGradient id="gRed" gradientUnits="userSpaceOnUse" x1="24" y1="80" x2="24" y2="25">
          <stop offset="0" stopColor="#DF301C" />
          <stop offset="1" stopColor="#FF5A1F" />
        </linearGradient>
        <linearGradient id="gTeal" gradientUnits="userSpaceOnUse" x1="76" y1="10" x2="76" y2="70">
          <stop offset="0" stopColor="#3FE0EC" />
          <stop offset="1" stopColor="#0098B0" />
        </linearGradient>
        <linearGradient id="gOr" gradientUnits="userSpaceOnUse" x1="24" y1="22" x2="76" y2="78">
          <stop offset="0" stopColor="#FF9100" />
          <stop offset="1" stopColor="#FFA526" />
        </linearGradient>
        <symbol id="n" viewBox="0 0 100 100">
          <line x1="76" y1="20" x2="76" y2="62" stroke="url(#gTeal)" strokeWidth="26" strokeLinecap="round" />
          <line x1="24" y1="38" x2="24" y2="80" stroke="url(#gRed)" strokeWidth="26" strokeLinecap="round" />
          <line x1="24" y1="22" x2="76" y2="78" stroke="url(#gOr)" strokeWidth="26" strokeLinecap="round" />
        </symbol>
      </defs>
    </svg>
  );
}

export function Symbol({ className }: { className?: string }) {
  return (
    <svg className={className} aria-hidden="true">
      <use href="#n" />
    </svg>
  );
}

export function Arrow({ size = 20 }: { size?: number }) {
  return (
    <svg aria-hidden="true" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}
