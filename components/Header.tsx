import Link from "next/link";
import localFont from "next/font/local";

const myFont=localFont(
    {
        src:"../public/Neuropol X rg.otf",
        variable: "--my-custom-font",
        display:"swap",
    }
)

export default function Header() {
    return (
        <header className={myFont.className}>
            <div className="p-10">
                <h3 className="text-white text-xl drop-shadow-gray-950">Welcome to</h3>
                <Link href="/" >
                    <h2 className="text-green-500 text-3xl font-semibold drop-shadow-md">MoodCast</h2>
                </Link>
            </div>
        </header>
    );
}