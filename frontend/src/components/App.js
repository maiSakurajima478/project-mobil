import { StyleSheet, View, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const App = ({name}) => {
    return (
        <View style={styles.container} >
            <View style={styles.containerApp}>
                <TouchableOpacity >
                    <Text style={styles.text}>{ name }</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.textButton}>Delete</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};


const styles = StyleSheet.create({
    container : {
        marginTop : 30,
        backgroundColor : '#f1f1f1',
        alignItems : 'center',
        justifyContent : 'center',
    },

    containerApp : {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 16,
        paddingVertical: 8,
        gap: 10,
        width : '80%',
        backgroundColor : '#181818',
        borderRadius : 10,
    },

    text : {
        color : '#eee',
        fontSize : 30,
        fontWeight : 'bold',
    },

    textButton : {
        color : '#eee',
    },
});

export default App;