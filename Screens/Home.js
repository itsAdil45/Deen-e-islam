import { View, Text, Button, Image, ImageBackground, ScrollView } from 'react-native'
import React from 'react'
import * as Location from 'expo-location';
import { useState, useEffect } from 'react';
import { Shadow } from 'react-native-shadow-2';
import styles from './HomeStyle';
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
        <ScrollView style={styles.container}>

            <View style={styles.header}>

                <ImageBackground source={require('../images/background.jpg')} style={styles.image}>
                    <View style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ color: "white", fontSize: 18 }}>9:31 PM</Text>
                        <Text style={{ color: "white", fontSize: 18 }}>Wednesday</Text>
                        <Text style={{ color: "white", fontSize: 18 }}>{city}</Text>
                    </View>
                </ImageBackground>
            </View>


            <View style={styles.verse} >
                <Text style={{ marginLeft: 10 }}>Verse of the day</Text>
            </View>

            <View style={styles.verse}>
                <Text style={{ marginLeft: 10 }}>Daily Dua</Text>
            </View>
            <View style={styles.verse}>
                <Text style={{ marginLeft: 10 }}>Hadees of the day</Text>
            </View>
            <View style={styles.verse}>
                <Text style={{ marginLeft: 10 }}>Quate of the day</Text>
            </View>


            <Button title='Go to Prayers' onPress={() => navigation.navigate("Prayers", { item: city })} />

        </ScrollView>
    )
}
// navigator.routes.params