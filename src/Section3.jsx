function Section3(){
    
    return(
        <>
            <div className="flex gap-10 flex-wrap bg-black text-white py-25">
                <h1 className="text-4xl md:text-5xl font-bold text-center mx-auto">How to use Notion as a website</h1>
                <div className="flex flex-col lg:flex-row justify-evenly items-center gap-10 md:gap-10 text-white px-2 md:px-10">     
                    <div className="flex flex-col gap-2 w-[70%]">
                        <img src="/step1-notion.svg" alt=""/>
                        <h4>Step 1</h4>
                        <h2 className="text-4xl font-bold mt-3">Choose or create a Notion page</h2>
                        <p className="text-xl mt-4">Choose an existing Notion page, create a new one or start with a template. Super works with any <a href="">Notion</a> page.</p>
                    </div>
                    <div className="flex flex-col gap-2 w-[70%]">
                        <img src="/step2-super.svg" alt=""/>
                        <h4>Step 2</h4>
                        <h2 className="text-4xl font-bold mt-3">Paste the Notion page’s web link in Super</h2>
                        <p className="text-xl mt-4">Publish your Notion page via the Share menu and paste the Notion web link in Super when creating a site.</p>
                    </div>
                    <div className="flex flex-col gap-2 w-[70%]">
                        <img src="/step3-share.svg" alt=""/>
                        <h4>Step 3</h4>
                        <h2 className="text-4xl font-bold mt-3">Share your site with the world</h2>
                        <p className="text-xl mt-4">Your content is now live on a site you can call your own! Edits in Notion are automatically synced.</p>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Section3;
