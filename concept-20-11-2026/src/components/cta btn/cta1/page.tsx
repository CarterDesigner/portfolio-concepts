import { ReactNode } from "react";
import Link from "next/link";
import './cta1styles.css';

export default function Cta1({ children, link }: { children: ReactNode, link: string }) {
    return (
        <div id="cta1" className="bg-navy-blue w-full h-full min-h-11.5 flex">
            <Link href={link} className="w-full h-full text-center px-4.25 py-6.25">
                <span className="link-text text-bright-snow-white">{children}</span>
            </Link>
        </div>
    )
}