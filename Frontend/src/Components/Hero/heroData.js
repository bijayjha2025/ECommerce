import { assets } from '../../assets/assets';

export const BRAND = "WearNepal";

export const STATS = [
  ['50+',  'Artisan weavers'],
  ['8+',   'Heritage crafts'],
  ['100%', 'Ethically made'],
  ['Free', 'Shipping in Nepal'],
  ['5-day', 'Easy returns'],
  ['200+', 'Happy customers'],
];

export const products = [
  {
    id: 1,
    name: "Dhaka Topi",
    subtitle: "Hand-woven masterpiece",
    category: "Heritage Weaves",
    price: "NPR 2,450",
    tag: "New Arrival",
    image: assets.HomeCard1,    
    imageBg: "linear-gradient(160deg, #7c3f00 0%, #b8860b 60%, #e8c36a 100%)",
    cardBg: "#1a0a00",
    textColor: "#fff8e7",
    mutedColor: "rgba(255,203,99,0.55)",
  },
  {
    id: 2,
    name: "Daura Suruwal",
    subtitle: "Ultra-fine Himalayan wool",
    category: "Traditional Dress",
    price: "NPR 12,500",
    tag: "Bestseller",
    image: assets.HomeCard2,    
    imageBg: "linear-gradient(160deg, #f5e6c8 0%, #eedcaa 60%, #d4a843 100%)",
    cardBg: "#0f172a",
    textColor: "#fff8e7",
    mutedColor: "rgba(255,203,99,0.5)",
  },
  {
    id: 3,
    name: "Gurung Dress",
    subtitle: "Gurung traditional identity",
    category: "Culture Carrier",
    price: "NPR 12,200",
    tag: "Limited Edition",
    image: assets.HomeCard3,   
    imageBg: "linear-gradient(160deg, #3d0000 0%, #8b1a1a 60%, #c94040 100%)",
    cardBg: "#fcd397",
    textColor: "#1a0a00",
    mutedColor: "rgba(30,10,0,0.42)",
  },
  {
    id: 4,
    name: "Suit",
    subtitle: "Evergreen attraction",
    category: "Modern Collection",
    price: "NPR 13,600",
    tag: "Exclusive",
    image: assets.HomeCard4,
    imageBg: "linear-gradient(160deg, #2c1a0e 0%, #5c3a1e 60%, #8b6343 100%)",
    cardBg: "#ebf9fa",
    textColor: "#1a0a00",
    mutedColor: "rgba(30,10,0,0.4)",
  },
];

export const StackRotations = [-15, -6, 3, 12];

export const StackOffsets = [
  { x: -32, y:  22 },
  { x: -12, y:  10 },
  { x:   8, y:  -5 },
  { x:  28, y: -18 },
];

