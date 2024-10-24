import { Pressable, StyleSheet, Text, View } from "react-native"
import Input from "./input"
import Button from "./button"

const CadastroForm = ({onPress, onchangeText, formData}) => {

    return(
        <View style={styles.form}>
           <Input
                    label={'nome'}
                    value={formData.nome}
                    onChangeText={onchangeText}
                    caretHidden={false}
                />
           <Input
                    label={'sobrenome'}
                    value={formData.sobrenome}
                    onChangeText={onchangeText}
                    caretHidden={false}
                />
           <Input
                    label={'email'}
                    value={formData.email}
                    onChangeText={onchangeText}
                    caretHidden={false}
                />
           <Input
                    label={'data de nascimento'}
                    value={formData.dataNascimento}
                    onChangeText={onchangeText}
                    caretHidden={false}
                />
                <Input
                    label={'senha'}
                    value={formData.senha}
                    onChangeText={onchangeText}
                    caretHidden={true}
                />
                <Input
                    label={'confirmar senha'}
                    onChangeText={onchangeText}
                    caretHidden={true}
                />
                <Button 
                title={'Cadastrar'}
                onPress={onPress}/>
        </View>
    )
}

const styles = StyleSheet.create ({
    form: {
        gap: 16,
    }
})

export default CadastroForm