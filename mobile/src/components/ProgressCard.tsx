import { StyleSheet, Text, View } from 'react-native';

import { colors } from '../theme/colors';

export function ProgressCard() {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>Your Progress</Text>
      <Text style={styles.message}>
        No analyses yet. Your completed stroke analyses will appear here.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.surface,
    borderColor: colors.border,
    borderWidth: 1,
    borderRadius: 16,
    padding: 20,
  },
  title: {
    color: colors.textPrimary,
    fontSize: 17,
    fontWeight: '700',
  },
  message: {
    color: colors.textSecondary,
    fontSize: 15,
    lineHeight: 22,
    marginTop: 8,
  },
});
