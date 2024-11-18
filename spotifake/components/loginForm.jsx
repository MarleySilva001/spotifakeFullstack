import { Pressable, Text, View, StyleSheet } from "react-native"
import Input from "./input"
import Button from "./button"
import { useRouter } from "expo-router"
import { useContext, useState } from "react"
import Ionicons from '@expo/vector-icons/Ionicons';
import { IdContext } from "../scripts/idContext"

const LoginForm = () => {
    const {pegarUsuario} = useContext(IdContext)
    const router = useRouter()
    const [showPassword, setShowPassword] = useState(true)
    const [formData, setFormData] = useState({
        email: '',
        senha: ''
    })

    const handleInputChange = (name, value) => {
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleButton = async () => {
        if (!formData.email || !formData.senha ) {
            alert('Preencha todos os campos');
            return;
        }
         try {
            const response = await fetch('http://localhost:8000/autenticacao/login/', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
    
            console.log(response)
            if (response.status === 404) {
                alert('Email não encontrado');
                return
            }
            if (response.status === 403){
                alert('Senha incorreta');
                return
            }
            pegarUsuario(formData.email)
            router.push('/home')
    
        } catch (error) {
            console.error('Erro:', error);
        } 
        
    };
    return (
        <View style={styles.form}>
            <Input
                label={'email'}
                value={formData.email}
                onChangeText={(value) => handleInputChange('email', value)}
            />
            <Input
                label={'senha'}
                value={formData.senha}
                onChangeText={(value) => handleInputChange('senha', value)}
                secureTextEntry={showPassword}
            />
             <Pressable onPress={() => setShowPassword(!showPassword)}>
                {showPassword ? (
                    <Ionicons name="eye-off-sharp" size={24} color="gray" />
                ) : (
                    <Ionicons name="eye" size={24} color="gray" />
                )}
            </Pressable>
            <Button 
            title={'Conectar'}
            onPress={handleButton}/>
        </View>
    )
}

const styles = StyleSheet.create({
    form: {
        gap: 16
    }
})

export default LoginForm