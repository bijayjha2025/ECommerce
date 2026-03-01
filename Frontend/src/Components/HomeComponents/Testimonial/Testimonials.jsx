import { useState, useEffect } from 'react';
import { testimonials } from './TestimonialData';

function Stars({ count }) {
  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i} className={`text-[12px] ${i < count ? 'text-[#b8860b]' : 'text-[#b8860b]/20'}`}>★</span>
      ))}
    </div>
  );
}

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [direction, setDirection] = useState('next');

  const goTo = (index, dir = 'next') => {
    if (animating) return;
    setAnimating(true);
    setDirection(dir);
    setTimeout(() => {
      setActive(index);
      setAnimating(false);
    }, 350);
  };

  const next = () => goTo((active + 1) % testimonials.length, 'next');
  const prev = () => goTo((active - 1 + testimonials.length) % testimonials.length, 'prev');

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [active]);

  const t = testimonials[active];

  return (
    <section className="py-20 px-6 my-16 relative overflow-hidden">

      <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-[#b8860b]/30" />
      <div className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#b8860b]/30" />

      <p className="absolute top-6 left-1/2 -translate-x-1/2 font-serif font-boldtext-[180px] leading-none text-[#b8860b]/[0.06] select-none pointer-events-none">"</p>

      <div className="max-w-[720px] mx-auto text-center relative z-10">
        <div className="inline-flex items-center gap-3 mb-10">
          <div className="w-5 h-px bg-[#b8860b]" />
          <p className="font-serif text-[9px] tracking-[0.4em] uppercase text-[#b8860b]"> What our customers say</p>
          <div className="w-5 h-px bg-[#b8860b]" />
        </div>

        <div style={{ opacity: animating ? 0 : 1, transform: animating ? `translateX(${direction === 'next' ? '-24px' : '24px'})` : 'translateX(0)', transition: 'opacity 0.35s ease, transform 0.35s ease', }}>
          <p className="font-serif text-[clamp(1.05rem,2vw,1.3rem)] leading-[1.8] text-[#0f172a] italic mb-8 tracking-wide">"{t.quote}"</p>

          <div className="flex justify-center mb-4">
            <Stars count={t.rating} />
          </div>

          <div className="flex flex-col items-center gap-1">
            <p className="font-serif text-[13px] text-[#0f172a] tracking-wide font-bold">{t.name}</p>
            <p className="font-serif text-[10px] tracking-[0.2em] uppercase text-[#0f172a]/60">{t.location}</p>
          </div>
        </div>

        <div className="flex items-center justify-center gap-6 mt-12">
          <button onClick={prev} className="w-8 h-8 rounded-full border border-[#b8860b]/30 flex items-center justify-center text-[#b8860b]/50 hover:border-[#b8860b] hover:text-[#b8860b] transition-all duration-200 font-serif">←</button>

          <div className="flex items-center gap-2">
            {testimonials.map((_, i) => (
              <button key={i} onClick={() => goTo(i, i > active ? 'next' : 'prev')} className="h-1.5 rounded-full bg-[#b8860b] transition-all duration-300" style={{ width: i === active ? 22 : 6, opacity: i === active ? 1 : 0.25 }} />))}
          </div>

          <button onClick={next} className="w-8 h-8 rounded-full border border-[#b8860b]/30 flex items-center justify-center text-[#b8860b]/50 hover:border-[#b8860b] hover:text-[#b8860b] transition-all duration-200 font-serif">→</button>
        </div>
      </div>
    </section>
  );
}