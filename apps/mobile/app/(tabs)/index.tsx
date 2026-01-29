import React, { useState } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  ScrollView, 
  TouchableOpacity, 
  LayoutAnimation, 
  Platform, 
  UIManager,
  Dimensions
} from 'react-native';
import { Theme } from '@/constants/theme';
import { Ionicons } from '@expo/vector-icons';

// Enable LayoutAnimation for Android
if (Platform.OS === 'android' && UIManager.setLayoutAnimationEnabledExperimental) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

const STORIES = [
  {
    id: '1',
    title: "The Architecture of Silence",
    excerpt: "In a world that never stops talking, we explore the profound power of staying quiet...",
    body: "Silence is not merely the absence of sound, but the presence of time. In the ancient tea gardens of the north, we found that the most important conversations happened in the gaps between words. This narrative explores how we can reclaim our internal landscape from the digital noise of 2026.",
    author: "Sabbir Ahmed",
    readTime: "5 min",
    category: "PHILOSOPHY",
    likes: 1240,
    isHuman: true,
  },
  {
    id: '2',
    title: "Lessons from the Tea Stalls",
    excerpt: "Every morning, the steam rising from the cups tells a story of community...",
    body: "The plastic stools are uncomfortable, the sugar is too much, and the noise of the traffic is constant. Yet, the local 'Tong' is where the heart of the city beats. It is a place where a CEO and a rickshaw puller share the same bench and the same news.",
    author: "Tanvir Hosein",
    readTime: "3 min",
    category: "CULTURE",
    likes: 850,
    isHuman: true,
  },
  {
    id: '3',
    title: "The Last Analog Journal",
    excerpt: "There is a tactile honesty in a pen hitting a page that a keyboard cannot replicate...",
    body: "We tested fifty different types of ink and paper. The conclusion was simple: friction creates memory. When your hand resists the page, your brain records the thought with more permanent ink than any cloud database could ever hold.",
    author: "Nabila Khan",
    readTime: "7 min",
    category: "ESSAY",
    likes: 2100,
    isHuman: false, // This one might trigger an AI warning
  }
];

