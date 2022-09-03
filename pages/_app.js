// import "../styles/globals.css";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "../styles/globalstyles";

const theme = {
  colors: {
    primary: "#F1F5E9",
  },
};

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
