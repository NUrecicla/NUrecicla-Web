import React, { useState } from 'react';
import { StyleSheet, View, Text, ScrollView, TouchableOpacity, Image, Linking } from 'react-native';
import { Card, Title, Paragraph, Button, Divider, Chip } from 'react-native-paper';
import { Ionicons } from '@expo/vector-icons';

// Sample education content
const EDUCATION_CONTENT = {
  articles: [
    {
      id: '1',
      title: 'Recycling Basics in Cabo Verde',
      description: 'Learn about the fundamentals of recycling and why it matters for our islands.',
      image: 'https://via.placeholder.com/300x200?text=Recycling+Basics',
      category: 'basics',
      readTime: '5 min',
      content: `Recycling is the process of converting waste materials into new materials and objects. 
      
In Cabo Verde, recycling is particularly important due to our limited land space and the impact of waste on our beautiful beaches and marine life. 

By recycling, we can:
• Reduce landfill waste
• Conserve natural resources
• Save energy
• Reduce pollution
• Create jobs in the recycling industry

Common materials that can be recycled in Cabo Verde include plastic bottles, paper, cardboard, glass, and certain metals. Look for recycling points in your area using the Map feature in this app!`,
    },
    {
      id: '2',
      title: 'Plastic Pollution in Our Oceans',
      description: 'Discover the impact of plastic waste on marine ecosystems and what we can do about it.',
      image: 'https://via.placeholder.com/300x200?text=Ocean+Pollution',
      category: 'environment',
      readTime: '7 min',
      content: `Plastic pollution is one of the most significant environmental challenges facing our oceans today.
      
As an island nation, Cabo Verde is particularly vulnerable to the impacts of marine plastic pollution. Our beaches and coastal waters are increasingly affected by plastic waste, much of which comes from both local sources and international waters.

Key facts about plastic pollution:
• Over 8 million tons of plastic enter our oceans every year
• Plastic can take hundreds of years to decompose
• Marine animals often mistake plastic for food
• Microplastics are entering the food chain

What you can do:
• Reduce single-use plastics
• Participate in beach clean-ups
• Properly dispose of your waste
• Choose products with less packaging
• Spread awareness in your community`,
    },
    {
      id: '3',
      title: 'Composting at Home',
      description: 'Turn your food waste into valuable soil for plants and gardens.',
      image: 'https://via.placeholder.com/300x200?text=Composting',
      category: 'howto',
      readTime: '6 min',
      content: `Composting is a natural process that transforms kitchen and garden waste into nutrient-rich soil.
      
In Cabo Verde's dry climate, composting can help create valuable soil for agriculture and gardening while reducing the amount of waste sent to landfills.

How to start composting at home:

1. Choose a container: You can use a dedicated compost bin or create your own from a plastic container with holes for ventilation.

2. Add brown materials (carbon-rich):
   • Dry leaves
   • Cardboard
   • Paper
   • Twigs

3. Add green materials (nitrogen-rich):
   • Fruit and vegetable scraps
   • Coffee grounds
   • Eggshells
   • Plant trimmings

4. Avoid adding:
   • Meat or dairy products
   • Oils or fats
   • Diseased plants
   • Pet waste

5. Maintain your compost:
   • Keep it moist but not wet
   • Turn it regularly to add oxygen
   • Be patient - it takes 3-6 months to create finished compost

The finished compost can be used to enrich soil for plants, gardens, and agriculture.`,
    },
  ],
  videos: [
    {
      id: '1',
      title: 'Recycling Process Explained',
      thumbnail: 'https://via.placeholder.com/300x200?text=Recycling+Video',
      duration: '4:30',
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    },
    {
      id: '2',
      title: 'DIY Recycled Crafts',
      thumbnail: 'https://via.placeholder.com/300x200?text=DIY+Crafts',
      duration: '7:15',
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    },
    {
      id: '3',
      title: 'Cabo Verde Beach Cleanup Initiative',
      thumbnail: 'https://via.placeholder.com/300x200?text=Beach+Cleanup',
      duration: '5:45',
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    },
  ],
  quizzes: [
    {
      id: '1',
      title: 'Recycling Basics Quiz',
      description: 'Test your knowledge about recycling fundamentals',
      questions: 5,
      points: 10,
    },
    {
      id: '2',
      title: 'Plastic Pollution Challenge',
      description: 'How much do you know about plastic waste?',
      questions: 8,
      points: 15,
    },
    {
      id: '3',
      title: 'Sustainability Master Quiz',
      description: 'Advanced questions for eco-warriors',
      questions: 10,
      points: 20,
    },
  ],
};

