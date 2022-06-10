import { View, Text } from 'react-native'
import React from 'react'

export default function DuaTranslation({ route }) {
    const { dua } = route.params;
    const { urdu } = route.params;
    return (
        <View>
            <Text>{dua}</Text>
            <Text>{urdu}</Text>
        </View>
    )
}