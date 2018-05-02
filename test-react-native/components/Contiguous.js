import React, {Component} from 'react';
import PrintSquares from './PrintSquares';
import {
    StyleSheet,
    Text,
    View,
} from 'react-native';

export default class Contiguous extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            squareWidthState : 0,
            squareHeightState : 0,
            colorPalette: {},
            squaresArray: [{}],
        };
    };

    componentDidMount() {
        // variables to figure out how big to make the squares
        let windowWidth = Dimensions.get('window').width;
        let windowHeight = Dimensions.get('window').height;
        const columns = 4;
        const rows = 5;

        // set square width/height
        let squareWidth;
        let squareHeight;
        if ( windowWidth > windowHeight) {
            squareHeight = windowHeight / rows;
            squareWidth = squareHeight;
        } else {
            squareWidth = windowWidth / columns;
            squareHeight = squareWidth;
        }

        // pretty colors
        let colors;
        colors = {
            purple: '#9b26af',
            dpurple: '#691a99',
            green: '#68efad',
        };

        // the list of squares in order of appearance
        let squaresLayout = [];
        squaresLayout = [
            {position: 1, color: colors.purple},
            {position: 2, color: colors.green},
            {position: 3, color: colors.dpurple},
            {position: 4, color: colors.green},
            {position: 5, color: colors.dpurple},
            {position: 6, color: colors.green},
            {position: 7, color: colors.purple},
            {position: 8, color: colors.green},
            {position: 9, color: colors.purple},
            {position: 10, color: colors.green},
            {position: 11, color: colors.purple},
            {position: 12, color: colors.dpurple},
            {position: 13, color: colors.green},
            {position: 14, color: colors.dpurple},
            {position: 15, color: colors.dpurple},
            {position: 16, color: colors.green},
            {position: 17, color: colors.purple},
            {position: 18, color: colors.green},
            {position: 19, color: colors.purple},
            {position: 20, color: colors.green},
        ];

        // set the state properties
        this.setState(setSquare => {
            return{
                squareWidthState: squareWidth,
                squareHeightState: squareHeight,
                colorPalette: {
                    0: colors.purple,
                    1: colors.green,
                    bg: colors.dpurple,
                },
                squaresArray: squaresLayout,
            }
        });
    };

    render() {
        return (
            <View style={{backgroundColor: this.state.colorPalette.bg, flex: 1,}}>
                <StatusBar hidden />
                <PrintSquares squares={this.state.squaresArray} height={this.state.squareHeightState} width={this.state.squareWidthState}/>
            </View>
        );
    }
}