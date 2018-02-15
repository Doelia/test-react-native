import React from 'react';
import {StackNavigator} from "react-navigation";
import {Button, Picker, Text, TextInput, View, Alert} from "react-native";


const styles = {
    label: {
        fontSize: 20
    },
    input: {
        paddingTop: 10,
        marginBottom: 10,
        paddingBottom: 10,
        paddingHorizontal: 5,
        fontSize: 20,
        borderBottomWidth: 0.5,
        borderColor: '#d6d7da',
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
            <View style={{padding: 20, backgroundColor: 'white'}}>
                <Text style={ styles.label }> Email </Text>
                <TextInput style={ styles.input } placeholder="<type here>" />
                <Text style={ styles.label }> Name </Text>
                <TextInput style={ styles.input } placeholder="<type here>" />
                {/*<Text style={ styles.label }> Color : </Text>*/}
                {/*<Picker>*/}
                    {/*<Picker.Item label="Red" value="java" />*/}
                    {/*<Picker.Item label="Yellow" value="js" />*/}
                {/*</Picker>*/}
                <Button
                    onPress={() => { this.boom() } }
                    title="Confirm"
                    color="#007AFF"
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
