import { StyleSheet, Text, View } from "react-native";
import BottomBar from "../../components/bottomBar";

const Biblioteca = () => {
    return(
        <View style={styles.container}>
            <Text>Biblioteca</Text>
            <BottomBar />
        </View>
    )
}

const styles = StyleSheet.create ({
    container: {
        flex: 1, 
        backgroundColor: '#1F1F1F'
    }
})

export default Biblioteca;