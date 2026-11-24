'use client';

import { Children, ReactNode, useRef, useState } from 'react';

export default function ScrollableBar({ children }: { children: ReactNode }) {
    const items = Children.toArray(children);
    const wrapperRef = useRef<HTMLDivElement>(null);
    const [activeIndex, setActiveIndex] = useState(0);

    const handleScroll = () => {
        const el = wrapperRef.current;
        if (!el) return;
        const index = Math.round(el.scrollLeft / el.clientWidth);
        setActiveIndex(index);
    };

    const scrollToSlide = (index: number) => {
        const el = wrapperRef.current;
        if (!el) return;
        const clampedIndex = Math.max(0, Math.min(index, items.length - 1));
        el.scrollTo({
            left: clampedIndex * el.clientWidth,
            behavior: 'smooth',
        });
        setActiveIndex(clampedIndex);
    }

    return (
        <div className="w-full flex flex-col">
            <div
                ref={wrapperRef}
                onScroll={handleScroll}
                className='flex w-full h-full overflow-x-auto snap-x snap-mandatory scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden'    
            >
                {items.map((child, idx) => (
                    <div key={idx} className='w-full shrink-0 snap-start'>
                        {child}
                    </div>
                ))}
            </div>
            <div className='flex w-full border-t border-safety-orange link-text'>
                <button
                    type='button'
                    onClick={() => scrollToSlide(activeIndex - 1)}
                    disabled={activeIndex === 0}
                    className='w-1/2 py-5 border-r border-safety-orange bg-bright-snow-white text-black transition-colors hover:bg-black hover:text-bright-snow-white'
                >
                    ← Prev
                </button>
                <button
                    type='button'
                    onClick={() => scrollToSlide(activeIndex + 1)}
                    disabled={activeIndex === items.length - 1}
                    className='w-1/2 py-5 bg-bright-snow-white text-black transition-colors hover:bg-black hover:text-bright-snow-white'
                >
                    Next →
                </button>
            </div>
        </div>
    )
}