export default function Background() {
    return (
        <div className="back w-screen h-screen pt-27.5 opacity-30 absolute top-0 left-0 -z-10">
            <div className="content w-full h-full relative">
                <div className="absolute left-0 top-0 h-full w-[30%] text-center items-center">
                    <div className="relative w-full h-full">
                        <div className="absolute left-0 bottom-0 w-0 h-0 -rotate-z-90">
                            <span className="text-black [paint-order:stroke_fill] [-webkit-text-stroke:1px_var(--color-white)] font-clash font-bold text-[160px] uppercase -translate-y-10 leading-35">carter</span>
                        </div>
                    </div>
                </div>
                <div className="absolute right-0 top-0 h-full w-[30%] text-center items-center">
                    <div className="relative w-full h-full">
                        <div className="absolute right-0 w-0 h-0 rotate-z-90">
                            <span className="text-black [paint-order:stroke_fill] [-webkit-text-stroke:1px_var(--color-white)] font-clash font-bold text-[160px] uppercase -translate-y-10 leading-35">designer</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}