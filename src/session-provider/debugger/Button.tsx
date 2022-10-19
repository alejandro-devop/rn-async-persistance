import React from 'react'
import { TouchableOpacity, Text } from 'react-native'

const Button: React.FC<{ children: string; onPress?: () => void }> = ({ children, onPress }) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <Text>{children}</Text>
        </TouchableOpacity>
    )
}

export default Button
