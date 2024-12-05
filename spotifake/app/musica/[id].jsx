import { useLocalSearchParams, useRouter } from "expo-router";
import React, { useEffect, useState } from "react";
import { Image, Text, View, StyleSheet, Pressable, ScrollView, TouchableOpacity } from "react-native";
import AntDesign from '@expo/vector-icons/AntDesign';
import BottomBar from "../../components/bottomBar";
import { LinearGradient } from "expo-linear-gradient";
import { usePlayer } from "../../scripts/SongContext";

const Musica = () => {
    const { id } = useLocalSearchParams();
    const { isPlaying, playSong, pauseSong, resumeSong, stopSong, duration, position } = usePlayer();
    const [album, setAlbum] = useState([]);
    const [musica, setMusica] = useState([]);
    const [artista, setArtista] = useState([]);
    const [progresso, setProgresso] = useState(0);
    const [duracao, setDuracao] = useState(0)
    const [loop, setLoop] = useState(false);
    const [like, setLike] = useState(false);
    const router = useRouter();

    useEffect(() => {
        const fetchMusica = async () => {
            try {
                const resposta = await fetch(`http://localhost:8000/musica/${id}`);
                const dados = await resposta.json();
                setMusica(dados);
                await playSong(dados);
                const minutos = Math.floor(dados.duracao / 60)
                const segundos = dados.duracao % 60
                const duracaoT = `${String(minutos).padStart(2, '0')}:${String(segundos).padStart(2, '0')}`;
                setDuracao(duracaoT)
            } catch (error) {
                console.log('Aconteceu um erro ao buscar os dados.');
            }
        };

        fetchMusica();
    }, [id]);

    useEffect(() => {
        if (musica.album_id) {
            fetch(`http://localhost:8000/album/${musica.album_id}`)
                .then(resposta => resposta.json())
                .then(dados => setAlbum(dados))
                .catch(() => console.log('Aconteceu um erro ao buscar os dados.'));
        }
    }, [musica.album_id]);

    useEffect(() => {
        if (musica.artista_id) {
            fetch(`http://localhost:8000/artista/${musica.artista_id}`)
                .then(resposta => resposta.json())
                .then(dados => setArtista(dados))
                .catch(() => console.log('Aconteceu um erro ao buscar os dados.'));
        }
    }, [musica.artista_id]);

    useEffect(() => {
        const progressoAtual = (position / (musica.duracao * 1000)) * 100; // Calcule o progresso como porcentagem
        setProgresso(progressoAtual);
    }, [position, duration]);

    const formatTime = (millis) => {
        const totalSeconds = Math.floor(millis / 1000);
        const minutes = Math.floor(totalSeconds / 60);
        const seconds = totalSeconds % 60;
        return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    };

    const loopSong = () => {
        setLoop(!loop);
    };

    const likeSong = () => {
        setLike(!like);
    };

    return (
        <View style={styles.container}>
            <View style={styles.topBar}>
                <Text style={styles.topBarText}>{album.title}</Text>
            </View>
            <Pressable onPress={() => { router.back(); }} style={styles.back}>
                <AntDesign name="left" size={26} color="white" />
            </Pressable>
            <ScrollView
                style={styles.scrollView}
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
                    <Pressable style={styles.lineContainer} >
                        <View style={[styles.line, { width: `${progresso}%` }]}></View>
                    </Pressable>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '90%', marginTop: 4 }}>
                        <Text style={{ color: 'white' }}>{formatTime(position)}</Text>
                        <Text style={{ color: 'white' }}>{duracao ? duracao : '00:00'}</Text>
                    </View>

                    <View style={{ flexDirection: 'row', paddingVertical: 12, gap: 30, justifyContent: 'center', alignItems: 'center' }}>
                        {like ? (
                            <TouchableOpacity onPress={likeSong}>
                                <AntDesign name="heart" size={22} color="#FF3F58" />
                            </TouchableOpacity>
                        ) : (
                            <TouchableOpacity onPress={likeSong}>
                                <AntDesign name="hearto" size={22} color="white" />
                            </TouchableOpacity>
                        )}
                        <TouchableOpacity onPress={() => router.push(`musica/${id - 1}`)}>
                            <AntDesign name="stepbackward" size={32} color="white" />
                        </TouchableOpacity>
                        {isPlaying ? (
                            <TouchableOpacity onPress={pauseSong}>
                                <AntDesign name="pausecircle" size={52} color="white" />
                            </TouchableOpacity>
                        ) : (
                            <TouchableOpacity onPress={resumeSong}>
                                <AntDesign name="play" size={52} color="white" />
                            </TouchableOpacity>
                        )}
                        <TouchableOpacity onPress={() => router.push(`musica/${Number(id) + 1}`)}>
                            <AntDesign name="stepforward" size={32} color="white" />
                        </TouchableOpacity>
                        {loop ? (
                            <TouchableOpacity onPress={loopSong}>
                                <AntDesign name="sync" size={22} color="white" />
                            </TouchableOpacity>
                        ) : (
                            <TouchableOpacity onPress={loopSong}>
                                <AntDesign name="sync" size={22} color="#B7B7B7" />
                            </TouchableOpacity>
                        )}
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
        paddingBottom: 70
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
        fontSize: 18,
        width: '100%',
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
        fontSize: 22,
        width: '100%',
        fontWeight: "bold",
        textAlign: 'left',
        paddingHorizontal: 12,
        lineHeight: 48,
        marginVertical: 10,
        color: 'white',
        bottom: 30,
        zIndex: 10
    },
    lineContainer: {
        width: '90%',
        height: 2,
        backgroundColor: '#B7B7B7',
        overflow: 'hidden',
        borderRadius: 2,
    },
    line: {
        height: '100%',
        backgroundColor: 'white',
    },
});

export default Musica;
