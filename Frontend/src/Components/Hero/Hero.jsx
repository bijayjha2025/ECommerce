import { useState, useRef } from "react";
import { products, StackOffsets, StackRotations } from "./heroData";
import { HeroBackground, HeroCopy, ScrollHint, ProductCard, StackDots } from "./HeroComponent";

export default function Hero() {
  const [order, setOrder] = useState([0, 1, 2, 3]);
  const [hovered, setHovered] = useState(false);
  const [animating, setAnimating] = useState(false);
  const dragStart = useRef(null);

  const topProduct = products[order[order.length - 1]];

  const cycleFront = () => {
    if (animating) return;
    setAnimating(true);
    setTimeout(() => setAnimating(false), 500);
    setOrder(prev => {
      const next  = [...prev];
      const front = next.pop();
      next.unshift(front);
      return next;
    });
  };

  const onMouseDown = (e) => {
    dragStart.current = { x: e.clientX, y: e.clientY };
  };

  const onMouseUp = (e) => {
    if (!dragStart.current) return;
    const dist = Math.hypot(e.clientX - dragStart.current.x, e.clientY - dragStart.current.y);
    if (dist < 8) cycleFront();
    dragStart.current = null;
  };

  return (
   <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden px-4 pt-8 pb-20 font-serif">
    <HeroBackground />

    <div className="relative z-10 flex items-center justify-center flex-wrap w-full max-w-[1120px] gap-[clamp(2.5rem,6vw,8rem)]">
     <HeroCopy />

      <div className="relative flex-none" style={{ width:  'clamp(260px, 34vw, 340px)', height: 'clamp(390px, 52vw, 510px)', }}>
       <p className="absolute -top-9 left-1/2 -translate-x-1/2 whitespace-nowrap text-[8.5px] tracking-[0.28em] text-[#b8860b]/55 uppercase">Click to explore ↓</p>

       {order.map((productIdx, stackPos) => {
        const isTop = stackPos === order.length - 1;
          return (
            <ProductCard key={products[productIdx].id}
                product={products[productIdx]}
                stackPos={stackPos}
                rotation={StackRotations[stackPos]}
                offset={StackOffsets[stackPos]}
                isTop={isTop}
                hovered={isTop && hovered}
                onMouseDown={isTop ? onMouseDown            : undefined}
                onMouseUp={isTop   ? onMouseUp              : undefined}
                onMouseEnter={isTop ? () => setHovered(true)  : undefined}
                onMouseLeave={isTop ? () => setHovered(false) : undefined} />
            );
          })}

          <StackDots products={products} activeId={topProduct.id} />
        </div>
      </div>

      <ScrollHint />
    </section>
  );
}