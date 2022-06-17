import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import styles from './PrayerDetailsStyle';
export default function PrayerDetails({ route }) {
    const { n } = route.params;
    return (
        <ScrollView style={styles.container}>
            <View style={styles.TitleWrapper}>
                <Text style={styles.title}>{n.title}</Text>
            </View>

            <Text style={styles.urdu}>{n.rakat}</Text>
            <Text style={styles.urdu}>{n.details}</Text>

            <View style={styles.TitleWrapper}>
                <Text style={styles.title}>وقتِ نماز</Text>
            </View>
            <Text style={styles.details}>{n.duration}</Text>

            <View style={styles.TitleWrapper}>
                <Text style={styles.title}>حدیثِ نبوی ﷺ</Text>
            </View>
            <Text style={styles.details}>{n.hadees}</Text>

        </ScrollView >
    )
}