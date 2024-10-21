import { StyleSheet, Text, TextInput, View } from "react-native";

const Input = ({ label, value, onChangeText }) => {
    return (
        <View>
            <Text style={styles.label}>{label}:</Text>      
                <TextInput
                style={styles.input}
                    placeholder={label}
                    value={value}
                    onChangeText={onChangeText}
                />
        </View>
    )
}

const styles = StyleSheet.create({
    label: {
        fontWeight: 'bold',
        marginBottom:3
    },
     input :{
        height: 36,
        borderColor: '#ccc',  // Adicionando borda
        borderWidth: 1,        // Definindo a espessura da borda
        paddingHorizontal: 10, // Espaçamento interno no campo
        borderRadius: 5,   
     }
})

export default Input;