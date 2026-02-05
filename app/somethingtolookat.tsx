import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";

export default function StylingLayoutDemo() {
  return (
    <ScrollView contentContainerStyle={rootStyles.container}>
      <Text style={rootStyles.bigTitle}>Styling & Layout Demo</Text>

      {/* ========================================================= */}
      {/* Styling Fundamentals */}
      {/* ========================================================= */}
      <SectionHeader title="Styling Fundamentals" />

      <PropertyHeader title="How does styling work in React Native?" />
      <InlineStylesBasicDemo />

      <PropertyHeader title="StyleSheet.create({ ... })" />
      <StyleSheetCreateBasicDemo />

      <PropertyHeader title="Style Composition (style arrays + falsy ignored)" />
      <StyleArrayCompositionDemo />

      {/* ========================================================= */}
      {/* Sizing & Spacing */}
      {/* ========================================================= */}
      <SectionHeader title="Sizing & Spacing" />

      <PropertyHeader title="First: Relationships between elements (parents/children/siblings)" />
      <FamilyRelationshipsMiniDemo />

      <PropertyHeader title="Fixed Sizes (width/height)" />
      <FixedSize_NoWidthHeightDemo />
      <FixedSize_WidthHeightSmallDemo />
      <FixedSize_WidthHeightLargeDemo />
      <FixedSize_WidthHeightZeroDemo />

      <PropertyHeader title="Relative Sizes (% of parent)" />
      <RelativeSize_ParentSized_50PercentDemo />
      <RelativeSize_ParentSized_100PercentDemo />
      <RelativeSize_ParentSized_0PercentDemo />

      <PropertyHeader title="Min/Max Sizing (minWidth/minHeight/maxWidth/maxHeight)" />
      <MinMaxSizing_MinWidthDemo />
      <MinMaxSizing_MaxWidthDemo />
      <MinMaxSizing_MinHeightDemo />

      {/* ========================================================= */}
      {/* Flexbox */}
      {/* ========================================================= */}
      <SectionHeader title="Flexbox (React Native’s core layout system)" />

      <PropertyHeader title='flexDirection (default: "column")' />
      <FlexDirection_ColumnDemo />
      <FlexDirection_RowDemo />
      <FlexDirection_ColumnReverseDemo />
      <FlexDirection_RowReverseDemo />

      <PropertyHeader title="justifyContent (align along main axis)" />
      <JustifyContent_FlexStartDemo />
      <JustifyContent_CenterDemo />
      <JustifyContent_FlexEndDemo />
      <JustifyContent_SpaceBetweenDemo />
      <JustifyContent_SpaceAroundDemo />
      <JustifyContent_SpaceEvenlyDemo />

      <PropertyHeader title="alignItems (align along cross axis)" />
      <AlignItems_Stretch_AllHaveHeightsDemo />
      <AlignItems_Stretch_RemoveHeightFromADemo />
      <AlignItems_FlexStartDemo />
      <AlignItems_CenterDemo />
      <AlignItems_FlexEndDemo />
      <AlignItems_BaselineDemo />

      <PropertyHeader title="Relative Sizing: flex (space ratios among siblings)" />
      <FlexRatios_OneTwoOneDemo />
      <FlexRatios_ZeroOneTwoDemo />
      <FlexFillSingleChildDemo />

      <PropertyHeader title='Handling Overflow: flexWrap ("nowrap" vs "wrap")' />
      <FlexWrap_NoWrapDemo />
      <FlexWrap_WrapDemo />

      {/* ========================================================= */}
      {/* Other Layout Features */}
      {/* ========================================================= */}
      <SectionHeader title="Other Layout Features" />

      <PropertyHeader title='display ("flex" default, "none", "contents")' />
      <Display_FlexDefaultDemo />
      <Display_NoneDemo />
      <Display_ContentsDemo />

      <PropertyHeader title='position ("relative" default vs "absolute")' />
      <Position_Relative_TopLeftDemo />
      <Position_Absolute_TopDemo />

      <PropertyHeader title="top / left / right / bottom (numbers or %)" />
      <Offsets_Relative_NumberDemo />
      <Offsets_Relative_PercentDemo />
      <Offsets_Absolute_TopRightDemo />
      <Offsets_Absolute_LeftRightStretchDemo />

      <PropertyHeader title="Spacing: padding" />
      <Padding_NormalDemo />
      <Padding_ZeroDemo />

      <PropertyHeader title="Spacing: margin" />
      <Margin_NormalDemo />
      <Margin_ZeroDemo />

      <PropertyHeader title="Spacing: gap" />
      <Gap_NormalDemo />
      <Gap_ZeroDemo />

      {/* ========================================================= */}
      {/* Basic Visual Styling */}
      {/* ========================================================= */}
      <SectionHeader title="Basic Visual Styling" />

      <PropertyHeader title="Borders + borderRadius" />
      <Borders_RadiusDefaultDemo />
      <Borders_Radius32Demo />
      <Borders_Radius0Demo />

      <PropertyHeader title="backgroundColor + opacity" />
      <Opacity_DefaultNotSetDemo />
      <Opacity_0Demo />
      <Opacity_1Demo />

      <PropertyHeader title="Text styling (fontSize, fontWeight, color)" />
      <TextStyling_DefaultDemo />
      <TextStyling_StyledDemo />
    </ScrollView>
  );
}

const rootStyles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    gap: 14,
    paddingVertical: 50,
  },
  bigTitle: {
    fontSize: 22,
    fontWeight: "900",
  },
  smallNote: {
    fontSize: 12,
    opacity: 0.7,
    marginBottom: 4,
  },
});

/* ========================================================= */
/* Shared UI helpers                                         */
/* ========================================================= */

function SectionHeader({ title }: { title: string }) {
  return (
    <View style={sectionHeaderStyles.wrap}>
      <Text style={sectionHeaderStyles.text}>{title}</Text>
    </View>
  );
}
const sectionHeaderStyles = StyleSheet.create({
  wrap: {
    marginTop: 10,
    paddingTop: 10,
    borderTopWidth: 2,
  },
  text: {
    fontSize: 18,
    fontWeight: "900",
  },
});

function PropertyHeader({ title }: { title: string }) {
  return (
    <View style={propertyHeaderStyles.wrap}>
      <Text style={propertyHeaderStyles.text}>{title}</Text>
    </View>
  );
}
const propertyHeaderStyles = StyleSheet.create({
  wrap: {
    marginTop: 4,
  },
  text: {
    fontSize: 14,
    fontWeight: "800",
    opacity: 0.85,
  },
});

/* ========================================================= */
/* Styling Fundamentals demos                                 */
/* ========================================================= */

function InlineStylesBasicDemo() {
  return (
    <View style={{ gap: 8 }}>
      <Text style={{ fontSize: 12, opacity: 0.75 }}>
        Inline style objects (style={"{ fontSize: 12, opacity: 0.75 }"})
      </Text>

      <View
        style={{
          borderWidth: 2,
          borderRadius: 1,
          padding: 12,
          backgroundColor: "#f3f4f6",
        }}
      >
        <Text style={{ fontSize: 16, fontWeight: "900" }}>
          Inline Styled Card
        </Text>
        <Text style={{ fontSize: 12, opacity: 0.75 }}>
          React Native uses style objects, not CSS.
        </Text>
      </View>
    </View>
  );
}

function StyleSheetCreateBasicDemo() {
  return (
    <View style={ssCreateStyles.wrap}>
      <Text style={ssCreateStyles.note}>
        Styles created once, validated, and organized.
      </Text>

      <View style={ssCreateStyles.card}>
        <Text style={ssCreateStyles.title}>StyleSheet Card</Text>
        <Text style={ssCreateStyles.sub}>
          Same result as inline styles, but cleaner + faster.
        </Text>
      </View>
    </View>
  );
}
const ssCreateStyles = StyleSheet.create({
  wrap: { gap: 8 },
  note: { fontSize: 12, opacity: 0.5 },
  card: {
    borderWidth: 2,
    borderRadius: 12,
    padding: 12,
    backgroundColor: "#ecfccb",
  },
  title: { fontSize: 16, fontWeight: "900" },
  sub: { fontSize: 12, opacity: 0.75 },
});

function StyleArrayCompositionDemo() {
  const selected = true; // try setting this to false and see what happens
  return (
    <View style={styleArrayStyles.wrap}>
      <Text style={styleArrayStyles.note}>
        Later styles override earlier ones. Falsy values are ignored.
      </Text>

      <View
        style={[
          styleArrayStyles.cardBase,
          styleArrayStyles.cardAlways,
          selected && styleArrayStyles.cardSelected,
          false && styleArrayStyles.thisIsIgnored,
        ]}
      >
        <Text style={styleArrayStyles.title}>Selected: {String(selected)}</Text>
        <Text style={styleArrayStyles.sub}>
          borderColor changes because the later style wins.
        </Text>
      </View>
    </View>
  );
}
const styleArrayStyles = StyleSheet.create({
  wrap: { gap: 8 },
  note: { fontSize: 12, opacity: 0.75 },
  cardBase: {
    borderWidth: 2,
    borderRadius: 12,
    padding: 12,
  },
  cardAlways: {
    backgroundColor: "#ecfeff",
  },
  cardSelected: {
    borderColor: "#0ea5e9",
    backgroundColor: "#cffafe",
  },
  thisIsIgnored: {
    backgroundColor: "hotpink",
  },
  title: { fontSize: 16, fontWeight: "900" },
  sub: { fontSize: 12, opacity: 0.75 },
});

