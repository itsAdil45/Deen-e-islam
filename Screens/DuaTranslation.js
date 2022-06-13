import { View, Text } from 'react-native'
import React from 'react'
import styles from './DuaTranslationStyle';
export default function DuaTranslation({ route }) {
    const { dua } = route.params;
    const { urdu } = route.params;
    const { title } = route.params;
    return (
        <View style={styles.container}>
            <View style={styles.Subcontainer}>
                <View style={styles.TitleWrapper}>
                    <Text style={styles.title} >{title}</Text>
                </View>

                <View>
                    <Text style={styles.arabic} >{dua}</Text>
                </View>
                {/* ترجمہ */}

                <View style={styles.separator}></View>

                <View >
                    <Text style={styles.text}>ترجمہ:</Text>
                    <Text style={styles.urdu}>{urdu}</Text>
                </View>

            </View>
        </View>
    )
}