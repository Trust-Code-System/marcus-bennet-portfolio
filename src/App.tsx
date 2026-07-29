import { useEffect, useState } from 'react'
import { X } from 'lucide-react'

const backgroundUrl =
  'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260729_022513_486985a2-ac8c-4278-91a8-071dcd9fcaff.png&w=1280&q=85'
const portraitUrl =
  'https://stone-expand-60400629.figma.site/_assets/v11/8da570354e86aa0d44ac3e4aa335a72c8e750d68.png'

const navLinks = ['Story', 'Jobs', 'Message']
const socialLinks = ['Instagram', 'TikTok', 'YouTube']

function StaggeredLinks({
  links,
  startDelay,
}: {
  links: string[]
  startDelay: number
}) {
  return (
    <>
      {links.map((link, index) => (
        <a
          key={link}
          className="anim-fade-up transition-opacity duration-300 hover:opacity-60"
          href="#"
          style={{ animationDelay: `${startDelay + index * 80}ms` }}
        >
          {link}
        </a>
      ))}
    </>
  )
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  return (
    <main className="relative h-[100dvh] w-full overflow-hidden bg-[#141414] text-cream">
      <img
        alt=""
        className="anim-fade-in absolute inset-0 h-full w-full object-cover"
        src={backgroundUrl}
      />

      <div className="anim-fade-up absolute inset-x-0 top-[16vh] z-10 overflow-hidden sm:top-[14vh]" style={{ animationDelay: '500ms' }}>
        <div className="marquee flex w-max whitespace-nowrap font-hn text-[16vh] leading-none text-cream sm:text-[26vh]">
          <span className="pr-[6vw]">Marcus &mdash; Bennet&nbsp;</span>
          <span className="pr-[6vw]" aria-hidden="true">
            Marcus &mdash; Bennet&nbsp;
          </span>
        </div>
      </div>

      <div className="anim-line absolute inset-x-6 bottom-[5.5rem] z-10 h-0.5 bg-cream sm:inset-x-10 sm:bottom-28" style={{ animationDelay: '1200ms' }} />

      <footer className="absolute inset-x-0 bottom-0 z-30 flex items-end justify-between px-6 pb-5 font-hn text-xs leading-relaxed sm:z-10 sm:px-10 sm:pb-8 sm:text-sm">
        <p className="anim-fade-up" style={{ animationDelay: '1400ms' }}>
          Visuals Composer
          <br />
          Digital Crafter
          <br />
          Obsessed by The Office
        </p>
        <p className="anim-fade-up text-right" style={{ animationDelay: '1550ms' }}>
          A homage to
          <br />
          Marcus Holloway
        </p>
      </footer>

      <img
        alt="Portrait"
        className="anim-rise-in pointer-events-none absolute inset-0 z-20 h-full w-full object-cover"
        src={portraitUrl}
        style={{ animationDelay: '300ms' }}
      />

      <header className="absolute inset-x-0 top-0 z-30 flex items-start justify-between px-6 pt-6 sm:px-10 sm:pt-8">
        <a className="anim-fade-up font-hn text-lg tracking-wide" href="#" style={{ animationDelay: '800ms' }}>
          Marcus
        </a>

        <div className="hidden items-start gap-16 sm:flex lg:gap-24">
          <span className="anim-fade-up text-sm" style={{ animationDelay: '900ms' }}>
            2025
          </span>
          <nav aria-label="Primary" className="flex flex-col gap-0.5 text-sm">
            <StaggeredLinks links={navLinks} startDelay={1000} />
          </nav>
          <nav aria-label="Social" className="flex flex-col gap-0.5 text-sm">
            <StaggeredLinks links={socialLinks} startDelay={1150} />
          </nav>
        </div>
      </header>

      <button
        aria-expanded={menuOpen}
        aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        className="anim-fade-up absolute right-5 top-4 z-50 flex h-10 w-10 items-center justify-center sm:hidden"
        onClick={() => setMenuOpen((open) => !open)}
        style={{ animationDelay: '900ms' }}
        type="button"
      >
        <span className={`relative block h-4 w-6 transition-opacity duration-300 ${menuOpen ? 'opacity-0' : 'opacity-100'}`}>
          <span className={`menu-bar top-0 ${menuOpen ? 'translate-y-[7px] rotate-45' : ''}`} />
          <span className={`menu-bar top-[7px] transition-opacity duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`menu-bar top-[14px] ${menuOpen ? '-translate-y-[7px] -rotate-45' : ''}`} />
        </span>
      </button>

      <div
        aria-hidden={!menuOpen}
        className={`fixed inset-0 z-40 bg-black/40 backdrop-blur-sm transition-opacity duration-500 sm:hidden ${
          menuOpen ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
        onClick={() => setMenuOpen(false)}
      >
        <aside
          aria-label="Mobile menu"
          className={`absolute inset-y-0 right-0 w-[80%] max-w-sm bg-[#141414] px-8 py-10 transition-transform duration-[600ms] ease-[cubic-bezier(0.76,0,0.24,1)] ${
            menuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
          onClick={(event) => event.stopPropagation()}
        >
          <X
            aria-hidden="true"
            className={`absolute right-6 top-6 transition-all duration-500 ${
              menuOpen ? 'rotate-0 opacity-100 delay-300' : 'rotate-90 opacity-0'
            }`}
            size={26}
            strokeWidth={1.5}
          />

          <div className="mt-16">
            <p
              className={`text-xs uppercase tracking-[0.2em] text-cream/50 transition-all duration-500 ${
                menuOpen ? 'translate-y-0 opacity-100 delay-[250ms]' : 'translate-y-4 opacity-0'
              }`}
            >
              Site Index
            </p>
            <nav aria-label="Mobile primary" className="mt-6 flex flex-col">
              {navLinks.map((link, index) => (
                <a
                  key={link}
                  className={`text-4xl leading-tight transition-all duration-500 ${
                    menuOpen ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
                  }`}
                  href="#"
                  style={{ transitionDelay: menuOpen ? `${300 + index * 80}ms` : '0ms' }}
                  onClick={() => setMenuOpen(false)}
                >
                  {link}
                </a>
              ))}
            </nav>
          </div>

          <div className="absolute bottom-10 left-8 right-8">
            <p
              className={`text-xs uppercase tracking-[0.2em] text-cream/50 transition-all duration-500 ${
                menuOpen ? 'translate-y-0 opacity-100 delay-500' : 'translate-y-4 opacity-0'
              }`}
            >
              Find Me
            </p>
            <nav aria-label="Mobile social" className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-sm">
              {socialLinks.map((link, index) => (
                <a
                  key={link}
                  className={`transition-all duration-500 ${
                    menuOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                  }`}
                  href="#"
                  style={{ transitionDelay: menuOpen ? `${550 + index * 60}ms` : '0ms' }}
                  onClick={() => setMenuOpen(false)}
                >
                  {link}
                </a>
              ))}
            </nav>
          </div>
        </aside>
      </div>
    </main>
  )
}

export default App
