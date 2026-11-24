import { ReactNode } from 'react';
import React from 'react';

interface MarqueeProps {
    children: ReactNode;
    speed?: number;
    gap?: string;
    className?: string;
}

export default function MarqueeBar({
    children,
    speed = 25,
    gap = 'gap-10',
    className = '',
}: MarqueeProps) {
    const trackStyles = { gap, paddingRight: gap};
    return (
        <div
            className={`w-full overflow-hidden flex select-none ${className}`}
            style={{ '--marquee-duration': `${speed}s`} as React.CSSProperties}   
        >
            <div
                className={`w-max flex shrink-0 items-center animate-marquee`}

            >
                <div 
                    className={`flex shrink-0 items-center whitespace-nowrap`}
                    style={trackStyles}    
                >
                    {children}
                </div>
                <div
                    aria-hidden="true" 
                    className={`flex shrink-0 items-center whitespace-nowrap`}
                    style={trackStyles}
                >
                    {children}
                </div>
            </div>
        </div>
    )
}