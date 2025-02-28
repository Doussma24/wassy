import { Colors } from "@/utils/Constants";
import { StyleSheet } from "react-native";

export const roleStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    alignItems: "center",
    paddingTop: 210, // Pour que les autres éléments ne soient pas cachés par le logo
  },  
  logo: {
    position: "absolute",
    top: -120, // Place le logo tout en haut
    width: "100%",
    height: 500, // Garde la grande taille
    resizeMode: "contain",
  },  
  card: {
    top: -130, 
    width: "70%",
    marginTop: 40,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: "#ccc",
    backgroundColor: "#fff",
    marginVertical: 10,
    alignItems: "center",
  },
  cardContent: {
    width: "70%",
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  image: {
    height: 120,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    width: "100%",
  },
  description: {
    fontSize: 14,
    color: "#666",
  },
});
