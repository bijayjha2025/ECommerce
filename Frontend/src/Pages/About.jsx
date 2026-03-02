import { Sparkles, Award, Gem, Users } from "lucide-react";
import { artistAssets } from "../assets/assets";

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

   <div className="bg-white/30 backdrop-blur-xl rounded-3xl p-8 sm:p-12 border border-[var(--gold-light)]/40 shadow-[0_8px_40px_rgba(184,134,11,0.08)] relative overflow-hidden">
    <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-[var(--gold)]/10 to-transparent rounded-full -translate-y-1/2 translate-x-1/2"></div>
    <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-[var(--gold)]/10 to-transparent rounded-full translate-y-1/2 -translate-x-1/2"></div>

    <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 relative z-10">
     <div className="text-center group">
      <div className="w-16 h-16 mx-auto bg-white/50 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6 shadow-sm border
      border-[var(--gold)]/20 group-hover:scale-110 transition-transform duration-300 group-hover:border-[var(--gold)]/50 group-hover:bg-[#fff8e7]">
      <Award className="text-[var(--gold-dark)]" size={28} />
      </div>
     <h4 className="text-xl font-serif text-[var(--ink)] mb-2 group-hover:text-[var(--gold-dark)] transition-colors">Master Craftsmanship</h4>
     <p className="text-sm text-[var(--ink)]/60">Decades of refined skills passed down through generations.</p>
     </div>

     <div className="text-center group">
      <div className="w-16 h-16 mx-auto bg-white/50 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6 shadow-sm border
      border-[var(--gold)]/20 group-hover:scale-110 transition-transform duration-300 group-hover:border-[var(--gold)]/50 group-hover:bg-[#fff8e7]">
       <Gem className="text-[var(--gold-dark)]" size={28} />
      </div>
     <h4 className="text-xl font-serif text-[var(--ink)] mb-2 group-hover:text-[var(--gold-dark)] transition-colors">Premium Quality</h4>
     <p className="text-sm text-[var(--ink)]/60">Only the finest, ethically sourced materials make the cut.</p>
     </div>

     <div className="text-center group">
      <div className="w-16 h-16 mx-auto bg-white/50 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6 shadow-sm border
      border-[var(--gold)]/20 group-hover:scale-110 transition-transform duration-300 group-hover:border-[var(--gold)]/50 group-hover:bg-[#fff8e7]">
       <Users className="text-[var(--gold-dark)]" size={28} />
      </div>
     <h4 className="text-xl font-serif text-[var(--ink)] mb-2 group-hover:text-[var(--gold-dark)] transition-colors">Artisan Empowerment</h4>
     <p className="text-sm text-[var(--ink)]/60">Fair trade practices directly supporting local weaving communities.</p>
     </div>

    </div>
   </div>

   <div className="mt-28">
    <div className="text-center mb-16">
     <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[var(--ink)] mb-4">The Heritage of Nepal</h2>
     <div className="w-20 h-1 bg-gradient-to-r from-[var(--gold-dark)] to-[var(--gold-light)] mx-auto rounded-full mb-6 relative">
     <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-[var(--gold)] rounded-full"></div>
    </div>
    <p className="text-[var(--ink)]/70 max-w-2xl mx-auto text-lg">Our identity is deeply woven into the native fibers of the Himalayas. Discover the raw, natural materials that form the canvas of our legacy.
    </p>
   </div>
   
   <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
    <div className="bg-white/40 backdrop-blur-md rounded-3xl p-8 sm:p-10 border border-[var(--gold-light)]/40 shadow-sm hover:shadow-[0_12px_40px_rgba(184,134,11,0.1)] transition-all duration-500 group relative overflow-hidden">
    <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-[var(--gold)]/10 rounded-full blur-2xl group-hover:bg-[var(--gold)]/20 transition-colors"></div>
     <h3 className="text-2xl font-serif text-[var(--ink)] mb-2">Himalayan Pashmina</h3>
     <p className="text-xs font-bold tracking-[0.2em] uppercase text-[var(--gold-dark)] mb-4">The Soft Gold</p>
     <p className="text-[var(--ink)]/70 leading-relaxed text-sm sm:text-base">Rarer and finer than cashmere, true Himalayan Pashmina comes from the Chyangra mountain goats of the high-altitude plateaus. We hand-spin and hand-weave this delicate fiber into incredibly warm, weightless textiles that drape like water.</p>
    </div>

    <div className="bg-white/40 backdrop-blur-md rounded-3xl p-8 sm:p-10 border border-[var(--gold-light)]/40 shadow-sm hover:shadow-[0_12px_40px_rgba(184,134,11,0.1)] transition-all duration-500 group relative overflow-hidden">
    <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-[var(--gold)]/10 rounded-full blur-2xl group-hover:bg-[var(--gold)]/20 transition-colors"></div>
     <h3 className="text-2xl font-serif text-[var(--ink)] mb-2">Palpali Dhaka</h3>
     <p className="text-xs font-bold tracking-[0.2em] uppercase text-[var(--gold-dark)] mb-4">The Geometric Tapestry</p>
     <p className="text-[var(--ink)]/70 leading-relaxed text-sm sm:text-base">An iconic symbol of Nepali pride, Dhaka is an exceptionally complex handloom cotton fabric. Woven uniquely without a pre-set pattern, artisans create striking, vibrant geometric arrays completely from memory, making every inch truly one-of-a-kind.</p>
    </div>

    <div className="bg-white/40 backdrop-blur-md rounded-3xl p-8 sm:p-10 border border-[var(--gold-light)]/40 shadow-sm hover:shadow-[0_12px_40px_rgba(184,134,11,0.1)] transition-all duration-500 group relative overflow-hidden">
    <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-[var(--gold)]/10 rounded-full blur-2xl group-hover:bg-[var(--gold)]/20 transition-colors"></div>
     <h3 className="text-2xl font-serif text-[var(--ink)] mb-2">Wild Allo (Giant Nettle)</h3>
     <p className="text-xs font-bold tracking-[0.2em] uppercase text-[var(--gold-dark)] mb-4">The Forest Silk</p>
     <p className="text-[var(--ink)]/70 leading-relaxed text-sm sm:text-base">Harvested sustainably from the deep forests of the Sankhuwasabha region, Allo is a majestic, long-lasting natural bast fiber. It provides a beautiful, slightly coarse organic texture that softens gracefully with every wear, telling the story of the wild Himalayas.</p>
    </div>

    <div className="bg-white/40 backdrop-blur-md rounded-3xl p-8 sm:p-10 border border-[var(--gold-light)]/40 shadow-sm hover:shadow-[0_12px_40px_rgba(184,134,11,0.1)] transition-all duration-500 group relative overflow-hidden">
    <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-[var(--gold)]/10 rounded-full blur-2xl group-hover:bg-[var(--gold)]/20 transition-colors"></div>
     <h3 className="text-2xl font-serif text-[var(--ink)] mb-2">Himalayan Hemp</h3>
     <p className="text-xs font-bold tracking-[0.2em] uppercase text-[var(--gold-dark)] mb-4">The Enduring Fiber</p>
     <p className="text-[var(--ink)]/70 leading-relaxed text-sm sm:text-base">Cultivated organically by mountain communities, our Hemp is incredibly resilient, breathable, and naturally anti-microbial. It represents the pinnacle of ancient sustainable agriculture, yielding fabrics that last lifetimes while returning safely to the earth.</p>
    </div>

    </div>
   </div>

   <div className="mt-28">
    <div className="text-center mb-16">
     <h2 className="text-3xl sm:text-4xl font-serif text-[var(--ink)] mb-4">Meet the Hands Behind the Craft</h2>
     <div className="w-16 h-1 bg-gradient-to-r from-[var(--gold-dark)] to-[var(--gold-light)] mx-auto rounded-full mb-6"></div>
      <p className="text-[var(--ink)]/70 max-w-2xl mx-auto">Our master artisans are the heart and soul of our brand. Their dedication to preserving ancient techniques is what makes every piece a masterpiece.</p>
     </div>

     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
      <div className="bg-white/20 backdrop-blur-md rounded-3xl overflow-hidden border border-[var(--gold-light)]/30 shadow-[0_8px_32px_0_rgba(184,134,11,0.1)] group hover:shadow-[0_12px_48px_0_rgba(184,134,11,0.15)] transition-all duration-300 flex flex-col">
       <div className="h-72 overflow-hidden relative">
        <div className="absolute inset-0 bg-[var(--ink)]/20 group-hover:bg-transparent transition-colors duration-300 z-10"></div>
        <img src={artistAssets.A1} alt="Master Weaver" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
       </div>
        
       <div className="p-8 relative flex-1 flex flex-col">
        <div className="absolute -top-6 right-6 bg-[var(--gold-dark)] text-[#fff8e7] w-12 h-12 flex items-center justify-center rounded-full shadow-lg border-2 border-[#fffbf2] z-20 group-hover:scale-110 transition-transform duration-300">
          <Sparkles size={20} />
        </div>
        <h3 className="text-xl font-serif text-[var(--ink)] mb-1">Aama Maya</h3>
        <p className="text-xs font-bold tracking-[0.2em] uppercase text-[var(--gold-dark)] mb-4">Master Weaver</p>
        <p className="text-[var(--ink)]/70 text-sm leading-relaxed flex-1">With over four decades at the loom, Kamala's hands weave the complex Dhaka patterns from memory. She trains our newest generation of weavers, ensuring the heritage lives on.</p>
       </div>
      </div>

      <div className="bg-white/20 backdrop-blur-md rounded-3xl overflow-hidden border border-[var(--gold-light)]/30 shadow-[0_8px_32px_0_rgba(184,134,11,0.1)] group hover:shadow-[0_12px_48px_0_rgba(184,134,11,0.15)] transition-all duration-300 flex flex-col">
       <div className="h-72 overflow-hidden relative">
        <div className="absolute inset-0 bg-[var(--ink)]/20 group-hover:bg-transparent transition-colors duration-300 z-10"></div>
        <img src={artistAssets.A2} alt="Master Dyer" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
       </div>
       
       <div className="p-8 relative flex-1 flex flex-col">
        <div className="absolute -top-6 right-6 bg-[var(--gold-dark)] text-[#fff8e7] w-12 h-12 flex items-center justify-center rounded-full shadow-lg border-2 border-[#fffbf2] z-20 group-hover:scale-110 transition-transform duration-300">
         <Sparkles size={20} />
        </div>
       <h3 className="text-xl font-serif text-[var(--ink)] mb-1">Chatur Manchey</h3>
       <p className="text-xs font-bold tracking-[0.2em] uppercase text-[var(--gold-dark)] mb-4">Dyeing Specialist</p>
       <p className="text-[var(--ink)]/70 text-sm leading-relaxed flex-1">Chatur brings fabrics to life using ancient natural dyeing techniques. He forages for madder root, indigo, and walnut shells to create our signature enduring color palettes.
       </p>
       </div>
      </div>

      <div className="bg-white/20 backdrop-blur-md rounded-3xl overflow-hidden border border-[var(--gold-light)]/30 shadow-[0_8px_32px_0_rgba(184,134,11,0.1)] group hover:shadow-[0_12px_48px_0_rgba(184,134,11,0.15)] transition-all duration-300 flex flex-col">
       <div className="h-72 overflow-hidden relative">
        <div className="absolute inset-0 bg-[var(--ink)]/20 group-hover:bg-transparent transition-colors duration-300 z-10"></div>
        <img src={artistAssets.A3} alt="Embroidery Artist" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
       </div>
       
       <div className="p-8 relative flex-1 flex flex-col">
        <div className="absolute -top-6 right-6 bg-[var(--gold-dark)] text-[#fff8e7] w-12 h-12 flex items-center justify-center rounded-full shadow-lg border-2 border-[#fffbf2] z-20 group-hover:scale-110 transition-transform duration-300">
         <Sparkles size={20} />
        </div>
        <h3 className="text-xl font-serif text-[var(--ink)] mb-1">Talented Devi</h3>
        <p className="text-xs font-bold tracking-[0.2em] uppercase text-[var(--gold-dark)] mb-4">Hand Embroidery</p>
        <p className="text-[var(--ink)]/70 text-sm leading-relaxed flex-1">Devi's intricate needlework adds a deeply personal touch to our heritage collection. Her attention to detail transforms each garment into a unique canvas of expression.</p>
        </div>
       </div>
      </div>
     </div>



  </div>
  )
}

export default About