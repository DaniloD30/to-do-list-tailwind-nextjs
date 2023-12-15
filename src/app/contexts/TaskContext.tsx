"use client";
import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useState,
} from "react";
import { Task } from "../interfaces/TaskInterface";

interface TaskContextData {
  handleAddTask: (data: Task) => void;
  handleRemoveTask: (id: string) => void;
  handleFilterTask: (type: "all" | "done" | "pending") => void;
  handleDoneTask: (index: number) => void;
  typeFilter: "all" | "done" | "pending";
  task: Task[];
}

interface TaskContextProviderProps {
  children: ReactNode;
  modalInitialValue: Task[];
}

export const TaskContext = createContext({} as TaskContextData);

export function TaskContextProvider({
  children,
  modalInitialValue,
}: TaskContextProviderProps) {
  const [task, setTask] = useState<Task[]>(modalInitialValue);
  const [typeFilter, setTypeFilter] = useState<"all" | "done" | "pending">(
    "all"
  );

  const handleAddTask = useCallback((data: Task) => {
    setTask((prevState) => [...prevState, data]);
  }, []);

  const handleRemoveTask = useCallback(
    (id: string) => {
      const newArr = task.filter((a) => a.id !== id);
      setTask(newArr);
    },
    [task]
  );

  const handleFilterTask = useCallback(
    (type: "all" | "done" | "pending") => {
      const newArr = [...task];

      const updatedTasks: Task[] = newArr.map((element) => ({
        ...element,
        filterType:
          type === "all"
            ? "all"
            : type === "done" && !element.isPending
            ? "done"
            : type === "pending" && element.isPending
            ? "pending"
            : "all",
      }));

      setTask(updatedTasks);
      setTypeFilter(type);
      return;
    },
    [task]
  );

  const handleDoneTask = useCallback(
    (index: number) => {
      const newArr = [...task];
      newArr[index].isPending = !newArr[index].isPending;
      newArr[index].filterType = !newArr[index].isPending ? "done" : "pending";
      setTask(newArr);
    },
    [task]
  );

  return (
    <TaskContext.Provider
      value={{
        handleDoneTask,
        handleAddTask,
        handleRemoveTask,
        typeFilter,
        handleFilterTask,
        task,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
}

export function useTask() {
  const context = useContext(TaskContext);

  return context;
}
