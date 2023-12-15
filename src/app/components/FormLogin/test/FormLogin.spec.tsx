import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Contexts from "@/app/contexts";
import { FormLogin } from "..";

jest.mock("next/navigation", () => ({
  useRouter() {
    return {
      route: "/",
      pathname: "",
      query: "",
      asPath: "",
      push: jest.fn(),
      events: {
        on: jest.fn(),
        off: jest.fn(),
      },
      beforePopState: jest.fn(() => null),
      prefetch: jest.fn(() => null),
    };
  },
}));

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
      <FormLogin />
    </Contexts>
  );
};
describe("FormLogin", () => {
  it("FormLogin", () => {
    render(<RenderComponent />);

    fireEvent.click(
      screen.getByRole('button', {
        name: /entrar/i
      })
    );
    expect(
      screen.getByRole('button', {
        name: /entrar/i
      })
    ).toHaveClass("disabled:cursor-not-allowed");
  });
});
