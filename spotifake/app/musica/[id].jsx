import { useLocalSearchParams, useRouter } from "expo-router";
import React, { useEffect, useRef, useState } from "react";
import { Image, Text, View, StyleSheet, Pressable, ScrollView, TouchableOpacity } from "react-native";
import AntDesign from '@expo/vector-icons/AntDesign';
import BottomBar from "../../components/bottomBar";
import { LinearGradient } from "expo-linear-gradient";
import { useAudioPlayer } from 'expo-audio';


const Musica = () => {
    const { id } = useLocalSearchParams();
    const [album, setAlbum] = useState([])
    const [musica, setMusica] = useState([])
    const [artista, setArtista] = useState([])
    const router = useRouter()
    const [pause, setPause] = useState(false)
    const [duracao, setDuracao] = useState(null)
    const [currentTime, setCurrentTime] = useState(0);

    useEffect(() => {
        fetch(`http://localhost:8000/musica/${id}`)
            .then((resposta) => resposta.json())
            .then((dados) => { setMusica(dados); })
            .catch(() => console.log('Aconteceu um erro ao buscar os dados.'));
    }, [])

    useEffect(() => {
        if (musica.album_id) {
            fetch(`http://localhost:8000/album/${musica.album_id}`)
                .then((resposta) => resposta.json())
                .then((dados) => { setAlbum(dados) })
                .catch(() => console.log('Aconteceu um erro ao buscar os dados.'));
        }
    }, [musica.album_id])
    useEffect(() => {
        if (musica.artista_id) {
            fetch(`http://localhost:8000/artista/${musica.artista_id}`)
                .then((resposta) => resposta.json())
                .then((dados) => { setArtista(dados) })
                .catch(() => console.log('Aconteceu um erro ao buscar os dados.'));
        }
    }, [musica])

    const player = useAudioPlayer(musica.fileUrl);

    useEffect(() => {
        playSong()
    }, [musica])

    useEffect(() => {
        if (!player) return;

        const interval = setInterval(async () => {
            if (player.isLoaded) {
                //setCurrentTime(status.positionMillis / 1000); 
                const minutosT = (player.duration / 1000) / 60;
                const MinutosTMin = minutosT - (minutosT - Math.floor(minutosT))
                const minutosTSeg = Math.round((minutosT - Math.floor(minutosT)) * 1000) / 1000
                const segundosT = minutosTSeg * 60
                console.log(segundosT )
            }
        }, 1000);
        return () => clearInterval(interval);
    }, [player]);

    const pauseSong = async () => {
        player.pause()
        setPause(true)
    }

    const playSong = async () => {
        player.play()
        setPause(false)
    }

    useEffect(() => {

        return () => player.remove();
    }, []);

    return (
        <View style={styles.container}>
            <View style={styles.topBar}>
                <Text style={styles.topBarText}>{album.title}</Text>
            </View>
            <Pressable onPress={() => { router.back(); player.remove() }} style={styles.back}>
                <AntDesign name="left" size={26} color="white" />
            </Pressable>
            <ScrollView
                style={styles.scrollView}
                contentContainerStyle={styles.scrollContent}
                showsVerticalScrollIndicator={false}
            >
                <View style={styles.topImage}>
                    <Image
                        source={{ uri: album.coverImageUrl }}
                        style={styles.albumImage}
                    />
                    <Text style={styles.albumMusica}>{musica.titulo}</Text>
                    <Text style={styles.albumName}>{artista.nome}</Text>
                    <LinearGradient
                        colors={['#303030', '#121212']}
                        style={styles.background}
                    />
                </View>
                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <View style={styles.line}></View>
                    <Text style={{ color: 'white' }}>{duracao}</Text>
                    <View style={{ flexDirection: 'row', paddingVertical: 12, gap: 30, justifyContent: 'center', alignItems: 'center' }}>
                        <AntDesign name="stepbackward" size={32} color="white" />
                        {pause === false ?
                            <TouchableOpacity onPress={pauseSong}>
                                <AntDesign name="pausecircle" size={52} color="white" />
                            </TouchableOpacity>
                            :
                            <TouchableOpacity onPress={playSong}>
                                <AntDesign name="play" size={52} color="white" />
                            </TouchableOpacity>
                        }
                        <AntDesign name="stepforward" size={32} color="white" />
                    </View>
                </View>
            </ScrollView>
            <BottomBar />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#121212'
    },
    topBar: {
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        height: 60,
        justifyContent: "center",
        alignItems: "center",
        zIndex: 10,
    },
    topBarText: {
        fontSize: 24,
        fontWeight: "bold",
        color: 'white'
    },
    back: {
        position: 'absolute',
        top: 16,
        left: 8,
        zIndex: 10
    },
    scrollView: {
        marginTop: 0,
        paddingBottom: 90
    },
    scrollContent: {
        paddingBottom: 20,
    },
    topImage: {
        height: 475,
        justifyContent: 'center',
        alignItems: 'center'
    },
    background: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: -1,
        top: -1,
        height: '100%',
    },
    albumImage: {
        width: 250,
        height: 250,
        borderRadius: 4,
        zIndex: 10,
    },
    albumName: {
        position: 'absolute',
        fontSize: 20,
        width: '100%',
        fontWeight: "bold",
        textAlign: 'left',
        paddingHorizontal: 12,
        lineHeight: 48,
        marginVertical: 10,
        color: 'white',
        bottom: 0,
        zIndex: 10
    },
    albumMusica: {
        position: 'absolute',
        fontSize: 24,
        width: '100%',
        fontWeight: "bold",
        textAlign: 'left',
        paddingHorizontal: 12,
        lineHeight: 48,
        marginVertical: 10,
        color: 'white',
        bottom: 34,
        zIndex: 10
    },
    line: {
        width: '90%',
        height: 2,
        backgroundColor: 'white',
    }
});

export default Musica;