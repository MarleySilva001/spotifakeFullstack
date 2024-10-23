import { View, Text, StyleSheet, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { useRouter } from "expo-router";

const BottomBar = () => {
    const router = useRouter()
    return (
        <View style={styles.bar}>
            <LinearGradient 
            style={styles.background}
            colors={['transparent','black']}/>
            <Pressable 
            style={styles.iconBox}
            onPress={() => (router.push('/home'))}
            >
            <MaterialIcons name="home-filled" size={26} color="white" />
            <Text style={styles.label}>Home</Text>
            </Pressable>
            <Pressable 
            style={styles.iconBox}
            onPress={() => (router.push('/pesquisa'))}
            >
            <MaterialIcons name="search" size={26} color="white" />
                <Text style={styles.label}>Search</Text>
            </Pressable>
            <Pressable 
            style={styles.iconBox}
            onPress={() => (router.push('/biblioteca'))}
            >
            <MaterialIcons name="library-music" size={26} color="white" />
                <Text style={styles.label}>Library</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create ({
    bar: {
        width: '100%',
        backgroundColor: 'transparent',
        height: 80,
        bottom: 0,
        left: 0,
        position: 'absolute',
        flexDirection: 'row',

        justifyContent: 'space-around'
    },
    iconBox: {
        alignItems: 'center',
        justifyContent: 'center',
        gap: 2,
        width: '33%'
    },
    label: {
         color: 'white',
         fontSize: 12
    }, background: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        height: '100%',
    }
})

export default BottomBar;