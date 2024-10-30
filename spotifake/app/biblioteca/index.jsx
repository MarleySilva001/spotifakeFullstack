import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import AntDesign from '@expo/vector-icons/AntDesign';
import BottomBar from "../../components/bottomBar";
import TopBar from "../../components/topBar";

const Item = ({nome, source, tipo}) => {
    return(
        <View style={styles.itemContainer}>
            <Image 
            style={[styles.img,{ borderRadius: tipo === 'artista'? 50 : 4} ]}
            source={{ uri : source}}
            />
            <View style={styles.info}>
            <Text style={ styles.p}>{nome}</Text>
            <Text style={ styles.tipo}>{tipo}</Text>
            </View>
        </View>
    )
}

const DATA = [
    {id: '1', tipo: 'artista', nome:'Travis Scott', img:'https://i.scdn.co/image/ab6761610000e5eb19c2790744c792d05570bb71'},
    {id: '2', tipo: 'playlist', nome:'musicas favoritas', img:'https://thisis-images.spotifycdn.com/37i9dQZF1DZ06evO0vGf4I-default.jpg'}
]

const Biblioteca = () => {
    return (
        <View style={styles.container}>
           <TopBar title={'Biblioteca'}  icon={<AntDesign name="plus" size={28} color="white" />}/>
            <FlatList 
            data={DATA}
            showsVerticalScrollIndicator={false}
            style={styles.scrollView}
            contentContainerStyle={styles.flatListContent}
            keyExtractor={item => item.id}
            renderItem={({item}) => <Item nome={item.nome} source={item.img} tipo={item.tipo}/>}
            />
            <BottomBar />
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
    title:{
        color: 'white',
        fontSize: 32,
        fontWeight: 'bold',
    },
    scrollView: {
        height: '100%',
        marginTop: 80,
    },
    flatListContent: {
        paddingBottom: 90
    },
    itemContainer: {
        width:420,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 16,
        marginBottom:6
    },
    img: {
        width: 64,
        height: 64
    },
    info: {
        width: "90%",
        maxWidth: 240
    },
    p: {
        color: 'white',
        fontSize: 16
    },
    tipo: {
        color: 'white',
        fontSize: 14,
    }
})

export default Biblioteca;