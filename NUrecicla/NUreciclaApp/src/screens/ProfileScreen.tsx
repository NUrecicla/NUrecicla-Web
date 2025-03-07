import React, { useState } from 'react';
import { StyleSheet, View, Text, ScrollView, Image, TouchableOpacity } from 'react-native';
import { Card, Title, Paragraph, Button, Avatar, ProgressBar, Divider } from 'react-native-paper';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

// Sample user data
const USER_DATA = {
  name: 'Maria Silva',
  email: 'maria.silva@example.com',
  joinDate: '2023-05-15',
  totalPoints: 395,
  level: 'Eco Warrior',
  avatar: 'https://via.placeholder.com/100?text=MS',
  badges: [
    { id: '1', name: 'First Recycling', icon: 'leaf-outline', date: '2023-05-16' },
    { id: '2', name: 'Plastic Hero', icon: 'water-outline', date: '2023-05-20' },
    { id: '3', name: 'Paper Saver', icon: 'newspaper-outline', date: '2023-06-02' },
    { id: '4', name: '10 Activities', icon: 'trophy-outline', date: '2023-06-10' },
  ],
};

// Sample impact data
const IMPACT_DATA = {
  totalRecycled: 47.5, // kg
  co2Saved: 28.2, // kg
  waterSaved: 1250, // liters
  energySaved: 175, // kWh
  treesSaved: 3,
  monthlyProgress: 0.65, // 65% of monthly goal
  recyclingBreakdown: [
    { material: 'Plastic', percentage: 45, color: '#2196F3' },
    { material: 'Paper', percentage: 30, color: '#4CAF50' },
    { material: 'Glass', percentage: 15, color: '#9C27B0' },
    { material: 'Metal', percentage: 10, color: '#FF9800' },
  ],
  recentActivities: [
    { id: '1', date: '2023-06-15', materials: ['Plastic', 'Paper'], weight: 2.3, location: 'Praia Recycling Center' },
    { id: '2', date: '2023-06-10', materials: ['Glass'], weight: 3.1, location: 'Mindelo Collection Point' },
    { id: '3', date: '2023-06-05', materials: ['Plastic', 'Metal'], weight: 1.8, location: 'Praia Recycling Center' },
  ],
};

