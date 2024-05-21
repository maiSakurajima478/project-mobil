import { StyleSheet, View } from "react-native";
import App from "../src/components/App";
import ContainerComponent from "../src/components/ContainerComponent";
import ListApps from "../src/components/ListApps";


const Home = () => {
    return (
        <ContainerComponent Component={ListApps} />
    );
};


export default Home;