import {getPlaylist} from "@/lib/getPlaylist";
import {WeatherDayProps} from "@/types";

export default async function GeneratePlaylist({ weather }: { weather: WeatherDayProps }) {

    const playlistCondition: Record<string, string> = {

        //These are all playlist ID of some playlists
        //I chose for each weather

        clear: "2RTmyxpcu6aOyd9AqukEYe",
        sunny: "2RTmyxpcu6aOyd9AqukEYe",
        "mostly sunny": "2RTmyxpcu6aOyd9AqukEYe",

        clouds: "6s2mpgO2fqTAXExpduv2WW",
        cloudy: "6s2mpgO2fqTAXExpduv2WW",
        "partly cloudy": "6s2mpgO2fqTAXExpduv2WW",
        "partially cloudy": "6s2mpgO2fqTAXExpduv2WW",
        "mostly cloudy": "6s2mpgO2fqTAXExpduv2WW",

        rain: "6OFZElgLXsPRIJh2ngKTnp",
        "light rain": "6OFZElgLXsPRIJh2ngKTnp",
        "moderate rain": "6OFZElgLXsPRIJh2ngKTnp",
        "heavy rain": "6OFZElgLXsPRIJh2ngKTnp",

        drizzle: "3TG6tSjpPQyCRgbdwC1QFs",

        thunderstorm: "6riD5QU5aPboCO7pAfZVRN",
        "severe thunderstorm": "6riD5QU5aPboCO7pAfZVRN",

        snow: "5LKwsGYskR7UUHwsBB1dCx",
        "light snow": "5LKwsGYskR7UUHwsBB1dCx",
        "heavy snow": "5LKwsGYskR7UUHwsBB1dCx",
        blizzard: "5LKwsGYskR7UUHwsBB1dCx",

        mist: "3TG6tSjpPQyCRgbdwC1QFs",
        smoke: "2SLInnIq029XmeWzDZgRsp",
        haze: "2SLInnIq029XmeWzDZgRsp",
        dust: "2SLInnIq029XmeWzDZgRsp",
        fog: "2SLInnIq029XmeWzDZgRsp",
        sand: "2SLInnIq029XmeWzDZgRsp",
        ash: "2SLInnIq029XmeWzDZgRsp",
        squall: "0tvTKWuNraoLD79QYNQqjs",
        tornado: "0tvTKWuNraoLD79QYNQqjs",

    }

    const condition = weather.conditions.split(",")[0].toLowerCase().trim();
    const playlistId = playlistCondition[condition ?? "clear"];

    try {
        const playlist = await getPlaylist(playlistId);

        if (!playlist) {
            return <p>Couldn&pos;t load playlist. Try again later.</p>;
        }
        //console.log("playlist ID:", playlistId);

        return (
            <main className="bg-white/80 rounded-3xl p-6 text-center shadow-lg mx-auto w-[70%] max-w-3xl">
                <h2 className="text-xl font-semibold mb-6 text-center">Spotify Playlist Recommendation</h2>

                <div className="flex flex-col items-center gap-4 opacity-100">
                    <img
                        src={playlist.imageUrl}
                        alt="playlist image"
                        className="w-40 h-40 rounded-lg object-cover"
                    />

                    <div className="flex flex-col text-center">
                        <div className="mb-4">
                            <p className="text-sm text-gray-700">
                                <span className="font-semibold">Playlist name:</span> {playlist.name}
                            </p>
                            <p className="text-sm text-gray-700">
                                <span className="font-semibold">Owner:</span> {playlist.ownerName}
                            </p>
                        </div>

                        <a
                            href={playlist.spotifyUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center px-5 py-2 text-white bg-green-500 hover:bg-green-400 rounded-full shadow-md gap-2 duration-200"
                        >
                            Open in Spotify
                            <svg xmlns="http://www.w3.org/2000/svg"
                                 fill="none" viewBox="0 0 24 24"
                                 strokeWidth="1.5"
                                 stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round"
                                      d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
                            </svg>
                        </a>
                    </div>
                </div>
            </main>
        );
    } catch (error) {
        console.error("Playlist fetch failed:", error);
        return <p>Couldn&pos;t load playlist. Try again later.</p>;
    }
}
