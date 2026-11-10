import { StyleSheet, View } from 'react-native';

import AnnouncementPanel from '@/components/AnnouncementPanel';
import SectionHeading from '@/components/SectionHeading';

export default function HomeScreen() {
  return (
    <View style={styles.screen}>
      <SectionHeading
        title="Campus Connect"
        subtitle="One campus. Connected students."
      />
      <AnnouncementPanel />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#F4F7FB',
    paddingHorizontal: 20,
    paddingTop: 32,
    paddingBottom: 24,
  },
});