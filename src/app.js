import React from "react";
import ReactDOM from "react-dom";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import AppRouter from "./routes/AppRouter";
import "swiper/css";
import "swiper/css/navigation";
import "./styles/main.scss";
import "react-loading-skeleton/dist/skeleton.css";

const queryClient = new QueryClient();

const jsx = (
  <QueryClientProvider client={queryClient}>
    <AppRouter />
    <ReactQueryDevtools />
  </QueryClientProvider>
);
ReactDOM.render(jsx, document.getElementById("root"));
