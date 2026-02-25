
import { useState, useRef } from 'react';
import { CATEGORIES, featuredProducts } from './featuredData';
import ProductCard from '../ProductCard';

export default function FeaturedComponent() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [wishlist, setWishlist] = useState([]);
  const scrollRef = useRef(null);

  const filtered =  activeCategory === 'All' ? featuredProducts : featuredProducts.filter(p => p.category === activeCategory);

  const toggleWishlist = (id) => {
    setWishlist(prev => prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
    );
  };

  return (
   <section className="py-16 px-4 max-w-[1120px] mx-auto">
    <div className="mb-8">
     <p className="text-sm text-gray-500 mb-2 uppercase tracking-wider">Featured</p>
     <h2 className="text-3xl font-semibold">Collection</h2>
    </div>

    <div className="flex gap-3 mb-8 flex-wrap">
     {CATEGORIES.map(cat => (
      <button key={cat} onClick={() => setActiveCategory(cat)} className={`px-4 py-1 text-sm border rounded transition ${activeCategory === cat ? 'bg-black text-white border-black' : 'border-gray-300 hover:border-black'}`}>{cat}</button>
      ))}
     </div>
     
     <div ref={scrollRef} className="flex gap-5 overflow-x-auto pb-4">
      {filtered.map(product => (
       <ProductCard key={product.id} product={product} wishlisted={wishlist.includes(product.id)} onWishlist={toggleWishlist} flex />
      ))}
     </div>
     
     <div className="text-center mt-10">
      <button className="text-sm underline">View Full Collection</button>
     </div>
    </section>
  );
}