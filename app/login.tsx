import { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { useRouter } from "expo-router";
import { useAuth } from "@/store/auth";
import { TextInput, Button } from "react-native-paper";

export default function LoginScreen() {
  const router = useRouter();
  const login = useAuth((state) => state.login);

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState("");

  function handleLogin() {
    setErro("");

    if (!email || !senha) {
      setErro("Preencha e-mail e senha para continuar.");
      return;
    }

    // LOGIN FAKE POR ENQUANTO
    const fakeToken = "TOKEN_FAKE_AIUTODESK";
    const fakeUser = {
      nome: "Usuário AIUTODESK",
      email,
    };

    login(fakeToken, fakeUser);
    router.replace("/(tabs)");
  }

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <View style={styles.inner}>
        <Text style={styles.title}>Bem-vindo ao AIUTODESK</Text>
        <Text style={styles.subtitle}>Faça login para continuar</Text>

        {/* INPUT — EMAIL */}
        <TextInput
          mode="outlined"
          label="E-mail"
          value={email}
          onChangeText={setEmail}
          autoCapitalize="none"
          keyboardType="email-address"
          style={styles.input}
          outlineColor="#aaa"
          activeOutlineColor="#7C3AED"
        />

        {/* INPUT — SENHA */}
        <TextInput
          mode="outlined"
          label="Senha"
          value={senha}
          onChangeText={setSenha}
          secureTextEntry
          style={styles.input}
          outlineColor="#aaa"
          activeOutlineColor="#7C3AED"
        />

        {/* ERRO */}
        {erro ? <Text style={styles.error}>{erro}</Text> : null}

        {/* BOTÃO ENTRAR */}
        <Button
          mode="contained"
          onPress={handleLogin}
          style={{ marginTop: 16 }}
          buttonColor="#7C3AED"
          textColor="#fff"
        >
          Entrar
        </Button>

        <Text
          style={styles.link}
          onPress={() => {
            router.push("/signup");
          }}
        >
          Criar conta
        </Text>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f2f2f2",
    justifyContent: "center",
  },
  inner: {
    padding: 24,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 24,
    color: "#666",
  },
  input: {
    marginBottom: 12,
    backgroundColor: "white",
  },
  error: {
    marginTop: 4,
    color: "red",
    textAlign: "center",
  },
  link: {
    marginTop: 20,
    textAlign: "center",
    color: "#7C3AED",
    fontSize: 16,
    fontWeight: "500",
  },
});
