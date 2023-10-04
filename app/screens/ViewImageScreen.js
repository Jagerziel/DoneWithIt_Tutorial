import React from 'react';
import { View, Image, StyleSheet, Text } from 'react-native';

import colors from '../config/colors.js'

function ViewImageScreen(props) {
    return (
        <View style={styles.container}>
            <View style={styles.closeIcon}></View>
            <View style={styles.deleteIcon}></View>
            <Image source={require('../assets/fox.jpg')} style={styles.image}/>
        </View>
    );
}

const styles = StyleSheet.create({
    closeIcon: {
        width: 50,
        height: 50,
        backgroundColor: colors.primary,
        position: 'absolute',
        top: 40,
        left: 30
    },
    container: {
        backgroundColor: colors.black,
        flex: 1,
        width: '100%',
        height: '100%'
    },    
    deleteIcon: {
        width: 50,
        height: 50,
        backgroundColor: colors.secondary,
        position: 'absolute',
        top: 40,
        right: 30
    },
    image: {
        height: '100%',
        width: '100%',
        resizeMode: 'contain'
    },
})

export default ViewImageScreen;