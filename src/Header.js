import React from "react";
import { Link } from "react-scroll";

function Header() {
    return <nav className="min-w-full bg-stone-300 shadow-lg shadow-red-300 py-2 px-4 md:px-10 flex justify-between items-center fixed z-50 border-b border-stone-400">
        <div className="group py-0.5 px-1 cursor-pointer">
            <h3 className="font-bold text-primary-100 text-center select-none cursor-pointer tracking-wide hover:text-third-100 group-hover:-translate-y-1 duration-500">ShoeWithZaxx</h3>
        </div>
        <div className="flex font-mono">
            <Link to="nikeSection" smooth={true} duration={500} className="text-third-100 text-xs px-3 hover:-translate-y-0.5 duration-500 cursor-pointer hover:text-red-950">Nike</Link>
            <Link to="adidasSection" smooth={true} duration={500} className="text-third-100 text-xs px-3 hover:-translate-y-0.5 duration-500 cursor-pointer hover:text-red-950">Adidas</Link>
            <Link to="jordanSection" smooth={true} duration={500} className="text-third-100 text-xs px-3 hover:-translate-y-0.5 duration-500 cursor-pointer hover:text-red-950">Jordan</Link>
            <Link to="vansSection" smooth={true} duration={500} className="text-third-100 text-xs px-3 hover:-translate-y-0.5 duration-500 cursor-pointer hover:text-red-950">Vans</Link>
            <Link to="converseSection" smooth={true} duration={500} className="text-third-100 text-xs px-3 hover:-translate-y-0.5 duration-500 cursor-pointer hover:text-red-950">Converse</Link>
            <span className="text-third-100 text-[7px] px-3 cursor-pointer hover:text-red-950 duration-500">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart-dash" viewBox="0 0 16 16">
                    <path d="M6.5 7a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1z" />
                    <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0m7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0" />
                </svg>
            </span>
        </div>
    </nav>
}

export default Header;
