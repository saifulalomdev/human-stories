import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export const StoryCard = ({ story, onPress }: { story: any, onPress: () => void }) => {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress} activeOpacity={0.9}>
      {/* <View style={styles.header}>
        <View style={styles.avatarPlaceholder} />
        <Text style={styles.authorName}>@{story.author?.username || 'user'}</Text>
      </View> */}
      
      <Text style={styles.content} numberOfLines={4}>
        {story.content}
      </Text>
      
      <Text style={styles.date}>
        {new Date(story.createdAt).toLocaleDateString()}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#1e293b',
    borderRadius: 16,
    padding: 16,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#334155',
  },
  authorName: { color: '#94a3b8', fontWeight: '600', fontSize: 14 },
  content: { color: '#f8fafc', fontSize: 16, lineHeight: 24, marginVertical: 12 },
  date: { color: '#64748b', fontSize: 12 },
});