
//!=========================> Navbar Data  & Icons<==========> 

import { JPG, PNG } from "./Images";
import { Icons } from "./Svg";

type Product = {
  id: string;
  title: string;
  subtitle: string;
  price: string;
  oldPrice?: string;
  isNew?: boolean;
  discountPercent?: number;
  image: string;
};

export const navbarIcons = [
    {
      to: "/",
      url: Icons.USER_ICON,
      alt: "User",
    },
    {
      to: "/",
      url: Icons.SEARCH_ICON,
      alt: "Search",
    },
    {
      to: "/",
      url: Icons.HEART_ICON,
      alt: "Heart",
    },
    {
      to: "/",
      url: Icons.SHOP_ICON,
      alt: "ShopWheel",
    },
  
  ];

   export const navigationMenu = [
      {
        path: "/",
        text: "Home",
      },
       {
        path: "/shop",
        text: "Shop",
      },
      {
        path: "/about",
        text: "About",
      },
      {
        path: "/contact",
        text: "Contact",
      },
     
    ];

  //!=========================>Browse The  Ranges Data <==========>

export  const ranges = [
      { 
        label: "Dining",
        img:PNG.DIINING_IMG
      },
      {
         label: "Living",
        img: PNG.LIVING_IMG
      },
      {
         label: "Bedroom",
        img: PNG.BEDROOM_IMG
      }
  ];


  // ! ================ Our Products Data ================>


  export const Products: Product[] = [
    {
      id: "1",
      title: "Syltherine",
      subtitle: "Stylish cafe chair",
      price: "Rp 2.500.000",
      oldPrice: "Rp 3.500.000",
      discountPercent: 30,
      image: JPG.SYLTHERINE,
    },
    {
      id: "2",
      title: "Leviosa",
      subtitle: "Stylish cafe chair",
      price: "Rp 2.500.000",
      discountPercent: 20,
      image: JPG.GRIFO,
    },
    {
      id: "3",
      title: "Lolito",
      subtitle: "Luxury big sofa",
      price: "Rp 7.000.000",
      oldPrice: "Rp 14.000.000",
      discountPercent: 50,
      image: JPG.LOLITE,
    },
    {
      id: "4",
      title: "Respira",
      subtitle: "Outdoor bar table and stool",
      price: "Rp 500.000",
      isNew: true,
      image: JPG.RESPIRA,
    },
    {
      id: "5",
      title: "Grifo",
      subtitle: "Night lamp",
      price: "Rp 1.500.000",
      discountPercent: 25,
      image: JPG.GRIFO,
    },
    {
      id: "6",
      title: "Muggo",
      subtitle: "Small mug",
      price: "Rp 150.000",
      isNew: true,
      image: JPG.MUGGO,
    },
    {
      id: "7",
      title: "Pingky",
      subtitle: "Cute bed set",
      price: "Rp 7.000.000",
      oldPrice: "Rp 14.000.000",
      discountPercent: 50,
      image: JPG.PINKY,
    },
    {
      id: "8",
      title: "Potty",
      subtitle: "Minimalist flower pot",
      price: "Rp 500.000",
      isNew: true,
      image: JPG.POTTY,
    },
    {
      id: "9",
      title: "Aurora Lamp",
      subtitle: "Modern standing lamp",
      price: "Rp 2.200.000",
      discountPercent: 15,
      image: JPG.GRIFO,
    },
    {
      id: "10",
      title: "Breeze Sofa",
      subtitle: "Comfortable 2-seater",
      price: "Rp 5.500.000",
      oldPrice: "Rp 8.000.000",
      discountPercent: 30,
      image: JPG.LOLITE,
    },
    {
      id: "11",
      title: "Zen Table",
      subtitle: "Wooden coffee table",
      price: "Rp 3.000.000",
      isNew: true,
      image: JPG.RESPIRA,
    },
    {
      id: "12",
      title: "Cuppa Mug",
      subtitle: "Ceramic coffee mug",
      price: "Rp 200.000",
      image: JPG.MUGGO,
    },
    {
      id: "13",
      title: "Velora Chair",
      subtitle: "Minimalist dining chair",
      price: "Rp 1.800.000",
      discountPercent: 20,
      image: JPG.SYLTHERINE,
    },
    {
      id: "14",
      title: "Luxe Bed",
      subtitle: "Queen size luxury bed",
      price: "Rp 12.000.000",
      oldPrice: "Rp 18.000.000",
      discountPercent: 35,
      image: JPG.PINKY,
    },
    {
      id: "15",
      title: "Nature Vase",
      subtitle: "Glass flower vase",
      price: "Rp 400.000",
      isNew: true,
      image: JPG.POTTY,
    },
    {
      id: "16",
      title: "Glow Lamp",
      subtitle: "LED night lamp",
      price: "Rp 1.200.000",
      image: JPG.GRIFO,
    },
    {
      id: "17",
      title: "Classic Sofa",
      subtitle: "Stylish 3-seater",
      price: "Rp 9.500.000",
      oldPrice: "Rp 12.000.000",
      discountPercent: 20,
      image: JPG.LOLITE,
    },
    {
      id: "18",
      title: "Oak Table",
      subtitle: "Solid wood dining table",
      price: "Rp 6.000.000",
      image: JPG.RESPIRA,
    },
    {
      id: "19",
      title: "Coffee Mug",
      subtitle: "Handmade clay mug",
      price: "Rp 300.000",
      isNew: true,
      image: JPG.MUGGO,
    },
    {
      id: "20",
      title: "Sakura Bed",
      subtitle: "Japanese style bed",
      price: "Rp 11.000.000",
      oldPrice: "Rp 16.000.000",
      discountPercent: 30,
      image: JPG.PINKY,
    },
    {
      id: "21",
      title: "Flora Pot",
      subtitle: "Clay flower pot",
      price: "Rp 450.000",
      image: JPG.POTTY,
    },
    {
      id: "22",
      title: "Luna Chair",
      subtitle: "Modern lounge chair",
      price: "Rp 2.800.000",
      discountPercent: 25,
      image: JPG.SYLTHERINE,
    },
    {
      id: "23",
      title: "Nova Lamp",
      subtitle: "Tabletop study lamp",
      price: "Rp 900.000",
      isNew: true,
      image: JPG.GRIFO,
    },
    {
      id: "24",
      title: "Cloud Sofa",
      subtitle: "Ultra soft 3-seater",
      price: "Rp 10.000.000",
      oldPrice: "Rp 14.000.000",
      discountPercent: 28,
      image: JPG.LOLITE,
    },
    {
      id: "25",
      title: "Rustic Table",
      subtitle: "Farmhouse style table",
      price: "Rp 4.000.000",
      image: JPG.RESPIRA,
    },
    {
      id: "26",
      title: "Chic Mug",
      subtitle: "Trendy printed mug",
      price: "Rp 250.000",
      image: JPG.MUGGO,
    },
    {
      id: "27",
      title: "Blossom Bed",
      subtitle: "Floral theme bed",
      price: "Rp 8.000.000",
      oldPrice: "Rp 12.000.000",
      discountPercent: 33,
      image: JPG.PINKY,
    },
    {
      id: "28",
      title: "Terra Pot",
      subtitle: "Eco clay pot",
      price: "Rp 550.000",
      isNew: true,
      image: JPG.POTTY,
    },
    {
      id: "29",
      title: "Comfy Chair",
      subtitle: "Recliner lounge chair",
      price: "Rp 3.500.000",
      discountPercent: 22,
      image: JPG.SYLTHERINE,
    },
    {
      id: "30",
      title: "Starlight Lamp",
      subtitle: "Decorative LED lamp",
      price: "Rp 1.000.000",
      image: JPG.GRIFO,
    },
  ];
  
//! =========================> Help Links <==========>
export const helpLinks = [
  { text: "Payment Options", path: "/payment-options" },
  { text: "Returns", path: "/returns" },
  { text: "Privacy Policies", path: "/privacy-policies" },
];
//! =========================>  <==========>
