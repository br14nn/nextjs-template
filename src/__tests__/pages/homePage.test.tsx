import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import Home from "@/app/page";

describe("HomePage", () => {
  it("renders the counter text", () => {
    render(<Home />);

    const counter = screen.getByTestId("counter-value");

    expect(counter).toBeInTheDocument();
  });

  it("increments counter value by 1", () => {
    render(<Home />);

    const counter = screen.getByTestId("counter-value");
    const incrementBtn = screen.getByTestId("increment-btn");

    fireEvent.click(incrementBtn);
    fireEvent.click(incrementBtn);
    fireEvent.click(incrementBtn);

    expect(counter).toHaveTextContent("3");
  });

  it("Decerements counter value by 1", () => {
    render(<Home initialValue={0} />);

    const counter = screen.getByTestId("counter-value");
    const decrementBtn = screen.getByTestId("decrement-btn");

    fireEvent.click(decrementBtn);
    fireEvent.click(decrementBtn);
    fireEvent.click(decrementBtn);

    expect(counter).toHaveTextContent("0");
  });
});
