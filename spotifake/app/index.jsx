import { View, StyleSheet, Image } from 'react-native'
import { LinearGradient } from "expo-linear-gradient";
import { useEffect } from 'react';
import { useRouter } from 'expo-router';

const SplashScreen = () => {
    const router = useRouter()
    useEffect(() =>{
        const timer = setTimeout(() =>{
          router.push('/login')
        },3000)
        return() => clearTimeout(timer)
      }, [])
    return(
        <View style={styles.container}>
            <LinearGradient
                colors={['#1F1F1F', 'black']}
                style={styles.background}
            />
            <Image 
            style={styles.logo}
            source={require('../assets/images/spotifake.png')}
            />
        </View>
    )
}

const styles = StyleSheet.create ({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }, logo:{
        width: 300,
        height: 300
    },
    background: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        height: '100%',
    }
})

export default SplashScreen