const EducationScreen = () => {
  const [activeTab, setActiveTab] = useState('articles'); // 'articles', 'videos', or 'quizzes'
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [activeCategory, setActiveCategory] = useState('all');

  // Filter articles by category
  const filteredArticles = activeCategory === 'all' 
    ? EDUCATION_CONTENT.articles 
    : EDUCATION_CONTENT.articles.filter(article => article.category === activeCategory);

  // Categories for filtering articles
  const categories = [
    { id: 'all', name: 'All', icon: 'apps-outline' },
    { id: 'basics', name: 'Basics', icon: 'book-outline' },
    { id: 'environment', name: 'Environment', icon: 'leaf-outline' },
    { id: 'howto', name: 'How-To', icon: 'construct-outline' },
  ];

  // Handle opening video links
  const openVideo = (url) => {
    Linking.openURL(url).catch(err => console.error("Couldn't load video", err));
  };

  return (
    <View style={styles.container}>
      {/* Tab navigation */}
      <View style={styles.tabContainer}>
        <TouchableOpacity
          style={[styles.tab, activeTab === 'articles' && styles.activeTab]}
          onPress={() => setActiveTab('articles')}
        >
          <Ionicons 
            name="newspaper-outline" 
            size={20} 
            color={activeTab === 'articles' ? '#003893' : '#666'} 
          />
          <Text style={[styles.tabText, activeTab === 'articles' && styles.activeTabText]}>
            Articles
          </Text>
        </TouchableOpacity>
        
        <TouchableOpacity
          style={[styles.tab, activeTab === 'videos' && styles.activeTab]}
          onPress={() => setActiveTab('videos')}
        >
          <Ionicons 
            name="videocam-outline" 
            size={20} 
            color={activeTab === 'videos' ? '#003893' : '#666'} 
          />
          <Text style={[styles.tabText, activeTab === 'videos' && styles.activeTabText]}>
            Videos
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.tab, activeTab === 'quizzes' && styles.activeTab]}
          onPress={() => setActiveTab('quizzes')}
        >
          <Ionicons 
            name="help-circle-outline" 
            size={20} 
            color={activeTab === 'quizzes' ? '#003893' : '#666'} 
          />
          <Text style={[styles.tabText, activeTab === 'quizzes' && styles.activeTabText]}>
            Quizzes
          </Text>
        </TouchableOpacity>
      </View>

      {activeTab === 'articles' && !selectedArticle && (
        // Articles Tab
        <>
          {/* Category filters */}
          <ScrollView 
            horizontal 
            showsHorizontalScrollIndicator={false} 
            style={styles.categoryContainer}
          >
            {categories.map((category) => (
              <TouchableOpacity
                key={category.id}
                style={[
                  styles.categoryButton,
                  activeCategory === category.id && styles.activeCategoryButton,
                ]}
                onPress={() => setActiveCategory(category.id)}
              >
                <Ionicons 
                  name={category.icon} 
                  size={18} 
                  color={activeCategory === category.id ? '#fff' : '#003893'} 
                />
                <Text 
                  style={[
                    styles.categoryText,
                    activeCategory === category.id && styles.activeCategoryText,
                  ]}
                >
                  {category.name}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>

          {/* Articles list */}
          <ScrollView style={styles.contentContainer}>
            {filteredArticles.map((article) => (
              <Card 
                key={article.id} 
                style={styles.articleCard}
                onPress={() => setSelectedArticle(article)}
              >
                <Card.Cover source={{ uri: article.image }} style={styles.articleImage} />
                <Card.Content>
                  <Title>{article.title}</Title>
                  <Paragraph>{article.description}</Paragraph>
                  <View style={styles.articleMeta}>
                    <Chip icon="clock-outline" style={styles.readTimeChip}>
                      {article.readTime}
                    </Chip>
                  </View>
                </Card.Content>
              </Card>
            ))}
          </ScrollView>
        </>
      )}

      {activeTab === 'articles' && selectedArticle && (
        // Article Detail View
        <ScrollView style={styles.articleDetailContainer}>
          <TouchableOpacity 
            style={styles.backButton}
            onPress={() => setSelectedArticle(null)}
          >
            <Ionicons name="arrow-back" size={24} color="#003893" />
            <Text style={styles.backButtonText}>Back to Articles</Text>
          </TouchableOpacity>

          <Image 
            source={{ uri: selectedArticle.image }} 
            style={styles.articleDetailImage} 
          />
          
          <View style={styles.articleDetailContent}>
            <Title style={styles.articleDetailTitle}>{selectedArticle.title}</Title>
            <View style={styles.articleDetailMeta}>
              <Chip icon="clock-outline" style={styles.readTimeChip}>
                {selectedArticle.readTime}
              </Chip>
            </View>
            
            <Divider style={styles.divider} />
            
            <Text style={styles.articleDetailText}>{selectedArticle.content}</Text>
          </View>
        </ScrollView>
      )}

      {activeTab === 'videos' && (
        // Videos Tab
        <ScrollView style={styles.contentContainer}>
          {EDUCATION_CONTENT.videos.map((video) => (
            <Card 
              key={video.id} 
              style={styles.videoCard}
              onPress={() => openVideo(video.url)}
            >
              <Card.Cover source={{ uri: video.thumbnail }} style={styles.videoThumbnail} />
              <View style={styles.playButton}>
                <Ionicons name="play-circle" size={50} color="#fff" />
              </View>
              <Card.Content>
                <Title>{video.title}</Title>
                <View style={styles.videoMeta}>
                  <Ionicons name="time-outline" size={16} color="#666" />
                  <Text style={styles.videoDuration}>{video.duration}</Text>
                </View>
              </Card.Content>
            </Card>
          ))}
        </ScrollView>
      )}

      {activeTab === 'quizzes' && (
        // Quizzes Tab
        <ScrollView style={styles.contentContainer}>
          {EDUCATION_CONTENT.quizzes.map((quiz) => (
            <Card 
              key={quiz.id} 
              style={styles.quizCard}
            >
              <Card.Content>
                <Title>{quiz.title}</Title>
                <Paragraph>{quiz.description}</Paragraph>
                <View style={styles.quizMeta}>
                  <View style={styles.quizMetaItem}>
                    <Ionicons name="help-circle-outline" size={16} color="#003893" />
                    <Text style={styles.quizMetaText}>{quiz.questions} questions</Text>
                  </View>
                  <View style={styles.quizMetaItem}>
                    <Ionicons name="star-outline" size={16} color="#F7D116" />
                    <Text style={styles.quizMetaText}>{quiz.points} points</Text>
                  </View>
                </View>
              </Card.Content>
              <Card.Actions>
                <Button 
                  mode="contained" 
                  style={styles.startQuizButton}
                  // In a real app, this would navigate to the quiz
                >
                  Start Quiz
                </Button>
              </Card.Actions>
            </Card>
          ))}
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
  contentContainer: {
    flex: 1,
    padding: 16,
  },
  articleCard: {
    marginBottom: 16,
    elevation: 2,
  },
  articleImage: {
    height: 150,
  },
  articleMeta: {
    flexDirection: 'row',
    marginTop: 8,
  },
  readTimeChip: {
    backgroundColor: '#f0f0f0',
    height: 30,
  },
  articleDetailContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
  },
  backButtonText: {
    marginLeft: 8,
    fontSize: 16,
    color: '#003893',
  },
  articleDetailImage: {
    width: '100%',
    height: 200,
  },
  articleDetailContent: {
    padding: 16,
  },
  articleDetailTitle: {
    fontSize: 24,
    marginBottom: 8,
  },
  articleDetailMeta: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  divider: {
    marginVertical: 16,
  },
  articleDetailText: {
    fontSize: 16,
    lineHeight: 24,
  },
  videoCard: {
    marginBottom: 16,
    elevation: 2,
  },
  videoThumbnail: {
    height: 180,
  },
  playButton: {
    position: 'absolute',
    top: 65,
    left: 0,
    right: 0,
    alignItems: 'center',
  },
  videoMeta: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
  },
  videoDuration: {
    marginLeft: 5,
    color: '#666',
  },
  quizCard: {
    marginBottom: 16,
    elevation: 2,
  },
  quizMeta: {
    flexDirection: 'row',
    marginTop: 12,
  },
  quizMetaItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 16,
  },
  quizMetaText: {
    marginLeft: 5,
    color: '#666',
  },
  startQuizButton: {
    backgroundColor: '#003893',
    marginTop: 8,
  },
});

export default EducationScreen;