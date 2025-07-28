"use client"

import Link from "next/link";
import {useState} from "react";
import "./global.css";
import { Noto_Sans } from "next/font/google";

const notoSans = Noto_Sans(
    {
        subsets:['latin'],
        weight: ["400", "500", "600", "700"],
    }
);

export default function Home(){
  const [city, setCity] = useState("");
  return (
    <>
        <div className="flex justify-center items-center m-5">
            <main className={`${notoSans.className} bg-transparent border-2 border-white rounded-4xl p-10 w-2xl`}>
            <form action={`/${city}`}>
                    <div className="space-y-5 mb-5">
                        <h1 className="mt5 mb-5 text-center text-3xl font-bold text-white">Let the weather set your Daylist.</h1>
                        <p className="text-white text-center mb-10">Enter a city name to get the weather and a playlist to match the mood!  </p>
                        <label htmlFor="city" className="block font-medium text-white">
                            City Name
                        </label>
                        <input
                            id="city"
                            placeholder="e.g. Boston, Tokyo, Shanghai"
                            value={city}
                            onChange={(e) => setCity(e.target.value)}
                            className="w-full p-2 rounded-xl bg-white opacity-90"
                        />
                    </div>
                    <div className="flex justify-center">
                        <Link
                            href={`/${city}`}
                            className="inline-flex items-center gap-2 text-white bg-green-500 hover:bg-green-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center shadow-md"
                        >
                            Get Weather
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                                 stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round"
                                      d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"/>
                            </svg>
                        </Link>
                    </div>
            </form>
            </main>
        </div>

    </>
  );

}


