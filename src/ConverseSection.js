import React from "react";

function ConverseSection() {
    return <div id="converseSection" className="min-w-full min-h-screen pt-20 lg:pt-[110px] px-4 border-t border-stone-300">
        <div>
            <div
                class="absolute h-6 top-2/3 left-1/2 -translate-y-1/2 -translate-x-1/2 shadow-[0_-50px_220px_200px] shadow-stone-300 -z-10 rounded-full">
            </div>
            <div className="w-40 border border-third-100 mx-auto">
                <h4 className="text-center font-bold tracking-wider py-0.5 px-1 text-zinc-700">Converse</h4>
            </div>

            {/* photos */}
            <div className="flex justify-center items-center gap-10 pt-20">
                <div class="group bg-white  w-44 h-52 md:w-40 md:h-44  relative overflow-hidden border border-stone-300 cursor-pointer hover:border-third-100 hover:rounded-tr-3xl hover:rounded-bl-3xl duration-500">
                    <img className="w-full h-full object-cover pb-5" src="./images/allstar.jpg" alt="allstar" />
                    <div
                        class="bg-gradient-to-t from-black w-full pb-2  text-secondary-100 absolute bottom-0 left-0 translate-y-6 group-hover:translate-y-0 duration-500">
                        <p className="text-xs font-mono text-third-100 flex justify-center">Converse'All-Star'</p>
                        <p className="text-xs font-mono text-secondary-100 flex justify-center">$50</p>
                        <a className="text-xs font-mono text-secondary-100 flex justify-center" href="#">Buy</a>
                    </div>
                </div>
                <div class="group bg-white  w-44 h-52 md:w-40 md:h-44  relative overflow-hidden border border-stone-300 cursor-pointer hover:border-third-100 hover:rounded-tr-3xl hover:rounded-bl-3xl duration-500">
                    <img className="w-full h-full object-cover pb-5" src="./images/chucktaylor.jpg" alt="chucktaylor" />
                    <div
                        class="bg-gradient-to-t from-black w-full pb-2  text-secondary-100 absolute bottom-0 left-0 translate-y-6 group-hover:translate-y-0 duration-500">
                        <p className="text-xs font-mono text-third-100 flex justify-center">Chuck-Taylor</p>
                        <p className="text-xs font-mono text-secondary-100 flex justify-center">$63</p>
                        <a className="text-xs font-mono text-secondary-100 flex justify-center" href="#">Buy</a>
                    </div>
                </div>
                <div class="group bg-white w-44 h-52 md:w-40 md:h-44  relative overflow-hidden border border-stone-300 cursor-pointer hover:border-third-100 hover:rounded-tr-3xl hover:rounded-bl-3xl duration-500">
                    <img className="w-full h-full object-cover pb-8" src="./images/chuck70.jpg" alt="chuck70" />
                    <div
                        class="bg-gradient-to-t from-black w-full pb-2  text-secondary-100 absolute bottom-0 left-0 translate-y-6 group-hover:translate-y-0 duration-500">
                        <p className="text-xs font-mono text-third-100 flex justify-center">Chuck '70'</p>
                        <p className="text-xs font-mono text-secondary-100 flex justify-center">$78.90</p>
                        <a className="text-xs font-mono text-secondary-100 flex justify-center" href="#">Buy</a>
                    </div>
                </div>
                <div class="group bg-white w-44 h-52 md:w-40 md:h-44  relative overflow-hidden border border-stone-300 cursor-pointer hover:border-third-100 hover:rounded-tr-3xl hover:rounded-bl-3xl duration-500">
                    <img className="w-full h-full object-cover pb-5" src="./images/runstarHike.jpg" alt="runstarhike" />
                    <div
                        class="bg-gradient-to-t from-black w-full pb-2  text-secondary-100 absolute bottom-0 left-0 translate-y-6 group-hover:translate-y-0 duration-500">
                        <p className="text-xs font-mono text-third-100 flex justify-center">RunStar 'Hike'</p>
                        <p className="text-xs font-mono text-secondary-100 flex justify-center">$85</p>
                        <a className="text-xs font-mono text-secondary-100 flex justify-center" href="#">Buy</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default ConverseSection;
