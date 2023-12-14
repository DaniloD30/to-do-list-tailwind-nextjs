"use client";
import { ReactNode } from "react";

interface ModalType {
  children?: ReactNode;
  isOpen: boolean;
  toggle: () => void;
}

export default function Modal(props: ModalType) {
  return (
    <>
      {props.isOpen && (
        <div
          className="flex justify-center 
          items-center z-50 w-screen 
          min-h-screen absolute top-0 bg-[#ffec9bd6]"
          onClick={props.toggle}
        >
          <div
            className="block w-1/2 h-1/2 p-4 rounded-2xl bg-white"
            onClick={(e) => e.stopPropagation()}
          >
            {props.children}
          </div>
        </div>
      )}
    </>
  );
}
