import React from 'react'
import JSONTree from 'react-native-json-tree'
import { View, Text } from 'react-native'
import styles from './styles'
import { SessionContext } from '../../Context'
const StoreDebugger = () => {
    const { store } = React.useContext(SessionContext)
    return (
        <View style={styles.root}>
            <Text>Current store</Text>
            <JSONTree hideRoot data={store} />
        </View>
    )
}

export default StoreDebugger
