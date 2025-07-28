import getForecast from "@/lib/getForecast";
import TodaysWeather from "@/components/TodaysWeather";
import GeneratePlaylist from "@/components/GeneratePlaylist";
import Link from "next/link";

export default async function CityWeather({city}: { city: string }) {
    const data = await getForecast(city);

    // console.log(data);

    if (!data) {
        return (
            <main>
                <div>
                    {data === undefined ? (
                        <>
                            <p>
                                There&apos;s no weather information for{" "} please enter a valid city name.
                            </p>
                            <div>
                                <Link
                                    href={`/`}
                                    className="block w-full text-white bg-green-500 hover:bg-green-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                                >
                                    Back
                                </Link>
                            </div>
                        </>
                    ) : (
                        <>
                            <p>
                                Something went wrong while calling API for weather data. Please
                                try again later.
                            </p>
                            <div>
                                <Link
                                    href={`/`}
                                    className="block w-full text-white bg-green-500 hover:bg-green-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                                >
                                    Back
                                </Link>
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
                <header>
                    <div>
                        <h2>Weather in {data.location}</h2>
                        <div/>
                    </div>
                    <p>Current conditions and 7-day forecast</p>
                </header>
                <div>
                    <TodaysWeather weather={data.forecast[0]}/>
                </div>

                <h3>Generate Today&apos;s Playlist</h3>
                <div>
                    <GeneratePlaylist weather={data.forecast[0]}/>
                </div>
            </div>
        </main>
    );
}