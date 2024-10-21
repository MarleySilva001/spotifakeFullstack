import { Pressable, Text, View } from "react-native"
import Input from "./input"

const LoginForm = () => {
    return(
        <View>
           <Input
                    label={'nome de usuario'}
                />
                <Input
                    label={'senha'}
                />
        </View>
    )
}

export default LoginForm