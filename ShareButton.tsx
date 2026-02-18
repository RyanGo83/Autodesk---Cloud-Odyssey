import React, { useState, useRef, useEffect } from 'react';

const SHARE_URL = typeof window !== 'undefined' ? window.location.href : '';
const SHARE_TITLE = "Autodesk: A Cloudy Odyssey";
const SHARE_TEXT = "A snarky timeline of Autodesk's cloud platform rebranding odyssey 🚀";

const XIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.741l7.73-8.835L1.254 2.25H8.08l4.713 5.98zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const LinkedInIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const LinkIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
  </svg>
);

const CheckIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
  </svg>
);

export default function ShareButton() {
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  const handleMainClick = async () => {
    if (navigator.share) {
      try {
        await navigator.share({ title: SHARE_TITLE, text: SHARE_TEXT, url: SHARE_URL });
      } catch (_) {}
      return;
    }
    setOpen((o) => !o);
  };

  const copyLink = async () => {
    await navigator.clipboard.writeText(SHARE_URL);
    setCopied(true);
    setTimeout(() => { setCopied(false); setOpen(false); }, 2000);
  };

  const shareOptions = [
    {
      label: 'Twitter / X',
      color: '#00f3ff',
      icon: <XIcon />,
      href: `https://twitter.com/intent/tweet?text=${encodeURIComponent(SHARE_TEXT)}&url=${encodeURIComponent(SHARE_URL)}`,
    },
    {
      label: 'LinkedIn',
      color: '#ff00ff',
      icon: <LinkedInIcon />,
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(SHARE_URL)}`,
    },
    {
      label: copied ? 'Copied!' : 'Copy Link',
      color: copied ? '#39ff14' : '#ff6b00',
      icon: copied ? <CheckIcon /> : <LinkIcon />,
      onClick: copyLink,
    },
  ];

  return (
    <>
      <style>{`
        @keyframes fab-spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes fab-ping {
          0%, 100% { transform: scale(1); opacity: 0.4; }
          50% { transform: scale(1.4); opacity: 0; }
        }
        .fab-ping {
          animation: fab-ping 2s ease-in-out infinite;
        }
        .fab-conic {
          animation: fab-spin 3s linear infinite;
        }
      `}</style>

      <div
        ref={menuRef}
        style={{ position: 'fixed', bottom: '2rem', right: '2rem', zIndex: 200, display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '10px' }}
      >
        {/* Share option pills */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '10px' }}>
          {shareOptions.map((opt, i) => {
            const pillStyle: React.CSSProperties = {
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              padding: '10px 18px',
              borderRadius: '9999px',
              border: `1px solid ${opt.color}`,
              color: opt.color,
              background: 'rgba(22, 22, 26, 0.88)',
              backdropFilter: 'blur(12px)',
              fontFamily: 'Space Grotesk, sans-serif',
              fontWeight: 700,
              fontSize: '11px',
              letterSpacing: '0.1em',
              textTransform: 'uppercase' as const,
              textDecoration: 'none',
              cursor: 'pointer',
              boxShadow: open ? `0 0 14px ${opt.color}55, 0 0 28px ${opt.color}22` : 'none',
              opacity: open ? 1 : 0,
              transform: open ? 'translateY(0) scale(1)' : 'translateY(20px) scale(0.9)',
              transition: `all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1) ${open ? i * 50 : 0}ms`,
              pointerEvents: open ? 'auto' : 'none',
              whiteSpace: 'nowrap',
            };

            return opt.href ? (
              <a
                key={opt.label}
                href={opt.href}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                style={pillStyle}
              >
                {opt.icon}
                {opt.label}
              </a>
            ) : (
              <button
                key={opt.label}
                onClick={opt.onClick}
                style={{ ...pillStyle, border: `1px solid ${opt.color}` }}
              >
                {opt.icon}
                {opt.label}
              </button>
            );
          })}
        </div>

        {/* Label + FAB row */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <span style={{
            fontFamily: 'Space Grotesk, sans-serif',
            fontWeight: 700,
            fontSize: '10px',
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            color: '#00f3ff',
            textShadow: '0 0 10px #00f3ff88',
            opacity: open ? 0 : 1,
            transition: 'opacity 0.2s ease',
            pointerEvents: 'none',
            whiteSpace: 'nowrap',
          }}>
            Share the countdown
          </span>

        {/* FAB */}
        <button
          onClick={handleMainClick}
          aria-label="Share"
          style={{
            position: 'relative',
            width: '56px',
            height: '56px',
            borderRadius: '9999px',
            border: 'none',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: open
              ? '#16161a'
              : 'linear-gradient(135deg, #00f3ff, #ff00ff)',
            boxShadow: open
              ? '0 0 20px #ff00ff99, 0 0 40px #ff00ff44'
              : '0 0 20px #00f3ff88, 0 0 40px #00f3ff33',
            transition: 'all 0.35s ease',
            outline: 'none',
          }}
        >
          {/* Ping ring (idle) */}
          {!open && (
            <span
              className="fab-ping"
              style={{
                position: 'absolute',
                inset: 0,
                borderRadius: '9999px',
                border: '2px solid #00f3ff',
                pointerEvents: 'none',
              }}
            />
          )}

          {/* Conic spinning border (open) */}
          {open && (
            <>
              <span
                className="fab-conic"
                style={{
                  position: 'absolute',
                  inset: '-3px',
                  borderRadius: '9999px',
                  background: 'conic-gradient(from 0deg, #00f3ff, #ff00ff, #39ff14, #00f3ff)',
                  zIndex: -1,
                }}
              />
              <span
                style={{
                  position: 'absolute',
                  inset: '2px',
                  borderRadius: '9999px',
                  background: '#16161a',
                  zIndex: 0,
                }}
              />
            </>
          )}

          {/* Icon */}
          <span
            style={{
              position: 'relative',
              zIndex: 1,
              color: open ? '#00f3ff' : '#0a0a0c',
              display: 'flex',
              transition: 'transform 0.35s ease, color 0.35s ease',
              transform: open ? 'rotate(135deg)' : 'rotate(0deg)',
            }}
          >
            {open ? (
              <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
              </svg>
            )}
          </span>
        </button>
        </div>
      </div>
    </>
  );
}
