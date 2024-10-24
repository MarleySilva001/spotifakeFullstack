import { Pressable, StyleSheet, Text, View } from "react-native"
import Input from "./input"
import Button from "./button"
import { useState } from "react"
import { useRouter } from "expo-router"

const CadastroForm = () => {
    const [formData, setFormData] = useState({
        nome: '',
        sobrenome: '',
        email: '',
        dataNascimento: '',
        senha: ''
    })

    const [senhaCorreta, setSenhaCorreta] = useState('')
    const router = useRouter()

    const handleInputChange = (name, value) => {
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleButton = async () => {
        if (!formData.nome || !formData.sobrenome || !formData.email || !formData.dataNascimento || !formData.senha || !senhaCorreta) {
            alert('Preencha todos os campos');
            return;
        }
    
        if (formData.senha !== senhaCorreta) {
            alert('Senha incorreta');
            return; 
        }
    console.log(JSON.stringify(formData))
        /* try {
            const response = await fetch('http://localhost:8000/registro/', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
    
            if (!response.ok) {
                throw new Error(`Erro HTTP! Status: ${response.status}`);
            }
    
            const data = await response.json();
            console.log('Sucesso:', data);
        } catch (error) {
            console.error('Erro:', error);
        } */
        router.push('/home')
    };

    return(
        <View style={styles.form}>
           <Input
                    label={'nome'}
                    value={formData.nome}
                    onChangeText={(value) => handleInputChange('nome', value)}
                />
           <Input
                    label={'sobrenome'}
                    value={formData.sobrenome}
                    onChangeText={(value) => handleInputChange('sobrenome', value)}
                />
           <Input
                    label={'email'}
                    value={formData.email}
                    onChangeText={(value) => handleInputChange('email', value)}
                />
           <Input
                    label={'data de nascimento'}
                    value={formData.dataNascimento}
                    onChangeText={(value) => handleInputChange('dataNascimento', value)}
                />
                <Input
                    label={'senha'}
                    value={formData.senha}
                    onChangeText={(value) => handleInputChange('senha', value)}
                    secureTextEntry={true}
                />
                <Input
                    label={'confirmar senha'}
                    value={senhaCorreta}
                    onChangeText={setSenhaCorreta}
                    secureTextEntry={true}
                />
                <Button 
                title={'Cadastrar'}
                onPress={handleButton}/>
        </View>
    )
}

const styles = StyleSheet.create ({
    form: {
        gap: 16,
    }
})

export default CadastroForm;