import { StyleSheet } from "react-native"
const styles = StyleSheet.create({

    container: {
        backgroundColor: "#204B38"
        , flex: 1

    },
    title: {
        marginTop: "15%",
        textAlign: "center"
        , fontSize: 22,
        color: "white"

    },
    nameWrapper: {
        margin: 25,
        borderBottomWidth: 1,
        borderBottomColor: "#F3B191",


    },
    titleStyle: {
        color: "white",
        marginVertical: 3,

        fontSize: 16,
        fontWeight: "500"

    }
    ,
    searchBar: {
        marginTop: 10,
        color: "#F3B191",
        marginHorizontal: 22,
        marginVertical: 15,
    },
    searchBarWrapper: {
        borderWidth: 1,
        borderRadius: 25,
        borderColor: "white",
        marginTop: 10,
        marginHorizontal: 10
    }











})

export default styles;