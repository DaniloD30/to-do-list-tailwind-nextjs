import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Contexts from "@/app/contexts";
import { Form } from "..";

const RenderComponent = () => {
  const toggle = jest.fn();
  return (
    <Contexts
      initiValueTask={[
        {
          id: "1",
          title: "Card",
          description: "",
          isPending: false,
          filterType: "all",
        },
      ]}
      initialValueLogin={{
        id: "",
        email: "",
        pass: "",
      }}
    >
      <Form toggle={toggle} />
    </Contexts>
  );
};
describe("Form", () => {
  it("Form", () => {
    render(<RenderComponent />);

    fireEvent.click(
      screen.getByRole("button", {
        name: /adicionar/i,
      })
    );
    expect(
      screen.getByRole("button", {
        name: /adicionar/i,
      })
    ).toHaveClass("disabled:cursor-not-allowed");
  });
});
