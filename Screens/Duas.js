import { View, Text, FlatList, TouchableOpacity, TextInput } from 'react-native'
import React, { useEffect, useState } from 'react'
import styles from "./DuasStyle"
import { getDatabase, ref, onValue } from 'firebase/database';
export default function Duas({ navigation }) {
    const [data, setData] = useState("")
    const [masterdata, setMasterData] = useState("");
    const [search, setSearch] = useState("")
    function Data() {
        const db = getDatabase();
        const reference = ref(db, '/Appdata/Duas');
        onValue(reference, (snapshot) => {
            // const highscore = snapshot.val().highscore;
            setData(snapshot.val());
            setMasterData(snapshot.val())
            // console.log(data[0].title)
        });
    }

    useEffect(() => Data(), [])

    const searchFilter = (text) => {
        if (text) {
            const newData = masterdata.filter((item) => {
                const itemData = item.title ? item.title.toUpperCase() : "".toUpperCase()
                const textData = text.toUpperCase();
                return itemData.indexOf(textData) > -1;
            });
            setData(newData);
            setSearch(text);
        }
        else {
            setData(masterdata);
            setSearch(text);
        }
    }



    return (

        <View style={styles.container}>
            <FlatList
                ListHeaderComponent={
                    <View>
                        <Text style={styles.title}>مسنون دعائیں اردو ترجمہ کے ساتھ
                        </Text>
                        <View style={styles.searchBarWrapper}>
                            <TextInput placeholderTextColor="#F3B191" placeholder='تلاش کریں' value={search} onChangeText={(text) => { searchFilter(text) }} style={styles.searchBar} />
                        </View>
                    </View>

                }

                data={data}
                renderItem={({ item }) => (

                    <View style={styles.nameWrapper}>

                        <TouchableOpacity onPress={() => navigation.navigate("DuaTranslation", { dua: item.dua, urdu: item.urdu, title: item.title })}>
                            <Text style={styles.titleStyle}>{item.title}</Text>
                        </TouchableOpacity>
                    </View>)}
            />

        </View>
    )
}