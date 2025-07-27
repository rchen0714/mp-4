import Link from "next/link";

export default function Header() {
    return (
        <header className="">
            <h3 className={"font-neuro"}>Welcome to</h3>
            <Link href="/" >
                <h2 className="font-neuro">MoodCast</h2>
            </Link>
            <h1 className="text-4xl font-sans text-blue-600">This is font-sans and blue</h1>
            <h1 className="text-4xl font-serif bg-red-300">This is font-serif and red</h1>
            <h1 className="text-4xl font-mono text-red-600">This is font-mono and red</h1>
        </header>
    );
}