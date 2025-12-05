import { Redirect } from 'expo-router';
import { useAuth } from '@/store/auth';

export default function IndexRedirect() {
  const token = useAuth((state) => state.token);

  // Se não estiver logado, manda para /login
  if (!token) {
    return <Redirect href="/login" />;
  }

  // Se estiver logado, manda para as tabs
  return <Redirect href="/(tabs)" />;
}
