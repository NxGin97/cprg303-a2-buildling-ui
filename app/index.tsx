import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >

      {/*Header*/}
      <View>
        <Text>hamburgerIcon</Text>
        <Text>Marketplace</Text>
        <Text>messengerIcon</Text>
        <Text>profileIcon</Text>
        <Text>Search icon</Text>
      </View>
      <View>
        <Text>Sell</Text>
        <Text>For you</Text>
        <Text>Local</Text>
        <Text>Categories</Text>
      </View>
      <View>
        <Text>Today's picks</Text>
        <Text>LocationIcon</Text>
        <Text>Calgary, AB</Text>
      </View>
    
    {/*Might have to be flex*/}
      <View> 
        <Text>Today's picks</Text>
        <Text>LocationIcon</Text>
        <Text>Calgary, AB</Text>
      </View>

    {/*Might have to be grid*/}
      <View> 
        <View>
          <Text>Img</Text>
          <Text>Just Listed use absolute positioning</Text>
          <Text>Free • Bar Stools</Text>
        </View>
        <View>
          <Text>Img</Text>
          <Text>Just Listed use absolute positioning</Text>
          <Text>$1 • Closet Cleanout</Text>
        </View>
        <View>
          <Text>Img</Text>
          <Text>Just Listed use absolute positioning</Text>
          <Text>$10 • Mens socks $10 pe</Text>
          <Text>...</Text>
        </View>
        <View>
          <Text>Img</Text>
          <Text>Just Listed use absolute positioning</Text>
          <Text>$10 • Tropical Plants in W </Text>
          <Text>...</Text>
        </View>
        <View>
          <Text>Img</Text>
          <Text>$25 <Text>$30 strikethrough</Text> • Oversized plush bla</Text>
          <Text>...</Text>
        </View>
        <View>
          <Text>Img</Text>
          <Text>$10 • woman knit</Text>
        </View>
      </View>

    {/*Nav Bar*/}
      <View>
        <Text>HomeIcon</Text>
        <Text>ReelsIcon</Text>
        <Text>SelectedMarketIcon</Text>
        <Text>GroupIcon</Text>
        <Text>NotificationIcon</Text>
        <Text>ProfileIcon</Text>
      </View>
    </View>
  );
}
