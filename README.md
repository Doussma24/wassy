# Welcome to your Expo app 👋

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
    npx expo start
   ```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

You can start developing by editing the files inside the **app** directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction).

## Get a fresh project

When you're ready, run:

```bash
npm run reset-project
```

This command will move the starter code to the **app-example** directory and create a blank **app** directory where you can start developing.

## Learn more

To learn more about developing your project with Expo, look at the following resources:

- [Expo documentation](https://docs.expo.dev/): Learn fundamentals, or go into advanced topics with our [guides](https://docs.expo.dev/guides).
- [Learn Expo tutorial](https://docs.expo.dev/tutorial/introduction/): Follow a step-by-step tutorial where you'll create a project that runs on Android, iOS, and the web.

## Join the community

Join our community of developers creating universal apps.

- [Expo on GitHub](https://github.com/expo/expo): View our open source platform and contribute.
- [Discord community](https://chat.expo.dev): Chat with Expo users and ask questions.



#########################################
CARD GPT
#########################################
import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const UserCard = () => {
  return (
    <LinearGradient
      colors={["#4A90E2", "#6A5ACD"]} // Dégradé bleu-violet
      style={styles.card}
    >
      <View style={styles.leftSection}>
        <Text style={styles.name}>David M.</Text>
        <Text style={styles.idLabel}>IDENTIFIANT :</Text>
        <Text style={styles.idValue}>4756-9018</Text>
        <Text style={styles.balance}>4 500.00 CFA</Text>
      </View>
      <Image
        source={{ uri: "https://randomuser.me/api/portraits/men/45.jpg" }} // Remplace par ton image
        style={styles.profileImage}
      />
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  card: {
    width: 280,
    height: 150,
    borderRadius: 15,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 15,
    position: "relative",
  },
  leftSection: {
    flex: 1,
  },
  name: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  idLabel: {
    color: "#D3D3D3", // Gris clair
    fontSize: 12,
    fontWeight: "bold",
  },
  idValue: {
    color: "white",
    fontSize: 14,
    fontWeight: "bold",
    marginBottom: 5,
  },
  balance: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25, // Cercle parfait
    borderWidth: 2,
    borderColor: "white",
  },
});

export default UserCard;
