import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const Debugger: React.FC = () => {
    return (
        <View style={styles.root}>
            <Text>Session debuger</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    root: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        height: 300,
        backgroundColor: 'rgba(255,255,255, 0.8)',
        padding: 20
    }
})

export default Debugger
