import { Image } from "expo-image";
import { useRouter } from "expo-router";
import { useState } from "react";
import { StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function Index() {
  const [senhaVisivel, setSenhaVisivel] = useState(false);
  const router = useRouter()
  
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#000" barStyle="dark-content" />
      <Image
        style={styles.logo}
        source={require("../assets/logo.png")}
      />

      <View style={styles.boxText}>
        <Text style={styles.title}>Olá!</Text>
        <Text style={styles.subtitle}>
          Vamos organizar suas finanças? Entre agora
        </Text>
      </View>

      <View>
        
        <TextInput
          style={styles.input}
          keyboardType="email-address"
          placeholder="Email"
          placeholderTextColor="#A1A2A1"
        />

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.inputSenha}
            placeholder="Senha"
            placeholderTextColor="#A1A2A1"
            secureTextEntry={!senhaVisivel}
          />
          <TouchableOpacity
            style={styles.icon}
            onPress={() => setSenhaVisivel(!senhaVisivel)}
          >
            <Image
              source={
                senhaVisivel
                  ? require("../assets/eye.svg") 
                  : require("../assets/eye-off.svg")     
              }
              style={styles.iconImg}
            />
          </TouchableOpacity>
        </View>
              <TouchableOpacity onPress={() => router.push("/home")}
              style={styles.btn}>
                <Text style={styles.entrar}>Entrar</Text>
              </TouchableOpacity>
              
              <TouchableOpacity  onPress={() => router.push("/register")}>
              <Text style={styles.register}>
               Não tem uma conta? Registre-se aqui!  
              </Text></TouchableOpacity>
              
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  logo:{
    width: 366,
    height: 359,
    bottom: 50
  },
  boxText:{
    top: -20,
    width: 326
  },
  title:{
    fontSize: 14,
    fontWeight: "700",
  },
  subtitle:{
    fontSize: 13
  },
  input:{
    top: -20,
    backgroundColor: "#eeeeeeff",
    width: 326,
    height: 48,
    color: "#A1A2A1",
    fontSize: 16,
    paddingLeft: 14,
    marginTop: 28,
    borderRadius: 8
  },
  inputContainer: {
    position: "relative",
    top: -20,
    marginTop: 28,
    width: 326,
  },
  inputSenha: {
    backgroundColor: "#eeeeeeff",
    width: "100%",
    height: 48,
    color: "#A1A2A1",
    fontSize: 16,
    paddingLeft: 14,
    paddingRight: 40, 
    borderRadius: 8
  },
  icon: {
    position: "absolute",
    right: 12,
    top: 12
  },
  iconImg: {
    width: 22,
    height: 22,
  },
  btn:{
    backgroundColor:"#DA4BDD",
    width: 326,
    height: 48,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    top: 40
  },
  entrar:{
    color: "#ffffff",
    fontWeight: 700
  },
  register:{
    top: 55,
    justifyContent: "center",
    alignSelf: "center"
  }
});
