import { useState } from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import user from "../../assets/images/user.png";
import * as ImagePicker from 'expo-image-picker'


const Perfil = () => {
    const [image, setImage] = useState(user)

    const pegarImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.mediaTypes,
            allowsEditing: true,
            aspect: [4,3],
            quality: 1,
        });
        if (!result.canceled) {
            setImage(result.assets[0].uri);
          }
    }

    return (
        <View style={styles.container}>
            <Pressable onPress={pegarImage}>
                <Image
                    style={styles.foto}
                    source={image} />
            </Pressable>
            <Text>
                perfil
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        backgroundColor: '#1F1F1F'
    },
    foto: {
        width: 140,
        height: 140,
        borderRadius: '100%',
        marginTop: 60
    }
})

export default Perfil