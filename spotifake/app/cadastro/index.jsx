import { View, StyleSheet, Text } from "react-native"
import { LinearGradient } from "expo-linear-gradient";
import { Link } from "expo-router";
import CadastroForm from "../../components/cadastroForm";
import { useState } from "react";

const Cadastro = () => {
    const [formData, setFormData] = useState({
        nome: '',
        sobrenome: '',
        email: '',
        dataNascimento: '',
        senha: ''
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleButton = () => {
        fetch('https://taskhub-s37f.onrender.com/auth/signup',
            {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    nome: formData.nome,
                    sobrenome: formData.sobrenome,
                    email: formData.email,
                    dataNascimento: formData.dataNascimento,
                    senha: formData.senha
                })
            })
            .then(response => response.json())
            .catch(error => {
                console.error(error);
            });
    };
    return (
        <View style={styles.container}>
            <LinearGradient
                colors={['#1F1F1F', 'black']}
                style={styles.background}
            />
            <View style={styles.header}>
                <Text style={styles.title}>Cadastro</Text>
            </View>
            <CadastroForm onchangeText={handleChange} formData={formData} onPress={handleButton} />
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
    header: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        top: 20,
        left: 0,
        position: 'absolute'
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
        color: '#0077FF'
    }
}
)

export default Cadastro