/* ========================================================= */
/* Sizing & Spacing demos                                     */
/* ========================================================= */

function FamilyRelationshipsMiniDemo() {
  return (
    <View style={familyStyles.card}>
      <Text style={familyStyles.h}>Parent</Text>
      <View style={familyStyles.parent}>
        <View style={familyStyles.child}>
          <Text style={familyStyles.t}>Child A</Text>
        </View>
        <View style={familyStyles.child}>
          <Text style={familyStyles.t}>Child B</Text>
        </View>
        <View style={familyStyles.child}>
          <Text style={familyStyles.t}>Child C</Text>
        </View>
      </View>
      <Text style={familyStyles.note}>All 3 Children are siblings</Text>
    </View>
  );
}
const familyStyles = StyleSheet.create({
  card: { gap: 8 },
  h: { fontSize: 12, fontWeight: "900" },
  note: { fontSize: 12, opacity: 0.7 },
  parent: {
    borderWidth: 2,
    borderRadius: 12,
    padding: 10,
    flexDirection: "row",
    gap: 8,
  },
  child: {
    borderWidth: 1,
    borderRadius: 10,
    padding: 8,
    backgroundColor: "#f3f4f6",
  },
  t: { fontSize: 12, fontWeight: "800" },
});

/* Fixed sizes */

function FixedSize_NoWidthHeightDemo() {
  return (
    <View style={fixedNoWHStyles.wrap}>
      <Text style={fixedNoWHStyles.note}>
        No width/height set (defaults depend on parent/layout)
      </Text>
      <View style={fixedNoWHStyles.parent}>
        <View style={fixedNoWHStyles.box}>
          <Text style={fixedNoWHStyles.text}>Box</Text>
        </View>
      </View>
    </View>
  );
}
const fixedNoWHStyles = StyleSheet.create({
  wrap: { gap: 8 },
  note: { fontSize: 12, opacity: 0.75 },
  parent: {
    borderWidth: 2,
    borderRadius: 12,
    padding: 10,
    width: 260,
  },
  box: {
    borderWidth: 2,
    borderRadius: 10,
    padding: 8,
    backgroundColor: "#fff7ed",
  },
  text: { fontSize: 12, fontWeight: "900" },
});

function FixedSize_WidthHeightSmallDemo() {
  return (
    <View style={fixedSmallStyles.wrap}>
      <Text style={fixedSmallStyles.note}>width: 70, height: 40 (small)</Text>
      <View style={fixedSmallStyles.parent}>
        <View style={fixedSmallStyles.box}>
          <Text style={fixedSmallStyles.text}>70×40</Text>
        </View>
      </View>
    </View>
  );
}
const fixedSmallStyles = StyleSheet.create({
  wrap: { gap: 8 },
  note: { fontSize: 12, opacity: 0.75 },
  parent: {
    borderWidth: 2,
    borderRadius: 12,
    padding: 10,
    width: 260,
  },
  box: {
    width: 70,
    height: 40,
    borderWidth: 2,
    borderRadius: 10,
    padding: 6,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#dcfce7",
  },
  text: { fontSize: 12, fontWeight: "900" },
});

function FixedSize_WidthHeightLargeDemo() {
  return (
    <View style={fixedLargeStyles.wrap}>
      <Text style={fixedLargeStyles.note}>width: 180, height: 80 (larger)</Text>
      <View style={fixedLargeStyles.parent}>
        <View style={fixedLargeStyles.box}>
          <Text style={fixedLargeStyles.text}>180×80</Text>
        </View>
      </View>
    </View>
  );
}
const fixedLargeStyles = StyleSheet.create({
  wrap: { gap: 8 },
  note: { fontSize: 12, opacity: 0.75 },
  parent: {
    borderWidth: 2,
    borderRadius: 12,
    padding: 10,
    width: 260,
  },
  box: {
    width: 180,
    height: 80,
    borderWidth: 2,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#e0f2fe",
  },
  text: { fontSize: 12, fontWeight: "900" },
});

function FixedSize_WidthHeightZeroDemo() {
  return (
    <View style={fixedZeroStyles.wrap}>
      <Text style={fixedZeroStyles.note}>width: 0, height: 0</Text>
      <View style={fixedZeroStyles.parent}>
        <View style={fixedZeroStyles.box}>
          <Text style={fixedZeroStyles.text}>You won’t see this box</Text>
        </View>
      </View>
    </View>
  );
}
const fixedZeroStyles = StyleSheet.create({
  wrap: { gap: 8 },
  note: { fontSize: 12, opacity: 0.75 },
  parent: {
    borderWidth: 2,
    borderRadius: 12,
    padding: 10,
    width: 260,
  },
  box: {
    width: 0,
    height: 0,
    borderWidth: 2,
    borderRadius: 10,
    backgroundColor: "#fee2e2",
    overflow: "hidden",
  },
  text: { fontSize: 12, fontWeight: "900" },
});

/* Relative sizes */

function RelativeSize_ParentSized_50PercentDemo() {
  return (
    <View style={rel50Styles.wrap}>
      <Text style={rel50Styles.note}>
        Child width: "50%" (parent has width)
      </Text>
      <View style={rel50Styles.parent}>
        <View style={rel50Styles.child}>
          <Text style={rel50Styles.text}>50%</Text>
        </View>
      </View>
    </View>
  );
}
const rel50Styles = StyleSheet.create({
  wrap: { gap: 8 },
  note: { fontSize: 12, opacity: 0.75 },
  parent: {
    width: 260,
    height: 60,
    borderWidth: 2,
    borderRadius: 12,
    padding: 10,
  },
  child: {
    width: "50%",
    height: "100%",
    borderWidth: 2,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fae8ff",
  },
  text: { fontSize: 12, fontWeight: "900" },
});

function RelativeSize_ParentSized_100PercentDemo() {
  return (
    <View style={rel100Styles.wrap}>
      <Text style={rel100Styles.note}>
        Child width: "100%" (fills parent content box)
      </Text>
      <View style={rel100Styles.parent}>
        <View style={rel100Styles.child}>
          <Text style={rel100Styles.text}>100%</Text>
        </View>
      </View>
    </View>
  );
}
const rel100Styles = StyleSheet.create({
  wrap: { gap: 8 },
  note: { fontSize: 12, opacity: 0.75 },
  parent: {
    width: 260,
    height: 60,
    borderWidth: 2,
    borderRadius: 12,
    padding: 10,
  },
  child: {
    width: "100%",
    height: "100%",
    borderWidth: 2,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffedd5",
  },
  text: { fontSize: 12, fontWeight: "900" },
});

function RelativeSize_ParentSized_0PercentDemo() {
  return (
    <View style={rel0Styles.wrap}>
      <Text style={rel0Styles.note}>Child width: "0%"</Text>
      <View style={rel0Styles.parent}>
        <View style={rel0Styles.child}>
          <Text style={rel0Styles.text}>0%</Text>
        </View>
      </View>
    </View>
  );
}
const rel0Styles = StyleSheet.create({
  wrap: { gap: 8 },
  note: { fontSize: 12, opacity: 0.75 },
  parent: {
    width: 260,
    height: 60,
    borderWidth: 2,
    borderRadius: 12,
    padding: 10,
  },
  child: {
    width: "0%",
    height: "100%",
    borderWidth: 2,
    borderRadius: 10,
    backgroundColor: "#dcfce7",
    overflow: "hidden",
  },
  text: { fontSize: 12, fontWeight: "900" },
});

/* Min/Max sizing */

function MinMaxSizing_MinWidthDemo() {
  return (
    <View style={minWStyles.wrap}>
      <Text style={minWStyles.note}>
        minWidth: 160 keeps it from getting too small
      </Text>
      <View style={minWStyles.parent}>
        <View style={minWStyles.child}>
          <Text style={minWStyles.text}>minWidth 160</Text>
        </View>
      </View>
    </View>
  );
}
const minWStyles = StyleSheet.create({
  wrap: { gap: 8 },
  note: { fontSize: 12, opacity: 0.75 },
  parent: {
    width: 200,
    borderWidth: 2,
    borderRadius: 12,
    padding: 10,
  },
  child: {
    width: 80,
    minWidth: 160,
    height: 40,
    borderWidth: 2,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#e0e7ff",
  },
  text: { fontSize: 12, fontWeight: "900" },
});

