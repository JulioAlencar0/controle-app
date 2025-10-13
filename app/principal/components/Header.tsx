import { Image } from "expo-image";
import { useRouter } from "expo-router";
import { Alert, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Header({ name = "", image }: { name?: string; image?: any }) {
  const router = useRouter();

  const handleLogout = () => {
    Alert.alert(
            "Sair da conta",
      "Tem certeza que deseja sair?",
      [
        { text: "Cancelar", style: "cancel" },
        {
          text: "Sair",
          style: "destructive",
          onPress: () => router.back(),
        },
      ]
    );
  };
  return (
    <View style={styles.container}>
      <Image
        source={image || require("../../../assets/logo.png")}
        style={styles.avatar}
      />
      <View>
        <Text style={styles.greeting}>OLÁ, {name.toUpperCase()}!</Text>
        <Text style={styles.subtitle}>Vamos organizar suas finanças?</Text>
      </View>
      <TouchableOpacity onPress={handleLogout}>
        <Image
          source={require("../../../assets/logout.svg")} 
          style={styles.logoutIcon}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 60,
    marginBottom: 30,
  },
  avatar: {
    width: 55,
    height: 55,
    borderRadius: 40,
    marginRight: 15,
  },
  greeting: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000",
    marginBottom: 2,

  },
  subtitle: {
    fontSize: 13,
    color: "#666",
  },
  logoutIcon: {
    width: 24,
    height: 24,
    marginLeft: 80
  },
});
