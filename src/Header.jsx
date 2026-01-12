function Header(){

    return(
    <>
        <nav id="nav" className="w-full h-30 flex justify-between items-center bg-[rgba(255, 255, 255, 0.6)]-500 bg-gray-200 p-4 ">
            <div className="">
                <img className="w-[80%] relative top-[-0.7rem]" src="icone.svg" alt="Logo"/>
            </div>
            <ul className="hidden lg:flex gap-4 text-[18px]">
                <li><a href="#Templates">Templates</a></li>
                <li><a href="#Showcase">Showcase</a></li>
                <li><a href="#Features">Features</a></li>
                <li><a href="#Pricing">Pricing</a></li>
                <li><a href="#Guides">Guides</a></li>
                <li><a href="#Blog">Blog</a></li>
                <div className="">
                    <li className="hidden"><a href="#Signin">Sign in</a></li>
                    <li><a className="px-4 py-2 bg-[#ffbe3c] rounded-lg" href="#Started" class="getsarted_btn">Get started free</a></li>
                </div>
                
            </ul>
            <li className="list-none lg:none"><img className="lg:hidden w-8 cursor-pointer" src="icon_menu.svg" alt="Icone du menu "/></li>
            <ul className="hidden">
                <li><a href="#Templates">Templates</a></li>
                <li><a href="#Showcase">Showcase</a></li>
                <li><a href="#Features">Features</a></li>
                <li><a href="#Pricing">Pricing</a></li>
                <li><a href="#Guides">Guides</a></li>
                <li><a href="#Blog">Blog</a></li>
                <div className="flex ">
                    <li><a href="#Signin">Sign in</a></li>
                    <li><a href="#Started" >Get started free</a></li>
                </div>
                
            </ul>
        </nav>  

    </>    
    );
}

export default Header;