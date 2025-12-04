import { ScrollView, StyleSheet } from 'react-native';
import { Card, Text, Avatar, Divider } from 'react-native-paper';
import { Link } from 'expo-router';

export default function CurriculoCarlosBorba() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      
      <Card style={styles.card}>
        <Card.Title
          title="Carlos Borba"
          subtitle="Currículo Resumido"
          left={(props) => <Avatar.Text {...props} label="CB" />}
        />

        <Card.Content>

          {/* Experiência Profissional */}
          <Text style={styles.sectionTitle}>Experiência Profissional</Text>

          <Text style={styles.itemTitle}>Assessor Técnico – Prefeitura da Aliança</Text>
          <Text style={styles.subtitle}>2024 • Função atual</Text>
          <Text style={styles.text}>
            Apoio técnico à Secretaria de Gestão e Inovação, desenvolvimento de soluções 
            digitais e sistemas internos, documentação de processos e melhorias operacionais.
          </Text>

          <Divider style={styles.divider} />

          <Text style={styles.itemTitle}>Coordenador Municipal do ENEM – INEP</Text>
          <Text style={styles.subtitle}>2013–2024</Text>
          <Text style={styles.text}>
            Gerenciamento logístico e operacional do ENEM no município, coordenação de equipes, 
            controle de materiais sigilosos e apoio às políticas de avaliação educacional.
          </Text>

          <Divider style={styles.divider} />


          {/* Formação Acadêmica */}
          <Text style={styles.sectionTitle}>Formação Acadêmica</Text>

          <Text style={styles.itemTitle}>Sistemas para Internet – UNICAP</Text>
          <Text style={styles.subtitle}>2024–2026 (cursando)</Text>

          <Text style={styles.itemTitle}>Direito – FACET</Text>
          <Text style={styles.subtitle}>2012–2016</Text>

          <Divider style={styles.divider} />


          {/* Tecnologias */}
          <Text style={styles.sectionTitle}>Tecnologias e Habilidades</Text>

          <Text style={styles.text}>• React • React Native • Expo • Next.js</Text>
          <Text style={styles.text}>• Node.js • Express • PostgreSQL</Text>
          <Text style={styles.text}>• Tailwind CSS • UI Design • Git/GitHub</Text>

        </Card.Content>

        {/* Botão voltar */}
        <Card.Actions style={styles.actions}>
          <Link href="/equipe/carlos-borba" asChild>
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
