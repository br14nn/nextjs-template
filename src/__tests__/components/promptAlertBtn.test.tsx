import "@testing-library/jest-dom";
import { screen, render, fireEvent } from "@testing-library/react";

import PromptAlertBtn from "@/components/PromptAlertBtn";

describe("PromptAlertBtn", () => {
  it("renders the button", () => {
    render(<PromptAlertBtn />);

    const button = screen.getByRole("button");

    expect(button).toBeInTheDocument();
  });

  it("displays the alert when clicked", () => {
    const alertMock = jest.spyOn(window, "alert").mockImplementation();
    render(<PromptAlertBtn />);

    const button = screen.getByRole("button");

    fireEvent.click(button);

    expect(alertMock).toHaveBeenCalledWith("Hello World");
  });
});
