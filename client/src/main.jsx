import { ClerkProvider } from "@clerk/clerk-react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Toaster } from "react-hot-toast";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";

const clerkPubKey = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;
if (!clerkPubKey) {
  throw new Error("Missing CLERK_PUBLISHABLE_KEY");
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ClerkProvider publishableKey={clerkPubKey} afterSignOutUrl={"/"}>
      <BrowserRouter>
        <App />
        <Toaster position="top-center" />
      </BrowserRouter>
    </ClerkProvider>
  </StrictMode>
);
