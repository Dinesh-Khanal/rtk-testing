import { render } from "@testing-library/react";
import App from "../App";
it("render component properly", () => {
  render(<App />);
  expect(true).toBeTruthy();
});
