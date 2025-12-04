import { ScrollView, StyleSheet } from 'react-native';
import { Card, Text, Avatar, Divider } from 'react-native-paper';
import { Link } from 'expo-router';

export default function CurriculoGuilherme() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Card style={styles.card}>
        <Card.Title
          title="Guilherme Martins"
          subtitle="Currículo Resumido"
          left={(props) => <Avatar.Text {...props} label="GM" />}
        />

        <Card.Content>
          <Text style={styles.sectionTitle}>Experiência Profissional</Text>

          <Text style={styles.itemTitle}>Função / Cargo 1</Text>
          <Text style={styles.subtitle}>Período • Local (preencher)</Text>
          <Text style={styles.text}>
            Adicione aqui uma experiência importante do Guilherme, descrevendo 
            brevemente suas atividades e responsabilidades.
          </Text>

          <Divider style={styles.divider} />

          <Text style={styles.itemTitle}>Função / Cargo 2</Text>
          <Text style={styles.subtitle}>Período • Local (preencher)</Text>
          <Text style={styles.text}>
            Outra experiência que ele queira destacar no currículo.
          </Text>

          <Divider style={styles.divider} />

          <Text style={styles.sectionTitle}>Formação Acadêmica</Text>
          <Text style={styles.itemTitle}>Curso 1 (preencher)</Text>
          <Text style={styles.subtitle}>Instituição • Período</Text>

          <Text style={styles.itemTitle}>Curso 2 (opcional)</Text>
          <Text style={styles.subtitle}>Instituição • Período</Text>

          <Divider style={styles.divider} />

          <Text style={styles.sectionTitle}>Tecnologias e Habilidades</Text>
          <Text style={styles.text}>• Tecnologias que o Guilherme domina</Text>
          <Text style={styles.text}>• Ferramentas, frameworks, linguagens</Text>
          <Text style={styles.text}>• Competências adicionais úteis ao projeto</Text>
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
    padding: 16,
    paddingTop: 24,
  },
  card: {
    borderRadius: 12,
    paddingBottom: 12,
  },
  sectionTitle: {
    marginTop: 16,
    marginBottom: 6,
    fontSize: 18,
    fontWeight: '700',
  },
  itemTitle: {
    fontSize: 15,
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
    marginVertical: 12,
  },
  actions: {
    marginTop: 12,
    paddingHorizontal: 16,
  },
  linkVoltar: {
    fontSize: 16,
    fontWeight: '600',
    color: '#6A1B9A',
  },
});
