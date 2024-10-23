import { View, StyleSheet, Text } from "react-native"
import { LinearGradient } from "expo-linear-gradient";
import LoginForm from "../../components/loginForm";
import { Link } from "expo-router";

const login = () => {
    return (
        <View style={styles.container}>
            <LinearGradient
                colors={['#1F1F1F', 'black']}
                style={styles.background}
            />
            <Text style={styles.title}>Entrar no spotifake</Text>
            <LoginForm />
            <Text style={styles.forgotPassword}>esqueceu a senha?</Text>
            <Text style={styles.signUpPath}>Não tem uma conta? <Link href={'/cadastro'}>Cadastre-se</Link></Text>
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
    forgotPassword: {
        color: '#006FFF',
        fontSize: 11,
        textDecorationLine: 'underline'
    },
    signUpPath: {
        color: 'white',

    }
}
)

export default login