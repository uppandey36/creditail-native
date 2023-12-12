import {StyleSheet} from 'react-native'

export const styles = StyleSheet.create({
    flex1: {
        flex: 1
    },
    border1: {
        borderWidth: 1
    },
    justifyEnd: {
        justifyContent: 'flex-end'
    },
    justifyBetween: {
        justifyContent: 'space-between'
    },
    alignEnd: {
        alignItems: 'flex-end'
    },
    width100: {
        width: '100%'
    },
    menuIndividual: {
        // fontWeight: 'bold',
        fontSize: 20
    }, 
    navContainer: {
        borderColor: 'red',
        paddingVertical: 100, 
        paddingHorizontal: 20
    },
    notSelectedNav: {
        color: 'white'
    },
    selectedNav: {
        color: '#e44d37'
    },
    upperSection: {
        position:'absolute',
        width: '100%',
        height: '100%',
        zIndex: 1, 
        backgroundColor: '#cccccc',
        transformOrigin: 'right',
        left:0
    },
    flexRow: {
        flexDirection: 'row'
    },
    headerTop: {
        paddingHorizontal: 20,
        paddingVertical: 20
    }
})