"use client";
import "./nav.css";
import Link from "next/link";
import Logo from "../logo/page";
import Ctabtn from "../cta-btn/page";

function Navbtn({ children, href }: { children: React.ReactNode; href: string;}) {
    return (
        <div className="btn-style-primary max-h-27.5">
            <Link href={href}>{children}</Link>
        </div>
    )
}

export default function Navbar() {
    return (
        <div className="navbar w-screen h-27.5 bg-black fixed top-0 left-0 z-10">
            <div className="content w-full h-full flex flex-row justify-between lg:justify-start lg:px-2.5">
                <div className="hamburger"></div>
                <div className="logo overflow-hidden">
                    <Link href="/" className="h-full flex items-center">
                        <Logo />
                    </Link>
                </div>
                <Navbtn href="/about">About</Navbtn>
                <Navbtn href="/projects">Projects</Navbtn>
                <Navbtn href="/blog">Blog</Navbtn>
                <Ctabtn href="/contact">Contact Me</Ctabtn>
            </div>
        </div>
    )
}