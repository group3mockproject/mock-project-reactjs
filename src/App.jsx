import Router from "./routes/Router";
import {ModalPicturesProvider} from "@/core/contexts/ModalPicturesContext.jsx";

function App() {
  return (
    <ModalPicturesProvider>
      <Router />
    </ModalPicturesProvider>
  );
}

export default App;
