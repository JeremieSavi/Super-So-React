import { useState } from "react";

function Header(){

    const [SideBarOpen,setSideBarOpen]=useState(false)

    return(
        
    <>
    
        <nav id="nav" className="w-full h-30 flex justify-between items-center bg-[rgba(255, 255, 255, 0.6)]-500 bg-gray-200 p-4 ">
            <div className="">
                <img className="w-[80%] relative top-[-0.7rem]" src="icone.svg" alt="Logo" />
            </div>
            <ul className="hidden lg:flex gap-4 text-[18px]">
                <li><a className="hover:text-gray-600" href="#Templates">Templates</a></li>
                <li><a className="hover:text-gray-600" href="#Showcase">Showcase</a></li>
                <li><a className="hover:text-gray-600" href="#Features">Features</a></li>
                <li><a className="hover:text-gray-600" href="#Pricing">Pricing</a></li>
                <li><a className="hover:text-gray-600" href="#Guides">Guides</a></li>
                <li><a className="hover:text-gray-600" href="#Blog">Blog</a></li>
                <div className="">
                    <li className="hidden"><a href="#Signin">Sign in</a></li>
                    <li><a className="px-4 py-2 bg-[#ffbe3c] rounded-lg" href="#Started" class="getsarted_btn">Get started free</a></li>
                </div>
                
            </ul>
            <li className="list-none lg:none"><img onClick={()=>setSideBarOpen(!SideBarOpen)} className="lg:hidden w-8 cursor-pointer" src="icon_menu.svg" alt="Icone du menu "/></li>
            <ul className={ `flex flex-col gap-2 bg-white p-4 border-radius shadow rounded-xl absolute right-10 top-20 ${SideBarOpen ? `translate-x-0 duration-300` :`translate-x-70 duration-300`  }`}>
                <li><a className="hover:text-amber-300" href="#Templates">Templates</a></li>
                <li><a className="hover:text-amber-300" href="#Showcase">Showcase</a></li>
                <li><a className="hover:text-amber-300" href="#Features">Features</a></li>
                <li><a className="hover:text-amber-300" href="#Pricing">Pricing</a></li>
                <li><a className="hover:text-amber-300" href="#Guides">Guides</a></li>
                <li><a className="hover:text-amber-300" href="#Blog">Blog</a></li>
                <div className="flex flex-col gap-1">
                    <li><a className="hover:text-amber-300" href="#Signin">Sign in</a></li>
                    <li><a className="hover:text-amber-300" href="#Started" >Get started free</a></li>
                </div>
                
            </ul>
        </nav>  

    </>    
    );
}

export default Header;