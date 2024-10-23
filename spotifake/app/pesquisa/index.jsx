import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import BottomBar from "../../components/bottomBar";
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { useRef } from "react";

const Pesquisa = () => {
    const inputRef = useRef(null);

  const evitarFoco = () => {
    if (inputRef.current) {
      inputRef.current.blur(); 
    }
  };
    return(
        <View style={styles.container}>
            <Pressable style={styles.searchBar}>
            <FontAwesome name="search" size={18} color="black" />
                <TextInput 
                ref={inputRef}
                style={styles.placeholder}
                placeholder="Oque você gostaria de ouvir?"
                onFocus={evitarFoco}/>
            </Pressable>
            <BottomBar />
        </View>
    )
}

const styles = StyleSheet.create ({
    container: {
        flex: 1, 
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#1F1F1F'
    },
    searchBar: {
        backgroundColor: 'white',
        height: 38,
        minwidth: 260,
        width: '90%',
        maxWidth: 320,
        borderRadius: 8,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingHorizontal: 16,
        gap: 16,
    },
    placeholder: {
        width: 200,
       
    }
})

export default Pesquisa;