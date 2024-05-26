import { Home } from "@pages/index";
import { Route, Router } from "@solidjs/router";
import { Toaster } from "solid-toast";
import "virtual:uno.css";
import "./app.css";

export default function App() {
  return (
    <Router>
      <Route path="/" component={Home} />
      <Toaster />
    </Router>
  );
}
