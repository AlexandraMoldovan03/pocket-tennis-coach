import Feather from '@expo/vector-icons/Feather';
import { StyleSheet, Text, View } from 'react-native';

import { colors } from '../theme/colors';
import { radius, spacing } from '../theme/spacing';
import { typography } from '../theme/typography';

// Empty state only: analysis history does not exist yet, so no data is shown.
export function ProgressCard() {
  return (
    <View style={styles.card}>
      <View style={styles.iconContainer}>
        <Feather name="bar-chart-2" size={22} color={colors.textTertiary} />
      </View>
      <View style={styles.text}>
        <Text style={styles.title}>No analyses yet</Text>
        <Text style={styles.message}>Your first forehand analysis will appear here.</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.lg,
    borderColor: colors.border,
    borderStyle: 'dashed',
    borderWidth: 1.5,
    borderRadius: radius.lg,
    padding: spacing.xl,
  },
  iconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 48,
    height: 48,
    backgroundColor: colors.surfaceRaised,
    borderRadius: radius.sm,
  },
  text: {
    flex: 1,
    gap: spacing.xs,
  },
  title: {
    ...typography.label,
    color: colors.textPrimary,
  },
  message: {
    ...typography.caption,
    color: colors.textTertiary,
  },
});
