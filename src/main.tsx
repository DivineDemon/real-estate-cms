import App from "./App.tsx";
import "./assets/css/index.css";
import { ThemeProvider } from "./components/global/theme-provider.tsx";

import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Router>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <App />
    </ThemeProvider>
  </Router>
);
