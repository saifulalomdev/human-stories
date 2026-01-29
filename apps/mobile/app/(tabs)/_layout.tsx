import { TabItems, TabKey } from '@/constants/tabs';
import { Theme } from '@/constants/theme';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { Tabs } from 'expo-router';
import { StyleSheet, Text, TouchableOpacity, View, Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Navbar from '@/components/layout/nav-bar';

export default function TabLayout() {
  return (
   <>
      <Navbar /> {/* <--- Place it here, above the Tabs */}
      <Tabs 
        tabBar={(props) => <CustomTabs {...props} />} 
        screenOptions={{ headerShown: false }} 
      />
    </>
  );
}

function CustomTabs({ state, navigation }: BottomTabBarProps) {
  // Logic to hide tab bar on certain screens (optional)
  const focusedRoute = state.routes[state.index].name;
  if (focusedRoute === 'editor_modal') return null; // Example hide

  return (
    <View style={styles.tabBarContainer}>
      <View style={styles.tabBar}>
        {state.routes.map((route, idx) => (
          <Tab
            key={route.name}
            name={route.name as TabKey}
            isFocused={idx === state.index}
            onPress={() => navigation.navigate(route.name)}
          />
        ))}
      </View>
    </View>
  );
}

function Tab({ name, onPress, isFocused }: { name: TabKey; isFocused?: boolean; onPress?: () => void }) {
  const item = TabItems[name];
  
  // High-end Palette mapping
  const activeColor = Theme.colors.accent; // Oxblood Red
  const inactiveColor = Theme.colors.inkSubtle; // Muted Clay

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={onPress}
      style={styles.tab}
    >
      {/* Top Indicator: A sharp hairline when focused */}
      <View style={[styles.indicator, { backgroundColor: isFocused ? activeColor : 'transparent' }]} />
      
      <Ionicons 
        name={isFocused ? item.activeIcon : item.icon} 
        size={22} 
        color={isFocused ? activeColor : inactiveColor} 
      />
      
      <Text style={[styles.tabLabel, { color: isFocused ? activeColor : inactiveColor }]}>
        {item.name}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  tabBarContainer: {
    backgroundColor: Theme.colors.background,
  },
  tabBar: {
    height: Platform.OS === 'ios' ? 88 : 68,
    flexDirection: "row",
    backgroundColor: Theme.colors.tabBarBg, // Pure White
    borderTopWidth: 0.5,
    borderTopColor: Theme.colors.border,
    justifyContent: "space-around",
    alignItems: "center",
    paddingBottom: Platform.OS === 'ios' ? 25 : 0,
    // Softest shadow possible to avoid 'fleshy' look
    shadowColor: "#000",
    shadowOffset: { width: 0, height: -1 },
    shadowOpacity: 0.03,
    shadowRadius: 15,
    elevation: 10,
  },
  tab: {
    flex: 1,
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 10,
  },
  indicator: {
    width: 20,
    height: 2,
    position: 'absolute',
    top: 0,
    borderBottomLeftRadius: 2,
    borderBottomRightRadius: 2,
  },
  tabLabel: {
    fontFamily: Theme.fonts.mono,
    fontSize: 9, // Small and precise
    letterSpacing: 1.2,
    textTransform: 'uppercase',
    marginTop: 6,
  }
});