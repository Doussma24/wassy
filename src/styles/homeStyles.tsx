import { Colors } from "@/utils/Constants";
import { StyleSheet } from "react-native";

export const homeStyles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 5,
    backgroundColor: Colors.background,
  },
  titleBox: {
    flex: 0.2,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
  cardBox: {
    flex: 0.3,
    borderBottomColor: "black",
  },
  account: {
    flex: 0.2,
    justifyContent: "center",
    borderBottomWidth: 1,
    borderBottomColor: "black",
  },
  accountTitle: {
    fontSize: 20,
    fontWeight: "bold",
  },
  creditCard: {
    flex: 0.8,
    justifyContent: "center",
    alignItems: "center",
  },
  creditCardBox: {
    width: "100%",
    height: "90%",
    borderRadius: 15,
    backgroundColor: "black",
  
    // Ombre pour iOS
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 6 }, // Légèrement plus bas pour l'effet posé
    shadowOpacity: 0.4,
    shadowRadius: 10,
  
    // Ombre pour Android
    elevation: 30, // Augmenté pour un effet plus marqué
  },
  
  creditName: {
    fontSize: 20,
    color: "white",
    fontWeight: "bold",
  },
  creditId: {
    paddingTop: 10,
    fontSize: 20,
    color: "white",
    fontWeight: "bold",
  },
  creditSold: {
    paddingTop: 10,
    fontSize: 20,
    color: "white",
    fontWeight: "bold",
  },
  cardBoxTes: {
    // width: "100%", // Prend toute la largeur du parent
    // backgroundColor: "#6A5ACD", // Dégradé violet (remplacé par une couleur principale)
    // padding: 20, // Espacement interne
    // borderRadius: 15, // Coins arrondis
    // shadowColor: "#000", // Ombre pour l'effet 3D
    // shadowOffset: { width: 0, height: 4 },
    // shadowOpacity: 0.3,
    // shadowRadius: 5,
    // elevation: 5, // Ombre sur Android
    // flexDirection: "column", // Organise les textes en colonne
    // alignItems: "flex-start", // Aligne le texte à gauche
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
  },

  menuBox: {
    flex: 0.5,
  },
  menuTitle: {
    flex: 0.1,
    justifyContent: "center",
    borderBottomWidth: 1,
    borderBottomColor: "black",
  },
  menuHeader: {
    fontSize: 20,
    fontWeight: "bold",
  },
  menu: {
    flex: 0.9,
  },
  menuItems: {
    flex: 0.25,
    flexDirection: "row",
    flexWrap: "nowrap",
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "space-between",
  },
  menuItem: {
    height: "90%",
    width: "30%",
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 5,
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "black",
  },
  menuText: {
    // fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
  menuItemIcon: {
    width: 100,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  scrollContainer: {
    backgroundColor: "white",
    paddingHorizontal: 10,
  },
  logo: {
    position: "absolute",
    top: -20, // Place le logo tout en haut
    width: "100%",
    height: 300, // Garde la grande taille
    resizeMode: "contain",
  },
});
