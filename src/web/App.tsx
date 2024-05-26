import { Home } from "@pages/index";
import { Route, Router } from "@solidjs/router";
import "virtual:uno.css";
import "./app.css";

export default function App() {
  return (
    <Router>
      <Route path="/" component={Home} />
    </Router>
  );
}
