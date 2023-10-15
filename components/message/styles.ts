import { StyleSheet } from "react-native";


const appBlue = "#1768c4";
const appGray = "#9ca7b4";

export const styles = StyleSheet.create({
    container: {
        margin: 10,
        padding: 6,
        borderRadius: 10,
        maxWidth: '75%',
    },
    meContainer: {
        backgroundColor: appBlue,
        marginLeft: 10,
        marginRight: "auto",
    },
    otherContainer: {
        backgroundColor: appGray,
        marginLeft: "auto",
        marginRight: 10,
    },
    title: {
        width: 'auto',
        fontSize: 16,
        fontWeight: 'normal',
        fontStyle: 'italic',
    },
    meTitle: {
        color: 'white',
    },
    otherTitle: {
        color: 'black',
    },
})