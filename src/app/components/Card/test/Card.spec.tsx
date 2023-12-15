import { fireEvent, render, screen } from "@testing-library/react";
import Card from "../index";
import "@testing-library/jest-dom";
import Contexts from "@/app/contexts";

const RenderComponent = () => {
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
      <Card
        id="123"
        title="Card Test"
        description="Test Description
    "
        isPending={false}
        index={0}
      />
    </Contexts>
  );
};
describe("Card", () => {
  it("Card render", () => {
    render(<RenderComponent />);
    expect(screen.getByText(/Card Test/i)).toBeInTheDocument();
    expect(screen.getByText(/Test Description/i)).toBeInTheDocument();
    expect(
      screen.getByRole("button", {
        name: /icon\-status/i,
      })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", {
        name: /icon\-delete/i,
      })
    ).toBeInTheDocument();
  });
  it("button change status", () => {
    render(<RenderComponent />);

    fireEvent.click(
      screen.getByRole("button", {
        name: /icon\-status/i,
      })
    );
  });
  it("button delete card", () => {
    render(<RenderComponent />);

    fireEvent.click(
      screen.getByRole("button", {
        name: /icon\-delete/i,
      })
    );
  });
});
