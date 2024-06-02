import React from 'react';
import { View, Text, Image } from 'react-native';
import { styles } from './CurrentWeather.styles';

interface CurrentWeatherProps {
    city?: string;
    time?: string;
    country?: string;
    condition?: string;
    iconUrl?: string;
    temperature?: string;
    future?: boolean;
}

export function CurrentWeather({ city, time, country, temperature, condition, iconUrl, future }: CurrentWeatherProps) {
    return (
        <View style={[styles.container, future && styles.futureContainer]}>
            <Text style={styles.city}>{future ? time : city}</Text>
            <Text style={styles.country}>{!future && country}</Text>
            {!future && <Text style={styles.temperature}>{temperature + ' °C'}</Text>}
            <Image source={{ uri: `https:${iconUrl}` }} style={styles.icon} />
            <Text style={styles.Futuretemperature}>{future && temperature + ' °C'}</Text>
            <Text style={styles.condition}>{condition}</Text>
        </View>
    );
}
