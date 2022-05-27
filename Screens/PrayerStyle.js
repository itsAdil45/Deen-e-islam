import { StyleSheet } from "react-native"
const styles = StyleSheet.create({
    TitleWrapper: {
        marginTop: "15%",
        marginBottom: "10%",
        backgroundColor: "white",
        paddingVertical: "3%",
        borderRadius: 100
        , paddingHorizontal: "10%"

    },
    City: {
        textAlign: "center",
        fontSize: 20,
    },

    dateWrapper: {
        flex: 0.10,
        backgroundColor: "white",
        alignItems: "center",
        justifyContent: "space-around"

    },

    timeWrapper: {
        flex: 0.50,
        backgroundColor: "white",
        marginTop: 50

    },
    prayers: {
        flex: 0.22,
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: "10%",
        borderWidth: 0.5,

    },
    timeSection: {
        textAlign: "center",
        marginVertical: 15,
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
        borderColor: "black",
        backgroundColor: "lightgrey"


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
        borderColor: "black",
        marginVertical: 4,
        marginHorizontal: 6
    },
    shadowProp: {
        shadowColor: '#171717',
        shadowOffset: { width: -2, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 3,

    },



})

export default styles;