function MinMaxSizing_MaxWidthDemo() {
  return (
    <View style={maxWStyles.wrap}>
      <Text style={maxWStyles.note}>
        maxWidth: 120 limits it even if width is huge
      </Text>
      <View style={maxWStyles.parent}>
        <View style={maxWStyles.child}>
          <Text style={maxWStyles.text}>maxWidth 120</Text>
        </View>
      </View>
    </View>
  );
}
const maxWStyles = StyleSheet.create({
  wrap: { gap: 8 },
  note: { fontSize: 12, opacity: 0.75 },
  parent: {
    width: 260,
    borderWidth: 2,
    borderRadius: 12,
    padding: 10,
  },
  child: {
    width: 999,
    maxWidth: 120,
    height: 40,
    borderWidth: 2,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#cffafe",
  },
  text: { fontSize: 12, fontWeight: "900" },
});

function MinMaxSizing_MinHeightDemo() {
  return (
    <View style={minHStyles.wrap}>
      <Text style={minHStyles.note}>
        minHeight: 70 forces height even if height is small
      </Text>
      <View style={minHStyles.parent}>
        <View style={minHStyles.child}>
          <Text style={minHStyles.text}>minHeight 70</Text>
        </View>
      </View>
    </View>
  );
}
const minHStyles = StyleSheet.create({
  wrap: { gap: 8 },
  note: { fontSize: 12, opacity: 0.75 },
  parent: {
    width: 260,
    borderWidth: 2,
    borderRadius: 12,
    padding: 10,
  },
  child: {
    height: 20,
    minHeight: 70,
    borderWidth: 2,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fef9c3",
  },
  text: { fontSize: 12, fontWeight: "900" },
});

/* ========================================================= */
/* Flexbox demos                                              */
/* ========================================================= */

/* flexDirection */

function FlexDirection_ColumnDemo() {
  return (
    <View style={fdColStyles.wrap}>
      <Text style={fdColStyles.note}>flexDirection: "column" (default)</Text>
      <View style={fdColStyles.parent}>
        <View style={fdColStyles.boxA}>
          <Text style={fdColStyles.text}>A</Text>
        </View>
        <View style={fdColStyles.boxB}>
          <Text style={fdColStyles.text}>B</Text>
        </View>
        <View style={fdColStyles.boxC}>
          <Text style={fdColStyles.text}>C</Text>
        </View>
      </View>
    </View>
  );
}
const fdColStyles = StyleSheet.create({
  wrap: { gap: 8 },
  note: { fontSize: 12, opacity: 0.75 },
  parent: {
    borderWidth: 2,
    borderRadius: 12,
    padding: 10,
    gap: 8,
    flexDirection: "column",
  },
  boxA: {
    borderWidth: 2,
    borderRadius: 10,
    padding: 10,
    backgroundColor: "#e0f2fe",
  },
  boxB: {
    borderWidth: 2,
    borderRadius: 10,
    padding: 10,
    backgroundColor: "#dcfce7",
  },
  boxC: {
    borderWidth: 2,
    borderRadius: 10,
    padding: 10,
    backgroundColor: "#fee2e2",
  },
  text: { fontSize: 12, fontWeight: "900" },
});

function FlexDirection_RowDemo() {
  return (
    <View style={fdRowStyles.wrap}>
      <Text style={fdRowStyles.note}>flexDirection: "row"</Text>
      <View style={fdRowStyles.parent}>
        <View style={fdRowStyles.boxA}>
          <Text style={fdRowStyles.text}>A</Text>
        </View>
        <View style={fdRowStyles.boxB}>
          <Text style={fdRowStyles.text}>B</Text>
        </View>
        <View style={fdRowStyles.boxC}>
          <Text style={fdRowStyles.text}>C</Text>
        </View>
      </View>
    </View>
  );
}
const fdRowStyles = StyleSheet.create({
  wrap: { gap: 8 },
  note: { fontSize: 12, opacity: 0.75 },
  parent: {
    borderWidth: 2,
    borderRadius: 12,
    padding: 10,
    gap: 8,
    flexDirection: "row",
  },
  boxA: {
    borderWidth: 2,
    borderRadius: 10,
    padding: 10,
    backgroundColor: "#e0f2fe",
  },
  boxB: {
    borderWidth: 2,
    borderRadius: 10,
    padding: 10,
    backgroundColor: "#dcfce7",
  },
  boxC: {
    borderWidth: 2,
    borderRadius: 10,
    padding: 10,
    backgroundColor: "#fee2e2",
  },
  text: { fontSize: 12, fontWeight: "900" },
});

function FlexDirection_ColumnReverseDemo() {
  return (
    <View style={fdColRevStyles.wrap}>
      <Text style={fdColRevStyles.note}>flexDirection: "column-reverse"</Text>
      <View style={fdColRevStyles.parent}>
        <View style={fdColRevStyles.boxA}>
          <Text style={fdColRevStyles.text}>A</Text>
        </View>
        <View style={fdColRevStyles.boxB}>
          <Text style={fdColRevStyles.text}>B</Text>
        </View>
        <View style={fdColRevStyles.boxC}>
          <Text style={fdColRevStyles.text}>C</Text>
        </View>
      </View>
    </View>
  );
}
const fdColRevStyles = StyleSheet.create({
  wrap: { gap: 8 },
  note: { fontSize: 12, opacity: 0.75 },
  parent: {
    borderWidth: 2,
    borderRadius: 12,
    padding: 10,
    gap: 8,
    flexDirection: "column-reverse",
  },
  boxA: {
    borderWidth: 2,
    borderRadius: 10,
    padding: 10,
    backgroundColor: "#e0f2fe",
  },
  boxB: {
    borderWidth: 2,
    borderRadius: 10,
    padding: 10,
    backgroundColor: "#dcfce7",
  },
  boxC: {
    borderWidth: 2,
    borderRadius: 10,
    padding: 10,
    backgroundColor: "#fee2e2",
  },
  text: { fontSize: 12, fontWeight: "900" },
});

function FlexDirection_RowReverseDemo() {
  return (
    <View style={fdRowRevStyles.wrap}>
      <Text style={fdRowRevStyles.note}>flexDirection: "row-reverse"</Text>
      <View style={fdRowRevStyles.parent}>
        <View style={fdRowRevStyles.boxA}>
          <Text style={fdRowRevStyles.text}>A</Text>
        </View>
        <View style={fdRowRevStyles.boxB}>
          <Text style={fdRowRevStyles.text}>B</Text>
        </View>
        <View style={fdRowRevStyles.boxC}>
          <Text style={fdRowRevStyles.text}>C</Text>
        </View>
      </View>
    </View>
  );
}
const fdRowRevStyles = StyleSheet.create({
  wrap: { gap: 8 },
  note: { fontSize: 12, opacity: 0.75 },
  parent: {
    borderWidth: 2,
    borderRadius: 12,
    padding: 10,
    gap: 8,
    flexDirection: "row-reverse",
  },
  boxA: {
    borderWidth: 2,
    borderRadius: 10,
    padding: 10,
    backgroundColor: "#e0f2fe",
  },
  boxB: {
    borderWidth: 2,
    borderRadius: 10,
    padding: 10,
    backgroundColor: "#dcfce7",
  },
  boxC: {
    borderWidth: 2,
    borderRadius: 10,
    padding: 10,
    backgroundColor: "#fee2e2",
  },
  text: { fontSize: 12, fontWeight: "900" },
});

/* justifyContent */

