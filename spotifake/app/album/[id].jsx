import React, { useRef } from 'react';
import { Animated, ScrollView, StyleSheet, Text, View } from 'react-native';

const App = () => {
  // Criando uma referência animada para capturar o deslocamento do ScrollView
  const scrollY = useRef(new Animated.Value(0)).current;

  // Mapeando o deslocamento para a opacidade (de 0 a 1)
  const headerOpacity = scrollY.interpolate({
    inputRange: [300, 450], // 0 a 100 pixels de rolagem
    outputRange: [0, 1], // Opacidade de 1 (visível) a 0 (transparente)
    extrapolate: 'clamp', // Impede valores fora do intervalo
  });

  return (
    <View style={styles.container}>
      {/* Top Bar animada */}
      <Animated.View style={[styles.topBar, { opacity: headerOpacity }]}>
        <Text style={styles.topBarText}>Minha Top Bar</Text>
      </Animated.View>

      {/* Conteúdo com rolagem */}
      <Animated.ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: false } // Necessário para animar a opacidade
        )}
        scrollEventThrottle={16} // Controle da frequência dos eventos de scroll
      >
        <Text style={styles.contentText}>Conteúdo Rolável</Text>
        {[...Array(30)].map((_, index) => (
          <View key={index} style={styles.item}>
            <Text style={styles.itemText}>Item {index + 1}</Text>
          </View>
        ))}
      </Animated.ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topBar: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 60,
    backgroundColor: '#6200ea',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 10,
  },
  topBarText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  scrollView: {
    marginTop: 60, // Ajustar para que o conteúdo não fique atrás da Top Bar
  },
  scrollContent: {
    paddingVertical: 10,
  },
  contentText: {
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 20,
  },
  item: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f4f4f4',
    marginBottom: 5,
  },
  itemText: {
    fontSize: 16,
  },
});

export default App;
