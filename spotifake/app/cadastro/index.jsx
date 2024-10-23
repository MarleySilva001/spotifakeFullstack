import { View, StyleSheet, Text } from "react-native"
import { LinearGradient } from "expo-linear-gradient";
import { Link } from "expo-router";
import CadastroForm from "../../components/cadastroForm";

const Cadastro = () => {
    return (
        <View style={styles.container}>
            <LinearGradient
                colors={['#1F1F1F', 'black']}
                style={styles.background}
            />
            <Text style={styles.title}>Cadastrar</Text>
            <CadastroForm />
            <Text style={styles.signUpPath}>Já tem uma conta? <Link href={'/login'} style={styles.link}>Conecte-se</Link></Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#d6d6d6'
    },
    background: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        height: '100%',
    },
    title: {
        color: 'white',
        fontSize: 26,
        fontWeight: 'bold'
    },
    signUpPath: {
        color: 'white',
    },
    link: {
        color: 'blue'
    }
}
)

export default Cadastro