export default function HomeScreen() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleExpand = (id: string) => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      
      <View style={styles.masthead}>
        <Text style={styles.mastheadLabel}>THE MORNING EDITION</Text>
        <Text style={styles.mastheadDate}>{new Date().toLocaleDateString('en-GB')}</Text>
      </View>

      {STORIES.map((item) => {
        const isExpanded = expandedId === item.id;

        return (
          <View key={item.id} style={[styles.storyCard, isExpanded && styles.expandedCard]}>
            
            {/* Clickable Header Area */}
            <TouchableOpacity 
              activeOpacity={0.8} 
              onPress={() => toggleExpand(item.id)}
              style={styles.cardHeader}
            >
              <View style={styles.headerText}>
                <View style={styles.badgeRow}>
                  <Text style={styles.category}>{item.category}</Text>
                  {item.isHuman && (
                    <View style={styles.humanTag}>
                      <Ionicons name="finger-print" size={10} color={Theme.colors.accent} />
                      <Text style={styles.humanTagText}>HUMAN</Text>
                    </View>
                  )}
                </View>
                <Text style={styles.title}>{item.title}</Text>
                {!isExpanded && <Text style={styles.excerpt}>{item.excerpt}</Text>}
              </View>
              
              <Ionicons 
                name={isExpanded ? "chevron-up" : "chevron-forward"} 
                size={16} 
                color={Theme.colors.inkSubtle} 
                style={{ marginTop: 10 }}
              />
            </TouchableOpacity>

            {/* Expanded Content View */}
            {isExpanded && (
              <View style={styles.bodyContent}>
                <View style={styles.divider} />
                <Text style={styles.fullText}>{item.body}</Text>
                
                <View style={styles.authorRow}>
                  <Text style={styles.authorName}>By {item.author}</Text>
                  <Text style={styles.metaInfo}>{item.readTime} reading</Text>
                </View>

                {/* Interaction Footer */}
                <View style={styles.footer}>
                  <View style={styles.actionsLeft}>
                    <TouchableOpacity style={styles.interactionBtn}>
                      <Ionicons name="heart-outline" size={18} color={Theme.colors.ink} />
                      <Text style={styles.interactionText}>{item.likes}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.interactionBtn}>
                      <Ionicons name="chatbubble-outline" size={16} color={Theme.colors.ink} />
                      <Text style={styles.interactionText}>Discuss</Text>
                    </TouchableOpacity>
                  </View>
                  
                  <TouchableOpacity style={styles.reportBtn}>
                    <Ionicons name="alert-circle-outline" size={14} color={Theme.colors.inkSubtle} />
                    <Text style={styles.reportText}>REPORT</Text>
                  </TouchableOpacity>
                </View>
              </View>
            )}
          </View>
        );
      })}

      <View style={{ height: 120 }} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Theme.colors.background,
    paddingHorizontal: Theme.spacing.gutter,
  },
  masthead: {
    paddingVertical: 25,
    borderBottomWidth: 1,
    borderBottomColor: Theme.colors.ink,
    marginBottom: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'baseline',
  },
  mastheadLabel: {
    fontFamily: Theme.fonts.mono,
    fontSize: 12,
    letterSpacing: 2,
    fontWeight: '700',
  },
  mastheadDate: {
    fontFamily: Theme.fonts.mono,
    fontSize: 10,
    color: Theme.colors.inkSubtle,
  },
  storyCard: {
    paddingVertical: 25,
    borderBottomWidth: 0.5,
    borderBottomColor: Theme.colors.border,
  },
  expandedCard: {
    backgroundColor: Theme.colors.surface,
    paddingHorizontal: 15,
    marginHorizontal: -15,
    borderBottomWidth: 0,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  headerText: {
    flex: 1,
    paddingRight: 10,
  },
  badgeRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    marginBottom: 8,
  },
  category: {
    fontFamily: Theme.fonts.mono,
    fontSize: 9,
    color: Theme.colors.accent,
    letterSpacing: 1,
  },
  humanTag: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    borderWidth: 0.5,
    borderColor: Theme.colors.accent,
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 2,
  },
  humanTagText: {
    fontFamily: Theme.fonts.mono,
    fontSize: 7,
    color: Theme.colors.accent,
  },
  title: {
    fontFamily: Theme.fonts.title,
    fontSize: 24,
    lineHeight: 28,
    color: Theme.colors.ink,
  },
  excerpt: {
    fontFamily: Theme.fonts.body,
    fontSize: 15,
    color: Theme.colors.inkFaded,
    marginTop: 8,
    lineHeight: 22,
  },
  bodyContent: {
    marginTop: 15,
  },
  divider: {
    height: 1,
    backgroundColor: Theme.colors.border,
    width: 40,
    marginVertical: 15,
  },
  fullText: {
    fontFamily: Theme.fonts.body,
    fontSize: 17,
    lineHeight: 28,
    color: Theme.colors.ink,
  },
  authorRow: {
    marginTop: 20,
    paddingTop: 15,
    borderTopWidth: 0.5,
    borderTopColor: Theme.colors.border,
  },
  authorName: {
    fontFamily: Theme.fonts.bodyBold,
    fontSize: 14,
  },
  metaInfo: {
    fontFamily: Theme.fonts.mono,
    fontSize: 10,
    color: Theme.colors.inkSubtle,
    marginTop: 4,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 25,
  },
  actionsLeft: {
    flexDirection: 'row',
    gap: 20,
  },
  interactionBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  interactionText: {
    fontFamily: Theme.fonts.mono,
    fontSize: 11,
  },
  reportBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    opacity: 0.5,
  },
  reportText: {
    fontFamily: Theme.fonts.mono,
    fontSize: 9,
  }
});