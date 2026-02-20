import { useState } from 'react';
import { ArrowRight } from 'lucide-react';

export default function NewsletterSignup({ className = "" }) {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [focused, setFocused] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = () => {
    if (!email) { setError('Email is required');
      return;
    }
    
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { setError('Please enter a valid email address');
      return;
    }
    
    setError('');
    setSubmitted(true);
  };

  const handleKey = (e) => {
    if (e.key === 'Enter') handleSubmit();
  };

  return (
   <div className={`relative overflow-hidden bg-[#4f4433] py-16 px-6 ${className}`}>
    <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-[#c9a227]" />
     <div className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#c9a227]" />

     <p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-serif font-bold text-[clamp(60px,12vw,160px)]
      tracking-[0.1em] text-[#c9a227]/[0.05] select-none whitespace-nowrap pointer-events-none">WEARNEPAL</p>

     <div className="relative z-10 max-w-xl mx-auto text-center">
      <h2 className="font-serif text-2xl md:text-3xl text-[#f5e9d6] mb-4">Join our <em className="italic text-[#c9a227]">Handmade Heritage</em></h2>

      {submitted ? (
       <p className="font-serif text-[#d4af37] italic">Welcome to WearNepal. Watch your inbox.</p>
        ) : (

       <>
        <div className={`flex items-stretch max-w-md mx-auto border transition-colors duration-200 ${ focused ? 'border-[#c9a227]' : 'border-[#c9a227]/40'}` } >
         <input type="email" value={email} onChange={(e) => { setEmail(e.target.value); if (error) setError(''); }} onFocus={() => setFocused(true)} onBlur={() => setFocused(false)} onKeyDown={handleKey} placeholder="Your email address" className="flex-1 bg-transparent px-4 py-3 text-sm text-[#f5e9d6] placeholder:text-[#d9cbb3]/50 outline-none" />
         
         <button onClick={handleSubmit} className="px-5 bg-[#c9a227] text-[#1a0a00] text-xs tracking-widest uppercase flex items-center gap-2 hover:bg-[#b8921f] transition-colors">Subscribe <ArrowRight size={14} /></button>
        </div>

        {error && <p className="mt-3 text-xs  text-[#faccc5]">{error}</p>}
        <p className="mt-3 text-xs text-[#d9cbb3]/70">No spam. Unsubscribe anytime.</p>
       </>
      
      )}
      </div>
    </div>
  );
}