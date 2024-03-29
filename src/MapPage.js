import React from 'react';
import {StackNavigator} from "react-navigation";
import {Text, View} from "react-native";
import {MapView} from "expo";

class MapPage extends React.Component {

    static navigationOptions = {
        title: 'Map'
    };

    render() {
        return (

                <MapView
                    style={{ flex: 1 }}
                    initialRegion={{
                        latitude: 37.78825,
                        longitude: -122.4324,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421,
                    }}
                />
        )
    }
}

export default StackNavigator({
    Map: {
        screen: MapPage,
    }
})
