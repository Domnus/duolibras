import { Pressable, StyleSheet, Text, View, Button } from 'react-native';

export default function MainScreen({navigation}) {
    return (
        <View style={styles.container}>
            <View style={styles.titulo}>
                <Text style={styles.header1}>Duolibras</Text>
            </View>
            <Pressable style={styles.button} onPress={() => navigation.push('Training')} android_ripple={{ color: '#810fcc', borderless: true }}>
                <Text style={{ color: '#fff', fontSize: 20 }}>Começar</Text>
            </Pressable>
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
    },
    button: {
        backgroundColor: '#000',
        padding: 10,
        borderRadius: 5,
        width: 150,
        alignItems: 'center',
    },
    titulo: {
        alignItems: 'top',
        justifyContent: 'top',
    },
    header1: {
        fontSize: 40,
        color: '#fff',
    },
    header2: {
        fontSize: 20,
        color: '#fff',
    },
});
