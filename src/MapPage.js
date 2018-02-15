import React from 'react';
import {StackNavigator} from "react-navigation";
import {Text, View} from "react-native";

class MapPage extends React.Component {

    static navigationOptions = {
        title: 'Map'
    };

    render() {
        return (
            <View><Text>Map</Text></View>
        )
    }
}

export default StackNavigator({
    Map: {
        screen: MapPage,
    }
})
