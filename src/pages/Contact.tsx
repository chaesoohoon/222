export default function Contact() {
  return (
    <>
      {/* Abstract Background Glow */}
      <div 
        className="absolute inset-0 pointer-events-none z-0" 
        style={{ background: 'radial-gradient(circle at center, rgba(0, 240, 255, 0.1) 0%, transparent 70%)' }}>
      </div>
      
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop relative z-10">
        
        {/* Header Section */}
        <div className="mb-24 md:mb-32">
          <h1 className="font-display-xl-mobile md:font-display-xl text-primary max-w-4xl custom-cursor-area cursor-crosshair">
            GET IN TOUCH
          </h1>
          <p className="font-body-lg text-on-surface-variant max-w-2xl mt-8">
            Ready to create something extraordinary? Drop us a line. We are always looking for visionary partners and compelling projects.
          </p>
        </div>

        {/* Content Grid: Form + Details */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter lg:gap-16">
          
          {/* Left Column: Contact Details (4 cols) */}
          <div className="lg:col-span-4 flex flex-col gap-12 order-2 lg:order-1">
            <div className="bg-surface/60 backdrop-blur-[20px] border border-white/10 p-8">
              <h3 className="font-label-technical text-secondary-container uppercase tracking-widest mb-6">Global Headquarters</h3>
              <p className="font-body-lg text-primary">
                1200 Avant-Garde Ave<br />
                Suite 404<br />
                Los Angeles, CA 90015
              </p>
            </div>
            
            <div className="bg-surface/60 backdrop-blur-[20px] border border-white/10 p-8">
              <h3 className="font-label-technical text-secondary-container uppercase tracking-widest mb-6">Direct Inquiries</h3>
              <div className="flex flex-col gap-4">
                <a href="mailto:hello@studiovision.com" className="font-headline-lg-mobile text-primary hover:text-tertiary transition-colors">
                  hello@studiovision.com
                </a>
                <a href="tel:+13105550199" className="font-body-lg text-on-surface-variant hover:text-primary transition-colors">
                  +1 (310) 555-0199
                </a>
              </div>
            </div>
            
            <div className="bg-surface/60 backdrop-blur-[20px] border border-white/10 p-8">
              <h3 className="font-label-technical text-secondary-container uppercase tracking-widest mb-6">Social</h3>
              <div className="flex gap-6">
                <a href="#" className="text-on-surface-variant hover:text-secondary-container transition-colors">Instagram</a>
                <a href="#" className="text-on-surface-variant hover:text-secondary-container transition-colors">Vimeo</a>
                <a href="#" className="text-on-surface-variant hover:text-secondary-container transition-colors">LinkedIn</a>
              </div>
            </div>
          </div>

          {/* Right Column: Glassmorphic Form (8 cols) */}
          <div className="lg:col-span-8 order-1 lg:order-2">
            <div className="bg-surface/60 backdrop-blur-[20px] border border-white/10 p-8 md:p-16 h-full">
              <form className="flex flex-col gap-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  <div className="relative group">
                    <input type="text" id="name" placeholder="Name" className="w-full bg-transparent border-0 border-b border-outline-variant text-primary font-body-lg py-4 focus:ring-0 focus:border-secondary-container transition-colors peer placeholder-transparent focus:outline-none" />
                    <label htmlFor="name" className="absolute left-0 -top-4 font-label-technical text-secondary-container transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:font-body-lg peer-placeholder-shown:text-on-surface-variant peer-focus:-top-4 peer-focus:text-label-technical peer-focus:font-label-technical peer-focus:text-secondary-container">Name</label>
                  </div>
                  <div className="relative group">
                    <input type="email" id="email" placeholder="Email" className="w-full bg-transparent border-0 border-b border-outline-variant text-primary font-body-lg py-4 focus:ring-0 focus:border-secondary-container transition-colors peer placeholder-transparent focus:outline-none" />
                    <label htmlFor="email" className="absolute left-0 -top-4 font-label-technical text-secondary-container transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:font-body-lg peer-placeholder-shown:text-on-surface-variant peer-focus:-top-4 peer-focus:text-label-technical peer-focus:font-label-technical peer-focus:text-secondary-container">Email Address</label>
                  </div>
                </div>
                
                <div className="relative group">
                  <input type="text" id="company" placeholder="Company" className="w-full bg-transparent border-0 border-b border-outline-variant text-primary font-body-lg py-4 focus:ring-0 focus:border-secondary-container transition-colors peer placeholder-transparent focus:outline-none" />
                  <label htmlFor="company" className="absolute left-0 -top-4 font-label-technical text-secondary-container transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:font-body-lg peer-placeholder-shown:text-on-surface-variant peer-focus:-top-4 peer-focus:text-label-technical peer-focus:font-label-technical peer-focus:text-secondary-container">Company / Brand</label>
                </div>
                
                <div className="relative group">
                  <textarea id="message" rows={4} placeholder="Message" className="w-full bg-transparent border-0 border-b border-outline-variant text-primary font-body-lg py-4 focus:ring-0 focus:border-secondary-container transition-colors peer placeholder-transparent resize-none focus:outline-none"></textarea>
                  <label htmlFor="message" className="absolute left-0 -top-4 font-label-technical text-secondary-container transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:font-body-lg peer-placeholder-shown:text-on-surface-variant peer-focus:-top-4 peer-focus:text-label-technical peer-focus:font-label-technical peer-focus:text-secondary-container">Tell us about your project</label>
                </div>
                
                <div className="flex justify-end mt-4">
                  <button type="submit" className="bg-transparent border border-outline text-primary px-12 py-4 font-label-technical uppercase tracking-widest hover:border-tertiary hover:text-tertiary transition-colors w-full md:w-auto">
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* Map / Visual Break Section */}
        <div className="mt-32 w-full h-[400px] bg-surface/60 backdrop-blur-[20px] border border-white/10 relative overflow-hidden flex items-center justify-center">
          <img 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAJdAKt3Q_0z7fNBHwh-gh5C175j2_bOQ_fhQSHHzokEPM8C-EWNiFdY6GTY09h6hGU5kjNOz8pbzQJUACxn8gFb3Jo3WmxLetB9350ZWSleI8ixzYl7iAMdGc4UT1NL-EoiTfjOw4H8CDfUXzp8WJcPQWGiiHxIHPUxKBSCQy6K3gLYl774k_6SEpPLjS99-QC9bAT7MZ2o9dpHuAd1Y7U3jsPYxGNMsbRUjC8DMOQfhfjEJZ76Sjx4cV7C52cnCqOwB6OJ-2QeRU" 
            alt="Studio Location Map" 
            className="absolute inset-0 w-full h-full object-cover opacity-40 mix-blend-luminosity" 
          />
          <div className="relative z-10 text-center pointer-events-none">
            <span className="material-symbols-outlined text-secondary-container text-6xl mb-4 block" style={{ fontVariationSettings: "'FILL' 0" }}>location_on</span>
            <p className="font-label-technical text-primary tracking-widest uppercase">LA Arts District</p>
          </div>
        </div>
      </div>
    </>
  );
}
