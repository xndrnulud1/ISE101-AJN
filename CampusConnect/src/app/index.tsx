import { ScrollView, StyleSheet, Text, View } from 'react-native';

import AnnouncementPanel from '@/components/AnnouncementPanel';

export default function HomeScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View>
        <Text style={styles.title}>Campus Connect</Text>
        <Text style={styles.subtitle}>One campus. Connected students.</Text>
      </View>
      <AnnouncementPanel />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 24,
    backgroundColor: '#F4F7FB',
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 15,
  },
});