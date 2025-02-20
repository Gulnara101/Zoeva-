import img9 from "../Images/bestSellerPhotos/9.webp";
import img10 from "../Images/bestSellerPhotos/10.webp";
import im11 from "../Images/bestSellerPhotos/11.webp";
import img12 from "../Images/bestSellerPhotos/12.webp";
import img13 from "../Images/bestSellerPhotos/13.webp";
import img14 from "../Images/bestSellerPhotos/14.webp";
import img15 from "../Images/bestSellerPhotos/15.webp";
import img16 from "../Images/bestSellerPhotos/16.webp";
import mini1 from "../Images/bestSellerHovers/PP003_MINI_SHADE_CARRIE_64x.png";
import mini2 from "../Images/bestSellerHovers/PP004_MINI_SHADE_MELANIE_64x.png";
import mini3 from "../Images/bestSellerHovers/PP001_MINI_SHADE_LEA_64x.png";
import mini4 from "../Images/bestSellerHovers/PP002_MINI_SHADE_VANESSA_64x.png";
import mini5 from "../Images/bestSellerHovers/PP005_MINI_SHADE_OLIVIA_64x.png";
import mini6 from "../Images/bestSellerHovers/PP006_MINI_SHADE_EMMA_64x.png";
import mini7 from "../Images/bestSellerHovers/VLEP017_EN_MINI_SHADE_METALLIC_GOLDEN_BRONZE_64x.png";
import mini8 from "../Images/bestSellerHovers/zoeva-velvet-love-eyeliner-pencil-metallic-bronze-shade-picker-small_4bdfd7fa-580e-480b-a091-7430aee8a9b2_64x.jpg";
import mini9 from "../Images/bestSellerHovers/zoeva-velvet-love-eyeliner-pencil-metallic-cocoa-shade-picker-small_d821dd6e-5b7e-4b24-8599-0daa1a12b34e_64x.jpg";
import mini10 from "../Images/bestSellerHovers/VLEP018_EN_MINI_SHADE_PERFECT_PLUM_64x.png";
import mini11 from "../Images/bestSellerHovers/zoeva-velvet-love-eyeliner-pencil-metallic-graphite-shade-picker-small_8c9b1583-14bc-41e7-804e-977909a16a42_64x.jpg";
import mini12 from "../Images/bestSellerHovers/zoeva-velvet-love-eyeliner-pencil-metallic-hazel-shade-picker-small_1f7bf1e5-aaf3-4489-a8e2-870cfd1789ce_64x.jpg";
import mini13 from "../Images/bestSellerHovers/zoeva-velvet-love-eyeliner-pencil-metallic-khaki-shade-picker-small_6c48470d-4ad2-45ac-898c-99bb67ec30a4_64x.jpg";
import mini14 from "../Images/bestSellerHovers/zoeva-velvet-love-eyeliner-pencil-metallic-marine-blue-shade-picker-small_e6c0c62e-f74a-4227-9ab7-bbc22a4d3bd1_64x.jpg";
import mini15 from "../Images/bestSellerHovers/zoeva-velvet-love-eyeliner-pencil-metallic-hazel-shade-picker-small_1f7bf1e5-aaf3-4489-a8e2-870cfd1789ce_64x.jpg";
import mini16 from "../Images/bestSellerHovers/VLEP020_EN_MINI_SHADE_METALLIC_PEARL_64x.png";
import mini17 from "../Images/bestSellerHovers/zoeva-velvet-love-eyeliner-metallic-smoky-topaz-picker-en_64x.jpg";
import mini18 from "../Images/bestSellerHovers/zoeva-velvet-love-eyeliner-metallic-taupe-picker-en_64x.jpg";
import mini24 from "../Images/bestSellerHovers/VLEP019_EN_MINI_SHADE_METALLIC_SMOKY_GREY_64x.png";
import mini25 from "../Images/bestSellerHovers/Shade_Picker-40x25_Dark_Brown_40x25_819ef546-e350-4091-bbf6-60b90bab2f7e_64x.jpg";
import mini26 from "../Images/bestSellerHovers/Shade_Picker-40x25_Mid_Brown_40x25_9a6c4472-e64f-4b35-b8d8-7b3c0397d942_64x.jpg";

const bestSeller = [
  {
    id: 1,
    image: img9,
    rating: "4.5 (702)",
    title: "Ooh la Lash Length & Lift Tubing Mascara",
    price: "€22,00",
    btn: "ADD TO CART",
    color: "Lengthening and lifting tubing mascara",
    type: "Bestseller",
  },
  {
    id: 2,
    image: img10,
    rating: "4.5 (2851)",
    title: "Pout Perfect Lipstick Pencil",
    price: "€18,00",
    btn: "SELECT SHADE",
    color: "Venessa",
    ttl: "Venessa",
    img: [mini1, mini2, mini3, mini4, mini5, mini6],
    mode: "Nude Beige",
    type: "Bestseller",
  },
  {
    id: 3,
    image: im11,
    rating: "4.6 (10987)",
    title: "Velvet Love Eyeliner Pencil",
    price: "€16,00",
    btn: "SELECT SHADE",
    color: "Eyeliner pencil",
    ttl: "Metallic Khaki",
    img: [
      mini7,
      mini8,
      mini9,
      mini10,
      mini11,
      mini12,
      mini13,
      mini14,
      mini15,
      mini16,
      mini17,
      mini18,
      { type: "color", value: "#000" },
      { type: "color", value: "#7A243B" },
      { type: "color", value: "#61382A" },
      { type: "color", value: "#223A2F" },
      { type: "color", value: "#222047" },
      mini24,
    ],
    
    mode: "Medium Green Shimmer",
    type: "Bestseller",
  },
  {
    id: 4,
    image: img12,
    rating: "4.9 (304)",
    title: "104 Foundation Buffer Brush",
    price: "€22,50",
    btn: "SELECT SHADE",
    color: "Vegan Foundation Brush",
    ttl: "Black",
    img: [
      { type: "color", value: "black" },
      mini25,
      mini26,
    ],
    mode: "Classic Black",
    type: "Bestseller",
  },
  {
    id: 5,
    image: img13,
    rating: "4.8 (438)",
    title: "Velvet Love Eyeshadow Quad Palette",
    price: "28,00",
    btn: "ADD TO CART",
    color: "Eyeshadow palette with 4 shades",
  },
  {
    id: 6,
    image: img14,
    rating: "4.9 (81)",
    title: "The Complete Brush Set",
    price: "110,00",
    btn: "ADD TO CART",
    color: "Vegan Brush Set",
    type: "Bestseller",
  },
  {
    id: 7,
    image: img15,
    rating: "4.8 (250)",
    title: "Pout Plumper Volumizing Lipgloss",
    price: "22,00",
    btn: "ADD TO CART",
    color: "Plumping & volumizing lip gloss",
  },
  {
    id: 8,
    image: img16,
    rating: "4.3 (190)",
    title: "Brow Jeanie Boosting Fibre Gel",
    price: "19,50",
    btn: "ADD TO CART",
    color: "Tinted volumizing eyebrow gel",
    ttl: "Black Brown",
    img: [
      { type: "color", value: "#342B2A" },
      { type: "color", value: "#B79A81" },
      { type: "color", value: "#5A4436" },
    ],
    mode: "Black Brown",
    type: "Bestseller",
  },
];

export default bestSeller;
