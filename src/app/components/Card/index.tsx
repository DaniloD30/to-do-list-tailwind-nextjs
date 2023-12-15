"use client";
import { useTask } from "@/app/contexts/TaskContext";
import Image from "next/image";

interface Props {
  id: string;
  title: string;
  description?: string;
  isPending: boolean;
  index: number;
}
enum Icon {
  pending = "/icons/icon-pending.png",
  done = "/icons/icon-done.png",
}

export default function CardTask({
  id,
  title,
  description,
  isPending,
  index,
}: Props) {
  const { handleRemoveTask, handleDoneTask } = useTask();
  return (
    <div className="w-64 h-48 p-2 rounded-sm  bg-white shadow-md">
      <div className="text-2xl font-extrabold text-black text-ellipsis overflow-hidden w-48">
        {title}
      </div>
      <div className="max-h-16 w-[230px] overflow-y-scroll">
        <p className="text-base font-bold text-black break-words">{description}</p>
      </div>
      <div className="flex mt-2 justify-end gap-3">
        <button className="text-black" onClick={() => handleDoneTask(index)}>
          <Image
            src={Icon[isPending ? "pending" : "done"]}
            width={32}
            height={32}
            alt="icon-status"
            loading="lazy"
          />
        </button>
        <button className="text-black" onClick={() => handleRemoveTask(id)}>
          <Image
            src={"/icons/icon-trash.png"}
            width={32}
            height={32}
            alt="icon-pending"
            loading="lazy"
          />
        </button>
      </div>
    </div>
  );
}