function JustifyContent_FlexStartDemo() {
  return (
    <View style={jcStartStyles.wrap}>
      <Text style={jcStartStyles.note}>justifyContent: "flex-start"</Text>
      <View style={jcStartStyles.parent}>
        <View style={jcStartStyles.box}>
          <Text style={jcStartStyles.text}>A</Text>
        </View>
        <View style={jcStartStyles.box}>
          <Text style={jcStartStyles.text}>B</Text>
        </View>
        <View style={jcStartStyles.box}>
          <Text style={jcStartStyles.text}>C</Text>
        </View>
      </View>
    </View>
  );
}
const jcStartStyles = StyleSheet.create({
  wrap: { gap: 8 },
  note: { fontSize: 12, opacity: 0.75 },
  parent: {
    borderWidth: 2,
    borderRadius: 12,
    height: 80,
    padding: 10,
    gap: 8,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  box: {
    borderWidth: 2,
    borderRadius: 10,
    padding: 10,
    backgroundColor: "#f3f4f6",
  },
  text: { fontSize: 12, fontWeight: "900" },
});

function JustifyContent_CenterDemo() {
  return (
    <View style={jcCenterStyles.wrap}>
      <Text style={jcCenterStyles.note}>justifyContent: "center"</Text>
      <View style={jcCenterStyles.parent}>
        <View style={jcCenterStyles.box}>
          <Text style={jcCenterStyles.text}>A</Text>
        </View>
        <View style={jcCenterStyles.box}>
          <Text style={jcCenterStyles.text}>B</Text>
        </View>
        <View style={jcCenterStyles.box}>
          <Text style={jcCenterStyles.text}>C</Text>
        </View>
      </View>
    </View>
  );
}
const jcCenterStyles = StyleSheet.create({
  wrap: { gap: 8 },
  note: { fontSize: 12, opacity: 0.75 },
  parent: {
    borderWidth: 2,
    borderRadius: 12,
    height: 80,
    padding: 10,
    gap: 8,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  box: {
    borderWidth: 2,
    borderRadius: 10,
    padding: 10,
    backgroundColor: "#f3f4f6",
  },
  text: { fontSize: 12, fontWeight: "900" },
});

function JustifyContent_FlexEndDemo() {
  return (
    <View style={jcEndStyles.wrap}>
      <Text style={jcEndStyles.note}>justifyContent: "flex-end"</Text>
      <View style={jcEndStyles.parent}>
        <View style={jcEndStyles.box}>
          <Text style={jcEndStyles.text}>A</Text>
        </View>
        <View style={jcEndStyles.box}>
          <Text style={jcEndStyles.text}>B</Text>
        </View>
        <View style={jcEndStyles.box}>
          <Text style={jcEndStyles.text}>C</Text>
        </View>
      </View>
    </View>
  );
}
const jcEndStyles = StyleSheet.create({
  wrap: { gap: 8 },
  note: { fontSize: 12, opacity: 0.75 },
  parent: {
    borderWidth: 2,
    borderRadius: 12,
    height: 80,
    padding: 10,
    gap: 8,
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  box: {
    borderWidth: 2,
    borderRadius: 10,
    padding: 10,
    backgroundColor: "#f3f4f6",
  },
  text: { fontSize: 12, fontWeight: "900" },
});

function JustifyContent_SpaceBetweenDemo() {
  return (
    <View style={jcBetweenStyles.wrap}>
      <Text style={jcBetweenStyles.note}>justifyContent: "space-between"</Text>
      <View style={jcBetweenStyles.parent}>
        <View style={jcBetweenStyles.box}>
          <Text style={jcBetweenStyles.text}>A</Text>
        </View>
        <View style={jcBetweenStyles.box}>
          <Text style={jcBetweenStyles.text}>B</Text>
        </View>
        <View style={jcBetweenStyles.box}>
          <Text style={jcBetweenStyles.text}>C</Text>
        </View>
      </View>
    </View>
  );
}
const jcBetweenStyles = StyleSheet.create({
  wrap: { gap: 8 },
  note: { fontSize: 12, opacity: 0.75 },
  parent: {
    borderWidth: 2,
    borderRadius: 12,
    height: 80,
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  box: {
    borderWidth: 2,
    borderRadius: 10,
    padding: 10,
    backgroundColor: "#f3f4f6",
  },
  text: { fontSize: 12, fontWeight: "900" },
});

function JustifyContent_SpaceAroundDemo() {
  return (
    <View style={jcAroundStyles.wrap}>
      <Text style={jcAroundStyles.note}>justifyContent: "space-around"</Text>
      <View style={jcAroundStyles.parent}>
        <View style={jcAroundStyles.box}>
          <Text style={jcAroundStyles.text}>A</Text>
        </View>
        <View style={jcAroundStyles.box}>
          <Text style={jcAroundStyles.text}>B</Text>
        </View>
        <View style={jcAroundStyles.box}>
          <Text style={jcAroundStyles.text}>C</Text>
        </View>
      </View>
    </View>
  );
}
const jcAroundStyles = StyleSheet.create({
  wrap: { gap: 8 },
  note: { fontSize: 12, opacity: 0.75 },
  parent: {
    borderWidth: 2,
    borderRadius: 12,
    height: 80,
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  box: {
    borderWidth: 2,
    borderRadius: 10,
    padding: 10,
    backgroundColor: "#f3f4f6",
  },
  text: { fontSize: 12, fontWeight: "900" },
});

function JustifyContent_SpaceEvenlyDemo() {
  return (
    <View style={jcEvenlyStyles.wrap}>
      <Text style={jcEvenlyStyles.note}>justifyContent: "space-evenly"</Text>
      <View style={jcEvenlyStyles.parent}>
        <View style={jcEvenlyStyles.box}>
          <Text style={jcEvenlyStyles.text}>A</Text>
        </View>
        <View style={jcEvenlyStyles.box}>
          <Text style={jcEvenlyStyles.text}>B</Text>
        </View>
        <View style={jcEvenlyStyles.box}>
          <Text style={jcEvenlyStyles.text}>C</Text>
        </View>
      </View>
    </View>
  );
}
const jcEvenlyStyles = StyleSheet.create({
  wrap: { gap: 8 },
  note: { fontSize: 12, opacity: 0.75 },
  parent: {
    borderWidth: 2,
    borderRadius: 12,
    height: 80,
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  box: {
    borderWidth: 2,
    borderRadius: 10,
    padding: 10,
    backgroundColor: "#f3f4f6",
  },
  text: { fontSize: 12, fontWeight: "900" },
});

/* alignItems */

function AlignItems_Stretch_AllHaveHeightsDemo() {
  return (
    <View style={aiStretchAllStyles.wrap}>
      <Text style={aiStretchAllStyles.note}>
        alignItems: "stretch" (all children have heights set)
      </Text>
      <View style={aiStretchAllStyles.parent}>
        <View style={aiStretchAllStyles.boxA}>
          <Text style={aiStretchAllStyles.text}>A (h=30)</Text>
        </View>
        <View style={aiStretchAllStyles.boxB}>
          <Text style={aiStretchAllStyles.text}>B (h=50)</Text>
        </View>
        <View style={aiStretchAllStyles.boxC}>
          <Text style={aiStretchAllStyles.text}>C (h=40)</Text>
        </View>
      </View>
    </View>
  );
}
const aiStretchAllStyles = StyleSheet.create({
  wrap: { gap: 8 },
  note: { fontSize: 12, opacity: 0.75 },
  parent: {
    borderWidth: 2,
    borderRadius: 12,
    padding: 10,
    gap: 8,
    flexDirection: "row",
    alignItems: "stretch",
    height: 100,
  },
  boxA: {
    borderWidth: 2,
    borderRadius: 10,
    padding: 8,
    height: 30,
    backgroundColor: "#e0f2fe",
    justifyContent: "center",
  },
  boxB: {
    borderWidth: 2,
    borderRadius: 10,
    padding: 8,
    height: 50,
    backgroundColor: "#dcfce7",
    justifyContent: "center",
  },
  boxC: {
    borderWidth: 2,
    borderRadius: 10,
    padding: 8,
    height: 40,
    backgroundColor: "#fee2e2",
    justifyContent: "center",
  },
  text: { fontSize: 12, fontWeight: "900" },
});

function AlignItems_Stretch_RemoveHeightFromADemo() {
  return (
    <View style={aiStretchNoAHeightStyles.wrap}>
      <Text style={aiStretchNoAHeightStyles.note}>
        alignItems: "stretch" (remove height from A)
      </Text>
      <View style={aiStretchNoAHeightStyles.parent}>
        <View style={aiStretchNoAHeightStyles.boxA}>
          <Text style={aiStretchNoAHeightStyles.text}>A (no height)</Text>
        </View>
        <View style={aiStretchNoAHeightStyles.boxB}>
          <Text style={aiStretchNoAHeightStyles.text}>B (h=50)</Text>
        </View>
        <View style={aiStretchNoAHeightStyles.boxC}>
          <Text style={aiStretchNoAHeightStyles.text}>C (h=40)</Text>
        </View>
      </View>
    </View>
  );
}
const aiStretchNoAHeightStyles = StyleSheet.create({
  wrap: { gap: 8 },
  note: { fontSize: 12, opacity: 0.75 },
  parent: {
    borderWidth: 2,
    borderRadius: 12,
    padding: 10,
    gap: 8,
    flexDirection: "row",
    alignItems: "stretch",
    height: 100,
  },
  boxA: {
    borderWidth: 2,
    borderRadius: 10,
    padding: 8,
    backgroundColor: "#e0f2fe",
    justifyContent: "center",
  },
  boxB: {
    borderWidth: 2,
    borderRadius: 10,
    padding: 8,
    height: 50,
    backgroundColor: "#dcfce7",
    justifyContent: "center",
  },
  boxC: {
    borderWidth: 2,
    borderRadius: 10,
    padding: 8,
    height: 40,
    backgroundColor: "#fee2e2",
    justifyContent: "center",
  },
  text: { fontSize: 12, fontWeight: "900" },
});

function AlignItems_FlexStartDemo() {
  return (
    <View style={aiStartStyles.wrap}>
      <Text style={aiStartStyles.note}>alignItems: "flex-start"</Text>
      <View style={aiStartStyles.parent}>
        <View style={aiStartStyles.boxA}>
          <Text style={aiStartStyles.text}>A</Text>
        </View>
        <View style={aiStartStyles.boxB}>
          <Text style={aiStartStyles.text}>B</Text>
        </View>
        <View style={aiStartStyles.boxC}>
          <Text style={aiStartStyles.text}>C</Text>
        </View>
      </View>
    </View>
  );
}
const aiStartStyles = StyleSheet.create({
  wrap: { gap: 8 },
  note: { fontSize: 12, opacity: 0.75 },
  parent: {
    borderWidth: 2,
    borderRadius: 12,
    padding: 10,
    height: 90,
    gap: 8,
    flexDirection: "row",
    alignItems: "flex-start",
  },
  boxA: {
    borderWidth: 2,
    borderRadius: 10,
    padding: 8,
    backgroundColor: "#e0f2fe",
  },
  boxB: {
    borderWidth: 2,
    borderRadius: 10,
    padding: 8,
    backgroundColor: "#dcfce7",
  },
  boxC: {
    borderWidth: 2,
    borderRadius: 10,
    padding: 8,
    backgroundColor: "#fee2e2",
  },
  text: { fontSize: 12, fontWeight: "900" },
});

function AlignItems_CenterDemo() {
  return (
    <View style={aiCenterStyles.wrap}>
      <Text style={aiCenterStyles.note}>alignItems: "center"</Text>
      <View style={aiCenterStyles.parent}>
        <View style={aiCenterStyles.boxA}>
          <Text style={aiCenterStyles.text}>A</Text>
        </View>
        <View style={aiCenterStyles.boxB}>
          <Text style={aiCenterStyles.text}>B</Text>
        </View>
        <View style={aiCenterStyles.boxC}>
          <Text style={aiCenterStyles.text}>C</Text>
        </View>
      </View>
    </View>
  );
}
const aiCenterStyles = StyleSheet.create({
  wrap: { gap: 8 },
  note: { fontSize: 12, opacity: 0.75 },
  parent: {
    borderWidth: 2,
    borderRadius: 12,
    padding: 10,
    height: 90,
    gap: 8,
    flexDirection: "row",
    alignItems: "center",
  },
  boxA: {
    borderWidth: 2,
    borderRadius: 10,
    padding: 8,
    backgroundColor: "#e0f2fe",
  },
  boxB: {
    borderWidth: 2,
    borderRadius: 10,
    padding: 8,
    backgroundColor: "#dcfce7",
  },
  boxC: {
    borderWidth: 2,
    borderRadius: 10,
    padding: 8,
    backgroundColor: "#fee2e2",
  },
  text: { fontSize: 12, fontWeight: "900" },
});

function AlignItems_FlexEndDemo() {
  return (
    <View style={aiEndStyles.wrap}>
      <Text style={aiEndStyles.note}>alignItems: "flex-end"</Text>
      <View style={aiEndStyles.parent}>
        <View style={aiEndStyles.boxA}>
          <Text style={aiEndStyles.text}>A</Text>
        </View>
        <View style={aiEndStyles.boxB}>
          <Text style={aiEndStyles.text}>B</Text>
        </View>
        <View style={aiEndStyles.boxC}>
          <Text style={aiEndStyles.text}>C</Text>
        </View>
      </View>
    </View>
  );
}
const aiEndStyles = StyleSheet.create({
  wrap: { gap: 8 },
  note: { fontSize: 12, opacity: 0.75 },
  parent: {
    borderWidth: 2,
    borderRadius: 12,
    padding: 10,
    height: 90,
    gap: 8,
    flexDirection: "row",
    alignItems: "flex-end",
  },
  boxA: {
    borderWidth: 2,
    borderRadius: 10,
    padding: 8,
    backgroundColor: "#e0f2fe",
  },
  boxB: {
    borderWidth: 2,
    borderRadius: 10,
    padding: 8,
    backgroundColor: "#dcfce7",
  },
  boxC: {
    borderWidth: 2,
    borderRadius: 10,
    padding: 8,
    backgroundColor: "#fee2e2",
  },
  text: { fontSize: 12, fontWeight: "900" },
});

function AlignItems_BaselineDemo() {
  return (
    <View style={aiBaselineStyles.wrap}>
      <Text style={aiBaselineStyles.note}>
        alignItems: "baseline" (lines up text baselines)
      </Text>
      <View style={aiBaselineStyles.parent}>
        <View style={aiBaselineStyles.boxA}>
          <Text style={aiBaselineStyles.textBig}>A</Text>
        </View>
        <View style={aiBaselineStyles.boxB}>
          <Text style={aiBaselineStyles.textMed}>B</Text>
        </View>
        <View style={aiBaselineStyles.boxC}>
          <Text style={aiBaselineStyles.textSmall}>C</Text>
        </View>
      </View>
    </View>
  );
}
const aiBaselineStyles = StyleSheet.create({
  wrap: { gap: 8 },
  note: { fontSize: 12, opacity: 0.75 },
  parent: {
    borderWidth: 2,
    borderRadius: 12,
    padding: 10,
    height: 90,
    gap: 8,
    flexDirection: "row",
    alignItems: "baseline",
  },
  boxA: {
    borderWidth: 2,
    borderRadius: 10,
    padding: 8,
    backgroundColor: "#e0f2fe",
  },
  boxB: {
    borderWidth: 2,
    borderRadius: 10,
    padding: 8,
    backgroundColor: "#dcfce7",
  },
  boxC: {
    borderWidth: 2,
    borderRadius: 10,
    padding: 8,
    backgroundColor: "#fee2e2",
  },
  textBig: { fontSize: 26, fontWeight: "900" },
  textMed: { fontSize: 18, fontWeight: "900" },
  textSmall: { fontSize: 12, fontWeight: "900" },
});

/* flex ratios */

function FlexRatios_OneTwoOneDemo() {
  return (
    <View style={flex121Styles.wrap}>
      <Text style={flex121Styles.note}>
        flex: 1 / 2 / 1 (ratios along main axis)
      </Text>
      <View style={flex121Styles.parent}>
        <View style={flex121Styles.a}>
          <Text style={flex121Styles.text}>flex 1</Text>
        </View>
        <View style={flex121Styles.b}>
          <Text style={flex121Styles.text}>flex 2</Text>
        </View>
        <View style={flex121Styles.c}>
          <Text style={flex121Styles.text}>flex 1</Text>
        </View>
      </View>
    </View>
  );
}
const flex121Styles = StyleSheet.create({
  wrap: { gap: 8 },
  note: { fontSize: 12, opacity: 0.75 },
  parent: {
    borderWidth: 2,
    borderRadius: 12,
    height: 70,
    overflow: "hidden",
    flexDirection: "row",
  },
  a: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#e0f2fe",
  },
  b: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#dcfce7",
  },
  c: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fee2e2",
  },
  text: { fontSize: 12, fontWeight: "900" },
});

function FlexRatios_ZeroOneTwoDemo() {
  return (
    <View style={flex012Styles.wrap}>
      <Text style={flex012Styles.note}>
        flex: 0 / 1 / 2 (0 takes minimal space)
      </Text>
      <View style={flex012Styles.parent}>
        <View style={flex012Styles.a}>
          <Text style={flex012Styles.text}>flex 0</Text>
        </View>
        <View style={flex012Styles.b}>
          <Text style={flex012Styles.text}>flex 1</Text>
        </View>
        <View style={flex012Styles.c}>
          <Text style={flex012Styles.text}>flex 2</Text>
        </View>
      </View>
    </View>
  );
}
const flex012Styles = StyleSheet.create({
  wrap: { gap: 8 },
  note: { fontSize: 12, opacity: 0.75 },
  parent: {
    borderWidth: 2,
    borderRadius: 12,
    height: 70,
    overflow: "hidden",
    flexDirection: "row",
  },
  a: {
    flex: 0,
    width: 30,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#e0f2fe",
  },
  b: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#dcfce7",
  },
  c: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fee2e2",
  },
  text: { fontSize: 12, fontWeight: "900" },
});

function FlexFillSingleChildDemo() {
  return (
    <View style={flexFillStyles.wrap}>
      <Text style={flexFillStyles.note}>
        flex: 1 (single child fills parent)
      </Text>
      <View style={flexFillStyles.parent}>
        <View style={flexFillStyles.child}>
          <Text style={flexFillStyles.text}>I fill the space</Text>
        </View>
      </View>
    </View>
  );
}
const flexFillStyles = StyleSheet.create({
  wrap: { gap: 8 },
  note: { fontSize: 12, opacity: 0.75 },
  parent: {
    borderWidth: 2,
    borderRadius: 12,
    height: 70,
    overflow: "hidden",
  },
  child: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fef9c3",
  },
  text: { fontSize: 12, fontWeight: "900" },
});

