import React from 'react'
import { TouchableOpacity, Text } from 'react-native'

const Button: React.FC<{ children: string }> = ({ children }) => {
    return (
        <TouchableOpacity>
            <Text>{children}</Text>
        </TouchableOpacity>
    )
}

export default Button
