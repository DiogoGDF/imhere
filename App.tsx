import {  StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
        <Text style={styles.eventName}>
            Hello, World!
        </Text>
        <Text style={styles.eventDate}>
            Quarta, 25 de Setembro de 2024
        </Text>
    </View>
  );
}

const styles = StyleSheet.create({
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
    }
})
