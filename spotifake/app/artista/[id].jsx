import React, { useRef } from "react";
import { Animated, FlatList, Image, Text, View, StyleSheet } from "react-native";

const Artista = () => {
    const scrollY = useRef(new Animated.Value(0)).current;

    const headerOpacity = scrollY.interpolate({
        inputRange: [100, 150], 
        outputRange: [0, 1], 
        extrapolate: "clamp", 
    });

    const songs = [
        { id: "1", title: "Song 1" },
        { id: "2", title: "Song 2" },
        { id: "3", title: "Song 3" },
    ];

    const albums = [
        { id: "1", title: "Album 1" },
        { id: "2", title: "Album 2" },
        { id: "3", title: "Album 3" },
    ];

    return (
        <View style={styles.container}>
            {/* Top Bar animada */}
            <Animated.View style={[styles.topBar, { opacity: headerOpacity }]}>
                <Text style={styles.topBarText}>Minha Top Bar</Text>
            </Animated.View>

            {/* Conteúdo rolável */}
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
                {/* Imagem do artista */}
                <Image
                    source={{ uri: "https://via.placeholder.com/300" }}
                    style={styles.artistImage}
                />
                <Text style={styles.artistName}>Nome do Artista</Text>

                {/* Seção "Mais Ouvidas" */}
                <Text style={styles.sectionTitle}>Mais Ouvidas</Text>
                <FlatList
                    data={songs}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item, index }) => (
                        <View style={styles.item}>
                            <Text style={styles.itemText}>{index + 1}{item.title}</Text>
                        </View>
                    )}
                    contentContainerStyle={styles.listContainer}
                />

                {/* Seção "Discografia" */}
                <Text style={styles.sectionTitle}>Discografia</Text>
                <FlatList
                    data={albums}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                        <View style={styles.item}>
                            <Text style={styles.itemText}>{item.title}</Text>
                        </View>
                    )}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={styles.listContainer}
                />

                {/* Seção "Bio" */}
                <View style={styles.bioContainer}>
                    <Text style={styles.sectionTitle}>Bio</Text>
                    <Text style={styles.bioText}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                        lacinia odio vitae vestibulum vestibulum.
                    </Text>
                </View>
            </Animated.ScrollView>
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
        backgroundColor: "#6200ea",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 10,
    },
    topBarText: {
        color: "#fff",
        fontSize: 18,
        fontWeight: "bold",
    },
    scrollView: {
        marginTop: 0,
    },
    scrollContent: {
        paddingBottom: 20,
    },
    artistImage: {
        width: "100%",
        height: 300,
    },
    artistName: {
        fontSize: 24,
        fontWeight: "bold",
        textAlign: "center",
        marginVertical: 10,
        color: 'white'
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
        backgroundColor: "#f4f4f4",
        padding: 15,
        marginRight: 10,
        borderRadius: 5,
        marginBottom: 4
    },
    itemText: {
        fontSize: 16,
        color: 'white'
    },
    bioContainer: {
        padding: 15,
    },
    bioText: {
        fontSize: 16,
        lineHeight: 24,
        color: 'white'
    },
});

export default Artista;
