import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Modal, ScrollView } from 'react-native';
import MapView, { Marker, Callout } from 'react-native-maps';
import { Card, Title, Paragraph, Button } from 'react-native-paper';
import { Ionicons } from '@expo/vector-icons';

// Sample data for recycling points
const INITIAL_RECYCLING_POINTS = [
  {
    id: '1',
    name: 'Praia Recycling Center',
    coordinate: { latitude: 14.9315, longitude: -23.5125 },
    address: 'Av. Cidade de Lisboa, Praia, Cabo Verde',
    materials: ['Plastic', 'Paper', 'Glass', 'Metal'],
    hours: 'Mon-Sat: 8:00 - 18:00',
    phone: '+238 260 1234',
  },
  {
    id: '2',
    name: 'Mindelo Collection Point',
    coordinate: { latitude: 16.8901, longitude: -24.9804 },
    address: 'Rua de Lisboa, Mindelo, São Vicente, Cabo Verde',
    materials: ['Plastic', 'Electronics', 'Batteries'],
    hours: 'Mon-Fri: 9:00 - 17:00',
    phone: '+238 232 5678',
  },
  {
    id: '3',
    name: 'Santa Maria Eco Station',
    coordinate: { latitude: 16.5900, longitude: -22.9068 },
    address: 'Avenida dos Pescadores, Santa Maria, Sal, Cabo Verde',
    materials: ['Plastic', 'Paper', 'Glass'],
    hours: 'Mon-Sun: 8:00 - 20:00',
    phone: '+238 242 9012',
  },
];

// Initial map region centered on Cabo Verde
const INITIAL_REGION = {
  latitude: 15.9560,
  longitude: -23.6250,
  latitudeDelta: 3,
  longitudeDelta: 3,
};

const MapScreen = () => {
  const [recyclingPoints, setRecyclingPoints] = useState(INITIAL_RECYCLING_POINTS);
  const [selectedPoint, setSelectedPoint] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [filterMaterial, setFilterMaterial] = useState(null);

  // Filter recycling points by material
  const filteredPoints = filterMaterial
    ? recyclingPoints.filter(point => point.materials.includes(filterMaterial))
    : recyclingPoints;

  // Material filter options
  const materialFilters = ['All', 'Plastic', 'Paper', 'Glass', 'Metal', 'Electronics', 'Batteries'];

  return (
    <View style={styles.container}>
      {/* Material filter buttons */}
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.filterContainer}>
        {materialFilters.map((material) => (
          <TouchableOpacity
            key={material}
            style={[
              styles.filterButton,
              (material === filterMaterial || (material === 'All' && !filterMaterial))
                ? styles.filterButtonActive
                : null,
            ]}
            onPress={() => setFilterMaterial(material === 'All' ? null : material)}
          >
            <Text
              style={[
                styles.filterText,
                (material === filterMaterial || (material === 'All' && !filterMaterial))
                  ? styles.filterTextActive
                  : null,
              ]}
            >
              {material}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Map with recycling points */}
      <MapView
        style={styles.map}
        initialRegion={INITIAL_REGION}
        showsUserLocation
        showsMyLocationButton
      >
        {filteredPoints.map((point) => (
          <Marker
            key={point.id}
            coordinate={point.coordinate}
            title={point.name}
            description={point.address}
            onPress={() => {
              setSelectedPoint(point);
              setModalVisible(true);
            }}
          >
            <Ionicons name="location" size={36} color="#003893" />
            <Callout tooltip>
              <Card style={styles.calloutCard}>
                <Card.Content>
                  <Title>{point.name}</Title>
                  <Paragraph>{point.address}</Paragraph>
                </Card.Content>
              </Card>
            </Callout>
          </Marker>
        ))}
      </MapView>

      {/* Detailed modal for selected recycling point */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            {selectedPoint && (
              <>
                <View style={styles.modalHeader}>
                  <Title style={styles.modalTitle}>{selectedPoint.name}</Title>
                  <TouchableOpacity onPress={() => setModalVisible(false)}>
                    <Ionicons name="close" size={24} color="#000" />
                  </TouchableOpacity>
                </View>

                <ScrollView>
                  <Paragraph style={styles.modalAddress}>{selectedPoint.address}</Paragraph>
                  
                  <View style={styles.infoSection}>
                    <Ionicons name="time-outline" size={20} color="#003893" />
                    <Text style={styles.infoText}>{selectedPoint.hours}</Text>
                  </View>
                  
                  <View style={styles.infoSection}>
                    <Ionicons name="call-outline" size={20} color="#003893" />
                    <Text style={styles.infoText}>{selectedPoint.phone}</Text>
                  </View>

                  <Title style={styles.materialsTitle}>Accepted Materials</Title>
                  <View style={styles.materialsContainer}>
                    {selectedPoint.materials.map((material) => (
                      <View key={material} style={styles.materialItem}>
                        <Ionicons
                          name={
                            material === 'Plastic' ? 'water-outline' :
                            material === 'Paper' ? 'newspaper-outline' :
                            material === 'Glass' ? 'wine-outline' :
                            material === 'Metal' ? 'hardware-chip-outline' :
                            material === 'Electronics' ? 'laptop-outline' :
                            material === 'Batteries' ? 'battery-charging-outline' :
                            'leaf-outline'
                          }
                          size={24}
                          color="#003893"
                        />
                        <Text style={styles.materialText}>{material}</Text>
                      </View>
                    ))}
                  </View>

                  <Button
                    mode="contained"
                    style={styles.directionsButton}
                    onPress={() => {
                      // In a real app, this would open maps with directions
                      setModalVisible(false);
                    }}
                  >
                    Get Directions
                  </Button>
                </ScrollView>
              </>
            )}
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
  filterContainer: {
    paddingVertical: 10,
    paddingHorizontal: 5,
    backgroundColor: '#fff',
  },
  filterButton: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    marginHorizontal: 5,
    borderRadius: 20,
    backgroundColor: '#f0f0f0',
  },
  filterButtonActive: {
    backgroundColor: '#003893',
  },
  filterText: {
    fontSize: 14,
    color: '#333',
  },
  filterTextActive: {
    color: '#fff',
  },
  calloutCard: {
    width: 200,
    borderRadius: 10,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContent: {
    backgroundColor: '#fff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
    maxHeight: '70%',
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    flex: 1,
  },
  modalAddress: {
    fontSize: 16,
    color: '#666',
    marginBottom: 15,
  },
  infoSection: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  infoText: {
    marginLeft: 10,
    fontSize: 16,
    color: '#333',
  },
  materialsTitle: {
    fontSize: 18,
    marginTop: 15,
    marginBottom: 10,
  },
  materialsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 20,
  },
  materialItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    borderRadius: 15,
    paddingHorizontal: 12,
    paddingVertical: 8,
    margin: 5,
  },
  materialText: {
    marginLeft: 5,
    fontSize: 14,
  },
  directionsButton: {
    marginTop: 10,
    marginBottom: 20,
    backgroundColor: '#003893',
  },
});

export default MapScreen;