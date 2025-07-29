import { WeatherDayProps } from "@/types";

export default function TodaysWeather({weather,}:
{
    weather: WeatherDayProps;
}) {
    return (
        <main className="bg-white/80 backdrop-blur-md rounded-3xl p-6 text-center shadow-lg mx-auto w-[70%] max-w-3xl">
            <h2 className="text-xl font-semibold mb-2">
                Today’s Weather: {weather.datetime}
            </h2>

            <p className="text-lg font-medium text-gray-800 mb-5">{weather.conditions}</p>

            <div className="flex items-center justify-center gap-6 mb-5">
                {weather.icon && (
                    <img
                        src={`https://raw.githubusercontent.com/visualcrossing/WeatherIcons/main/PNG/2nd%20Set%20-%20Color/${weather.icon}.png`}
                        alt={weather.conditions}
                        className="w-15 h-15"
                    />
                )}
                <div>
                    <p className="text-4xl font-bold">{weather.temp}°</p>
                    <p className="text-sm text-gray-700">Feels like {weather.feelslike}°</p>
                </div>
            </div>

            <p className="text-sm text-gray-700 mb-2">
                H: {weather.tempmax}° &nbsp;&nbsp;|&nbsp;&nbsp; L: {weather.tempmin}°
            </p>

            <div className="grid grid-cols-3 gap-6 text-sm text-gray-700 mt-5">
                <div>
                    <p className="font-semibold">Humidity</p>
                    <p>{weather.humidity}%</p>
                </div>
                <div>
                    <p className="font-semibold">Precip</p>
                    <p>{weather.precipitation ?? 0} in</p>
                </div>
                <div>
                    <p className="font-semibold">Sunrise</p>
                    <p>{weather.sunrise}</p>
                </div>

                <div>
                    <p className="font-semibold">UV Index</p>
                    <p>{weather.uvindex}</p>
                </div>
                <div>
                    <p className="font-semibold">Wind</p>
                    <p>{weather.windspeed} mph</p>
                </div>
                <div>
                    <p className="font-semibold">Sunset</p>
                    <p>{weather.sunset}</p>
                </div>
            </div>
        </main>
    );
}
