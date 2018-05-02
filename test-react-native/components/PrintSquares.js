import React, {Component} from 'react';
import Square from './Square';

import {
    StyleSheet,
    Text,
    View,
} from 'react-native';

export default class PrintSquares extends React.Component {
    render(){
        let squares;
        squares = this.props.squares;
        return(
            <View style={styles.container}>
                {squares.map((item, key) => (
                    <Square key={key} color={item.color} height={this.props.height} width={this.props.width} position={item.position} />
                ))}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexWrap: 'wrap',
        alignItems: 'center',
        flexDirection: 'row',
        borderBottomWidth: 4,
        borderColor: '#ffffff',
    }
});
