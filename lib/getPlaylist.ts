"use server"

const SPOTIFY_CLIENT_ID = process.env.SPOTIFY_CLIENT_ID!;
const SPOTIFY_CLIENT_SECRET = process.env.SPOTIFY_CLIENT_SECRET!;
//const playlist_id = "6OFZElgLXsPRIJh2ngKTnp";

export async function getSpotifyAccessToken() {
    try {
        const res = await fetch("https://accounts.spotify.com/api/token", {
            method: "POST",
            headers: {
                Authorization: "Basic " + Buffer.from(`${SPOTIFY_CLIENT_ID}:${SPOTIFY_CLIENT_SECRET}`).toString("base64"),
                "Content-Type": "application/x-www-form-urlencoded",
            },
            body: "grant_type=client_credentials",
        });

        if (res.status === 429) {
            return null;
        } else if (res.status !== 200) {
            return undefined;
        }

        const data = await res.json();
        return data.access_token;
    } catch (error) {
        console.log("Spotify token error occurred:", error);
        return undefined;
    }

}

export async function getPlaylist(playlistId: string) {
    try {
        if (!playlistId) return undefined;

        const token = await getSpotifyAccessToken();
        const res = await fetch(`https://api.spotify.com/v1/playlists/${playlistId}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });

        if (res.status === 429) {
            return null;
        } else if (res.status !== 200) {
            return undefined;
        }

        const data = await res.json();

        return {
            id: data.id,
            name: data.name,
            ownerName: data.owner?.display_name ?? "Unknown",
            spotifyUrl: data.external_urls.spotify,
            imageUrl: data.images[0]?.url ?? "",
        };
    } catch (error) {
        console.log("error occurred:", error);
        return undefined;
    }
}
