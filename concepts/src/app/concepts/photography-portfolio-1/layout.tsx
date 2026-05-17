import type { Metadata } from 'next';
import { Oswald } from 'next/font/google';
import "./globals.css";

import Navbar from './lib/components/navbar/page';

const oswald = Oswald({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700'],
})

export const metadata: Metadata = {
    title: "Photography Portfolio Concept - by CaterDesigner",
    description: "A photographer's concept portfolio built by CarterDesigner",
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode,
}>) {
    return (
        <html lang='en' className={`${oswald.className} h-full antialiased overflow-x-hidden`}>
            <body>
                <Navbar />
                {children}
            </body>
        </html>
    )
}