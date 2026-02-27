import { useState, useRef } from 'react';
import { CATEGORIES, featuredProducts } from './featuredData';
import ProductCard from '../ProductCard';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function FeaturedComponent() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [wishlist, setWishlist] = useState([]);
  const scrollRef = useRef(null);

  const filtered =  activeCategory === 'All' ? featuredProducts : featuredProducts.filter(p => p.category === activeCategory);

  const toggleWishlist = (id) => {
    setWishlist(prev => prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
    );
  };

  const scroll = (dir) => {
    scrollRef.current?.scrollBy({ left: dir === 'left' ? -300 : 300, behavior: 'smooth' });
  };

  return (
   <section className="py-16 px-4">
    <div className="mb-8 flex items-end justify-between max-w-[1120px] mx-auto">
     <div>
      <div className="inline-flex items-center gap-3 mb-3">
       <div className="w-5 h-px bg-[#b8860b]" />
        <p className="text-[9px] tracking-[0.38em] text-[#b8860b] uppercase font-serif">Curated for you</p>
       </div>
       <h2 className="font-serif font-normal text-[clamp(1.8rem,3.5vw,2.8rem)] text-[#1a0a00] tracking-tight leading-tight">Featured<em className="italic text-[#b8860b]">Collection</em></h2>
      </div>

      <div className="hidden sm:flex items-center gap-2">
       <button onClick={() => scroll('left')} className="w-9 h-9 rounded-full border border-[#b8860b]/40 flex items-center justify-center text-[#b8860b] hover:bg-[#b8860b] hover:text-[#fff8e7] transition-all duration-200">
        <ChevronLeft size={16} />
       </button>

       <button onClick={() => scroll('right')} className="w-9 h-9 rounded-full border border-[#b8860b]/40 flex items-center justify-center text-[#b8860b] hover:bg-[#b8860b] hover:text-[#fff8e7] transition-all duration-200">
         <ChevronRight size={16} />
       </button>
      </div>
     </div>
      
     <div className="flex items-center gap-2 mb-8 max-w-[1120px] mx-auto flex-wrap">
     {CATEGORIES.map(cat => (
      <button key={cat} onClick={() => setActiveCategory(cat)} className={`px-4 py-1.5 text-[9px] tracking-[0.25em] uppercase font-serif rounded-sm border transition-all duration-200
      ${activeCategory === cat ? 'bg-[#b8860b] text-[#fff8e7] border-[#b8860b]'
        : 'bg-transparent text-[#1a0a00]/60 border-[#b8860b]/30 hover:border-[#b8860b] hover:text-[#b8860b]'}`}>
        {cat}</button>
      ))}

      <span className="ml-auto text-[9px] tracking-[0.18em] text-[#1a0a00]/35 uppercase font-serif hidden sm:block">{filtered.length} pieces</span>
     </div>

     <div className="relative max-w-[1120px] mx-auto">
     <div className="absolute left-0 top-0 bottom-4 w-12 z-10 pointer-events-none bg-gradient-to-r from-[#f5e0a0]/60 to-transparent" />
      <div className="absolute right-0 top-0 bottom-4 w-12 z-10 pointer-events-none bg-gradient-to-l from-[#f5e0a0]/60 to-transparent" />
      
      <div ref={scrollRef} className="flex gap-5 overflow-x-auto pb-4 scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
      {filtered.map(product => (
       <ProductCard key={product.id} product={product} wishlisted={wishlist.includes(product.id)} onWishlist={toggleWishlist} flex />
      ))}
      </div>
     </div>
     
     <div className="flex justify-center mt-10">
      <Link to="/collection" className="font-serif text-[10px] tracking-[0.3em] uppercase text-[#b8860b] border-b border-[#b8860b]/40 pb-0.5 hover:border-[#b8860b] transition-colors duration-200">View Full Collection →</Link>
     </div>
    </section>
  );
}