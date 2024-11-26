import { useLocalSearchParams, useRouter } from "expo-router";
import React, { useEffect, useRef, useState } from "react";
import { Animated, FlatList, Image, Text, View, StyleSheet, Pressable } from "react-native";
import AntDesign from '@expo/vector-icons/AntDesign';
import BottomBar from "../../components/bottomBar";

const Artista = () => {
    const scrollY = useRef(new Animated.Value(0)).current;

    const headerOpacity = scrollY.interpolate({
        inputRange: [195, 210],
        outputRange: [0, 1],
        extrapolate: "clamp",
    });

    const { id } = useLocalSearchParams();
    const [artista, setArtista] = useState([])
    const [artistaAlbuns, setArtistaAlbuns] = useState([])
    const route = useRouter()

    useEffect(() => {
        fetch(`http://localhost:8000/artista/${id}`)
            .then((resposta) => resposta.json())
            .then((dados) => setArtista(dados))
            .catch(() => console.log('Aconteceu um erro ao buscar os dados.'));
    }, [])

    useEffect(() => {
        fetch(`http://localhost:8000/artista/${id}/albums`)
            .then((resposta) => resposta.json())
            .then((dados) => { setArtistaAlbuns(dados); console.log(dados) })
            .catch(() => console.log('Aconteceu um erro ao buscar os dados.'));
    }, [])


    return (
        <View style={styles.container}>
            <Animated.View style={[styles.topBar, { opacity: headerOpacity }]}>
                <Text style={styles.topBarText}>{artista.nome}</Text>
            </Animated.View>
            <Pressable onPress={() => route.back()} style={styles.back}>
                <AntDesign name="left" size={26} color="white" />
            </Pressable>
            <Animated.ScrollView
                style={styles.scrollView}
                contentContainerStyle={styles.scrollContent}
                showsVerticalScrollIndicator={false}
                onScroll={Animated.event(
                    [{ nativeEvent: { contentOffset: { y: scrollY } } }],
                    { useNativeDriver: false }
                )}
                scrollEventThrottle={16}
            >
                <View style={styles.topImage}>
                    <Image
                        source={{ uri: artista.imageUrl }}
                        style={styles.artistImage}
                    />
                    <Text style={styles.artistName}>{artista.nome}</Text>
                </View>
                <Text style={styles.sectionTitle}>Popular</Text>
                <FlatList
                    data={artistaAlbuns.Musicas}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item, index }) => (
                        <View style={styles.item}>
                            <Text style={styles.itemText}>{index + 1}{item.titulo}</Text>
                        </View>
                    )}
                    contentContainerStyle={styles.listContainer}
                />
                <Text style={styles.sectionTitle}>Discografia</Text>
                <FlatList
                    data={artista.Albums}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                        <View style={styles.item}>
                            <Image
                                source={{ uri: item.coverImageUrl }}
                                style={styles.itemImage}
                            />
                            <View>
                                <Text style={styles.itemText}>{item.title}</Text>
                                <Text style={styles.itemYear}>{item.releaseYear}</Text>
                            </View>
                        </View>
                    )}
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={styles.listContainer}
                />
                <View style={styles.bioContainer}>
                    <Text style={styles.sectionTitle}>Sobre</Text>
                    <Text style={styles.bioText}>
                        {artista.bio}.
                    </Text>
                </View>
            </Animated.ScrollView>
            <BottomBar />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1F1F1F'
    },
    topBar: {
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        height: 60,
        backgroundColor: "#1F1F1F",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 10,
    },
    topBarText: {
        fontSize: 24,
        fontWeight: "bold",
        textAlign: "center",
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
        height: 270
    },
    artistImage: {
        width: "100%",
        height: "100%",
    },
    artistName: {
        position: 'absolute',
        fontSize: 52,
        fontWeight: "bold",
        textAlign: 'left',
        paddingHorizontal: 12,
        lineHeight: 48,
        marginVertical: 10,
        color: 'white',
        bottom: 0
    },
    sectionTitle: {
        fontSize: 20,
        fontWeight: "bold",
        marginLeft: 10,
        marginVertical: 10,
        color: 'white'
    },
    listContainer: {
        paddingLeft: 10,
    },
    item: {
        backgroundColor: "#1F1F1F",
        padding: 6,
        marginRight: 10,
        borderRadius: 5,
        flexDirection: 'row',
        gap: 10,
        alignItems: 'center'
    },
    itemText: {
        fontSize: 16,
        color: 'white',
        fontWeight: '500'
    },
    itemYear: {
        fontSize: 14,
        color: 'white',
        fontWeight: '300'
    },
    itemImage: {
        width: 70,
        height: 70,
        borderRadius: 4,

    },
    bioContainer: {
        padding: 10,
    },
    bioText: {
        fontSize: 14,
        lineHeight: 24,
        color: 'white'
    },
});

export default Artista;
