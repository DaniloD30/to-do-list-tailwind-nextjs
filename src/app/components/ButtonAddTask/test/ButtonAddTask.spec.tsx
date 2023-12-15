import { fireEvent, render, screen } from "@testing-library/react";
import ButtonAddTask from "../index";
import "@testing-library/jest-dom";

describe("ButtonAddTask", () => {
  it("ButtonAddTask open modal", () => {
    render(<ButtonAddTask />);

    fireEvent.click(
      screen.getByRole("button", {
        name: /adicionar tarefa icon\-add/i,
      })
    );
   
    expect(screen.getByText(/título/i)).toBeInTheDocument()
    expect(screen.getByText(/descrição/i)).toBeInTheDocument()
  });
  
});
