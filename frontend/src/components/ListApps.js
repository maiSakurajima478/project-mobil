import { StyleSheet, View } from "react-native";
import App from "./App";

const ListApps = () => {
    const repositories = [{title: 'Facebook'}, {title : 'X'}, {title : 'Gmail'}];
    return (
        <View>
        {
            repositories.map(rep => (
                <App key={rep.title} name={rep.title} />
            ))
        }
        </View>
    );
};

export default ListApps;