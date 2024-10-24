import { Pressable, Text, View, StyleSheet } from "react-native"
import Input from "./input"
import Button from "./button"
import { useRouter } from "expo-router"

const LoginForm = ({onPress}) => {
    
    return (
        <View style={styles.form}>
            <Input
                label={'nome de usuario'}
                caretHidden={false}
            />
            <Input
                label={'senha'}
                caretHidden={true}
            />
            <Button 
            title={'Conectar'}
            onPress={onPress}/>
        </View>
    )
}

const styles = StyleSheet.create({
    form: {
        gap: 16
    }
})

export default LoginForm