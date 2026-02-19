import { BRAND, STATS } from "./heroData";

export function HeroBackground() {

 return (
  <div className="absolute inset-0 z-0 pointer-events-none">
     <p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-serif font-bold text-center leading-none select-none text-[clamp(70px,14vw,180px)] tracking-[0.08em] text-[#b8860b]/[0.055]">WEAR<br />NEPAL</p>
     
     <div className="absolute top-7 left-8 right-8 h-px bg-gradient-to-r from-transparent via-[#b8860b]/25 to-transparent" />
      <div className="absolute bottom-7 left-8 right-8 h-px bg-gradient-to-r from-transparent via-[#b8860b]/25 to-transparent" />

      <div className="absolute top-4 left-4   w-7 h-7 border-t border-l border-[#b8860b]/40" />
      <div className="absolute top-4 right-4  w-7 h-7 border-t border-r border-[#b8860b]/40" />
      <div className="absolute bottom-4 left-4  w-7 h-7 border-b border-l border-[#b8860b]/40" />
      <div className="absolute bottom-4 right-4 w-7 h-7 border-b border-r border-[#b8860b]/40" />
    </div>
  );
}

export function HeroCopy() {
 return (
  <div className="flex-1 min-w-[300px] max-w-[420px] font-serif">
   
   <div className="inline-flex items-center gap-3 mb-6">
    <div className="w-6 h-px bg-[#b8860b]" />
     <p className="text-[9px] tracking-[0.4em] text-[#b8860b] uppercase">{BRAND} · 2026</p>
    <div className="w-6 h-px bg-[#b8860b]" />
   </div>
   
   <h1 className="font-normal leading-[1.1] text-[#1a0a00] tracking-tight mb-2 text-[clamp(2.2rem,4.5vw,3.8rem)]">Wear the Soul<br /><em className="not-italic italic text-[#b8860b]">of Nepal</em></h1>
   
   <div className="w-10 h-[1.5px] bg-[#b8860b] my-5" />
    <p className="text-[13.5px] leading-[1.9] text-[#1a0a00]/60 mb-9">From the hand-loomed Dhaka of Palpa to the soft<br />warmth of Himalayan Pashmina — each garment<br />carries a story woven across generations.</p>
    <HeroCTAs />
    <HeroStats />
   </div>
  );
}

function HeroCTAs() {
 return (
  <div className="flex gap-3 flex-wrap">
   <button className="px-7 py-3 bg-[#b8860b] text-[#fff8e7] text-[9px] tracking-[0.28em] uppercase transition-all duration-200 hover:bg-[#9a6f00] hover:-translate-y-px">Collection</button>
   <button className="px-5 py-3 bg-transparent text-[#b8860b] border border-[#b8860b] text-[9px] tracking-[0.28em] uppercase transition-all duration-200 hover:bg-[#b8860b] hover:text-[#fff8e7]">Our Story</button>
  </div>
  );
}

function HeroStats() {
 return (
  <div className="flex gap-7 mt-11 pt-7 border-t border-[#b8860b]/20">
   {STATS.map(([n, l]) => (
    <div key={l}>
     <p className="text-[19px] text-[#b8860b] tracking-tight">{n}</p>
     <p className="text-[8.5px] text-[#1a0a00]/40 tracking-[0.14em] uppercase mt-0.5">{l}</p>
    </div>
    ))}
   </div>
  );
}

export function ProductCard({ product, stackPos, rotation, offset, isTop, hovered, onMouseDown, onMouseUp, onMouseEnter, onMouseLeave }) {     const scale = (0.86 + stackPos * 0.047) * (isTop && hovered ? 1.025 : 1);

 return (
  <div onMouseDown={onMouseDown} onMouseUp={onMouseUp} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} className="absolute inset-0 rounded-md overflow-hidden select-none" style={{
    background: product.cardBg,
    zIndex: stackPos + 1,
    transform: `rotate(${rotation}deg) translate(${offset.x}px, ${offset.y}px) scale(${scale})`,
    transition: 'transform 0.48s cubic-bezier(0.34,1.45,0.64,1), box-shadow 0.3s ease',
    boxShadow: isTop ? '0 32px 72px rgba(20,8,0,0.28), 0 8px 24px rgba(20,8,0,0.16)' : '0 10px 28px rgba(20,8,0,0.16)',
    cursor: isTop ? 'pointer' : 'default',
    }}>
     <CardImage product={product} />
     <CardBody product={product} isTop={isTop} />
    </div>
  );
}

