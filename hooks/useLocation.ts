import { useEffect, useState } from 'react';
import axios from 'axios';

interface Location {
    id: number;
    name: string;
    region: string;
    country: string;
    lat: number;
    lon: number;
    url: string;
}

const useLocation = (search: string) => {
    const [location, setLocation] = useState<Location[] | null>(null);
    const [locationError, setError] = useState(null);

    useEffect(() => {
        const fetchLocation = async () => {
            try {
                const response = await axios.get('http://api.weatherapi.com/v1/search.json', {
                    params: {
                        key: process.env.API_KEY,
                        q: search,
                    }
                });
                setLocation(response.data);
            } catch (error: any) {
                setError(error);
            }
        };

        fetchLocation();

    }, [search]);
    return { location, locationError };
};

export default useLocation;
