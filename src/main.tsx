import App from "./App.tsx";
import "./assets/css/index.css";
import store from "./store/index.ts";
import { ThemeProvider } from "./components/global/theme-provider.tsx";

import { Provider } from "react-redux";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <Router>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <App />
      </ThemeProvider>
    </Router>
  </Provider>
);
