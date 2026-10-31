import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

import { PrimaryButton } from './src/components/PrimaryButton';
import { ProgressCard } from './src/components/ProgressCard';
import { colors } from './src/theme/colors';

export default function App() {
  const appName = 'PocketTennisCoach';
  const [isAnalysisRequested, setIsAnalysisRequested] = useState(false);

  function handleAnalyzePress() {
    setIsAnalysisRequested(true);
  }

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={styles.content}>
          <View>
            <Text style={styles.title}>{appName}</Text>
            <Text style={styles.subtitle}>Your AI Tennis Coach</Text>
          </View>

          <View style={styles.hero}>
            <Text style={styles.headline}>Improve your game. One stroke at a time.</Text>
            <Text style={styles.description}>
              Record your forehand, and PocketTennisCoach will analyze your body movement
              to give you clear, practical feedback on your technique.
            </Text>
          </View>

          <View>
            <PrimaryButton label="Analyze My Stroke" onPress={handleAnalyzePress} />
            {isAnalysisRequested && (
              <Text style={styles.notice}>
                Stroke analysis is not available yet. It will arrive in a future version.
              </Text>
            )}
          </View>

          <ProgressCard />
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
    gap: 32,
    paddingHorizontal: 24,
    paddingVertical: 24,
  },
  title: {
    color: colors.accent,
    fontSize: 34,
    fontWeight: '800',
  },
  subtitle: {
    color: colors.textSecondary,
    fontSize: 17,
    fontWeight: '500',
    marginTop: 8,
  },
  hero: {
    gap: 12,
  },
  headline: {
    color: colors.textPrimary,
    fontSize: 28,
    fontWeight: '700',
    lineHeight: 34,
  },
  description: {
    color: colors.textSecondary,
    fontSize: 16,
    lineHeight: 24,
  },
  notice: {
    color: colors.textSecondary,
    fontSize: 15,
    marginTop: 12,
  },
});
