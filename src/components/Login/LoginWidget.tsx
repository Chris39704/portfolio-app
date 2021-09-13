import { useCallback, useMemo } from "react";
import { GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";
import { auth } from "@fb/auth";
import { Props, StyledFirebaseAuth } from "react-firebaseui";
import { useLoginStyles } from "./loginStyles";

const GitHubProvider = new GithubAuthProvider();
GitHubProvider.addScope("repo");
const GoogleProvider = new GoogleAuthProvider();

export const Login = () => {
  const classes = useLoginStyles();

  const uiCallback = useCallback(
    () => (ui: firebaseui.auth.AuthUI) => {
      return ui.disableAutoSignIn();
    },
    []
  );

  const uiConfig: Props["uiConfig"] = useMemo(
    () => ({
      // Popup signin flow rather than redirect flow.
      signInFlow: "popup",
      // signInFlow: 'redirect',
      // Redirect to '/' after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
      // signInSuccessUrl: from,
      // We will display Google and Facebook as auth providers.
      signInOptions: [
        {
          provider: GitHubProvider.providerId,
          fullLabel: "Log In with GitHub",
          requireDisplayName: true,
        },
        {
          fullLabel: "Log In with Google",
          provider: GoogleProvider.providerId,
          customParameters: {
            // Forces account selection even when one account
            // is available.
            prompt: "select_account",
          },
        },
      ],
      callbacks: {
        signInSuccessWithAuthResult: (ar, redirectUrl) => {
          console.log(ar);
          console.log(redirectUrl);
          return false;
        },
      },
    }),
    []
  );

  return (
    <div className={classes.root}>
      <StyledFirebaseAuth
        uiCallback={uiCallback}
        uiConfig={uiConfig}
        firebaseAuth={auth}
      />
    </div>
  );
};
