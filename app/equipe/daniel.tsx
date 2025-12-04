import { ScrollView, StyleSheet } from 'react-native';
import { Link } from 'expo-router';
import { Card, Text, Avatar, Button } from 'react-native-paper';

export default function DanielLunaScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Card style={styles.card}>
        <Card.Title
          title="Daniel Luna"
          subtitle="Integrante da equipe AIUTODESK"
          left={(props) => <Avatar.Text {...props} label="DL" />}
        />
        <Card.Content>
          <Text style={styles.sectionTitle}>Sobre mim</Text>
          <Text style={styles.text}>
            Daniel Luna é integrante da equipe AIUTODESK, contribuindo na 
            construção das telas, testes e validação das funcionalidades do app,
            além de apoiar nas decisões técnicas do projeto.
          </Text>

          <Text style={styles.sectionTitle}>Contato</Text>
          <Text style={styles.text}>📧 E-mail: (e-mail do Daniel)</Text>
          <Text style={styles.text}>🐙 GitHub: (GitHub do Daniel)</Text>
          <Text style={styles.text}>💼 LinkedIn: (LinkedIn do Daniel)</Text>
        </Card.Content>

        <Card.Actions style={styles.actions}>
          <Link href="/equipe/daniel/curriculo" asChild>
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
