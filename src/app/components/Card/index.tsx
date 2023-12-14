"use client";
import Image from "next/image";

interface Props {
  title: string;
  description: string;
  isPending: boolean;
}
enum Icon {
  pending = "/icons/icon-pending.png",
  done = "/icons/icon-done.png",
}

export default function CardTask({ title, description, isPending }: Props) {
  return (
    <div className="w-64 h-48 p-2 rounded-sm  bg-white shadow-md">
      <div className="text-2xl font-extrabold text-black">{title} 1</div>
      <div className="text-base font-bold text-black">{description}</div>
      <div className="flex mt-2 justify-end gap-3">
        <button className="text-black">
          <Image
            src={Icon[isPending ? "pending" : "done"]}
            width={32}
            height={32}
            alt="icon-status"
          />
        </button>
        <button className="text-black">
          <Image
            src={"/icons/icon-trash.png"}
            width={32}
            height={32}
            alt="icon-pending"
          />
        </button>
      </div>
    </div>
  );
}
