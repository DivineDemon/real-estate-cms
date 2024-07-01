import App from "./App.tsx";
import "./assets/css/index.css";
import store, { persistor } from "./store/index.ts";
import { Toaster } from "./components/ui/sonner.tsx";
import { ThemeProvider } from "./components/global/theme-provider.tsx";

import { Provider } from "react-redux";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <Router>
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
          <Toaster />
          <App />
        </ThemeProvider>
      </Router>
    </PersistGate>
  </Provider>
);
