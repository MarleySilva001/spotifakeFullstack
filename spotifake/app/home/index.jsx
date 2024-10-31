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
            {id: '104', autor:'21 Savage', nome:'American Dream', tipo: 'albuns', img:'https://i.scdn.co/image/ab67616d0000b273bbdceba2bf1867d4966d0347'},
            {id: '105', autor:'Playboi Carti', nome:'Die Lit', tipo: 'albuns', img:'https://upload.wikimedia.org/wikipedia/pt/f/f6/Die_Lit.png'},
            {id: '106', autor:'Migos', nome:'Culture', tipo: 'albuns', img:'https://upload.wikimedia.org/wikipedia/pt/a/ae/Culture_-_%C3%81lbum.jpg'},
            {id: '107', autor:'Kendrick Lamar', nome:'Good kid, M.A.A.D. kid', tipo: 'albuns', img:'https://upload.wikimedia.org/wikipedia/pt/3/3b/Good_kid%2C_m.A.A.d_city.jpg'},
            {id: '108', autor:'Kanye West', nome:'Graduation', tipo: 'albuns', img:'https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/2f/db/2c/2fdb2c9d-171c-c6dc-57ee-4bae2b4bb11a/07UMGIM12671.rgb.jpg/1200x1200bb.jpg'},
        ]
    },
    {
        title: 'Álbuns Populares',
        data: [
            {id: '201', autor:'Kendrick Lamar', nome:'DAMN', tipo: 'albuns', img:'https://m.media-amazon.com/images/I/61MWIe1BzwL._UF894,1000_QL80_.jpg'},
            {id: '202', autor:'Young Thug', nome:'So Much Fun', tipo: 'albuns', img:'https://upload.wikimedia.org/wikipedia/en/a/a9/Young_Thug_-_So_Much_Fun.png'},
            {id: '203', autor:'Travis Scott', nome:'Astroworld', tipo: 'albuns', img:'https://upload.wikimedia.org/wikipedia/pt/6/63/Astroworld_Travis.jpg'},
            {id: '204', autor:'21 Savage', nome:'American Dream', tipo: 'albuns', img:'data:image/jpeg;base64,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'},
            {id: '205', autor:'Travis Scott', nome:'Rodeo', tipo: 'albuns', img:'https://cdns-images.dzcdn.net/images/cover/41b8f3833e15ad11d55805556e8c7e00/0x1900-000000-80-0-0.jpg'},
            {id: '206', autor:'Travis Scott', nome:'Rodeo', tipo: 'albuns', img:'https://cdns-images.dzcdn.net/images/cover/41b8f3833e15ad11d55805556e8c7e00/0x1900-000000-80-0-0.jpg'},
            {id: '207', autor:'Travis Scott', nome:'Rodeo', tipo: 'albuns', img:'https://cdns-images.dzcdn.net/images/cover/41b8f3833e15ad11d55805556e8c7e00/0x1900-000000-80-0-0.jpg'},        ]
    }
]

const Home = () => {
    return (
        <View style={styles.container}>
            <TopBar title={'Spotifake'} icon={null} />
            <ScrollView style={styles.feed}>
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
                                        style={[styles.img, { borderRadius: item.tipo === 'artista' ? 50 : 4 }]}
                                        source={{ uri: item.img }}
                                    />
                                    <View style={styles.textContainer}>
                                        <Text style={styles.itemText}>{item.nome}</Text>
                                        <Text style={styles.itemText}>{item.autor}</Text>
                                    </View>
                                </View>
                            )}
                            showsHorizontalScrollIndicator={false}
                        />
                    </View>
                ))}
            </ScrollView>
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
        marginTop: 90
    },
    row: {
        paddingHorizontal: 20,
        gap: 10,
    },
    img: {
        width: 125,
        height: 125,
    },
    itemContainer: {
        alignItems: 'center',

        backgroundColor: '#2F2F2F',
        borderRadius: 8,
    },
    textContainer: {
        marginLeft: 8,
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
    }
});

export default Home;