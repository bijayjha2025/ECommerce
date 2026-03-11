import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import ProductCard from './ProductCard';
import { featuredProducts } from './FeaturedCollection/featuredData';
import { ShopContext } from '../Context/ShopContext';
import { motion } from 'framer-motion';

export default function BestSeller (){
  const { wishlist, toggleWishlist } = useContext(ShopContext);

  const bestSellers = featuredProducts.filter(
  product => product.isBestSeller 
  );

  const containerVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut", staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
  };

  return (
   <motion.section className="py-16 px-4" initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={containerVariants}
>
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
        <motion.div key={product.id} variants={itemVariants}>
        <ProductCard product={product} wishlisted={wishlist.some(item => item.id === product.id)} onWishlist={() => toggleWishlist(product)} />
        </motion.div>
        ))}
      </div>

      <div className="flex justify-center mt-10 sm:hidden">
       <Link to="/collection" className="font-serif text-[10px] tracking-[0.3em] uppercase text-[#b8860b] border-b border-[#b8860b]/40 pb-0.5">View All →</Link>
      </div>
     </div>
    </motion.section>
  )
}
