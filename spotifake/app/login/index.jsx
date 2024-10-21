
import Input from "../../components/input"
import { View, StyleSheet } from "react-native"

const login = () => {
    return(
        <View style={styles.container}>
            <View>
            <Input 
            label={'nome de usuario'}
            />
            </View>
        </View>
    )
}
const styles = StyleSheet.create ({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#d6d6d6'
    }
})
 export default login