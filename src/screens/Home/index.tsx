import { Text, View } from 'react-native';
import { styles } from './styles'

export function Home() {
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