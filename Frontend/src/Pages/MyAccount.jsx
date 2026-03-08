import { useNavigate } from "react-router-dom";
import { User, Shield, LogOut } from "lucide-react";

const MyAccount = () => {
 const navigate = useNavigate();

 const handleLogout = () => {
  localStorage.removeItem('auth_token');
  localStorage.removeItem('user_name');
  navigate('/login');
 }

 const userName = localStorage.getItem('user_name') || 'Guest User';
 const email = 'user@example.com'; 

 return (
 <div className="pt-24 pb-20 px-4 sm:px-8 lg:px-12 max-w-7xl mx-auto min-h-[80vh]">
  <div className="flex items-center gap-4 mb-10 pb-6 border-b border-[var(--gold-light)]/30">
  <div className="w-12 h-12 bg-white/40 backdrop-blur-sm rounded-full flex items-center justify-center border border-[var(--gold)]/30 shadow-sm text-[var(--ink)]">
   <User size={24} />
  </div>
  <div>
   <h1 className="text-3xl sm:text-4xl font-serif text-[var(--ink)]">My Account</h1>
   <p className="text-[var(--ink)]/60 text-sm mt-1">Manage your profile and preferences</p>
  </div>
 </div>

 <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
 <div className="lg:col-span-1">
  <div className="bg-white/40 backdrop-blur-xl rounded-3xl p-8 border border-[var(--gold-light)]/40 shadow-sm text-center">
   <div className="w-24 h-24 mx-auto bg-gradient-to-tr from-[var(--gold-dark)] to-[var(--gold-light)] rounded-full flex items-center justify-center text-[var(--cream)] text-3xl font-serif mb-4 shadow-lg">{userName.charAt(0).toUpperCase()}</div>
    <h2 className="text-xl font-serif text-[var(--ink)] mb-1">{userName}</h2>
    <p className="text-[var(--ink)]/60 text-sm mb-6">{email}</p>
    <button onClick={handleLogout} className="w-full flex items-center justify-center gap-2 px-4 py-2.5 bg-red-50 text-red-600 rounded-xl hover:bg-red-100 transition-colors border border-red-100 font-medium">
     <LogOut size={18} />Sign Out</button>
   </div>
  </div>
  
  <div className="md:col-span-2 space-y-6">
   <div className="bg-white/40 backdrop-blur-xl rounded-3xl p-8 border border-[var(--gold-light)]/40 shadow-sm">
    <h3 className="text-xl font-serif text-[var(--ink)] mb-6 flex items-center gap-2">
    <User size={20} className="text-[var(--gold-dark)]" />Personal Information</h3>
    
    <div className="space-y-4">
     <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
     <div>
      <label className="block text-xs font-bold tracking-[0.1em] uppercase text-[var(--ink)]/50 mb-1">Full Name</label>
      <p className="text-[var(--ink)] font-medium bg-white/50 px-4 py-2.5 rounded-lg border border-[var(--gold)]/10">{userName}</p>
     </div>
     
     <div>
      <label className="block text-xs font-bold tracking-[0.1em] uppercase text-[var(--ink)]/50 mb-1">Email Address</label>
      <p className="text-[var(--ink)] font-medium bg-white/50 px-4 py-2.5 rounded-lg border border-[var(--gold)]/10">{email}</p>
     </div>
    </div>
   </div>
  </div>

  <div className="bg-white/40 backdrop-blur-xl rounded-3xl p-8 border border-[var(--gold-light)]/40 shadow-sm">
   <h3 className="text-xl font-serif text-[var(--ink)] mb-6 flex items-center gap-2">
    <Shield size={20} className="text-[var(--gold-dark)]" />Security</h3>
    <div className="space-y-4">
     <button className="px-6 py-2.5 bg-[var(--ink)] text-[var(--cream)] rounded-xl font-medium tracking-wide hover:bg-[var(--gold-dark)] transition-colors shadow-md text-sm">Change Password</button>
    </div>
   </div>
  </div>
 </div>
</div>
)
}

export default MyAccount