/* flexWrap */

function FlexWrap_NoWrapDemo() {
  return (
    <View style={wrapNoStyles.wrap}>
      <Text style={wrapNoStyles.note}>
        flexWrap: "nowrap" (default) → overflow off screen
      </Text>
      <View style={wrapNoStyles.parent}>
        <View style={wrapNoStyles.tag}>
          <Text style={wrapNoStyles.text}>tag 1</Text>
        </View>
        <View style={wrapNoStyles.tag}>
          <Text style={wrapNoStyles.text}>tag 2</Text>
        </View>
        <View style={wrapNoStyles.tag}>
          <Text style={wrapNoStyles.text}>tag 3</Text>
        </View>
        <View style={wrapNoStyles.tag}>
          <Text style={wrapNoStyles.text}>tag 4</Text>
        </View>
        <View style={wrapNoStyles.tag}>
          <Text style={wrapNoStyles.text}>tag 5</Text>
        </View>
        <View style={wrapNoStyles.tag}>
          <Text style={wrapNoStyles.text}>tag 6</Text>
        </View>
      </View>
    </View>
  );
}
const wrapNoStyles = StyleSheet.create({
  wrap: { gap: 8 },
  note: { fontSize: 12, opacity: 0.75 },
  parent: {
    width: 260,
    borderWidth: 2,
    borderRadius: 12,
    padding: 10,
    flexDirection: "row",
    flexWrap: "nowrap",
    gap: 8,
  },
  tag: {
    borderWidth: 2,
    borderRadius: 999,
    paddingVertical: 6,
    paddingHorizontal: 10,
    backgroundColor: "#e0f2fe",
  },
  text: { fontSize: 12, fontWeight: "900" },
});

