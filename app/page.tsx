"use client"

import Link from "next/link";
import {useState} from "react";
import "./global.css";

export default function Home(){
  const [city, setCity] = useState("");
  return (
    <>
        <main className="bg-white/60 backdrop-blur-md p-6 rounded-xl shadow-xl max-w-md w-full border border-white">
            <form action={`/${city}`}>
                <div className="space-y-2 mb-4">
                    <label htmlFor="city" className="block font-semibold">
                        City Name
                    </label>
                    <input
                        id="city"
                        placeholder="e.g. London, New York, Tokyo"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        className="w-full p-2 rounded-lg border-2"
                    />
                </div>
                <Link
                    href={`/${city}`}
                    className="block w-full text-white bg-green-500 hover:bg-green-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                >
                    Get Weather
                </Link>
            </form>
        </main>
    </>
  );

}


