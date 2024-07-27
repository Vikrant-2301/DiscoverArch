// import Link from "next/link";
// import Image from "next/image";

// // MIDDLE LINKS DATA
// interface ProductType {
//   id: number;
//   link: string[];
// }

// const products: ProductType[] = [
//   {
//     id: 1,
//     link: [" ", " ", " ", " "],
//   },
//   {
//     id: 2,
//     link: [" ", " ", " ", " "],
//   },
// ];

// const footer = () => {
//   return (
//     <div className="bg-black">
//       <div className="mx-auto max-w-2xl pt-12 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
//         <div className="my-12 grid grid-cols-1 gap-y-10 gap-x-16 sm:grid-cols-2 lg:grid-cols-12 xl:gap-x-8">
//           {/* COLUMN-1 */}

//           <div className="col-span-4 md:col-span-12 lg:col-span-4">
//             <Image
//               src={"/images/footer/Logo.png"}
//               alt="logo"
//               className="pb-8"
//               width={200}
//               height={400}
//             />
//             <div className="flex gap-4">
//               <div className="footer-icons">
//                 <Link href="https://www.linkedin.com/company/discoverarch/">
//                   <Image
//                     src={"/images/footer/linkedin.svg"}
//                     alt="linkedin"
//                     width={15}
//                     height={20}
//                   />
//                 </Link>
//               </div>
//               <div className="footer-icons">
//                 <Link href="https://twitter.com/DiscoverArch">
//                   <Image
//                     src={"/images/footer/twitter.svg"}
//                     alt="twitter"
//                     width={20}
//                     height={20}
//                   />
//                 </Link>
//               </div>
//               <div className="footer-icons">
//                 <Link href="https://www.instagram.com/discoverarch/">
//                   <Image
//                     src={"/images/footer/instagram.svg"}
//                     alt="instagram"
//                     width={20}
//                     height={20}
//                   />
//                 </Link>
//               </div>
//             </div>
//           </div>

//           {/* CLOUMN-2/3 */}

//           {products.map((product) => (
//             <div
//               key={product.id}
//               className="group relative col-span-2 md:col-span-4 lg:col-span-2"
//             >
//               <ul>
//                 {product.link.map((link: string, index: number) => (
//                   <li key={index} className="mb-5">
//                     <Link
//                       href="/"
//                       className="text-white text-sm font-normal mb-6 space-links"
//                     >
//                       {link}
//                     </Link>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           ))}

//           {/* CLOUMN-4 */}

//           <div className="col-span-4 md:col-span-4 lg:col-span-4">
//             <div id="#contact-section">
//               <div className="flex gap-2  text-white">
//                 <Image
//                   src={"/images/footer/email.svg"}
//                   alt="email-icon"
//                   width={24}
//                   height={24}
//                 />
//                 <a
//                   href="mailto:contact.discoverarch@gmail.com"
//                   className="text-base font-normal text-offwhite"
//                 >
//                   contact.discoverarch@gmail.com
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* All Rights Reserved */}

//         <div className="py-2 lg:flex items-center justify-between border-t border-t-bordertop">
//           <h4 className="text-offwhite text-sm text-center lg:text-start font-normal">
//             @2023-24 All Rights Reserved by{" "}
//             <Link href="https://discoverarch.org/" target="_blank">
//               {" "}
//               DiscoverArch
//             </Link>
//           </h4>
//           <div className="flex gap-5 mt-2 lg:mt-0 justify-center lg:justify-start">
//             <h4 className="text-offwhite text-sm font-normal">
//               <Link href="/Privacy-policy">Privacy policy</Link>
//             </h4>
//             <div className="h-5 bg-border top w-0.5"></div>
//             <h4 className="text-offwhite text-sm font-normal">
//               <Link href="/Terms">Terms & conditions</Link>
//             </h4>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default footer;
