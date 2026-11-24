import { ReactNode } from "react";
import Link from "next/link";
import './cta2styles.css';

export default function Cta2({ children, link }: { children: ReactNode, link: string }) {
    return (
        <div id="cta2" className="bg-safety-orange w-full h-full">
            <Link href={link} className="w-full h-full px-4.25 py-3 flex items-center justify-center">
                <span className="link-text text-bright-snow-white">{children}</span>
            </Link>
        </div>
    )
}