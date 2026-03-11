import { useState, useContext } from 'react';
import { collectionProducts, CATEGORIES } from '../Data/CollectionData';
import ProductCard from '../Components/ProductCard'
import { Filter, ChevronDown } from 'lucide-react';
import { ShopContext } from '../Context/ShopContext';

const Products = () => {
 const { wishlist, toggleWishlist } = useContext(ShopContext);
 const [activeCategory, setActiveCategory] = useState('All');
 const [sortBy, setSortBy] = useState('Featured');
 const [isFilterOpen, setIsFilterOpen] = useState(false);

 let displayProducts = activeCategory === 'All' ? collectionProducts : collectionProducts.filter(p => p.category === activeCategory);
 
 if (sortBy === 'Price: Low to High') {
  displayProducts.sort((a, b) => a.price - b.price);
 } else if (sortBy === 'Price: High to Low') {
  displayProducts.sort((a, b) => b.price - a.price);
 }

 return (
  <div className="pt-24 pb-16 px-4 sm:px-8 lg:px-12 max-w-7xl mx-auto min-h-screen">
   
   <div className="text-center mb-12">
    <h1 className="text-4xl sm:text-5xl font-serif text-[var(--ink)] mb-4">Our Curated Collection</h1>
    <div className="w-24 h-1 bg-gradient-to-r from-[var(--gold-dark)] to-[var(--gold-light)] mx-auto rounded-full mb-6"></div>
    <p className="text-[var(--ink)]/70 max-w-2xl mx-auto">Discover our rich heritage woven into every thread. Each piece is a masterpiece of craftsmanship, blending timeless traditions with modern elegance.</p>
   </div>

   <div className="flex flex-col lg:flex-row gap-8">
    <div className="lg:hidden flex justify-between items-center mb-4">
     <button onClick={() => setIsFilterOpen(!isFilterOpen)} className="flex items-center gap-2 text-[var(--ink)] font-serif border border-[var(--gold)]/30 px-4 py-2 rounded-lg bg-white/40 backdrop-blur-sm" >
      <Filter size={18} /> Filters
     </button>
    <span className="text-[var(--ink)]/60 text-sm">Showing {displayProducts.length} items</span>
   </div>
   
   <div className={`${isFilterOpen ? 'block' : 'hidden'} lg:block w-full lg:w-64 flex-shrink-0 space-y-8`}>
    <div className="bg-white/30 backdrop-blur-md rounded-2xl p-6 border border-[var(--gold-light)]/30 shadow-[0_4px_24px_0_rgba(184,134,11,0.06)]">
     <h3 className="font-serif text-lg text-[var(--ink)] mb-4 pb-2 border-b border-[var(--gold)]/20">Categories</h3>
     <ul className="space-y-3">
      {CATEGORIES.map(category => (
       <li key={category}>
        <button onClick={() => setActiveCategory(category)} className={`w-full text-left flex items-center justify-between text-sm transition-colors ${activeCategory === category ? 'text-[var(--gold-dark)] font-medium' : 'text-[var(--ink)]/70 hover:text-[var(--gold)]'  }`}>
         {category}
         {activeCategory === category && <div className="w-1.5 h-1.5 rounded-full bg-[var(--gold)]"></div>}
        </button>
       </li>
      ))}
     </ul>
    </div>
   </div>
   
   <div className="flex-1">
    <div className="hidden lg:flex justify-between items-center mb-8 bg-white/20 backdrop-blur-sm rounded-xl p-4 border border-[var(--gold)]/20">
    <span className="text-[var(--ink)]/70 text-sm">Showing {displayProducts.length} elegantly crafted items</span>
    
    <div className="relative group">
     <button className="flex items-center gap-2 text-sm text-[var(--ink)] hover:text-[var(--gold-dark)] transition-colors">Sort by: <span className="font-medium">{sortBy}</span> <ChevronDown size={14} />
     </button>
     <div className="absolute right-0 top-full mt-2 w-48 bg-white/90 backdrop-blur-xl rounded-xl shadow-lg border border-[var(--gold)]/20 overflow-hidden opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-10">
     {['Featured', 'Price: Low to High', 'Price: High to Low'].map(option => (
      <button key={option} onClick={() => setSortBy(option)} className="w-full text-left px-4 py-2.5 text-sm hover:bg-[var(--gold)]/10 text-[var(--ink)] transition-colors">
       {option}
      </button>
      ))}
     </div>
    </div>
   </div>

   {displayProducts.length > 0 ? (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-8">
     {displayProducts.map(product => (
      <ProductCard key={product.id} product={product} wishlisted={wishlist.some( item => item.id ===product.id)}  onWishlist={() => toggleWishlist(product) } />
      ))}
    </div>
    ) : (
    <div className="text-center py-20">
     <p className="text-[var(--ink)]/60 text-lg">No products found in this category.</p>
    </div>
    )}
   </div>
  </div>
 </div>
  );
};

export default Products