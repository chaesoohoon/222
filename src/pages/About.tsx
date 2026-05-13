export default function About() {
  return (
    <>
      {/* Hero Section: Editorial Layout */}
      <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop mb-section-gap">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter items-center">
          {/* Large Abstract/Portrait */}
          <div className="md:col-span-7 relative group">
            <div className="absolute inset-0 bg-secondary-container/10 blur-[60px] rounded-full mix-blend-screen opacity-50 group-hover:opacity-100 transition-opacity duration-700"></div>
            <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAimfzOOwvapK1dGkIY4uQtgEruQqV9uxYU9h0TDT_FKPhTzSh8zqBZnokFiEdmITsSo6Zxvcc-2IIz89uG6ZHUAvZo7DlIYiD4LLIHxKrby33_UUMLkBPbRD0XYKS02GP5JGtAeDGfWl08ZrE6HcgB-uf6an8N3Mf4Wufqn_CdE3XJtc-3Kj_giQ1kEVSTWDhkevvDsgxvgA1FdoUC2OoRTHoB8LqD9Emv-Qw2B9RlEbT0vhGRGe-AIYFY1kiJUqhoXEDCuoxdBoo" 
              alt="Creative portrait" 
              className="w-full h-[614px] md:h-[819px] object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700 relative z-10 border border-outline-variant/20" 
            />
          </div>
          
          {/* Typography Focus */}
          <div className="md:col-span-4 md:col-start-9 flex flex-col justify-center space-y-8 mt-12 md:mt-0">
            <span className="font-label-technical text-tertiary uppercase tracking-widest">The Director</span>
            <h1 className="font-display-xl-mobile md:font-display-xl text-primary leading-tight">
              Vision <br /><span className="text-secondary-container italic opacity-80">& Craft.</span>
            </h1>
            <p className="font-body-lg text-on-surface-variant max-w-md">
              Forging digital experiences at the intersection of cinematic artistry and functional design. We don't just build interfaces; we orchestrate high-fidelity emotional resonance.
            </p>
            <div className="pt-8">
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBTcnmcYGjqkSk1G82j4MhAqyRjQi01Q-cTBwVVikHSzgUojIlS8f92rQ1wwwTZSUk2byOYd3FrIuYmZuxwP6vdSOUA62zHu_iEZS9iSLtN5RiI7r4VRy2oCgsA8cOBUqOI3z6Bu5z1sxeVZyl7WB0WWy1zAvIReTdGXUfrBgK-ME86QR_ZALemPRi3ki9hEirhR7oP9hC-4jTh-0wi8yvDRMSTEmDSwHEbO8nqvfdQa9aVM7oci50KYlqII_Ck6sODvLycfRJNekA" 
                alt="Abstract signature" 
                className="h-20 w-auto opacity-70 mix-blend-screen" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop mb-section-gap relative py-20">
        <div className="absolute inset-0 bg-surface-container-high/40 backdrop-blur-3xl border-y border-outline-variant/10 -z-10"></div>
        <div className="flex flex-col md:flex-row gap-16 md:gap-gutter items-start md:items-center">
          <div className="md:w-1/3">
            <h2 className="font-headline-lg-mobile md:font-headline-lg text-primary">Philosophy</h2>
          </div>
          <div className="md:w-2/3 border-l border-outline-variant/30 pl-8 md:pl-16">
            <blockquote className="font-display-xl-mobile text-on-surface opacity-90 leading-tight">
              "Design is not a decorative layer. It is the <span className="text-tertiary">structural integrity</span> of the narrative."
            </blockquote>
          </div>
        </div>
      </section>

      {/* Skills & Arsenal */}
      <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop mb-section-gap">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
          <div className="md:col-span-4">
            <h2 className="font-headline-lg-mobile md:font-headline-lg text-primary mb-8">Arsenal</h2>
            <p className="font-body-md text-on-surface-variant max-w-xs mb-12">
              A curated selection of disciplines refined over a decade of high-end production and creative direction.
            </p>
          </div>
          <div className="md:col-span-7 md:col-start-6">
            {/* Technical List */}
            <div className="space-y-6">
              {[
                { num: "01", title: "Art Direction", desc: "Visual Strategy & Branding", colorHover: "hover:border-secondary-container", titleHover: "group-hover:text-secondary-container", numColor: "text-secondary-container" },
                { num: "02", title: "UI/UX Engineering", desc: "Interactive Architecture", colorHover: "hover:border-tertiary", titleHover: "group-hover:text-tertiary", numColor: "text-tertiary" },
                { num: "03", title: "Cinematography", desc: "Motion & Light Design", colorHover: "hover:border-secondary-container", titleHover: "group-hover:text-secondary-container", numColor: "text-secondary-container" },
              ].map((item, idx) => (
                <div key={idx} className={`group border-b border-outline-variant/20 pb-4 flex justify-between items-end ${item.colorHover} transition-colors duration-300`}>
                  <div>
                    <span className={`font-label-technical ${item.numColor} mb-2 block`}>{item.num}</span>
                    <h3 className={`font-headline-lg-mobile text-primary ${item.titleHover} transition-colors`}>{item.title}</h3>
                  </div>
                  <span className="font-label-technical text-on-surface-variant hidden md:block">{item.desc}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
