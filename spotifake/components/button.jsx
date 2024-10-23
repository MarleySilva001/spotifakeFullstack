import { Pressable, StyleSheet, Text } from "react-native"

const Button = ({ title, onPress }) => {
    return (
        <Pressable
            onPress={onPress}
            style={styles.button}
        >
            <Text
            style={styles.title}
            >
                {title}
            </Text>
        </Pressable>
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