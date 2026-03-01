import { Link } from 'react-router-dom';
import { craftStoryAssets } from '../assets/assets';

const CraftImage = craftStoryAssets.craftStoryBg;

const STATS = [
  { value: '50+', label: 'Artisan weavers' },
  { value: '8', label: 'Heritage crafts' },
  { value: '3', label: 'Generations' },
  { value: '100%', label: 'Handfinished' },
];

export default function CraftStory() {
  return (

    <section className="relative w-full my-16 overflow-hidden" style={{ minHeight: 'clamp(480px, 60vw, 680px)' }}>
      <div className="absolute inset-0" style={{ maskImage: 'linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%)', WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%)' }}>

        {CraftImage ? (
          <img src={CraftImage} alt="Artisan at work" className="w-full h-full object-cover object-center" />
        ) : (
          <div className="w-full h-full" style={{ background: 'linear-gradient(135deg, #2c1a0e 0%, #5c3a1e 30%, #8b6343 55%, #c9a460 75%, #e8c87a 100%)' }}>
            {Array.from({ length: 18 }).map((_, i) => (
              <div key={i} className="absolute left-0 right-0" style={{ top: `${(i / 18) * 100}%`, height: 1, background: 'rgba(255,255,255,0.04)', transform: `rotate(${i % 2 === 0 ? 1.5 : -1.5}deg)` }} />))}

            <div className="absolute inset-0 flex items-center justify-center">
              <div className="flex flex-col items-center gap-3 opacity-20">
                <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
                  <rect x="8" y="8" width="48" height="48" rx="2" stroke="white" strokeWidth="1.5" strokeDasharray="6 4" />
                  <path d="M8 32 Q20 20 32 32 Q44 44 56 32" stroke="white" strokeWidth="1.5" fill="none" />
                  <path d="M8 40 Q20 28 32 40 Q44 52 56 40" stroke="white" strokeWidth="1" fill="none" />
                </svg>
                <p className="text-white text-[9px] tracking-[0.3em] uppercase">Add craft image</p>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(26,10,0,0.92) 0%, rgba(26,10,0,0.55) 45%, rgba(26,10,0,0.15) 100%)' }} />
      <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(26,10,0,0.4) 0%, transparent 60%)' }} />

      <div className="absolute inset-0 flex flex-col justify-end">
        <div className="max-w-[1120px] w-full mx-auto px-6 pb-12">

          <div className="max-w-xl">
            <div className="inline-flex items-center gap-3 mb-5">
              <div className="w-5 h-px bg-[#b8860b]" />
              <p className="font-serif text-[9px] tracking-[0.4em] uppercase text-[#b8860b]">Our Heritage</p>
            </div>
            <h2 className="font-serif font-normal text-[clamp(2rem,4vw,3.2rem)] text-[#fff8e7] tracking-tight leading-[1.1] mb-4">Woven by hand,<br /><em className="italic text-[#ffcb63]">carried through generations</em></h2>

            <div className="w-10 h-[1.5px] bg-[#b8860b] mb-5" />
            <p className="font-serif text-[13.5px] leading-[1.85] text-[#fff8e7]/60 mb-8 max-w-md">
              Every WearNepal piece begins in the highlands — where artisans
              have mastered their craft across generations. From the Dhaka looms
              of Palpa to the Pashmina spinners of Mustang, we work directly
              with over 50 weavers to bring their stories to you.
            </p>

            <Link to="/about" className="inline-flex items-center gap-3 font-serif text-[10px] tracking-[0.3em] uppercase text-[#ffcb63] border-b border-[#ffcb63]/40 pb-0.5 hover:border-[#ffcb63] transition-colors duration-200">Meet the Artisans →</Link>
          </div>

          <div className="flex flex-wrap gap-x-10 gap-y-4 mt-12 pt-8 border-t border-[#b8860b]/25">
            {STATS.map(({ value, label }) => (
              <div key={label}>
                <p className="font-serif text-[clamp(1.4rem,2.5vw,2rem)] text-[#ffcb63] tracking-tight leading-none mb-1">{value}</p>
                <p className="font-serif text-[9px] tracking-[0.2em] uppercase text-[#fff8e7]/40">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}