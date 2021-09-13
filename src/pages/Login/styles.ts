import { createStyles, makeStyles } from "@material-ui/core";

export const useLoginPageStyles = makeStyles((theme) =>
  createStyles({
    root: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
    },
    card: {
      textAlign: "center",
      padding: theme.spacing(2),
      maxWidth: 700,
    },
    actions: {
      justifyContent: "center",
    },
    media: {
      maxWidth: 400,
    },
  })
);
