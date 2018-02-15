import React from 'react';
import {StackNavigator} from "react-navigation";
import {Button, Picker, Text, TextInput, View, Alert} from "react-native";


const styles = {
    label: {
        fontSize: 20
    },
    input: {
        paddingTop: 10,
        paddingBottom: 20,
        paddingHorizontal: 5,
        fontSize: 20
    }
};

class FormPage extends React.Component {

    static navigationOptions = {
        title: 'Form'
    };

    boom() {
        Alert.alert(
            'Alert Title',
            'My Alert Msg',
            [
                {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
                {text: 'OK', onPress: () => console.log('OK Pressed')},
            ],
            { cancelable: false }
        )
    }

    render() {
        return (
            <View style={{padding: 20}}>
                <Text style={ styles.label }> Email : </Text>
                <TextInput style={ styles.input } placeholder="Email" />
                <Text style={ styles.label }> Name : </Text>
                <TextInput style={ styles.input } placeholder="Name" />
                <Text style={ styles.label }> Color : </Text>
                <Picker>
                    <Picker.Item label="Red" value="java" />
                    <Picker.Item label="Yellow" value="js" />
                </Picker>
                <Button
                    onPress={() => { this.boom() } }
                    title="Alert popup"
                    color="#841584"
                />
            </View>
        )
    }
}

export default StackNavigator({
    Form: {
        screen: FormPage,
    }
})
