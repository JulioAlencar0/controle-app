import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
type Props = { name: Array<string> | string 
  year: number
  limit: number
  used: number
  budget: number
};

export default function BudgetCard({ name, year, limit, used, budget }: Props) {
  const [budgetDefined, setBudgetDefined] = useState(false);
  

  return (
    <View style={styles.card}>
      <Text style={styles.monthText}>{name} / {year}</Text>
      <View style={styles.divider} />

      {!budgetDefined ? (
        <>
          <Text style={styles.subtitle}>Orçamento disponível</Text>
          <TouchableOpacity
            style={styles.defineButton}
            onPress={() => setBudgetDefined(true)}
          >
            <Text style={styles.defineButtonText}>Definir orçamento</Text>
          </TouchableOpacity>
          <View style={styles.bottomRow}>
            <View>
              <Text style={styles.label}>Usado</Text>
              <Text style={styles.value}>R$ 0,00</Text>
            </View>
            <View style={{ alignItems: "flex-end" }}>
              <Text style={styles.label}>Limite</Text>
              <Text style={styles.value}>∞</Text>
            </View>
          </View>
        </>
      ) : (
        <>
          <Text style={styles.subtitle}>Orçamento disponível</Text>
          <Text style={styles.available}>R$ {budget.toFixed(2)}</Text>

          <View style={styles.bottomRow}>
            <View>
              <Text style={styles.label}>Usado</Text>
              <Text style={styles.value}>R$ {used.toFixed(2)}</Text>
            </View>
            <View style={{ alignItems: "flex-end" }}>
              <Text style={styles.label}>Limite</Text>
              <Text style={styles.value}>R$ {limit.toFixed(2)}</Text>
            </View>
          </View>

          <View style={styles.progressContainer}>
            <View
              style={[
                styles.progressBar,
                { width: `${Math.min((used / limit) * 100, 100)}%` },
              ]}
            />
          </View>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#111",
    borderRadius: 10,
    padding: 20,
    marginTop: 10,
    width: "100%",
    position: "relative", 
  },
  monthText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
    marginBottom: 8,
    marginTop: 4
  },
  divider: {
    height: 1,
    backgroundColor: "#333",
    marginBottom: 16,
  },
  subtitle: {
    color: "#ccc",
    fontSize: 14,
    marginBottom: 8,
  },
  defineButton: {
    backgroundColor: "#DC54DE0D",
    borderColor: "#DA4BDD",
    borderWidth: 1.5,
    borderRadius: 10,
    paddingVertical: 10,
    alignItems: "center",
    marginBottom: 16,
  },
  defineButtonText: {
    color: "#DA4BDD",
    fontWeight: "bold",
  },
  bottomRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  label: {
    color: "#aaa",
    fontSize: 12,
  },
  value: {
    color: "#fff",
    fontWeight: "bold",
  },
  available: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 10,
  },
 progressContainer: {
  position: "absolute",
  bottom: 0,
  left: 0,
  right: 0,
  height: 8,
  backgroundColor: "#333", 
  borderBottomLeftRadius: 10,
  borderBottomRightRadius: 10,
  overflow: "scroll"
},
progressBar: {
  height: "100%",
  backgroundColor: "#DA4BDD",
  borderRadius: 5, 
},

});
