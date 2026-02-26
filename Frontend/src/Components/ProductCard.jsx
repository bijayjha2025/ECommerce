import { useState } from 'react';
import { Heart, ShoppingCart } from 'lucide-react';

function ImagePlaceholder() {
 return(
  <div className='w-full h-full flex flex-col items-center justify-center gap-3 opacity-50'>
   <svg width="36" height="36" viewBox="0 0 40 40" fill="none">
    <rect x="4" y="4" width="32" height="32" rx="2" stroke="rgba(255,255,255,0.6)" strokeWidth="1.2" strokeDasharray="4 3" />
    <circle cx="20" cy="17" r="5" stroke="rgba(255,255,255,0.6)" strokeWidth="1.2" />
    <path d="M8 34 L14 26 L20 30 L27 22 L34 34Z" stroke="rgba(255,255,255,0.5)" strokeWidth="1" fill="rgba(255,255,255,0.1)" />
   </svg>
   <p className="text-[8px] tracking-[0.2em] text-white/50 uppercase">Product image</p>
  </div>
 );
}

export default function ProductCard({ product, wishlisted, onWishlist, flex = false }) {
  const [hovered, setHovered] = useState(false);
  const { name, category, price, image, originalPrice, imageBg, stock, isNew, isSale  } = product;
  const discount  = originalPrice ? Math.round((1 - price / originalPrice) * 100) : null;
  const lowStock  = stock <= 3;

  return (
   <div className={`relative rounded-sm overflow-hidden bg-[#fffbf2] cursor-pointer ${flex ? 'flex-none w-[220px] sm:w-[260px]' : 'w-full'}`}
      style={{ boxShadow: hovered ? '0 20px 48px rgba(20,8,0,0.18)' : '0 4px 16px rgba(20,8,0,0.08)',
               transition: 'box-shadow 0.3s ease, transform 0.3s ease',
               transform: hovered ? 'translateY(-4px)' : 'translateY(0)',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >

    <div className="relative h-[280px] sm:h-[320px] overflow-hidden " style={{ background: imageBg }}>
     {image ? ( <img src={image} alt={name} className="w-full h-full object-cover object-top block" />
      ) : <ImagePlaceholder />
     }

    <div className="absolute top-3 left-3 flex flex-col gap-1.5">
     {isNew && (
      <span className="bg-[#1a0a00] text-[#ffcb63] text-[7px] tracking-[0.22em] uppercase px-2 py-1 rounded-sm">New</span> )}
      {isSale && discount && (
       <span className="bg-[#b8860b] text-[#fff8e7] text-[7px] tracking-[0.18em] uppercase px-2 py-1 rounded-sm">−{discount}%</span>
     )}
    </div>

    <button onClick={(e) =>{ e.stopPropagation(); onWishlist(product.id); }} className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/80 flex items-center justify-center transition-all duration-200 border" 
     style={{ background:   wishlisted ? '#b8860b' : 'rgba(255,248,231,0.85)',
              borderColor:  wishlisted ? '#b8860b' : 'rgba(184,134,11,0.3)',
              backdropFilter: 'blur(8px)',
     }}>
     <Heart size={13} className={wishlisted ? 'text-[#fff8e7]' : 'text-[#b8860b]'} fill={wishlisted ? '#fff8e7' : 'none'} />
    </button>

    <div className={`absolute bottom-0 left-0 right-0 transition-transform duration-300 ${hovered ? 'translate-y-0' : 'translate-y-full'}`}>
     <button className="w-full py-3 bg-[#1a0a00] text-[#ffcb63] text-[9px] tracking-[0.28em] uppercase font-serif flex items-center justify-center gap-2 hover:bg-[#b8860b] hover:text-[#fff8e7] transition-colors duration-200">
      <ShoppingCart size={13} />Add to Cart
     </button>
    </div>
   </div>

   <div className="p-4">
    <p className="text-[8px] tracking-[0.28em] uppercase text-[#b8860b]/70 mb-1">{category}</p>
    <p className="font-serif text-[15px] text-[#1a0a00] tracking-tight leading-snug mb-2">{name}</p>

    <div className="flex items-center gap-2">
     <span className="font-serif text-[14px] text-[#1a0a00]">NPR {price.toLocaleString()}</span>
     {originalPrice && (
      <span className="text-[11px] text-[#1a0a00]/35 line-through">NPR {originalPrice.toLocaleString()}</span>
      )}
    </div>
    
    {lowStock && (
     <p className="mt-2 text-[8px] tracking-[0.18em] uppercase text-[#8b1a1a]">◆ Only {stock} left</p>
    )
    }
    </div>
   </div>
  );
}