import { ScrollView, StyleSheet } from 'react-native';
import { Card, Text, Avatar, Divider } from 'react-native-paper';
import { Link } from 'expo-router';

export default function CurriculoGuilherme() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Card style={styles.card}>
        <Card.Title
          title="Guilherme Martins"
          subtitle="Desenvolvedor em Formação | Estudante de Ciência da Computação"
          left={(props) => <Avatar.Text {...props} label="GM" />}
        />

        <Card.Content>
          <Text style={styles.sectionTitle}>Experiência Profissional</Text>

          <Text style={styles.itemTitle}>Projetos Acadêmicos (Spring Boot & PostgreSQL)</Text>
          <Text style={styles.subtitle}>2024 - 2025 • Unicap</Text>
          <Text style={styles.text}>
            Desenvolvimento de APIs REST utilizando Spring Boot, PostgreSQL e boas práticas de design de software,
            incluindo princípios SOLID, coesão, acoplamento e padrões de projeto.
          </Text>

          <Divider style={styles.divider} />

          <Text style={styles.itemTitle}>Aplicativo Mobile (React Native + Expo)</Text>
          <Text style={styles.subtitle}>2024 - 2025 • Projeto Pessoal</Text>
          <Text style={styles.text}>
            Construção de um aplicativo de currículos utilizando React Native, Expo Router, integração com API e
            gerenciamento de navegação.
          </Text>

          <Divider style={styles.divider} />

          <Text style={styles.sectionTitle}>Formação Acadêmica</Text>

          <Text style={styles.itemTitle}>Ciência da Computação</Text>
          <Text style={styles.subtitle}>Universidade Católica de Pernambuco • 2023 - Atual</Text>

          <Divider style={styles.divider} />

          <Text style={styles.sectionTitle}>Tecnologias e Habilidades</Text>
          <Text style={styles.text}>• Java, Spring Boot, JPA, PostgreSQL</Text>
          <Text style={styles.text}>• Node.js, Express, JavaScript, TypeScript</Text>
          <Text style={styles.text}>• React Native, Expo, React hooks</Text>
          <Text style={styles.text}>• Git, GitHub (guicms03)</Text>
          <Text style={styles.text}>• Boas práticas: SOLID, padrões de projeto, organização de código</Text>
          <Text style={styles.text}>• Resolução de problemas e aprendizado rápido</Text>
        </Card.Content>

        <Card.Actions style={styles.actions}>
          <Link href="/equipe/guilherme" asChild>
            <Text style={styles.linkVoltar}>← Voltar ao perfil</Text>
          </Link>
        </Card.Actions>
      </Card>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 18,
    paddingTop: 28,
  },
  card: {
    borderRadius: 14,
    paddingBottom: 16,
    elevation: 2,
  },
  sectionTitle: {
    marginTop: 18,
    marginBottom: 8,
    fontSize: 19,
    fontWeight: '700',
  },
  itemTitle: {
    fontSize: 16,
    fontWeight: '600',
  },
  subtitle: {
    fontSize: 13,
    opacity: 0.7,
    marginBottom: 4,
  },
  text: {
    fontSize: 14,
    marginBottom: 6,
    lineHeight: 20,
  },
  divider: {
    marginVertical: 14,
  },
  actions: {
    marginTop: 16,
    paddingHorizontal: 16,
  },
  linkVoltar: {
    fontSize: 16,
    fontWeight: '600',
    color: '#7B1FA2',
  },
});
