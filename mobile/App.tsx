import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

import { AppHeader } from './src/components/AppHeader';
import { CourtIllustration } from './src/components/CourtIllustration';
import { PrimaryButton } from './src/components/PrimaryButton';
import { ProgressCard } from './src/components/ProgressCard';
import { colors } from './src/theme/colors';
import { spacing } from './src/theme/spacing';
import { typography } from './src/theme/typography';

export default function App() {
  const [isAnalysisRequested, setIsAnalysisRequested] = useState(false);

  function handleAnalyzePress() {
    setIsAnalysisRequested(true);
  }

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={styles.content}>
          <AppHeader />

          <View style={styles.hero}>
            <Text style={styles.eyebrow}>Forehand technique</Text>
            <Text style={styles.headline} accessibilityRole="header">
              Train smarter.{'\n'}
              <Text style={styles.headlineAccent}>Play better.</Text>
            </Text>
            <Text style={styles.description}>
              Film your forehand and get clear, explainable feedback on your form.
            </Text>
          </View>

          <CourtIllustration />

          <View style={styles.action}>
            <PrimaryButton
              label="Analyze My Stroke"
              icon="arrow-right"
              onPress={handleAnalyzePress}
            />
            {isAnalysisRequested && (
              <Text style={styles.notice}>
                Stroke analysis is not available yet. It will arrive in a future version.
              </Text>
            )}
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Your progress</Text>
            <ProgressCard />
          </View>
        </ScrollView>
      </SafeAreaView>
      <StatusBar style="light" />
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.background,
  },
  content: {
    flexGrow: 1,
    gap: spacing.xxl,
    paddingHorizontal: spacing.xl,
    paddingTop: spacing.lg,
    paddingBottom: spacing.xxxl,
  },
  hero: {
    gap: spacing.md,
  },
  eyebrow: {
    ...typography.eyebrow,
    color: colors.accent,
  },
  headline: {
    ...typography.display,
    color: colors.textPrimary,
  },
  headlineAccent: {
    color: colors.accent,
  },
  description: {
    ...typography.body,
    color: colors.textSecondary,
  },
  action: {
    gap: spacing.md,
  },
  notice: {
    ...typography.caption,
    color: colors.textSecondary,
    textAlign: 'center',
  },
  section: {
    gap: spacing.lg,
  },
  sectionTitle: {
    ...typography.title,
    color: colors.textPrimary,
  },
});
