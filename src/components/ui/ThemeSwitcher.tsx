import { useEffect, useState } from 'react'

interface AccentTheme {
  id: string
  name: string
  hex: string
  soft: string
  deep: string
}

const THEMES: AccentTheme[] = [
  {
    id: 'emerald',
    name: 'Emerald',
    hex: '#4FB286',
    soft: '#dff1e7',
    deep: '#1E5A41',
  },
  {
    id: 'gold',
    name: 'Gold',
    hex: '#C8A35C',
    soft: '#f4ebd6',
    deep: '#6B4F1F',
  },
  {
    id: 'blue',
    name: 'Blue',
    hex: '#6892D6',
    soft: '#dbe7f7',
    deep: '#274F8F',
  },
]

const STORAGE_KEY = 'avanor-accent'

function applyTheme(theme: AccentTheme) {
  const root = document.documentElement
  root.style.setProperty('--accent', theme.hex)
  root.style.setProperty('--accent-soft', theme.soft)
  root.style.setProperty('--accent-deep', theme.deep)
}

export default function ThemeSwitcher() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState<string>(() => {
    try {
      return localStorage.getItem(STORAGE_KEY) ?? 'emerald'
    } catch {
      return 'emerald'
    }
  })

  // Apply saved theme on mount
  useEffect(() => {
    const theme = THEMES.find((t) => t.id === active) ?? THEMES[0]
    applyTheme(theme)
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  const select = (theme: AccentTheme) => {
    setActive(theme.id)
    applyTheme(theme)
    try {
      localStorage.setItem(STORAGE_KEY, theme.id)
    } catch {
      // ignore
    }
  }

  const activeTheme = THEMES.find((t) => t.id === active) ?? THEMES[0]

  return (
    <div
      className="fixed bottom-4 right-4 z-50 flex flex-col items-end gap-2"
      style={{ transform: 'translateZ(0)' }}
    >
      {/* Panel */}
      {open && (
        <div
          className="rounded-2xl p-4 flex flex-col gap-3 min-w-[168px]"
          style={{
            background: 'rgba(250,249,247,0.82)',
            backdropFilter: 'blur(24px) saturate(160%)',
            WebkitBackdropFilter: 'blur(24px) saturate(160%)',
            border: '0.5px solid rgba(255,255,255,0.6)',
            boxShadow:
              '0 1px 0 rgba(255,255,255,0.5) inset, 0 12px 40px rgba(0,0,0,0.18)',
          }}
        >
          <p
            className="font-mono text-[10px] tracking-[0.1em] uppercase m-0"
            style={{ color: 'rgba(41,38,27,0.5)' }}
          >
            Accent color
          </p>
          <div className="flex flex-col gap-1.5">
            {THEMES.map((theme) => {
              const isActive = theme.id === active
              return (
                <button
                  key={theme.id}
                  onClick={() => select(theme)}
                  className="flex items-center gap-2.5 px-2 py-1.5 rounded-lg transition-colors duration-150 w-full text-left"
                  style={{
                    background: isActive ? 'rgba(0,0,0,0.06)' : 'transparent',
                  }}
                  aria-label={`Switch to ${theme.name} accent`}
                >
                  {/* Swatch */}
                  <span
                    className="w-5 h-5 rounded-full shrink-0 flex items-center justify-center"
                    style={{ background: theme.hex }}
                  >
                    {isActive && (
                      <svg
                        viewBox="0 0 10 10"
                        width="10"
                        height="10"
                        fill="none"
                        stroke="white"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M2 5.2 4.2 7.5 8 3" />
                      </svg>
                    )}
                  </span>
                  <span
                    className="font-sans text-[12px] font-medium"
                    style={{ color: isActive ? '#29261b' : 'rgba(41,38,27,0.7)' }}
                  >
                    {theme.name}
                  </span>
                </button>
              )
            })}
          </div>
        </div>
      )}

      {/* Toggle button */}
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-9 h-9 rounded-full flex items-center justify-center transition-transform duration-200 hover:scale-110 active:scale-95"
        style={{
          background: activeTheme.hex,
          boxShadow: `0 2px 12px ${activeTheme.hex}55, 0 0 0 3px white, 0 0 0 4px ${activeTheme.hex}44`,
        }}
        aria-label="Toggle theme switcher"
        title="Change accent color"
      >
        {open ? (
          <svg
            viewBox="0 0 14 14"
            width="12"
            height="12"
            fill="none"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
          >
            <path d="M2 2l10 10M12 2L2 12" />
          </svg>
        ) : (
          <svg
            viewBox="0 0 16 16"
            width="14"
            height="14"
            fill="none"
            stroke="white"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="8" cy="8" r="3" fill="white" stroke="none" />
            <path d="M8 1v2M8 13v2M1 8h2M13 8h2M3.1 3.1l1.4 1.4M11.5 11.5l1.4 1.4M3.1 12.9l1.4-1.4M11.5 4.5l1.4-1.4" />
          </svg>
        )}
      </button>
    </div>
  )
}
