import { Link } from 'react-router-dom';
import { Instagram, Facebook, Music2, Mail, Phone, MapPin } from 'lucide-react';

const QuickLinks = {
 shop: [
    { label: 'New Arrivals',      to: '/collection' },
    { label: 'Heritage Weaves',   to: '/collection' },
    { label: 'Festive Wear',      to: '/collection' },
    { label: 'Modern Collection', to: '/collection' },
    { label: 'Shawls & Wraps',   to: '/collection' },
  ],
  help: [
    { label: 'Track Order',        to: '/orders' },
    { label: 'Returns & Exchange', to: '/contact' },
    { label: 'Size Guide',         to: '/contact' },
    { label: 'FAQ',                to: '/contact' },
  ],
};

const SocialHandles = [
  { icon: Instagram, label: 'Instagram', href: 'https://instagram.com' },
  { icon: Facebook,  label: 'Facebook',  href: 'https://facebook.com' },
  { icon: Music2,    label: 'TikTok',    href: 'https://tiktok.com' },
];

const Contacts = [
  { icon: Mail,   text: 'wearnepal@gmail.com' },
  { icon: Phone,  text: '+977 98XXXXXXXX' },
  { icon: MapPin, text: 'Itahari, Sunsari' },
];

export default function Footer() {
 return (
  <footer className="bg-[#1a0a00] mt-16">
  <div className="h-[1.5px] bg-[#b8860b]" />
  
  <div className="max-w-[1200px] mx-auto px-6 py-10 grid grid-cols-2 sm:grid-cols-4 gap-8">
   <div className="col-span-2 sm:col-span-1">
    <p className="font-serif text-[20px] text-[#fff8e7] mb-0.5">Wear<em className="italic text-[#fad6a5]">Nepal</em></p>
    <p className="font-serif text-[8px] tracking-[0.28em] uppercase text-[#ffb957]/90 mb-4">Crafted with soul</p>
    
    <div className="flex items-center gap-2 mb-4">
     {SocialHandles.map(({ icon: Icon, label, href }) => (
      <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label} className="w-7 h-7 rounded-full border border-[#b8860b] flex items-center justify-center text-[#fff8e7] hover:border-[#fff8e7] hover:text-[#ffcb63] transition-all duration-200">
       <Icon size={12} />
      </a>
      ))}
    </div>
    
    <div className="flex flex-col gap-2">
     {Contacts.map(({ icon: Icon, text }) => (
      <div key={text} className="flex items-center gap-2">
       <Icon size={10} className="text-[#b8860b] flex-none" />
       <span className="font-serif text-[10px] text-[#faecd7]/70">{text}</span>
      </div>
      ))}
     </div>
    </div>

    <div>
     <p className="font-serif text-[8px] tracking-[0.35em] uppercase text-[#ffb957]/90 mb-3">Shop</p>
     <ul className="flex flex-col gap-2">
      {QuickLinks.shop.map(l => (
      <li key={l.label}>
       <Link to={l.to} className="font-serif text-[11px] text-[#faecd7]/70 hover:text-[#ffcb63] transition-colors duration-200">
        {l.label}
       </Link>
      </li>
      ))}
     </ul>
    </div>
    
    <div>
     <p className="font-serif text-[8px] tracking-[0.35em] uppercase text-[#ffb957]/90 mb-3">Help</p>
     <ul className="flex flex-col gap-2">
      {QuickLinks.help.map(l => (
       <li key={l.label}>
        <Link to={l.to} className="font-serif text-[11px] text-[#faecd7]/70 hover:text-[#ffcb63] transition-colors duration-200">
         {l.label}
        </Link>
       </li>
      ))}
     </ul>
     </div>

     <div>
      <p className="font-serif text-[8px] tracking-[0.35em] uppercase text-[#ffb957]/90 mb-3">Our Craft</p>
      <ul className="flex flex-col gap-2">
        {['Woven in Palpa', 'Spun in Mustang', 'Dyed in Bhaktapur', 'Finished in Itahari'].map(r => (
          <li key={r} className="font-serif text-[10px] italic text-[#faecd7]/70">{r}</li>
        ))}
      </ul>
     </div>
    </div>

    <p className="font-serif text-[9px] tracking-[0.15em] text-[#faecd7]/70 text-center">© {new Date().getFullYear()} WearNepal. All rights reserved.</p>
  </footer>
  );
}