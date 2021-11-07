import { PDFViewer } from "@react-pdf/renderer";
import "./App.css";
import { StickerPdf } from "./comps/StickerPdf";

function App() {
  return (
    <PDFViewer>
      <StickerPdf />
    </PDFViewer>
  );
}

export default App;
