import { ComponentProps } from 'react';
import { Ionicons } from '@expo/vector-icons';

// 1. Extract the exact allowed names from the Ionicons component itself
type IoniconsName = ComponentProps<typeof Ionicons>['name'];

export type TabKey = 'index' | 'editor' | 'settings';

type TabItem = {
  name: string;
  icon: IoniconsName;        // Precise union type
  activeIcon: IoniconsName;  // Precise union type
};

export const TabItems: Record<TabKey, TabItem> = {
  index: {
    name: "Home",
    icon: "reader-outline",
    activeIcon: "reader",
  },
  editor: {
    name: "Write",
    icon: "create-outline",
    activeIcon: "create",
  },
  settings: {
    name: "Settings",
    icon: "settings-outline",
    activeIcon: "settings",
  },
};