"use client";
import Link from "next/link";

export default function Ctabtn({ children, href }: { children: React.ReactNode; href: string;}) {
    return (
        <div className="btn-style-primary max-h-27.5 overflow-hidden">
            <Link href={href} className="">{children}</Link>
        </div>
    )
}