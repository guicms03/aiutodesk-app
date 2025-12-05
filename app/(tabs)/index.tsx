import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import { useRouter } from "expo-router";
import { useAuth } from "@/store/auth";

export default function HomeScreen() {
  const router = useRouter();

  const token = useAuth((state) => state.token);
  const user = useAuth((state) => state.user);
  const logout = useAuth((state) => state.logout);

  function handleLogout() {
    logout();
    router.replace("/login");
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Topo: estado de autenticação */}
      <View style={styles.authBox}>
        <Text style={styles.authTitle}>Estado de autenticação (Zustand)</Text>
        {token && user ? (
          <Text style={styles.authText}>
            Usuário logado:{" "}
            <Text style={styles.authStrong}>{user.nome}</Text>
            {"\n"}
            <Text style={styles.authEmail}>{user.email}</Text>
          </Text>
        ) : (
          <Text style={styles.authText}>Nenhum usuário logado.</Text>
        )}

        <View style={styles.authButtonsRow}>
          {!token && (
            <TouchableOpacity
              style={[styles.smallButton, styles.secondaryButton]}
              onPress={() => router.replace("/login")}
            >
              <Text style={styles.smallButtonText}>Ir para Login</Text>
            </TouchableOpacity>
          )}

          {token && (
            <TouchableOpacity
              style={[styles.smallButton, styles.logoutButton]}
              onPress={handleLogout}
            >
              <Text style={styles.smallButtonText}>Logout</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>

      {/* Centro: título e descrição */}
      <View style={styles.centerBox}>
        <Text style={styles.title}>AIUTODESK</Text>
        <Text style={styles.subtitle}>Bem-vindo ao app da equipe!</Text>
      </View>

      {/* Botões principais */}
      <View style={styles.buttonsBox}>
        <TouchableOpacity
          style={styles.mainButton}
          onPress={() => router.push("/sobre")}
        >
          <Text style={styles.mainButtonText}>Sobre o Projeto</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.mainButton}
          onPress={() => router.push("/equipe")}
        >
          <Text style={styles.mainButtonText}>Equipe</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
    paddingTop: 40,
    backgroundColor: "#f5f5f5",
    flexGrow: 1,
  },
  authBox: {
    backgroundColor: "#ffffff",
    borderRadius: 12,
    padding: 16,
    marginBottom: 24,
    borderWidth: 1,
    borderColor: "#e5e7eb",
  },
  authTitle: {
    fontWeight: "bold",
    marginBottom: 8,
    fontSize: 14,
  },
  authText: {
    fontSize: 14,
    color: "#444",
  },
  authStrong: {
    fontWeight: "bold",
  },
  authEmail: {
    fontSize: 13,
    color: "#666",
  },
  authButtonsRow: {
    flexDirection: "row",
    marginTop: 12,
    gap: 8,
  },
  smallButton: {
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 999,
  },
  secondaryButton: {
    backgroundColor: "#3b82f6",
  },
  logoutButton: {
    backgroundColor: "#ef4444",
  },
  smallButtonText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 13,
    textAlign: "center",
  },
  centerBox: {
    alignItems: "center",
    marginBottom: 24,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    letterSpacing: 1,
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 16,
    color: "#555",
  },
  buttonsBox: {
    gap: 12,
  },
  mainButton: {
    backgroundColor: "#7C3AED",
    paddingVertical: 14,
    borderRadius: 999,
    alignItems: "center",
  },
  mainButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
    textTransform: "uppercase",
  },
});
