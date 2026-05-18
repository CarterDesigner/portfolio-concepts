"use client";
import { useRef, useEffect, useState, ReactNode } from 'react';
import { ReactLenis, useLenis } from 'lenis/react';
import Image from "next/image"

import heroImage1 from './lib/assets/92f9d47a-73f3-43e8-9cd9-10ded5e94487_rw_1920.jpg';
import heroImage2 from './lib/assets/ae9a53f1-ef7e-410c-a934-15e204d58e2c_rw_1200.jpg';
import backgroundImage1 from './lib/assets/0bf6c6a8-e516-46c3-a0b7-f1667f4b48c1_rw_1920.jpg';
import backgroundImage2 from './lib/assets/22be765d-3843-45f9-b2a3-2018b37a12de_rw_1200.jpg';

import ShootCard from './lib/components/shoot-card/page';

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

function RecentShootsScrollable({ children }: { children: ReactNode }) {
    const containerRef = useRef<HTMLDivElement>(null);
    const [innerWidth, setInnerWidth] = useState(0);
    const [closestChild, setClosestChild] = useState<Element | null>(null);
    useEffect(() => {
        if (containerRef.current) {
            const width = containerRef.current.clientWidth;
            setInnerWidth(width);
            const containerRect = containerRef.current.getBoundingClientRect();
            const containerMidpoint = containerRect.left + (width / 2);
            const children = Array.from(containerRef.current.children);
            let nearest: Element | null = null;
            let minDistance = Infinity;
            children.forEach((child) => {
                const childRect = child.getBoundingClientRect();
                const childMidPoint = childRect.left + (childRect.width / 2);
                const distance = Math.abs(containerMidpoint - childMidPoint);
                if (distance < minDistance) {
                    minDistance = distance;
                    nearest = child;
                }
            });
            setClosestChild(nearest);
            closestChild?.classList.toggle('.active');
        }
    }, []);
    {/* CALCULATE THE MID POINT OF THE SCREEN (WIDTH-WAYS) AND FIND WHICH CHILD ELEMENT OF THE REFERENCE DIV IS CLOSEST. THEN GIVE THAT CARD A CLASS THAT MAKES IT BIGGER AND INTERACTABLE */}
    return (
        <div className="recent-shoots w-full relative">
            <div className='h-full absolute hidden lg:flex items-center top-0 left-10 z-5'>
                <div className='aspect-square h-25 border-2 flex items-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 66 43" fill='#fff' className='rotate-180'>
                        <polygon
                          points="39.58,4.46 44.11,0 66,21.5 44.11,43 39.58,38.54 56.94,21.5"
                        ></polygon>
                    </svg>
                </div>
            </div>
            <div ref={containerRef} className='card-parent-div relative flex flex-row gap-5 -z-1'>
                {children}
            </div>
            <div className='h-full absolute hidden lg:flex items-center top-0 right-10 z-5'>
                <div className='aspect-square h-25 border-2 flex items-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 66 43" fill='#fff'>
                        <polygon
                          points="39.58,4.46 44.11,0 66,21.5 44.11,43 39.58,38.54 56.94,21.5"
                        ></polygon>
                    </svg>
                </div>
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
            <div className='w-screen flex justify-center py-5 mt-10'>
                <RecentShootsScrollable>
                    <ShootCard title='Shoot 1' description='desc' imageLinks={[backgroundImage1.src, backgroundImage2.src]} />
                    <ShootCard title='Shoot 1' description='desc' imageLinks={[backgroundImage1.src, backgroundImage2.src]} />
                    <ShootCard title='Shoot 1' description='desc' imageLinks={[backgroundImage1.src, backgroundImage2.src]} />
                    <ShootCard title='Shoot 1' description='desc' imageLinks={[backgroundImage1.src, backgroundImage2.src]} />
                    <ShootCard title='Shoot 1' description='desc' imageLinks={[backgroundImage1.src, backgroundImage2.src]} />
                </RecentShootsScrollable>
            </div>
        </div>
    )
}