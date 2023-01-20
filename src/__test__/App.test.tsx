import { screen, fireEvent } from "@testing-library/react";
import renderWithContext from "../test-utils";
import userEvent from "@testing-library/user-event";
import App from "../App";

describe("App component", () => {
  it("render component properly", async () => {
    renderWithContext(<App />);
    const user = userEvent.setup();
    //    expect(true).toBeTruthy();
    const buttonCount = await screen.findByRole("button", {
      name: /count is/i,
    });
    expect(screen.getByText(/Welcome to sample test site/)).toBeInTheDocument();
    expect(buttonCount.innerHTML).toBe("count is 0");
    //button clicked twice
    fireEvent.click(buttonCount);
    await user.click(buttonCount);
    expect(buttonCount.innerHTML).toBe("count is 2");
    await user.click(screen.getByText("Product"));
    expect(screen.getByText(/Available product are/i)).toBeInTheDocument();
  });
});
