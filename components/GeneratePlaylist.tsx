import {getPlaylist} from "@/lib/getPlaylist";
import {WeatherDayProps} from "@/types";

export default async function GeneratePlaylist({ weather }: { weather: WeatherDayProps }) {

    const playlistCondition: Record<string, string> = {
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

    const rawCondition = weather.conditions.toLowerCase();
    const parsedCondition = Object.keys(playlistCondition).find((key) =>
        rawCondition.includes(key)
    );

    const playlistId = playlistCondition[parsedCondition ?? "clear"];

    try {
        const playlist = await getPlaylist(playlistId);

        console.log("Raw condition:", rawCondition);
        console.log("Mapped condition:", parsedCondition);
        console.log("Selected playlist ID:", playlistId);

        return (
            <main>
                <h1>Spotify Playlist Recommendation</h1>
                <p>Name: {playlist.name}</p>
                <p>Owner: {playlist.ownerName}</p>
                <a href={playlist.spotifyUrl} target="_blank" rel="noopener noreferrer">
                    Open on Spotify
                </a>
                <img src={playlist.imageUrl} alt="Playlist Cover" width={200} />
            </main>
        );
    } catch (error) {
        console.error("Playlist fetch failed:", error);
        return <p>Sorry, couldn&pos;t load the playlist. Try again later.</p>;
    }
}
