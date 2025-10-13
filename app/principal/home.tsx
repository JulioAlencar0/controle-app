import { useEffect, useState } from "react";
import { ScrollView, StyleSheet } from "react-native";
import Card from "./components/Card";
import Header from "./components/Header";
import MonthSelector from "./components/Months";
import TransactionList from "./components/TransactionList";

export default function Home() {
  const [selected, setSelected] = useState(""); 

  useEffect(() => {
    const monthIndex = new Date().getMonth(); 
    const months = ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"];
    setSelected(months[monthIndex]);
  }, []); // executa só uma vez, quando o componente monta

  return (
    <ScrollView style={styles.container}>
      <Header name="Usuário" />

      {selected !== "" && (
        <>
          <MonthSelector selected={selected} onChange={setSelected} />
          <Card name={selected} year={2025} limit={2000} used={450} budget={1550} />
          <TransactionList />
        </>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    paddingHorizontal: 25,
  },
});
