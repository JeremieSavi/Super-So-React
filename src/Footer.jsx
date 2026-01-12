function Footer(){

    return(
    <>
        <section className="bg-black text-white py-20 px-10I">
            <div className="flex justify-between">
                <img className="ml-10" src="logo_footer.svg" alt=""/>
                <div className="flex gap-5 mr-10">
                    <img className="w-10 bg-white" src="twitter (1).png" alt=""/>
                    <img className="w-10 bg-white" src="instagram.png" alt=""/>
                    <img className="w-10 bg-white" src="discorde (2).png" alt=""/>
                    <img className="w-10 bg-white" src="youtube.png" alt=""/>

                </div>
            </div>
            <div className="flex gap-10 justify-center sm:justify-start mt-10 ml-10 flex-wrap">    
                <ul className="flex flex-col text-gray-400  gap-2">
                    <li className="text-white">Ressources</li>
                    <li className="hover:text-white duration-300">Templates</li>
                    <li className="hover:text-white duration-300">Showcase</li>
                    <li className="hover:text-white duration-300">Builder</li>
                    <li className="hover:text-white duration-300">Themes</li>
                    <li className="hover:text-white duration-300">Illustrations</li>
                    <li className="hover:text-white duration-300">Icons</li>
                </ul>
                <ul className="flex flex-col text-gray-400 gap-2">
                    <li className="text-white  ">Help and guides</li>
                    <li className="hover:text-white duration-300">Status page</li>
                    <li className="hover:text-white duration-300">Blog</li>
                    <li className="hover:text-white duration-300">Pricing</li>
                    <li className="hover:text-white duration-300">Docs</li>
                    <li className="hover:text-white duration-300">Community</li>
                    <li className="hover:text-white duration-300">Guides</li>
                </ul>
                <ul className="flex flex-col text-gray-400 gap-2">
                    <li className="text-white">Company</li>
                    <li className="hover:text-white duration-300" >Roadmap</li>
                    <li className="hover:text-white duration-300" >Report</li>
                    <li className="hover:text-white duration-300" >Consulting</li>
                    <li className="hover:text-white duration-300" >Changelog</li>
                    <li className="hover:text-white duration-300" >Privacy</li>
                    <li className="hover:text-white duration-300" >Terms</li>
                    <li className="hover:text-white duration-300" >Affiliates</li>
                </ul>
                <ul className="flex flex-col text-gray-400 gap-2">
                    <li className="text-white">Solutions</li>
                    <li className="hover:text-white duration-300" >create</li>
                    <li className="hover:text-white duration-300" >Notion sites vs Super</li>
                </ul>
            </div>

            

        </section>
    </>
    );
}
export default Footer;