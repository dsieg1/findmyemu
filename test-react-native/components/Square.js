import React, {Component} from 'react';

import {
    StyleSheet,
    Text,
    View,
    TouchableHighlight,
    Alert,
} from 'react-native';

export default class Square extends React.Component {
    render(){
        return(
            <TouchableHighlight
                onPress={() => {
                    Alert.alert('tapped the ' + this.props.position + ' square');
                }}
            >
                <View style={{
                    height: this.props.height,
                    width: this.props.width,
                    backgroundColor: this.props.color,
                    flexWrap: 'wrap',
                    alignContent: 'space-between',
                }} />
            </TouchableHighlight>
        );
    }
};