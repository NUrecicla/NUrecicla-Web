import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Alert } from 'react-native';
import { Camera } from 'expo-camera';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { Button, Card, Title, Paragraph } from 'react-native-paper';
import { Ionicons } from '@expo/vector-icons';

const ScanScreen = () => {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [scanHistory, setScanHistory] = useState([]);
  const [showHistory, setShowHistory] = useState(false);

  // Request camera permission on component mount
  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  // Handle QR code scan
  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    
    try {
      // In a real app, we would validate the QR code format and data
      // For this demo, we'll assume the QR code contains recycling information in JSON format
      const recyclingData = JSON.parse(data);
      
      // Add points based on recycling activity
      const pointsEarned = calculatePoints(recyclingData);
      
      // Add to scan history
      const newScan = {
        id: Date.now().toString(),
        date: new Date().toLocaleString(),
        location: recyclingData.location || 'Unknown Location',
        materials: recyclingData.materials || [],
        points: pointsEarned,
      };
      
      setScanHistory([newScan, ...scanHistory]);
      
      // Show success message
      Alert.alert(
        'Recycling Registered!',
        `Thank you for recycling! You earned ${pointsEarned} points.`,
        [{ text: 'OK', onPress: () => setScanned(false) }]
      );
    } catch (error) {
      // Handle invalid QR code
      Alert.alert(
        'Invalid QR Code',
        'The scanned QR code is not valid for recycling registration.',
        [{ text: 'Try Again', onPress: () => setScanned(false) }]
      );
    }
  };

  // Calculate points based on recycling activity
  const calculatePoints = (recyclingData) => {
    // In a real app, this would be a more complex calculation based on
    // material types, weights, and possibly other factors
    const basePoints = 10;
    const materialPoints = (recyclingData.materials?.length || 0) * 5;
    return basePoints + materialPoints;
  };

  // Handle permission denied
  if (hasPermission === null) {
    return <View style={styles.container}><Text>Requesting camera permission...</Text></View>;
  }
  if (hasPermission === false) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>Camera access is required to scan QR codes.</Text>
        <Button 
          mode="contained" 
          onPress={() => Camera.requestCameraPermissionsAsync()}
          style={styles.permissionButton}
        >
          Grant Permission
        </Button>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {!showHistory ? (
        // QR Scanner View
        <View style={styles.scannerContainer}>
          <View style={styles.scannerHeader}>
            <Text style={styles.scannerTitle}>Scan Recycling QR Code</Text>
            <Text style={styles.scannerSubtitle}>
              Scan the QR code at recycling points to register your activity
            </Text>
          </View>
          
          <View style={styles.cameraContainer}>
            {!scanned && (
              <Camera
                style={styles.camera}
                type={Camera.Constants.Type.back}
                barCodeScannerSettings={{
                  barCodeTypes: [BarCodeScanner.Constants.BarCodeType.qr],
                }}
                onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
              >
                <View style={styles.scannerOverlay}>
                  <View style={styles.scannerMarker} />
                </View>
              </Camera>
            )}
            
            {scanned && (
              <View style={styles.rescanContainer}>
                <Text style={styles.rescanText}>QR Code Scanned</Text>
                <Button 
                  mode="contained" 
                  onPress={() => setScanned(false)}
                  style={styles.rescanButton}
                >
                  Scan Again
                </Button>
              </View>
            )}
          </View>
          
          <View style={styles.instructionContainer}>
            <Text style={styles.instructionText}>
              1. Place the QR code within the frame
            </Text>
            <Text style={styles.instructionText}>
              2. Hold steady until the code is scanned
            </Text>
            <Text style={styles.instructionText}>
              3. Confirm your recycling activity
            </Text>
          </View>
          
          <Button 
            mode="outlined" 
            onPress={() => setShowHistory(true)}
            style={styles.historyButton}
            icon={({size, color}) => (
              <Ionicons name="time-outline" size={size} color={color} />
            )}
          >
            View Scan History
          </Button>
        </View>
      ) : (
        // History View
        <View style={styles.historyContainer}>
          <View style={styles.historyHeader}>
            <Title style={styles.historyTitle}>Recycling History</Title>
            <Button 
              mode="text" 
              onPress={() => setShowHistory(false)}
              icon={({size, color}) => (
                <Ionicons name="arrow-back" size={size} color={color} />
              )}
            >
              Back to Scanner
            </Button>
          </View>
          
          {scanHistory.length === 0 ? (
            <View style={styles.emptyHistoryContainer}>
              <Ionicons name="leaf-outline" size={64} color="#003893" />
              <Text style={styles.emptyHistoryText}>
                No recycling activities yet. Start scanning QR codes at recycling points!
              </Text>
            </View>
          ) : (
            scanHistory.map((scan) => (
              <Card key={scan.id} style={styles.historyCard}>
                <Card.Content>
                  <Title>{scan.location}</Title>
                  <Paragraph>Date: {scan.date}</Paragraph>
                  <Paragraph>Materials: {scan.materials.join(', ') || 'Not specified'}</Paragraph>
                  <View style={styles.pointsContainer}>
                    <Ionicons name="star" size={20} color="#F7D116" />
                    <Text style={styles.pointsText}>{scan.points} points earned</Text>
                  </View>
                </Card.Content>
              </Card>
            ))
          )}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scannerContainer: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  scannerHeader: {
    alignItems: 'center',
    marginBottom: 20,
  },
  scannerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#003893',
    marginBottom: 8,
  },
  scannerSubtitle: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
  },
  cameraContainer: {
    width: '100%',
    aspectRatio: 1,
    overflow: 'hidden',
    borderRadius: 20,
    marginVertical: 20,
  },
  camera: {
    flex: 1,
  },
  scannerOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.4)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  scannerMarker: {
    width: 200,
    height: 200,
    borderWidth: 2,
    borderColor: '#F7D116',
    backgroundColor: 'transparent',
  },
  rescanContainer: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  rescanText: {
    fontSize: 18,
    marginBottom: 20,
  },
  rescanButton: {
    backgroundColor: '#003893',
  },
  instructionContainer: {
    width: '100%',
    padding: 15,
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    marginBottom: 20,
  },
  instructionText: {
    fontSize: 16,
    marginBottom: 8,
    color: '#333',
  },
  historyButton: {
    width: '100%',
    marginBottom: 10,
    borderColor: '#003893',
  },
  historyContainer: {
    flex: 1,
    padding: 20,
  },
  historyHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  historyTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#003893',
  },
  emptyHistoryContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  emptyHistoryText: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginTop: 20,
  },
  historyCard: {
    marginBottom: 15,
    elevation: 2,
  },
  pointsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  pointsText: {
    marginLeft: 5,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#003893',
  },
  errorText: {
    fontSize: 16,
    color: 'red',
    textAlign: 'center',
    marginBottom: 20,
  },
  permissionButton: {
    backgroundColor: '#003893',
  },
});

export default ScanScreen;