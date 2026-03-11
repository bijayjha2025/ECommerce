import { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext';
import { ShoppingBag, Trash2, Minus, Plus, ArrowRight, ShieldCheck } from 'lucide-react';

const Cart = () => {
  const { cartItems, updateQuantity, removeItem } = useContext(ShopContext);
  
  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shipping = subtotal > 0 ? 500 : 0;
  const total = subtotal + shipping;

  return (
   <div className="pt-24 pb-20 px-4 sm:px-8 lg:px-12 max-w-7xl mx-auto min-h-screen">
    <div className="flex items-center gap-4 mb-10 pb-6 border-b border-[var(--gold-light)]/30">
    <div className="w-12 h-12 bg-white/40 backdrop-blur-sm rounded-full flex items-center justify-center border border-[var(--gold)]/30 shadow-sm text-[var(--ink)]">
     <ShoppingBag size={24} />
    </div>
    <div>
     <h1 className="text-3xl sm:text-4xl font-serif text-[var(--ink)]">Your Cart</h1>
     <p className="text-[var(--ink)]/60 text-sm mt-1">{cartItems.length} items in your bag</p>
    </div>
   </div>

   { cartItems.length === 0 ? (
   <div className="bg-white/30 backdrop-blur-xl rounded-3xl p-16 text-center border border-[var(--gold-light)]/40 shadow-sm min-h-[400px] flex flex-col items-center justify-center">
    <ShoppingBag size={64} className="text-[var(--gold)]/50 mb-6" />
    <h2 className="text-2xl font-serif text-[var(--ink)] mb-3">Your cart is empty</h2>
    <p className="text-[var(--ink)]/60 mb-8 max-w-md mx-auto">Explore our collection of heritage weaves and handcrafted pieces to find your next treasure.</p>
    <a href="/collection" className="px-8 py-3.5 bg-[var(--ink)] text-[var(--cream)] rounded-full font-medium tracking-wide hover:bg-[var(--gold-dark)] transition-colors inline-block shadow-lg">Discover Collection</a>
   </div>
   ) : (
    
   <div className="flex flex-col lg:flex-row gap-10">
    <div className="flex-1 space-y-6">
    {cartItems.map((item) => (
    <div key={item.id} className="bg-white/40 backdrop-blur-md rounded-2xl p-4 sm:p-6 border border-[var(--gold-light)]/40 shadow-sm hover:shadow-md transition-shadow flex flex-col sm:flex-row gap-6 relative group">

    <div className="w-full sm:w-32 h-32 sm:h-32 rounded-xl overflow-hidden bg-[var(--gold)]/10 flex-shrink-0">
     {item.image ? (
     <img src={item.image} alt={item.name} className="w-full h-full object-cover object-top" /> ) : (
     
     <div className="w-full h-full flex items-center justify-center text-[var(--gold)]/40"><ShoppingBag size={24} /></div>
     )}
    </div>
    
    <div className="flex-1 flex flex-col justify-center">
     <div className='flex justify-between items-start mb-2'>
      <div>
       <p className="text-[10px] sm:text-xs font-bold tracking-[0.2em] uppercase text-[var(--gold-dark)] mb-1">{item.category}</p>
       <h3 className="text-lg sm:text-xl font-serif text-[var(--ink)] leading-snug pr-8">{item.name}</h3>
      </div>

      <button onClick={() => removeItem(item.id, item.size)} className="absolute top-4 right-4 sm:relative sm:top-0 sm:right-0 p-2 text-[var(--ink)]/40 hover:text-red-500 hover:bg-red-50 rounded-full transition-colors" title="Remove Item">
       <Trash2 size={18} />
      </button>
     </div>
     <p className="text-sm text-[var(--ink)]/60 mb-4">Size: <span className="font-medium text-[var(--ink)]">{item.size}</span></p>

     <div className="flex items-center justify-between mt-auto">
      <div className="flex items-center gap-3 bg-white/60 border border-[var(--gold)]/20 rounded-full px-3 py-1.5 w-max">
       <button onClick={() => updateQuantity(item.id, item.size, item.quantity - 1)} className="w-6 h-6 flex items-center justify-center hover:bg-[var(--gold)]/20 rounded-full hover:text-[var(--gold-dark)] transition-colors disabled:opacity-30" disabled={item.quantity <= 1}>
        <Minus size={14} />
       </button>

       <span className="w-6 text-center text-sm font-medium text-[var(--ink)]">{item.quantity}</span>

       <button onClick={() => updateQuantity(item.id, item.size, item.quantity + 1)} className="w-6 h-6 flex items-center justify-center hover:bg-[var(--gold)]/20 rounded-full hover:text-[var(--gold-dark)] transition-colors">
        <Plus size={14} />
       </button>
      </div>

      <div className="text-right">
       <p className="font-serif text-lg text-[var(--ink)]">NPR {(item.price * item.quantity).toLocaleString()}</p>
       {item.quantity > 1 && (
       <p className="text-xs text-[var(--ink)]/50 mt-0.5">NPR {item.price.toLocaleString()} each</p>
        )}
      </div>
     </div>
     </div>
     </div>
     ))}
    </div>

    <div className="w-full lg:w-[380px] flex-shrink-0">
     <div className="bg-white/70 backdrop-blur-xl rounded-3xl p-8 border border-[var(--gold-light)]/50 shadow-[0_8px_32px_0_rgba(184,134,11,0.1)] sticky top-24">
     <h3 className="text-xl font-serif text-[var(--ink)] mb-6 pb-4 border-b border-[var(--gold)]/20">Order Summary</h3>

     <div className="space-y-4 mb-6 text-sm">
      <div className="flex justify-between text-[var(--ink)]/70">
       <span>Subtotal</span>
       <span className="font-serif text-[var(--ink)]">NPR {subtotal.toLocaleString()}</span>
      </div>
     <div className="flex justify-between text-[var(--ink)]/70">
      <span>Shipping Estimate</span>
      <span className="font-serif text-[var(--ink)]">NPR {shipping.toLocaleString()}</span>
     </div>

     <div className="flex items-center gap-2 mt-4 pt-4 border-t border-[var(--gold)]/10">
      <input type="text" placeholder="Discount Voucher" className="w-full bg-white/50 border border-[var(--gold)]/20 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-1 focus:ring-[var(--gold)]" />
      <button className="px-4 py-2.5 bg-[var(--ink)]/10 hover:bg-[var(--gold)]/20 text-[var(--ink)] rounded-lg text-sm font-medium transition-colors border border-transparent">Apply</button>
     </div>
     </div>

     <div className="flex justify-between items-end mb-8 pt-4 border-t border-[var(--gold)]/20">
      <span className="text-[var(--ink)] font-medium">Total</span>
      <div className="text-right">
       <span className="text-2xl font-serif text-[var(--ink)]">NPR {total.toLocaleString()}</span>
       <p className="text-[10px] text-[var(--ink)]/50 mt-1 uppercase tracking-wider">Including VAT</p>
      </div>
     </div>

     <button className="w-full py-4 bg-[var(--ink)] text-[var(--cream)] rounded-xl font-medium tracking-wide flex items-center justify-center gap-2 hover:bg-[var(--gold-dark)] focus:ring-4 focus:ring-[var(--gold)]/30 transition-all duration-300 group shadow-[0_4px_14px_0_rgba(15,23,42,0.39)]">Proceed to Checkout
      <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
     </button>

     <div className="mt-6 flex items-center justify-center gap-2 text-[var(--ink)]/50 text-xs">
      <ShieldCheck size={14} />
      <span>Secure Checkout</span>
     </div>
     </div>
     </div>
     
     </div>
    )}
   </div>
  );
};

export default Cart;
