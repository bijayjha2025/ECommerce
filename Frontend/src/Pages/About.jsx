import { Sparkles } from "lucide-react"

const About = () => {
 return (
  <div className="pt-24 pb-20 px-4 sm:px-8 lg:px-12 max-w-7xl mx-auto min-h-screen">

   <div className="text-center mb-16 lg:mb-24">
   <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-[var(--ink)] mb-6 tracking-tight">Our Heritage, <br className="hidden sm:block" /><span className="italic text-[var(--gold-dark)]">Your Legacy</span>
   </h1>

   <div className="w-24 h-1 bg-gradient-to-r from-[var(--gold-dark)] to-[var(--gold-light)] mx-auto rounded-full mb-8 relative">
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-[var(--gold)] rounded-full border-4 border-[#fffbf2]"></div>
   </div>

   <p className="text-[var(--ink)]/70 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">Since our establishment, we have been the custodians of traditional craftsmanship, weaving stories of elegance, culture, and timeless beauty into every thread.</p>
   </div>

   <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-24">
    <div className="relative group">
     <div className="absolute -inset-4 bg-gradient-to-tr from-[var(--gold)]/20 to-transparent rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-50"></div>
     
     <div className="relative h-[400px] sm:h-[500px] w-full bg-white/20 backdrop-blur-sm rounded-3xl border border-[var(--gold-light)]/30 overflow-hidden shadow-[0_8px_32px_0_rgba(184,134,11,0.15)] flex items-center justify-center group-hover:border-[var(--gold)]/50 transition-all duration-500">

     <div className="absolute inset-0 bg-gradient-to-tr from-[var(--ink)] via-[#3d2c0b] to-[var(--gold-dark)] opacity-90 mix-blend-multiply"></div>
     
     <div className="relative text-center z-10 p-8">
      <Sparkles size={48} className="text-[var(--gold-light)] mx-auto mb-4 opacity-80" />
      <p className="font-serif text-2xl text-[var(--cream)] tracking-widest uppercase">The Artisan's Touch</p>
      <p className="text-[var(--gold-light)]/70 mt-2 text-sm max-w-xs mx-auto">Where tradition meets contemporary elegance.</p>
     </div>
    </div>
   </div>

   <div className="space-y-8 lg:pl-10 relative z-10 mt-12 lg:mt-0">

    <div>
     <h3 className="text-sm font-bold tracking-[0.3em] uppercase text-[var(--gold-dark)] mb-3 flex items-center gap-4"><span className="w-8 h-px bg-[var(--gold-dark)]"></span> The Beginning</h3>
     <h2 className="text-3xl font-serif text-[var(--ink)] leading-snug mb-4">Why We Started</h2>
     <p className="text-[var(--ink)]/70 leading-relaxed mb-8 text-justify">It began in a small workshop nestled in the heart of the city. As mass-produced, fast fashion began to flood the markets, we saw generations of traditional weaving knowledge slowly fading away. WearNepal was born from a singular, passionate vision: to rescue and breathe new life into the intricate art of Nepali handloom weaving, transforming it from a dying craft into a hallmark of modern luxury and authenticity.</p>

     <h3 className="text-sm font-bold tracking-[0.3em] uppercase text-[var(--gold-dark)] mb-3 flex items-center gap-4"><span className="w-8 h-px bg-[var(--gold-dark)]"></span> Our Present</h3>
     <h2 className="text-3xl font-serif text-[var(--ink)] leading-snug mb-4">Where We Are Today</h2>
     <p className="text-[var(--ink)]/70 leading-relaxed mb-8 text-justify">Today, we are proud to partner directly with over fifty generational artisans across the country. By sourcing the finest materials natively—from soft Himalayan Pashmina to resilient Allo fibers—we ensure that every garment we curate is a masterpiece of ethical, fair-trade craftsmanship. Our collections are now worn globally by those who appreciate the profound respect for art that goes into every hour of our meticulous labor.</p>

     <h3 className="text-sm font-bold tracking-[0.3em] uppercase text-[var(--gold-dark)] mb-3 flex items-center gap-4"><span className="w-8 h-px bg-[var(--gold-dark)]"></span> The Horizon</h3>
     <h2 className="text-3xl font-serif text-[var(--ink)] leading-snug mb-4">What We Aim to Achieve</h2>
     <p className="text-[var(--ink)]/70 leading-relaxed text-justify">Our journey is far from over. Our ultimate goal is to establish Nepali heritage textiles as a globally recognized pillar of high fashion, bridging the gap between ancestral techniques and contemporary, sustainable design. We envision a future where every young artisan sees immense pride and viable prosperity in their craft, ensuring these beautiful stories in silk and gold endure for the generations to come.</p>
    </div>
   </div>
   </div>
   


  </div>
  )
}

export default About