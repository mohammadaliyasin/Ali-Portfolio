const navLinks = [
  { href: "#hero", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

const socials = [
  {
    label: "GitHub",
    href: "https://github.com/mohammadaliyasin",
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/ali-yasin-0166a0233/",
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/ali_yasin_440",
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.17.054 1.97.24 2.427.403.59.213 1.012.47 1.457.915.445.445.702.867.915 1.457.163.457.349 1.257.403 2.427.058 1.266.07 1.645.07 4.85s-.012 3.584-.07 4.85c-.054 1.17-.24 1.97-.403 2.427-.213.59-.47 1.012-.915 1.457-.445.445-.867.702-1.457.915-.457.163-1.257.349-2.427.403-1.266.058-1.645.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.054-1.97-.24-2.427-.403-.59-.213-1.012-.47-1.457-.915-.445-.445-.702-.867-.915-1.457-.163-.457-.349-1.257-.403-2.427C2.175 15.747 2.163 15.368 2.163 12s.012-3.584.07-4.85c.054-1.17.24-1.97.403-2.427.213-.59.47-1.012.915-1.457C4 2.681 4.422 2.424 5.012 2.211c.457-.163 1.257-.349 2.427-.403C8.416 2.175 8.796 2.163 12 2.163zM12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a3.999 3.999 0 110-7.998 3.999 3.999 0 010 7.998zm6.406-11.845a1.44 1.44 0 11-2.88 0 1.44 1.44 0 012.88 0z" />
      </svg>
    ),
  },
  {
    label: "Linktree",
    href: "https://linktr.ee/aliyasin.in",
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M7.953 15.066c-.08.163-.08.324-.08.486h4.727v4.98c0 .243 0 .486.08.647.162.405.566.729 1.052.729.486 0 .89-.243 1.052-.647.08-.162.08-.404.08-.648v-5.06h4.727c0-.162 0-.324-.08-.486-.162-.567-.647-.97-1.214-.97H9.247c-.567 0-1.052.403-1.294.97z"/><path d="M3.146 8.396c0 .566.404 1.052.97 1.213.162.082.324.082.487.082h3.06v1.862a22.12 22.12 0 00-.08 1.294c0 .486.324.89.647 1.133.162.08.405.161.647.161.243 0 .486-.08.647-.16.324-.244.648-.648.648-1.134a22.12 22.12 0 00-.081-1.294V9.691h3.061c.162 0 .324 0 .486-.08.567-.162.97-.648.97-1.215 0-.566-.403-1.052-.97-1.213-.162-.082-.324-.082-.486-.082H8.211V5.038c0-.162 0-.324-.08-.486C7.968 4.08 7.564 3.757 7.078 3.757c-.486 0-.89.323-1.052.728-.08.162-.08.405-.08.648v2.063H2.884c-.162 0-.324 0-.487.08-.566.162-.97.648-.97 1.215z"/>
      </svg>
    ),
  },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Main row */}
        <div className="py-10 sm:py-12 grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-6">

          {/* Brand */}
          <div className="space-y-3 text-center sm:text-left">
            <div className="flex items-center gap-2 justify-center sm:justify-start">
              <span className="w-2 h-2 rounded-full animate-green-pulse" style={{ background: "var(--green)" }} />
              <span className="font-mono font-bold text-xl text-foreground">ali.dev</span>
            </div>
            <p className="text-sm text-muted-foreground font-mono leading-relaxed">
              flutter · firebase · node.js
            </p>
            <p className="text-xs text-muted-foreground/50 font-mono">
              // building things that matter
            </p>
          </div>

          {/* Quick links */}
          <div className="text-center space-y-3">
            <h3 className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground/50">navigation</h3>
            <nav className="flex flex-wrap justify-center gap-x-5 gap-y-2">
              {navLinks.map((l) => (
                <a
                  key={l.href} href={l.href}
                  className="text-sm text-muted-foreground hover:text-green transition-colors duration-300 font-mono"
                >
                  {l.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Social */}
          <div className="text-center sm:text-right space-y-3">
            <h3 className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground/50">socials</h3>
            <div className="flex items-center justify-center sm:justify-end gap-2">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank" rel="noopener noreferrer"
                  title={s.label}
                  className="w-9 h-9 rounded-lg bg-secondary border border-border flex items-center justify-center text-muted-foreground hover:border-green hover:text-green hover:bg-green-muted transition-all duration-300"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="py-4 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="font-mono text-[11px] text-muted-foreground/50">
            © {year} Mohammad Ali Yasin — all rights reserved
          </p>
          <a
            href="https://linktr.ee/aliyasin.in" target="_blank" rel="noopener noreferrer"
            className="font-mono text-[11px] text-muted-foreground/50 hover:text-green transition-colors duration-300"
          >
            linktr.ee/aliyasin.in →
          </a>
        </div>
      </div>
    </footer>
  );
}