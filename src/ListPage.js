import React from 'react';
import {StackNavigator} from "react-navigation";
import {Button, FlatList, Image, Text, TouchableHighlight, View, Modal, TouchableOpacity} from "react-native";
import Carousel from "./Carousel";

const styles = {
    container: {
        width: 375,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'transparent',
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
    },
    innerContainer: {
        alignItems: 'center',
        flex: 1
    },
};

class ListPage extends React.Component {

    static navigationOptions = {
        title: 'List'
    };

    constructor(props) {
        super(props);
        this.state = {
            lines: [],
            modalVisible: false,
        };
    }

    addMore() {
        this.setState((prevState) => {
            let toPush = [];
            for (let i = prevState.lines.length+1; i < prevState.lines.length + 1001; i++) {
                toPush.push({
                    name: 'Element ' + i,
                    key: i
                });
            }
            return {
                lines: [
                    ...prevState.lines,
                    ...toPush
                ]
        }});
    }

    openModal() {
        this.setState({modalVisible:true});
    }

    closeModal() {
        this.setState({modalVisible:false});
    }

    render() {
        return (
            <View style={{ flex: 1}}>
                <Modal
                    visible={this.state.modalVisible}
                     animationType={'slide'}
                     onRequestClose={() => this.closeModal()}
                >
                    <View style={styles.modalContainer}>
                        <View style={styles.innerContainer}>

                            <View style={{ height: 400, marginTop: 100, marginBottom: 20 }}>
                                <Carousel/>
                            </View>
                            <Text>This is content inside of modal component</Text>
                            <Button
                                onPress={() => this.closeModal()}
                                title="Close modal"
                            >
                            </Button>
                        </View>
                    </View>
                </Modal>

                <View style={{ flex: 1, backgroundColor: '#ffffff', justifyContent: 'center', alignItems: 'center', borderWidth: 0.5,
                    borderColor: '#d6d7da', }}>
                    <Text style={{ fontSize: 25 }}>{ this.state.lines.length } lines</Text>
                    <Button
                        onPress={() => { this.addMore() } }
                        title="Add more"
                        color="#007AFF"
                    />
                </View>
                <View style={{ flex: 4 }}>
                    <FlatList
                        data={this.state.lines}
                        renderItem={({item}) => <View style={{ padding: 20, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Image
                                    style={{width: 50, height: 50}}
                                    source={{uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png'}}
                                />
                                <View style={{ paddingLeft: 10, flexDirection: 'row' }}>
                                    <Text style={{ fontSize: 16 }}> {item.name} </Text>
                                </View>
                            </View>
                            <TouchableOpacity onPress={() => { this.openModal() }}>
                                <View style={{ backgroundColor: '#fcffff', borderRadius: 5, padding: 5, marginTop: 3 }}>
                                    <Text style={{ fontSize: 16, color: '#007aff' }}> Open modal</Text>
                                </View>
                            </TouchableOpacity>
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
