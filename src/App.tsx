import { ThemeProvider } from "styled-components";
// import Sample from "./pages/Sample";
import { GlobalStyle } from "./styles/global";
import { GlobalFont } from "./assets/fonts";
import { theme } from "./styles/theme";

import Layout from "./Layout";
// import Sample from "./pages/Sample";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <GlobalFont />
      <Layout />
      {/* <Sample /> */}
    </ThemeProvider>
  );
}
