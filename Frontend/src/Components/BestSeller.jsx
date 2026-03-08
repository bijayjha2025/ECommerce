import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import ProductCard from './ProductCard';
import { featuredProducts } from './FeaturedCollection/featuredData';
import { ShopContext } from '../Context/ShopContext';

export default function BestSeller (){
  const { wishlist, toggleWishlist } = useContext(ShopContext);

  const bestSellers = featuredProducts.filter(
  product => product.isBestSeller 
 );

  return (
   <section className="py-16 px-4">
    <div className="max-w-[1120px] mx-auto">
     
     <div className="flex items-end justify-between mb-10">
      <div>
       <div className="inline-flex items-center gap-3 mb-3">
       <div className="w-5 h-px bg-[#b8860b]" />
        <p className="font-serif text-[9px] tracking-[0.38em] uppercase text-[#b8860b]">Most loved</p>
       </div>
       <h2 className="font-serif font-normal text-[clamp(1.8rem,3.5vw,2.8rem)] text-[#1a0a00] tracking-tight leading-tight">Our <em className="italic text-[#b8860b]">Bestsellers</em></h2>
       </div>

       <Link to="/collection" className="hidden sm:block font-serif text-[10px] tracking-[0.3em] uppercase text-[#b8860b] border-b border-[#b8860b]/40 pb-0.5 hover:border-[#b8860b] transition-colors duration-200">View All →</Link>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
       {bestSellers.map(product => (
        <ProductCard key={product.id} product={product} wishlisted={wishlist.some(item => item.id === product.id)} onWishlist={() => toggleWishlist(product)} />
        ))}
      </div>

      <div className="flex justify-center mt-10 sm:hidden">
       <Link to="/collection" className="font-serif text-[10px] tracking-[0.3em] uppercase text-[#b8860b] border-b border-[#b8860b]/40 pb-0.5">View All →</Link>
      </div>
     </div>
    </section>
  )
}