const ProfileScreen = () => {
  const [activeTab, setActiveTab] = useState('profile'); // 'profile' or 'impact'

  return (
    <View style={styles.container}>
      {/* Header with user info */}
      <LinearGradient
        colors={['#003893', '#0055d4']}
        style={styles.header}
      >
        <View style={styles.userInfoContainer}>
          <Avatar.Image 
            source={{ uri: USER_DATA.avatar }} 
            size={80} 
            style={styles.avatar}
          />
          <View style={styles.userTextContainer}>
            <Text style={styles.userName}>{USER_DATA.name}</Text>
            <Text style={styles.userLevel}>{USER_DATA.level}</Text>
            <View style={styles.pointsContainer}>
              <Ionicons name="star" size={16} color="#F7D116" />
              <Text style={styles.pointsText}>{USER_DATA.totalPoints} points</Text>
            </View>
          </View>
        </View>
      </LinearGradient>

      {/* Tab navigation */}
      <View style={styles.tabContainer}>
        <TouchableOpacity
          style={[styles.tab, activeTab === 'profile' && styles.activeTab]}
          onPress={() => setActiveTab('profile')}
        >
          <Ionicons 
            name="person-outline" 
            size={20} 
            color={activeTab === 'profile' ? '#003893' : '#666'} 
          />
          <Text style={[styles.tabText, activeTab === 'profile' && styles.activeTabText]}>
            Profile
          </Text>
        </TouchableOpacity>
        
        <TouchableOpacity
          style={[styles.tab, activeTab === 'impact' && styles.activeTab]}
          onPress={() => setActiveTab('impact')}
        >
          <Ionicons 
            name="analytics-outline" 
            size={20} 
            color={activeTab === 'impact' ? '#003893' : '#666'} 
          />
          <Text style={[styles.tabText, activeTab === 'impact' && styles.activeTabText]}>
            Impact Dashboard
          </Text>
        </TouchableOpacity>
      </View>

      {activeTab === 'profile' ? (
        // Profile Tab
        <ScrollView style={styles.contentContainer}>
          {/* User details card */}
          <Card style={styles.card}>
            <Card.Content>
              <Title style={styles.cardTitle}>Account Information</Title>
              <View style={styles.infoRow}>
                <Ionicons name="mail-outline" size={20} color="#003893" />
                <Text style={styles.infoText}>{USER_DATA.email}</Text>
              </View>
              <View style={styles.infoRow}>
                <Ionicons name="calendar-outline" size={20} color="#003893" />
                <Text style={styles.infoText}>Joined on {USER_DATA.joinDate}</Text>
              </View>
            </Card.Content>
            <Card.Actions>
              <Button 
                mode="outlined" 
                style={styles.editButton}
                // In a real app, this would navigate to an edit profile screen
              >
                Edit Profile
              </Button>
            </Card.Actions>
          </Card>

          {/* Badges card */}
          <Card style={styles.card}>
            <Card.Content>
              <Title style={styles.cardTitle}>Badges Earned</Title>
              <View style={styles.badgesContainer}>
                {USER_DATA.badges.map((badge) => (
                  <View key={badge.id} style={styles.badgeItem}>
                    <View style={styles.badgeIcon}>
                      <Ionicons name={badge.icon} size={30} color="#003893" />
                    </View>
                    <Text style={styles.badgeName}>{badge.name}</Text>
                    <Text style={styles.badgeDate}>{badge.date}</Text>
                  </View>
                ))}
              </View>
            </Card.Content>
          </Card>

          {/* Settings options */}
          <Card style={styles.card}>
            <Card.Content>
              <Title style={styles.cardTitle}>Settings</Title>
              <TouchableOpacity style={styles.settingRow}>
                <Ionicons name="notifications-outline" size={24} color="#003893" />
                <Text style={styles.settingText}>Notification Preferences</Text>
                <Ionicons name="chevron-forward" size={20} color="#666" style={styles.settingArrow} />
              </TouchableOpacity>
              <Divider style={styles.divider} />
              <TouchableOpacity style={styles.settingRow}>
                <Ionicons name="language-outline" size={24} color="#003893" />
                <Text style={styles.settingText}>Language</Text>
                <Ionicons name="chevron-forward" size={20} color="#666" style={styles.settingArrow} />
              </TouchableOpacity>
              <Divider style={styles.divider} />
              <TouchableOpacity style={styles.settingRow}>
                <Ionicons name="help-circle-outline" size={24} color="#003893" />
                <Text style={styles.settingText}>Help & Support</Text>
                <Ionicons name="chevron-forward" size={20} color="#666" style={styles.settingArrow} />
              </TouchableOpacity>
              <Divider style={styles.divider} />
              <TouchableOpacity style={styles.settingRow}>
                <Ionicons name="log-out-outline" size={24} color="#FF5252" />
                <Text style={[styles.settingText, { color: '#FF5252' }]}>Log Out</Text>
              </TouchableOpacity>
            </Card.Content>
          </Card>
        </ScrollView>
      ) : (
        // Impact Dashboard Tab
        <ScrollView style={styles.contentContainer}>
          {/* Summary cards */}
          <View style={styles.summaryContainer}>
            <Card style={styles.summaryCard}>
              <Card.Content style={styles.summaryContent}>
                <Ionicons name="scale-outline" size={30} color="#003893" />
                <Text style={styles.summaryValue}>{IMPACT_DATA.totalRecycled} kg</Text>
                <Text style={styles.summaryLabel}>Total Recycled</Text>
              </Card.Content>
            </Card>
            
            <Card style={styles.summaryCard}>
              <Card.Content style={styles.summaryContent}>
                <Ionicons name="cloud-outline" size={30} color="#003893" />
                <Text style={styles.summaryValue}>{IMPACT_DATA.co2Saved} kg</Text>
                <Text style={styles.summaryLabel}>CO₂ Saved</Text>
              </Card.Content>
            </Card>
          </View>

          <View style={styles.summaryContainer}>
            <Card style={styles.summaryCard}>
              <Card.Content style={styles.summaryContent}>
                <Ionicons name="water-outline" size={30} color="#003893" />
                <Text style={styles.summaryValue}>{IMPACT_DATA.waterSaved} L</Text>
                <Text style={styles.summaryLabel}>Water Saved</Text>
              </Card.Content>
            </Card>
            
            <Card style={styles.summaryCard}>
              <Card.Content style={styles.summaryContent}>
                <Ionicons name="flash-outline" size={30} color="#003893" />
                <Text style={styles.summaryValue}>{IMPACT_DATA.energySaved} kWh</Text>
                <Text style={styles.summaryLabel}>Energy Saved</Text>
              </Card.Content>
            </Card>
          </View>

          {/* Monthly progress */}
          <Card style={styles.card}>
            <Card.Content>
              <View style={styles.progressHeader}>
                <Title style={styles.cardTitle}>Monthly Goal Progress</Title>
                <Text style={styles.progressPercentage}>{Math.round(IMPACT_DATA.monthlyProgress * 100)}%</Text>
              </View>
              <ProgressBar 
                progress={IMPACT_DATA.monthlyProgress} 
                color="#003893" 
                style={styles.progressBar} 
              />
              <Text style={styles.progressText}>
                You've recycled {IMPACT_DATA.totalRecycled} kg this month. Keep going!
              </Text>
            </Card.Content>
          </Card>

          {/* Recycling breakdown */}
          <Card style={styles.card}>
            <Card.Content>
              <Title style={styles.cardTitle}>Recycling Breakdown</Title>
              {IMPACT_DATA.recyclingBreakdown.map((item) => (
                <View key={item.material} style={styles.breakdownItem}>
                  <View style={styles.breakdownLabelContainer}>
                    <View style={[styles.materialIndicator, { backgroundColor: item.color }]} />
                    <Text style={styles.breakdownLabel}>{item.material}</Text>
                  </View>
                  <Text style={styles.breakdownPercentage}>{item.percentage}%</Text>
                </View>
              ))}
            </Card.Content>
          </Card>

          {/* Environmental impact */}
          <Card style={styles.card}>
            <Card.Content>
              <Title style={styles.cardTitle}>Environmental Impact</Title>
              <View style={styles.environmentalImpact}>
                <View style={styles.treeContainer}>
                  {[...Array(IMPACT_DATA.treesSaved)].map((_, index) => (
                    <Ionicons key={index} name="leaf" size={40} color="#4CAF50" style={styles.treeIcon} />
                  ))}
                </View>
                <Text style={styles.environmentalText}>
                  Your recycling efforts have saved the equivalent of {IMPACT_DATA.treesSaved} trees!
                </Text>
              </View>
            </Card.Content>
          </Card>

          {/* Recent activities */}
          <Card style={styles.card}>
            <Card.Content>
              <Title style={styles.cardTitle}>Recent Recycling Activities</Title>
              {IMPACT_DATA.recentActivities.map((activity) => (
                <View key={activity.id} style={styles.activityItem}>
                  <View style={styles.activityHeader}>
                    <Text style={styles.activityDate}>{activity.date}</Text>
                    <Text style={styles.activityWeight}>{activity.weight} kg</Text>
                  </View>
                  <Text style={styles.activityLocation}>{activity.location}</Text>
                  <View style={styles.materialChips}>
                    {activity.materials.map((material) => (
                      <View key={material} style={styles.materialChip}>
                        <Text style={styles.materialChipText}>{material}</Text>
                      </View>
                    ))}
                  </View>
                  <Divider style={styles.activityDivider} />
                </View>
              ))}
            </Card.Content>
          </Card>
        </ScrollView>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    paddingTop: 20,
    paddingBottom: 20,
    paddingHorizontal: 16,
  },
  userInfoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    backgroundColor: '#fff',
  },
  userTextContainer: {
    marginLeft: 16,
  },
  userName: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff',
  },
  userLevel: {
    fontSize: 16,
    color: '#F7D116',
    marginBottom: 4,
  },
  pointsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  pointsText: {
    marginLeft: 5,
    fontSize: 14,
    color: '#fff',
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
  contentContainer: {
    flex: 1,
    padding: 16,
  },
  card: {
    marginBottom: 16,
    elevation: 2,
  },
  cardTitle: {
    fontSize: 18,
    marginBottom: 12,
    color: '#003893',
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  infoText: {
    marginLeft: 10,
    fontSize: 16,
  },
  editButton: {
    borderColor: '#003893',
    marginTop: 8,
  },
  badgesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  badgeItem: {
    width: '48%',
    alignItems: 'center',
    marginBottom: 16,
  },
  badgeIcon: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#f0f0f0',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  badgeName: {
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  badgeDate: {
    fontSize: 12,
    color: '#666',
    marginTop: 4,
  },
  settingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
  },
  settingText: {
    marginLeft: 12,
    fontSize: 16,
    flex: 1,
  },
  settingArrow: {
    marginLeft: 'auto',
  },
  divider: {
    height: 1,
  },
  summaryContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  summaryCard: {
    width: '48%',
    elevation: 2,
  },
  summaryContent: {
    alignItems: 'center',
    padding: 12,
  },
  summaryValue: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 8,
    color: '#003893',
  },
  summaryLabel: {
    fontSize: 14,
    color: '#666',
  },
  progressHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  progressPercentage: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#003893',
  },
  progressBar: {
    height: 10,
    borderRadius: 5,
  },
  progressText: {
    marginTop: 8,
    fontSize: 14,
    color: '#666',
  },
  breakdownItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  breakdownLabelContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  materialIndicator: {
    width: 16,
    height: 16,
    borderRadius: 8,
    marginRight: 8,
  },
  breakdownLabel: {
    fontSize: 16,
  },
  breakdownPercentage: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  environmentalImpact: {
    alignItems: 'center',
    marginTop: 8,
  },
  treeContainer: {
    flexDirection: 'row',
    marginBottom: 12,
  },
  treeIcon: {
    marginHorizontal: 4,
  },
  environmentalText: {
    fontSize: 16,
    textAlign: 'center',
    color: '#666',
  },
  activityItem: {
    marginBottom: 16,
  },
  activityHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 4,
  },
  activityDate: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  activityWeight: {
    fontSize: 14,
    color: '#003893',
    fontWeight: 'bold',
  },
  activityLocation: {
    fontSize: 14,
    color: '#666',
    marginBottom: 8,
  },
  materialChips: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 8,
  },
  materialChip: {
    backgroundColor: '#f0f0f0',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
    marginRight: 8,
    marginBottom: 4,
  },
  materialChipText: {
    fontSize: 12,
  },
  activityDivider: {
    marginTop: 8,
  },
});

export default ProfileScreen;