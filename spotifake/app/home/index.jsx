import { StyleSheet, Text, View } from "react-native"
import BottomBar from "../../components/bottomBar";

const Home = () => {
    return(
        <View style={styles.container}>
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

export default Home;