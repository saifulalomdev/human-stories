import { View, Text, StyleSheet, TouchableOpacity, Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Theme } from '@/constants/theme';

export default function Navbar() {
  return (
    <View style={styles.safeArea}>
      <View style={styles.navBar}>
        
        {/* Site Logo: High-End Serif */}
        <TouchableOpacity activeOpacity={0.8} style={styles.logoContainer}>
          <Text style={styles.logoText}>
            Human<Text style={{ color: Theme.colors.accent }}>Stories</Text>
          </Text>
        </TouchableOpacity>

        {/* Right Actions */}
        <View style={styles.actions}>
          <TouchableOpacity style={styles.iconButton}>
            <Ionicons name="search-outline" size={22} color={Theme.colors.ink} />
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.profileButton}>
            {/* Senior Tip: Using a subtle border instead of a shadow for the profile 
               makes it feel like an editorial portrait.
            */}
            <View style={styles.avatarPlaceholder}>
              <Ionicons name="person-outline" size={18} color={Theme.colors.ink} />
            </View>
          </TouchableOpacity>
        </View>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: Theme.colors.background,
  },
  navBar: {
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: Theme.spacing.gutter,
    borderBottomWidth: 0.5,
    borderBottomColor: Theme.colors.border,
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logoText: {
    fontFamily: Theme.fonts.title,
    fontSize: 22,
    fontWeight: '700',
    color: Theme.colors.ink,
    letterSpacing: -0.5,
  },
  actions: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15,
  },
  iconButton: {
    padding: 5,
  },
  avatarPlaceholder: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: Theme.colors.surface,
    borderWidth: 1,
    borderColor: Theme.colors.border,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  profileButton: {
    marginLeft: 5,
  }
});