import { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { TextInput, Button } from "react-native-paper";
import { useRouter } from "expo-router";

export default function SignupScreen() {
  const router = useRouter();

  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");
  const [erro, setErro] = useState("");

  function handleSignup() {
    setErro("");

    if (!nome || !email || !senha || !confirmarSenha) {
      setErro("Preencha todos os campos para continuar.");
      return;
    }

    if (senha !== confirmarSenha) {
      setErro("As senhas não conferem.");
      return;
    }

    // ✅ Por enquanto: fluxo simples
    // Depois, aqui vai chamar a API real (Express) para criar usuário
    // e só se der sucesso voltamos para o login.
    console.log("Usuário cadastrado (FAKE):", { nome, email });

    // Volta para tela de login
    router.replace("/login");
  }

  function voltarParaLogin() {
    router.replace("/login");
  }

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <View style={styles.inner}>
        <Text style={styles.title}>Criar conta</Text>
        <Text style={styles.subtitle}>
          Preencha os dados para se cadastrar no AIUTODESK
        </Text>

        <TextInput
          mode="outlined"
          label="Nome completo"
          value={nome}
          onChangeText={setNome}
          style={styles.input}
          outlineColor="#aaa"
          activeOutlineColor="#7C3AED"
        />

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

        <TextInput
          mode="outlined"
          label="Confirmar senha"
          value={confirmarSenha}
          onChangeText={setConfirmarSenha}
          secureTextEntry
          style={styles.input}
          outlineColor="#aaa"
          activeOutlineColor="#7C3AED"
        />

        {erro ? <Text style={styles.error}>{erro}</Text> : null}

        <Button
          mode="contained"
          onPress={handleSignup}
          style={{ marginTop: 16 }}
          buttonColor="#7C3AED"
          textColor="#fff"
        >
          Cadastrar
        </Button>

        <Text style={styles.link} onPress={voltarParaLogin}>
          Já tenho conta — fazer login
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
    fontSize: 26,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 15,
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
