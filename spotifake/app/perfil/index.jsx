import { useContext, useState } from "react";
import { Image, Pressable, StyleSheet, Text, View, Modal, TouchableOpacity } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';
import AntDesign from '@expo/vector-icons/AntDesign';
import * as ImagePicker from 'expo-image-picker'
import Button from "../../components/button";
import Input from "../../components/input";
import { useRouter } from "expo-router";
import { IdContext } from "../../scripts/idContext";


const Perfil = () => {
    const { userInfo, setUserInfo, desconectarUser} = useContext(IdContext)
    const [image, setImage] = useState(userInfo.foto)
    const [visibilidadeModal, setVisibilidadeModal] = useState(false)
    const [novaSenha, setNovaSenha] = useState('')
    const [confirmarNovaSenha, setConfirmarNovaSenha] = useState('')
    const [secureTextEntry, setSecureTextEntry] = useState(true)
    const route = useRouter()

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
            setUserInfo({...userInfo, foto: result.url})
            //await saveNewImageURLonBackend(result)
        } catch (error) {
            console.err(error)
        }
    }

    const changePassword = async() => {
        if ( novaSenha.length < 3 ) {
            alert('A senha deve ter pelo menos 3 caracteres')
            return
        }
        if( novaSenha !== confirmarNovaSenha) {
            alert('As senhas não coincidem!')
            return
        }
        setNovaSenha('')
        setConfirmarNovaSenha('')
        setSecureTextEntry(true)
        setVisibilidadeModal(!visibilidadeModal)
    }

    const desconectarConta = () => {
        desconectarUser()
        route.push('/login')
    }

    return (
        <View style={styles.container}>
            <Pressable onPress={() => route.back()} style={styles.back}>
                <AntDesign name="left" size={28} color="white" />
            </Pressable>
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
                <Button title={'Desconectar'} onPress={desconectarConta} />
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
                            onPress={changePassword}
                            style={styles.button} activeOpacity={0.8}
                        >
                            <Text style={styles.color}>Enviar</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => setVisibilidadeModal(!visibilidadeModal)}
                            style={styles.button} activeOpacity={0.8}
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
        marginTop: 80
    },
    name: {
        color: 'white',
        fontSize: 28,
        fontWeight: 'bold',
        marginTop: 20,
    },
    email: {
        color: '#A1A1A1',
        fontSize: 18,
        marginTop: 5,
    },
    center: {
        marginTop: 24,
        gap: 6
    },
    title: {
        color: 'white',
        fontSize: 24,
        fontWeight: '600',
        marginBottom: 20,
    },
    color: {
        color: 'white',
        textAlign: 'center',
    },
    modalView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2A2A2A',
        marginHorizontal: 20,
        borderRadius: 12,
        padding: 20,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.3,
        shadowRadius: 5,
        elevation: 10,
    },
    showPassword: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
    },
    button: {
        height: 36,
        minWidth: 250,
        width: '90%',
        maxWidth: 320,
        backgroundColor: '#0056E6',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 6,
        marginVertical: 8,
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: '600',
    },
    back: {
        position: 'absolute',
        top: 20,
        left: 10,
    }
})

export default Perfil