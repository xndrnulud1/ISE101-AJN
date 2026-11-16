import { router } from 'expo-router';
import { StyleSheet, View } from 'react-native';

import AnnouncementPanel from '@/components/AnnouncementPanel';

export default function AnnouncementsScreen() {
  return (
    <View style={styles.screen}>
      <AnnouncementPanel
        onSelectAnnouncement={announcement => {
          router.push(`/announcements/${announcement.id}`);
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#F4F7FB',
    paddingHorizontal: 20,
    paddingVertical: 24,
  },
});
