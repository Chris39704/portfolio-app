import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { App } from "./App";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core";
import { darkTheme } from "theme";

// TODO: Refactor out components

ReactDOM.render(
  <StrictMode>
    <ThemeProvider theme={darkTheme}>
      <Router>
        <Switch>
          <Route exact path="/">
            <App />
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  </StrictMode>,
  document.getElementById("root")
);
