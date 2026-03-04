import { useState } from 'react'
import { collectionProducts } from '../Data/CollectionData';
import { ShoppingBag, Trash2 } from 'lucide-react';

const Cart = () => {
  // Dummy data for cart items
 const [cartItems, setCartItems] = useState([
    { ...collectionProducts[0], quantity: 1, size: 'M' },
    { ...collectionProducts[2], quantity: 2, size: 'L' }
  ]);

  const updateQuantity = (id, newQuantity) => {
   if(newQuantity < 1) return;
   setCartItems(items => items.map(item => 
       item.id === id ? { ...item, quantity: newQuantity } : item ));
   }

  const removeItem = (id) => {
    setCartItems(items => items.filter(item => item.id !== id));
  };
  
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

      <button onClick={() => removeItem(item.id)} className="absolute top-4 right-4 sm:relative sm:top-0 sm:right-0 p-2 text-[var(--ink)]/40 hover:text-red-500 hover:bg-red-50 rounded-full transition-colors" title="Remove Item">
       <Trash2 size={18} />
      </button>
     </div>
     <p className="text-sm text-[var(--ink)]/60 mb-4">Size: <span className="font-medium text-[var(--ink)]">{item.size}</span></p>
     
              
                </div>
              </div>
            ))}
          </div>

        

        </div>
      )}
    </div>
  );
};

export default Cart;
