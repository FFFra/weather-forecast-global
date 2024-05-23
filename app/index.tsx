import { Text, View, TextInput, ScrollView } from "react-native";
import { CurrentWeather } from "@/components/CurrentWeather";
import { FutureWeather } from "@/components/FutureWeather";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <View>
        <TextInput placeholder="Search City" />
      </View>
      <View>
        <CurrentWeather></CurrentWeather>
      </View>
      <ScrollView
        horizontal
      >
        <CurrentWeather></CurrentWeather>
        <CurrentWeather></CurrentWeather>
        <CurrentWeather></CurrentWeather>
        <CurrentWeather></CurrentWeather>
        <CurrentWeather></CurrentWeather>
      </ScrollView>
    </View>
  );
}