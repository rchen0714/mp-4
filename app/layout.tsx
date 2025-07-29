import type {Metadata} from "next";
import "./global.css";
import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";


export const metadata: Metadata = {
    title: "Weather Playlist App",
    description: "Generate a random playlist based on the weather of your city",
};

export default function RootLayout({children,}: Readonly<{children: React.ReactNode;}>){
    return (
        <html lang="en">
            <body>
                <Header/>
                {children}
                <Footer/>
            </body>
        </html>
    );

}
