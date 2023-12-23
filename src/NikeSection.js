import React from "react";

function NikeSection() {
    return <div id="nikeSection" className="min-w-full min-h-screen pt-20 lg:pt-[110px] px-4">
        <div>
            <div
                class="absolute h-6 top-2/3 left-1/2 -translate-y-1/2 -translate-x-1/2 shadow-[0_-50px_220px_200px] shadow-stone-300 -z-10 rounded-full">
            </div>
            <div className="w-40 border border-third-100 mx-auto">
                <h4 className="text-center font-bold tracking-wider py-0.5 px-1 text-zinc-700">Nike</h4>
            </div>

            {/* photos */}
            <div className="flex justify-center items-center gap-10 pt-20">
                <div class="group bg-white  w-44 h-52 md:w-40 md:h-44  relative overflow-hidden border border-stone-300 cursor-pointer hover:border-third-100 hover:rounded-tr-3xl hover:rounded-bl-3xl duration-500">
                    <img className="w-full h-full object-cover pb-5" src="./images/airforce.jpg" alt="airforce" />
                    <div
                        class="bg-gradient-to-t from-black w-full pb-2  text-secondary-100 absolute bottom-0 left-0 translate-y-6 group-hover:translate-y-0 duration-500">
                        <p className="text-xs font-mono text-third-100 flex justify-center">Airforce</p>
                        <p className="text-xs font-mono text-secondary-100 flex justify-center">$50</p>
                        <a className="text-xs font-mono text-secondary-100 flex justify-center" href="#">Buy</a>
                    </div>
                </div>
                <div class="group bg-white  w-44 h-52 md:w-40 md:h-44  relative overflow-hidden border border-stone-300 cursor-pointer hover:border-third-100 hover:rounded-tr-3xl hover:rounded-bl-3xl duration-500">
                    <img className="w-full h-full object-cover pb-5" src="./images/blazer.jpg" alt="blazer" />
                    <div
                        class="bg-gradient-to-t from-black w-full pb-2  text-secondary-100 absolute bottom-0 left-0 translate-y-6 group-hover:translate-y-0 duration-500">
                        <p className="text-xs font-mono text-third-100 flex justify-center">Blazer</p>
                        <p className="text-xs font-mono text-secondary-100 flex justify-center">$49.90</p>
                        <a className="text-xs font-mono text-secondary-100 flex justify-center" href="#">Buy</a>
                    </div>
                </div>
                <div class="group bg-white w-44 h-52 md:w-40 md:h-44  relative overflow-hidden border border-stone-300 cursor-pointer hover:border-third-100 hover:rounded-tr-3xl hover:rounded-bl-3xl duration-500">
                    <img className="w-full h-full object-cover pb-5" src="./images/airforcepanda.jpg" alt="airforce-pd" />
                    <div
                        class="bg-gradient-to-t from-black w-full pb-2  text-secondary-100 absolute bottom-0 left-0 translate-y-6 group-hover:translate-y-0 duration-500">
                        <p className="text-xs font-mono text-third-100 flex justify-center">Airforce-Panda</p>
                        <p className="text-xs font-mono text-secondary-100 flex justify-center">$72.50</p>
                        <a className="text-xs font-mono text-secondary-100 flex justify-center" href="#">Buy</a>
                    </div>
                </div>
                <div class="group bg-white w-44 h-52 md:w-40 md:h-44  relative overflow-hidden border border-stone-300 cursor-pointer hover:border-third-100 hover:rounded-tr-3xl hover:rounded-bl-3xl duration-500">
                    <img className="w-full h-full object-cover pb-5" src="./images/nikeair.jpg" alt="nike-air" />
                    <div
                        class="bg-gradient-to-t from-black w-full pb-2  text-secondary-100 absolute bottom-0 left-0 translate-y-6 group-hover:translate-y-0 duration-500">
                        <p className="text-xs font-mono text-third-100 flex justify-center">Nike Air 'Monarch'</p>
                        <p className="text-xs font-mono text-secondary-100 flex justify-center">$109</p>
                        <a className="text-xs font-mono text-secondary-100 flex justify-center" href="#">Buy</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default NikeSection;
