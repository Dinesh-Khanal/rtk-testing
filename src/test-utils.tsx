import React from "react";
import { render } from "@testing-library/react";
import store from "./redux/store";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";

function renderWithContext(element: React.ReactElement) {
  render(
    <Provider store={store}>
      <Router>{element}</Router>
    </Provider>
  );
}
export default renderWithContext;
