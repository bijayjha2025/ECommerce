import { useState } from 'react';
import { assets } from '../assets/assets';
import { Link, NavLink } from 'react-router-dom';
import { Menu, Search, ShoppingCart, UserRound, X, ChevronRight } from 'lucide-react';

const Navbar = () => {
  const [visible, setVisible] = useState(false);

  return (

    <div className='relative flex items-center justify-between py-5 px-4 sm:px-6'>
     <img src={assets.Logo} alt="Logo" className='w-28 sm:w-32 md:w-40' />
     
     <div className="hidden sm:flex items-center gap-2 px-4 py-2 bg-white/30 backdrop-blur-md rounded-full border border-white/40 shadow-sm focus-within:ring-2 focus-within:ring-[#b8860b] transition-all duration-300">

      <Search size={18} className="text-[#0f172a]/70" />
      <input type="text" placeholder="Search products..."className="bg-transparent outline-none text-sm text-[#0f172a] placeholder:text-[#0f172a]/50 w-40 focus:w-56 transition-all duration-300" />
     </div>

      <ul className='hidden lg:flex gap-5 text-sm text-gray-700 font-medium'>
        
        <NavLink to="/" className='flex flex-col items-center gap-1'>
        <p className='text-[#0f172a]'>HOME</p>
        <hr className="w-1/2 h-[2px] bg-[#b8860b] border-none mx-auto hidden"></hr>
        </NavLink>

        <NavLink to="/collection" className='flex flex-col items-center gap-1'>
        <p className='text-[#0f172a]'>COLLECTION</p>
        <hr className="w-1/2 h-[2px] bg-[#b8860b] border-none mx-auto hidden"></hr>
        </NavLink>

        <NavLink to="/about" className='flex flex-col items-center gap-1'>
        <p className='text-[#0f172a]'>ABOUT</p>
        <hr className="w-1/2 h-[2px] bg-[#b8860b] border-none mx-auto hidden"></hr>
        </NavLink>

        <NavLink to="/contact" className='flex flex-col items-center gap-1'>
        <p className='text-[#0f172a]'>CONTACT</p>
        <hr className="w-1/2 h-[2px] bg-[#b8860b] border-none mx-auto hidden"></hr>
        </NavLink>
      </ul>

      <div className='flex items-center gap-3'>

        {/* Mobile Search Button */}
       <button className="sm:hidden p-2 rounded-full hover:bg-[#b8860b]/20 transition-colors duration-300">
        <Search size={20} className="text-[#0f172a]" />
       </button>

       <Link to="/cart" className='relative group'>
       <ShoppingCart size={20} className='text-[#0f172a] hover:text-[#b8860b] transition-colors duration-300' />
        <span className='absolute -bottom-2 -right-2 bg-[#b8860b] text-white text-xs rounded-full w-4 h-4 flex items-center justify-center'>3</span>
      </Link>

      <div className='group relative hidden sm:block'>
       <Link to="/login" className="px-2 py-2 flex items-center justify-center rounded-full hover:bg-[#b8860b]/20 transition-all duration-300">
        <UserRound size={20} className="text-[#0f172a] hover:text-[#b8860b]" />
       </Link>

        <div className="absolute right-0 mt-2 hidden group-hover:flex flex-col gap-2 w-40 bg-[#ffcb63] backdrop-blur-md border border-white/20 shadow-lg rounded-md py-2 px-4 z-50">
         <p className="cursor-pointer text-[#0f172a] hover:text-[#b8860b] transition-colors">My Account</p>
         <p className="cursor-pointer text-[#0f172a] hover:text-[#b8860b] transition-colors">Orders</p>
         <p className="cursor-pointer text-[#0f172a] hover:text-[#b8860b] transition-colors">Logout</p>
        </div>
       </div>

        <button className="lg:hidden p-2 rounded-md hover:bg-[#b8860b]/20 transition-colors duration-300" onClick={() => setVisible(true)}>
         <Menu size={24} className="text-[#0f172a] hover:text-[#b8860b]" />
        </button>
       </div>

       <div className={`fixed inset-0 bg-black/30 z-40 transition-opacity duration-300 ${visible ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`} onClick={() => setVisible(false)} />

      <div className={`fixed top-0 right-0 h-full w-72 bg-[#ffcb63] z-50 flex flex-col shadow-xl transition-transform duration-300 ${visible ? 'translate-x-0' : 'translate-x-full'}`}>

       <div className="flex items-center justify-between px-6 py-5 border-b border-[#b8860b]/30">
        <img src={assets.Logo} alt="Logo" className='w-24' />
        
        <button onClick={() => setVisible(false)} className="p-2 rounded-full hover:bg-[#b8860b]/20 transition-colors">
         <X size={22} className="text-[#0f172a]" />
        </button>
        </div>

        <div className="mx-4 mt-4 flex items-center gap-2 px-4 py-2 bg-white/40 rounded-full border border-white/40 shadow-sm focus-within:ring-2 focus-within:ring-[#b8860b] transition-all duration-300">
         <Search size={16} className="text-[#0f172a]/70" />
         <input type="text" placeholder="Search products..." className="bg-transparent outline-none text-sm text-[#0f172a] placeholder:text-[#0f172a]/50 w-full" />
        </div>

        <ul className="flex flex-col mt-4 px-4">
         {[['/', 'HOME'], ['/collection', 'COLLECTION'], ['/about', 'ABOUT'], ['/contact', 'CONTACT']].map(([path, label]) => (
          <NavLink key={path} to={path} onClick={() => setVisible(false)} className={({ isActive }) => `flex items-center justify-between py-4 px-2 border-b border-[#b8860b]/20 text-sm font-medium transition-colors ${isActive ? 'text-[#b8860b]' : 'text-[#0f172a] hover:text-[#b8860b]'}`}>
           {label}
           <ChevronRight size={16} className="opacity-50" />
          </NavLink>
         ))}
        </ul>

        <div className="mt-auto px-6 pb-8 flex flex-col gap-3">
         <p className="text-xs text-[#0f172a]/50 uppercase tracking-wider mb-1">Account</p>
         <Link to="/login" onClick={() => setVisible(false)} className="flex items-center gap-3 text-sm text-[#0f172a] hover:text-[#b8860b] transition-colors">
          <UserRound size={18} /> My Account
         </Link>

         <Link to="/orders" onClick={() => setVisible(false)} className="flex items-center gap-3 text-sm text-[#0f172a] hover:text-[#b8860b] transition-colors">
          <ChevronRight size={18} /> Orders
         </Link>
         
         <button className="mt-2 w-full py-2 rounded-full bg-[#b8860b] text-white text-sm font-medium hover:bg-[#a07720] transition-colors">
          Logout
         </button>
        </div>

      </div>
    </div>
  )
}

export default Navbar