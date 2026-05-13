export default function Portfolio() {
  return (
    <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop w-full">
      {/* Header & Filters */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 border-b border-outline-variant/10 pb-8">
        <div>
          <h1 className="font-display-xl-mobile md:font-display-xl text-primary mb-4">SELECTED<br />WORKS</h1>
          <p className="font-body-lg text-on-surface-variant max-w-xl">
            A curated collection of our cinematic and editorial projects, pushing the boundaries of visual storytelling in a digital age.
          </p>
        </div>
        <div className="flex gap-6 overflow-x-auto no-scrollbar">
          <button className="font-label-technical uppercase tracking-widest text-tertiary border-b border-tertiary pb-1 whitespace-nowrap">All</button>
          <button className="font-label-technical uppercase tracking-widest text-on-surface hover:text-secondary transition-colors pb-1 whitespace-nowrap">Editorial</button>
          <button className="font-label-technical uppercase tracking-widest text-on-surface hover:text-secondary transition-colors pb-1 whitespace-nowrap">Video</button>
        </div>
      </div>

      {/* Dynamic Grid Portfolio */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter auto-rows-[300px] md:auto-rows-[400px]">
        
        {/* Item 1 (Large Feature) */}
        <div className="group relative overflow-hidden bg-surface-container md:col-span-8 md:row-span-2 cursor-pointer">
          <img 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAkICVcPJU3KGYBbKBaGrcfAawvPK1hMviqa3vjQJqvNhrw0FxykdOXHFFPOnVGaqTUWDzw7YvMOpSdSBeSbDNdU6-eB8J-JqhyMYAuzNlsDRWLY_ewC_HRG0Rk23ManEsi1MZSB8EL912fPAqt257RA63PUN5HXnlxVATG3_bX4FntxTntflv_nTVyJ3zEcIRhJROYYJyLMXqIdpq3oZXakgFSTVFQIKvJIFBVnMPeOO78z5jLNIwpJdjF5DwtqYgYMwcrpUPmObc" 
            alt="Neon Symphony" 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80" 
          />
          <div className="absolute inset-0 bg-background/20 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
            <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
              <div className="flex items-center gap-4 mb-4">
                <span className="border border-tertiary px-3 py-1 font-label-technical uppercase tracking-widest text-tertiary bg-surface/40 backdrop-blur-md">Video</span>
                <span className="font-label-technical text-on-surface">2024</span>
              </div>
              <h2 className="font-headline-lg-mobile md:font-headline-lg text-primary leading-none">NEON<br />SYMPHONY</h2>
            </div>
          </div>
        </div>

        {/* Item 2 (Standard Portrait) */}
        <div className="group relative overflow-hidden bg-surface-container md:col-span-4 md:row-span-1 cursor-pointer">
          <img 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBa1vmER-9Os3xKkjhhvlv8P3sn-Kl4mSyXZvsfMaAgCxWH0Wh8Qh_a3YZgpwK4yKDpnsEO5PrG32lPfor8T1z-xj5eMGRgmKFbbRCGGgMOVCLcL-i8LBSCd8Z6-NR3Iw0kM1g-3qfwCfP2KCgfyoEsURmlypocFs10brrtGCSqWZGpRXq8kK8rK85jesJxMAYE7C5MtKVdCEfEt1MS1w_pwhUDwOvxrWrHPqhhsU_7hZiTBkAVG6H3tGcDpE_8Lwkza0stIXtgtf4" 
            alt="Liquid Chrome" 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80" 
          />
          <div className="absolute inset-0 bg-background/40 backdrop-blur-[4px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
            <div className="translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
              <div className="flex items-center gap-4 mb-3">
                <span className="border border-secondary-container px-3 py-1 font-label-technical uppercase tracking-widest text-secondary-container bg-surface/40 backdrop-blur-md">Editorial</span>
                <span className="font-label-technical text-on-surface">2023</span>
              </div>
              <h2 className="font-headline-lg-mobile text-primary leading-none">LIQUID<br />CHROME</h2>
            </div>
          </div>
        </div>

        {/* Item 3 (Standard Landscape) */}
        <div className="group relative overflow-hidden bg-surface-container md:col-span-4 md:row-span-1 cursor-pointer">
          <img 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuABr9N2Xt685I28nHGuNP9I6LmFDr0MWTwcKygxJFTfIcc73zUdYZ9-Z-yI7aW_oUHRpzv8HaRVRF8k23VsYD2-jnPsSAIm0YnsMa-mWZb5nQfsjdkjFh2T0dJyRdmspSVpIkT-728Wi6ct8HSSPAA3mKWt6DXn_SXRtdVEGCKZyrOl09Rib37blQIfIVUCxkew_2wo-Mj_AWyZqjZrBIGtIXLxrwDjkZNSr-EvNw2dwqVwEmoGQw0b6kZu8jE69Ur7QIzOKxQXm4Y" 
            alt="Brutal Echo" 
            className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105 opacity-80" 
          />
          <div className="absolute inset-0 bg-background/60 backdrop-blur-[8px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6 border border-outline-variant/20">
            <div className="translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
              <div className="flex items-center gap-4 mb-3">
                <span className="border border-tertiary px-3 py-1 font-label-technical uppercase tracking-widest text-tertiary bg-surface/40 backdrop-blur-md">Video</span>
                <span className="font-label-technical text-on-surface">2023</span>
              </div>
              <h2 className="font-headline-lg-mobile text-primary leading-none">BRUTAL<br />ECHO</h2>
            </div>
          </div>
        </div>

        {/* Item 4 (Wide Feature) */}
        <div className="group relative overflow-hidden bg-surface-container md:col-span-8 md:row-span-1 cursor-pointer">
          <div className="absolute inset-0 bg-gradient-to-r from-background to-surface-container-high z-10"></div>
          <img 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDygBIDxapscR04DiLxrlEzICwjLWyIk49DengzYDxQR6NZYQuAeukcLuXQRrQuFsKl04AwwPFW137KagrTOn3vzBuuaEWG-veAcos1kzbHZND1D5TUs-ozyp1todKFtY3wdgxZuXq1pmz8S6Du78KiXo3lSZ4iGghzA6QlEpQf7ZE4flRaJVxWYMpFJlnac7Ra3kaTaTDhIq-YH2ibdYlayr674_Gj50U6SF8y4JsUjp15Wwn9_CyVYSkhDHV3oEDWrQor_loe9zg" 
            alt="Glass Horizon" 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-60 mix-blend-luminosity" 
          />
          <div className="absolute inset-0 z-20 flex flex-col justify-between p-8 opacity-100 group-hover:bg-background/20 group-hover:backdrop-blur-sm transition-all duration-500">
            <div className="flex justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <span className="material-symbols-outlined text-[32px] text-primary">play_circle</span>
            </div>
            <div>
              <div className="flex items-center gap-4 mb-4">
                <span className="border border-tertiary px-3 py-1 font-label-technical uppercase tracking-widest text-tertiary bg-surface/40 backdrop-blur-md">Video</span>
                <span className="font-label-technical text-on-surface">2024</span>
              </div>
              <h2 className="font-headline-lg-mobile md:font-headline-lg text-primary leading-none">GLASS<br />HORIZON</h2>
            </div>
          </div>
        </div>

      </div>

      {/* Load More Action */}
      <div className="mt-20 flex justify-center">
        <button className="group flex items-center gap-4 border border-outline-variant px-8 py-4 hover:border-secondary-container transition-colors duration-300">
          <span className="font-label-technical uppercase tracking-widest text-on-surface group-hover:text-secondary-container transition-colors">Load More Work</span>
          <span className="material-symbols-outlined text-on-surface group-hover:text-secondary-container transition-colors">arrow_downward</span>
        </button>
      </div>
    </div>
  );
}
