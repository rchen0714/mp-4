"use server";
import {WeatherDayProps} from "@/types";

const WEATHER_API_KEY = process.env.WEATHER_API_KEY;

export default async function getForecast(city: string,): Promise<{location: string; forecast: WeatherDayProps[]} | undefined | null> {
    try {
        if (!city) return undefined;

        const res = await fetch(
            `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}/next7days?unitGroup=us&include=days%2Ccurrent%2Cevent&key=${WEATHER_API_KEY}&contentType=json`,
        );

        if (res.status === 429) {
            return null;
        } else if (res.status !== 200) {
            return undefined;
        }

        const jsonRes = await res.json();

        console.log(jsonRes.resolvedAddress);
        return {location: jsonRes.resolvedAddress, forecast: jsonRes.days};

    } catch (error) {
        console.log("error occurred:", error);
        return undefined;
    }
}
