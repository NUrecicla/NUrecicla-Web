import React, { useState } from 'react';
import { StyleSheet, View, Text, ScrollView, TouchableOpacity, Modal, Image } from 'react-native';
import { Card, Title, Paragraph, Button, ProgressBar } from 'react-native-paper';
import { Ionicons } from '@expo/vector-icons';

// Sample rewards data
const SAMPLE_REWARDS = [
  {
    id: '1',
    title: 'Phone Credit Voucher',
    description: 'Get 100 CVE phone credit for your mobile phone',
    pointsCost: 200,
    provider: 'CV Telecom',
    expiryDate: '2023-12-31',
    image: 'https://via.placeholder.com/100?text=Phone+Credit',
    category: 'telecom',
  },
  {
    id: '2',
    title: 'Public Transport Pass',
    description: 'One-day pass for public transportation in Praia',
    pointsCost: 150,
    provider: 'Praia Transport',
    expiryDate: '2023-12-31',
    image: 'https://via.placeholder.com/100?text=Transport',
    category: 'transport',
  },
  {
    id: '3',
    title: '10% Discount at EcoStore',
    description: 'Get 10% off your next purchase at EcoStore',
    pointsCost: 100,
    provider: 'EcoStore',
    expiryDate: '2023-12-31',
    image: 'https://via.placeholder.com/100?text=Discount',
    category: 'shopping',
  },
  {
    id: '4',
    title: 'Eco-friendly Water Bottle',
    description: 'Reusable water bottle made from recycled materials',
    pointsCost: 300,
    provider: 'Green Products',
    expiryDate: '2023-12-31',
    image: 'https://via.placeholder.com/100?text=Bottle',
    category: 'product',
  },
  {
    id: '5',
    title: 'Entry to Monthly Prize Draw',
    description: 'Chance to win eco-friendly products and vouchers',
    pointsCost: 50,
    provider: 'NUrecicla',
    expiryDate: '2023-12-31',
    image: 'https://via.placeholder.com/100?text=Prize+Draw',
    category: 'contest',
  },
];

// Sample user data
const USER_POINTS = 275;
const POINTS_HISTORY = [
  { id: '1', date: '2023-06-15', description: 'Recycled plastic bottles', points: 25 },
  { id: '2', date: '2023-06-10', description: 'Recycled paper', points: 15 },
  { id: '3', date: '2023-06-05', description: 'Recycled glass', points: 30 },
  { id: '4', date: '2023-06-01', description: 'Recycled electronics', points: 50 },
];

