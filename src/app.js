import React from "react";
import ReactDOM from "react-dom";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import AppRouter from "./routes/AppRouter";
import "./styles/main.scss";

const queryClient = new QueryClient();

const jsx = (
  <QueryClientProvider client={queryClient}>
    <AppRouter />
    <ReactQueryDevtools />
  </QueryClientProvider>
);
ReactDOM.render(jsx, document.getElementById("root"));
