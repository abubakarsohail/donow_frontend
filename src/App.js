import { CircularProgress, ThemeProvider } from "@material-ui/core";
import { SnackbarProvider } from "notistack";
import { Suspense, useState } from "react";
import { useRoutes } from "react-router-dom";
import UserContext from "./context/UserContext";
import routes from "./routes";
import { getCurrentUser } from "./services/authService";
import theme from "./theme";

const App = () => {
  const [user, setUser] = useState(getCurrentUser());
  const routing = useRoutes(routes(user));
  return (
    <ThemeProvider theme={theme}>
      <SnackbarProvider maxSnack={3}>
        <UserContext.Provider value={{ user, setUser }}>
          <Suspense fallback={<CircularProgress />}>{routing}</Suspense>
        </UserContext.Provider>
      </SnackbarProvider>
    </ThemeProvider>
  );
};

export default App;
