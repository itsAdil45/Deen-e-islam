import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from "./DuasStyle"
export default function Duas({ navigation }) {
    const Duas = [
        {
            key: 0,
            title: "سونے كي دعا",
            dua: "اَللّٰهُمَّ بِاسْمِكَ اَمُوْ تُ وَاَحْيٰي",
            urdu: "اے اﷲ تعاليٰ ميں تيرے نام پر مرتا هوں اور جيتا هو"

        },

        {
            key: 1,
            title: "سونے كي دعا",
            dua: "اَللّٰهُمَّ بِاسْمِكَ اَمُوْ تُ وَاَحْيٰي",
            urdu: "اے اﷲ تعاليٰ ميں تيرے نام پر مرتا هوں اور جيتا هوں"

        },
        {
            key: 2,
            title: "سونے كي دعا",
            dua: "اَللّٰهُمَّ بِاسْمِكَ اَمُوْ تُ وَاَحْيٰي",
            urdu: "اے اﷲ تعاليٰ ميں تيرے نام پر مرتا هوں اور جيتا هوں"

        },
        {
            key: 3,
            title: "سونے كي دعا",
            dua: "اَللّٰهُمَّ بِاسْمِكَ اَمُوْ تُ وَاَحْيٰي",
            urdu: "اے اﷲ تعاليٰ ميں تيرے نام پر مرتا هوں اور جيتا هوں"

        },
        {
            key: 4,
            title: "سونے كي دعا",
            dua: "اَللّٰهُمَّ بِاسْمِكَ اَمُوْ تُ وَاَحْيٰي",
            urdu: "اے اﷲ تعاليٰ ميں تيرے نام پر مرتا هوں اور جيتا هوں"

        },
        {
            key: 5,
            title: "سونے كي دعا",
            dua: "اَللّٰهُمَّ بِاسْمِكَ اَمُوْ تُ وَاَحْيٰي",
            urdu: "اے اﷲ تعاليٰ ميں تيرے نام پر مرتا هوں اور جيتا هوں"

        },
        {
            key: 10,
            title: "سونے كي دعا",
            dua: "اَللّٰهُمَّ بِاسْمِكَ اَمُوْ تُ وَاَحْيٰي",
            urdu: "اے اﷲ تعاليٰ ميں تيرے نام پر مرتا هوں اور جيتا هوں"

        },

        {
            key: 11,
            title: "سونے كي دعا",
            dua: "اَللّٰهُمَّ بِاسْمِكَ اَمُوْ تُ وَاَحْيٰي",
            urdu: "اے اﷲ تعاليٰ ميں تيرے نام پر مرتا هوں اور جيتا هوں"

        },
        {
            key: 21,
            title: "سونے كي دعا",
            dua: "اَللّٰهُمَّ بِاسْمِكَ اَمُوْ تُ وَاَحْيٰي",
            urdu: "اے اﷲ تعاليٰ ميں تيرے نام پر مرتا هوں اور جيتا هوں"

        },
        {
            key: 31,
            title: "سونے كي دعا",
            dua: "اَللّٰهُمَّ بِاسْمِكَ اَمُوْ تُ وَاَحْيٰي",
            urdu: "اے اﷲ تعاليٰ ميں تيرے نام پر مرتا هوں اور جيتا هوں"

        },
        {
            key: 41,
            title: "سونے كي دعا",
            dua: "اَللّٰهُمَّ بِاسْمِكَ اَمُوْ تُ وَاَحْيٰي",
            urdu: "اے اﷲ تعاليٰ ميں تيرے نام پر مرتا هوں اور جيتا هوں"

        },
        {
            key: 51,
            title: "سونے كي دعا",
            dua: "اَللّٰهُمَّ بِاسْمِكَ اَمُوْ تُ وَاَحْيٰي",
            urdu: "اے اﷲ تعاليٰ ميں تيرے نام پر مرتا هوں اور جيتا هوں"

        }
        ,
        {
            key: 233,
            title: "سونے كي دعا",
            dua: "اَللّٰهُمَّ بِاسْمِكَ اَمُوْ تُ وَاَحْيٰي",
            urdu: "اے اﷲ تعاليٰ ميں تيرے نام پر مرتا هوں اور جيتا هوں"

        },

        {
            key: 14,
            title: "سونے كي دعا",
            dua: "اَللّٰهُمَّ بِاسْمِكَ اَمُوْ تُ وَاَحْيٰي",
            urdu: "اے اﷲ تعاليٰ ميں تيرے نام پر مرتا هوں اور جيتا هوں"

        },
        {
            key: 344,
            title: "سونے كي دعا",
            dua: "اَللّٰهُمَّ بِاسْمِكَ اَمُوْ تُ وَاَحْيٰي",
            urdu: "اے اﷲ تعاليٰ ميں تيرے نام پر مرتا هوں اور جيتا هوں"

        },
        {
            key: 32,
            title: "سونے كي دعا",
            dua: "اَللّٰهُمَّ بِاسْمِكَ اَمُوْ تُ وَاَحْيٰي",
            urdu: "اے اﷲ تعاليٰ ميں تيرے نام پر مرتا هوں اور جيتا هوں"

        },
        {
            key: 44,
            title: "سونے كي دعا",
            dua: "اَللّٰهُمَّ بِاسْمِكَ اَمُوْ تُ وَاَحْيٰي",
            urdu: "اے اﷲ تعاليٰ ميں تيرے نام پر مرتا هوں اور جيتا هوں"

        },
        {
            key: 55,
            title: "سونے كي دعا",
            dua: "اَللّٰهُمَّ بِاسْمِكَ اَمُوْ تُ وَاَحْيٰي",
            urdu: "اے اﷲ تعاليٰ ميں تيرے نام پر مرتا هوں اور جيتا هوں"

        }


    ]

    return (
        <View>
            <Text style={styles.title}>مسنون دعائیں اردو ترجمہ کے ساتھ
            </Text>

            <FlatList
                data={Duas}
                renderItem={({ item }) => (

                    <View style={styles.nameWrapper}>

                        <TouchableOpacity onPress={() => navigation.navigate("DuaTranslation", { dua: item.dua, urdu: item.urdu })}>
                            <Text  >{item.title}</Text>
                        </TouchableOpacity>
                    </View>)}
            />

        </View>
    )
}