import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./components/app";

createRoot(document.getElementById("app")!).render(
	<StrictMode>
		<App />
	</StrictMode>,
);
