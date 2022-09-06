import React from 'react'
import { View, ScrollView, Text, TouchableOpacity } from 'react-native'
import styles from './style'
import classNames from '../../utils/classNames'
import Button from './Button'
import StoreDebugger from './store-debugger'

const Debugger: React.FC = () => {
    const [expanded, setExpanded] = React.useState(true)
    return (
        <View style={classNames({ root: true, rootExpanded: expanded }, styles)}>
            <View style={styles.titleWrapper}>
                <Text style={styles.title}>Session debuger</Text>
                <TouchableOpacity onPress={() => setExpanded(!expanded)}>
                    <Text>{expanded ? 'Close' : 'Open'}</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.buttonsRow}>
                <Button>Stores</Button>
            </View>
            <ScrollView>
                <StoreDebugger />
            </ScrollView>
        </View>
    )
}

export default Debugger
