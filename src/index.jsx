import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { App } from "./App";
import { QueryClient, QueryClientProvider } from "react-query";
import { extendTheme, ChakraProvider } from "@chakra-ui/react";

const theme = extendTheme({
  styles: {
    global: {
      body: {
        bg: "gray.50",
      },
    },
  },
});

const queryClient = new QueryClient();

ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ChakraProvider theme={theme}>
        <App />
      </ChakraProvider>
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
