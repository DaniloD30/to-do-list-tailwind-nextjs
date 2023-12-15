import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Contexts from "@/app/contexts";
import FilterSelect from "../index";

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
      <FilterSelect />
    </Contexts>
  );
};
describe("Filter Select", () => {
  it("Filter Select render", () => {
    render(<RenderComponent />);
    expect(screen.getByText(/Todas as tarefas/i)).toBeInTheDocument();
    expect(screen.getByText(/Concluídas/i)).toBeInTheDocument();
    expect(screen.getByText(/Pendentes/i)).toBeInTheDocument();

    fireEvent.change(screen.getByRole("combobox"), {
      target: { value: "done" },
    });
    fireEvent.change(screen.getByRole("combobox"), {
      target: { value: "all" },
    });
    fireEvent.change(screen.getByRole("combobox"), {
      target: { value: "pending" },
    });
    
  });
});
