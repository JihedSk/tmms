import {
  Paper,
  createStyles,
  TextInput,
  PasswordInput,
  Checkbox,
  Button,
  Title,
  rem,
} from "@mantine/core";
import { useNavigate } from "react-router-dom";
import TopNavbar from "./Navbar";

export function LoginPage() {
  const { classes } = useStyles();
  const navigate = useNavigate();
  return (
    <>
      <TopNavbar />
      <div className={classes.wrapper}>
        <Paper className={classes.form} radius={0} p={30}>
          <Title
            order={2}
            className={classes.title}
            ta="center"
            mt="md"
            mb={50}
          >
            Bienvenue chez TMS!
          </Title>

          <TextInput
            label="Client id"
            placeholder="Entrer votre id"
            size="md"
          />
          <PasswordInput
            label="Mode de passe"
            placeholder="Mot de passe"
            mt="md"
            size="md"
          />
          <Checkbox label="Rester connecté" mt="xl" size="md" />
          <Button
            onClick={() => navigate("/adminDash")}
            fullWidth
            mt="xl"
            size="md"
          >
            Connecter
          </Button>
          <img
            className={classes.image}
            src="/Images/loginbackground.jpg"
            alt=""
          />
        </Paper>
      </div>
    </>
  );
}

const useStyles = createStyles((theme) => ({
  wrapper: {
    minHeight: rem(600),
    background: `url("/Images/loginbackground.jpg") no-repeat right center / cover`,
  },

  form: {
    borderRight: `${rem(1)} solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.colors.gray[3]
    }`,
    minHeight: rem(638),
    maxWidth: rem(400),
    paddingTop: rem(400),
    background: "#bad8f5",

    [theme.fn.smallerThan("sm")]: {
      maxWidth: "100%",
    },
  },

  title: {
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
  },

  image: {
    position: "absolute",
    right: 0,
    top: 0,
    height: "100%",
    width: "auto",
    objectFit: "cover",
    zIndex: -1,
  },
}));
