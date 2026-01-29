import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Switch } from 'react-native';
import { Theme } from '@/constants/theme';
import { Ionicons } from '@expo/vector-icons';

export default function Settings() {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      
      {/* Profile Section */}
      <View style={styles.profileHeader}>
        <View style={styles.avatarLarge}>
          <Text style={styles.avatarInitial}>S</Text>
        </View>
        <Text style={styles.userName}>Sabbir Ahmed</Text>
        <Text style={styles.userBio}>Storyteller from Sylhet, Bangladesh</Text>
        <TouchableOpacity style={styles.editButton}>
          <Text style={styles.editButtonText}>Edit Portfolio</Text>
        </TouchableOpacity>
      </View>

      {/* Settings Groups */}
      <SettingGroup title="Account">
        <SettingItem icon="person-outline" label="Personal Information" />
        <SettingItem icon="notifications-outline" label="Reading Reminders" />
        <SettingItem icon="shield-checkmark-outline" label="Privacy & Security" />
      </SettingGroup>

      <SettingGroup title="Preferences">
        <SettingItem 
          icon="book-outline" 
          label="Paper Texture" 
          hasSwitch 
          switchValue={true} 
        />
        <SettingItem icon="text-outline" label="Typography Size" value="Standard" />
      </SettingGroup>

      <SettingGroup title="The Project">
        <SettingItem icon="heart-outline" label="Our Mission" />
        <SettingItem icon="code-outline" label="Monorepo Core v1.0" />
      </SettingGroup>

      {/* Sign Out */}
      <TouchableOpacity style={styles.signOutBtn}>
        <Text style={styles.signOutText}>Sign Out</Text>
      </TouchableOpacity>

      <Text style={styles.footerVersion}>HUMANSTORIES.APP / 2026</Text>
      
      <View style={{ height: 100 }} />
    </ScrollView>
  );
}

// --- Sub-Components ---

function SettingGroup({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <View style={styles.group}>
      <Text style={styles.groupTitle}>{title}</Text>
      <View style={styles.groupContent}>{children}</View>
    </View>
  );
}

function SettingItem({ icon, label, value, hasSwitch, switchValue }: any) {
  return (
    <TouchableOpacity style={styles.item} activeOpacity={0.6}>
      <View style={styles.itemLeft}>
        <Ionicons name={icon} size={20} color={Theme.colors.inkFaded} />
        <Text style={styles.itemLabel}>{label}</Text>
      </View>
      <View style={styles.itemRight}>
        {value && <Text style={styles.itemValue}>{value}</Text>}
        {hasSwitch ? (
          <Switch 
            value={switchValue} 
            trackColor={{ false: Theme.colors.border, true: Theme.colors.accent }}
            thumbColor="#FFF"
          />
        ) : (
          <Ionicons name="chevron-forward" size={16} color={Theme.colors.inkSubtle} />
        )}
      </View>
    </TouchableOpacity>
  );
}

// --- Styles ---

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Theme.colors.background,
    paddingHorizontal: Theme.spacing.gutter,
  },
  profileHeader: {
    alignItems: 'center',
    paddingVertical: 40,
  },
  avatarLarge: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: Theme.colors.accent,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
  },
  avatarInitial: {
    fontFamily: Theme.fonts.title,
    fontSize: 32,
    color: Theme.colors.background,
  },
  userName: {
    fontFamily: Theme.fonts.title,
    fontSize: 24,
    color: Theme.colors.ink,
  },
  userBio: {
    fontFamily: Theme.fonts.body,
    fontSize: 14,
    color: Theme.colors.inkFaded,
    marginTop: 4,
  },
  editButton: {
    marginTop: 15,
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: Theme.colors.border,
  },
  editButtonText: {
    fontFamily: Theme.fonts.mono,
    fontSize: 10,
    letterSpacing: 1,
    textTransform: 'uppercase',
  },
  group: {
    marginTop: 30,
  },
  groupTitle: {
    fontFamily: Theme.fonts.mono,
    fontSize: 10,
    letterSpacing: 2,
    color: Theme.colors.accent,
    textTransform: 'uppercase',
    marginBottom: 10,
    paddingLeft: 4,
  },
  groupContent: {
    backgroundColor: Theme.colors.tabBarBg,
    borderRadius: 12,
    borderWidth: 0.5,
    borderColor: Theme.colors.border,
    overflow: 'hidden',
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    borderBottomWidth: 0.5,
    borderBottomColor: Theme.colors.border,
  },
  itemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  itemLabel: {
    fontFamily: Theme.fonts.body,
    fontSize: 16,
    color: Theme.colors.ink,
  },
  itemRight: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  itemValue: {
    fontFamily: Theme.fonts.mono,
    fontSize: 11,
    color: Theme.colors.inkSubtle,
  },
  signOutBtn: {
    marginTop: 40,
    alignItems: 'center',
    padding: 15,
  },
  signOutText: {
    fontFamily: Theme.fonts.mono,
    fontSize: 12,
    color: Theme.colors.destructive,
    letterSpacing: 1,
    textTransform: 'uppercase',
  },
  footerVersion: {
    textAlign: 'center',
    fontFamily: Theme.fonts.mono,
    fontSize: 9,
    color: Theme.colors.inkSubtle,
    marginTop: 20,
    letterSpacing: 2,
  }
});