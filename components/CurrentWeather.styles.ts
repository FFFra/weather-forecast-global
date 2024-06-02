
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        padding: 16,
    },
    futureContainer: {
        borderWidth: 0.9,
        borderColor: 'lightgrey',
        borderRadius: 10,
        marginLeft: 15,
        backgroundColor: 'white',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.2,
        shadowRadius: 3.84,
        elevation: 5, // for Android
    },
    city: {
        fontSize: 40,
        fontWeight: 'bold',
    },
    country: {
        fontSize: 18,
        color: 'gray',
    },
    temperature: {
        fontSize: 60,
        fontWeight: 'light',
    },
    Futuretemperature: {
        fontSize: 25,
        fontWeight: 'bold',
        color: "dimgray"
    },
    icon: {
        width: 90,
        height: 90,
    },
    condition: {
        fontSize: 20,
        marginTop: 8,
        fontWeight: 400,
    },
});
