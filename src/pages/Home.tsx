import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex flex-col items-center justify-center px-margin-mobile md:px-margin-desktop bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-surface-container-high via-surface to-background overflow-hidden -mt-32">
        {/* Cinematic overlay stripes / lighting fx */}
        <div className="absolute inset-0 z-0 opacity-20 pointer-events-none flex justify-center gap-12 md:gap-32">
          <div className="w-[1px] h-full bg-gradient-to-b from-transparent via-secondary-container to-transparent opacity-50"></div>
          <div className="w-[1px] h-full bg-gradient-to-b from-transparent via-white to-transparent opacity-30 shadow-[0_0_20px_rgba(255,255,255,0.8)]"></div>
          <div className="w-[1px] h-full bg-gradient-to-b from-transparent via-tertiary to-transparent opacity-50"></div>
        </div>

        <div className="relative z-10 text-center max-w-5xl mx-auto flex flex-col items-center pt-32">
          <h1 className="font-display-xl-mobile md:font-display-xl text-primary tracking-widest mb-6">
            STUDIO VISION
          </h1>
          <p className="font-body-lg text-on-surface-variant max-w-2xl mx-auto mb-10 leading-relaxed">
            A vanguard creative studio defining the intersection of editorial elegance and cinematic intensity. We craft high-fidelity visual narratives for visionary brands.
          </p>
          <Link to="/portfolio" className="border border-outline-variant px-8 py-4 font-label-technical uppercase tracking-widest text-primary hover:border-tertiary hover:text-tertiary transition-all duration-300 backdrop-blur-sm bg-surface/20">
            Explore Our Work
          </Link>
        </div>
      </section>

      {/* Featured Work Section */}
      <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-32">
        <div className="flex justify-between items-end border-b border-outline-variant/20 pb-4 mb-16">
          <h2 className="font-headline-lg-mobile md:font-headline-lg text-primary">Featured Work</h2>
          <span className="font-label-technical text-on-surface-variant uppercase tracking-widest">01 — 2024</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
          {/* Featured Item 1 */}
          <Link to="/portfolio" className="group cursor-pointer block">
            <div className="relative overflow-hidden aspect-[16/9] mb-6 bg-surface-container border border-outline-variant/10">
              <img 
                src="https://images.unsplash.com/photo-1549490349-8643362247b5?q=80&w=1600&auto=format&fit=crop" 
                alt="Neon Genesis" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80" 
              />
              <div className="absolute inset-0 bg-background/20 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-background/90 to-transparent flex justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <span className="border border-tertiary px-3 py-1 font-label-technical uppercase tracking-widest text-tertiary bg-surface/40 backdrop-blur-md">Video</span>
              </div>
            </div>
            <h3 className="font-headline-lg-mobile text-primary mb-2">Neon Genesis</h3>
            <p className="font-body-md text-on-surface-variant">Editorial Campaign</p>
          </Link>

          {/* Featured Item 2 */}
          <Link to="/portfolio" className="group cursor-pointer block md:mt-24">
            <div className="relative overflow-hidden aspect-square md:aspect-[4/5] mb-6 bg-surface-container border border-outline-variant/10">
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDygBIDxapscR04DiLxrlEzICwjLWyIk49DengzYDxQR6NZYQuAeukcLuXQRrQuFsKl04AwwPFW137KagrTOn3vzBuuaEWG-veAcos1kzbHZND1D5TUs-ozyp1todKFtY3wdgxZuXq1pmz8S6Du78KiXo3lSZ4iGghzA6QlEpQf7ZE4flRaJVxWYMpFJlnac7Ra3kaTaTDhIq-YH2ibdYlayr674_Gj50U6SF8y4JsUjp15Wwn9_CyVYSkhDHV3oEDWrQor_loe9zg" 
                alt="Aura Structure" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80" 
              />
              <div className="absolute inset-0 bg-background/20 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-background/90 to-transparent flex justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <span className="border border-secondary-container px-3 py-1 font-label-technical uppercase tracking-widest text-secondary-container bg-surface/40 backdrop-blur-md">Print / Digital</span>
              </div>
            </div>
            <h3 className="font-headline-lg-mobile text-primary mb-2">Aura Structure</h3>
            <p className="font-body-md text-on-surface-variant">Print / Digital</p>
          </Link>
        </div>
      </section>
    </div>
  );
}