const RewardsScreen = () => {
  const [userPoints, setUserPoints] = useState(USER_POINTS);
  const [pointsHistory, setPointsHistory] = useState(POINTS_HISTORY);
  const [rewards, setRewards] = useState(SAMPLE_REWARDS);
  const [selectedReward, setSelectedReward] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [confirmModalVisible, setConfirmModalVisible] = useState(false);
  const [activeTab, setActiveTab] = useState('rewards'); // 'rewards' or 'history'
  const [filterCategory, setFilterCategory] = useState(null);

  // Filter rewards by category
  const filteredRewards = filterCategory
    ? rewards.filter(reward => reward.category === filterCategory)
    : rewards;

  // Categories for filtering
  const categories = [
    { id: null, name: 'All', icon: 'apps-outline' },
    { id: 'telecom', name: 'Telecom', icon: 'call-outline' },
    { id: 'transport', name: 'Transport', icon: 'bus-outline' },
    { id: 'shopping', name: 'Shopping', icon: 'cart-outline' },
    { id: 'product', name: 'Products', icon: 'gift-outline' },
    { id: 'contest', name: 'Contests', icon: 'trophy-outline' },
  ];

  // Handle reward redemption
  const redeemReward = () => {
    if (selectedReward && userPoints >= selectedReward.pointsCost) {
      // In a real app, this would call an API to redeem the reward
      setUserPoints(userPoints - selectedReward.pointsCost);
      
      // Add to points history
      const newHistoryItem = {
        id: Date.now().toString(),
        date: new Date().toISOString().split('T')[0],
        description: `Redeemed: ${selectedReward.title}`,
        points: -selectedReward.pointsCost,
      };
      
      setPointsHistory([newHistoryItem, ...pointsHistory]);
      setConfirmModalVisible(false);
      setModalVisible(false);
    }
  };

  return (
    <View style={styles.container}>
      {/* Points summary card */}
      <Card style={styles.pointsCard}>
        <Card.Content>
          <View style={styles.pointsHeader}>
            <View>
              <Text style={styles.pointsLabel}>Your Points</Text>
              <Text style={styles.pointsValue}>{userPoints}</Text>
            </View>
            <View style={styles.pointsIcon}>
              <Ionicons name="star" size={40} color="#F7D116" />
            </View>
          </View>
          
          <View style={styles.nextRewardContainer}>
            <Text style={styles.nextRewardText}>
              {userPoints >= 50 
                ? 'You have enough points to redeem rewards!'
                : `${50 - userPoints} more points until your first reward`}
            </Text>
            <ProgressBar 
              progress={Math.min(userPoints / 50, 1)} 
              color="#003893" 
              style={styles.progressBar} 
            />
          </View>
        </Card.Content>
      </Card>

      {/* Tab navigation */}
      <View style={styles.tabContainer}>
        <TouchableOpacity
          style={[styles.tab, activeTab === 'rewards' && styles.activeTab]}
          onPress={() => setActiveTab('rewards')}
        >
          <Ionicons 
            name="gift-outline" 
            size={20} 
            color={activeTab === 'rewards' ? '#003893' : '#666'} 
          />
          <Text style={[styles.tabText, activeTab === 'rewards' && styles.activeTabText]}>
            Rewards
          </Text>
        </TouchableOpacity>
        
        <TouchableOpacity
          style={[styles.tab, activeTab === 'history' && styles.activeTab]}
          onPress={() => setActiveTab('history')}
        >
          <Ionicons 
            name="time-outline" 
            size={20} 
            color={activeTab === 'history' ? '#003893' : '#666'} 
          />
          <Text style={[styles.tabText, activeTab === 'history' && styles.activeTabText]}>
            History
          </Text>
        </TouchableOpacity>
      </View>

      {activeTab === 'rewards' ? (
        // Rewards Tab
        <>
          {/* Category filters */}
          <ScrollView 
            horizontal 
            showsHorizontalScrollIndicator={false} 
            style={styles.categoryContainer}
          >
            {categories.map((category) => (
              <TouchableOpacity
                key={category.name}
                style={[
                  styles.categoryButton,
                  filterCategory === category.id && styles.activeCategoryButton,
                ]}
                onPress={() => setFilterCategory(category.id)}
              >
                <Ionicons 
                  name={category.icon} 
                  size={18} 
                  color={filterCategory === category.id ? '#fff' : '#003893'} 
                />
                <Text 
                  style={[
                    styles.categoryText,
                    filterCategory === category.id && styles.activeCategoryText,
                  ]}
                >
                  {category.name}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>

          {/* Rewards list */}
          <ScrollView style={styles.rewardsContainer}>
            {filteredRewards.map((reward) => (
              <Card 
                key={reward.id} 
                style={styles.rewardCard}
                onPress={() => {
                  setSelectedReward(reward);
                  setModalVisible(true);
                }}
              >
                <Card.Content style={styles.rewardCardContent}>
                  <View style={styles.rewardInfo}>
                    <Title>{reward.title}</Title>
                    <Paragraph numberOfLines={2}>{reward.description}</Paragraph>
                    <Text style={styles.providerText}>Provider: {reward.provider}</Text>
                  </View>
                  <View style={styles.rewardPoints}>
                    <Text style={styles.pointsCost}>{reward.pointsCost}</Text>
                    <Ionicons name="star" size={16} color="#F7D116" />
                  </View>
                </Card.Content>
              </Card>
            ))}
          </ScrollView>
        </>
      ) : (
        // History Tab
        <ScrollView style={styles.historyContainer}>
          {pointsHistory.map((item) => (
            <Card key={item.id} style={styles.historyCard}>
              <Card.Content>
                <View style={styles.historyItem}>
                  <View>
                    <Text style={styles.historyDate}>{item.date}</Text>
                    <Text style={styles.historyDescription}>{item.description}</Text>
                  </View>
                  <Text style={[styles.historyPoints, item.points < 0 && styles.negativePoints]}>
                    {item.points > 0 ? `+${item.points}` : item.points}
                  </Text>
                </View>
              </Card.Content>
            </Card>
          ))}
        </ScrollView>
      )}

      {/* Reward detail modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            {selectedReward && (
              <>
                <View style={styles.modalHeader}>
                  <Title style={styles.modalTitle}>{selectedReward.title}</Title>
                  <TouchableOpacity onPress={() => setModalVisible(false)}>
                    <Ionicons name="close" size={24} color="#000" />
                  </TouchableOpacity>
                </View>

                <ScrollView>
                  <Image 
                    source={{ uri: selectedReward.image }} 
                    style={styles.rewardImage} 
                    resizeMode="contain"
                  />
                  
                  <Paragraph style={styles.rewardDescription}>
                    {selectedReward.description}
                  </Paragraph>
                  
                  <View style={styles.rewardDetailItem}>
                    <Ionicons name="business-outline" size={20} color="#003893" />
                    <Text style={styles.rewardDetailText}>Provider: {selectedReward.provider}</Text>
                  </View>
                  
                  <View style={styles.rewardDetailItem}>
                    <Ionicons name="calendar-outline" size={20} color="#003893" />
                    <Text style={styles.rewardDetailText}>Valid until: {selectedReward.expiryDate}</Text>
                  </View>
                  
                  <View style={styles.rewardDetailItem}>
                    <Ionicons name="star" size={20} color="#F7D116" />
                    <Text style={styles.rewardDetailText}>{selectedReward.pointsCost} points required</Text>
                  </View>

                  <Button
                    mode="contained"
                    style={[
                      styles.redeemButton,
                      userPoints < selectedReward.pointsCost && styles.disabledButton,
                    ]}
                    disabled={userPoints < selectedReward.pointsCost}
                    onPress={() => setConfirmModalVisible(true)}
                  >
                    {userPoints >= selectedReward.pointsCost 
                      ? 'Redeem Reward' 
                      : `Need ${selectedReward.pointsCost - userPoints} more points`}
                  </Button>
                </ScrollView>
              </>
            )}
          </View>
        </View>
      </Modal>

      {/* Confirmation modal */}
      <Modal
        animationType="fade"
        transparent={true}
        visible={confirmModalVisible}
        onRequestClose={() => setConfirmModalVisible(false)}
      >
        <View style={styles.confirmModalContainer}>
          <View style={styles.confirmModalContent}>
            <Title style={styles.confirmTitle}>Confirm Redemption</Title>
            
            {selectedReward && (
              <Paragraph style={styles.confirmText}>
                Are you sure you want to redeem {selectedReward.title} for {selectedReward.pointsCost} points?
              </Paragraph>
            )}
            
            <View style={styles.confirmButtonsContainer}>
              <Button 
                mode="outlined" 
                onPress={() => setConfirmModalVisible(false)}
                style={styles.cancelButton}
              >
                Cancel
              </Button>
              <Button 
                mode="contained" 
                onPress={redeemReward}
                style={styles.confirmButton}
              >
                Confirm
              </Button>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  pointsCard: {
    margin: 16,
    elevation: 4,
  },
  pointsHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  pointsLabel: {
    fontSize: 14,
    color: '#666',
  },
  pointsValue: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#003893',
  },
  pointsIcon: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#f0f0f0',
    justifyContent: 'center',
    alignItems: 'center',
  },
  nextRewardContainer: {
    marginTop: 12,
  },
  nextRewardText: {
    fontSize: 14,
    color: '#666',
    marginBottom: 6,
  },
  progressBar: {
    height: 8,
    borderRadius: 4,
  },
  tabContainer: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    elevation: 2,
  },
  tab: {
    flex: 1,
    paddingVertical: 12,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  activeTab: {
    borderBottomWidth: 2,
    borderBottomColor: '#003893',
  },
  tabText: {
    marginLeft: 5,
    color: '#666',
  },
  activeTabText: {
    color: '#003893',
    fontWeight: 'bold',
  },
  categoryContainer: {
    paddingVertical: 10,
    paddingHorizontal: 5,
    backgroundColor: '#fff',
  },
  categoryButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 6,
    marginHorizontal: 5,
    borderRadius: 20,
    backgroundColor: '#f0f0f0',
  },
  activeCategoryButton: {
    backgroundColor: '#003893',
  },
  categoryText: {
    marginLeft: 5,
    fontSize: 14,
    color: '#003893',
  },
  activeCategoryText: {
    color: '#fff',
  },
  rewardsContainer: {
    flex: 1,
    padding: 16,
  },
  rewardCard: {
    marginBottom: 16,
    elevation: 2,
  },
  rewardCardContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  rewardInfo: {
    flex: 1,
    paddingRight: 10,
  },
  providerText: {
    fontSize: 12,
    color: '#666',
    marginTop: 4,
  },
  rewardPoints: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  pointsCost: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#003893',
    marginRight: 4,
  },
  historyContainer: {
    flex: 1,
    padding: 16,
  },
  historyCard: {
    marginBottom: 12,
    elevation: 2,
  },
  historyItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  historyDate: {
    fontSize: 14,
    color: '#666',
  },
  historyDescription: {
    fontSize: 16,
    marginTop: 2,
  },
  historyPoints: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#4CAF50',
  },
  negativePoints: {
    color: '#FF5252',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContent: {
    backgroundColor: '#fff',
    margin: 20,
    borderRadius: 10,
    padding: 20,
    maxHeight: '80%',
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
  rewardImage: {
    width: '100%',
    height: 200,
    marginBottom: 15,
  },
  rewardDescription: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 15,
  },
  rewardDetailItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  rewardDetailText: {
    marginLeft: 10,
    fontSize: 16,
  },
  redeemButton: {
    marginTop: 20,
    backgroundColor: '#003893',
  },
  disabledButton: {
    backgroundColor: '#ccc',
  },
  confirmModalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  confirmModalContent: {
    backgroundColor: '#fff',
    width: '80%',
    borderRadius: 10,
    padding: 20,
  },
  confirmTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
    textAlign: 'center',
  },
  confirmText: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: 'center',
  },
  confirmButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cancelButton: {
    flex: 1,
    marginRight: 10,
    borderColor: '#003893',
  },
  confirmButton: {
    flex: 1,
    marginLeft: 10,
    backgroundColor: '#003893',
  },
});

export default RewardsScreen;