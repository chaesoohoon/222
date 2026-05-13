import { ReactNode } from 'react';
import { Link, useLocation } from 'react-router-dom';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const location = useLocation();

  const getLinkClass = (path: string) => {
    const baseClass = "font-label-technical transition-colors duration-300";
    if (location.pathname === path || (path === '/' && location.pathname === '')) {
      return `${baseClass} text-tertiary font-bold border-b border-tertiary pb-1`;
    }
    return `${baseClass} text-on-surface hover:text-secondary`;
  };

  return (
    <div className="min-h-screen flex flex-col font-body-md">
      <nav className="fixed top-0 w-full z-50 bg-surface/60 backdrop-blur-2xl border-b border-outline-variant/10 shadow-none">
        <div className="flex justify-between items-center w-full px-margin-mobile md:px-margin-desktop h-20 max-w-container-max mx-auto">
          <Link to="/" className="font-display-xl text-primary tracking-tighter uppercase text-[24px] md:text-[32px] leading-none">
            STUDIO_VISION
          </Link>
          <div className="hidden md:flex gap-8 items-center">
            <Link to="/" className={getLinkClass("/")}>Home</Link>
            <Link to="/portfolio" className={getLinkClass("/portfolio")}>Portfolio</Link>
            <Link to="/about" className={getLinkClass("/about")}>About</Link>
            <Link to="/contact" className={getLinkClass("/contact")}>Contact</Link>
          </div>
          <button className="hidden md:flex font-label-technical uppercase bg-secondary-container text-on-secondary-container px-6 py-3 hover:bg-secondary transition-colors duration-300 scale-95 hover:scale-100 ease-in-out">
            Start Project
          </button>
          <button className="md:hidden text-primary">
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>menu</span>
          </button>
        </div>
      </nav>

      <main className="flex-grow pt-32 pb-section-gap relative w-full">
        {children}
      </main>

      <footer className="bg-surface border-t border-outline-variant/10 w-full py-20">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center px-margin-mobile md:px-margin-desktop gap-gutter max-w-container-max mx-auto">
          <div className="font-display-xl-mobile text-on-surface text-[32px] md:text-[40px] leading-none mb-8 md:mb-0">
            STUDIO_VISION
          </div>
          <div className="flex flex-wrap gap-8 mb-8 md:mb-0">
            {['Instagram', 'Vimeo', 'LinkedIn', 'Privacy'].map((item) => (
              <a key={item} href="#" className="font-label-technical uppercase tracking-widest text-on-surface-variant hover:text-secondary hover:translate-x-1 transition-transform duration-300">
                {item}
              </a>
            ))}
          </div>
          <div className="font-label-technical uppercase tracking-widest text-on-surface-variant opacity-60 hover:opacity-100 transition-opacity">
            © 2024 STUDIO_VISION. ALL RIGHTS RESERVED.
          </div>
        </div>
      </footer>
    </div>
  );
}
