import React from 'react';
import { StyleSheet, ImageBackground, View, Image, Text } from 'react-native';

function WelcomeScreen(props) {
    return (
        <ImageBackground 
            source={require('../assets/background.jpg')}
            style={styles.background}

        >
            <View style={styles.logoContainer}>
                <Image 
                    source={require('../assets/logo.jpg')}
                    style={styles.logo}
                />
                <Text>Sell What You Don't Need</Text>
            </View>
            <View style={styles.loginButton}>

            </View>
            <View style={styles.registerButton}>

            </View>

        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        width: '100%',
        height: '100%',
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    loginButton: {
        width: '100%',
        height: 70,
        backgroundColor: '#fc5c65',
    },
    registerButton: {
        width: '100%',
        height: 70,
        backgroundColor: '#4ecdc4',
    }, 
    logoContainer: {
        position: 'absolute',
        top: 70, 
        alignItems: 'center',
    },
    logo: {
        width: 100,
        height: 100,
        borderRadius: 50,
        // alignSelf: 'center'

    },
})

export default WelcomeScreen;

