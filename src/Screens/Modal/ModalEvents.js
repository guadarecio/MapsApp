import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

export const DUMMY_EVENT_DATA = [
  {
    shortDate: '07 ABR',
    title: 'Metronomy en Concierto',
    longDate: '7 de abril a las 22:00',
  },
  {
    shortDate: '23 ABR',
    title: 'Mago de Oz en Concierto',
    longDate: '23 de abril a las 22:00',
  },
  {
    shortDate: '23 MAY',
    title: 'Mission of Burma en Concierto',
    longDate: '23 de mayo a las 22:00',
  },
];

const ModalEvents = () => {
  return (
    <View>
      <View style={styles.subContainer}>
        <View style={styles.events}>
          <Text style={styles.title}>EVENTOS</Text>
        </View>
        <View style={styles.present}>
          <Text style={styles.subTitle}>ACTUALIDAD</Text>
        </View>
      </View>

      {DUMMY_EVENT_DATA.map((event, index) => {
        return (
          <View key={index} style={{padding: 20, flexDirection: 'row'}}>
            <View style={styles.eventCircle}>
              <Text style={styles.eventCircleText}>{event.shortDate} </Text>
            </View>
            <View style={styles.eventInfo}>
              <Text style={{fontWeight: 'bold'}}>{event.title}</Text>
              <Text style={{color: '#666666'}}>{event.longDate}</Text>
            </View>
          </View>
        );
      })}
    </View>
  );
};

export default ModalEvents;

const styles = StyleSheet.create({
  subContainer: {
    padding: 20,
    flexDirection: 'row',
  },

  events: {
    borderBottomWidth: 3,
    borderBottomColor: '#f35412',
    flex: 1,
    alignItems: 'center',
  },
  title: {
    padding: 20,
    fontWeight: 'bold',
  },

  present: {
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
    flex: 1,
    alignItems: 'center',
  },

  subTitle: {
    padding: 20,
    color: '#cccccc',
  },
  eventCircle: {
    width: 70,
    height: 70,
    borderRadius: 50,
    backgroundColor: '#f35412',
    alignItems: 'center',
  },
  eventCircleText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
    padding: 15,
    textAlign: 'center',
  },
  eventInfo: {
    justifyContent: 'center',
    flexBasis: 160,
    paddingLeft: 20,
  },
});
