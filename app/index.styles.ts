import { StyleSheet } from 'react-native';

const DEFAULT_SPACING = 15

export const styles = StyleSheet.create({
    searchContainer: {
        padding: DEFAULT_SPACING,
        margin: DEFAULT_SPACING,
        backgroundColor: '#E6E6FA',
        alignItems: 'center',
        borderRadius: 10,
    },
    contentContainer: {
        padding: DEFAULT_SPACING,
    },
    errorContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    errorText: {
        color: 'grey',
        fontSize: 25,
        alignContent: 'center'
    },
    hourlyHeader: {
        padding: DEFAULT_SPACING,
        fontWeight: 'light',
        fontSize: 20,
        color: 'gray'
    },
    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    searchLocation: {
        backgroundColor: '#fff',
        marginHorizontal: DEFAULT_SPACING,
        borderRadius: 5,
        padding: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    location: {
        marginLeft: DEFAULT_SPACING,
        fontSize: 18,
        color: '#333',
        fontFamily: 'Arial',
    },
});
