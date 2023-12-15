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
  handleFilterTask: (type: string) => void;
  handleDoneTask: (index:number) => void;
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
    (type: string) => {
      if (type === "done") {
        const newArr = task.filter((a) => !!a.isPending);
        setTask(newArr);
        return;
      }

      const newArr = task.filter((a) => !a.isPending);
      setTask(newArr);
    },
    [task]
  );

  const handleDoneTask = useCallback(
    (index: number) => {
      const newArr = [...task];
      newArr[index].isPending = !newArr[index].isPending
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
