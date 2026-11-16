import { Tabs, TabList, TabSlot, TabTrigger } from 'expo-router/ui';
import { StyleSheet, Text, useColorScheme } from 'react-native';

import { Colors, MaxContentWidth, Spacing } from '@/constants/theme';

export default function AppTabs() {
  const scheme = useColorScheme();
  const colors = Colors[scheme === 'dark' ? 'dark' : 'light'];

  return (
    <Tabs>
      <TabSlot style={{ height: '100%' }} />
      <TabList
        style={[
          styles.tabListContainer,
          { backgroundColor: colors.background, borderColor: colors.backgroundElement },
        ]}>
        <TabTrigger name="home" href="/" style={styles.tabTrigger}>
          <Text style={styles.tabLabel}>Home</Text>
        </TabTrigger>
        <TabTrigger name="announcements" href="/announcements" style={styles.tabTrigger}>
          <Text style={styles.tabLabel}>Announcements</Text>
        </TabTrigger>
        <TabTrigger name="explore" href="/explore" style={styles.tabTrigger}>
          <Text style={styles.tabLabel}>Explore</Text>
        </TabTrigger>
      </TabList>
    </Tabs>
  );
}

const styles = StyleSheet.create({
  tabListContainer: {
    position: 'absolute',
    width: '100%',
    padding: Spacing.three,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    bottom: 0,
  },
  tabTrigger: {
    paddingVertical: Spacing.two,
    paddingHorizontal: Spacing.three,
    borderRadius: Spacing.three,
    marginHorizontal: Spacing.one,
    maxWidth: MaxContentWidth,
  },
  tabLabel: {
    color: '#10233D',
  },
});
