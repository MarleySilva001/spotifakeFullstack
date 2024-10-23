import { View, Text, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

const BottomBar = () => {
    return (
        <View style={styles.bar}>
            <LinearGradient 
            style={styles.background}
            colors={['transparent','black']}/>
            <View style={styles.iconBox}>
            <MaterialIcons name="home-filled" size={40} color="white" />
            <Text style={styles.label}>Home</Text>
            </View>
            <View style={styles.iconBox}>
            <MaterialIcons name="search" size={40} color="white" />
                <Text style={styles.label}>Search</Text>
            </View>
            <View style={styles.iconBox}>
            <MaterialIcons name="library-music" size={40} color="white" />
                <Text style={styles.label}>Library</Text>
            </View>
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
         fontSize: 13
    }, background: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        height: '100%',
    }
})

export default BottomBar;