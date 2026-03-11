import { Heart } from 'lucide-react';
import { useContext } from 'react';
import { ShopContext } from '../Context/ShopContext';
import ProductCard from '../Components/ProductCard';
import { motion } from 'framer-motion';

const Favorites = () => {
  const { wishlist, toggleWishlist } = useContext(ShopContext);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 30 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.5 } }
  };

 
 return (
  <div className="pt-24 pb-20 px-4 sm:px-8 lg:px-12 max-w-7xl mx-auto min-h-screen">
   <div className="flex items-center gap-4 mb-10 pb-6 border-b border-[var(--gold-light)]/30">
    <div className="w-12 h-12 bg-white/40 backdrop-blur-sm rounded-full flex items-center justify-center border border-[var(--gold)]/30 shadow-sm text-[var(--ink)]">
     <Heart size={24} className="text-[#8b1a1a]" fill="#8b1a1a" />
    </div>
    
    <div>
     <h1 className="text-3xl sm:text-4xl font-serif text-[var(--ink)]">Your Favorites</h1>
     <p className="text-[var(--ink)]/60 text-sm mt-1">Curated pieces you love</p>
    </div>
   </div>

   {wishlist.length === 0 ? (
    <div className="bg-white/30 backdrop-blur-xl rounded-3xl p-16 text-center border border-[var(--gold-light)]/40 shadow-sm min-h-[400px] flex flex-col items-center justify-center">
     <Heart size={64} className="text-[var(--gold)]/50 mb-6" />
     <h2 className="text-2xl font-serif text-[var(--ink)] mb-3">No favorites yet</h2>
     <p className="text-[var(--ink)]/60 mb-8 max-w-md mx-auto">Love a piece? Click the heart icon on any product to save it here for later.</p>
     <a href="/collection" className="px-8 py-3.5 bg-[var(--ink)] text-[var(--cream)] rounded-full font-medium tracking-wide hover:bg-[var(--gold-dark)] transition-colors inline-block shadow-lg">Explore Collection</a>
    </div>

  ) : (
    
    <motion.div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8" variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
     {wishlist.map((product) => (
      <motion.div key={product.id} variants={itemVariants}>
      <ProductCard product={product} wishlisted={true} onWishlist={() => toggleWishlist(product)} />
      </motion.div>
    ))}
    </motion.div>
    )}
  </div>
  )
}
export default Favorites