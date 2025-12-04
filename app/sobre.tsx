import { ScrollView, StyleSheet } from 'react-native';
import { Link } from 'expo-router';
import { Card, Text, Button } from 'react-native-paper';

export default function SobreScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Card style={styles.card}>
        <Card.Title title="Sobre o AIUTODESK" />
        <Card.Content>
          <Text style={styles.text}>
            O AIUTODESK é um aplicativo desenvolvido pela equipe para as
            disciplinas de AOS e PDM, com o objetivo de simular uma plataforma
            moderna de atendimento e organização de demandas.
          </Text>
          <Text style={styles.text}>
            Nele será possível visualizar informações sobre o projeto, sobre a
            equipe e, em breve, interagir com dados vindos de um back-end em
            Express, incluindo operações de login, cadastro e CRUD das
            entidades definidas na API.
          </Text>
        </Card.Content>
      </Card>

      <Card style={styles.card}>
        <Card.Title title="Tecnologias utilizadas" />
        <Card.Content>
          <Text style={styles.text}>• React Native + Expo</Text>
          <Text style={styles.text}>• Expo Router</Text>
          <Text style={styles.text}>• React Native Paper (UI Kit)</Text>
          <Text style={styles.text}>• Zustand (estado global)</Text>
          <Text style={styles.text}>• Back-end em Express (integração futura)</Text>
        </Card.Content>
      </Card>

      <Card style={styles.card}>
        <Card.Title title="Objetivos do projeto" />
        <Card.Content>
          <Text style={styles.text}>
            • Praticar desenvolvimento mobile com Expo e React Native.
          </Text>
          <Text style={styles.text}>
            • Integrar front-end e back-end com uma API em Express.
          </Text>
          <Text style={styles.text}>
            • Trabalhar em equipe utilizando GitHub, commits e branches.
          </Text>
          <Text style={styles.text}>
            • Entregar um app funcional e apresentável para as disciplinas.
          </Text>
        </Card.Content>
        <Card.Actions>
          <Link href="/" asChild>
            <Button>Voltar para a Home</Button>
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
    gap: 16,
  },
  card: {
    borderRadius: 12,
  },
  text: {
    marginBottom: 8,
  },
});