function FlexWrap_WrapDemo() {
  return (
    <View style={wrapYesStyles.wrap}>
      <Text style={wrapYesStyles.note}>
        flexWrap: "wrap" → flows to next line
      </Text>
      <View style={wrapYesStyles.parent}>
        <View style={wrapYesStyles.tag}>
          <Text style={wrapYesStyles.text}>tag 1</Text>
        </View>
        <View style={wrapYesStyles.tag}>
          <Text style={wrapYesStyles.text}>tag 2</Text>
        </View>
        <View style={wrapYesStyles.tag}>
          <Text style={wrapYesStyles.text}>tag 3</Text>
        </View>
        <View style={wrapYesStyles.tag}>
          <Text style={wrapYesStyles.text}>tag 4</Text>
        </View>
        <View style={wrapYesStyles.tag}>
          <Text style={wrapYesStyles.text}>tag 5</Text>
        </View>
        <View style={wrapYesStyles.tag}>
          <Text style={wrapYesStyles.text}>tag 6</Text>
        </View>
      </View>
    </View>
  );
}
const wrapYesStyles = StyleSheet.create({
  wrap: { gap: 8 },
  note: { fontSize: 12, opacity: 0.75 },
  parent: {
    width: 260,
    borderWidth: 2,
    borderRadius: 12,
    padding: 10,
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
  },
  tag: {
    borderWidth: 2,
    borderRadius: 999,
    paddingVertical: 6,
    paddingHorizontal: 10,
    backgroundColor: "#dcfce7",
  },
  text: { fontSize: 12, fontWeight: "900" },
});

/* ========================================================= */
/* Other Layout Features demos                                */
/* ========================================================= */

/* display */

function Display_FlexDefaultDemo() {
  return (
    <View style={dispFlexStyles.wrap}>
      <Text style={dispFlexStyles.note}>
        display: "flex" (default) → normal layout
      </Text>
      <View style={dispFlexStyles.parent}>
        <View style={dispFlexStyles.box}>
          <Text style={dispFlexStyles.text}>visible</Text>
        </View>
        <View style={dispFlexStyles.box}>
          <Text style={dispFlexStyles.text}>visible</Text>
        </View>
        <View style={dispFlexStyles.box}>
          <Text style={dispFlexStyles.text}>visible</Text>
        </View>
      </View>
    </View>
  );
}
const dispFlexStyles = StyleSheet.create({
  wrap: { gap: 8 },
  note: { fontSize: 12, opacity: 0.75 },
  parent: {
    borderWidth: 2,
    borderRadius: 12,
    padding: 10,
    flexDirection: "row",
    gap: 8,
  },
  box: {
    borderWidth: 2,
    borderRadius: 10,
    padding: 10,
    backgroundColor: "#f3f4f6",
  },
  text: { fontSize: 12, fontWeight: "900" },
});

function Display_NoneDemo() {
  return (
    <View style={dispNoneStyles.wrap}>
      <Text style={dispNoneStyles.note}>
        display: "none" → element removed as if it wasn't there
      </Text>
      <View style={dispNoneStyles.parent}>
        <View style={dispNoneStyles.box}>
          <Text style={dispNoneStyles.text}>A</Text>
        </View>

        <View style={dispNoneStyles.boxHidden}>
          <Text style={dispNoneStyles.text}>B (hidden)</Text>
        </View>

        <View style={dispNoneStyles.box}>
          <Text style={dispNoneStyles.text}>C</Text>
        </View>
      </View>
    </View>
  );
}
const dispNoneStyles = StyleSheet.create({
  wrap: { gap: 8 },
  note: { fontSize: 12, opacity: 0.75 },
  parent: {
    borderWidth: 2,
    borderRadius: 12,
    padding: 10,
    flexDirection: "row",
    gap: 8,
  },
  box: {
    borderWidth: 2,
    borderRadius: 10,
    padding: 10,
    backgroundColor: "#f3f4f6",
  },
  boxHidden: {
    display: "none",
    borderWidth: 2,
    borderRadius: 10,
    padding: 10,
    backgroundColor: "hotpink",
  },
  text: { fontSize: 12, fontWeight: "900" },
});

function Display_ContentsDemo() {
  return (
    <View style={dispContentsStyles.wrap}>
      <Text style={dispContentsStyles.note}>
        display: "contents" → wrapper doesn't render; children act like they're
        direct siblings
      </Text>

      <View style={dispContentsStyles.parent}>
        <View style={dispContentsStyles.boxA}>
          <Text style={dispContentsStyles.text}>A</Text>
        </View>

        <View style={dispContentsStyles.wrapper}>
          <View style={dispContentsStyles.boxB}>
            <Text style={dispContentsStyles.text}>B (inside wrapper)</Text>
          </View>
        </View>

        <View style={dispContentsStyles.boxC}>
          <Text style={dispContentsStyles.text}>C</Text>
        </View>
      </View>
    </View>
  );
}
const dispContentsStyles = StyleSheet.create({
  wrap: { gap: 8 },
  note: { fontSize: 12, opacity: 0.75 },
  parent: {
    borderWidth: 2,
    borderRadius: 12,
    padding: 10,
    flexDirection: "row",
    gap: 8,
  },
  boxA: {
    borderWidth: 2,
    borderRadius: 10,
    padding: 10,
    backgroundColor: "#e0f2fe",
  },
  boxB: {
    borderWidth: 2,
    borderRadius: 10,
    padding: 10,
    backgroundColor: "#dcfce7",
  },
  boxC: {
    borderWidth: 2,
    borderRadius: 10,
    padding: 10,
    backgroundColor: "#fee2e2",
  },
  wrapper: {
    display: "contents",
    borderWidth: 4,
    borderColor: "black",
    padding: 10,
  },
  text: { fontSize: 12, fontWeight: "900" },
});

/* position */

function Position_Relative_TopLeftDemo() {
  return (
    <View style={posRelStyles.wrap}>
      <Text style={posRelStyles.note}>
        position: "relative" (default) + top/left nudges it
      </Text>

      <View style={posRelStyles.parent}>
        <View style={posRelStyles.boxNormal}>
          <Text style={posRelStyles.text}>Normal</Text>
        </View>

        <View style={posRelStyles.boxShifted}>
          <Text style={posRelStyles.text}>Shifted</Text>
        </View>

        <View style={posRelStyles.boxNormal}>
          <Text style={posRelStyles.text}>Normal</Text>
        </View>
      </View>
    </View>
  );
}
const posRelStyles = StyleSheet.create({
  wrap: { gap: 8 },
  note: { fontSize: 12, opacity: 0.75 },
  parent: {
    borderWidth: 2,
    borderRadius: 12,
    padding: 10,
    flexDirection: "row",
    gap: 8,
  },
  boxNormal: {
    borderWidth: 2,
    borderRadius: 10,
    padding: 10,
    backgroundColor: "#f3f4f6",
  },
  boxShifted: {
    position: "relative",
    top: 12,
    left: 12,
    borderWidth: 2,
    borderRadius: 10,
    padding: 10,
    backgroundColor: "#fde68a",
  },
  text: { fontSize: 12, fontWeight: "900" },
});

function Position_Absolute_TopDemo() {
  return (
    <View style={posAbsStyles.wrap}>
      <Text style={posAbsStyles.note}>
        position: "absolute" ignores siblings; positioned inside parent
      </Text>

      <View style={posAbsStyles.parent}>
        <View style={posAbsStyles.backgroundBox}>
          <Text style={posAbsStyles.text}>Background</Text>
        </View>

        <View style={posAbsStyles.absoluteBox}>
          <Text style={posAbsStyles.text}>Absolute</Text>
        </View>
      </View>
    </View>
  );
}
const posAbsStyles = StyleSheet.create({
  wrap: { gap: 8 },
  note: { fontSize: 12, opacity: 0.75 },
  parent: {
    borderWidth: 2,
    borderRadius: 12,
    padding: 10,
    height: 110,
  },
  backgroundBox: {
    borderWidth: 2,
    borderRadius: 10,
    padding: 10,
    height: 80,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#e0f2fe",
  },
  absoluteBox: {
    position: "absolute",
    top: 10,
    left: 10,
    borderWidth: 2,
    borderRadius: 10,
    padding: 10,
    backgroundColor: "#fee2e2",
  },
  text: { fontSize: 12, fontWeight: "900" },
});

