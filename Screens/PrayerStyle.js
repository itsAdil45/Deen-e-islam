import { StyleSheet } from "react-native"
const styles = StyleSheet.create({
    TitleWrapper: {
        marginTop: "15%",
        marginBottom: "10%",
        backgroundColor: "#F6D2BE",
        paddingVertical: "3%",
        borderWidth: 2,
        borderRadius: 100
        , paddingHorizontal: "10%",



    },
    City: {
        textAlign: "center",
        fontSize: 20,
    },

    dateWrapper: {
        flex: 0.10,
        backgroundColor: "#F6D2BE",
        alignItems: "center",
        justifyContent: "space-around",
        borderWidth: 3,
        marginTop: 10,
        borderRadius: 10,
        borderColor: "black",
        padding: 5

    },

    timeWrapper: {
        flex: 0.50,
        backgroundColor: "#F3B191",
        marginTop: 50,
        borderWidth: 2,
        borderRadius: 50,
        marginHorizontal: 10

    },
    prayers: {
        flex: 0.22,
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: "10%",
        borderBottomWidth: 0.5,
        marginHorizontal: 30

    },
    timeSection: {
        textAlign: "center",
        marginVertical: 15,
        fontSize: 15,
        fontWeight: 'bold'
    },
    shortcuts: {
        flex: 0.20,
        flexDirection: "row",
        justifyContent: "space-around"
        // backgroundColor: "yellow"

    }
    ,
    imgWrapper: {
        height: 85,
        width: "70%",
        borderWidth: 1,
        borderRadius: 50,
        borderColor: "white",
        backgroundColor: "#F6D2BE",


    },
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    imgSize: {
        height: 77,
        width: "85%",
        // borderWidth: 1,
        // borderRadius: 50,
        // borderColor: "white",
        marginVertical: 4,
        marginHorizontal: 6
    },
    shortcutsSectionHeading: {
        color: "white",
        textAlign: "center",
        marginVertical: 15,
        fontWeight: '500'

    },
    shortcutsSectionText: {
        color: "white",
    }
    // shadowProp: {
    //     shadowColor: '#171717',
    //     shadowOffset: { width: -2, height: 4 },
    //     shadowOpacity: 0.2,
    //     shadowRadius: 3,

    // },



})

export default styles;