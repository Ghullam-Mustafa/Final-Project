


// import React from 'react';
// import Image from 'next/image';
// import Link from 'next/link';

// export default function Navbar() {
//     return (
//         <>
//             <div className="flex flex-col sm:flex-row justify-between items-center px-[135px] pt-[40px]">
//                 {/* Logo */}
//                 <div className="">
//                     <Link href="/home">
//                         <Image src="/assets/logo.png" width={100} height={100} />
//                     </Link>
//                 </div>

//                 {/* Navigation Links */}
//                 <div className="flex justify-between sm:gap-5 mt-4 sm:mt-0 sm:none">
//                     <div className="">
//                         <Link href="/home"><p className='hover:underline underline-offset-4'>Home</p></Link>
//                     </div>
//                     <div className="">
//                         <Link href="/contact"><p className='hover:underline underline-offset-4'>Contact</p></Link>
//                     </div>
//                     <div className="">
//                         <Link href="/about"><p className='hover:underline underline-offset-4'>About</p></Link>
//                     </div>
//                     <div className="">
//                         <Link href="/signup"><p className='hover:underline underline-offset-4'>Sign Up</p></Link>
//                     </div>
//                 </div>

//                 {/* Login and Cart */}
//                 <div className="flex justify-between gap-3 mt-4 sm:mt-0">
//                     <div className="">
//                         <Link href="/login"><p className='hover:underline underline-offset-4'>Login</p></Link>
//                     </div>
//                     <div className="">
//                         <Link href="/cart"><Image src="/assets/Cart.png" width={20} height={20} /></Link>
//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// }

"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <div className=" sm:px-4 py-4  lg:px-36">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <Link href="/home">

                            <Image src="/assets/logo.png" width={100} height={100} alt="Logo" />

                        </Link>
                    </div>

                    {/* Hamburger menu for small screens */}
                    <div className="block lg:hidden">
                        <button onClick={toggleMenu} className=" focus:outline-none">
                            {isOpen ? (
                                <svg
                                    className="h-6 w-6"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            ) : (
                                <svg
                                    className="h-6 w-6"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h16m-7 6h7"
                                    />
                                </svg>
                            )}
                        </button>
                    </div>

                    {/* Navigation links */}
                    <div className={`lg:flex ${isOpen ? 'block' : 'hidden'}`}>
                        <div className="flex justify-between sm:gap-10">
                            <div className="flex space-x-4">
                                <Link href="/home">
                                    <p className='hover:underline underline-offset-4'>Home</p>
                                </Link>
                                <Link href="/contact">
                                    <p className='hover:underline underline-offset-4'>Contact</p>
                                </Link>
                                <Link href="/about">
                                    <p className='hover:underline underline-offset-4'>About</p>
                                </Link>
                                <Link href="/signup">
                                    <p className='hover:underline underline-offset-4'>Sign Up</p>
                                </Link>
                            </div>
                            <div className="flex justify-between md:gap-3 ">
                                <div className="">
                                    <Link href="/login"><p className='hover:underline underline-offset-4'>Login</p></Link>
                                </div>
                                <div className="">
                                    <Link href="/cart"><Image src="/assets/Cart.png" width={20} height={20} /></Link>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </>
    );
}
