import { ScrollView, StyleSheet } from 'react-native';
import { Link } from 'expo-router';
import { Card, Text, Avatar, Button } from 'react-native-paper';

export default function GuilhermeScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Card style={styles.card}>
        <Card.Title
          title="Guilherme Martins"
          subtitle="Membro da equipe AIUTODESK"
          left={(props) => <Avatar.Text {...props} label="GM" />}
        />
        <Card.Content>
          <Text style={styles.sectionTitle}>Sobre mim</Text>
          <Text style={styles.text}>
            Assistente administrativo em uma empresa de transporte de valores e atualmente cursando o 4º período de Sistemas para Internet (Unicap).
          </Text>

          <Text style={styles.sectionTitle}>Contato</Text>
          <Text style={styles.text}>📧 E-mail: martinsg750@gmail.com</Text>
          <Text style={styles.text}>🐙 GitHub: github.com/guicms03</Text>
          <Text style={styles.text}>💼 LinkedIn: Guilherme Martins</Text>
        </Card.Content>

        <Card.Actions style={styles.actions}>
          <Link href="/equipe/guilherme/curriculo" asChild>
            <Button mode="contained">Ver currículo</Button>
          </Link>

          <Link href="/equipe" asChild>
            <Button mode="text">Voltar</Button>
          </Link>
        </Card.Actions>
      </Card>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    paddingTop: 36,
  },
  card: {
    borderRadius: 14,
  },
  sectionTitle: {
    marginTop: 14,
    marginBottom: 6,
    fontSize: 16,
    fontWeight: '700',
  },
  text: {
    marginBottom: 6,
    fontSize: 14,
    lineHeight: 21,
  },
  actions: {
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingBottom: 10,
  },
});
