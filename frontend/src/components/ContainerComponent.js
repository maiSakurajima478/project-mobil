import { View, StyleSheet } from "react-native";
import Navbar from "./Navbar";

const ContainerComponent = ({ Component }) => {

    return (
        <View>
            <Navbar />
            <Component />
        </View>
    );

};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },
});

export default ContainerComponent;