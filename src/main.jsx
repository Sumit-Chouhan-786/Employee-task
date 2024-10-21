import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import AuthContext from "./context/AuthContext.jsx";
import TaskContent from "./context/TaskContent.jsx";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthContext>
      <TaskContent>
        <App />
      </TaskContent>
    </AuthContext>
  </StrictMode>
);
