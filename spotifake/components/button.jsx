import { Pressable, StyleSheet, Text, TouchableOpacity } from "react-native"

const Button = ({ title, onPress }) => {
    return (
        <TouchableOpacity
            onPress={onPress}
            style={styles.button}
            activeOpacity={0.7}
        >
            <Text
            style={styles.title}
            >
                {title}
            </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        height: 36,
        width: 250,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#358CD6',
        borderRadius: 6
    },
    title:{
        fontSize: 16,
        fontWeight: 'bold',
        color: 'white'
    }
})

export default Button;