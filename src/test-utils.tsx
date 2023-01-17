import React from "react";
import { render } from "@testing-library/react";
import store from "./redux/store";
import { Provider } from "react-redux";

function renderWithContext(element: React.ReactElement) {
  render(<Provider store={store}>{element}</Provider>);
}
export default renderWithContext;
