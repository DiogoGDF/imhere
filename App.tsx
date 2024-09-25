import {  Text, View } from 'react-native';

export default function App() {
  return (
    <View style={{
        flex: 1,
        backgroundColor: '#131016',
        padding: 30
    }}>
        <Text style={{
            color: 'white',
            fontSize: 24,
            fontWeight: 'bold',
            marginTop: 48
        }}>
            Hello, World!
        </Text>
        <Text style={{color: '#6B6B6B'}}>
            Quarta, 25 de Setembro de 2024
        </Text>
    </View>
  );
}
