function JordanSection() {
    return <div id="jordanSection" className="relative w-full lg:max-w-7xl mx-auto h-screen mt-8 border-t border-stone-300">
        <div>
            <div
                class="absolute h-6 top-2/3 left-1/2 -translate-y-2/3 -translate-x-1/2 shadow-[0_-50px_220px_200px] shadow-stone-200 -z-10 rounded-full">
            </div>
            <div className="w-40 border border-third-100 mx-auto mt-20 px-4">
                <h4 className="text-center font-bold tracking-wider py-0.5 px-1 text-zinc-700">Jordan</h4>
            </div>
            <div className="flex justify-center items-center gap-10 pt-20">
                <div class="group bg-white  w-44 h-52 md:w-40 md:h-44  relative overflow-hidden border border-stone-300 cursor-pointer hover:border-third-100 hover:rounded-tr-3xl hover:rounded-bl-3xl duration-500">
                    <img className="w-full h-full object-cover pb-5" src="./images/jordan1.jpg" alt="jordan" />
                    <div class="bg-gradient-to-t from-black w-full pb-2  text-secondary-100 absolute bottom-0 left-0 translate-y-6 group-hover:translate-y-0 duration-500">
                        <p className="text-xs font-mono text-third-100 flex justify-center">Jordan-1</p>
                        <p className="text-xs font-mono text-secondary-100 flex justify-center">$131.90</p>
                        <a className="text-xs font-mono text-secondary-100 flex justify-center" href="#">Buy</a>
                    </div>
                </div>
                <div class="group bg-white  w-44 h-52 md:w-40 md:h-44  relative overflow-hidden border border-stone-300 cursor-pointer hover:border-third-100 hover:rounded-tr-3xl hover:rounded-bl-3xl duration-500">
                    <img className="w-full h-full object-cover pb-5" src="./images/jordan2Origin.jpg" alt="jordan2" />
                    <div class="bg-gradient-to-t from-black w-full pb-2  text-secondary-100 absolute bottom-0 left-0 translate-y-6 group-hover:translate-y-0 duration-500">
                        <p className="text-xs font-mono text-third-100 flex justify-center">Jordan2 'Origina'</p>
                        <p className="text-xs font-mono text-secondary-100 flex justify-center">$100.50</p>
                        <a className="text-xs font-mono text-secondary-100 flex justify-center" href="#">Buy</a>
                    </div>
                </div>
                <div class="group bg-white  w-44 h-52 md:w-40 md:h-44  relative overflow-hidden border border-stone-300 cursor-pointer hover:border-third-100 hover:rounded-tr-3xl hover:rounded-bl-3xl duration-500">
                    <img className="w-full h-full object-cover pb-5" src="./images/jordan3Retro.jpg" alt="jordan3" />
                    <div class="bg-gradient-to-t from-black w-full pb-2  text-secondary-100 absolute bottom-0 left-0 translate-y-6 group-hover:translate-y-0 duration-500">
                        <p className="text-xs font-mono text-third-100 flex justify-center">Jordan3 'Retro'</p>
                        <p className="text-xs font-mono text-secondary-100 flex justify-center">$154</p>
                        <a className="text-xs font-mono text-secondary-100 flex justify-center" href="#">Buy</a>
                    </div>
                </div>
                <div class="group bg-white  w-44 h-52 md:w-40 md:h-44  relative overflow-hidden border border-stone-300 cursor-pointer hover:border-third-100 hover:rounded-tr-3xl hover:rounded-bl-3xl duration-500">
                    <img className="w-full h-full object-cover pb-5" src="./images/jordan4.jpg" alt="jordan4" />
                    <div class="bg-gradient-to-t from-black w-full pb-2  text-secondary-100 absolute bottom-0 left-0 translate-y-6 group-hover:translate-y-0 duration-500">
                        <p className="text-xs font-mono text-third-100 flex justify-center">Jordan4 'Military'</p>
                        <p className="text-xs font-mono text-secondary-100 flex justify-center">$202</p>
                        <a className="text-xs font-mono text-secondary-100 flex justify-center" href="#">Buy</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default JordanSection;