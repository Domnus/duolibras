import { View, Text, Pressable, StyleSheet } from 'react-native';

export default function TrainingScreen({navigation}) {
    return (
        <View style={styles.container}>
            <Text>Training Screen</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        width: '100vw',
        backgroundColor: '#810fcc',
    }
})