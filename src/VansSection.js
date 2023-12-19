import React from "react";

function VansSection() {
    return <div className="relative w-full lg:max-w-7xl mx-auto h-screen mt-8 border-t border-stone-300">
        <div>
            <div
                class="absolute h-6 top-2/3 left-1/2 -translate-y-2/3 -translate-x-1/2 shadow-[0_-50px_220px_200px] shadow-rose-100 -z-10 rounded-full">
            </div>
            <div className="w-40 border border-third-100 mx-auto mt-20 px-4">
                <h4 className="text-center font-bold tracking-wider py-0.5 px-1 text-zinc-700">Vans</h4>
            </div>
            <div className="flex justify-center items-center gap-10 pt-20">
                <div class="group bg-white  w-44 h-52 md:w-40 md:h-44  relative overflow-hidden border border-stone-300 cursor-pointer hover:border-third-100 hover:rounded-tr-3xl hover:rounded-bl-3xl duration-500">
                    <img className="w-full h-full object-cover pb-5" src="./images/vans.jpg" alt="oldSkool" />
                    <div class="bg-gradient-to-t from-black w-full pb-2  text-secondary-100 absolute bottom-0 left-0 translate-y-6 group-hover:translate-y-0 duration-500">
                        <p className="text-xs font-mono text-third-100 flex justify-center">Vans Old Skool</p>
                        <p className="text-xs font-mono text-secondary-100 flex justify-center">$70</p>
                        <a className="text-xs font-mono text-secondary-100 flex justify-center" href="#">Buy</a>
                    </div>
                </div>
                <div class="group bg-white  w-44 h-52 md:w-40 md:h-44  relative overflow-hidden border border-stone-300 cursor-pointer hover:border-third-100 hover:rounded-tr-3xl hover:rounded-bl-3xl duration-500">
                    <img className="w-full h-full object-cover pb-5" src="./images/classicSlipOn.jpg" alt="vansClassic" />
                    <div class="bg-gradient-to-t from-black w-full pb-2  text-secondary-100 absolute bottom-0 left-0 translate-y-6 group-hover:translate-y-0 duration-500">
                        <p className="text-xs font-mono text-third-100 flex justify-center">Classic 'slip on'</p>
                        <p className="text-xs font-mono text-secondary-100 flex justify-center">$65.70</p>
                        <a className="text-xs font-mono text-secondary-100 flex justify-center" href="#">Buy</a>
                    </div>
                </div>
                <div class="group bg-white  w-44 h-52 md:w-40 md:h-44  relative overflow-hidden border border-stone-300 cursor-pointer hover:border-third-100 hover:rounded-tr-3xl hover:rounded-bl-3xl duration-500">
                    <img className="w-full h-full object-cover pb-5" src="./images/checkred.jpg" alt="checkered" />
                    <div class="bg-gradient-to-t from-black w-full pb-2  text-secondary-100 absolute bottom-0 left-0 translate-y-6 group-hover:translate-y-0 duration-500">
                        <p className="text-xs font-mono text-third-100 flex justify-center">slip on'Checkered'</p>
                        <p className="text-xs font-mono text-secondary-100 flex justify-center">$82</p>
                        <a className="text-xs font-mono text-secondary-100 flex justify-center" href="#">Buy</a>
                    </div>
                </div>
                <div class="group bg-white  w-44 h-52 md:w-40 md:h-44  relative overflow-hidden border border-stone-300 cursor-pointer hover:border-third-100 hover:rounded-tr-3xl hover:rounded-bl-3xl duration-500">
                    <img className="w-full h-full object-cover pb-5" src="./images/lowlan cc.jpg" alt="lowlandcc" />
                    <div class="bg-gradient-to-t from-black w-full pb-2  text-secondary-100 absolute bottom-0 left-0 translate-y-6 group-hover:translate-y-0 duration-500">
                        <p className="text-xs font-mono text-third-100 flex justify-center">LowLand-CC-</p>
                        <p className="text-xs font-mono text-secondary-100 flex justify-center">$68</p>
                        <a className="text-xs font-mono text-secondary-100 flex justify-center" href="#">Buy</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default VansSection;
