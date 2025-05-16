import { Redirect } from 'expo-router';

export default function Home() {
  // Redirect to the main assessment tab
  return <Redirect href="/(tabs)/assessment" />;
}