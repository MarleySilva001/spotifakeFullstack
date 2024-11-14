import { useState } from "react";
import { Image, Pressable, StyleSheet, Text, View, Modal, TouchableOpacity } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';
import user from "../../assets/images/user.png";
import * as ImagePicker from 'expo-image-picker'
import Button from "../../components/button";
import Input from "../../components/input";


const Perfil = () => {
    const [image, setImage] = useState(user)
    const [visibilidadeModal, setVisibilidadeModal] = useState(false)
    const [novaSenha, setNovaSenha] = useState('')
    const [confirmarNovaSenha, setConfirmarNovaSenha] = useState('')
    const [secureTextEntry, setSecureTextEntry] = useState(true)

    const pegarImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.mediaTypes,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });
        if (!result.canceled) {
            setImage(result.assets[0].uri);
            handleSendImage(result.assets[0].uri)
        }
    }

    const handleSendImage = async (url) => {
        try {
            const data = {
                "file": url,
                "upload_preset": 'ml_default',
            }
            const res = await fetch('https://api.cloudinary.com/v1_1/duo8nbu2l/upload', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(data)
            })
            const result = await res.json();
            console.log(result)
            setImage(result.url)
            //setUserInfo({ ...userInfo, profile_image: result.url})
            //await saveNewImageURLonBackend(result)
        } catch (error) {

        }
    }

    return (
        <View style={styles.container}>
            <Pressable onPress={pegarImage}>
                <Image
                    style={styles.foto}
                    source={image} />
            </Pressable>
            <Text style={styles.name}>
                nome
            </Text>
            <Text style={styles.email}>
                nome@gmail.com
            </Text>
            <View style={styles.center}>
                <Button title={'mudar senha'} onPress={() => setVisibilidadeModal(true)} />
            </View>
            <Modal
                animationType="slide"
                visible={visibilidadeModal}
                onRequestClose={() => {
                    Alert.alert('Modal has been closed.');
                    setVisibilidadeModal(!visibilidadeModal);
                }}>
                <View style={styles.container}>
                    <View style={styles.modalView}>
                        <Text style={styles.title}>Alterar a senha</Text>
                        <Input
                            label={'nova senha'}
                            value={novaSenha}
                            onChangeText={setNovaSenha}
                            secureTextEntry={secureTextEntry}
                        />
                        <Input
                            label={'confirmar nova senha'}
                            value={confirmarNovaSenha}
                            onChangeText={setConfirmarNovaSenha}
                            secureTextEntry={secureTextEntry}
                        />
                        <View style={styles.showPassword}>
                        <Pressable onPress={() => setSecureTextEntry(!secureTextEntry)}>
                            {secureTextEntry ? (
                                <Ionicons name="eye-off-sharp" size={24} color="white" />
                            ) : (
                                <Ionicons name="eye" size={24} color="white" />
                            )}
                        </Pressable>
                        <Text style={styles.color}>mostrar senha</Text>
                        </View>
                        <TouchableOpacity
                            onPress={null}
                            style={styles.button} activeOpacity={0.7}
                        >
                            <Text style={styles.color}>Enviar</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => setVisibilidadeModal(!visibilidadeModal)}
                            style={styles.button} activeOpacity={0.7}
                        >
                            <Text style={styles.color}>Cancel</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
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
    },
    name: {
        color: 'white',
        fontSize: 28,
        fontWeight: 'bold',
        marginTop: 30
    },
    email: {
        color: 'white',
        fontSize: 22
    },
    center: {
        marginTop: 20
    },
    title: {
        color: 'white',
        fontSize: 26
    },
    color: {
        color: 'white',
        width: '100%'
    },
    modalView: {
        margin: 20,
        backgroundColor: '#0026A5',
        borderRadius: 6,
        width: 320,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    showPassword:{
        flexDirection: 'row',
        alignItems: 'center'
    },
    button: {
        height: 28,
        width: '100%',
        backgroundColor: 'gray'
    }
})

export default Perfil