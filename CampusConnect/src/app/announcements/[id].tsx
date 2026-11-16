import { Link, useLocalSearchParams } from 'expo-router';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import { sampleAnnouncements } from '@/components/AnnouncementPanel';

export default function AnnouncementDetailScreen() {
  const { id } = useLocalSearchParams<{ id?: string | string[] }>();
  const normalizedId = Array.isArray(id) ? id[0] : id;
  const announcement = sampleAnnouncements.find(item => item.id === normalizedId);

  if (!announcement) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Announcement Not Found</Text>
        <Text style={styles.message}>
          We could not find the requested announcement. Please choose a valid item from the list.
        </Text>
        <Link href="/announcements" asChild>
          <Pressable style={styles.button}>
            <Text style={styles.buttonText}>Back to announcements</Text>
          </Pressable>
        </Link>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Announcement</Text>
      <Text style={styles.title}>{announcement.title}</Text>

      <View style={styles.metaBox}>
        <Text style={styles.metaLabel}>Category</Text>
        <Text style={styles.metaValue}>{announcement.category}</Text>
      </View>

      <View style={styles.metaBox}>
        <Text style={styles.metaLabel}>Status</Text>
        <Text style={styles.metaValue}>{announcement.read ? 'Read' : 'Unread'}</Text>
      </View>

      <Text style={styles.message}>
        This announcement was opened from route ID: {announcement.id}.
      </Text>

      <Link href="/announcements" asChild>
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>Back to announcements</Text>
        </Pressable>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F7FB',
    paddingHorizontal: 24,
    paddingVertical: 32,
    justifyContent: 'center',
  },
  label: {
    color: '#4B5563',
    fontSize: 12,
    fontWeight: '700',
    letterSpacing: 0.8,
    textTransform: 'uppercase',
    marginBottom: 8,
  },
  title: {
    color: '#10233D',
    fontSize: 28,
    fontWeight: '800',
    lineHeight: 36,
    marginBottom: 20,
  },
  metaBox: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#DCE3EC',
  },
  metaLabel: {
    color: '#4B5563',
    fontSize: 12,
    fontWeight: '700',
    letterSpacing: 0.6,
    textTransform: 'uppercase',
    marginBottom: 4,
  },
  metaValue: {
    color: '#10233D',
    fontSize: 18,
    fontWeight: '600',
  },
  message: {
    color: '#334155',
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#174A7E',
    borderRadius: 10,
    paddingVertical: 12,
    paddingHorizontal: 18,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '700',
  },
});
