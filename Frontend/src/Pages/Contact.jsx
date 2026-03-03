import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send  } from "lucide-react";

const Contact = () => {
 const [formData, setFormData] = useState({ name: "", email: "", message: "" });
 const [isSubmitted, setIsSubmitted] = useState(false);

 const handleSubmit = (e) => {
  e.preventDefault();
  if(formData.name && formData.email && formData.message) {
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
                     setFormData({ name: "", email: "", message: "" });
  }};

  return (
   <div className="pt-24 pb-20 px-4 sm:px-8 lg:px-12 max-w-7xl mx-auto min-h-screen">
    <div className="text-center mb-16 lg:mb-20">
     <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-[var(--ink)] mb-4 tracking-tight">Get in Touch</h1>
     
     <div className="w-24 h-1 bg-gradient-to-r from-[var(--gold-dark)] to-[var(--gold-light)] mx-auto rounded-full mb-6 relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-[var(--gold)] rounded-full"></div>
     </div>
     <p className="text-[var(--ink)]/70 max-w-xl mx-auto text-base sm:text-lg">Whether you have a question about a piece, want to discuss a custom order, or simply wish to say hello, we are here for you.</p>
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
     <div className="space-y-8">
      <div className="bg-white/20 backdrop-blur-md rounded-3xl p-8 sm:p-10 border border-[var(--gold-light)]/40 shadow-[0_8px_32px_0_rgba(184,134,11,0.1)] relative overflow-hidden h-full">
      <div className="absolute -top-24 -right-24 w-64 h-64 bg-gradient-to-bl from-[var(--gold)]/20 to-transparent rounded-full blur-2xl"></div>
      <h3 className="text-2xl font-serif text-[var(--ink)] mb-8 pb-4 border-b border-[var(--gold)]/20">Our Atelier</h3>
      
      <div className="space-y-8 relative z-10">
       <div className="flex items-start gap-5">
        <div className="w-12 h-12 flex items-center justify-center flex-shrink-0 bg-white/40 rounded-full border border-[var(--gold)]/30 text-[var(--gold-dark)] shadow-sm">
         <MapPin size={22} />
        </div>
        
        <div>
         <h4 className="font-semibold text-[var(--ink)] text-lg mb-1">Visit Us</h4>
         <p className="text-[var(--ink)]/70 leading-relaxed text-sm lg:text-base">123 Heritage Lane, Craft District,<br />Itahari, Nepal 56700</p>
        </div>
       </div>

       <div className="flex items-start gap-5">
        <div className="w-12 h-12 flex items-center justify-center flex-shrink-0 bg-white/40 rounded-full border border-[var(--gold)]/30 text-[var(--gold-dark)] shadow-sm">
         <Phone size={22} />
        </div>
        
        <div>
         <h4 className="font-semibold text-[var(--ink)] text-lg mb-1">Call Us</h4>
         <p className="text-[var(--ink)]/70 text-sm lg:text-base">+977 (025) 412XXX</p>
         <p className="text-[var(--ink)]/70 text-sm lg:text-base">+977 9800000000</p>
        </div>
       </div>

       <div className="flex items-start gap-5">
        <div className="w-12 h-12 flex items-center justify-center flex-shrink-0 bg-white/40 rounded-full border border-[var(--gold)]/30 text-[var(--gold-dark)] shadow-sm">
         <Mail size={22} />
        </div>
        <div>
         <h4 className="font-semibold text-[var(--ink)] text-lg mb-1">Email Us</h4>
         <p className="text-[var(--ink)]/70 text-sm lg:text-base">inquiries@wearnepal.com</p>
         <p className="text-[var(--ink)]/70 text-sm lg:text-base">support@wearnepal.com</p>
        </div>
        </div>

        <div className="flex items-start gap-5">
         <div className="w-12 h-12 flex items-center justify-center flex-shrink-0 bg-white/40 rounded-full border border-[var(--gold)]/30 text-[var(--gold-dark)] shadow-sm">
          <Clock size={22} />
         </div>
         
         <div>
          <h4 className="font-semibold text-[var(--ink)] text-lg mb-1">Opening Hours</h4>
           <p className="text-[var(--ink)]/70 text-sm lg:text-base">Sunday - Friday</p>
           <p className="text-[var(--ink)]/70 text-sm lg:text-base">10:00 AM - 6:00 PM</p>
         </div>
        </div>
       </div>
      </div>
     </div>

     <div>
      <div className="bg-white/30 backdrop-blur-xl rounded-3xl p-8 sm:p-10 border border-[var(--gold-light)]/50 shadow-[0_12px_48px_0_rgba(184,134,11,0.15)] relative">
      <div className="absolute -top-3 left-8 px-4 py-1 bg-[var(--gold-dark)] text-[#fff8e7] text-xs font-bold tracking-[0.2em] uppercase rounded-full shadow-md">Send a Message</div>

      {isSubmitted ? (
       <div className="h-full min-h-[400px] flex flex-col items-center justify-center text-center animate-in fade-in zoom-in duration-500">
        <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mb-6"><CheckCircle2 size={40} className="text-green-600" /></div>
        <h3 className="text-2xl font-serif text-[var(--ink)] mb-2">Message Sent!</h3>
        <p className="text-[var(--ink)]/70">Thank you for reaching out. An artisan will get back to you shortly.</p>
       </div>
       ) : (
        <form onSubmit={handleSubmit} className="space-y-6 mt-4">
         <div className="space-y-2">
          <label className="text-sm font-medium text-[var(--ink)]/80 ml-1">Your Name</label>
          <input type="text" required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} placeholder="Albert Einstein" className="w-full px-5 py-3.5 bg-white/50 border border-[var(--gold)]/30 rounded-xl text-[var(--ink)] placeholder:text-[var(--ink)]/30 focus:outline-none focus:ring-2 focus:ring-[var(--gold)] focus:bg-white/80 transition-all shadow-sm" />
         </div>

         <div className="space-y-2">
          <label className="text-sm font-medium text-[var(--ink)]/80 ml-1">Email Address</label>
          <input type="email" required value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} placeholder="albert@example.com" className="w-full px-5 py-3.5 bg-white/50 border border-[var(--gold)]/30 rounded-xl text-[var(--ink)] placeholder:text-[var(--ink)]/30 focus:outline-none focus:ring-2 focus:ring-[var(--gold)] focus:bg-white/80 transition-all shadow-sm" />
         </div>

         <div className="space-y-2">
          <label className="text-sm font-medium text-[var(--ink)]/80 ml-1">Your Message</label>
          <textarea required rows="5" value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} placeholder="How can we help you today?" className="w-full px-5 py-3.5 bg-white/50 border border-[var(--gold)]/30 rounded-xl text-[var(--ink)] placeholder:text-[var(--ink)]/30 focus:outline-none focus:ring-2 focus:ring-[var(--gold)] focus:bg-white/80 transition-all shadow-sm resize-none"></textarea>
         </div>

         <button type="submit" className="w-full py-4 bg-[var(--ink)] text-[var(--cream)] rounded-xl font-medium tracking-wide flex items-center justify-center gap-2 hover:bg-[var(--gold-dark)] focus:ring-4 focus:ring-[var(--gold)]/30 transition-all duration-300 group shadow-lg">Send Inquiry<Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
         </button>
        </form>
        )}
       </div>
      </div>

    </div>
   </div>
  )
}

export default Contact