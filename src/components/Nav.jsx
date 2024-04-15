import { TbShoppingCartDiscount } from "react-icons/tb"; 

import { RxHamburgerMenu } from "react-icons/rx";
import { TbShoppingBag } from "react-icons/tb";
import { useState } from "react";
export function Nav({ onClickShoppingBtn }){
    const [isMobMenuShown, setIsMobileMenuShown]= useState()
    {

    }
    return (
    <nav className="z-10 relative flex flex-wrap justify-between items-center">
        {/* Logo Image */}
        <a href="">
        <img src="src\assets\nike-logo.svg" className="h-20 w-20"/>
        </a>
        {/* Menu Button */}
        <button  onClick={()=> setIsMobileMenuShown(!isMobMenuShown)} className="lg:hidden hover:bg-gray-100 rounded-lg
         p-2 focus:ring-2 focus:ring-gray-200">
        <RxHamburgerMenu size ={25}/>
        </button>
        {/*Menu List*/}
        <div className={`w-full lg:w-auto lg:block ${!isMobMenuShown && "hidden" }`}>
            <ul className="flex flex-col lg:flex-row bg-gray-50 lg:space-x-10">
                <li className="py-2 cursor-pointer px-2  bg-blue-500 text-white 
                rounded-md lg:bg-transparent lg:text-blue-500">Home</li>
                <li className="py-2 cursor-pointer px-2  rounded-md">Service</li>
                <li className="py-2 cursor-pointer px-2  rounded-md">About Us</li>
                <li className="py-2 cursor-pointer px-2  rounded-md">Contact Us</li>
            </ul>
        </div>
        {/* Cart Button */}
        <div onClick={onClickShoppingBtn} className="fixed bottom-4 left-4 lg:static lg:mr-8 transform active:scale-75">
            <div className="flex-center h-12 w-12 rounded-full bg-white shadow-md">
                <TbShoppingCartDiscount className="lg:w-9 lg:h-36 lg:pb-24 lg:m-1 h-[50%] w-full"/>
            </div>
        </div>
    </nav>
    );
}