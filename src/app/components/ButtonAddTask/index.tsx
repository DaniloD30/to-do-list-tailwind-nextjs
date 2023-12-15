"use client";
import { useCallback, useState } from "react";
import Modal from "../Modal";
import { Form } from "../Form";
import Image from "next/image";

export default function ButtonAddTask() {
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);

  const toggle = useCallback(() => {
    setIsOpenModal(!isOpenModal);
  }, [isOpenModal]);

  return (
    <>
      <Modal isOpen={isOpenModal} toggle={toggle}>
        <Form toggle={toggle} />
      </Modal>
      <button
        data-testid="addButton"
        onClick={toggle}
        className=" flex items-center justify-center gap-2 w-56 h-10 rounded-xl bg-black shadow-md hover:bg-slate-500"
      >
        Adicionar Tarefa
        <Image
          src={"/icons/icon-add.png"}
          width={32}
          height={32}
          alt="icon-add"
          loading="lazy"
        />
      </button>
    </>
  );
}