/* top/left/right/bottom */

function Offsets_Relative_NumberDemo() {
  return (
    <View style={offRelNumStyles.wrap}>
      <Text style={offRelNumStyles.note}>
        Relative offsets using numbers (top: 10, left: 20)
      </Text>
      <View style={offRelNumStyles.parent}>
        <View style={offRelNumStyles.boxNormal}>
          <Text style={offRelNumStyles.text}>Normal</Text>
        </View>
        <View style={offRelNumStyles.boxShifted}>
          <Text style={offRelNumStyles.text}>Shifted</Text>
        </View>
      </View>
    </View>
  );
}
const offRelNumStyles = StyleSheet.create({
  wrap: { gap: 8 },
  note: { fontSize: 12, opacity: 0.75 },
  parent: { borderWidth: 2, borderRadius: 12, padding: 10, height: 90 },
  boxNormal: {
    borderWidth: 2,
    borderRadius: 10,
    padding: 10,
    backgroundColor: "#f3f4f6",
  },
  boxShifted: {
    position: "relative",
    top: 10,
    left: 20,
    borderWidth: 2,
    borderRadius: 10,
    padding: 10,
    backgroundColor: "#fde68a",
  },
  text: { fontSize: 12, fontWeight: "900" },
});

/* percent offsets */

function Offsets_Relative_PercentDemo() {
  return (
    <View style={offRelPctStyles.wrap}>
      <Text style={offRelPctStyles.note}>
        Relative offsets using % (top: "20%", left: "10%")
      </Text>
      <View style={offRelPctStyles.parent}>
        <View style={offRelPctStyles.boxNormal}>
          <Text style={offRelPctStyles.text}>Normal</Text>
        </View>

        <View style={offRelPctStyles.boxShifted}>
          <Text style={offRelPctStyles.text}>Shifted</Text>
        </View>
      </View>
    </View>
  );
}
const offRelPctStyles = StyleSheet.create({
  wrap: { gap: 8 },
  note: { fontSize: 12, opacity: 0.75 },
  parent: {
    borderWidth: 2,
    borderRadius: 12,
    padding: 10,
    height: 120,
    width: 260,
  },
  boxNormal: {
    borderWidth: 2,
    borderRadius: 10,
    padding: 10,
    backgroundColor: "#f3f4f6",
    width: 120,
  },
  boxShifted: {
    position: "relative",
    top: "20%",
    left: "10%",
    borderWidth: 2,
    borderRadius: 10,
    padding: 10,
    backgroundColor: "#a7f3d0",
    width: 120,
  },
  text: { fontSize: 12, fontWeight: "900" },
});

/* absolute offsets */

function Offsets_Absolute_TopRightDemo() {
  return (
    <View style={offAbsTRStyles.wrap}>
      <Text style={offAbsTRStyles.note}>
        Absolute offsets (top: 10, right: 10)
      </Text>
      <View style={offAbsTRStyles.parent}>
        <View style={offAbsTRStyles.backgroundBox}>
          <Text style={offAbsTRStyles.text}>Background</Text>
        </View>

        <View style={offAbsTRStyles.absoluteBox}>
          <Text style={offAbsTRStyles.text}>Top Right</Text>
        </View>
      </View>
    </View>
  );
}
const offAbsTRStyles = StyleSheet.create({
  wrap: { gap: 8 },
  note: { fontSize: 12, opacity: 0.75 },
  parent: {
    borderWidth: 2,
    borderRadius: 12,
    padding: 10,
    height: 120,
    width: 260,
  },
  backgroundBox: {
    borderWidth: 2,
    borderRadius: 10,
    height: 85,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#e0f2fe",
  },
  absoluteBox: {
    position: "absolute",
    top: 10,
    right: 10,
    borderWidth: 2,
    borderRadius: 10,
    paddingVertical: 8,
    paddingHorizontal: 10,
    backgroundColor: "#fee2e2",
  },
  text: { fontSize: 12, fontWeight: "900" },
});

function Offsets_Absolute_LeftRightStretchDemo() {
  return (
    <View style={offAbsStretchStyles.wrap}>
      <Text style={offAbsStretchStyles.note}>
        Absolute stretch (left: 10, right: 10) → fills horizontally
      </Text>

      <View style={offAbsStretchStyles.parent}>
        <View style={offAbsStretchStyles.backgroundBox}>
          <Text style={offAbsStretchStyles.text}>Background</Text>
        </View>

        <View style={offAbsStretchStyles.absoluteBar}>
          <Text style={offAbsStretchStyles.text}>Stretched Bar</Text>
        </View>
      </View>
    </View>
  );
}
const offAbsStretchStyles = StyleSheet.create({
  wrap: { gap: 8 },
  note: { fontSize: 12, opacity: 0.75 },
  parent: {
    borderWidth: 2,
    borderRadius: 12,
    padding: 10,
    height: 120,
    width: 260,
  },
  backgroundBox: {
    borderWidth: 2,
    borderRadius: 10,
    height: 85,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fef9c3",
  },
  absoluteBar: {
    position: "absolute",
    top: 10,
    left: 10,
    right: 10,
    borderWidth: 2,
    borderRadius: 10,
    paddingVertical: 8,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#dcfce7",
  },
  text: { fontSize: 12, fontWeight: "900" },
});

/* ========================================================= */
/* Spacing demos                                              */
/* ========================================================= */

/* padding */

function Padding_NormalDemo() {
  return (
    <View style={padNormalStyles.wrap}>
      <Text style={padNormalStyles.note}>
        padding: 20 (more space INSIDE the box)
      </Text>

      <View style={padNormalStyles.box}>
        <Text style={padNormalStyles.text}>content</Text>
      </View>
    </View>
  );
}
const padNormalStyles = StyleSheet.create({
  wrap: { gap: 8 },
  note: { fontSize: 12, opacity: 0.75 },
  box: {
    borderWidth: 2,
    borderRadius: 12,
    padding: 20,
    backgroundColor: "#e0f2fe",
  },
  text: { fontSize: 12, fontWeight: "900" },
});

function Padding_ZeroDemo() {
  return (
    <View style={padZeroStyles.wrap}>
      <Text style={padZeroStyles.note}>padding: 0 (no extra space INSIDE)</Text>

      <View style={padZeroStyles.box}>
        <Text style={padZeroStyles.text}>content</Text>
      </View>
    </View>
  );
}
const padZeroStyles = StyleSheet.create({
  wrap: { gap: 8 },
  note: { fontSize: 12, opacity: 0.75 },
  box: {
    borderWidth: 2,
    borderRadius: 12,
    padding: 0,
    backgroundColor: "#fee2e2",
  },
  text: { fontSize: 12, fontWeight: "900" },
});

/* margin */

