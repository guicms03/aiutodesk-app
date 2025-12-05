import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, ScrollView, TextInput } from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";
import { chamadosFake } from "@/constants/chamados";
import { AppButton } from "@/components/ui/AppButton";

function getStatusColor(status: string) {
  switch (status) {
    case "Aberto":
      return "#EF4444";
    case "Em andamento":
      return "#F59E0B";
    case "Fechado":
      return "#10B981";
    default:
      return "#6B7280";
  }
}

export default function ChamadoDetalheScreen() {
  const router = useRouter();
  const { id } = useLocalSearchParams<{ id?: string }>();

  // 👉 id vem como string, usamos como ÍNDICE do array
  const index = id ? parseInt(id, 10) : -1;

  const chamado = chamadosFake[index];

  const [modoEdicao, setModoEdicao] = useState(false);

  const [titulo, setTitulo] = useState("");
  const [descricao, setDescricao] = useState("");
  const [prioridade, setPrioridade] = useState("");
  const [status, setStatus] = useState("");

  // 🔁 Sempre que o chamado (ou índice) mudar, atualiza o estado
  useEffect(() => {
    if (chamado) {
      setTitulo(chamado.titulo);
      setDescricao(chamado.descricao);
      setPrioridade(chamado.prioridade);
      setStatus(chamado.status);
      setModoEdicao(false); // garante que volta para modo visualização
    }
  }, [index, chamado]);

  // Se não achar chamado válido, mostra erro
  if (!chamado || index < 0 || index >= chamadosFake.length) {
    return (
      <View style={styles.notFoundContainer}>
        <Text style={styles.notFoundText}>Chamado não encontrado.</Text>

        <AppButton
          title="Voltar para a lista"
          onPress={() => router.push("/(tabs)/explore")}
          variant="outline"
          style={{
            marginTop: 16,
            borderColor: "#4C1D95",
            backgroundColor: "#F9FAFB",
          }}
        />
      </View>
    );
  }

  const statusColor = getStatusColor(chamado.status);

  function handleSalvarAlteracoes() {
    // Mock: atualiza apenas em memória
    chamado.titulo = titulo;
    chamado.descricao = descricao;
    chamado.prioridade = prioridade;
    chamado.status = status;

    setModoEdicao(false);
  }

  function handleCancelarEdicao() {
    setTitulo(chamado.titulo);
    setDescricao(chamado.descricao);
    setPrioridade(chamado.prioridade);
    setStatus(chamado.status);
    setModoEdicao(false);
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* HEADER */}
      <View style={styles.header}>
        <Text style={styles.title}>
          {modoEdicao ? "Editar chamado" : chamado.titulo}
        </Text>

        {!modoEdicao && (
          <View
            style={[
              styles.statusPill,
              { backgroundColor: statusColor + "22" },
            ]}
          >
            <View
              style={[styles.statusDot, { backgroundColor: statusColor }]}
            />
            <Text style={[styles.statusText, { color: statusColor }]}>
              {chamado.status}
            </Text>
          </View>
        )}
      </View>

      {/* MODO VISUALIZAÇÃO */}
      {!modoEdicao && (
        <>
          <View style={styles.infoBox}>
            <Text style={styles.infoLabel}>Prioridade</Text>
            <Text style={styles.infoValue}>{chamado.prioridade}</Text>

            <Text style={styles.infoLabel}>Solicitante</Text>
            <Text style={styles.infoValue}>{chamado.solicitante}</Text>

            <Text style={styles.infoLabel}>Data de abertura</Text>
            <Text style={styles.infoValue}>{chamado.dataAbertura}</Text>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Descrição</Text>
            <Text style={styles.sectionText}>{chamado.descricao}</Text>
          </View>

          <AppButton
            title="Editar chamado"
            onPress={() => setModoEdicao(true)}
            style={{
              marginTop: 24,
              backgroundColor: "#4C1D95",
            }}
          />

          <AppButton
            title="Voltar para a lista"
            onPress={() => router.push("/(tabs)/explore")}
            variant="outline"
            style={{
              marginTop: 12,
              borderColor: "#4C1D95",
              backgroundColor: "#F9FAFB",
            }}
          />
        </>
      )}

      {/* MODO EDIÇÃO */}
      {modoEdicao && (
        <>
          <View style={styles.formGroup}>
            <Text style={styles.label}>Título</Text>
            <TextInput
              style={styles.input}
              value={titulo}
              onChangeText={setTitulo}
            />
          </View>

          <View style={styles.formGroup}>
            <Text style={styles.label}>Descrição</Text>
            <TextInput
              style={[styles.input, styles.inputMultiline]}
              value={descricao}
              onChangeText={setDescricao}
              multiline
            />
          </View>

          <View style={styles.formGroup}>
            <Text style={styles.label}>Prioridade</Text>
            <TextInput
              style={styles.input}
              value={prioridade}
              onChangeText={setPrioridade}
            />
          </View>

          <View style={styles.formGroup}>
            <Text style={styles.label}>Status</Text>
            <TextInput
              style={styles.input}
              value={status}
              onChangeText={setStatus}
            />
          </View>

          <AppButton
            title="Salvar alterações"
            onPress={handleSalvarAlteracoes}
            style={{
              marginTop: 24,
              backgroundColor: "#4C1D95",
            }}
          />

          <AppButton
            title="Cancelar edição"
            onPress={handleCancelarEdicao}
            variant="outline"
            style={{
              marginTop: 12,
              borderColor: "#4C1D95",
              backgroundColor: "#F9FAFB",
            }}
          />
        </>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#F3F4F6",
    paddingHorizontal: 16,
    paddingVertical: 24,
  },
  header: {
    marginBottom: 16,
    gap: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    flex: 1,
    fontSize: 20,
    fontWeight: "700",
    color: "#111827",
    marginRight: 12,
  },
  statusPill: {
    alignSelf: "flex-start",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 999,
  },
  statusDot: {
    width: 6,
    height: 6,
    borderRadius: 999,
    marginRight: 6,
  },
  statusText: {
    fontSize: 13,
    fontWeight: "600",
  },
  infoBox: {
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    padding: 12,
    marginBottom: 16,
  },
  infoLabel: {
    fontSize: 12,
    color: "#6B7280",
    marginTop: 4,
  },
  infoValue: {
    fontSize: 14,
    fontWeight: "600",
    color: "#111827",
  },
  section: {
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    padding: 12,
  },
  sectionTitle: {
    fontSize: 15,
    fontWeight: "700",
    marginBottom: 4,
  },
  sectionText: {
    fontSize: 14,
    color: "#374151",
  },
  notFoundContainer: {
    flex: 1,
    backgroundColor: "#F3F4F6",
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
  notFoundText: {
    fontSize: 16,
    color: "#111827",
  },
  formGroup: {
    marginTop: 12,
  },
  label: {
    fontSize: 13,
    fontWeight: "600",
    marginBottom: 4,
    color: "#374151",
  },
  input: {
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    padding: 10,
    fontSize: 14,
  },
  inputMultiline: {
    height: 100,
    textAlignVertical: "top",
  },
});
