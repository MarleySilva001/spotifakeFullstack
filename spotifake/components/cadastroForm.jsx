import { Pressable, StyleSheet, Text, View } from "react-native"
import Input from "./input"
import Button from "./button"
import { useRouter } from "expo-router"

const CadastroForm = () => {
    const router = useRouter()

    return(
        <View style={styles.form}>
           <Input
                    label={'nome'}
                    caretHidden={false}
                />
           <Input
                    label={'sobrenome'}
                    caretHidden={false}
                />
           <Input
                    label={'email'}
                    caretHidden={false}
                />
           <Input
                    label={'data de nascimento'}
                    caretHidden={false}
                />
                <Input
                    label={'senha'}
                    caretHidden={true}
                />
                <Input
                    label={'confirmar senha'}
                    caretHidden={true}
                />
                <Button 
                title={'Cadastrar'}
                onPress={() => (router.push('/home'))}/>
        </View>
    )
}

const styles = StyleSheet.create ({
    form: {
        gap: 16
    }
})

export default CadastroForm