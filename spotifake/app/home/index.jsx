import { FlatList, ScrollView, StyleSheet, Text, View, Image } from "react-native"
import BottomBar from "../../components/bottomBar";
import TopBar from "../../components/topBar";

const DATA = [
    {
        title: 'Recomendados',
        data: [
            {id: '101', autor:'Travis Scott', nome:'Rodeo', tipo: 'albuns', img:'https://cdns-images.dzcdn.net/images/cover/41b8f3833e15ad11d55805556e8c7e00/0x1900-000000-80-0-0.jpg'},
            {id: '102', autor:'Tyler, The Creator', nome:'Cromokopia', tipo: 'albuns', img:'https://images.genius.com/206f16145c6ad42142656b0a53a0638f.1000x1000x1.png'},
            {id: '103', autor:'Frank Ocean', nome:'Blond', tipo: 'albuns', img:'https://upload.wikimedia.org/wikipedia/pt/b/ba/313x0w.jpg'},
            {id: '104', autor:'Playboi Carti', nome:'Die Lit', tipo: 'albuns', img:'https://upload.wikimedia.org/wikipedia/pt/f/f6/Die_Lit.png'},
            {id: '105', autor:'Migos', nome:'Culture', tipo: 'albuns', img:'https://upload.wikimedia.org/wikipedia/pt/a/ae/Culture_-_%C3%81lbum.jpg'},
            {id: '106', autor:'Kendrick Lamar', nome:'Good kid, M.A.A.D. kid', tipo: 'albuns', img:'https://upload.wikimedia.org/wikipedia/pt/3/3b/Good_kid%2C_m.A.A.d_city.jpg'},
            {id: '107', autor:'Kanye West', nome:'Graduation', tipo: 'albuns', img:'https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/2f/db/2c/2fdb2c9d-171c-c6dc-57ee-4bae2b4bb11a/07UMGIM12671.rgb.jpg/1200x1200bb.jpg'},
        ]
    },
    {
        title: 'Álbuns Populares',
        data: [
            {id: '201', autor:'Kendrick Lamar', nome:'DAMN', tipo: 'albuns', img:'https://m.media-amazon.com/images/I/61MWIe1BzwL._UF894,1000_QL80_.jpg'},
            {id: '202', autor:'Young Thug', nome:'So Much Fun', tipo: 'albuns', img:'https://upload.wikimedia.org/wikipedia/en/a/a9/Young_Thug_-_So_Much_Fun.png'},
            {id: '203', autor:'Travis Scott', nome:'Astroworld', tipo: 'albuns', img:'https://upload.wikimedia.org/wikipedia/pt/6/63/Astroworld_Travis.jpg'},
            {id: '204', autor:'21 Savage', nome:'American Dream', tipo: 'albuns', img:'https://i.scdn.co/image/ab67616d0000b273bbdceba2bf1867d4966d0347'},
            {id: '205', autor:'Nas', nome:'Illmatic', tipo: 'albuns', img:'https://i.scdn.co/image/ab67616d0000b273045fc920ecf4f8094888ec26'},
            {id: '206', autor:'Outkast', nome:'Stankonia', tipo: 'albuns', img:'https://upload.wikimedia.org/wikipedia/pt/2/23/Outkast_-_Stankonia.jpg'},
            {id: '207', autor:'Madvillain', nome:'Madvillainy', tipo: 'albuns', img:'https://upload.wikimedia.org/wikipedia/pt/f/f7/Madvillain_-_Madvillainy.jpeg'},        ]
    },
    {
        title: 'Artistas Populares',
        data: [
            {id: '301', nome:'Travis Scott', tipo: 'artista', img:'https://i.scdn.co/image/ab6761610000e5eb19c2790744c792d05570bb71'},
            {id: '302', nome:'Kendrick Lamar', tipo: 'artista', img:'https://i.scdn.co/image/ab6761610000e5eb437b9e2a82505b3d93ff1022'},
            {id: '303', nome:'Kanye West', tipo: 'artista', img:'https://i.scdn.co/image/ab6761610000e5eb6e835a500e791bf9c27a422a'},
            {id: '304', nome:'Eminem', tipo: 'artista', img:'https://i.scdn.co/image/ab6761610000e5eba00b11c129b27a88fc72f36b'},
            {id: '305', nome:'Drake', tipo: 'artista', img:'https://i.scdn.co/image/ab6761610000e5eb4293385d324db8558179afd9'},
            {id: '306', nome:'J. Cole', tipo: 'artista', img:'https://i.scdn.co/image/ab6761610000e5eb4b053c29fd4b317ff825f0dc'},
            {id: '307', nome:'Metro Boomin', tipo: 'artista', img:'https://i.scdn.co/image/ab6761610000e5ebdf9a1555f53a20087b8c5a5c'},        ]
    }
]

const Home = () => {
    return (
        <View style={styles.container}>
            <TopBar title={'Spotifake'} icon={null} />
            <ScrollView style={styles.feed} showsVerticalScrollIndicator={false}>
                {DATA.map((section, index) => (
                    <View key={index} style={styles.sectionContainer}>
                        <Text style={styles.header}>{section.title}</Text>
                        <FlatList
                            data={section.data}
                            horizontal
                            contentContainerStyle={styles.row}
                            keyExtractor={(item) => item.id}
                            renderItem={({ item }) => (
                                <View style={styles.itemContainer}>
                                    <Image
                                        style={[styles.img, { borderRadius: item.tipo === 'artista' ? 80 : 4 }]}
                                        source={{ uri: item.img }}
                                    />
                                    <View style={styles.textContainer}>
                                        <Text style={styles.album}>{item.nome}</Text>
                                        <Text style={styles.autor}>{item.autor}</Text>
                                    </View>
                                </View>
                            )}
                            showsHorizontalScrollIndicator={false}
                            showsVerticalScrollIndicator={false}
                        />
                    </View>
                ))}
            </ScrollView>
            <View style={styles.bottomWall}>

            </View>
            <BottomBar />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1F1F1F',
    },
    sectionContainer: {
        marginVertical: 10,
    },
    feed: {
        marginTop: 90,
    },
    bottomWall: {
        marginBottom: 80,
        backgroundColor: 'transparent'
    },
    row: {
        paddingHorizontal: 20,
        gap: 10,
    },
    img: {
        width: 130,
        height: 130,
        marginBottom: 4
    },
    itemContainer: {
        alignItems: 'center',
        maxWidth: 130,
        backgroundColor: '#252525',
        borderRadius: 8,
    },
    textContainer: {
    },
    itemText: {
        color: '#FFFFFF',
    },
    header: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#FFFFFF',
        paddingVertical: 8,
        paddingHorizontal: 10,
    },
    album: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 13,
        height: 20,
        textAlign: 'center'
    },
    autor: {
        color: "rgba(255,255,255,0.9)",
        fontSize: 12,
        textAlign: 'center',
        marginBottom: 6
    }
});

export default Home;