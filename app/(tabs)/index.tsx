import { View, Text, StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';
import { Link } from 'expo-router';
import { useAuthStore } from '../../store/useAuthStore';

export default function HomeScreen() {
  const { user, isAuthenticated, login, logout } = useAuthStore();

  const handleFakeLogin = () => {
    login(
      {
        name: 'Carlos Borba',
        email: 'carlinhosborba@example.com',
      },
      'fake-token-123',
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>AIUTODESK</Text>
      <Text style={styles.subtitle}>Bem-vindo ao app da equipe!</Text>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Estado de autenticação (Zustand)</Text>
        {isAuthenticated && user ? (
          <Text style={styles.infoText}>
            Usuário logado: <Text style={styles.bold}>{user.name}</Text>
          </Text>
        ) : (
          <Text style={styles.infoText}>Nenhum usuário logado.</Text>
        )}

        <View style={styles.row}>
          <Button mode="contained" onPress={handleFakeLogin}>
            Login de teste
          </Button>
          <Button mode="outlined" onPress={logout}>
            Logout
          </Button>
        </View>
      </View>

      <View style={styles.buttons}>
        <Link href="/sobre" asChild>
          <Button mode="contained">Sobre o Projeto</Button>
        </Link>

        <Link href="/equipe" asChild>
          <Button mode="contained">Equipe</Button>
        </Link>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    gap: 16,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 18,
    textAlign: 'center',
  },
  section: {
    marginTop: 16,
    width: '100%',
    gap: 8,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
  },
  infoText: {
    fontSize: 14,
  },
  bold: {
    fontWeight: '700',
  },
  row: {
    marginTop: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 8,
  },
  buttons: {
    marginTop: 24,
    width: '100%',
    gap: 10,
  },
});
