import { LoginPage } from "@pages/Login";
import { Paper } from "@material-ui/core";

export const App = () => {
  return (
    <Paper style={{ height: "100vh", width: "100vw" }}>
      <LoginPage />
    </Paper>
  );
};
