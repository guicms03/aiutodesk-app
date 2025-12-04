import { StyleSheet, ScrollView } from 'react-native';
import { Link } from 'expo-router';
import { Card, Text, Avatar } from 'react-native-paper';

const membros = [
  { nome: 'Alyson Lima', rota: '/equipe/alyson', sigla: 'AL' },
  { nome: 'Carlos Borba', rota: '/equipe/carlos-borba', sigla: 'CB' },
  { nome: 'Carlos Leal', rota: '/equipe/carlos-leal', sigla: 'CL' },
  { nome: 'Daniel Luna', rota: '/equipe/daniel', sigla: 'DL' },
  { nome: 'Guilherme Martins', rota: '/equipe/guilherme', sigla: 'GM' },
];

export default function EquipeScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Nossa Equipe</Text>
      <Text style={styles.subtitle}>
        Toque em um integrante para ver perfil e currículo resumido.
      </Text>

      {membros.map((membro) => (
        <Link key={membro.rota} href={membro.rota} asChild>
          <Card style={styles.card}>
            <Card.Title
              title={membro.nome}
              subtitle="Ver detalhes do integrante"
              left={(props) => <Avatar.Text {...props} label={membro.sigla} />}
            />
          </Card>
        </Link>
      ))}

      <Link href="/" asChild>
        <Text style={styles.backText}>⬅ Voltar para a Home</Text>
      </Link>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 16,
    paddingTop: 32,
    gap: 12,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 14,
    marginBottom: 12,
  },
  card: {
    marginBottom: 8,
    borderRadius: 12,
  },
  backText: {
    marginTop: 24,
    fontSize: 16,
    color: '#2563eb',
    fontWeight: '600',
  },
});
