import { useState } from "react";
import { collectionProducts, CATEGORIES } from "../Data/CollectionData";
import { Filter, Search, ChevronDown } from "lucide-react";
import ProductCard from "../Components/ProductCard";

const Collection = () => {
 const [wishlist, setWishlist] = useState([]);
 const [activeCategory, setActiveCategory] = useState('All');
 const [sortBy, setSortBy] = useState('Featured');
 const [isFilterOpen, setIsFilterOpen] = useState(false);
 const [searchQuery, setSearchQuery] = useState('');

 const toggleWishlist = (id) =>
  setWishlist(prev =>
    prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
  );

 let displayProducts = collectionProducts.filter(p => {
  const matchesCategory = activeCategory === 'All' || p.category === activeCategory;
  const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase());
   return matchesCategory && matchesSearch;
  });

 if (sortBy === 'Price: Low to High') { 
  displayProducts.sort((a, b) => a.price - b.price);
  } else if (sortBy === 'Price: High to Low') {
    displayProducts.sort((a, b) => b.price - a.price);
  }

 return (
  <div className="pt-24 pb-16 px-4 sm:px-8 lg:px-12 max-w-[1400px] mx-auto min-h-screen">
   <div className="text-center mb-12">
    <h1 className="text-4xl sm:text-5xl font-serif text-[var(--ink)] mb-4">The Grand Collection</h1>
    <div className="w-24 h-1 bg-gradient-to-r from-[var(--gold-dark)] to-[var(--gold-light)] mx-auto rounded-full mb-6 relative">
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-[var(--gold)] rounded-full border-2 border-[#fffbf2]"></div>
   </div>
   <p className="text-[var(--ink)]/70 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">Explore our complete archive of heritage crafts, modern adaptations, and festive textiles. Every piece is woven with precision and colored with history.</p>
   </div>
   
   <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
    <div className="lg:hidden flex justify-between items-center mb-4">
     <button onClick={() => setIsFilterOpen(!isFilterOpen)} className="flex items-center gap-2 text-[var(--ink)] font-serif border border-[var(--gold)]/30 px-5 py-2.5 rounded-full bg-white/40 backdrop-blur-sm shadow-sm">
      <Filter size={18} /> {isFilterOpen ? 'Hide Filters' : 'Show Filters'}
     </button>
    <span className="text-[var(--ink)]/60 text-sm font-medium">{displayProducts.length} items</span>
    </div>
    
    <div className={`${isFilterOpen ? 'block' : 'hidden'} lg:block w-full lg:w-72 flex-shrink-0 space-y-6 transition-all duration-300`}>
     <div className="bg-white/30 backdrop-blur-md rounded-2xl p-6 border border-[var(--gold-light)]/30 shadow-[0_4px_24px_0_rgba(184,134,11,0.06)]">
     <div className="relative">
     <input type="text" placeholder="Search collection..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)}  className="w-full bg-[#fff8e7]/60 border border-[var(--gold)]/30 rounded-xl py-3 pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--gold)]/50 transition-all text-[var(--ink)] placeholder:text-[var(--ink)]/40" />
      <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[var(--ink)]/40" />
     </div>
    </div>
    
    <div className="bg-white/30 backdrop-blur-md rounded-2xl p-6 border border-[var(--gold-light)]/30 shadow-[0_4px_24px_0_rgba(184,134,11,0.06)]">
    <h3 className="font-serif text-lg text-[var(--ink)] mb-4 pb-3 border-b border-[var(--gold)]/20 flex items-center justify-between"> Categories
     <span className="text-[10px] uppercase tracking-wider text-[var(--gold-dark)] bg-[var(--gold)]/10 px-2 py-1 rounded-full">{CATEGORIES.length}</span>
    </h3>
    
    <ul className="space-y-1">
     {CATEGORIES.map(category => (
      <li key={category}>
      <button onClick={() => setActiveCategory(category)} className={`w-full text-left flex items-center justify-between text-sm py-2 px-3 rounded-lg transition-all duration-200
      ${activeCategory === category ? 'bg-[var(--gold)]/10 text-[var(--gold-dark)] font-medium shadow-sm border border-[var(--gold)]/20'
        : 'text-[var(--ink)]/70 hover:bg-white/40 hover:text-[var(--gold-dark)] border border-transparent' }`}>
      {category}
      {activeCategory === category && <div className="w-1.5 h-1.5 rounded-full bg-[var(--gold)] shadow-[0_0_8px_rgba(184,134,11,0.6)]"></div>}
      </button>
      </li>
      ))}
     </ul>
     </div>
     </div>
     
     <div className="flex-1">
      <div className="hidden lg:flex justify-between items-center mb-8 bg-white/30 backdrop-blur-md rounded-2xl p-4 sm:px-6 border border-[var(--gold-light)]/30 shadow-[0_4px_24px_0_rgba(184,134,11,0.06)] relative z-20">
      <div className="flex items-center gap-3">
      <div className="w-2 h-2 bg-[var(--gold)] rounded-full animate-pulse"></div>
       <span className="text-[var(--ink)]/70 text-sm font-medium">Viewing {displayProducts.length} beautifully crafted pieces</span>
      </div>

      <div className="relative group">
       <button className="flex items-center gap-2 text-sm text-[var(--ink)] bg-white/50 px-4 py-2 rounded-lg border border-[var(--gold)]/20 hover:border-[var(--gold)]/50 transition-all shadow-sm">Sort by: <span className="font-serif text-[var(--gold-dark)]">{sortBy}</span>   
        <ChevronDown size={14} />
       </button>
       <div className="absolute right-0 top-full mt-2 w-48 bg-white/95 backdrop-blur-xl rounded-xl shadow-xl border border-[var(--gold)]/20 overflow-hidden opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 origin-top-right transform scale-95 group-hover:scale-100">
        {['Featured', 'Price: Low to High', 'Price: High to Low'].map((option, idx) => (
        <button key={option} onClick={() => setSortBy(option)} className={`w-full text-left px-4 py-3 text-sm hover:bg-[var(--gold)]/10 hover:text-[var(--gold-dark)] transition-colors ${idx !== 2 ? 'border-b border-[var(--gold)]/10' : ''} ${sortBy === option ? 'text-[var(--gold-dark)] bg-[var(--gold)]/5 font-medium' : 'text-[var(--ink)]/80'}`} >
         {option}
        </button>
        ))}
       </div>
      </div>
     </div>

     {displayProducts.length > 0 ? (
     <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
      {displayProducts.map(product => (
       <ProductCard key={product.id} product={product} wishlisted={wishlist.includes(product.id)} onWishlist={toggleWishlist} />
      ))}
     </div>
     ) : (
     
     <div className="text-center py-32 bg-white/20 backdrop-blur-sm rounded-3xl border border-dashed border-[var(--gold)]/40">
      <div className="w-16 h-16 bg-[var(--gold)]/10 rounded-full flex items-center justify-center mx-auto mb-4">
       <Search size={24} className="text-[var(--gold-dark)]" />
      </div>
     <h3 className="font-serif text-xl text-[var(--ink)] mb-2">No masterpieces found</h3>
     <p className="text-[var(--ink)]/60 text-sm max-w-sm mx-auto">Try adjusting your filters or search query to discover more items in our collection.</p>
     <button onClick={() => { setActiveCategory('All'); setSearchQuery(''); }} className="mt-6 px-6 py-2 bg-[var(--ink)] text-[var(--cream)] rounded-full text-sm hover:bg-[var(--gold-dark)] transition-colors">Clear Filters</button>
     </div>
    )}
   
   </div>
   </div>
  </div>
  
  );
}

export default Collection;