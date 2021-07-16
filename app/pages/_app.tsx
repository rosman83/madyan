import "../styles/globals.css";
import {
  ColorModeProvider,
  theme,
  ThemeProvider,
  CSSReset,
} from "@chakra-ui/react";
import type { AppProps } from "next/app";
import Layout from "../components/layout/Core";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <ColorModeProvider
        options={{
          useSystemColorMode: true,
        }}
      >
        <CSSReset />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ColorModeProvider>
    </ThemeProvider>
  );
}
export default MyApp;
