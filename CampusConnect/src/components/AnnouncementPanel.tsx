import { useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';

import { getUnreadAnnouncements } from '../../services/announcementUtils';
import type { Announcement } from '../../types/announcement';
import AnnouncementCard from './AnnouncementCard';
import SectionHeading from './SectionHeading';

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
      <FlatList
        data={announcements}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <SectionHeading
            title="Campus Announcements"
            subtitle={`${announcements.length} total • ${unreadCount} unread`}
          />
        }
        renderItem={({ item }) => (
          <AnnouncementCard
            title={item.title}
            category={item.category}
            read={item.read}
            onMarkRead={() => handleToggleRead(item.id)}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    maxWidth: 640,
    alignSelf: 'center',
    marginTop: 12,
  },
  listContent: {
    paddingBottom: 24,
    gap: 8,
  },
});
