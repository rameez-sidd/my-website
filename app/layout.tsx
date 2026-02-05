import type { Metadata } from "next";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import Navbar from "@/components/Navbar";
import { Poppins, Unna } from "next/font/google";
import CustomCursor from "@/components/CustomCursor";

const poppins = Poppins({
    subsets: ["latin"],
    variable: "--font-poppins",
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
})

const unna = Unna({
    subsets: ["latin"],
    variable: "--font-unna",
    weight: ["400", "700"],
})

export const metadata: Metadata = {
    title: "Rameez Siddiqui | Software Engineer",
    description: "Portfolio of Rameez Siddiqui, a Software Engineer specializing in scalable full-stack systems and engineered web experiences.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${poppins.variable} ${unna.variable} antialiased`}>
                <SmoothScroll>
                    <div className="hidden md:block">
                        <CustomCursor />
                    </div>
                    <Navbar />
                    {children}
                </SmoothScroll>
            </body>
        </html>
    );
}
