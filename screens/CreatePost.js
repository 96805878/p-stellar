



// App.js
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import DrawerNavigator from "./navigation/DrawerNavigator";

const CreatePost = () => {
 
return (
    <View style={styles.container}>
    <SafeAreaView style={styles.droidSafeArea} />
    <View style={styles.appTitle}>
    <View style={styles.appIcon)>
    <Image
    source={ require("../assets/logo.png"}}
    style={styles.iconImage}
    ></Image>
    </View>
    <View style={styles.appTitleTextContainer}>
    <Text style={styles.appTitleText}>New Post</Text>
    </View>
    </View>
    <View style={styles.fieldsContainer}>
    <ScrollView>
    <Image
    source={preview_images [this.state.previewImage]}
    style={styles.previewImage}
    ></Image>
  );
};

export default App;
