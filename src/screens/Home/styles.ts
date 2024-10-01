import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#131016',
        padding: 30
    },
    eventName: {
        color: 'white',
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 48
    },
    eventDate: {
        color: '#6B6B6B',
        fontSize: 16
    },
    input: {
        flex: 1,
        backgroundColor: '#1F1E25',
        color: '#FDFCFE',
        borderRadius: 5,
        padding: 16,
        fontSize: 16,
        marginRight: 12
    },
    buttonText: {
        color: '#FFF',
        fontSize: 24
    },
    button: {
        width: 56,
        height: 56,
        borderRadius: 5,
        backgroundColor: '#31CF67',
        alignItems: 'center',
        justifyContent: 'center'
    },
    form: {
        marginTop: 36,
        marginBottom: 42,
        width: '100%',
        flexDirection: 'row'
    }
})