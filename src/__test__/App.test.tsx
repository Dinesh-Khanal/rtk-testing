import { screen, fireEvent } from "@testing-library/react";
import renderWithContext from "../test-utils";
//import user from "@testing-library/user-event";
import App from "../App";

describe("App component", () => {
  it("render component properly", async () => {
    renderWithContext(<App />);
    //    expect(true).toBeTruthy();
    const buttonCount = await screen.findByRole("button", {
      name: /count is/i,
    });
    expect(screen.getByText(/Product List/)).toBeInTheDocument();
    expect(buttonCount.innerHTML).toBe("count is 0");
    //button clicked twice
    fireEvent.click(buttonCount);
    fireEvent.click(buttonCount);
    expect(buttonCount.innerHTML).toBe("count is 2");
  });
});
