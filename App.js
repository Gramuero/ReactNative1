import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const peopleData = [
  {
    id: 1,
    name: 'Джуд Биллингем',
    description: 'Футболист Мадридского Реала.',
    image: require('./assets/Bellingam.jpg'), // Путь к изображению (замените на свой)
  },
  {
    id: 2,
    name: 'Майкл Джордан',
    description: 'Майкл Дже́ффри Джо́рдан (англ. Michael Jeffrey Jordan; родился 17 февраля 1963 года, Бруклин, Нью-Йорк) — американский баскетболист, бывший игрок НБА[2]. Лучший баскетболист в истории (по версии экспертов ESPN)[3]. Играл на позиции атакующего защитника. Джордан сыграл важную роль в популяризации баскетбола и НБА во всём мире в 1980-х и 1990-х годах[4][5]. Двукратный олимпийский чемпион.',
    image: require('./assets/Jordan.jpg'), // Путь к изображению (замените на свой)
  },
  {
    id: 3,
    name: 'Максим Михайлов',
    description: 'Максим Михайлович Михайлов (род. 19 марта 1988, Кузьмоловский, Ленинградская область) — российский волейболист, нападающий казанского «Зенита» и сборной России, чемпион Игр ХХХ Олимпиады в Лондоне, двукратный чемпион Европы, заслуженный мастер спорта России.',
    image: require('./assets/Mihaylov.jpg'), // Путь к изображению (замените на свой)
  },
];

const App = () => {
  const [selectedPerson, setSelectedPerson] = useState(null);

  const showDescription = (person) => {
    setSelectedPerson(person);
  };

  return (
    <View style={styles.container}>
      {peopleData.map((person) => (
        <TouchableOpacity
          key={person.id}
          style={styles.personContainer}
          onPress={() => showDescription(person)}
        >
          <Image source={person.image} style={styles.personImage} />
        </TouchableOpacity>
      ))}

      {selectedPerson && (
        <View style={styles.descriptionContainer}>
          <Text style={styles.personName}>{selectedPerson.name}</Text>
          <Text style={styles.personDescription}>{selectedPerson.description}</Text>
          <TouchableOpacity
            style={styles.closeButton}
            onPress={() => setSelectedPerson(null)}
          >
            <Text style={styles.closeButtonText}>Закрыть</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  personContainer: {
    borderRadius: 8,
    overflow: 'hidden',
  },
  personImage: {
    width: 100,
    height: 100,
    borderRadius: 8,
  },
  descriptionContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  personName: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  personDescription: {
    textAlign: 'center',
    marginHorizontal: 20,
    marginBottom: 20,
  },
  closeButton: {
    backgroundColor: '#3498db',
    padding: 10,
    borderRadius: 5,
  },
  closeButtonText: {
    color: '#ffffff',
    fontWeight: 'bold',
  },
});

export default App;
