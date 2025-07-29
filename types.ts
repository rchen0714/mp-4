// Weather API

export interface WeatherDayProps {
    datetime: number;
    sunrise: number;
    sunset: number;

    temp: number;
    tempmax: number;
    tempmin: number;

    feelslike: number;

    humidity: number;
    precipitation: number;
    uvindex: number;
    windspeed: number;

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

