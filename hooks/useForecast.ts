import { useState, useEffect } from 'react';
import axios from 'axios';

interface WeatherData {
    location: {
        name: string;
        country: string;
    };
    current: {
        temp_c: number;
        condition: {
            text: string;
            icon: string;
        };
    };
    forecast: {
        forecastday: {
            day: {
                condition: {
                    text: string;
                    icon: string;
                };
            };
        }[];
    };
}

interface UseForecastResult {
    loading: boolean;
    error: Error | null;
    cityName?: string;
    country?: string;
    temperature?: number;
    condition?: string;
    icon?: string;
}

const useForecast = (location: string): UseForecastResult => {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState<WeatherData | null>(null);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        const fetchForecast = async () => {
            setLoading(true);
            try {
                const response = await axios.get<WeatherData>('https://api.weatherapi.com/v1/forecast.json', {
                    params: {
                        key: process.env.API_KEY,
                        q: location,
                        days: 1,
                        aqi: 'no',
                        alerts: 'no'
                    }
                });
                setData(response.data);
                setError(null);
            } catch (err) {
                setError(err as Error);
                setData(null);
            } finally {
                setLoading(false);
            }
        };

        fetchForecast();
    }, [location]);

    const cityName = data?.location.name;
    const country = data?.location.country;
    const temperature = data?.current.temp_c;
    const condition = data?.forecast?.forecastday[0]?.day.condition.text;
    const icon = data?.current.condition.icon;

    return { loading, error, cityName, country, temperature, condition, icon };
};

export default useForecast;
