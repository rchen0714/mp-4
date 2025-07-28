// Weather API

export interface WeatherDayProps {
    datetime: number;
    sunrise: number;
    sunset: number;

    temperature: number;
    temperaturemax: number;
    temperaturemin: number;

    feelslikemax: number;
    feelslikemin: number;
    feelslike: number;

    conditions: string;
    description: string;
    icon: string;
}



// Spotify / Playlist API


export interface PlaylistProps {
    id: string;
    name: string;
    ownerName: string;
    spotifyUrl: string;
    imageUrl: string;
}

