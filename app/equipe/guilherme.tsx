import { ScrollView, StyleSheet } from 'react-native';
import { Link } from 'expo-router';
import { Card, Text, Avatar, Button } from 'react-native-paper';

export default function GuilhermeScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Card style={styles.card}>
        <Card.Title
          title="Guilherme Martins"
          subtitle="Integrante da equipe AIUTODESK"
          left={(props) => <Avatar.Text {...props} label="GM" />}
        />
        <Card.Content>
          <Text style={styles.sectionTitle}>Sobre mim</Text>
          <Text style={styles.text}>
            Assistente administrativo na empresa de transporte de valores, e cursando 4 periodo em sistemas para internet (Unicap)
          </Text>

          <Text style={styles.sectionTitle}>Contato</Text>
          <Text style={styles.text}>📧 E-mail: (martinsg750@gmail.com)</Text>
          <Text style={styles.text}>🐙 GitHub: (https://github.com/guicms03)</Text>
          <Text style={styles.text}>💼 LinkedIn: (Guilherme Martins)</Text>
        </Card.Content>

        <Card.Actions style={styles.actions}>
          <Link href="/equipe/guilherme/curriculo" asChild>
            <Button mode="contained">Ver currículo resumido</Button>
          </Link>

          <Link href="/equipe" asChild>
            <Button mode="text">Voltar para a equipe</Button>
          </Link>
        </Card.Actions>
      </Card>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 16,
    paddingTop: 32,
  },
  card: {
    borderRadius: 12,
  },
  sectionTitle: {
    marginTop: 12,
    marginBottom: 4,
    fontSize: 16,
    fontWeight: '600',
  },
  text: {
    marginBottom: 4,
    fontSize: 14,
    lineHeight: 20,
  },
  actions: {
    justifyContent: 'space-between',
    paddingHorizontal: 8,
    paddingBottom: 8,
  },
});
