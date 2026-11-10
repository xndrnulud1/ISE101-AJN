import { StyleSheet, Text, View } from 'react-native';

type SectionHeadingProps = {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
};

export default function SectionHeading({
  title,
  subtitle,
  align = 'left',
}: SectionHeadingProps) {
  return (
    <View
      style={[
        styles.section,
        align === 'center' && styles.centeredSection,
      ]}
    >
      <Text style={[styles.title, align === 'center' && styles.centeredText]}>
        {title}
      </Text>
      {subtitle ? (
        <Text
          style={[
            styles.subtitle,
            align === 'center' && styles.centeredText,
          ]}
        >
          {subtitle}
        </Text>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  section: {
    width: '100%',
    maxWidth: 640,
    paddingVertical: 12,
    paddingHorizontal: 4,
    gap: 6,
  },
  centeredSection: {
    alignItems: 'center',
  },
  title: {
    fontSize: 26,
    fontWeight: '700',
    color: '#10233D',
    lineHeight: 32,
  },
  subtitle: {
    fontSize: 15,
    color: '#526070',
    lineHeight: 22,
  },
  centeredText: {
    textAlign: 'center',
  },
});
