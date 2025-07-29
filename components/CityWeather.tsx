import getForecast from "@/lib/getForecast";
import TodaysWeather from "@/components/TodaysWeather";
import GeneratePlaylist from "@/components/GeneratePlaylist";
import Link from "next/link";

export default async function CityWeather({city}: { city: string }) {
    const data = await getForecast(city);

    console.log(data);

    if (!data) {
        return (
            <main>
                <div>
                    {data === undefined ? (
                        <>
                            <div className="bg-white/80 rounded-3xl p-6 text-center shadow-lg mx-auto w-[70%] max-w-3xl">
                                <p className="mb-5">
                                    There&apos;s no weather information for{" "} please enter a valid city name.
                                </p>
                                <div>
                                    <Link
                                        href={`/`}
                                        className="inline-flex items-center text-white bg-green-500 hover:bg-green-400 font-medium rounded-full text-sm px-10 py-2.5 text-center shadow-md"
                                    >
                                        Back
                                    </Link>
                                </div>
                            </div>
                        </>
                    ) : (
                        <>
                            <div className="bg-white/80 rounded-3xl p-6 text-center shadow-lg mx-auto w-[70%] max-w-3xl">
                                <p className="mb-5">
                                    Something went wrong while calling API for weather data. Please
                                    try again later.
                                </p>
                                <div>
                                    <Link
                                        href={`/`}
                                        className="inline-flex items-center text-white bg-green-500 hover:bg-green-400 font-medium rounded-full text-sm px-10 py-2.5 text-center shadow-md"
                                    >
                                        Back
                                    </Link>
                                </div>
                            </div>
                        </>
                    )}
                </div>
            </main>
        );
    }

    return (
        <main>
            <div>
                <div className= "mb-10">
                    <h3 className="text-white text-xl font-semibold mb-6 text-center drop-shadow-md">{data.location}</h3>
                    <TodaysWeather weather={data.forecast[0]}/>
                </div>

                <div className= "mt-10">
                    <h3 className="text-white text-xl font-semibold mb-6 text-center drop-shadow-md">Today&apos;s Weather Playlist</h3>
                    <GeneratePlaylist weather={data.forecast[0]}/>
                </div>
            </div>
        </main>
    );
}