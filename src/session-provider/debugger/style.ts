import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    root: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        height: 40,
        backgroundColor: 'rgba(255,255,255, 0.8)'
    },
    rootExpanded: {
        height: '30%'
    },
    titleWrapper: {
        paddingVertical: 10,
        paddingHorizontal: 20,
        flexDirection: 'row'
    },
    title: {
        flex: 1,
        fontSize: 22
    },
    buttonsRow: {
        flexDirection: 'row',
        paddingHorizontal: 20
    }
})

export default styles
