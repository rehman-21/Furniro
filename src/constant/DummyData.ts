
//!=========================> Navbar Data  & Icons<==========> 

import { JPG, PNG } from "./Images";
import { Icons } from "./Svg";

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
    image:  JPG.LOLITE,
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
    image:JPG.POTTY,
  },
];