import { collectionProducts } from "../Data/CollectionData"
import { Package, CheckCircle2, Truck, Clock } from "lucide-react"

const Orders = () => {
 const orders = [
  {
   id: 'ORD-9823-XYZ',
   date: 'March 08, 2026',
   total: collectionProducts[1].price + collectionProducts[3].price,
   status: 'Delivered',
   items: [
    { ...collectionProducts[1], quantity: 1 },
    { ...collectionProducts[3], quantity: 1 }
    ]
  },
  
  {
   id: 'ORD-8711-ABC',
   date: 'March 08, 2026',
   total: collectionProducts[5].price,
   status: 'In Transit',
   items: [
    { ...collectionProducts[5], quantity: 1 }
    ]
   }
  ];

  const getStatusConfig = (status) => {
   switch (status) {
    case 'Delivered':
     return { icon: <CheckCircle2 size={16} />, color: 'text-green-600', bg: 'bg-green-100', border: 'border-green-200' };
    case 'In Transit':
     return { icon: <Truck size={16} />, color: 'text-amber-600', bg: 'bg-amber-100', border: 'border-amber-200' };
    default:
     return { icon: <Clock size={16} />, color: 'text-[var(--ink)]', bg: 'bg-[var(--gold)]/20', border: 'border-[var(--gold)]/30' };
    }
  };

  return (
   <div className="pt-24 pb-20 px-4 sm:px-8 lg:px-12 max-w-7xl mx-auto min-h-screen">
    <div className="flex items-center gap-4 mb-10 pb-6 border-b border-[var(--gold-light)]/30">
    <div className="w-12 h-12 bg-white/40 backdrop-blur-sm rounded-full flex items-center justify-center border border-[var(--gold)]/30 shadow-sm text-[var(--ink)]">
     <Package size={24} />
    </div>
    <div>
     <h1 className="text-3xl sm:text-4xl font-serif text-[var(--ink)]">Order History</h1>
     <p className="text-[var(--ink)]/60 text-sm mt-1">Track and manage your recent purchases</p>
    </div>
   </div>
   
   {orders.length === 0 ? (
    <div className="bg-white/30 backdrop-blur-xl rounded-3xl p-16 text-center border border-[var(--gold-light)]/40 shadow-sm min-h-[400px] flex flex-col items-center justify-center">
     <Package size={64} className="text-[var(--gold)]/50 mb-6" />
     <h2 className="text-2xl font-serif text-[var(--ink)] mb-3">No orders yet</h2>
     <p className="text-[var(--ink)]/60 mb-8 max-w-md mx-auto">You haven't placed any orders. Start exploring our heritage collection today.</p>
     <a href="/collection" className="px-8 py-3.5 bg-[var(--ink)] text-[var(--cream)] rounded-full font-medium tracking-wide hover:bg-[var(--gold-dark)] transition-colors inline-block shadow-lg">Start Shopping</a>
    </div>

    ) : (
    <div className="space-y-8">
     {orders.map((order) => {
      const statusConfig = getStatusConfig(order.status);
      
      return (
      <div key={order.id} className="bg-white/40 backdrop-blur-xl rounded-3xl overflow-hidden border border-[var(--gold-light)]/40 shadow-sm hover:shadow-md transition-shadow relative">
       <div className="bg-white/50 px-6 sm:px-8 py-4 border-b border-[var(--gold)]/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
       <div>
        <p className="text-xs font-bold tracking-[0.2em] uppercase text-[var(--gold-dark)] mb-1">Order #{order.id}</p>
        <p className="text-sm text-[var(--ink)]/60">Placed on {order.date}</p>
       </div>
       <div className="flex items-center gap-4">
        <div className="text-right hidden sm:block">
         <p className="text-xs text-[var(--ink)]/60 uppercase tracking-widest mb-0.5">Total</p>
         <p className="font-serif text-[var(--ink)]">NPR {order.total.toLocaleString()}</p>
        </div>
        <div className={`px-4 py-1.5 rounded-full flex items-center gap-2 border ${statusConfig.bg} ${statusConfig.border} ${statusConfig.color} text-sm font-medium`}>
         {statusConfig.icon}
         {order.status}
        </div>
       </div>
      </div>
      
      <div className="p-6 sm:px-8">
       <div className="space-y-6">
        {order.items.map((item, idx) => (
        <div key={idx} className="flex items-center gap-6">
        <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-xl overflow-hidden bg-[var(--gold)]/10 flex-shrink-0">
        {item.image ? (
         <img src={item.image} alt={item.name} className="w-full h-full object-cover object-top" />
         ) : (
         <div className="w-full h-full flex items-center justify-center text-[var(--gold)]/40"><Package size={20} /></div>
        )}
      </div>
      
      <div className="flex-1">
       <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-[var(--gold-dark)] mb-1">{item.category}</p>
       <h4 className="text-lg font-serif text-[var(--ink)] mb-1">{item.name}</h4>
       <div className="flex flex-wrap items-center gap-x-6 gap-y-1 text-sm text-[var(--ink)]/60">
       <p>Qty: <span className="font-medium text-[var(--ink)]">{item.quantity}</span></p>
       <p>NPR {item.price.toLocaleString()}</p>
      </div>
     </div>
     
     <div className="hidden md:block">
      <button className="px-4 py-2 text-sm font-medium text-[var(--ink)] bg-white/60 border border-[var(--gold)]/30 rounded-lg hover:bg-[var(--gold)]/10 hover:border-[var(--gold)]/50 transition-colors">Buy Again</button>
     </div>
     </div>
    ))}
    </div>
    </div>
    </div>
  )})}
   </div>
  )}
 </div>
  )
}

export default Orders