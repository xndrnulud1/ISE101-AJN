import { StyleSheet, Text, View } from 'react-native';

import ActionButton from './ActionButton';

type AnnouncementCardProps = {
  title: string;
  category: string;
  read: boolean;
  onMarkRead: () => void;
};

export default function AnnouncementCard({
  title,
  category,
  read,
  onMarkRead,
}: AnnouncementCardProps) {
  return (
    <View style={styles.card}>
      <View style={styles.headerRow}>
        <Text style={styles.title}>{title}</Text>
        <View style={[styles.badge, read ? styles.readBadge : styles.unreadBadge]}>
          <Text style={styles.badgeText}>{read ? 'Read' : 'New'}</Text>
        </View>
      </View>

      <Text style={styles.category}>Category: {category}</Text>
      <Text style={styles.status}>Status: {read ? 'Read' : 'Unread'}</Text>

      <ActionButton
        label={read ? 'Mark as Unread' : 'Mark as Read'}
        onPress={onMarkRead}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFFFFF',
    padding: 18,
    marginVertical: 8,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: '#DCE3EC',
    shadowColor: '#0F172A',
    shadowOpacity: 0.04,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
    gap: 10,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    gap: 12,
  },
  title: {
    flex: 1,
    fontSize: 18,
    fontWeight: '700',
    color: '#10233D',
    lineHeight: 24,
  },
  badge: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 999,
    justifyContent: 'center',
    alignItems: 'center',
  },
  unreadBadge: {
    backgroundColor: '#E0F2FE',
  },
  readBadge: {
    backgroundColor: '#DCFCE7',
  },
  badgeText: {
    color: '#0F172A',
    fontSize: 11,
    fontWeight: '700',
    textTransform: 'uppercase',
    letterSpacing: 0.4,
  },
  category: {
    fontSize: 14,
    color: '#4B5563',
    lineHeight: 20,
  },
  status: {
    fontSize: 14,
    color: '#10233D',
    lineHeight: 20,
    fontWeight: '600',
  },
});
