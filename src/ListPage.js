import React from 'react';
import {StackNavigator} from "react-navigation";
import {Button, FlatList, Text, View} from "react-native";

class ListPage extends React.Component {

    static navigationOptions = {
        title: 'List'
    };

    constructor(props) {
        super(props);
        this.state = {
            lines: []
        };
    }

    addMore() {
        this.setState((prevState) => {
            let toPush = [];
            for (let i = prevState.lines.length+1; i < prevState.lines.length + 100; i++) {
                toPush.push({
                    name: 'Element' + i,
                    key: i
                });
            }
            return {
                lines: [
                    prevState.lines,
                    ...toPush
                ]
        }});
    }

    render() {
        return (
            <View>
                <View>
                    <Text>{ this.state.lines.length } lines</Text>
                    <Button
                        onPress={() => { this.addMore() } }
                        title="Alert popup"
                        color="#841584"
                    />
                </View>
                <View>
                    <FlatList
                        data={this.state.lines}
                        renderItem={({item}) => <View style={{ padding: 20}}>
                            <View>
                            </View>
                            <View>
                                <Text> {item.name} </Text>
                            </View>
                        </View>}
                    />
                </View>
            </View>
        )
    }
}

export default StackNavigator({
    List: {
        screen: ListPage,
    }
})
