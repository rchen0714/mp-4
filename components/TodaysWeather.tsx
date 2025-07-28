import { WeatherDayProps } from "@/types";

export default function TodaysWeather({
                                           weather,
                                       }: {
    weather: WeatherDayProps;
}) {
    return (
        <div>
            <h3>{weather.datetime}</h3>
            <h2>{weather.temperature}°F</h2>
            <p>
                {weather.temperaturemin}°F – {weather.temperaturemax}°F
            </p>
            <div>
                <div>
                    <p>Feels Like</p>
                    <p>{weather.feelslike}°F</p>
                </div>
            </div>
            <p>{weather.conditions}</p>
            <p>{weather.description}</p>
        </div>
    );
}
