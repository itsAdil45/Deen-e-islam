import { View, Text, Button } from 'react-native'
import React from 'react'
import * as Location from 'expo-location';
import { useState, useEffect } from 'react';


export default function Home({ navigation }) {
    const [locationServiceEnabled, setLocationServiceEnabled] = useState(false);
    const [displayCurrentAddress, setDisplayCurrentAddress] = useState(
        'Wait, we are fetching you location...'
    );
    const [city, setCity] = useState("");
    useEffect(() => {
        CheckIfLocationEnabled();
        GetCurrentLocation();
    }, []);


    const CheckIfLocationEnabled = async () => {
        let enabled = await Location.hasServicesEnabledAsync();

        if (!enabled) {
            Alert.alert(
                'Location Service not enabled',
                'Please enable your location services to continue',
                [{ text: 'OK' }],
                { cancelable: false }
            );
        } else {
            setLocationServiceEnabled(enabled);
        }
    };

    const GetCurrentLocation = async () => {
        let { status } = await Location.requestForegroundPermissionsAsync();

        if (status !== 'granted') {
            Alert.alert(
                'Permission not granted',
                'Allow the app to use location service.',
                [{ text: 'OK' }],
                { cancelable: false }
            );
        }

        let { coords } = await Location.getCurrentPositionAsync();

        if (coords) {
            const { latitude, longitude } = coords;
            let response = await Location.reverseGeocodeAsync({
                latitude,
                longitude
            });

            for (let item of response) {
                let address = `${item.city}`;
                setCity(address);
                console.log(city);
                setDisplayCurrentAddress(address);
                // if (address.length > 0) {
                //   setTimeout(() => {
                //     navigation.navigate('Home', { item: address });
                //   }, 2000);
                // }
            }
        }
    };
    return (
        <View>
            <Text>Home</Text>
            <Button title='Go to Prayers' onPress={() => navigation.navigate("Prayers", { item: city })} />
        </View>
    )
}
// navigator.routes.params