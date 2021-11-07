import React from "react";
import { Page, View, Document, StyleSheet } from "@react-pdf/renderer";
import { StickerSvg } from "./StickerSvg";

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: "row",
    flexWrap: "wrap",
    backgroundColor: "#fff",
    margin: "30px",
  },
  stickerHolder: {
    margin: 10,
    padding: 10,
  },
});

const stickers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 5, 5, 5, 5, 5, 5];

// Create Document Component
export const StickerPdf = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      {stickers.map((s, i) => (
        <View key={i} style={styles.stickerHolder}>
          <StickerSvg stickerData={s} />
        </View>
      ))}
    </Page>
  </Document>
);
