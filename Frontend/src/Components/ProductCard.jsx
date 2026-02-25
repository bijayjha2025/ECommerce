
import { Heart, ShoppingCart } from 'lucide-react';

export default function ProductCard({ product, wishlisted, onWishlist }) {
  const { id, name, category, price, image } = product;

  return (
   <div className="group bg-[#fffbf2] rounded-sm overflow-hidden shadow-sm hover:shadow-lg transition duration-300 cursor-pointer">
    <div className="relative h-[300px] overflow-hidden bg-gray-100">

     {image ? ( <img src={image} alt={name} className="w-full h-full object-cover" />
     ) : (
     <div className="flex items-center justify-center h-full text-xs text-gray-400">No Image</div>
     )}
     
     <button onClick={(e) =>{ e.stopPropagation(); onWishlist(id); }}
             className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/80 flex items-center justify-center">
      <Heart size={14} className={wishlisted ? 'text-red-500' : 'text-gray-600'} fill={wishlisted ? 'red' : 'none'} />
     </button>

     <button className="absolute bottom-0 left-0 right-0 py-3 bg-black text-white text-xs tracking-widest uppercase opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center gap-2">
      <ShoppingCart size={14} />Add to Cart
     </button>
    </div>
    
    <div className="p-4">
     <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">{category}</p>
     <p className="text-base font-medium text-gray-900 mb-2">{name}</p>
     <p className="text-sm font-semibold text-gray-900">NPR {price.toLocaleString()}</p>
    </div>
   </div>
  );
}