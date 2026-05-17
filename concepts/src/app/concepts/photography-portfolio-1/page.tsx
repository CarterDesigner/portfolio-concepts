"use client";
import { ReactLenis, useLenis } from 'lenis/react';
import Image from "next/image"

import heroImage1 from './lib/assets/92f9d47a-73f3-43e8-9cd9-10ded5e94487_rw_1920.jpg';
import heroImage2 from './lib/assets/ae9a53f1-ef7e-410c-a934-15e204d58e2c_rw_1200.jpg';
import backgroundImage1 from './lib/assets/0bf6c6a8-e516-46c3-a0b7-f1667f4b48c1_rw_1920.jpg'

function ScrollingBanner() {
    const clients = [
        "Client 1",
        "Client 2",
        "Client 3",
        "Client 4",
        "Client 5",
        "Client 6",
        "Client 7",
    ]
    const duplicatedClients = [...clients, ...clients, ...clients];
    return (
        <div className="w-100% py-2.5 text-[20px] lg:text-[25px] tracking-[1px] uppercase overflow-hidden whitespace-nowrap">
            <div className="flex w-max animate-marquee gap-5 lg:gap-15 pr-15">
                {duplicatedClients.map((name, index) => (
                    <p key={index} className='inline-block'>{name}</p>
                ))}
            </div>
        </div>
    )
}

export default function Home() {
    const lenis = useLenis((lenis) => {
        console.log(lenis);
    });
    return (
        <div>
            <ReactLenis root />
            <div className="hero w-screen h-[80vh]">{/* h-[80vh] | h-[calc(100vh-50px)] lg:h-[calc(100vh-57.5px)] */}
                <div className="w-full h-full flex items-center justify-center relative">
                    <div className="wrapper absolute z-0 top-0 left-0 flex flex-col lg:flex-row w-full h-full">
                        <div className="w-full lg:w-[50%] h-[50%] lg:h-full relative overflow-hidden">
                            <div className="hero-image-container absolute w-full h-full top-0 left-0">
                                <Image src={heroImage1} alt="image" style={{objectFit: 'cover'}} preload={true} />
                            </div>
                            <div></div>
                        </div>
                        <div className="w-full lg:w-[50%] h-[50%] lg:h-full relative overflow-hidden">
                            <div className="hero-image-container absolute w-full h-full top-0 left-0">
                                <Image src={heroImage2} alt="image" style={{objectFit: 'cover'}} preload={true} />
                            </div>
                            <div></div>
                        </div>
                    </div>
                    <div className="w-max h-max text-center text-shadow-[0_0_10px_black] pointer-events-none z-1 relative">
                        <p className="text-[20px] lg:text-[30px] tracking-[10px] uppercase">ritaseixas</p>
                        <h1 className="text-[50px] lg:text-[70px] tracking-[1px] uppercase">photography</h1>
                        <div className="absolute top-[120%] w-full flex justify-center">{/* change to flex when added */}
                            <div>
                                <div>
                                    <div className="w-10 h-20 my-2.5 mx-auto border-3 border-white rounded-[20px] flex">
                                        <div className="mouse-scroll block aspect-square w-5 rounded-[50%] bg-white m-auto animate-scroll"></div>
                                    </div>
                                    <p className="text-[15px] tracking-[2px] uppercase">scroll</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="scrolling-banner w-screen relative">
                <ScrollingBanner />
            </div>
            <div></div>
        </div>
    )
}