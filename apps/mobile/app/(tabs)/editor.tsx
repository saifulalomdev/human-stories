import React, { useState } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  TextInput, 
  KeyboardAvoidingView, 
  Platform, 
  ScrollView,
  TouchableOpacity
} from 'react-native';
import { Theme } from '@/constants/theme';

export default function Editor() {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  // Calculate word count for the "Senior" status bar
  const wordCount = body.trim() ? body.trim().split(/\s+/).length : 0;

  return (
    <KeyboardAvoidingView 
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'} 
      style={styles.container}
    >
      {/* Editorial Header - Only "Publish" is visible */}
      <View style={styles.editorHeader}>
        <TouchableOpacity>
          <Text style={styles.cancelText}>Save Draft</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.publishButton}>
          <Text style={styles.publishText}>PUBLISH</Text>
        </TouchableOpacity>
      </View>

      <ScrollView 
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Title Input: Massive and Serif */}
        <TextInput
          style={styles.titleInput}
          placeholder="A Title ..."
          placeholderTextColor={Theme.colors.inkSubtle}
          multiline
          scrollEnabled={false}
          value={title}
          onChangeText={setTitle}
          selectionColor={Theme.colors.accent} // Oxblood Cursor
        />

        {/* The Body: The "Sanctuary" Canvas */}
        <TextInput
          style={styles.bodyInput}
          placeholder="Begin your narrative..."
          placeholderTextColor={Theme.colors.inkSubtle}
          multiline
          scrollEnabled={false} // Let the ScrollView handle it
          value={body}
          onChangeText={setBody}
          selectionColor={Theme.colors.accent}
          textAlignVertical="top"
        />

        {/* Aesthetic Buffer */}
        <View style={{ height: 200 }} />
      </ScrollView>

      {/* Persistent Technical Meta Bar */}
      <View style={styles.metaBar}>
        <Text style={styles.metaLabel}>TYPE: MANUSCRIPT</Text>
        <Text style={styles.wordCount}>{wordCount} WORDS</Text>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Theme.colors.background, // Archival Paper
  },
  editorHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: Theme.spacing.gutter,
    paddingTop: Platform.OS === 'ios' ? 60 : 20,
    paddingBottom: 10,
  },
  cancelText: {
    fontFamily: Theme.fonts.mono,
    fontSize: 10,
    color: Theme.colors.inkFaded,
    letterSpacing: 1,
  },
  publishText: {
    fontFamily: Theme.fonts.mono,
    fontSize: 11,
    fontWeight: '700',
    color: Theme.colors.accent,
    letterSpacing: 2,
  },
  publishButton: {
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderWidth: 0.5,
    borderColor: Theme.colors.accent,
  },
  scrollContent: {
    paddingHorizontal: 30, // Wide margins for editorial feel
    paddingTop: 20,
  },
  titleInput: {
    fontFamily: Theme.fonts.title,
    fontSize: 34,
    lineHeight: 40,
    color: Theme.colors.ink,
    marginBottom: 20,
    padding: 0,
  },
  bodyInput: {
    fontFamily: Theme.fonts.body,
    fontSize: 19,
    lineHeight: 32, // Breathable leading
    color: Theme.colors.ink,
    padding: 0,
    minHeight: 400,
  },
  metaBar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 40,
    backgroundColor: 'rgba(253, 252, 251, 0.95)', // Background-matching glass
    borderTopWidth: 0.5,
    borderTopColor: Theme.colors.border,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: Theme.spacing.gutter,
  },
  metaLabel: {
    fontFamily: Theme.fonts.mono,
    fontSize: 8,
    color: Theme.colors.inkSubtle,
    letterSpacing: 2,
  },
  wordCount: {
    fontFamily: Theme.fonts.mono,
    fontSize: 9,
    color: Theme.colors.inkFaded,
    letterSpacing: 1,
  },
});