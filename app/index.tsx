import React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";

import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import Ionicons from '@expo/vector-icons/Ionicons';
import Feather from '@expo/vector-icons/Feather';
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';





export default function Index() {
  const blurhash =
    "|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[";

  return (
    <View>
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
          placeholder={{ blurhash }}
          contentFit="cover"
          transition={1000}
/>
          <Text style={styles.listed}>Just Listed use absolute positioning</Text>
          <Text>Free • Bar Stools</Text>
        </View>
        <View style={styles.card}>
          <Image
            style={styles.image}
            source={require("../assets/images/sweater.jpg")}
            placeholder={{ blurhash }}
            contentFit="cover"
            transition={1000}
          />
          <Text style={styles.listed}>Just Listed use absolute positioning</Text>
          <Text>$1 • Closet Cleanout</Text>
        </View>
        <View style={styles.card}>
          <Image
            style={styles.image}
            source={require("../assets/images/socks.jpg")}
            placeholder={{ blurhash }}
            contentFit="cover"
            transition={1000}
          />
          <Text style={styles.listed}>Just Listed use absolute positioning</Text>
          <Text>$10 • Mens socks $10 pe</Text>
          <Text>...</Text>
        </View>
        <View style={styles.card}>
          <Image
            style={styles.image}
            source={require("../assets/images/plant.jpg")}
            placeholder={{ blurhash }}
            contentFit="cover"
            transition={1000}
          />
          <Text style={styles.listed}>Just Listed use absolute positioning</Text>
          <Text>$10 • Tropical Plants in W </Text>
          <Text>...</Text>
        </View>
        <View style={styles.card}>
          <Image
            style={styles.image}
            source={require("../assets/images/blanket.jpg")}
            placeholder={{ blurhash }}
            contentFit="cover"
            transition={1000}
          />
          <Text>$25 <Text>$30 strikethrough</Text> • Oversized plush bla</Text>
          <Text>...</Text>
        </View>
        <View style={styles.card}>
          <Image
            style={styles.image}
            source={require("../assets/images/pinksweater.jpg")}
            placeholder={{ blurhash }}
            contentFit="cover"
            transition={1000}
          />
          <Text>$10 • woman knit</Text>
        </View>
      </View>

      {/* Nav Bar */}
      <View>
        <Feather name="home" size={24} color="black" />
        <Image
            style={styles.icon}
            source={require("../assets/images/reel.png")}
          />
        <FontAwesome5 name="store" size={24} color="black" />
        <MaterialCommunityIcons name="account-group" size={24} color="black" />
        <FontAwesome name="film" size={22} color="black" />
        <MaterialCommunityIcons name="storefront-outline" size={24} color="black"/>
        <Ionicons name="notifications-outline" size={24} color="black" />
        <Feather name="circle" size={24} color="black" />
      </View>
    </View>
  );
}
  const styles = StyleSheet.create({
    //--------------------------------header
    headline:{
      marginTop: 30,
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
      backgroundColor: "#cfd9ee",
      color: "#2459ca",
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
      color: "#2459ca",
      marginRight: 15,
    },
    //---------------------------------grid + cards 
    gridContainer: {
      flexDirection: "row",
      flexWrap: "wrap",
      justifyContent: "space-between",
      paddingHorizontal: 8,
  },
  card: {
    width: "48%",      
    marginBottom: 16,
  },

  listed: {
    position: "absolute",
    backgroundColor: "white",
  },

  image: {
    width: 200,
    height: 200,
    backgroundColor: "#0553",
  },
  icon: {
    width: 24,
    height: 24,
  },
});


