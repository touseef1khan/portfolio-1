import React from "react";
import Link from "next/link";
import {
    Sheet,
    SheetContent,
    SheetTrigger,
  } from "@/components/ui/sheet"
  import { IoMenu } from "react-icons/io5";
  

function Header(){
    return(
        <div>
            <header className="flex justify-between py-2 px-4 max-w-screen-2xl text-pink-200 bg-pink-800 mx-auto">
                {/* Logo  */}
                <div>
                    <h2 className="font-bold text-4xl text-pink-400 py-4 font-serif ">My <span className="text-pink-200 font-serif">Portfolio</span></h2>
                </div>

                {/* Nav Button  */}
<div className="flex w-fit mx-auto py-4 text-3xl">
            <ul className="hidden md:block">
                <li className="space-x-10 font-sans">
                    <Link className="inline-flex hover:text-pink-400 transform transition-transform duration-200 hover:scale-110" href="/">Home</Link>
                    <Link className="inline-flex hover:text-pink-400 transform transition-transform duration-200 hover:scale-110" href="/about">About</Link>
                    <Link className="inline-flex hover:text-pink-400 transform transition-transform duration-200 hover:scale-110" href="/skills">Skills</Link>
                    <Link className="inline-flex hover:text-pink-400 transform transition-transform duration-200 hover:scale-110" href="/contact">Contact</Link>

                </li>
            </ul>
</div>
        

            <Sheet>
  <SheetTrigger className="md:hidden ">
    <IoMenu  className="text-5xl font-bold hover:text-pink-400 transform transition-transform duration-500 ease-in-out hover:scale-110 "/>
    </SheetTrigger>
  <SheetContent className="bg-pink-100 ">
             <ul>
                <li className="space-x-10 py-2 transform transition-transform duration-500 ease-in-out hover:scale-110">
                    <Link className="hover:text-pink-400 text-pink-900 " href="/">Home</Link>
                </li>
                <li className="space-x-10 py-2 transform transition-transform duration-500 ease-in-out hover:scale-110">
                    <Link className="hover:text-pink-400 text-pink-900" href="/about">About</Link>
                </li>
                <li className="space-x-10 py-2 transform transition-transform duration-500 ease-in-out hover:scale-110">
                    <Link className="hover:text-pink-400 text-pink-900" href="/skills">Skills</Link>
                </li>
                <li className="space-x-10 py-2 transform transition-transform duration-500 ease-in-out hover:scale-110">
                    <Link className="hover:text-pink-400 text-pink-900" href="/contact">Contact</Link>
                </li>
            </ul>
  </SheetContent>
</Sheet>

            </header>
        </div>
    )
}
export default Header;