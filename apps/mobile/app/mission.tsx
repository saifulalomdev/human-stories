import React from 'react';
import { View, Text, StyleSheet, ScrollView, Dimensions } from 'react-native';
import { Theme } from '@/constants/theme';

const { width } = Dimensions.get('window');

export default function MissionScreen() {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      
      {/* The Header / Masthead */}
      <View style={styles.header}>
        <Text style={styles.label}>The Manifesto</Text>
        <Text style={styles.title}>Reclaiming the Human Narrative</Text>
      </View>

      {/* The Body - Editorial Layout */}
      <View style={styles.content}>
        <Text style={styles.dropCap}>
          <Text style={styles.accentText}>W</Text>e believe the internet has become too loud. 
          The digital world is currently designed to harvest attention, not to foster understanding.
        </Text>

        <Text style={styles.paragraph}>
          HumanStories was built as a sanctuary. A place where the "fleshy" gradients, 
          intrusive notifications, and algorithmic noise are replaced by the quiet 
          honesty of digital paper.
        </Text>

        <View style={styles.quoteBlock}>
          <Text style={styles.quoteText}>
            "Stories are the only way we can truly see through the eyes of another."
          </Text>
        </View>

        <Text style={styles.paragraph}>
          Our mission is simple: To provide a minimalist, high-performance space 
          for raw, unedited human thought. No likes, no view counts, no dopamine loops. 
          Just you, and the story.
        </Text>

        {/* The Three Pillars */}
        <View style={styles.pillars}>
          <Pillar num="01" title="Privacy by Design" desc="Your data is not a product. Your thoughts are your own." />
          <Pillar num="02" title="Editorial Purity" desc="We value the written word over the digital gimmick." />
          <Pillar num="03" title="Open Engineering" desc="Built with a robust monorepo for the future of the web." />
        </View>

        {/* The Signature */}
        <View style={styles.footer}>
          <View style={styles.divider} />
          <Text style={styles.signature}>The HumanStories Team</Text>
          <Text style={styles.locationText}>SYLHET, BANGLADESH / 2026</Text>
        </View>
      </View>

      <View style={{ height: 100 }} />
    </ScrollView>
  );
}

// Pillar Sub-component
function Pillar({ num, title, desc }: { num: string; title: string; desc: string }) {
  return (
    <View style={styles.pillarItem}>
      <Text style={styles.pillarNum}>{num}</Text>
      <View>
        <Text style={styles.pillarTitle}>{title}</Text>
        <Text style={styles.pillarDesc}>{desc}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Theme.colors.background,
  },
  header: {
    paddingHorizontal: Theme.spacing.gutter,
    paddingTop: 40,
    paddingBottom: 20,
  },
  label: {
    fontFamily: Theme.fonts.mono,
    fontSize: 10,
    letterSpacing: 3,
    color: Theme.colors.accent,
    textTransform: 'uppercase',
    marginBottom: 10,
  },
  title: {
    fontFamily: Theme.fonts.title,
    fontSize: 42,
    lineHeight: 48,
    color: Theme.colors.ink,
    letterSpacing: -1,
  },
  content: {
    paddingHorizontal: Theme.spacing.gutter,
  },
  dropCap: {
    fontFamily: Theme.fonts.body,
    fontSize: 20,
    lineHeight: 30,
    color: Theme.colors.ink,
    marginBottom: 20,
  },
  accentText: {
    fontFamily: Theme.fonts.title,
    fontSize: 50,
    color: Theme.colors.accent,
  },
  paragraph: {
    fontFamily: Theme.fonts.body,
    fontSize: 18,
    lineHeight: 28,
    color: Theme.colors.inkFaded,
    marginBottom: 25,
  },
  quoteBlock: {
    marginVertical: 30,
    paddingLeft: 20,
    borderLeftWidth: 2,
    borderLeftColor: Theme.colors.accentGold,
  },
  quoteText: {
    fontFamily: Theme.fonts.body,
    fontStyle: 'italic',
    fontSize: 22,
    lineHeight: 32,
    color: Theme.colors.ink,
  },
  pillars: {
    marginTop: 40,
    gap: 30,
  },
  pillarItem: {
    flexDirection: 'row',
    gap: 20,
  },
  pillarNum: {
    fontFamily: Theme.fonts.mono,
    fontSize: 12,
    color: Theme.colors.accent,
    marginTop: 4,
  },
  pillarTitle: {
    fontFamily: Theme.fonts.title,
    fontSize: 20,
    color: Theme.colors.ink,
    marginBottom: 4,
  },
  pillarDesc: {
    fontFamily: Theme.fonts.body,
    fontSize: 15,
    color: Theme.colors.inkFaded,
    width: width * 0.7,
  },
  footer: {
    marginTop: 80,
    alignItems: 'center',
  },
  divider: {
    width: 40,
    height: 1,
    backgroundColor: Theme.colors.border,
    marginBottom: 20,
  },
  signature: {
    fontFamily: Theme.fonts.title,
    fontStyle: 'italic',
    fontSize: 20,
    color: Theme.colors.ink,
  },
  locationText: {
    fontFamily: Theme.fonts.mono,
    fontSize: 9,
    letterSpacing: 2,
    color: Theme.colors.inkSubtle,
    marginTop: 10,
  }
});