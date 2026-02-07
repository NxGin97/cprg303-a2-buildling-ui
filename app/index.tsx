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
      {/* Header */}
      <View style={styles.headline}>
        <Feather name="menu" size={30} color="black" />
        <Text style={styles.marketplaceText}>Marketplace</Text>
        <View style={styles.iconGap}>
          <FontAwesome6 name="facebook-messenger" size={24} color="black" />
          <Ionicons name="person-outline" size={24} color="black" />
          <Ionicons name="search-outline" size={24} color="black" />
        </View>
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
          <Text style={styles.listed}>Just listed</Text>
          <Text style={[styles.description, styles.descriptionLeft]}>
            Free 
            <Text style={styles.dot}> • </Text>
            Bar stools
          </Text>
        </View>
        <View style={styles.card}>
          <Image
            style={styles.image}
            source={require("../assets/images/sweater.jpg")}
            contentFit="cover"
          />
          <Text style={styles.listed}>Just listed</Text>
          <Text style={styles.description}>$1 
          <Text style={styles.dot}> • </Text>
          Closet Cleanout</Text>
        </View>
        <View style={styles.card}>
          <Image
            style={styles.image}
            source={require("../assets/images/socks.jpg")}
            contentFit="cover"
          />
          <Text style={styles.listed}>Just listed</Text>
          <View style={styles.descContainer}>
            <Text style={[styles.description, styles.descriptionLeft]}>
              $10
            <Text style={styles.dot}> • </Text>
            Mens socks $10 pe
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
          <Text style={styles.listed}>Just listed</Text>
          <View style={styles.descContainer}>
            <Text style={styles.description}>$10
            <Text style={styles.dot}> • </Text>
            Tropical Plants in W </Text>
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
            <Text style={[styles.description, styles.descriptionLeft]}> $25 
              <Text style={styles.strike}>$30</Text>
              <Text style={styles.dot}> • </Text>
            Oversized plu
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
          <Text style={styles.description}>$10
          <Text style={styles.dot}> • </Text>
          woman knit</Text>
        </View>
      </View>

      {/* Nav Bar */}
      <View style={styles.navWrapper}>

        <View style={styles.navContainer}>
          <Feather name="home" size={28} color="black" />
          <FontAwesome style={{ alignItems: "center" }} name="film" size={22} color="black"
            />
          <View style={styles.navSelected}>
            <MaterialCommunityIcons name="storefront-outline" size={28} color="#2b65e0"/>
          </View>
          <MaterialCommunityIcons name="account-group-outline" size={28} color="black"/>
          <Ionicons name="notifications-outline" size={28} color="black" />
          <View>
            <Image
              style={styles.profilePic}
              source={require("../assets/images/profilepic.jpg")}
              contentFit="cover"
              />
            <Feather name="circle" size={28} color="black" />
          </View>
        </View>
        
        {/* Alert button */}
        <Pressable onPress = {() => {
          Alert.alert("Alert", "Alert Button Pressed");
          Linking.openURL("https://youtu.be/2qBlE2-WL60?si=spdu69yFiOaCq5YN");
        }}>
          <View style={styles.alert}>
            <Text style={styles.alertText}>ALERT</Text>
          </View>
        </Pressable>
      </View>
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
    marginTop: 8,
    flexDirection: "row",
    alignItems: "baseline",
    gap: 10,
    marginLeft: 10,
    marginBottom: 12,
  },
  iconGap: {
    flexDirection: "row",
    gap: 15, 
  },
  marketplaceText: {
    fontWeight: 700,
    fontSize: 30,
    marginRight: 45,
  },

  //--------------------------navigation tabs
  tabs: {
    flexDirection: "row",
    gap: 5,
    marginLeft: 13,
    borderRadius: 3,
  },
  tabItem: {
    paddingVertical: 9,
    paddingHorizontal: 11.5,
    fontWeight: 600,
    fontSize: 15,
  },
  tabItemSelected: {
    backgroundColor: "rgba(183, 212, 238, 0.4)",
    color: "#2b65e0",
    borderRadius: 18,
  },

  //-----------------------------that tiny spot right underneath the tabs
  sectionHead: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "baseline",
    paddingHorizontal: 13,
    marginTop: 15,
    marginBottom: 8,
  },

  location: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },

  today: {
    fontSize: 17,
    fontWeight: 700,
  },

  calgary: {
    fontSize: 15,
    color: "#2b65e0",
  },

  //---------------------------------grid + cards
  gridContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between"
  },
  card: {
    width: "49.5%",
  },

  listed: {
    position: "absolute",
    backgroundColor: "white",
    borderRadius: 5,
    top: 12,
    left: 10,
    fontSize: 12,
    fontWeight: 400,
    paddingTop: 1,
    paddingBottom: 2,
    paddingHorizontal: 4,
  },

  image: {
    width: "100%",
    aspectRatio: 1,
    borderColor: "rgba(168, 164, 155, 0.5)",
    borderWidth: 0.5,
  },

  //--------------------------description styling
  descContainer: {
    flexDirection: "row",
  },

  description: {
    marginVertical: 9,
    fontSize: 15,
    fontWeight: 500,
  },
  dot: {
    fontSize: 11,
  },

  descriptionLeft: {
    marginLeft: 12,
  },

  strike: {
    textDecorationLine: "line-through",
    color: "#747373",
  },

  eclipse: {
    marginTop: 9,
    fontSize: 14,
    fontWeight: 700,
  },

  // ----------------navigation bar
  navWrapper: {
    position: "absolute",
    bottom: 22,
    left: 12,
    width: "94%",
  },
  navContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    height: 50,
    backgroundColor: "white",
    borderRadius: 40,
    borderWidth: 1,
    borderColor: "rgba(000,000,000, 0.1)",
  },

  navSelected: {
    width: 50,
    padding: 5,
    backgroundColor: "rgba(183, 212, 238, 0.4)",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },

  profilePic: {
    position: "absolute",
    top: 2,
    left: 2, 
    width: 24,
    height: 24,
    borderColor: "rgba(187, 180, 162, 0.75)",
    borderWidth: 0.5,
    borderRadius: 50,
  },

  //--------------------------------------- alert button
  // alert: {
    
  // },
  alert: {
    position: "absolute",
    right: 10,
    bottom: 55,
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 50,
    backgroundColor: "rgba(224,003,003,0.95)",
    zIndex: 10,
  },

  alertText: {
    color: "white",
    fontWeight: 700,
    paddingHorizontal: 5,
  },

});
