"use client";
import CardTask from "../components/Card";
import LayoutContainer from "../components/Layouts";
import FilterSelect from "../components/FilterSelect";
import ButtonAddTask from "../components/ButtonAddTask";
import { useRouter } from "next/navigation";
import { useLogin } from "../contexts/LoginContext";
import { useEffect } from "react";

export default function ToDoList() {
  const router = useRouter();
  const { isUserLoggedIn } = useLogin();

  useEffect(() => {
    if (!isUserLoggedIn()) {
      router.push("/");
    }
  }, [router, isUserLoggedIn]);

  return (
    <>
      <LayoutContainer>
        <div className="flex min-w-full p-4 gap-4 items-center justify-center">
          <ButtonAddTask />
          <FilterSelect />
        </div>
        <hr className="border-x-orange-200 min-w-full" />
        <div className="flex w-11/12 flex-wrap max-h-[25%] overflow-y-scroll p-8 gap-5">
          <CardTask
            title="Estudar"
            description="Estudar matérias de estrutura"
            isPending={false}
          />
          <CardTask
            title="Estudar"
            description="Estudar matérias de estrutura"
            isPending={true}
          />
          <CardTask
            title="Estudar"
            description="Estudar matérias de estrutura"
            isPending={true}
          />
          <CardTask
            title="Estudar"
            description="Estudar matérias de estrutura"
            isPending={true}
          />
        </div>
      </LayoutContainer>
    </>
  );
}
