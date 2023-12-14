"use client";
import Image from "next/image";
import Modal from "../components/Modal";
import { Form } from "../components/Form";
import { useCallback, useState } from "react";
import CardTask from "../components/Card";
import LayoutContainer from "../components/Layouts";

export default function ToDoList() {
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);

  const toggle = useCallback(() => {
    setIsOpenModal(!isOpenModal);
  }, [isOpenModal]);

  return (
    <>
      <Modal isOpen={isOpenModal} toggle={toggle}>
        <Form toggle={toggle} />
      </Modal>
      <LayoutContainer>
        <div className="flex min-w-full p-4 gap-4 items-center justify-center">
          <button
            onClick={toggle}
            className=" flex items-center justify-center gap-2 w-56 h-10 rounded-xl bg-black shadow-md hover:bg-slate-500"
          >
            Adicionar Tarefa
            <Image
              src={"/icons/icon-add.png"}
              width={32}
              height={32}
              alt="icon-add"
            />
          </button>
          <button className="w-56 h-10 rounded-xl bg-black shadow-md hover:bg-slate-500">
            Tarefas Concluidas
          </button>
          <button className="w-56 h-10 rounded-xl bg-black shadow-md hover:bg-slate-500">
            Tarefas Pendentes
          </button>
        </div>
        <hr className="border-x-orange-200 min-w-full" />
        <div className="flex min-w-full p-8 gap-5">
          {/* Component card */}
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
