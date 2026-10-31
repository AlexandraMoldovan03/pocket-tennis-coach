import { StyleSheet, Text, View } from 'react-native';
import Svg, { Circle, Path } from 'react-native-svg';

import { colors } from '../theme/colors';
import { radius, spacing } from '../theme/spacing';
import { typography } from '../theme/typography';

export function AppHeader() {
  return (
    <View style={styles.header}>
      <View style={styles.brand}>
        <Svg width={28} height={28} viewBox="0 0 28 28" accessibilityElementsHidden>
          <Circle cx={14} cy={14} r={13} fill={colors.accent} />
          <Path
            d="M5 5.5 C10 10, 10 18, 5 22.5 M23 5.5 C18 10, 18 18, 23 22.5"
            stroke={colors.onAccent}
            strokeWidth={1.8}
            strokeLinecap="round"
            fill="none"
          />
        </Svg>
        <Text style={styles.wordmark}>PocketTennisCoach</Text>
      </View>
      <View style={styles.badge}>
        <Text style={styles.badgeLabel}>Preview</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  brand: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.sm,
  },
  wordmark: {
    ...typography.label,
    color: colors.textPrimary,
  },
  badge: {
    backgroundColor: colors.accentSoft,
    borderRadius: radius.pill,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.xs,
  },
  badgeLabel: {
    ...typography.caption,
    color: colors.accent,
  },
});
