import Image from "next/image";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}
export default function LayoutContainer({ children }: Props) {
  return (
    <>
      <div
        className="flex min-h-screen 
    flex-col items-center"
      >
        <header className="flex flex-col h-20 justify-center min-w-full bg-yellow-200 items-center">
          <h3 className="font-mono text-4xl text-black font-extrabold">
            To do List
          </h3>
        </header>
        <hr className="border-x-orange-200 min-w-full" />
        {children}
        <footer className="flex flex-col h-96 justify-end">
          <Image
            src="/images/grupo-acert.svg"
            alt="Logo"
            width={130}
            height={130}
            loading="lazy"
          />
        </footer>
      </div>
    </>
  );
}
