import { useCallback, useState } from 'react';
import { View, TextInput, SafeAreaView, ActivityIndicator, Text, FlatList, TouchableOpacity } from 'react-native';
import { CurrentWeather } from '@/components/CurrentWeather';
import { styles } from './index.styles'
import { debounce } from 'lodash';
import useForecast from '@/hooks/useForecast';
import useLocation from '@/hooks/useLocation';

export default function Index() {

  const [city, setCity] = useState<string>('');
  const [pickedCity, setPickedCity] = useState<string>('');
  const [showSearch, setShowSearch] = useState<boolean>(true);
  const { location } = useLocation(city);
  const { loading, cityName, temperature, condition, error, icon, country } = useForecast(pickedCity);

  const getNextFiveHours = (temperature: number, icon: string) =>
    Array.from({ length: 5 }).map((_, i) => {
      const currentHour = new Date().getHours();
      const hour = (currentHour + i + 1) % 24; // Get the next hour, and wrap around to 0 if it's past 23
      return {
        time: `${hour}:00`,
        temperature: Math.floor(Math.random() * 10) + temperature,
        icon: icon,
      };
    });

  const handleSearch = (value: string) => {
    setCity(value);
    setShowSearch(true);
  }

  const renderLocationSearch = () => {
    return location && showSearch && location.map((location, index) => (
      <TouchableOpacity style={styles.searchLocation} key={index} onPress={() => {
        setPickedCity(location.name);
        setShowSearch(false);
      }}>
        <Text style={styles.location}>{`${location.name}, ${location.country}`}</Text>
      </TouchableOpacity>
    ));
  };

  const handleTextDebounce = useCallback(debounce(handleSearch, 1200), []);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.searchContainer}>
        <TextInput style={{ fontSize: 20 }} placeholder='Search Location' onChangeText={handleTextDebounce} />
      </View>
      {renderLocationSearch()}
      {error ? (
        <View style={styles.errorContainer}>
          <Text style={styles.errorText}>Please enter a location to search</Text>
        </View>
      ) : loading ? (
        <View style={styles.loadingContainer}>
          <ActivityIndicator />
        </View>
      ) : (
        <View style={styles.contentContainer}>
          <CurrentWeather
            city={cityName}
            country={country}
            temperature={temperature?.toString()}
            condition={condition}
            iconUrl={icon}
          />
          <Text style={styles.hourlyHeader}>Hourly Forecast</Text>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={getNextFiveHours(temperature!, icon!)}
            keyExtractor={(_, i) => i.toString()}
            contentContainerStyle={{ marginRight: 15 }}
            renderItem={({ item }) => (
              <CurrentWeather
                time={item.time}
                temperature={item.temperature.toString()}
                iconUrl={item.icon}
                future
              />
            )}
          />
        </View>
      )}
    </SafeAreaView>
  );
}
