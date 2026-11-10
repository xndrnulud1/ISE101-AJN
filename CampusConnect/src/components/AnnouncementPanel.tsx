import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { getUnreadAnnouncements } from '../../services/announcementUtils';
import type { Announcement } from '../../types/announcement';
import AnnouncementCard from './AnnouncementCard';

const sampleAnnouncements: Announcement[] = [
  {
    id: 'ANN-001',
    title: 'Enrollment Reminder',
    category: 'Academic',
    read: false,
  },
  {
    id: 'ANN-002',
    title: 'Sports Festival Announcement',
    category: 'Events',
    read: false,
  },
  {
    id: 'ANN-003',
    title: 'Campus Clean-up Drive',
    category: 'Notice',
    read: true,
  },
];

export default function AnnouncementPanel() {
  const [announcements, setAnnouncements] = useState(sampleAnnouncements);
  const unreadCount = getUnreadAnnouncements(announcements).length;

  const handleToggleRead = (id: string) => {
    setAnnouncements(currentAnnouncements =>
      currentAnnouncements.map(announcement =>
        announcement.id === id
          ? { ...announcement, read: !announcement.read }
          : announcement
      )
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Campus Announcements</Text>
      <Text style={styles.summary}>
        Total announcements: {announcements.length}
      </Text>
      <Text style={styles.counter}>
        Unread announcements: {unreadCount}
      </Text>
      {announcements.map(announcement => (
        <AnnouncementCard
          key={announcement.id}
          title={announcement.title}
          category={announcement.category}
          read={announcement.read}
          onMarkRead={() => handleToggleRead(announcement.id)}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginTop: 24,
  },
  heading: {
    fontSize: 21,
    fontWeight: '700',
    marginBottom: 10,
  },
  summary: {
    fontSize: 15,
    marginBottom: 6,
  },
  counter: {
    fontSize: 15,
    fontWeight: '600',
    marginBottom: 4,
    color: '#2563EB',
  },
});
