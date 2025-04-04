import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import GlobalStyles from "../src/components/GlobalStyle/index";
import App from "./App";

import { Provider } from "react-redux";
import { store } from "./redux/store";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <GlobalStyles>
      <Provider store={store}>
        <App />
      </Provider>
    </GlobalStyles>
  </StrictMode>
);
