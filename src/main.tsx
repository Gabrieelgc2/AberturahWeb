import React from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "@tanstack/react-router";
import { getRouter } from "./router";
import "./styles.css";
import { initI18n } from "./i18n"; // Importa a função, não como side-effect

const router = getRouter();

async function bootstrap() {
  await initI18n(); // Garante inicialização ANTES do React
  createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
}

bootstrap();