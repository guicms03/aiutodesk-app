import React from "react";
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import { AppButton } from "@/components/ui/AppButton";

export default function EquipeScreen() {
  const router = useRouter();

  const equipe = [
    { nome: "Alyson Lima", rota: "alyson" },
    { nome: "Carlos Borba", rota: "carlos-borba" },
    { nome: "Carlos Leal", rota: "carlos-leal" },
    { nome: "Daniel Luna", rota: "daniel" },
    { nome: "Guilherme Martins", rota: "guilherme" },
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Nossa equipe</Text>

      {equipe.map((pessoa, index) => (
        <TouchableOpacity
          key={index}
          style={styles.card}
          onPress={() => router.push(`/equipe/${pessoa.rota}`)}
        >
          <View style={styles.avatar}>
            <Text style={styles.avatarText}>{pessoa.nome[0]}</Text>
          </View>

          <View style={{ flex: 1 }}>
            <Text style={styles.nome}>{pessoa.nome}</Text>
            <Text style={styles.funcao}>Desenvolvedor</Text>
          </View>
        </TouchableOpacity>
      ))}

      <AppButton
        title="Voltar para Home"
        onPress={() => router.push("/")}
        variant="outline"
        style={{ marginTop: 20 }}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#F3F4F6",
  },
  title: {
    fontSize: 24,
    fontWeight: "700",
    marginBottom: 20,
    textAlign: "center",
    color: "#111827",
  },
  card: {
    flexDirection: "row",
    backgroundColor: "#FFFFFF",
    padding: 14,
    borderRadius: 14,
    marginBottom: 14,
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  avatar: {
    width: 52,
    height: 52,
    borderRadius: 999,
    backgroundColor: "#4C1D95",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
  },
  avatarText: {
    fontSize: 24,
    fontWeight: "700",
    color: "#FFF",
  },
  nome: {
    fontSize: 18,
    fontWeight: "600",
    color: "#111827",
  },
  funcao: {
    fontSize: 14,
    color: "#6B7280",
  },
});
