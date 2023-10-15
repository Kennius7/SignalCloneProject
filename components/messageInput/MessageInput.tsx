import { StyleSheet, Text, TextInput, View } from 'react-native';
import { SimpleLineIcons, Feather, MaterialCommunityIcons, AntDesign } from '@expo/vector-icons';



export default function MessageInput() {
  return (
    <View style={styles.root}>
        <View style={styles.inputContainer}>
            <SimpleLineIcons name="emotsmile" size={24} color="grey" style={styles.smileIcon} />
            <TextInput style={styles.input} />
            <Feather name="camera" size={24} color="grey" style={styles.featherIcon} />
            <MaterialCommunityIcons name='microphone-outline' size={24} color='grey' />
        </View>
        <View style={styles.buttonContainer}>
            <AntDesign name="plus" size={24} color="white" />
        </View>
    </View>
  )
}


const styles = StyleSheet.create({
    root: {
        flexDirection: "row",
        padding: 10,
    },
    input: {
        flex: 1,
        marginHorizontal: 5,
    },
    inputContainer: {
        backgroundColor: "lightgrey",
        flex: 1,
        borderRadius: 25,
        borderWidth: 1,
        padding: 6,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
    },
    buttonContainer: {
        backgroundColor: "#9c9de2",
        width: 40,
        height: 40,
        borderRadius: 30,
        alignItems: "center",
        justifyContent: "center",
        marginLeft: 5,
    },
    buttonText: {
        fontSize: 30,
        color: "white",
    },
    smileIcon: {
        marginHorizontal: 5,
    },
    featherIcon: {
        marginHorizontal: 5,
    },
})