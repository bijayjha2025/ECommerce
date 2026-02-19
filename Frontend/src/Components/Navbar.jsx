import React from 'react';
import { assets } from '../assets/assets';
import { Link, NavLink } from 'react-router-dom';
import { Search, ShoppingCart, UserRound } from 'lucide-react';

const Navbar = () => {
  return (

    <div className='flex items-center justify-between py-5'>
     <img src={assets.Logo} alt="Logo" className='w-32 sm:w-36 md:w-40' />
     
     <div className="flex items-center gap-2 px-4 py-2 bg-white/30 backdrop-blur-md rounded-full border border-white/40 shadow-sm focus-within:ring-2 focus-within:ring-[#b8860b] transition-all duration-300">

      <Search size={18} className="text-[#0f172a]/70" />
      <input type="text" placeholder="Search products..."className="bg-transparent outline-none text-sm text-[#0f172a] placeholder:text-[#0f172a]/50 w-40 focus:w-56 transition-all duration-300" />

     </div>

      <ul className='sm:flex gap-5 text-sm text-gray-700 font-medium'>
        
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

      <div className='flex items-center gap-4'>

       <Link to="/cart" className='relative'>
       <ShoppingCart size={20} className='text-[#0f172a]' />
        <span className='absolute -bottom-2 -right-2 bg-[#b8860b] text-white text-xs rounded-full w-4 h-4 flex items-center justify-center'>3</span>
      </Link>

       <Link to="/login" className="px-3 py-2 flex items-center justify-center rounded-full hover:bg-[#b8860b]/20 transition-colors duration-300">
        <UserRound size={20} className="text-[#0f172a] hover:text-[#f7edda]" />
       </Link>

      </div>
       

    </div>
  )
}

export default Navbar