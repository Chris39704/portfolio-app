import {
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@material-ui/core";
import { Redirect, useLocation } from "react-router-dom";
import { Login } from "@components/Login";
import AuthenticationSVG from "../../assets/authentication.svg";
import { useLoginPageStyles } from "./styles";
import type { Location } from "history";

export const LoginPage: React.FC = () => {
  const isLoggedIn = false; // TODO: Temp, replace with mst

  const classes = useLoginPageStyles();
  const location: Location<{ from: string }> = useLocation();
  const { from } = location.state || { from: { pathname: "/home" } };

  if (isLoggedIn) {
    return <Redirect to={from} />;
  }

  return (
    <Grid
      item
      container
      justify="center"
      alignItems="center"
      style={{ height: "100vh" }}
    >
      <Card className={classes.card} raised>
        <CardMedia
          component="img"
          alt="Chris Farabaugh's Portfolio"
          className={classes.media}
          src={AuthenticationSVG}
          title="Chris Farabaugh's Portfolio"
        />
        <CardContent>
          <Typography variant="h5">Portfolio Login</Typography>
          <Login />
        </CardContent>
      </Card>
    </Grid>
  );
};
