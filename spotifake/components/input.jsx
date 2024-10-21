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
        marginBottom:3,
         color: 'white'
    },
     input :{
        height: 36,
        width: 250,
        backgroundColor: '#1B1B1B',
        borderColor: '#ccc',  
        borderWidth: 1,        
        paddingHorizontal: 6, 
        borderRadius: 4,   
        color: 'white',
        fontSize: 14
     }
})

export default Input;