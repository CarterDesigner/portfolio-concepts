import Link from "next/link"

export default function Navbar() {
    return (
        <nav className="w-screen h-22.5 fixed top-0 left-0 z-10 px-2.5 lg:px-5">
            <div className="w-full h-full flex flex-row justify-center items-center relative">
                <div className="lg:hidden"></div>
                <div className="hidden lg:flex flex-row gap-2.5 text-[16px] uppercase absolute left-0">
                    <Link href={'/concepts/photography-portfolio-1/portfolio'}>portfolio</Link>
                    <Link href={'/concepts/photography-portfolio-1/about'}>about</Link>
                    <Link href={'/concepts/photography-portfolio-1/contact'}>contact</Link>
                </div>
                <div className="text-[22.5px] uppercase">
                    <Link href={'/concepts/photography-portfolio-1'}>rita seixas</Link>
                </div>
                <div className=""></div>
            </div>
        </nav>
    )
}