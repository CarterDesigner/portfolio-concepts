"use client";

import Link from "next/link";
import Image from "next/image";
import { ReactNode, useState } from "react";
import Logo from "../../../public/Full Logo.svg";
import "./navstyles.css";
import Cta2 from "../cta btn/cta2/page";

function Navbtn({ children, link }: { children: ReactNode, link: string; }) {
    return (
        <div className="h-full w-auto flex items-center">
            <Link href={link}>
                <span className="link-text text-black">{children}</span>
            </Link>
        </div>
    )
}

function DropMenu({ isExpanded, onClose }: { isExpanded: boolean, onClose: () => void }) {
    return (
        <div id="drop-menu" className={`w-full h-auto absolute top-[calc(100%+1px)] left-0 -z-1 bg-bright-snow-white ${isExpanded ? 'block' : 'hidden'}`}>
            <div className="w-full h-auto flex flex-col">
                <div className="w-full h-25 flex items-center px-5 border-b border-safety-orange">
                    <Link href={"/"}>
                        <span className="header-3 text-black">Home</span>
                    </Link>
                </div>
                <div className="w-full h-25 flex items-center px-5 border-b border-safety-orange">
                    <Link href={"/"}>
                        <span className="header-3 text-black">Services</span>
                    </Link>
                </div>
                <div className="w-full h-25 flex items-center px-5 border-b border-safety-orange text-left bg-safety-orange">
                    <Link href={"/"}>
                        <span className="header-3 text-bright-snow-white">Get a Quote</span>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default function Navbar() {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <nav className="w-screen h-20 fixed top-0 left-0 z-10 border-b border-safety-orange bg-bright-snow-white">
            <div className="w-full h-full flex flex-row justify-between relative">
                <div id="nav-logo-left" className="h-full w-auto px-5 flex items-center">
                    <Link href={"/"}>
                        <Image src={Logo} alt="logo home btn" height={42} width={111} loading="eager" />
                    </Link>
                </div>
                <div id="nav-links-right" className="h-full w-auto hidden lg:flex flex-row items-center gap-15">
                    <Navbtn link="/">Home</Navbtn>
                    <Navbtn link="#services">Services</Navbtn>
                    <Cta2 link="#contact">Get a Quote</Cta2>
                </div>
                <div id="dropbtn" className="h-full w-auto lg:hidden flex items-center px-5">
                    <button
                        id="dropbtn-wrapper"
                        className={`h-[36.5px] aspect-square relative cursor-pointer ${isExpanded ? 'expanded' : ''}`}
                        type="button"
                        aria-expanded={isExpanded}
                        onClick={()=>setIsExpanded((prev)=>!prev)}
                    ></button>
                </div>
                <DropMenu isExpanded={isExpanded} onClose={()=>setIsExpanded(false)} />
            </div>
        </nav>
    )
}