function Margin_NormalDemo() {
  return (
    <View style={marginNormalStyles.wrap}>
      <Text style={marginNormalStyles.note}>
        margin: 14 (space OUTSIDE the box)
      </Text>

      <View style={marginNormalStyles.parent}>
        <View style={marginNormalStyles.boxNoMargin}>
          <Text style={marginNormalStyles.text}>no margin</Text>
        </View>

        <View style={marginNormalStyles.boxWithMargin}>
          <Text style={marginNormalStyles.text}>margin 14</Text>
        </View>

        <View style={marginNormalStyles.boxNoMargin}>
          <Text style={marginNormalStyles.text}>no margin</Text>
        </View>
      </View>
    </View>
  );
}
const marginNormalStyles = StyleSheet.create({
  wrap: { gap: 8 },
  note: { fontSize: 12, opacity: 0.75 },
  parent: {
    borderWidth: 2,
    borderRadius: 12,
    padding: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  boxNoMargin: {
    borderWidth: 2,
    borderRadius: 10,
    padding: 10,
    backgroundColor: "#f3f4f6",
  },
  boxWithMargin: {
    margin: 14,
    borderWidth: 2,
    borderRadius: 10,
    padding: 10,
    backgroundColor: "#dcfce7",
  },
  text: { fontSize: 12, fontWeight: "900" },
});

function Margin_ZeroDemo() {
  return (
    <View style={marginZeroStyles.wrap}>
      <Text style={marginZeroStyles.note}>
        margin: 0 (no extra space outside)
      </Text>

      <View style={marginZeroStyles.parent}>
        <View style={marginZeroStyles.box}>
          <Text style={marginZeroStyles.text}>A</Text>
        </View>
        <View style={marginZeroStyles.box}>
          <Text style={marginZeroStyles.text}>B</Text>
        </View>
        <View style={marginZeroStyles.box}>
          <Text style={marginZeroStyles.text}>C</Text>
        </View>
      </View>
    </View>
  );
}
const marginZeroStyles = StyleSheet.create({
  wrap: { gap: 8 },
  note: { fontSize: 12, opacity: 0.75 },
  parent: {
    borderWidth: 2,
    borderRadius: 12,
    padding: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  box: {
    margin: 0,
    borderWidth: 2,
    borderRadius: 10,
    padding: 10,
    backgroundColor: "#e0f2fe",
  },
  text: { fontSize: 12, fontWeight: "900" },
});

/* gap */

function Gap_NormalDemo() {
  return (
    <View style={gapNormalStyles.wrap}>
      <Text style={gapNormalStyles.note}>gap: 12 (space BETWEEN children)</Text>

      <View style={gapNormalStyles.parent}>
        <View style={gapNormalStyles.box}>
          <Text style={gapNormalStyles.text}>A</Text>
        </View>
        <View style={gapNormalStyles.box}>
          <Text style={gapNormalStyles.text}>B</Text>
        </View>
        <View style={gapNormalStyles.box}>
          <Text style={gapNormalStyles.text}>C</Text>
        </View>
      </View>
    </View>
  );
}
const gapNormalStyles = StyleSheet.create({
  wrap: { gap: 12 },
  note: { fontSize: 12, opacity: 0.75 },
  parent: {
    borderWidth: 2,
    borderRadius: 12,
    padding: 10,
    flexDirection: "row",
    gap: 12,
  },
  box: {
    borderWidth: 2,
    borderRadius: 10,
    padding: 10,
    backgroundColor: "#fae8ff",
  },
  text: { fontSize: 12, fontWeight: "900" },
});

function Gap_ZeroDemo() {
  return (
    <View style={gapZeroStyles.wrap}>
      <Text style={gapZeroStyles.note}>gap: 0 (no space between children)</Text>

      <View style={gapZeroStyles.parent}>
        <View style={gapZeroStyles.box}>
          <Text style={gapZeroStyles.text}>A</Text>
        </View>
        <View style={gapZeroStyles.box}>
          <Text style={gapZeroStyles.text}>B</Text>
        </View>
        <View style={gapZeroStyles.box}>
          <Text style={gapZeroStyles.text}>C</Text>
        </View>
      </View>
    </View>
  );
}
const gapZeroStyles = StyleSheet.create({
  wrap: { gap: 8 },
  note: { fontSize: 12, opacity: 0.75 },
  parent: {
    borderWidth: 2,
    borderRadius: 12,
    padding: 10,
    flexDirection: "row",
    gap: 0,
  },
  box: {
    borderWidth: 2,
    borderRadius: 10,
    padding: 10,
    backgroundColor: "#ffedd5",
  },
  text: { fontSize: 12, fontWeight: "900" },
});

/* ========================================================= */
/* Basic Visual Styling demos                                 */
/* ========================================================= */

/* borders + borderRadius */

function Borders_RadiusDefaultDemo() {
  return (
    <View style={borderDefaultStyles.wrap}>
      <Text style={borderDefaultStyles.note}>
        borderWidth: 2 (borderRadius not set)
      </Text>

      <View style={borderDefaultStyles.box}>
        <Text style={borderDefaultStyles.text}>sharp corners</Text>
      </View>
    </View>
  );
}
const borderDefaultStyles = StyleSheet.create({
  wrap: { gap: 8 },
  note: { fontSize: 12, opacity: 0.75 },
  box: {
    borderWidth: 2,
    padding: 12,
    backgroundColor: "#f3f4f6",
  },
  text: { fontSize: 12, fontWeight: "900" },
});

function Borders_Radius32Demo() {
  return (
    <View style={border32Styles.wrap}>
      <Text style={border32Styles.note}>borderRadius: 32 (very rounded)</Text>

      <View style={border32Styles.box}>
        <Text style={border32Styles.text}>rounded corners</Text>
      </View>
    </View>
  );
}
const border32Styles = StyleSheet.create({
  wrap: { gap: 8 },
  note: { fontSize: 12, opacity: 0.75 },
  box: {
    borderWidth: 2,
    borderRadius: 32,
    padding: 12,
    backgroundColor: "#dcfce7",
  },
  text: { fontSize: 12, fontWeight: "900" },
});

function Borders_Radius0Demo() {
  return (
    <View style={border0Styles.wrap}>
      <Text style={border0Styles.note}>
        borderRadius: 0 (explicitly square)
      </Text>

      <View style={border0Styles.box}>
        <Text style={border0Styles.text}>square corners</Text>
      </View>
    </View>
  );
}
const border0Styles = StyleSheet.create({
  wrap: { gap: 8 },
  note: { fontSize: 12, opacity: 0.75 },
  box: {
    borderWidth: 2,
    borderRadius: 0,
    padding: 12,
    backgroundColor: "#e0f2fe",
  },
  text: { fontSize: 12, fontWeight: "900" },
});

/* opacity */

function Opacity_DefaultNotSetDemo() {
  return (
    <View style={opDefaultStyles.wrap}>
      <Text style={opDefaultStyles.note}>
        opacity not set (default is fully visible)
      </Text>

      <View style={opDefaultStyles.row}>
        <View style={opDefaultStyles.box}>
          <Text style={opDefaultStyles.text}>normal</Text>
        </View>
        <View style={opDefaultStyles.box}>
          <Text style={opDefaultStyles.text}>normal</Text>
        </View>
      </View>
    </View>
  );
}
const opDefaultStyles = StyleSheet.create({
  wrap: { gap: 8 },
  note: { fontSize: 12, opacity: 0.75 },
  row: { flexDirection: "row", gap: 10 },
  box: {
    borderWidth: 2,
    borderRadius: 12,
    padding: 12,
    backgroundColor: "#fde68a",
  },
  text: { fontSize: 12, fontWeight: "900" },
});

function Opacity_0Demo() {
  return (
    <View style={op0Styles.wrap}>
      <Text style={op0Styles.note}>
        opacity: 0 (invisible but still takes space)
      </Text>

      <View style={op0Styles.row}>
        <View style={op0Styles.boxVisible}>
          <Text style={op0Styles.text}>visible</Text>
        </View>

        <View style={op0Styles.boxInvisible}>
          <Text style={op0Styles.text}>invisible</Text>
        </View>

        <View style={op0Styles.boxVisible}>
          <Text style={op0Styles.text}>visible</Text>
        </View>
      </View>
    </View>
  );
}
const op0Styles = StyleSheet.create({
  wrap: { gap: 8 },
  note: { fontSize: 12, opacity: 0.75 },
  row: { flexDirection: "row", gap: 10, alignItems: "center" },
  boxVisible: {
    borderWidth: 2,
    borderRadius: 12,
    padding: 12,
    backgroundColor: "#dcfce7",
  },
  boxInvisible: {
    opacity: 0,
    borderWidth: 2,
    borderRadius: 12,
    padding: 12,
    backgroundColor: "#fee2e2",
  },
  text: { fontSize: 12, fontWeight: "900" },
});

function Opacity_1Demo() {
  return (
    <View style={op1Styles.wrap}>
      <Text style={op1Styles.note}>opacity: 1 (same as default)</Text>

      <View style={op1Styles.row}>
        <View style={op1Styles.box}>
          <Text style={op1Styles.text}>opacity 1</Text>
        </View>
        <View style={op1Styles.box}>
          <Text style={op1Styles.text}>opacity 1</Text>
        </View>
      </View>
    </View>
  );
}
const op1Styles = StyleSheet.create({
  wrap: { gap: 8 },
  note: { fontSize: 12, opacity: 0.75 },
  row: { flexDirection: "row", gap: 10 },
  box: {
    opacity: 1,
    borderWidth: 2,
    borderRadius: 12,
    padding: 12,
    backgroundColor: "#e0f2fe",
  },
  text: { fontSize: 12, fontWeight: "900" },
});

/* text styling */

function TextStyling_DefaultDemo() {
  return (
    <View style={textDefaultStyles.wrap}>
      <Text style={textDefaultStyles.note}>Default Text (no style prop)</Text>

      <View style={textDefaultStyles.card}>
        <Text>this is default text</Text>
        <Text>same font size + weight as the platform default</Text>
      </View>
    </View>
  );
}
const textDefaultStyles = StyleSheet.create({
  wrap: { gap: 8 },
  note: { fontSize: 12, opacity: 0.75 },
  card: {
    borderWidth: 2,
    borderRadius: 12,
    padding: 12,
    backgroundColor: "#f3f4f6",
    gap: 6,
  },
});

function TextStyling_StyledDemo() {
  return (
    <View style={textStyledStyles.wrap}>
      <Text style={textStyledStyles.note}>fontSize + fontWeight + color</Text>

      <View style={textStyledStyles.card}>
        <Text style={textStyledStyles.title}>big title text</Text>
        <Text style={textStyledStyles.sub}>
          smaller text with lower opacity (still a Text style).
        </Text>
      </View>
    </View>
  );
}
const textStyledStyles = StyleSheet.create({
  wrap: { gap: 8 },
  note: { fontSize: 12, opacity: 0.75 },
  card: {
    borderWidth: 2,
    borderRadius: 12,
    padding: 12,
    backgroundColor: "#ecfccb",
    gap: 6,
  },
  title: {
    fontSize: 22,
    fontWeight: "900",
    color: "#0f172a",
  },
  sub: {
    fontSize: 12,
    fontWeight: "700",
    opacity: 0.5,
  },
});
