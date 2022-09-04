import React from 'react'
import { View } from 'react-native'

const Wrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return <View>{children}</View>
}

export default Wrapper
