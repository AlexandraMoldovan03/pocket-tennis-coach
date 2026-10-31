import { StyleSheet, View } from 'react-native';
import Svg, { Circle, Line, Path, Polygon } from 'react-native-svg';

import { colors } from '../theme/colors';
import { radius } from '../theme/spacing';

// A tennis court seen in perspective (far baseline at the top, near baseline at
// the bottom) with a dotted ball trajectory. Coordinates use a 320x200 viewBox.
// Purely decorative, so it is hidden from screen readers.
export function CourtIllustration() {
  return (
    <View
      style={styles.container}
      accessibilityElementsHidden
      importantForAccessibility="no-hide-descendants"
    >
      <Svg width="100%" height="100%" viewBox="0 0 320 200">
        <Polygon
          points="110,40 210,40 300,190 20,190"
          fill="none"
          stroke={colors.accent}
          strokeOpacity={0.35}
          strokeWidth={1.2}
        />
        <Line x1={122} y1={40} x2={50} y2={190} stroke={colors.accent} strokeOpacity={0.25} strokeWidth={1} />
        <Line x1={198} y1={40} x2={270} y2={190} stroke={colors.accent} strokeOpacity={0.25} strokeWidth={1} />
        <Line x1={108.6} y1={68} x2={211.4} y2={68} stroke={colors.accent} strokeOpacity={0.25} strokeWidth={1} />
        <Line x1={74} y1={140} x2={246} y2={140} stroke={colors.accent} strokeOpacity={0.25} strokeWidth={1} />
        <Line x1={160} y1={68} x2={160} y2={140} stroke={colors.accent} strokeOpacity={0.25} strokeWidth={1} />
        <Line x1={77} y1={95} x2={243} y2={95} stroke={colors.textPrimary} strokeOpacity={0.6} strokeWidth={2} />

        <Path
          d="M70 172 Q 120 0 204 58"
          fill="none"
          stroke={colors.accent}
          strokeWidth={2}
          strokeLinecap="round"
          strokeDasharray="0.1 7"
        />
        <Circle cx={204} cy={58} r={14} fill={colors.accentSoft} />
        <Circle cx={204} cy={58} r={6} fill={colors.accent} />
      </Svg>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    aspectRatio: 16 / 10,
    backgroundColor: colors.surface,
    borderColor: colors.border,
    borderWidth: 1,
    borderRadius: radius.lg,
    overflow: 'hidden',
  },
});
