import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import { SchoolProvider } from "./context/SchoolContext.tsx";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <SchoolProvider>
      <App />
    </SchoolProvider>
  </BrowserRouter>,
);
