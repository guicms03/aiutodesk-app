import { ScrollView, StyleSheet } from 'react-native';
import { Card, Text, Avatar, Divider } from 'react-native-paper';
import { Link } from 'expo-router';

export default function CurriculoCarlosLeal() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Card style={styles.card}>
        <Card.Title
          title="Carlos Leal"
          subtitle="Currículo Resumido"
          left={(props) => <Avatar.Text {...props} label="CL" />}
        />

        <Card.Content>
          <Text style={styles.sectionTitle}>Experiência Profissional</Text>

          <Text style={styles.itemTitle}>Função / Cargo 1</Text>
          <Text style={styles.subtitle}>Período • Local (preencher)</Text>
          <Text style={styles.text}>
            Espaço reservado para descrever a principal experiência profissional
            do Carlos Leal, destacando responsabilidades e resultados.
          </Text>

          <Divider style={styles.divider} />

          <Text style={styles.itemTitle}>Função / Cargo 2</Text>
          <Text style={styles.subtitle}>Período • Local (preencher)</Text>
          <Text style={styles.text}>
            Outra experiência relevante que ele queira adicionar ao currículo.
          </Text>

          <Divider style={styles.divider} />

          <Text style={styles.sectionTitle}>Formação Acadêmica</Text>
          <Text style={styles.itemTitle}>Curso 1 (preencher)</Text>
          <Text style={styles.subtitle}>Instituição • Período</Text>

          <Text style={styles.itemTitle}>Curso 2 (opcional)</Text>
          <Text style={styles.subtitle}>Instituição • Período</Text>

          <Divider style={styles.divider} />

          <Text style={styles.sectionTitle}>Tecnologias e Habilidades</Text>
          <Text style={styles.text}>• Tecnologias que o Carlos Leal domina</Text>
          <Text style={styles.text}>• Frameworks, banco de dados, ferramentas</Text>
          <Text style={styles.text}>• Outras habilidades relevantes para o projeto</Text>
        </Card.Content>

        <Card.Actions style={styles.actions}>
          <Link href="/equipe/carlos-leal" asChild>
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