function CardImage({ product }) {
 const { image, imageBg, tag, cardBg } = product;
 
 return (
  <div className="absolute top-0 left-0 right-0 h-[55%] overflow-hidden" style={{ background: imageBg }}>
   {image ? <img src={image} alt="" className="w-full h-full object-cover object-top block" /> : <ImagePlaceholder />}

   <div className="absolute top-3 left-3 flex items-center gap-1.5 px-2.5 py-1 rounded-sm border border-white/15" style={{ background: 'rgba(0,0,0,0.38)', backdropFilter: 'blur(10px)' }}>
     <span className="text-[7px] text-[#ffcb63]">✦</span>
     <span className="text-[8px] tracking-[0.22em] text-[#fff8e7] uppercase font-serif">{BRAND}</span>
    </div>

    <div className="absolute top-3 right-3 bg-[#b8860b] text-[#fff8e1] text-[7.5px] tracking-[0.18em] uppercase px-2.5 py-1 rounded-sm">{tag}</div>
    
    <div className="absolute bottom-0 left-0 right-0 h-12" style={{ background: `linear-gradient(to bottom, transparent, ${cardBg})` }} /></div>
  );
}

function ImagePlaceholder() {
 return (
 <div className="w-full h-full flex flex-col items-center justify-center gap-2.5">
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
   <rect x="4" y="4" width="32" height="32" rx="2" stroke="rgba(255,255,255,0.3)" strokeWidth="1.2" strokeDasharray="4 3" />
   <circle cx="20" cy="17" r="5" stroke="rgba(255,255,255,0.3)" strokeWidth="1.2" />
   <path d="M8 34 L14 26 L20 30 L27 22 L34 34Z" stroke="rgba(255,255,255,0.25)" strokeWidth="1" fill="rgba(255,255,255,0.07)" />
  </svg>
   <p className="text-[8px] tracking-[0.22em] text-white/30 uppercase">Product image</p>
  </div>
  );
}

function CardBody({ product, isTop }) {
  const { category, name, subtitle, price, textColor, mutedColor } = product;

  return (
    <div className="absolute bottom-0 left-0 right-0 h-[47%] flex flex-col justify-between p-[12px_18px_18px]">
     <div>
      <p className="text-[8px] tracking-[0.28em] uppercase mb-1" style={{ color: mutedColor }}>{category}</p>
      <p className="text-[17px] font-normal font-serif tracking-tight leading-tight" style={{ color: textColor }}>{name}</p>
      <p className="text-[10.5px] italic mt-0.5" style={{ color: mutedColor }}>{subtitle}</p>
     </div>
     
     <div className="flex items-center justify-between">
      <p className="text-[17px] font-serif tracking-tight" style={{ color: textColor }}>{price}</p>

      {isTop && (
      <button className="px-3.5 py-2 bg-[#b8860b] text-[#fff8e7] text-[8px] tracking-[0.2em] uppercase rounded-sm font-serif cursor-pointer">Next→</button>
       )}
      </div>
    </div>
  );
}

export function StackDots({ products, activeId }) {
 return (
  <div className="absolute -bottom-11 left-1/2 -translate-x-1/2 flex items-center gap-1.5">
   {products.map((p) => (
    <div key={p.id}className="h-1.5 rounded-full bg-[#b8860b] transition-all duration-300" style={{ width: p.id === activeId ? 22 : 6, opacity: p.id === activeId ? 1 : 0.25 }} />
    ))}
    </div>
  );
}

export function ScrollHint() {
 return (
  <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2">
   <p className="text-[8px] tracking-[0.32em] uppercase text-[#b8860b]/50 font-serif">Scroll</p>
   <div className="w-px h-8 bg-gradient-to-b from-[#b8860b]/55 to-transparent animate-scroll-pulse" />
  </div>
  );
}