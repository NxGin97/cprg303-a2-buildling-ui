import React from "react";
import { Image } from "expo-image";
import { Pressable, StyleSheet, Text, View, Linking, Alert } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
// import { ScrollView } from "react-native";

import Feather from "@expo/vector-icons/Feather";
import { FontAwesome } from "@expo/vector-icons";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import Ionicons from "@expo/vector-icons/Ionicons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function Index() {
  return (
    <SafeAreaView style={{flex:1  }}>
      {/* <ScrollView> Only add if you want it to look exact to screenshot of iPhone14 instead of android*/}
      {/* Header */}
      <View style={styles.headline}>
        <Feather name="menu" size={24} color="black" />
        <Text style={styles.marketplaceText}>Marketplace</Text>
        <FontAwesome6 name="facebook-messenger" size={24} color="black" />
        <Ionicons name="person-outline" size={24} color="black" />
        <Ionicons name="search-outline" size={24} color="black" />
      </View>

      {/* Tabs */}
      <View style={styles.tabs}>
        <Text style={styles.tabItem}>Sell</Text>
        <Text style={[styles.tabItem, styles.tabItemSelected]}>For you</Text>
        <Text style={styles.tabItem}>Local</Text>
        <Text style={styles.tabItem}>Categories</Text>
      </View>

      {/* Section Head */}
      <View style={styles.sectionHead}>
        <Text style={styles.today}>Today's picks</Text>
        <View style={styles.location}>
          <FontAwesome6 name="location-dot" size={15} color="#2459ca" />
          <Text style={styles.calgary}>Calgary, AB</Text>
        </View>
      </View>

      {/*Grid Images*/}
      <View style={styles.gridContainer}>
        <View style={styles.card}>
          <Image
            style={styles.image}
            source={require("../assets/images/chairs.jpg")}
            contentFit="cover"
          />
          <Text style={styles.listed}>Just Listed</Text>
          <Text style={[styles.description, styles.descriptionLeft]}>
            Free • Bar Stools
          </Text>
        </View>
        <View style={styles.card}>
          <Image
            style={styles.image}
            source={require("../assets/images/sweater.jpg")}
            contentFit="cover"
          />
          <Text style={styles.listed}>Just Listed</Text>
          <Text style={styles.description}>$1 • Closet Cleanout</Text>
        </View>
        <View style={styles.card}>
          <Image
            style={styles.image}
            source={require("../assets/images/socks.jpg")}
            contentFit="cover"
          />
          <Text style={styles.listed}>Just Listed</Text>
          <View style={styles.descContainer}>
            <Text style={[styles.description, styles.descriptionLeft]}>
              $10 • Mens socks $10 pe
            </Text>
            <Text style={styles.eclipse}>...</Text>
          </View>
        </View>
        <View style={styles.card}>
          <Image
            style={styles.image}
            source={require("../assets/images/plant.jpg")}
            contentFit="cover"
          />
          <Text style={styles.listed}>Just Listed</Text>
          <View style={styles.descContainer}>
            <Text style={styles.description}>$10 • Tropical Plants in W </Text>
            <Text style={styles.eclipse}>...</Text>
          </View>
        </View>
        <View style={styles.card}>
          <Image
            style={styles.image}
            source={require("../assets/images/blanket.jpg")}
            contentFit="cover"
          />
          <View style={styles.descContainer}>
            <Text style={[styles.description, styles.descriptionLeft]}>
              $25 <Text style={styles.strike}>$30</Text> • Oversized plu
            </Text>
            <Text style={styles.eclipse}>...</Text>
          </View>
        </View>
        <View style={styles.card}>
          <Image
            style={styles.image}
            source={require("../assets/images/pinksweater.jpg")}
            contentFit="cover"
          />
          <Text style={styles.description}>$10 • woman knit</Text>
        </View>
      </View>

      {/* Nav Bar */}
      <View style={styles.navContainer}>
        <Feather name="home" size={24} color="black" />
        <FontAwesome
          style={{ alignItems: "center" }}
          name="film"
          size={22}
          color="black"
        />
        <View style={styles.navSelected}>
          <MaterialCommunityIcons
            name="storefront-outline"
            size={26}
            color="#1b59dd"
          />
        </View>
        <MaterialCommunityIcons
          name="account-group-outline"
          size={26}
          color="black"
        />
        <Ionicons name="notifications-outline" size={25} color="black" />
        <View>
          <Image
            style={styles.profilePic}
            source={require("../assets/images/profilepic.jpg")}
            contentFit="cover"
          />
          <Feather name="circle" size={26} color="black" />
        </View>
      </View>
      
      {/* Im funny */}
      <Pressable onPress = {() => {
        Alert.alert("Alert", "Alert Button Pressed");
        Linking.openURL("https://youtu.be/dQw4w9WgXcQ?si=YZkrDWk-3xINUDVv");
        }}>
        <View style={styles.alert}>
          <Text style={styles.alertText}>ALERT</Text>
        </View>
      </Pressable>

      {/* </ScrollView> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24,
  },
  //--------------------------------header
  headline: {
    marginTop: 5,
    flexDirection: "row",
    alignItems: "baseline",
    gap: 15,
    marginLeft: 15,
    marginBottom: 10,
  },
  marketplaceText: {
    fontWeight: 800,
    fontSize: 24,
    marginRight: 75,
  },

  //--------------------------navigation tabs
  tabs: {
    flexDirection: "row",
    gap: 8,
    marginLeft: 17,
    borderRadius: 3,
  },
  tabItem: {
    paddingVertical: 6,
    paddingHorizontal: 12,
    fontWeight: 700,
  },
  tabItemSelected: {
    backgroundColor: "#dce2f0",
    color: "#1b59dd",
    borderRadius: 15,
  },

  //-----------------------------that tiny spot right underneath the tabs
  sectionHead: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "baseline",
    paddingHorizontal: 13,
    marginTop: 10,
    marginBottom: 6,
  },

  location: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },

  today: {
    fontSize: 16,
    fontWeight: 700,
  },

  calgary: {
    fontSize: 14,
    color: "#1b59dd",
    marginRight: 15,
  },

  //---------------------------------grid + cards
  gridContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  card: {
    width: "48%",
  },

  listed: {
    position: "absolute",
    backgroundColor: "white",
    borderRadius: 5,
    top: 12,
    left: 10,
    fontSize: 12,
    fontWeight: 400,
    paddingVertical: 1,
    paddingHorizontal: 4,
  },

  image: {
    width: 208,
    height: 208,
    borderColor: "rgba(187, 180, 162, 0.75)",
    borderWidth: 0.5,
  },

  //--------------------------description styling
  descContainer: {
    flexDirection: "row",
  },

  description: {
    marginVertical: 7,
    fontSize: 13,
    fontWeight: 500,
  },

  descriptionLeft: {
    marginLeft: 12,
  },

  strike: {
    textDecorationLine: "line-through",
    color: "#747373",
  },

  eclipse: {
    marginTop: 4.6,
    fontSize: 15,
    fontWeight: 800,
  },

  navContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    width: "95%",
    height: 45,
    left: 12,
    position: "absolute",
    backgroundColor: "white",
    borderRadius: 20,
    bottom: 35,
  },

  navSelected: {
    width: 50,
    padding: 5,
    backgroundColor: "#dce2f0",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },

  profilePic: {
    position: "absolute",
    top: 1,
    left: 1, 
    width: 24,
    height: 24,
    borderColor: "rgba(187, 180, 162, 0.75)",
    borderWidth: 0.5,
    borderRadius: 50,
  },

  alert: {
    position: "absolute",
    right: 20,
    bottom: 35,
    padding: 8,
    zIndex: 6,
    borderRadius: 50,
    backgroundColor: "#b61313",
  },

  alertText: {
    color: "white",
    fontWeight: 700,
    paddingHorizontal: 5,
  }
});
