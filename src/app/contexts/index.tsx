import { LoginContextProvider } from "../contexts/LoginContext";
import { TaskContextProvider } from "../contexts/TaskContext";
import { ReactNode } from "react";
import { Task } from "../interfaces/TaskInterface";
import { User } from "../interfaces/LoginInterface";

interface Props {
  children: ReactNode;
  initialValueLogin: User;
  initiValueTask: Task[];
}
export default function Contexts({
  children,
  initialValueLogin,
  initiValueTask,
}: Props) {
  return (
    <LoginContextProvider modalInitialValue={initialValueLogin}>
      <TaskContextProvider modalInitialValue={initiValueTask}>
        {children}
      </TaskContextProvider>
    </LoginContextProvider>
  );
}
